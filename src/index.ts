export type Currency = "USD" | "EUR" | "KRW";

export type Money = {
  amount : number ;
  currency : Currency;
  multiply : (multiplier: number) => Money;
  divide : (multiplier: number) => Money;
  add : (money : Money) => Money;
  exchange: (toCurrency : Currency) => Money;
  toEqual: (money : Money) => boolean;
  logAmount : () => string;
};

type Conversion = Array<{from : Currency, to : Currency, rate : number}>;

const EXCHANGE : Conversion = [
  {"from": "EUR" , "to" : "USD" , "rate" : 1.2     },
  {"from": "USD" , "to" : "EUR" , "rate" : 0.82    },
  {"from": "USD" , "to" : "KRW" , "rate" : 1100    },
  {"from": "KRW" , "to" : "USD" , "rate" : 0.0009  },
  {"from": "EUR" , "to" : "KRW" , "rate" : 1344    },
  {"from": "KRW" , "to" : "EUR" , "rate" : 0.00073 }  
] ;

export function createMoney (amount: number, currency : Currency) : Money {


  const exchange = (toCurrency : Currency) => {
    if (toCurrency === currency) return createMoney(amount, currency);
    const exchangeRate = EXCHANGE.find(({from, to}) => from === currency && to === toCurrency)?.rate;
    return createMoney(amount * ( exchangeRate || 0) , toCurrency);
  }

  cosnt thisMoney: Money = {
    amount,
    currency,
    "multiply": quantity => createMoney (amount * quantity , currency),
    "divide": quantity => money.multiply(1 / quantity),
    "add": money => createMoney(thisMoney.amount + money.exchange(currency).amount , currency),
    exchange,
    "toEqual": (money) =>
    money.amount === amount && money.currency === currency,
    "logAmount" : () =>`${amount} ${currency}`
  }
  
  retrun money;

}
