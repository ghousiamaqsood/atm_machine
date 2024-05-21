#!/usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1233;

let pinAnswer = await inquirer.prompt([

  {
    name: "pin",
    type: "number",
    message: "Enter your pin code:",
  }
])

if (pinAnswer.pin === myPin)

  console.log(" Your pin is correct");

let operationAns = await inquirer.prompt([
  {
    name: "opration",
    type: "list",
    message: " please Select an option:",
    choices: ["Withdraw Amount", "check Balance", "check balance"],
  }])

// if user select withdraw
if (operationAns.operation === "Withdraw Amount") {
  let amouuntAns = await inquirer.prompt([

    {
      name: "amount",
      type: "number",
      message: "Enter Your Amount",
      choices: ["Withdraw Amount", "fast Cash", "check Balance"]

    }])

  if (amouuntAns.amount <= myBalance) {
    let balance = myBalance - amouuntAns.amount;
    console.log(` The Remaining Balance is ${balance}`);

  }
  else {

    console.log(` You Have Insuficient Balance`);
  }
}

// if useer selet fast cash

else if (operationAns.operation === "fast cash") {
  let fastcashAns = await inquirer.prompt([

    {
      name: "amount",
      type: "list",
      message: "select amount:",
      choices: [5000, 25000, 30000, 50000]
    }
  ]
  )
}
else {
  console.log(" Your pin is Incorret");
}








































































































































