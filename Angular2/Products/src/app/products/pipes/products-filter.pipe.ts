import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "../product";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], name: string = '') {
        return products.filter(product => product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
}