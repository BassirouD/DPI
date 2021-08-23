import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {InscriptionPageRoutingModule} from './inscription-routing.module';

import {InscriptionPage} from './inscription.page';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InscriptionPageRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    declarations: [InscriptionPage]
})
export class InscriptionPageModule {
}
