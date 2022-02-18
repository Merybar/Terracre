import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { GardenModule, TableGardenModule } from 'src/app/modules/plant-garden.module';
import { ApiService } from 'src/app/service/api.service';
import { GardenCreatedDialogComponent } from '../garden-created-dialog/garden-created-dialog.component';
import { GardenEditDialogComponent } from '../garden-edit-dialog/garden-edit-dialog.component';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit, OnDestroy {

  garden$!: GardenModule[];
  newGarden$!: GardenModule[];
  updateGarden$!: GardenModule[];
  subscribe!: Subscription;
  receivedGardenId: any;
  gardenPlants$!: TableGardenModule[];



  constructor(private api: ApiService, private matDialog: MatDialog) { }
  gardenID: any;
  ngOnInit(): void {
    this.showGadenInfo();

  }
  showGadenInfo() {
    this.showGardenPlants();
    this.subscribe = this.api.getGarden().subscribe((data) => {
      this.garden$ = data;
      this.garden$.forEach(element => {
        this.receivedGardenId = element.id;
      });
      localStorage.setItem("gardenId", this.receivedGardenId)
      console.log(this.receivedGardenId)
    });
  }
  editGarden(gardenId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: gardenId,
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.matDialog.open(GardenEditDialogComponent, dialogConfig);
  }
  createGarden() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.matDialog.open(GardenCreatedDialogComponent, dialogConfig);
    this.refresh();
  }
  showGardenPlants() {
    this.api.getGardenPlants().subscribe((data) => {
      this.gardenPlants$ = data;
    });
  }
  refresh(): void {
    window.location.reload();
  }



  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }

}
