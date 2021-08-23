import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-card-paiement',
  templateUrl: './card-paiement.component.html',
  styleUrls: ['./card-paiement.component.scss'],
})
export class CardPaiementComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

    dismissModal() {
        this.modalController.dismiss();
    }

}
