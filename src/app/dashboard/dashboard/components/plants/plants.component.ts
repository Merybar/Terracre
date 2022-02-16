import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PlantDialogComponent } from '../plant-dialog/plant-dialog.component';
import { PlantModule } from 'src/app/modules/plant.module';
import { Subscription, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss'],
})
export class PlantsComponent implements OnInit, OnDestroy {
  plant$!: PlantModule[];

  subscribe!: Subscription;
  // search
  searched!: boolean;
  mycontrol = new FormControl();
  filteredOptions!: Observable<any[]>;
  displayFn(subject: { name: any }) {
    return subject ? subject.name : undefined;
  }

  constructor(private api: ApiService, private matDialog: MatDialog) {}
  ngOnInit(): void {
    this.searchFilter();
    this.getAllPlants();
  }
  getAllPlants() {
    this.subscribe = this.api.showAllPlants().subscribe((data) => {
      this.plant$ = data;
      this.searched = false;
    });
  }
  searchFilter() {
    this.filteredOptions = this.mycontrol.valueChanges.pipe(
      // startWith(''),
      map((term) => {
        return this.plant$.filter((option) =>
          option.name.toLowerCase().includes(term.toLowerCase())
        );
      })
    );
  }
  searchPlantDialog(plantName: string) {
    if (plantName === '' || plantName === null) {
      this.getAllPlants();
    } else {
      this.api.getSearchPlant(plantName).subscribe((data) => {
        this.plant$ = data;
        this.searched = true;
      });
    }
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
