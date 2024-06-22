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
        const body = document.querySelector('body') as HTMLElement | null;
        if (body) {
          this.isDarkMode = !this.isDarkMode;
            body.style.backgroundColor = this.isDarkMode ? 'black' : ''; 
        }

        const firstImage = document.querySelector('.first-image') as HTMLElement | null;
        if(firstImage) {
            firstImage.classList.toggle('close-img');
        }

        const First = document.querySelector('.first') as HTMLElement | null;
        if(First) {
            First.classList.toggle('menu-image');
        }

        const secondImage = document.querySelector('.second-image') as HTMLElement | null;
          if(secondImage) {
            secondImage.classList.toggle('close-img');
        }


        const Second = document.querySelector('.second') as HTMLElement | null;
        if(Second) {
            Second.classList.toggle('menu-image');
        }

        const toggleBtn = document.getElementById('toggleBtn') as HTMLButtonElement;
            const checkBox = document.getElementById('check') as HTMLInputElement;


         if(toggleBtn && checkBox) {

    }
    }
  
}
