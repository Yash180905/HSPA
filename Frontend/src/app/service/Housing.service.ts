import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}
  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get<any[]>('assets/data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }
  // getAllProperties(SellRent: number) {
  //   return this.http.get('assets/data/properties.json').pipe();
  // }
}
