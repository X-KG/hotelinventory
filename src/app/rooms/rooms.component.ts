import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";


@Component({
    selector: 'hinv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe, RoomsListComponent]
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.roomList = [
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
      }
    ]
  }


  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    console.log(room);
  }

}
