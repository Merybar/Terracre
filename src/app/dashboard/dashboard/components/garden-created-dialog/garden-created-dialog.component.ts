import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddGardenModule } from 'src/app/modules/plant-garden.module';
import { ApiService } from 'src/app/service/api.service';
import { GardenComponent } from '../garden/garden.component';

@Component({
  selector: 'app-garden-created-dialog',
  templateUrl: './garden-created-dialog.component.html',
  styleUrls: ['./garden-created-dialog.component.scss']
})
export class GardenCreatedDialogComponent implements OnInit {
  addGarden$!: AddGardenModule;
  gardenForm: FormGroup = new FormGroup({});

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GardenComponent>
  ) { }

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

  postGarden() {
    this.addGarden$ = this.gardenForm.value;
    this.api.saveGarden(this.addGarden$).subscribe();
    this.dialogRef.close();

  }

}
