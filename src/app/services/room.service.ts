import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms/room';
import { environment } from '../../environments/environment';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/interface/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('room service initialized');
    console.log(config.apiEndPoint);
    // console.log(environment.apiEndPoint);
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'AC Deluxe',
      amenities: 'free wifi, AC, bathroom, kitchen',
      price: 500,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'AC Deluxe',
      amenities: 'free wifi, AC, bathroom, kitchen',
      price: 600,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('18-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'free wifi, AC, bathroom, kitchen',
      price: 700,
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('16-Nov-2021'),
    },
  ];
  getRooms() {
    return this.roomList;
  }
}
