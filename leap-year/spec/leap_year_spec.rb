# All years divisible by 400 ARE leap years (e.g. 2000 was a leap year)
# All years divisible by 100 but not by 400 are NOT leap years (e.g. 1700, 1800 and 1900 were not leap years)
# All years divisible by 4 and not by 100 ARE leap years (e.g. 2004, 2008 and 2012 were leap years)
# All years not divisible by 4 are NOT leap years (e.g. 2009, 2010 and 2011 were not leap years)
require 'leap_year.rb'

describe 'leap_year' do
  it 'returns true if a year is divisible by 400' do
    expect(leap_year(2000)).to eq(true)
  end
end 
