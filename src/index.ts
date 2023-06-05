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

const EXCHANGE = [
  {"from": "EUR" , "to" : "USD" , "rate" : 1.2     },
  {"from": "USD" , "to" : "EUR" , "rate" : 0.82    },
  {"from": "USD" , "to" : "KRW" , "rate" : 1100    },
  {"from": "KRW" , "to" : "USD" , "rate" : 0.0009  },
  {"from": "EUR" , "to" : "KRW" , "rate" : 1344    },
  {"from": "KRW" , "to" : "EUR" , "rate" : 0.00073 }  
]

export function createMoney (amount: number, currency : Currency) : Money {

  const multiply = (quantity: number) => createMoney (amount * quantity , currency);

  const exchange = (toCurrency : Currency) => {
    if (toCurrency === currency) return createMoney(amount, currency);
    const exchangeRate = EXCHANGE.find(({from, to}) => from === currency && to === toCurrency)?.rate as number;
    return createMoney(amount * exchangeRate , toCurrency);
  }

  const add = (money: Money) => {
    return createMoney(amount + money.exchange(currency).amount , currency)
  }

  return {
    amount : amount,
    currency: currency,
    multiply: multiply,
    divide: (quantity: number) => multiply(1 / quantity),
    add: add,
    exchange: exchange,
    toEqual: (money: Money) =>
    money.amount === amount && money.currency === currency,
    logAmount : () =>`${amount} ${currency}`
  }

}
