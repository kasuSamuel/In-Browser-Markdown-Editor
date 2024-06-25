import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  //  create behavior subject which is boolean
  private darkModeService = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkModeService.asObservable()

  toggleDarkMode(){
    this.darkModeService.next(!this.darkModeService.value)
    console.log(this.darkModeService)
  }


 getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl)
      .pipe(
        catchError(this.handleError<any>('getData', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  

}
