import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html'
})
export class ProductComponent {
  @Input() product: Product

  details = false
}
