import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoomList } from '../rooms';
import { JsonPipe } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent {
  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  successMessage: string = '';

  constructor(private roomsService: RoomsService) {}

  AddRoom() {
    this.roomsService
      .addRoom(this.room)
      .subscribe((data) => (this.successMessage = 'Room added successfully'));
  }
}
