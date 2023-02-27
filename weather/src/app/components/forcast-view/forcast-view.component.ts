import { Component } from '@angular/core';
import { Forcast } from 'src/app/models/forcast';

@Component({
  selector: 'app-forcast-view',
  templateUrl: './forcast-view.component.html',
  styleUrls: ['./forcast-view.component.css']
})
export class ForcastViewComponent {
  forcast: Forcast[] = [];

  constructor(){}

  ngOnInit(): void{}

}
