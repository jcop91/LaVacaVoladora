import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/globals/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products: any[] = [];
  form: FormGroup;
  cost = 0;
  count = 0;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productService.getProductTest().then(data => {
      this.products = data;
      console.log(this.products);
    }).catch(error => console.log(error));

    this.form = this.formBuilder.group({
      amount: [1, Validators.min(1)]
    });
  }

  // tslint:disable-next-line: typedef
  addShoppingCart(itemIndex: number) {
    console.log('index: ' + itemIndex);
    console.log('Comprar');
    console.log(this.products[0].nombre);
  }

  // tslint:disable-next-line: typedef
  incrementCount() {
    this.form.setValue({amount: (this.form.controls.amount.value) + 1});
  }

  // tslint:disable-next-line: typedef
  decrementCount() {
    console.log();

    if((this.form.controls.amount.value -1)>=1){
      this.form.setValue({amount: (this.form.controls.amount.value) - 1});
   }
  }
}
