
export class Currency {

  private constructor(private readonly value: string)  {}

  public static from(num: number): Currency {
    return new Currency(num.toFixed(2));
  }

  public formatString(): string { return `$${this.value}` }
}