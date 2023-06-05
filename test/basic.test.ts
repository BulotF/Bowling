import { assert, describe, it } from "vitest";
import {createMoney} from "../src";
import type { Currency, Money } from "../src";

describe("vérification des montants multiplié", () => {
  const amount1 = {amount: 5 , currency : "USD" as Currency } ;
  const amount2 = {amount: 10 , currency : "EUR"  as Currency} ;
  const amount3 = {amount: 4002 , currency : "KRW"  as Currency} ;


  it("5 USD x 2 = 10 USD", () => {
    assert(createMoney(amount1.amount, amount1.currency).multiply(2).toEqual(createMoney(10,"USD")));
  });
   it("10 EUR x 2 = 20 EUR", () => {
    assert(createMoney(amount2.amount, amount2.currency).multiply(2).toEqual(createMoney(20,"EUR")));
  });
  it("4002 KRW / 4 = 1000.5 KRW", () => {
    assert(createMoney(amount3.amount, amount3.currency).divide(4).toEqual(createMoney(1000.5,"KRW")));
  });
});

describe("vérification des conversions", () => {
  const amount5USD = {amount: 5 , currency : "USD" as Currency } ;
  const amount10USD = {amount: 10 , currency : "USD" as Currency } ;
  const amount10EUR = {amount: 10 , currency : "EUR" as Currency } ;

  it("5 USD + 10 USD = 15 USD", () => {
    assert(createMoney(amount5USD.amount, amount5USD.currency).add(createMoney(amount10USD.amount, amount10USD.currency)).toEqual(createMoney(15,"USD")));
  });
  it("5 USD + 10 EUR = 17 USD", () => {
    assert(createMoney(amount5USD.amount, amount5USD.currency).add(createMoney(amount10EUR.amount, amount10EUR.currency)).toEqual(createMoney(17,"USD")));
  });
  it("1 USD + 1100 KRW = 2200 KRW", () => {
    assert.equal(createMoney(1, "USD").add(createMoney(1100, "KRW")).exchange("KRW").logAmount(),"2200 KRW");
  });

  



});
