import { AfterContentInit, Component, ContentChild, Host, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RoomsService, HttpClientModule]
})
export class ContainerComponent implements AfterContentInit {



  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;


  constructor(){
    
  }


  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }



}
