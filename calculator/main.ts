import inquirer from "inquirer";

let user = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "num1" },
  { message: "enter secondnumber", type: "number", name: "num2" },
  { message: "enter operator", type: "list", name: "operators", choices:["Addition","Subtraction","Multiply","Divide"] },
]);

if(user.operators === "Addition"){
   console.log(user.num1 + user.num2)
}else if(user.operators === "Subtraction"){
    console.log(user.num1 - user.num2)
}else if(user.operators === "Multiply"){
    console.log(user.num1 * user.num2)
}else if(user.operators === "Divide"){
    console.log(user.num1 / user.num2)
}
