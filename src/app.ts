import dotenv from "dotenv";
import { AlpacaClient, AlpacaStream } from "@master-chief/alpaca";

const config = dotenv.config({ path: `.${process.env.IS_PAPER}.env` });
const alpacaClient = new AlpacaClient({
  credentials:{
    key: config.parsed ? config.parsed.TRADE_KEY_ID : "undefined",
    secret: config.parsed ? config.parsed.TRADE_SECRET : "undefined",
    paper: process.env.IS_PAPER === "paper",
  },
  rate_limit: true,
});

alpacaClient.placeOrder({
  symbol:'NIO',
  qty: 1,
  side: 'buy',
  type: 'market',
  time_in_force: 'day'
}).then((order) => {
  console.log(order)
})