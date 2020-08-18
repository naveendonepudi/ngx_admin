import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  categories: any;
  subcategories: any
  subcatForm: FormGroup;  //declaring our form variable

  constructor(private service: RestService) { }

  ngOnInit() {
    this.getcategories()
    this.getallsubcats()
    this.subcatForm = new FormGroup({
      name: new FormControl(null),
      category: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.subcatForm.value);
    this.service.addsubcategory(this.subcatForm.value).subscribe(res => {
    })
    this.subcatForm.reset()
  }

  getallsubcats() {
    this.service.getallsubcategories().subscribe((data: any) => {
      this.subcategories = data
    })
  }

  getcategories() {
    this.service.getcategories().subscribe((data: any) => {
      this.categories = data
    })
  }

  delete(data) {
    console.log(data.name);
    if (window.confirm(`Are you sure to delete ${data.name}?`)) {
      this.service.deletesubcategory(data._id).subscribe(res => {
        console.log(res);
        if (res) {
          this.ngOnInit()
        }
      })
    }
  }

}
