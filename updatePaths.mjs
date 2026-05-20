import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDir = path.join(process.cwd(), 'src');

walkDir(targetDir, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    const originalContent = fs.readFileSync(filePath, 'utf-8');
    // Replace all relative imports from ./images
    const modifiedContent = originalContent.replace(/(\.\/images\/[^"']+)\.(png|jpe?g)/gi, '$1.webp');
    
    // Also replace loading="lazy" if we want, but let's just do image extension first
    if (originalContent !== modifiedContent) {
      fs.writeFileSync(filePath, modifiedContent, 'utf-8');
      console.log(`Updated ${filePath}`);
    }
  }
});
