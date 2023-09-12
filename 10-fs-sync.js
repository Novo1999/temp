const { readFileSync, writeFileSync } = require("fs");
console.log("start");
// Read two files

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// console.log(`FIRST: ${first},\nSECOND: ${second}`);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done");
console.log("Starting the next one");
