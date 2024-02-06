import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe, RoomsListComponent, HeaderComponent]
  
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };


  title = 'Room List';



  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {

    this.roomList = this.roomsService.getRooms();

    // console.log(this.headerComponent);

  }


  ngDoCheck(): void {
    console.log('on changes is called')
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View";
    
    this.headerChildrenComponent.last.title = "Last Title";

    
  }


  ngAfterViewChecked(): void {
    console.log()
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/white-bed-comforter-Id2IIl1jOB0',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6,

    };

    // this.roomList.push(room); (NOT TO USE PUSH LIKE THIS BECAUSE OF IMMUTABILITY)

    this.roomList = [...this.roomList, room];

  }





}
