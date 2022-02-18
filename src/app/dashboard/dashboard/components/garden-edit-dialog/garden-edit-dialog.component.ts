import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddGardenModule } from 'src/app/modules/plant-garden.module';
import { ApiService } from 'src/app/service/api.service';
import { GardenComponent } from '../garden/garden.component';

@Component({
  selector: 'app-garden-edit-dialog',
  templateUrl: './garden-edit-dialog.component.html',
  styleUrls: ['./garden-edit-dialog.component.scss']
})
export class GardenEditDialogComponent implements OnInit {
  recievePlantId: any;
  gardenID: any;
  editGarden$!: AddGardenModule;
  gardenForm: FormGroup = new FormGroup({});

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GardenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recievePlantId = data.id;
    this.gardenID = localStorage.getItem("gardenId");
  }

  ngOnInit(): void {
    this.gardenForm = this.fb.group({
      name: new FormControl(''),
      length_cm: new FormControl(''),
      width_cm: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
    });
  }

  putGarden() {
    this.editGarden$ = this.gardenForm.value;
    this.api.updateGarden(this.editGarden$, this.gardenID).subscribe();
    this.dialogRef.close();

  }
}
