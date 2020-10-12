export class Wallet {

  private money: number;


  constructor(moneyAtStart: number) {
    this.money = moneyAtStart;


  }


  public getMoney = (): number => this.money;

  public addMoneyToWallet(amountToAdd: number): void {
    this.money += amountToAdd;
  }


   public subtractMoneyFromWallet(amountToSubtract: number): void {
    this.money -= amountToSubtract;
  }


  public checkCanPlay(bid: number): boolean {
    if ((this.money - bid) >= 0) {
      return true;
    }

    return false;
  }

}
