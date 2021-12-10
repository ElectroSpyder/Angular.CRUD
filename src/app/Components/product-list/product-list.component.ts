import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentProduct= null;
  currentIndex = -1;
  name= " ";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readCuentas();
  }

  readCuentas(): void{
    this.productService.readAll()
    .subscribe({
      next: (v) => { this.products=v, console.log(v)},
      error: (e) => console.log(e),
      complete: () => console.info("completList")
    });
  }

  refresh():void{
    this.readCuentas();
    this.currentProduct = null;
    this.currentIndex = -1;
  }

  setCurrentCuenta(product: any, index: number): void{
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteAllProducts(): void{
    this.productService.deleteAll()
    .subscribe({
      next: (v) => { console.log(v)},
      error: (e) => console.log(e),
      complete: () => console.info("complet")
    });
  }

  searchByDni(dni: number):void{
    this.productService.searchByDni(dni)
    .subscribe({
      next: (v) => { this.products=v, console.log(v)},
      error: (e) => console.log(e),
      complete: () => console.info("complet")
    });
  }
}
