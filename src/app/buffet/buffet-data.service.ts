/**
 * Created by zongy on 04-03-2017.
 */
import { Injectable } from '@angular/core';
import { BUFFETDATA, APPTIZDATA, GRILLDATA, DISHESDATA, SAUCEDATA, POTATODATA } from './buffet-data';
import { IBuffet, IAppetizers, IGrill, IHotdishes, ISauce, IPotato } from './buffet-interface';

@Injectable()

export class BuffetDataService {
  getBuffetData() : IBuffet[] {
    return BUFFETDATA;
  }
  getApptizData() : IAppetizers[] {
    return APPTIZDATA;
  }

  getGrillData() : IGrill[] {
    return GRILLDATA;
  }

  getDishesData() : IHotdishes[] {
    return DISHESDATA;
  }

  getSauceData() : ISauce[] {
    return SAUCEDATA;
  }

  getPotatoData() : IPotato[] {
    return POTATODATA;
  }
}
