function leapYears(number) {
  if (number % 400 === 0) {
    return true;
  }else if (number % 100 === 0 && number % 400 !== 0) {
    return false;
  }else if (number % 4 === 0 && number % 100 !== 0) {
    return true;
  }else if (number % 4 !== 0) {
    return false;
  }
}
