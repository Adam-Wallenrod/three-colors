interface statistics {
  win: boolean;
  bid: number;
}

export class Stats {

  private gameResults: statistics[] = [];

  constructor() {


  }


  addGameToStats(win: boolean, bid: number): void {
    const gameResult: statistics = {win, bid};

    this.gameResults.push(gameResult);
  }


  /**
   * Returns array of three numeric arrays,
   * representing :
   *
   * [#ofTotalGames, #Wins, #Losess]
   */
  getGameStatistics(): number[] {
    const numberOfGames: number = this.gameResults.length;
    const numberOfWins: number = (this.gameResults.filter(game => game.win)).length;
    const numberOfLosses: number = numberOfGames - numberOfWins;

    return [numberOfGames, numberOfWins, numberOfLosses];
  }


}
