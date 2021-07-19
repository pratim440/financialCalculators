const sipCalculator = (p, r, n, df) => {
  if (!df) df = 12;
  let i = r / (df * 100);
  let results = {
    inv: [],
    returns: 1,
    time: [],
    totalVal: [],
  };

  for (let num = 0; num <= n * df; num += df) {
    results.inv.push(p * num);
    results.time.push(num);
    let fv = Math.round(p * ((Math.pow(1 + i, num) - 1) / i) * (1 + i));
    results.totalVal.push(fv);
  }
  results.returns = results.totalVal[n] - results.inv[n];
  return results;
};

const lumpsumCalculator = (p, r, n, cf) => {
  if (!cf) cf = 1;
  let results = {
    inv: [],
    returns: 1,
    time: [],
    totalVal: [],
  };
  for (let num = 0; num <= n; num++) {
    results.inv.push(p);
    results.time.push(num);
    let fv = Math.round(p * Math.pow(1 + r / (100 * cf), num * cf));
    results.totalVal.push(fv);
  }
  results.returns = results.totalVal[n] - p;
  return results;
};

const goalLumpsumCalculator = (fv, r, n) => {
  const lumpsumAmount = Math.round(fv / Math.pow(1 + r / 100, n));
  return { ...lumpsumCalculator(lumpsumAmount, r, n), lumpsumAmount };
};

const goalSipCalculator = (fv, r, n) => {
  let i = r / 1200;
  let sipAmount = Math.round(
    (fv / ((Math.pow(1 + i, n * 12) - 1) / i)) * (1 - i)
  );
  return { ...sipCalculator(sipAmount, r, n), sipAmount };
};

const timeDurationLumpsum = (fv, r, p) => {
  const duration = Math.round(Math.log(fv / p) / Math.log(1 + r / 100));
  return { ...lumpsumCalculator(p, r, duration), duration };
};

const timeDurationSip = (fv, r, p) => {
  const i = r / 1200;
  const res = (fv * i) / (p * (1 + i)) + 1;
  const duration = Math.round(Math.log(res) / Math.log(1 + i) / 12);
  return { ...sipCalculator(p, r, duration), duration };
};

const swpCalculator = (pv, wpm, r, n) => {
  r = r / 1200;
  let results = { startingBal: [], endingBal: [], time: [] };
  let beg = pv,
    end = 0;
  for (let i = 1; i <= n * 12; i++) {
    end = Math.round(beg - wpm + (beg - wpm) * r);
    if (i % 12 == 0) {
      results.endingBal.push(end);
      results.startingBal.push(beg);
      results.time.push(i);
    }
    beg = end;
  }
  return results;
};

const ssyCalculator = (p, r) => {
  const sipRet = sipCalculator(p, r, 15, 1);
  const sipFv = sipRet.totalVal[15];
  const fv = lumpsumCalculator(sipFv, 7.6, 6);
  sipRet.totalVal.pop();
  const maturityVal = [...sipRet.totalVal, ...fv.totalVal];
  const invested = sipRet.inv[15];
  const time = [...sipRet.time, 16, 17, 18, 19, 20, 21];
  return {
    inv: sipRet.inv,
    totalVal: maturityVal,
    returns: fv.totalVal[6] - invested,
    time,
  };
};

const investmentPlanner = (sal, age, invVal) => {
  let idealInvestment = (25 * sal) / 100;
  let deficit, equityAmount, debtAmount;
  deficit = idealInvestment - invVal;
  if (invVal >= idealInvestment) {
    idealInvestment = invVal;
    deficit = 0;
  }
  equityAmount = ((100 - age) * idealInvestment) / 100;
  debtAmount = idealInvestment - equityAmount;
  return { idealInvestment, deficit, equityAmount, debtAmount };
};

const cagrReturnCalculator = (initialVal, endingVal, period) => {
  const res = (Math.pow(endingVal / initialVal, 1 / period) - 1) * 100;
  return res.toFixed(2);
};

