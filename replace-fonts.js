const fs = require("fs");
const path = require("path");

// Function to recursively get all .tsx files
function getAllTsxFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.includes("node_modules")) {
      getAllTsxFiles(fullPath, files);
    } else if (item.endsWith(".tsx")) {
      files.push(fullPath);
    }
  });

  return files;
}

// Get all .tsx files in src directory
const tsxFiles = getAllTsxFiles("./src");

// Replace fonts in each file
tsxFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");

  // Replace font classes
  content = content.replace(/font-canela/g, "font-heading");
  content = content.replace(/font-satoshi/g, "font-body");

  fs.writeFileSync(file, content);
  console.log(`Updated fonts in ${file}`);
});

console.log("Font replacement completed!");
