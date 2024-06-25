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
  selectedData:any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe(data => {
    this.data = data;
    
  });
      this.dataService.isSelected$.subscribe((doc)=>{
    this.selectedData = doc;
    console.log(this.selectedData);
  });
    this.dataService.isDarkMode$.subscribe((isDark)=>{
      this.isDark = isDark
    })

  }
  viewDocument(document:any){
    this.dataService.setSelected(document);
  }
  
  
    onThem( ){
      this.dataService.toggleDarkMode()
        localStorage.setItem('isDark', this.isDark.toString());

      
    }
  
}
