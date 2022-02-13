import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlantModule } from '../modules/plant.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://the300.be/api/';

  constructor(private http: HttpClient) {}

  showAllPlants(): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plants').pipe();
  }

  showPlant(id: number): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plant/' + id).pipe();
  }

  searchPlant(name: string): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plants/' + name).pipe();
  }
}
