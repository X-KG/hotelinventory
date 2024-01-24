import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();
  constructor() {}


  ngOnInit(): void {
    
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
