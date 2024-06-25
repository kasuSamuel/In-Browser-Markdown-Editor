import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/data.json';
  storageService: any;


  constructor(private http: HttpClient) {}

  //  create behavior subject which is boolean
  private darkModeService = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeService.asObservable();


  toggleDarkMode(){
    this.darkModeService.next(!this.darkModeService.value)
    console.log(this.darkModeService)
  }



  
getData(): Observable<any[]>{
  return this.http.get<any>(this.jsonUrl)
}


private isSelected = new BehaviorSubject<any>(null);
isSelected$ = this.isSelected.asObservable();

setSelected(data:any){
  this.isSelected.next(data);
}

}
