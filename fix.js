const fs = require('fs');
const files = [
  './src/Pages/DotNetSyllabus.jsx',
  './src/Pages/DotNetSyllabus.css',
  './src/Pages/PythonSyllabus.jsx',
  './src/Pages/PythonSyllabus.css',
  './src/Pages/SoftwareTestingSyllabus.jsx',
  './src/Pages/SoftwareTestingSyllabus.css',
  './src/Pages/OracleSQLSyllabus.jsx',
  './src/Pages/OracleSQLSyllabus.css',
  './src/Pages/OracleDBASyllabus.css',
  './src/Pages/LinuxAdminSyllabus.css',
  './src/Pages/AppSupportSyllabus.css'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('\\n')) {
      content = content.split('\\n').join('\n');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed', file);
    }
  }
});
