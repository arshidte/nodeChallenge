import Company from "../models/companyModel.js";

export const getCompany = async (req, res) => {
  try {
    const company = await Company.find();

    if (company) {
      res.json({
        Name: company.Name,
      });
    } else {
      res.status(404);
      res.json({ message: "Company not found" });
    }
  } catch (error) {
    res.json(error);
  }
};

export const searchCompany = async (req, res) => {
  try {
    const { Name } = req.params;

    console.log(Name);

    const company = await Company.findOne({ Name });

    console.log(company);

    if (company) {
      res.json({
        Name: company.Name,
        CurrentMarketPrice: company.CurrentMarketPrice,
        MarketCap: company.MarketCap,
        StockPE: company.StockPE,
        DividendYield: company.DividendYield,
        ROCE: company.ROCE,
        ROEPreviousAnnum: company.ROEPreviousAnnum,
        DebttoEquity: company.DebttoEquity,
        EPS: company.EPS,
        Reserves: company.Reserves,
        Debt: company.Debt,
      });
    } else {
      res.status(404);
      res.json({ message: "Data not found" });
    }
  } catch (error) {
    res.json(error);
  }
};
