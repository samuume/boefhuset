/**
 * Created by zongy on 05-03-2017.
 */
import { Component, OnInit } from '@angular/core';
import { DrinksDataService } from "./drinks-data.service";
import {IColdDrinks, IHotDrinks, ICoffee, IDessert, ICocktails} from "./drinks-interface";

@Component ({
  selector: 'drinks',
  templateUrl: './app/drinks/drinks.html'
})

export class DrinksComponent implements OnInit {
  colds: IColdDrinks[];
  hots: IHotDrinks[];
  coffees: ICoffee[];
  desserts: IDessert[];
  cocktails: ICocktails[];

  constructor(private drinksDataService: DrinksDataService) {}

  ngOnInit() {
    this.colds = this.drinksDataService.getColdDrinks();
    this.hots = this.drinksDataService.getHotDrinks();
    this.coffees = this.drinksDataService.getCoffee();
    this.desserts = this.drinksDataService.getDessert();
    this.cocktails = this.drinksDataService.getCocktails();
  }
}
