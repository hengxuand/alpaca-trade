import dotenv from "dotenv";
import Alpaca from "@alpacahq/alpaca-trade-api";

const config = dotenv.config({ path: `.${process.env.IS_PAPER}.env` });
const alpaca = new Alpaca({
  keyId: config.parsed.TRADE_KEY_ID,
  secretKey: config.parsed.TRADE_SECRET,
  paper: process.env.IS_PAPER === "paper",
});

alpaca.getAccount().then((account) => {
  console.log("Current Account:", account);
});
