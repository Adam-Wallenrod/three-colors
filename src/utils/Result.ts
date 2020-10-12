export class Result {

  constructor() {

  }

  static moneyWonInGame(result: boolean, bid: number) {
    if (result) {
      return bid * 3;
    }
    return 0;
  }


  static checkWin(draw: string[]): boolean {

    let counter = 0;
    for (const color of draw) {
      // all the same colors
      if (draw.filter(singleColor => singleColor === color).length === draw.length) {
        return true;
      }

      // all unique colors
      if (draw.filter(singleColor => singleColor === color).length === 1) {
          counter++;
      }
    }

    return counter === draw.length;

  }


}
