import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Response } from 'src/app/Models/Response.Model';
import { CuentaDTO } from 'src/app/Models/CuentaDTO.Model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;
  currentCuenta : CuentaDTO ={ 
    NombreCoTitular: "", 
      NombreTitular:"", 
      DniTitular: 0, 
      DniCoTitular: 0, 
      CodigoPrograma:0, 
      NombrePrograma: ""
  };

  currentIndex = -1;
  name= " ";
  dni = 0;

  public response : Response = { 
    Message: " ", 
    StatudCode: false, 
    Result: 
    { 
      NombreCoTitular: "", 
      NombreTitular:"", 
      DniTitular: 0, 
      DniCoTitular: 0, 
      CodigoPrograma:0, 
      NombrePrograma: ""
    },
    ResultList : new Array<CuentaDTO>()
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.readCuentas();
  }

  readCuentas(): void{
    this.productService.readAll()
    .subscribe({
      next: (v) => { this.response=v, console.log(v)},
      error: (e) => console.log(e),
      complete: () => console.info("completList")
    });
  }

  refresh():void{
    this.readCuentas();
    this.currentCuenta ={ 
    NombreCoTitular: "", 
      NombreTitular:"", 
      DniTitular: 0, 
      DniCoTitular: 0, 
      CodigoPrograma:0, 
      NombrePrograma: ""
  };
    this.currentIndex = -1;
  }

  setCurrentCuenta(cuenta: CuentaDTO, index: number): void{
    this.currentCuenta = cuenta;
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

  searchByDni():void{
    this.productService.searchByDni(this.dni)
    .subscribe({
      next: (v) => { this.response=v, console.log(v)},
      error: (e) => console.log(e),
      complete: () => console.info("complet")
    });
  }
}
