import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantGardenModule } from 'src/app/modules/plant-garden.module';
import { PlantModule } from 'src/app/modules/plant.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-plant-dialog',
  templateUrl: './plant-dialog.component.html',
  styleUrls: ['./plant-dialog.component.scss'],
})
export class PlantDialogComponent {
  recievePlantId: any;
  plant$!: PlantModule[];
  addPlantObj$!: PlantGardenModule;
  modalCtrl: any;

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<PlantDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recievePlantId = data.id;

    this.api.getPlant(this.recievePlantId).subscribe((data) => {
      this.plant$ = data;
      console.log(this.plant$);
    });
  }

  addPlantToGarden() {
    this.addPlantObj$ = {
      plant_id: this.recievePlantId,
      garden_id: 1,
    };
    this.api.addPlant(this.addPlantObj$).subscribe();
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
