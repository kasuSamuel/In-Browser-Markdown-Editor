import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = 'assets/data.json';
  private localStorageKey = 'document';
  localData:any;
  

  constructor(private http: HttpClient) {}

  //  create behavior subject which is a boolean
  private darkModeService = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeService.asObservable();

  toggleDarkMode() {
    this.darkModeService.next(!this.darkModeService.value);
    console.log(this.darkModeService);
  }

  saveToLocalStorage(document: any[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(document));
  }



  fetchData(): Observable<any[]>{
    const localData = localStorage.getItem(this.localStorageKey);
    if(localData) {
      return of(JSON.parse(localData));
  }else{
    return this.http.get<any[]>(this.jsonUrl)
  }
  }




  private isSelected = new BehaviorSubject<any>(null);
  isSelected$ = this.isSelected.asObservable();

  setSelected(data: any) {
    this.isSelected.next(data);
  }
}



