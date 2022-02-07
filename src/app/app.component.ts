import { Component } from '@angular/core';
import {faAddressBook,faTaxi,faCalculator} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  addressBook=faAddressBook
  taxi=faTaxi
  calc=faCalculator
}
