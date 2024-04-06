#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t Wellcome To CodeWithNoor - Todo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.bgBlueBright("Enter your New Task :")
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task} Task added in todo-list successfully`);
    let addTaskMore = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "False"
        }
    ]);
    conditions = addTaskMore.addmore;
}
console.log("Your updated Todo-list:", todolist);
