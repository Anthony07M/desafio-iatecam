import { Component, Input } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { Category } from '../model/Category';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent {
  @Input() categoriesList: Category[] = [];
  
  constructor(
    private categoriesService: CategoriesService,
    private modalService: ModalService
  ) {}


  openFormModal(): void {
    this.modalService.$modal.emit(true);
  }
}
