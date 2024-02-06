import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {


  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/white-bed-linen-with-throw-pillows-Yrxr3bsPdS0',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.2,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Free Wifi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://unsplash.com/photos/white-bed-comforter-Id2IIl1jOB0',
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime: new Date('14-Nov-2021'),
      rating: 3.6,
    },
    {
      roomNumber: 3,
      roomType: 'Private suit',
      amenities: 'Aircon, Free Wifi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://unsplash.com/photos/white-bed-comforter-Id2IIl1jOB0',
      checkinTime: new Date('13-Nov-2021'),
      checkoutTime: new Date('14-Nov-2021'),
      rating: 4.8,
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig ) {
    console.log(this.config.apiEndpoint)
    console.log('Rooms Service Initialized...')
  }

  getRooms() {
    return this.roomList;
  }
}
