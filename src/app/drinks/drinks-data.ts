/**
 * Created by zongy on 05-03-2017.
 */
import {IColdDrinks, IHotDrinks, ICoffee, IDessert, ICocktails} from './drinks-interface';

export const COLDDATA:IColdDrinks[] = [
  {
    title: "Fadøl",
    info: "Turborg Alm. eller Classic",
    smsize: "Lille",
    smprice: "kr. 35,-",
    mdsize: "ML.",
    mdprice: "kr. 55,-",
    lgsize: "Stor",
    lgprice: "kr. 69,-"
  },
  {
    title: "Mørk øl",
    info: "Jacobsen Braun Ale, Jacobsen Indian Pale Ale",
    smsize: "Lille",
    smprice: "kr. 39,-",
    mdsize: "ML.",
    mdprice: "kr. 59,-",
    lgsize: "",
    lgprice: ""
  },
  {
    title: "Flaskeøl",
    info: "Kinesisk Øl",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 49,-"
  },
  {
    title: "",
    info: "Herald Blåtands Laug",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 70,-"
  },
  {
    title: "",
    info: "Alm. Tuborg På Flaske",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 35,-"
  },
  {
    title: "Sodavand",
    info: "Coca-Cola, Coca-Cola Zero, Carlsberg Sport, Fanta, Schweppes Lemon, Danskvand m/u Citrus",
    smsize: "Lille",
    smprice: "kr. 33,-",
    mdsize: "ML.",
    mdprice: "kr. 48,-",
    lgsize: "Stor",
    lgprice: "kr. 62,-"
  },
  {
    title: "Juice | Mælk",
    info: "Æblejuice, Appelsinjuice, Mælk, Cocio",
    smsize: "Lille",
    smprice: "kr. 33,-",
    mdsize: "ML.",
    mdprice: "kr. 48,-",
    lgsize: "Stor",
    lgprice: "kr. 62,-"
  },
  {
    title: "Cider, flaske",
    info: "Somersby",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 50,-"
  },
  {
    title: "",
    info: "Hyldeblomst",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 50,-"
  },
  {
    title: "Kildevand",
    info: "Kildevand På Flaske",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Pr Flaske",
    lgprice: "kr. 33,-"
  },
  {
    title: "Isvand, kande",
    info: "",
    smsize: "",
    smprice: "",
    mdsize: "",
    mdprice: "",
    lgsize: "Per Person",
    lgprice: "kr. 20,-"
  }
]

export const HOTDRINKSDATA:IHotDrinks[] = [
  {
    title: "Alm. Te Eller Kaffe",
    info: "",
    price: 25
  },
  {
    title: "Varm Kakao",
    info: "Med Flødeskum",
    price: 35
  },
  {
    title: "Cappuccino",
    info: "",
    price: 35
  },
  {
    title: "Kaffe Latte",
    info: "",
    price: 35
  },
  {
    title: "Espresso",
    info: "",
    price: 25
  }
]

export const COFFEEDATA:ICoffee[] = [
  {
    title: "Irish Ice Latte [KOLD]",
    infos: ["2 cl. Tullamore Whiskey", "1 spsk. Ahornsirup", "10 cl. Kold Mælk", "1 Shot Expresso"],
    price: 55
  },
  {
    title: "Irish Latte [VARM]",
    infos: ["2 cl. Tullamore Whiskey", "1 tsk. Rørsukker", "10 cl. Varm Mælk", "1 Shot Expresso"],
    price: 55
  },
  {
    title: "Fransk Kaffe",
    infos: ["Med Cointreau"],
    price: 55
  },
  {
    title: "Irish Coffee",
    infos: ["Med 4 cl. Whiskey"],
    price: 55
  },
  {
    title: "Mexican Coffee",
    infos: ["Med Tequila"],
    price: 55
  },
  {
    title: "Caribbean Coffee",
    infos: ["Med Mørk Rom"],
    price: 55
  },
  {
    title: "Royal Coffee",
    infos: ["Med Cognac"],
    price: 55
  },
  {
    title: "Grønlandsk Kaffe",
    infos: ["Med Whiskey, Kahlua og Grand Marnier"],
    price: 70
  }
]

export const DESSERTDATA:IDessert[] = [
  {
    title: "Is Dessert",
    info: "Tre kugler Is med Flødeskum og Hjemmelavet Chokoladesovs",
    price: 35
  },
  {
    title: "Flamberet Pandekage",
    info: "Med Is",
    price: 69
  },
  {
    title: "Bananasplit",
    info: "Med Hjemmelavet Chokoladesovs",
    price: 59
  }
]

export const COCKTAILDATA:ICocktails[] = [
  {
    title: "Sporran Breeze",
    infos: ["4 cl. Famous Grouse Scotch Whiskey", "2 cl. Passoá Passion Fruit", "10 cl. Appelsinjuice"],
    price: 55
  },
  {
    title: "Tequila Sunrise",
    infos: ["4 cl. Tequila", "1 cl. Rose's Grenadine", "10 cl. Appelsinjuice"],
    price: 55
  },
  {
    title: "Brandbil",
    infos: ["3 cl. Jägermeister", "8 cl. Rød Sodavand"],
    price: 55
  },
  {
    title: "Filur",
    infos: ["4 cl. Vodka", "4 cl. Appelsinjuice", "4 cl. Rød Sodavand"],
    price: 55
  },
  {
    title: "Irish Apple",
    infos: ["2 cl. Tullamore Whiskey", "8 cl. Æblejuice"],
    price: 55
  },
  {
    title: "Irish Rose",
    infos: ["2-4 cl. Tullamore Whiskey", "2 cl. Rose's Lime", "9 cl. Sprite"],
    price: 55
  },
  {
    title: "Isbjørn",
    infos: ["3 cl. Vodka", "1 cl. Rose's Blue Curaçao", "8 cl. Sprite"],
    price: 55
  },
  {
    title: "Tulla % Ginger",
    infos: ["2 cl. Tullamore Whiskey", "8 cl. Ginger Ale"],
    price: 55
  }
]
