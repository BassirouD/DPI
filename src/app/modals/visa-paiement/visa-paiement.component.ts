import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-visa-paiement',
    templateUrl: './visa-paiement.component.html',
    styleUrls: ['./visa-paiement.component.scss'],
})
export class VisaPaiementComponent implements OnInit {

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
