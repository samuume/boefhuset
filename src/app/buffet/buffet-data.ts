/**
 * Created by zongy on 04-03-2017.
 */
import { IBuffet, IAppetizers, IGrill, IHotdishes, ISauce, IPotato } from './buffet-interface';

export const BUFFETDATA:IBuffet[] = [{
  id: 1,
  info: "Mandag - Onsdag",
  price: 188
},
  {
    id: 2,
    info: "Torsdag - Søndag og helligdage",
    price: 208
  },
  {
    id: 3,
    info: "Børn under 12 år",
    price: 98
  },
  {
    id: 4,
    info: "Børn under 2 år",
    price: 69
  }
]

export const APPTIZDATA:IAppetizers[] = [
  {
    title: "Rejer på salatbund",
    infoTxt: "Dagens suppe"
  },
  {
    title: "Gravad laks / Røget Laks",
    infoTxt: "Valg imellem Franskbrød og Rugbrød"
  }
]

export const GRILLDATA:IGrill[] = [
  {
    title: "Kalvefilet"
  },
  {
    title: "Australsk oksekød"
  },
  {
    title: "Ribeye / Oksefilet"
  },
  {
    title: "Lammekotelet"
  },
  {
    title: "Kængurusteak"
  },
  {
    title: "Svinemørbrad"
  },
  {
    title: "Laksesteak"
  },
  {
    title: "Tigerrejer"
  },
]

export const DISHESDATA:IHotdishes[] = [
  {
    title: "Stegt flæsk"
  },
  {
    title: "Oksegryde"
  },
  {
    title: "Spareribs"
  },
  {
    title: "Wienerschnitzler"
  },
  {
    title: "Kyllingesteak"
  },
  {
    title: "Tarteletter"
  },
  {
    title: "Bløde løg"
  },
  {
    title: "Løgringe"
  },
  {
    title: "Stegte grøntsager"
  }
]

export const SAUCEDATA:ISauce[] = [
  {
    title: "Bearnaisesauce"
  },
  {
    title: "Persillesovs"
  },
  {
    title: "Peppersauce"
  },
  {
    title: "Rødvinsauce"
  }
]

export const POTATODATA:IPotato[] = [
  {
    title: "Kogte kartofler"
  },
  {
    title: "Råstegte kartofler"
  },
  {
    title: "Steak pommes frites"
  },
  {
    title: "Kartoffelmos"
  }
]
