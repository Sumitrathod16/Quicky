import fs from 'fs';
import path from 'path';

const assignmentsDir = path.join(process.cwd(), 'src', 'components', 'Assignment');

fs.readdirSync(assignmentsDir).forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(assignmentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Change handleSubmit to not await the backend call so UI updates instantly
  content = content.replace(/    if \(user\?\.uid\) \{\s*await submitAssignment\(([^)]+)\);\s*\}\s*setIsSubmitted\(true\);\s*setIsSubmitting\(false\);/g, 
`    setIsSubmitted(true);
    setIsSubmitting(false);
    
    if (user?.uid) {
      submitAssignment($1).catch(err => console.error("Failed to sync score:", err));
    }`);

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Fixed assignment submission speed');
