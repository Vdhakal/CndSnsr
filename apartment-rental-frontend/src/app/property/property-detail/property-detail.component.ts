import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   this.propertyId = +this.route.snapshot.params['id'];
   this.route.params.subscribe(
     (params)=>{
       this.propertyId= +params['id'];
     }
   );
  }
  nextPage(){
    this.propertyId+=1;
    this.router.navigate(['stripper-detail',this.propertyId]);
  }
}
