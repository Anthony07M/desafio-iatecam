import { Component } from '@angular/core';
import { Product } from 'src/app/components/products/model/Product';
import { CoinService } from 'src/app/services/coin/coin.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  showFormModal!: boolean;
  products: Product[] = [];
  askDolar!: number;

  constructor(
    private modalService: ModalService,
    private productsService: ProductsService,
    private coinService: CoinService,
  ) {}

  ngOnInit(): void {
    this.modalService.$modal.subscribe((value) => {
      this.showFormModal = value;
      this.getProducts();
    });
    this.getProducts()
  }
  
  getProducts():void {
    this.productsService.list().subscribe((res) => this.products = res.result);
    this.coinService.currentAskUSD().subscribe(res => this.askDolar = Number(res[0].ask))
  }
}
