import { AfterContentInit, Component, ContentChild, Host, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {



  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;


  constructor(@Host() private roomsSer: RoomsService){
    
  }


  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }



}
