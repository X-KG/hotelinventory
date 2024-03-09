import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { ContainerComponent } from "./container/container.component";
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
// import { HttpClientModule } from '@angular/common/http';
import { InitService } from './init.service';
import { AppNavComponent } from "./app-nav/app-nav.component";



@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [InitService, LoggerService,],
    imports: [CommonModule, RouterOutlet, RouterLink, RoomsComponent, ContainerComponent, EmployeeComponent, AppNavComponent,]
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', {static: true} ) name!: ElementRef;



  constructor(@Optional() private loggerService: LoggerService, 
  @Inject(localStorageToken) private localStorage: Storage,
  // private initService: InitService
  ){
    // console.log(initService.config)
  }
  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()');
    // this.name.nativeElement.innerText = "Hilton Hotel";
    // this.localStorage.setItem('name', 'Hilton Hotel');
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }






}
