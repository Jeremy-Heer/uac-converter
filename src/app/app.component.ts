import { Component } from '@angular/core';
import {Uac, UACVALUES} from './userAccountControl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UserAccountControl Decoder';
  binaryUac: string;
  error: string;
  uacRefValues = UACVALUES;
  binaryIndex: number;
  // i: number;

  decode(value: string) {
    if (!Number(value)) {
      this.error = 'You did not provide a number';
      this.binaryUac = '';
    } else {
      this.error = '';
      // Convert to binary and pad to 32 bit length
      // The end result is a string
      this.binaryUac = Number(value).toString(2).padStart(32, '0');
    }

    // Compare the binaryUac 1 indexes with the known uacValues
    for (let i = 0; i < this.uacRefValues.length; i++) {
      // Check where the 1 is in our refernce
      this.binaryIndex = this.uacRefValues[i].binary.indexOf('1');

      // Compare the supplied uac value if it has a 1 in the same place
      if (this.binaryUac[this.binaryIndex] === '1') {
        // console.log('Matched ' + this.v.binary);
        this.uacRefValues[i].matched = true;
      } else {
        this.uacRefValues[i].matched = false;
      }
    }

  }
}
