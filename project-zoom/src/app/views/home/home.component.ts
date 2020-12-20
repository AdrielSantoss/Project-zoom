import { Component, Input, OnInit, SimpleChange, ɵConsole } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   myFullresImage = "https://res.cloudinary.com/dataweb/image/upload/v1608122394/portal-diniz.dw.net.br/ARDI1902LC253_zdwnu3.jpg"
   myThumbnail = "https://res.cloudinary.com/dataweb/image/upload/c_thumb,w_200,g_face/v1608122394/portal-diniz.dw.net.br/ARDI1902LC253_zdwnu3.jpg"
   myFullresImage2 = "https://res.cloudinary.com/dataweb/image/upload/v1608121936/portal-diniz.dw.net.br/ARDI1902LC153_k7fyck.jpg"
   myThumbnail2 = "https://res.cloudinary.com/dataweb/image/upload/c_thumb,w_200,g_face/v1608121936/portal-diniz.dw.net.br/ARDI1902LC153_k7fyck.jpg"
   magnification= 0.2;
   zoomMode = "hover";
   zoomModeClick = "click";
   zoomModeToggle = "toggle";
   zoomModeHover_Freeze = "hover-freeze";
   enableScrollZoom= true;
   scrollStepSize= 0.1;
   enableLens = false;
   lensHeight = 100;
   lensWidth = 100;
   circularLens = false;
   maxZoomRatio = 2;
   minZoomRatio = 0;


   changeLeans(){
     if(this.enableLens){
       this.enableLens = true;
     }else {
      this.enableLens = false;
     }
   }

   changeCircularLeans(){
    if(this.circularLens){
      this.circularLens = true;
    }else {
     this.circularLens = false;
    }
   }


  constructor() { }

  ngOnInit(): void {
    
  }


}
