import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent: number = 1;
  properties: Array<IProperty>;

  constructor(private housingService:HousingService, private actroute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.actroute.snapshot.url.toString() == "c2c"){
      this.SellRent=2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties = data;

      }, error=>{
        console.log(error);
      }
    );
  }

}
