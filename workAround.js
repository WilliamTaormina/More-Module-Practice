import {
  getCadre,
  calculateTax,
  getBenefits,
  calculateBonus,
  reimbursementEligibility
} from "./employee";

import Employee from "./employee";

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log("Cadre: " + getCadre());
  console.log("Tax: " + calculateTax());
  console.log("Benefits: " + getBenefits());
  console.log("Bonus: " + calculateBonus());
  console.log(
    "Reimbursement Eligibility: " + reimbursementEligibility() + "\n"
  );
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

/* ask Raj and Rohit: Why am I getting an "SyntaxError: Unexpected token import here?
stackOverflow is saying it's because I'm ES6 syntax, but my local environment isn't set up for it. 
*/
