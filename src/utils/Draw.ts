export class Draw {

  private readonly options: string[] = ['red', 'blue', 'green'];
  private results: string[];

  constructor() {


  }

  public drawResult(): void {
    this.results = [];

    for (let i = 0; i < this.options.length; i++) {
      const randomIndex: number = Math.floor(Math.random() * this.options.length);
      const randomColor: string = this.options[randomIndex];
      this.results.push(randomColor);
    }

  }


  public getDrawResult = (): string[] => this.results;

}

