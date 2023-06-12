import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(EmployeesComponent) employeeComponent: EmployeesComponent;
  constructor() {}
  ngAfterContentInit(): void {}

  ngOnInit() {}
}
