const NUM_OF_WORKING_DAYS = 20;
const WAGE_PER_HOUR = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
let totalEmpHrs = 0;
let totalEmpWage = 0;
function getWorkingHours() {
  let empCheck = Math.floor(Math.random() * 3); // Generates values 0, 1, or 2
  switch (empCheck) {
    case 1:
      return PART_TIME_HRS;
    case 2:
      return FULL_TIME_HRS;
    default:
      return 0;
  }
}
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
  let empHrs = getWorkingHours();
  totalEmpHrs += empHrs;

  let empWage = empHrs * WAGE_PER_HOUR;
  totalEmpWage += empWage;

  console.log("Day " + (day + 1) + " - Total Hrs: " + empHrs + " Emp Wage: " + empWage);
}

console.log("Total Emp Wage for the month: " + totalEmpWage);
