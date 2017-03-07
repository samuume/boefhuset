/**
 * Created by zongy on 05-03-2017.
 */
import { Component, OnInit } from '@angular/core';
import {IMousserende, IHvidvin, IRosevin, IRoedvin} from "./vinkort-interface";
import {VinkortDataService} from "./vinkort-data.service";

@Component({
  selector: 'vinkort',
  templateUrl: './app/vinkort/vinkort.html'
})

export class VinkortComponent implements OnInit {
  moussers: IMousserende[];
  hvidvins: IHvidvin[];
  roses: IRosevin[];
  roedvins: IRoedvin[];

  constructor(private vinkortDataService : VinkortDataService) {};

  ngOnInit() {
    this.moussers = this.vinkortDataService.getMousserData();
    this.hvidvins = this.vinkortDataService.getHvidvinData();
    this.roses = this.vinkortDataService.getRoseData();
    this.roedvins = this.vinkortDataService.getRoedvinData();
  }
}
