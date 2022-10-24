import { Component, OnInit } from '@angular/core';
import { House } from '../House';
import { HouseService } from '../house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses : House[] = [];

  constructor(private houseservice: HouseService) { }
  
  ngOnInit(): void {
    this.getHouses();
  }

  getHouses():void{
    this.houseservice.getHouse().subscribe(houses => this.houses = houses);
  }

}
