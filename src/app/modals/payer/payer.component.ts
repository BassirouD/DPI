import { Component, OnInit } from '@angular/core';
import {AjoutMachandiseComponent} from "../ajout-machandise/ajout-machandise.component";
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {CardPaiementComponent} from "../card-paiement/card-paiement.component";
import {VisaPaiementComponent} from "../visa-paiement/visa-paiement.component";

@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.scss'],
})
export class PayerComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

    async onOpenCard() {
        const modal = await this.modalController.create({
            component: CardPaiementComponent,
            cssClass: 'cal-modal1',
            swipeToClose: true,
            // presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

    async onOpenVisa() {
        const modal = await this.modalController.create({
            component: VisaPaiementComponent,
            cssClass: 'cal-modal1',
            swipeToClose: true,
            // presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

    dismissModal() {
        this.modalController.dismiss();
    }

}
