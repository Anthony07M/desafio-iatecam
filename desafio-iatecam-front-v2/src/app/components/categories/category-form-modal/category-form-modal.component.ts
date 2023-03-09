import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { faClose, faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-form-modal',
  templateUrl: './category-form-modal.component.html',
  styleUrls: ['./category-form-modal.component.css'],
})
export class CategoryFormModalComponent {
  categoryForm!: FormGroup;
  faClose = faClose
  constructor(
    private categoriesService: CategoriesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.categoryForm.get('name');
  }

  get description() {
    return this.categoryForm.get('description');
  }

  submit(): void {
    if (this.categoryForm.invalid) {
      return;
    }

    this.categoriesService
      .create(this.categoryForm.value)
      .subscribe((res) => console.log(res.result));

    this.categoryForm.reset()
    this.modalService.$modal.emit(false);
  }

  closeModal(): void {
    this.modalService.$modal.emit(false);
  }
}
