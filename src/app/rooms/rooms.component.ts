import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe, AsyncPipe } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { HttpClientModule, HttpEventType } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, AsyncPipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe, RoomsListComponent, HeaderComponent, HttpClientModule]

})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };


  title = 'Room List';



  roomList: RoomList[] = [];

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  totalBytes = 0;

  subscription !: Subscription;

  rooms$ = this.roomsService.getRooms$;

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {



    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request Success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes+= event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });






    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    // this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
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
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/white-bed-comforter-Id2IIl1jOB0',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6,

    };

    // this.roomList.push(room); (NOT TO USE PUSH LIKE THIS BECAUSE OF IMMUTABILITY)

    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })

  }


  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Aircon, Wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/white-bed-comforter-Id2IIl1jOB0',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.6,
  };

  this.roomsService.editRoom(room).subscribe((data) => {
    this.roomList = data;
  
  })
  }


  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }



  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }



}
