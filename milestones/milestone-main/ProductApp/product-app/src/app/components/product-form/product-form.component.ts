import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    product_id: 0,
    name: '',
    description: '',
    category: '',
    quantity: 0,
    condition: 'new',
    price: 0,
    added_date: null
  };

  isEditMode = false;
  isViewMode = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(+id).subscribe((data) => {
        this.product = data;
        this.isEditMode = this.router.url.includes('/edit');
        this.isViewMode = !this.isEditMode;
      });
    }
  }

  saveProduct(): void {
    if (this.isEditMode) {
      this.productService.updateProduct(this.product).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error updating product:', error);
          // Handle error appropriately
        }
      });
    } else {
      this.productService.createProduct(this.product).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (error) => {
          console.error('Error creating product:', error);
          // Handle error appropriately
        }
      });
    }
  }

  editProduct(): void {
    this.router.navigate(['/products/edit', this.product.product_id]);
  }

  public navigateToProducts() {
    this.router.navigate(['/products']);
  }
}
