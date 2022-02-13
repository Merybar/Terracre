import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlantDialogComponent } from '../plant-dialog/plant-dialog.component';
import { PlantModule } from 'src/app/modules/plant.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit, OnDestroy {
  plant$!: PlantModule[];
  plants$!: PlantModule[];
  subscribe!: Subscription;
  search!: boolean;

  constructor(private api: ApiService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.subscribe = this.api.showAllPlants().subscribe((data) => {
      this.plants$ = data;
      this.search = false;
    });
  }
  searchPlantDialog(plantName: string) {
    this.api.searchPlant(plantName).subscribe((data) => {
      this.plants$ = data;
      this.search = true;
    });
  }
  openPlantDialog(plantId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: plantId,
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.matDialog.open(PlantDialogComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
