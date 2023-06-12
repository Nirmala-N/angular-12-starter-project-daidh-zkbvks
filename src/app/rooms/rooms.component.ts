import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomService } from '../services/room.service';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  @ViewChild(HeaderComponent)
  headerComponent: HeaderComponent;

  // @ViewChildren(HeaderComponent)
  // headerChildrenComponent: QueryList<HeaderComponent>;
  constructor(private roomService: RoomService) {}

  hotelName = 'Hilton Hotel';
  hideRooms = true;

  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 5,
  };
  title = 'Room List';

  numberOfRooms = 10;

  roomList: RoomList[] = [];

  ngDoCheck(): void {
    console.log('on change is called');
  }

  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {
    this.headerComponent.title = 'Display Rooms List';
    // this.headerChildrenComponent.last.title = 'Last Title';
  }
  ngOnInit() {
    this.roomList = this.roomService.getRooms();
  }

  displaySelectedRoom: RoomList;
  selectRoom(room: RoomList) {
    this.displaySelectedRoom = room;
    console.log(room);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Private Suite',
      amenities: 'free wifi, AC, bathroom, kitchen',
      price: 700,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
    };
    this.roomList = [...this.roomList, room];
  }
}
