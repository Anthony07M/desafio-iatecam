import { Component } from '@angular/core';
import { Category } from 'src/app/components/categories/model/Category';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-categories-pages',
  templateUrl: './categories-pages.component.html',
  styleUrls: ['./categories-pages.component.css'],
})
export class CategoriesPagesComponent {
  showFormModal!: boolean;
  categoriesList: Category[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.modalService.$modal.subscribe((value) => {
      this.showFormModal = value;
      this.getCategories();
    });
    this.getCategories()
  }
  
  getCategories():void {
    this.categoriesService.list().subscribe((res) => this.categoriesList = res.result);
  }
}
