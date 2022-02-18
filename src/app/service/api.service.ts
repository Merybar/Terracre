import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PlantModule } from '../modules/plant.module';
import { CommunityModule, PostModule } from '../modules/community.module';
import { UserModule } from '../modules/user.module';
import { InvitationModule } from '../modules/invitation.module';
import { AddGardenModule, PlantGardenModule, TableGardenModule } from '../modules/plant-garden.module';

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

  constructor(private http: HttpClient) { }

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
  addPlant(data: PlantGardenModule): Observable<PlantGardenModule[]> {
    return this.http
      .post<PlantGardenModule[]>(
        this.url + 'addPlantToGarden',
        data,
        httpOptions
      )
      .pipe();
  }

  // ##### Community #####
  getAllPosts(): Observable<CommunityModule[]> {
    return this.http.get<CommunityModule[]>(this.url + 'community').pipe();
  }
  getUserPost(id: number): Observable<PostModule[]> {
    return this.http.get<PostModule[]>(this.url + 'userPost/' + id).pipe();
  }
  savePost(data: any): Observable<PostModule[]> {
    return this.http
      .post<PostModule[]>(this.url + 'post', data, httpOptions)
      .pipe();
  }
  deletePost(id: number) {
    return this.http.delete(this.url + 'post/' + id).pipe();
  }
  getAllusers(): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(this.url + 'users').pipe();
  }
  getUser(id: number): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(this.url + 'user/' + id).pipe();
  }
  addUser(data: any): Observable<InvitationModule[]> {
    return this.http
      .post<InvitationModule[]>(this.url + 'invitation', data, httpOptions)
      .pipe();
  }
  deleteUser(memberId: number, userId: number) {
    return this.http
      .delete(this.url + 'user/' + memberId + '/' + userId)
      .pipe();
  }

  // ##### Garden #####
  getGarden(): Observable<[]> {
    return this.http.get<[]>(this.url + 'garden').pipe();
  }
  getGardenPlants(): Observable<TableGardenModule[]> {
    return this.http.get<TableGardenModule[]>(this.url + 'gardenPlants').pipe();
  }
  updateGarden(data: any, id: number): Observable<AddGardenModule[]> {
    return this.http.put<AddGardenModule[]>(this.url + 'garden/' + id, data, httpOptions).pipe();
  }
  saveGarden(data: any): Observable<AddGardenModule[]> {
    return this.http.post<AddGardenModule[]>(this.url + 'garden', data, httpOptions).pipe();
  }
}
