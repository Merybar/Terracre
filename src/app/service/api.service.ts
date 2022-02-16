import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PlantModule } from '../modules/plant.module';
import { CommunityModule } from '../modules/community.module';
import { UserModule } from '../modules/user.module';
import { InvitationModule } from '../modules/invitation.module';

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

  // ##### PLANTS #####

  showAllPlants(): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plants').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getPlant(id: number): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plant/' + id).pipe();
  }

  getSearchPlant(name: string): Observable<PlantModule[]> {
    return this.http.get<PlantModule[]>(this.url + 'plants/' + name).pipe();
  }

  // ##### Community #####
  getAllPosts(): Observable<CommunityModule[]> {
    return this.http.get<CommunityModule[]>(this.url + 'community').pipe();
  }
  getAllusers(): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(this.url + 'users').pipe();
  }
  getUser(id: number): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(this.url + 'user/' + id).pipe();
  }
  addUser(data: any): Observable<InvitationModule[]> {
    return this.http
      .post<InvitationModule[]>(this.url + 'invitation/', data)
      .pipe();
  }
  deletePost(id: number) {
    return this.http.delete(this.url + 'post/' + id).pipe();
  }
  // ##### Community #####
}
