/**
 * Created by zongy on 05-03-2017.
 */
export interface IColdDrinks {
  title: string,
  info: string,
  smsize: string,
  smprice: string,
  mdsize: string,
  mdprice: string,
  lgsize: string,
  lgprice: string
}

export interface IHotDrinks {
  title: string,
  info: string,
  price: number,
}

export interface ICoffee {
  title: string,
  infos: Array<string>,
  price: number,
}

export interface IDessert {
  title: string,
  info: string,
  price: number
}

export interface ICocktails {
  title: string,
  infos: Array<string>,
  price: number
}
