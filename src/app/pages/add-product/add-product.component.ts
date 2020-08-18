import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ngx-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categories: any;
  subcategory: any;
  brands: any;
  products: any;
  gender: any;
  sizes: any;
  productForm: FormGroup;  //declaring our form variable

  constructor(private categoryService: RestService, private http: HttpClient) { }

  ngOnInit() {
    this.getcategories()
    this.getitems()
    this.getbrands()
    this.gender = [{ 'name': 'All' }, { 'name': 'Male' }, { 'name': 'Female' }, { 'name': 'Kids' }]
    this.sizes = [{ 'name': 'SS' }, { 'name': 'SM' }, { 'name': 'SL' }, { 'name': 'S' }, { 'name': 'M' }, { 'name': 'L' }, { 'name': 'XL' }, { 'name': 'XXL' },]
    this.productForm = new FormGroup({
      name: new FormControl(null),
      tagline: new FormControl(null),
      type: new FormControl(null),
      gender: new FormControl(null),
      caption: new FormControl(null),
      brand: new FormControl(null),
      category: new FormControl(null),
      subcategory: new FormControl(null),
      description: new FormControl(null),
      pricing: new FormGroup({
        mrp: new FormControl(null),
        disountpercent: new FormControl(null),
        price: new FormControl(null),

      }),
      size: new FormControl(null),
      stock: new FormControl(null),
      sold: new FormControl(null),
      mattype: new FormControl(null),
      color: new FormControl(null),
      hexacode: new FormControl(null)
    })
  }

  onSubmitProduct() {
    console.log(this.productForm.value);
    console.log(JSON.stringify(this.productForm.value));
    this.categoryService.additem(this.productForm.value).subscribe((res: any) => {
      console.log("res", res)
      if (res.status == 'success') {
        alert('Item Added Successfully.')
        this.productForm.reset()
        this.getitems()
      }
    })

  }

  getbrands() {
    this.categoryService.getbrands().subscribe((data: any) => {
      console.log('brands', data);
      this.brands = data.brands;
    })
  }

  category(cat) {
    let category = {
      "category": cat
    }
    this.subcategories(category)
  }

  getcategories() {
    this.categoryService.getcategories().subscribe((data: any) => {
      this.categories = data
    })
  }

  getitems() {
    this.categoryService.getitems().subscribe((data: any) => {
      console.log(data);
      this.products = data.reverse()
    })
  }

  subcategories(category) {
    this.categoryService.getsubcategory(category).subscribe((res: any) => {
      console.log(res);
      this.subcategory = res;
    })
  }

  delete(data) {
    if (window.confirm(`Are you sure to delete ${data.name}?`)) {
      this.categoryService.deleteitem(data._id).subscribe(res => {
        console.log(res);
        this.getitems()
      })
    }
  }

}
