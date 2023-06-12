import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() roomList: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    if(changes['title'].firstChange) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
