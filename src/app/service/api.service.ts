import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantsModule } from '../dashboard/plants.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://th300.be/api/';

  constructor(private http: HttpClient) {}

  getPlanten(): Observable<PlantsModule[]> {
    return this.http.get<PlantsModule[]>(this.url + 'plants').pipe();
  }
}
