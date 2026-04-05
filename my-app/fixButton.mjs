import fs from 'fs';
import path from 'path';

const coursesDir = path.join(process.cwd(), 'src', 'components', 'courses');

fs.readdirSync(coursesDir).forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(coursesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if the file is missing the complete button completely
  if (!content.includes('✓ Completed')) {
    const buttonCode = `
                  {item.id <= 5 && (
                    <div style={{ marginTop: '20px', marginBottom: '15px' }}>
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
                  )}`;
                  
    // Safely inject it at the top of the extra-info compartment
    content = content.replace(/<div className="extra-info">/g, `<div className="extra-info">${buttonCode}`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Fixed missing button in: ' + file);
  }
});
