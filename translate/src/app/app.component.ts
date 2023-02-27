import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  constructor(private translateService: TranslateService, private router: Router){}


  translate():void{
    this.translateService.translate("Hello").subscribe({
      next:(data)=>{
        console.log("Worked!")
        console.group(data);
      },
      error:(err)=>{
        console.log("Error!")
        console.log(err);
      }
    })
  }
}
