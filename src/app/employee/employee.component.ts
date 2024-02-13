import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {







  empName: string = 'John';


  constructor(@Self() private roomsService: RoomsService) {}
 
 
  ngOnInit(): void {

  }



}
