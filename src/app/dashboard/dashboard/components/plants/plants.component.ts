import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PlantDialogComponent } from '../plant-dialog/plant-dialog.component';
import { PlantsModule } from 'src/app/dashboard/plants.module';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit {
  plants$!: PlantsModule[];

  constructor(private api: ApiService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.api.getPlanten().subscribe((data) => {
      this.plants$ = data;
    });
  }

  searchPlant(PlantName: string) {
    this.openPlantDialog(5);
  }

  openPlantDialog(plantId: number) {
    this.matDialog.open(PlantDialogComponent);
  }
}
