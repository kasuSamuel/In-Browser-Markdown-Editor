import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Initialize darkModeSignal with value from localStorage or default to 'null'
  darkModeSignal: WritableSignal<string> = signal<string>(localStorage.getItem('darkMode') || 'null');

  constructor() {}

  // Function to update darkModeSignal and localStorage
  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === "dark" ? "null" : "dark"));
    localStorage.setItem('darkMode', this.darkModeSignal());
  }
}
