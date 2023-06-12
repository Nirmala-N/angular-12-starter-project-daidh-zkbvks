import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [RoomService],
})
export class HeaderComponent implements OnInit {
  title: string;
  constructor(private roomService: RoomService) {}

  ngOnInit() {}
}
