import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  @Input() productList: Product[] = [];
  @Input() askDolar!: number;

  constructor(
    private modalSerivce: ModalService,
  ) {}

  openFormModal(): void {
    this.modalSerivce.$modal.emit(true);
  }

  getStatusColor(product: Product) {
    if (product.in_stock < product.minimum_stock) {
      return 'var(--red)';
    } else if (product.in_stock - product.minimum_stock <= 5) {
      return 'var(--yellow)';
    } else {
      return 'var(--green)';
    }
  }
}
