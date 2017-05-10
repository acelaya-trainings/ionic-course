import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "../product";

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], name: string = '') {
        name = name.toLowerCase();
        return products.filter(product => product.name.toLowerCase().indexOf(name) !== -1);
    }
}