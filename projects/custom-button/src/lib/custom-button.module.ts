import { NgModule } from '@angular/core';
import { CustomButtonComponent } from './custom-button.component';
import { AdeptApiModule } from 'adept-api';

@NgModule({
  imports: [
    AdeptApiModule
  ],
  declarations: [CustomButtonComponent],
  exports: [CustomButtonComponent]
})
export class CustomButtonModule { }
