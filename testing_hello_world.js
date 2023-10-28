const fs = require("node:fs");
const sh = require("superheroes");
const moment = require("moment");
const chalk = require("chalk");

fs.writeFileSync("test_file.txt", "Hi there...");
fs.appendFileSync("test_file.txt", "I'm Khaing Thazin");

const time = new Date();
const parsedTime = moment(time).format("h:mm:ss");

console.log(chalk.blue(sh.random()));
console.log(parsedTime);