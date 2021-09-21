import { Currency } from './currency'

describe("Currency Tests", () => {
  it("should format currency correctly", () => {
    const currency: Currency = Currency.from(23.22222);
    expect(currency.formatString()).toBe('$23.22')
  })
})