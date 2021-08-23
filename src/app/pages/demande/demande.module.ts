import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DemandePageRoutingModule} from './demande-routing.module';

import {DemandePage} from './demande.page';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DemandePageRoutingModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule

    ],
    declarations: [DemandePage]
})
export class DemandePageModule {
}
