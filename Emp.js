const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS = 10;
const WAGE_PER_HOUR = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
function getWorkingHours(empCheck) 
{
  switch (empCheck) {
    case 1:
      return PART_TIME_HRS;
    case 2:
      return FULL_TIME_HRS;
    default:
      return 0;
  }
}
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
  totalWorkingDays++;
  
  let empCheck = Math.floor(Math.random() * 3); 
  let empHrs = getWorkingHours(empCheck);
  
  totalEmpHrs += empHrs;
  
  let empWage = totalEmpHrs * WAGE_PER_HOUR;
  console.log("Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
}
