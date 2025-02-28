import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'] // ✅ Fixed typo
})
export class InfoComponent implements OnInit {

  @Input() name: string = ''; // ✅ Default value to avoid undefined issues
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() { }

  ngOnInit() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this.selectedProduct = "Star Wars";
    console.log("In newInfo() and resetting info.");
  }

  onSubmit() {
    console.log(`In onSubmit() with quantity ${this.quantity} and selected movie ${this.selectedProduct}`);
  }
}
