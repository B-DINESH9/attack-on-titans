const fs = require('fs');
const path = require('path');

function searchFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'package-lock.json') continue;
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            searchFiles(fullPath);
        } else {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.toLowerCase().includes('divya')) {
                console.log('Found in:', fullPath);
            }
        }
    }
}
searchFiles(process.cwd());
