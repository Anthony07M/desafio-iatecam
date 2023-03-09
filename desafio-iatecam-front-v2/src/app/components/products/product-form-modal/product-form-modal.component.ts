import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-form-modal',
  templateUrl: './product-form-modal.component.html',
  styleUrls: ['./product-form-modal.component.css'],
})
export class ProductFormModalComponent {
  productForm!: FormGroup;
  options: Array<any> = [];
  selectedOption: string = '';
  faClose = faClose;

  constructor(
    private categoriesService: CategoriesService,
    private producstService: ProductsService,
    private modalService: ModalService,
  ) {}

  ngOnInit(): void {
    this.categoriesService
      .list()
      .subscribe((res) => (this.options = res.result));
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      in_stock: new FormControl('', [Validators.required]),
      minimum_stock: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.productForm.get('name');
  }

  get description() {
    return this.productForm.get('description');
  }

  get price() {
    return this.productForm.get('price');
  }

  get in_stock() {
    return this.productForm.get('in_stock');
  }

  get minimum_stock() {
    return this.productForm.get('minimum_stock');
  }

  get category_id() {
    return this.productForm.get('category_id');
  }

  
  submit(): void {
    if (this.productForm.invalid) {
      return;
    }
    
    this.producstService.create(this.productForm.value).subscribe(res => console.log(res))
    this.productForm.reset();
    this.closeModal()
  }

  closeModal(): void {
    this.modalService.$modal.emit(false)
  }
}
