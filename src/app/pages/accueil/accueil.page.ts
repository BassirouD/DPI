import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

    catSlideOpts = {
        slidesPerView: 0.7,
        spaceBetween: 0,
        slidesOffsetBefore: 0,
        freeMode: true,
        loop: false,
        centeredSlides: false,
    };

    goToDemande(){
        this.router.navigateByUrl('/demande');
    }

    goToSettings(){
        this.router.navigateByUrl('/parametres');
    }

}
