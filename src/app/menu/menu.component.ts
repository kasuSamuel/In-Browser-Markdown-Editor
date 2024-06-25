import { Component, inject, OnInit  } from '@angular/core';
import { DataService } from '../data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  data: any[] = [];

  isDark = false

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },

    );

    this.dataService.isDarkMode$.subscribe((isDark)=>{
      this.isDark = isDark
    })

  }
  
  
    onThem( ){
      
      this.dataService.toggleDarkMode()
        localStorage.setItem('isDark', this.isDark.toString());

      
    }
  
}
