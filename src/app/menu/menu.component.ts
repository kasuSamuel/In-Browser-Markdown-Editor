import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  data: any[] = [];
  nextId: number = 1;

  isDark = false;
  selectedData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.fetchData().subscribe((data) => {
      this.data = data;
      this.nextId = data.length
        ? Math.max(...data.map((doc) => doc.id)) + 1
        : 1;
    });
    this.dataService.isSelected$.subscribe((doc) => {
      this.selectedData = doc;
      console.log(this.selectedData);
    });

    this.dataService.isDarkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  viewDocument(document: any) {
    this.dataService.setSelected(document);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}-${month}-${year}`;
  }

  newDocument(): void {
    const newDoc = {
      id: this.nextId,
      name: `untitled-document.md`,
      createdAt: this.formatDate(new Date()),
      content: '',
    };
    this.data.push(newDoc);
    this.nextId++;
  }

  get reversedData() {
    return this.data.slice().reverse();
  }
  onThem() {
    this.dataService.toggleDarkMode();
    localStorage.setItem('isDark', this.isDark.toString());
  }
}
