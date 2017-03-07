/**
 * Created by zongy on 05-03-2017.
 */
import { Injectable } from '@angular/core';
import {IMousserende, IHvidvin, IRosevin, IRoedvin} from "./vinkort-interface";
import {MOUSSERDATA, HVIDVINDATA, ROSEDATA, ROEDVINDATA} from "./vinkort-data";


@Injectable()

export class VinkortDataService {
  getMousserData() : IMousserende[] {
    return MOUSSERDATA;
  }
  getHvidvinData() : IHvidvin[] {
    return HVIDVINDATA;
  }
  getRoseData() : IRosevin[] {
    return ROSEDATA;
  }
  getRoedvinData() : IRoedvin[] {
    return ROEDVINDATA;
  }
}
