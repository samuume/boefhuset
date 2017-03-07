/**
 * Created by zongy on 05-03-2017.
 */
import { Injectable } from '@angular/core';
import {IColdDrinks, IHotDrinks, ICoffee, IDessert, ICocktails} from './drinks-interface';
import {COLDDATA, HOTDRINKSDATA, COFFEEDATA, DESSERTDATA, COCKTAILDATA} from './drinks-data';

@Injectable()

export class DrinksDataService {
  getColdDrinks() : IColdDrinks[] {
    return COLDDATA;
  }
  getHotDrinks() : IHotDrinks[] {
    return HOTDRINKSDATA;
  }
  getCoffee() : ICoffee[] {
    return COFFEEDATA;
  }
  getDessert() : IDessert[] {
    return DESSERTDATA;
  }
  getCocktails() : ICocktails[] {
    return COCKTAILDATA;
  }
}
