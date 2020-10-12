import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Wallet} from '../utils/Wallet';
import {Stats} from '../utils/Stats';
import {Result} from '../utils/Result';
import {Draw} from '../utils/Draw';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('bidInput') bidInput: ElementRef;

  title = 'three-colors-game';
  drawResult: string = '';
  numberOfGames: number = 0;
  numberOfWins: number = 0;
  numberOfLosses: number = 0;

  colorContainers: Element[];


  wallet: Wallet = new Wallet(200);
  stats: Stats = new Stats();


  constructor(private renderer: Renderer2) {

  }


  ngOnInit() {
    console.log('wallet: ', this.wallet);
    console.log('stats: ', this.stats);
  }


  ngAfterViewInit() {
    this.colorContainers = Array.from(document.getElementsByClassName('color'));
    this.colorContainers.forEach(colorElement => {
      this.renderer.setStyle(colorElement, 'background-color', '#80808066');
    });
    console.log('this.colorContainers: ', this.colorContainers);

  }


  draw() {
    let bidInputValue = this.bidInput.nativeElement.value;

    if (!bidInputValue) {
      throw new Error('invalid bid value in input!');
    } else if (!this.wallet.checkCanPlay(bidInputValue)) {
      throw new Error('not enough money to start game');
    }

    // beginning of the bet
    this.wallet.subtractMoneyFromWallet(bidInputValue);

    // draw
    const draw: Draw = new Draw();
    draw.drawResult();
    const resultsOfDraw: string[] = draw.getDrawResult();
    console.log('resultOfDraw: ', resultsOfDraw);

    // rendering results of draw
    resultsOfDraw.forEach((color, index) => {
      this.renderer.setStyle(this.colorContainers[index], 'background-color', color);
    });

    // checking if won
    if (Result.checkWin(resultsOfDraw)) {
      this.wallet.addMoneyToWallet(Result.moneyWonInGame(true, bidInputValue));
    }

    // setting statistics
    this.stats.addGameToStats(Result.checkWin(resultsOfDraw), bidInputValue);
    const currentStats = this.stats.getGameStatistics();
    this.numberOfGames = currentStats[0];
    this.numberOfWins = currentStats[1];
    this.numberOfLosses = currentStats[2];


    // reseting input
    this.bidInput.nativeElement.value = '';

  }


}
