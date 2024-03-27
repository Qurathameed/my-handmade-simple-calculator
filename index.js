#! usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter Second number", type: "number", name: "Secondnumber" },
    { message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "Subtraction", "multiplication", "division"],
    },
]);
// conditional statement
if (asnwer.operator === "addition") {
    console.log(asnwer.firstnumber + asnwer.Secondnumber);
}
else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstnumber - asnwer.Secondnumber);
}
else if (asnwer.operator === "multiplication") {
    console.log(asnwer.firstnumber * asnwer.Secondnumber);
}
else if (asnwer.operator === "division") {
    console.log(asnwer.firstnumber / asnwer.Secondnumber);
}
else {
    console.log("please select valid operator");
}
