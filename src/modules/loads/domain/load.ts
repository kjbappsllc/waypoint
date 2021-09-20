import { Currency } from "../../shared/core/currency";

export class Load {
  timeCreated: Date;
  rate: Currency;

  constructor(timeCreated: Date, rate: Currency) {
    this.rate = rate;
    this.timeCreated = timeCreated;
  }
}