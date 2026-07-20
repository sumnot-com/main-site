import { readFileSync, existsSync } from "node:fs";

const required = ["public/index.html", "public/styles.css", "public/app.js", "public/logo.png", "server.js"];
for (const file of required) {
  if (!existsSync(file)) throw new Error(`Missing required file: ${file}`);
}

const html = readFileSync("public/index.html", "utf8");
const js = readFileSync("public/app.js", "utf8");
for (const text of ["Directory", "Information", "Git directory", "Mac OS", "Linux OS", "Windows"]) {
  if (!html.includes(text)) throw new Error(`Missing required content: ${text}`);
}
if ((js.match(/category:/g) || []).length !== 15) throw new Error("Expected exactly 15 software entries");
console.log("Site validation passed: all files and 15 software entries are present.");
