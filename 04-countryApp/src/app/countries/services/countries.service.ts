import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { SearchBoxComponent } from '../../shared/components/search-box/search-box.component';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError( error => of([]))
      );
  }

  public searchCountryByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( error => of(null))
      );
  }

  public searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.getCountriesRequest(url);
  }

  public searchRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url);
  }
}
