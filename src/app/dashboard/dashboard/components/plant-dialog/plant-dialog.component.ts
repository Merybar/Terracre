import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<PlantDialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recievePlantId = data.id;
    this.api.getPlant(this.recievePlantId).subscribe((data) => {
      this.plant$ = data;
      console.log(this.plant$);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