const absoluteReturnCalculator = (initialVal, endingVal) => {
  const res = ((endingVal - initialVal) / initialVal) * 100;
  return res.toFixed(2);
};

const emiCalculater = (p, r, n) => {
  r = r / 1200;
  n = n * 12;
  const emi = Math.round(
    (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );

  return { emi, totalInterest: emi * n - p, totalPayment: emi * n };
};

const gstExclusiveCalculaor = (amount, gstRate) => {
  const gst = (amount * gstRate) / 100;
  return { gst: gst.toFixed(2), postGSTAmount: (amount + gst).toFixed(2) };
};

const gstInclusiveCalculaor = (amount, gstRate) => {
  const preGSTAmount = (amount * gstRate) / (100 + gstRate);
  return {
    preGSTAmount: (amount - preGSTAmount).toFixed(2),
    gst: preGSTAmount.toFixed(2),
  };
};

const inflationFutureValueCalculator = (p, r, n) => {
  const val = p * Math.pow(1 + r / 100, n);
  return Math.round(val);
};

const inflationRateCalculator = (p, fv, n) => {
  const val = Math.log(fv / p) / Math.log(10) / n;
  const res = (Math.pow(10, val) - 1) * 100;
  return res.toFixed(2);
};

const ruleOf72 = (rate) => {
  return Math.round(72 / rate);
};

const ppfCalculator = (p, r, n, df) => {
  return sipCalculator(p, r, 15, df);
};

const liquidityRatio = (assets, debt) => {
  return (assets / debt).toFixed(2);
};

const budgetCalculator = (sal) => {
  return {
    needs: (50 * sal) / 100,
    wants: (30 * sal) / 100,
    investment: (20 * sal) / 100,
  };
};

const simpleInterestCalculator = (p, r, n) => {
  let results = {
    inv: [],
    returns: 1,
    time: [],
    totalVal: [],
  };
  for (let i = 0; i <= n; i++) {
    results.inv.push(p);
    results.totalVal.push(p + (p * r * i) / 100);
    results.time.push(i);
  }
  results.returns = results.totalVal[n] - p;
  return results;
};

const compundInterestCalculator = (lumpsumAmt, sipAmt, r, n, cf, df) => {
  const sipResult = sipCalculator(sipAmt, r, n, df);
  const lumpsumResult = lumpsumCalculator(lumpsumAmt, r, n, cf);
  const totalInvested = sipResult.inv[n] + lumpsumResult.inv[n];
  const totalFutureValue = sipResult.totalVal[n] + lumpsumResult.totalVal[n];
  const totalReturns = totalFutureValue - totalInvested;
  return {
    sipResult,
    lumpsumResult,
    totalInvested,
    totalReturns,
    totalFutureValue,
  };
};

const retirementCalculator = (ca, ra, le, r, ae, inf) => {
  let infVal = inflationFutureValueCalculator(ae, inf, ra - ca) * 12;
  let fv = 0;
  let i = (1 + r / 100) / (1 + inf / 100) - 1;
  for (let x = 1; x <= le - ra; x++) {
    fv += infVal / Math.pow(1 + i, x);
  }
  return {
    ...goalSipCalculator(Math.round(fv), r, ra - ca),
    annulaExpenseWithInflation: infVal,
    corpus: Math.round(fv),
  };
};

const fdCalculator = (p, r, n, cf) => {
  return lumpsumCalculator(p, r, n, cf);
};
const rdCalculator = (p, r, n) => {
  return sipCalculator(p, r, n);
};

const childEducationCalculator = (currAge, highAge, r, cost, infRate) => {
  const inf = inflationFutureValueCalculator(cost, infRate, highAge - currAge);
  return goalSipCalculator(inf, r, highAge - currAge);
};
const ans = childEducationCalculator(5, 18, 12, 100000, 6);
console.log(ans);
