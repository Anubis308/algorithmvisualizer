import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortGraphComponent } from './sort-graph/sort-graph.component';
import {MatButtonModule} from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppSortGraphComponent } from './app-sort-graph/app-sort-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SortGraphComponent,
    AppSortGraphComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
