import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PlantDialogComponent } from '../plant-dialog/plant-dialog.component';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent {
  constructor(private matDialog: MatDialog) {}
  public plantenList: any;
  openPlantDialog() {
    this.matDialog.open(PlantDialogComponent);
  }
}
