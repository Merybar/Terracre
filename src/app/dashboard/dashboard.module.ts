import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { GardenComponent } from './dashboard/components/garden/garden.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';
import { PlantsComponent } from './dashboard/components/plants/plants.component';
import { CommunityComponent } from './dashboard/components/community/community.component';
import { NotesComponent } from './dashboard/components/notes/notes.component';
import { AlarmsComponent } from './dashboard/components/alarms/alarms.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { PlantDialogComponent } from './dashboard/components/plant-dialog/plant-dialog.component';
// import { UserDialogComponent } from './dashboard/components/dialog-components/user-dialog/user-dialog.component';
// import { AddEditUserDialogComponent } from './dashboard/components/dialog-components/add-edit-user-dialog/add-edit-user-dialog.component';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/dashboard/tuin', pathMatch: 'full' },
      {
        path: 'tuin',
        component: GardenComponent,
      },
      {
        path: 'planten',
        component: PlantsComponent,
      },
      {
        path: 'community',
        component: CommunityComponent,
      },
      {
        path: 'notities',
        component: NotesComponent,
      },
      {
        path: 'herinnering',
        component: AlarmsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    GardenComponent,
    HeaderComponent,
    PlantsComponent,
    CommunityComponent,
    NotesComponent,
    AlarmsComponent,
    PlantDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  entryComponents: [PlantDialogComponent],
})
export class DashboardModule {}
