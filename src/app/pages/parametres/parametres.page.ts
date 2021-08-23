import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-parametres',
    templateUrl: './parametres.page.html',
    styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    catSlideOpts = {
        slidesPerView: 0.7,
        spaceBetween: 10,
        slidesOffsetBefore: 11,
        freeMode: true
    };

}
