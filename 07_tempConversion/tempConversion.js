const ftoc = function(ftemp) {
  ctempraw = (ftemp - 32)*(5/9);
  ctemp = Math.round(ctempraw*10)/10;
  return ctemp;
};

const ctof = function(ctemp) {
  ftempraw = (ctemp*1.8)+32;
  ftemp = Math.round(ftempraw*10)/10;
  return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
