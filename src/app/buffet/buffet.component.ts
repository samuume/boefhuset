/**
 * Created by zongy on 04-03-2017.
 */
import { Component, OnInit } from '@angular/core';
import { BuffetDataService } from './buffet-data.service';
import { IBuffet, IAppetizers, IGrill, IHotdishes, ISauce, IPotato } from "./buffet-interface";

@Component ({
  selector: 'buffet',
  templateUrl: './app/buffet/buffet.html'
})

export class BuffetComponent implements OnInit {
  buffets: IBuffet[];
  appetizers: IAppetizers[];
  grills: IGrill[];
  dishes: IHotdishes[];
  sauces: ISauce[];
  potatoes: IPotato[];


  constructor(private buffetDataService: BuffetDataService) {}

  ngOnInit() {
    this.buffets = this.buffetDataService.getBuffetData();
    this.appetizers = this.buffetDataService.getApptizData();
    this.grills = this.buffetDataService.getGrillData();
    this.dishes = this.buffetDataService.getDishesData();
    this.sauces = this.buffetDataService.getSauceData();
    this.potatoes = this.buffetDataService.getPotatoData();
  }
}
