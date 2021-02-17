// All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
// All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
// All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
// All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)

describe('LeapYears', function () {
  describe('can work out leap years', function () {
    it('if a year is divisible by 400 it is a leap year', function () {
      expect(leapYears(2000)).toBe(true);
    });

    it('if a year is divisible by 100 and not by 400 is not a leap year', function () {
      expect(leapYears(1700)).toBe(false);
    });

    it('if a year is divisible by 4 and not by 100 they are leap years', function () {
      expect(leapYears(2004)).toBe(true);
    });

    it('if a year is not divisible by for it is not a leap year', function () {
      expect(leapYears(2009)).toBe(false);
    });
  });
});
