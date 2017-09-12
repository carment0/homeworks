function selectCurrency(baseCurrency, rates) {
  return {
    type: "SWITCH_CURRENCY",
    data: {
      baseCurrency,
      rates
    }
  };
}

export default selectCurrency;
