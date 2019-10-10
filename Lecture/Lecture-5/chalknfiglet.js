var chalk=require("chalk");
var figlet=require("figlet");
console.log(chalk.green("Green text"));
console.log(chalk.red("Red text"));
console.log(chalk.blue("Blue text"));
console.log(chalk.magenta("magenta text"));
console.log(chalk.bgCyan("Cyan background text"));
console.log(chalk.red(figlet.textSync("text")));