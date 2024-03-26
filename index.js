// Helper function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example of usage:
  const testYear = 2024;
  if (isLeapYear(testYear)) {
    console.log(`${testYear} is a leap year.`);
  } else {
    console.log(`${testYear} is not a leap year.`);
  }
  
