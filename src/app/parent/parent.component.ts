import { Component, Directive, Input, OnInit } from '@angular/core';

export enum ParentLayout {
  Layout01,
  Layout02,
  Layout03
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() layout: ParentLayout;
  ParentLayout = ParentLayout;

  constructor() { }

  ngOnInit() {
  }

  changeLayout(event) {
    this.layout = parseInt(event.target.value, 10);
  }

}
