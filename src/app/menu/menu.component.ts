import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
    isDarkMode = false;



    onClickBtn() {


         // Manipulate DOM elements directly (not recommended)
        const body = document.querySelector('body');
        if (body) {
          this.isDarkMode = !this.isDarkMode;
            body.style.backgroundColor = this.isDarkMode ? '#151619' : ''; 
        }

    }
  
}
