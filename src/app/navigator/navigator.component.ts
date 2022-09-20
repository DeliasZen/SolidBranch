import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Data } from '@angular/router';
import { DATA_CUSTOMERS } from '../shared/data.request';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit, OnChanges {

  customers: Data[] = DATA_CUSTOMERS;
  selected: Data[] = [];

  @Input()
  type: string = ''

  constructor() { }

  ngOnInit(): void {
    this.filter(this.customers)
  }

  ngOnChanges(): void {
    this.filter(this.customers)
  }

  filter(customers: Data[]): void {
    this.selected = [];
    this.customers.forEach((i: Data) => {
      if(i['type'] === this.type) this.selected.push(i)
    })
  }

}
