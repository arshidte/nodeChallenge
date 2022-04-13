import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  Name: {
    type: String,
  },
  CurrentMarketPrice: {
    type: Number,
  },
  MarketCap: {
    type: Number,
  },
  StockPE: {
    type: Number,
  },
  DividendYield: {
    type: Number,
  },
  ROCE: {
    type: Number,
  },
  ROEPreviousAnnum: {
    type: Number,
  },
  DebttoEquity: {
    type: Number,
  },
  EPS: {
    type: Number,
  },
  Reserves: {
    type: Number,
  },
  Debt: {
    type: Number,
  },
});

const Company = mongoose.model("Company", companySchema);

export default Company;
