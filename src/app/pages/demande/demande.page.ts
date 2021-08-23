import {Component, OnInit, ViewChild} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {AjoutMachandiseComponent} from "../../modals/ajout-machandise/ajout-machandise.component";
import {PayerComponent} from "../../modals/payer/payer.component";

@Component({
    selector: 'app-demande',
    templateUrl: './demande.page.html',
    styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {

    progress = 0;
    n = 1;

    @ViewChild('file1') file1;
    @ViewChild('file2') file2;
    @ViewChild('file3') file3;
    @ViewChild('file4') file4;
    @ViewChild('file5') file5;
    ffile1: File;
    ffile2: File;
    ffile3: File;
    ffile4: File;
    ffile5: File;
    result: any;

    constructor(private modalController: ModalController,
                private routerOutlet: IonRouterOutlet,) {
    }

    ngOnInit() {
    }

    onSuivant() {
        if (this.n < 5) {
            this.n += 1;
        }
    }

    onPrecedent() {
        this.n -= 1;
    }

    async onPayer(){
        const modal = await this.modalController.create({
            component: PayerComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }

    async onAddMarchandise() {
        const modal = await this.modalController.create({
            component: AjoutMachandiseComponent,
            cssClass: 'cal-modal',
            swipeToClose: true,
            presentingElement: this.routerOutlet.nativeEl,
        });
        return await modal.present();
    }


    addFile1() {
        this.file1.nativeElement.click();
    }

    addFilesAdded1() {
        this.ffile1 = this.file1.nativeElement.files[0];
        console.log(this.ffile1);
        const extention = this.ffile1.name.split('.')[1].toLowerCase();
        if ("pdf" != extention) {
            alert('Doit etre un pdf!!!');
            this.ffile1 = null;
            return;
        }
        if (this.ffile1.size > 3000000) {
            alert('Taille authoriser depasser!!!');
            this.ffile1 = null;
            return;
        }
    }

    addFile2() {
        this.file2.nativeElement.click();
    }

    addFilesAdded2() {
        this.ffile2 = this.file2.nativeElement.files[0];
        const extension = this.ffile2.name.split('.')[1].toLowerCase();
        if ("pdf" != extension) {
            alert('Doit etre un pdf!!!');
            this.ffile2 = null;
            return;
        }
        if (this.ffile2.size > 3000000) {
            alert('Taille authoriser depasser!!!');
            this.ffile2 = null;
            return;
        }
    }

    addFile3() {
        this.file3.nativeElement.click();
    }

    addFilesAdded3() {
        this.ffile3 = this.file3.nativeElement.files[0];
        const extension = this.ffile3.name.split('.')[1].toLowerCase();
        if ("pdf" != extension) {
            alert('Doit etre un pdf!!!');
            this.ffile3 = null;
            return;
        }
        if (this.ffile3.size > 3000000) {
            alert('Taille authoriser depasser!!!');
            this.ffile3 = null;
            return;
        }
    }

    addFile4() {
        this.file4.nativeElement.click();
    }

    addFilesAdded4() {
        this.ffile4 = this.file4.nativeElement.files[0];
        const extension = this.ffile4.name.split('.')[1].toLowerCase();
        if ("pdf" != extension) {
            alert('Doit etre un pdf!!!');
            this.ffile4 = null;
            return;
        }
        if (this.ffile4.size > 3000000) {
            alert('Taille authoriser depasser!!!');
            this.ffile4 = null;
            return;
        }
    }

    addFile5() {
        this.file5.nativeElement.click();
    }

    addFilesAdded5() {
        this.ffile5 = this.file5.nativeElement.files[0];
        const extension = this.ffile5.name.split('.')[1].toLowerCase();
        if ("pdf" != extension) {
            alert('Doit etre un pdf!!!');
            this.ffile5 = null;
            return;
        }
        if (this.ffile5.size > 3000000) {
            alert('Taille authoriser depasser!!!');
            this.ffile5 = null;
            return;
        }
    }

}
