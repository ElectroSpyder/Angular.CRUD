import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product ={
    name : "",
    description : "",
    availabel : false
  };

  submitted= false;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void{
    const data = {
      name: this.product.name,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe({
        next: (v) => { this.submitted=true, console.log(v)},
        error: (e) => console.log(e),
        complete: () => console.info("complet")
      });
  }

  newProduct(): void{
    this.submitted = false;
    this.product ={
      name : "",
      description : "",
      availabel : false
    };
    
  }

}
