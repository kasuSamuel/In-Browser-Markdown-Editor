import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {



  darkModeService: DataService = inject(DataService);
    onClickBtn() {
      this.darkModeService.updateDarkMode();
    }
  
}
