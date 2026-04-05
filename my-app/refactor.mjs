import fs from 'fs';
import path from 'path';

const coursesDir = path.join(process.cwd(), 'src', 'components', 'courses');
const assignmentsDir = path.join(process.cwd(), 'src', 'components', 'Assignment');

// Refactor Courses
fs.readdirSync(coursesDir).forEach(file => {
  if (!file.endsWith('.jsx') || file === 'Html.jsx') return;
  const filePath = path.join(coursesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('updateProgress')) return; // already done

  const courseName = file.replace('.jsx', '').toLowerCase();

  // 1. Imports
  content = content.replace(/import React, \{ useState \} from 'react';/, "import React, { useState, useEffect } from 'react';\nimport { useAuth } from '../../context/useAuth';");

  // 2. Syllabus function setup
  const replacementSyllabus = `const Syllabus = () => {
  const { profile, updateProgress } = useAuth();
  const [completedChapters, setCompletedChapters] = useState([]);

  useEffect(() => {
    if (profile?.courses?.['${courseName}']?.completed) {
      const numCompleted = Math.floor((profile.courses['${courseName}'].completed / 100) * 5);
      const arr = Array.from({length: numCompleted}, (_, i) => i + 1);
      setCompletedChapters(arr);
    }
  }, [profile]);

  const completeChapter = async (id) => {
    if (!completedChapters.includes(id)) {
      const newCompleted = [...completedChapters, id];
      setCompletedChapters(newCompleted);
      const newProgress = Math.min(100, Math.floor((newCompleted.length / 5) * 100));
      await updateProgress('${courseName}', newProgress);
    }
  };
`;
  content = content.replace(/const Syllabus = \(\) => \{/, replacementSyllabus);

  // 3. Progress bar width inside map
  content = content.replace(/<div className="bar-fill" \/>/g, `<div className="bar-fill" style={{ width: completedChapters.includes(item.id) ? '100%' : '0%' }} />`);
  
  // 4. Update the item.id === 1 condition
  content = content.replace(/\{item\.id === 1 && \(/g, '{item.id <= 5 && (');

  // 5. Append Mark as Complete Button after the resources-section / before extra-info block ends
  // We can inject it below the <p>{item.details}</p> or at the end of the items rendering.
  // Let's replace </p> with </p> followed by the button if it's the item.details
  const buttonCode = `

                  {item.id <= 5 && (
                    <div style={{ marginTop: '20px' }}>
                      <button 
                        onClick={(e) => { e.stopPropagation(); completeChapter(item.id); }}
                        disabled={completedChapters.includes(item.id)}
                        style={{
                          padding: '10px 20px',
                          background: completedChapters.includes(item.id) ? '#10b981' : '#4f46e5',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: completedChapters.includes(item.id) ? 'default' : 'pointer'
                        }}
                      >
                        {completedChapters.includes(item.id) ? '✓ Completed' : 'Mark as Complete'}
                      </button>
                    </div>
                  )}
`;
  // Best anchor: right before the closing </div> of <div className="extra-info">
  // Since we don't know exactly where, we can replace the last `</div>` of the map output. Wait, what is unique?
  // `</div>` followed by `)}` that wraps the extra-info block.
  content = content.replace(/(?:\}\s*<\/div>\s*\)\}\s*<\/div>\s*<\/div>)/g, (match) => {
    // Actually, safer to inject it right after `{item.details && <p>{item.details}</p>}`
    return match; // We'll do a different replace to be safe.
  });

  content = content.replace(/\{item\.details && <p>\{item\.details\}<\/p>\}/g, `{item.details && <p>{item.details}</p>}${buttonCode}`);


  fs.writeFileSync(filePath, content, 'utf-8');
});


// Refactor Assignments
fs.readdirSync(assignmentsDir).forEach(file => {
  if (!file.endsWith('.jsx') || file === 'Htmlassign.jsx') return;
  const filePath = path.join(assignmentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('submitAssignment')) return; // already done

  const componentNameMatch = content.match(/const ([a-zA-Z]+assign) = \(\) => \{/);
  if (!componentNameMatch) return;
  const courseName = file.replace('assign.jsx', '').replace('.jsx', '').toLowerCase();

  // 1. Imports
  content = content.replace(/import React, (\{ useState, useEffect \}|\{useState, useEffect\}) from "react";/, "import React, { useState, useEffect } from \"react\";\nimport { useAuth } from '../../context/useAuth';\nimport { submitAssignment } from '../../services/userService';");
  
  if (!content.includes('import { useAuth }')) {
    // maybe it's `import React, { useState }...` ?
    content = content.replace(/import React, \{ useState \} from "react";/, "import React, { useState, useEffect } from \"react\";\nimport { useAuth } from '../../context/useAuth';\nimport { submitAssignment } from '../../services/userService';");
  }

  // 2. Component hooks
  const hookInject = `const ${componentNameMatch[1]} = () => {\n  const { user } = useAuth();\n  const [isSubmitting, setIsSubmitting] = useState(false);`;
  content = content.replace(new RegExp(`const ${componentNameMatch[1]} = \\(\\) => \\{`), hookInject);

  // 3. useEffect fix
  content = content.replace(/if \(secondsLeft <= 0\) return;/, 'if (secondsLeft <= 0 || isSubmitted) return;');
  content = content.replace(/\[secondsLeft\]\);/, '[secondsLeft, isSubmitted]);');

  // 4. handleSubmit
  const newHandleSubmit = `const handleSubmit = async () => {
    setIsSubmitting(true);
    const score = calculateScore();
    const grade = score >= 9 ? 'A+' : score >= 8 ? 'A' : score >= 6 ? 'B' : score >= 4 ? 'C' : 'F';
    
    if (user?.uid) {
      await submitAssignment(user.uid, {
        name: '${courseName.toUpperCase()} Basics Assignment',
        courseId: '${courseName}',
        score: score,
        total: questionsData.length,
        grade: grade,
        status: 'completed'
      });
    }
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };`;
  content = content.replace(/const handleSubmit = \(\) => \{\s*setIsSubmitted\(true\);\s*\};/, newHandleSubmit);

  // 5. Button props
  content = content.replace(/disabled={currentQuestion === 0}/, 'disabled={currentQuestion === 0 || isSubmitted}');
  content = content.replace(/disabled={currentQuestion === questionsData\.length - 1}/, 'disabled={currentQuestion === questionsData.length - 1 || isSubmitted}');
  
  content = content.replace(/<button onClick=\{handleSubmit\} className="submit-btn">\s*Submit Assignment\s*<\/button>/, `<button onClick={handleSubmit} disabled={isSubmitted || isSubmitting} className="submit-btn">\n          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Submit Assignment'}\n        </button>`);

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Refactor complete!');
