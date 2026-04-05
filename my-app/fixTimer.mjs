import fs from 'fs';
import path from 'path';

const assignmentsDir = path.join(process.cwd(), 'src', 'components', 'Assignment');

fs.readdirSync(assignmentsDir).forEach(file => {
  if (!file.endsWith('.jsx')) return;
  const filePath = path.join(assignmentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Fix Timer signature
  content = content.replace(/function Timer\(\{ initialMinutes = 10 \}\)/g, 'function Timer({ initialMinutes = 10, isSubmitted })');
  
  // Fix Timer component call
  content = content.replace(/<Timer initialMinutes=\{10\} \/>/g, '<Timer initialMinutes={10} isSubmitted={isSubmitted} />');

  // For assignments that were using the standard HTMLassign format which had inline timer:
  // if (secondsLeft <= 0 || isSubmitted) return; 
  // It handles both cases where Timer is extracted or inline securely if isSubmitted is mapped.

  fs.writeFileSync(filePath, content, 'utf-8');
});
