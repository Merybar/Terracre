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
  plantsUrl: string = '';

  constructor(private http: HttpClient) {
    this.plantsUrl = 'http://the300.be/api/plants';
  }

  getPlanten(): Observable<PlantsModule[]> {
    return this.http.get<PlantsModule[]>('http://the300.be/api/plants').pipe();
  }
}
