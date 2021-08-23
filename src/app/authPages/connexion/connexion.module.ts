import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ConnexionPageRoutingModule} from './connexion-routing.module';

import {ConnexionPage} from './connexion.page';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ConnexionPageRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule
    ],
    declarations: [ConnexionPage]
})
export class ConnexionPageModule {
}
