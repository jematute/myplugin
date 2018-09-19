import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdeptApiService } from 'adept-api';

@Component({
  selector: 'lib-custom-button',
  template: `
    <div class="toolbar-button">
      <button (click)="click()">Custom Button</button>
    </div>  
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CustomButtonComponent implements OnInit {

  constructor(private service: AdeptApiService) { }

  ngOnInit() {
  }

  click() {
    this.service.sendMessage();
  }

}
