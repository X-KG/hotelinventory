import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from './logger.service';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', {static: true} ) name!: ElementRef;



  constructor(@Optional() private loggerService: LoggerService){

  }
  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()')
    this.name.nativeElement.innerText = "Hilton Hotel";
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }






}
