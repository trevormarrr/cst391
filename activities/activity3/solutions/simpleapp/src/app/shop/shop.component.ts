import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  question = "What's Your Name?";
  answer = "unknown";

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer?.trim() || "unknown"; // ✅ Trim whitespace and ensure fallback
    console.log("Your name is " + this.answer);
  }
}
