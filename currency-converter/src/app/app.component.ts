import { ConvertPipe } from "./convert.pipe";
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConvertPipe]
})


export class AppComponent {
  title = 'currency-converter';
}
