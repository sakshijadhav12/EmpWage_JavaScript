const Is_FullTime = 1;
const Is_PartTime = 2;
const WagePerHr = 20;
const PartTimeHrs = 4;
const FullTimeHrs = 8;
let empwage = 0;

function getWorkingHrs() {
  let empInput = Math.floor((Math.random() * 10) % 3);
  console.log("random input is " + empInput);

  switch (empInput) {
    case Is_FullTime: 
      return FullTimeHrs;
    case Is_PartTime: 
      return PartTimeHrs;
    default: 
      return 0;
  }
}

let empHrs = getWorkingHrs(); 
empwage = empHrs * WagePerHr;
console.log("daily emp wage is: " + empwage);
