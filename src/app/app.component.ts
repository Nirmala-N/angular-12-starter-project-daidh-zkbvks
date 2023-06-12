import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { localStorageToken } from './services/localstorage.token';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(@Inject(localStorageToken) localStorage: Storage) {}
  name = 'Angular ' + VERSION.full;

  role = 'Admin';

  @ViewChild('divElement', { static: true }) divElement!: ElementRef;

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }

  ngOnInit() {
    this.divElement.nativeElement.innerText = 'Hilton Hotels';
  }
}
