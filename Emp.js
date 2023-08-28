const Is_FullTime = 1;
const Is_PartTime =2;
const WagePerHr = 20;
let empHrs =0;
let empwage = 0;
let empInput = Math.floor((Math.random() * 10)%3);
console.log("random input is "+ empInput);
if(Is_FullTime==empInput)
    {  empHrs = 8;
    console.log("Employee is Fulltime employee  and emphrs are " + empHrs);
    }
else if (Is_PartTime==empInput)
{
   empHrs = 4;
    console.log("Employee is Part time employee and emphrs are " + empHrs);
    
}
else
{
  console.log("Employee is absent and emphrs are "+empHrs);
}

empwage = empHrs*WagePerHr;
console.log("Daily Employee wage is "+ empwage);

   
   
    


