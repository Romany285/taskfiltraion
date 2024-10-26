import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  constructor(private _DataService:DataService){}
  products:any ;
  ngOnInit(): void {
    this._DataService.getData().subscribe({
      next:(responce)=>{

        this.products = responce.meals
        console.log(this.products)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
