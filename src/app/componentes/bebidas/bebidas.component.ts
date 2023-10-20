import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-bebidas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit{

  popularCocktails: any[]=[];  

  constructor(private cocktailService: ServicioService) { }

  ngOnInit() {    
 
    this.cocktailService.getPopularCocktails().subscribe(data => {
      this.popularCocktails = data.drinks;
    });
  }
 
}
