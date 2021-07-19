## Installation

```
npm i financialcalculators
```

## Usage

```
const calc = require('financialcalculators')
const result = calc.sipCalculator(1000,12,5);
console.log(result);
```

OR

```
const {sipCalculator} = require('financialcalculators')
const result = sipCalculator(1000,12,5);
console.log(result);
```

## Terminologies

1. p - principal amount
1. r - rate of interest per annum
1. n - number of years
1. cf **(optional), _(defalut value - 1)_** - compound frequency (1(yearly)/2(half-yearly)/4(quarterly)/12(monthly))
1. df **(optional),_(defalut value - 12)_** - depositing frequency (1(yearly)/2(half-yearly)/4(quarterly)/12(monthly))
1. inv[] - array of invested amount upto n years
1. totalVal[] - array of final corpus amount upto n years
1. time[] - array of n/12 upto n years
1. returns - total interest gained
1. sipAmount - sip amount required
1. lumpsumAmount - lumpsum amount required
1. duration - duration required in years
1. fv - future value
1. wpm - withdrawals per month

## What it contains

1. **sipCalculator(p,r,n,cf)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **lumpsumCalculator(p,r,n,cf)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **goalSipCalculator(fv,r,n)**
   returns an object {inv[], totalVal[], returns, time[], sipAmount}
1. **goalLumpsumCalculator(fv,r,n)**
   returns an object {inv[], totalVal[], returns, time[], lumpsumAmount}
1. **timeDurationSip(fv,r,p)**
   returns an object {inv[], totalVal[], returns, time[], duration}
1. **timeDurationLumpsum(fv,r,p)**
   returns an object {inv[], totalVal[], returns, time[], duration}
1. **swpCalculator(p,wpm,r,n)**
   returns an object {startingBal[], endingBal[], time[]}
1. **ssyCalculator(p,r)**[Sukanya Samriddhi Yojna]
   returns an object {inv[], totalVal[],returns, time[]}
1. **investmentPlanner(salary,age,investmentValue)**
   returns an object {idealInvestment, deficit, equityAmount, debtAmount}
1. **cagrReturnCalculator(initialValue,endingValue,period)**
   returns CAGR value in percentage
1. **absoluteReturnCalculator(initialValue,endingValue)**
   returns Absolute returns value in percentage
1. **emiCalculator(p,r,n)**
   returns an object {emi, totalInterest, totalPayment}
1. **gstExclusiveCalculator(amount,gstRate)**
   returns an object {gst, postGSTAmount}
1. **gstInclusiveCalculator(amount,gstRate)**
   returns an object {gst, preGSTAmount}
1. **inflationFutureValueCalculator(p,r,n)**
   returns future value of inflation
1. **inflationRateCalculator(p,r,n)**
   returns rate of inflation
1. **ruleOf72(rateOfInterest)**
   returns duration in years
1. **ppfCalculator(p,r,n,df)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **liquidityRatio(assets, debt)**
   returns liquidity ratio
1. **budgetCalculator(salary)**
   returns an object {needs, wants, investment}
1. **simpleInterestCalculator(p,r,n)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **compundInterestCalculator(lumpsumAmt,sipAmt,r,n,cf,df)**
   returns an object {sipResult[], lumpsumResult[], totalInvested, totalReturns, totalFutureValue}
1. **retirementCalculator(currentAge,retirementAge,lifeExpectancy,r,annualExpense,inflationRate)**
   returns an object {inv[], totalVal[], returns, time[], sipAmount, corpus, annulaExpenseWithInflation}
1. **fdCalculator(p,r,n,cf)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **rdCalculator(p,r,n)**
   returns an object {inv[], totalVal[], returns, time[]}
1. **childEducationCalculator(currentAge,higherEducationAge,r,presentCostOfEducation,inflationRate)**
   returns an object {inv[], totalVal[], returns, time[], sipAmount}
