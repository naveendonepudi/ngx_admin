import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-category',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  categoryname: string;
  categories: any;
  image
  categoryForm: FormGroup;
  constructor(private categoryService: RestService, private router: Router) { }

  ngOnInit() {
    this.get()
    this.categoryForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  create() {
    this.categoryService.addcategory(this.categoryForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success') {
        alert('category added successfully')
      }
      this.categoryForm.reset()
      this.get()
    })
  }

  get() {
    this.categoryService.getcategories().subscribe((data: any) => {
      this.categories = data.reverse()
    }, err => {
      if (err instanceof HttpErrorResponse) {
        const errorMessages = new Array<{ propName: string; errors: string }>();
        console.log(errorMessages);
        console.log('ERROR', err.name);
        if (err.name === 'HttpErrorResponse') {
          this.router.navigateByUrl('pages/notfount')
        }
        if (err.status === 422) {
          // TODO: extract errors here and match onto the form
        }
      }
    })
  }

  // delete(data) {
  //   console.log(data.name);
  //   if (window.confirm(`Are you sure to delete ${data.name}?`)) {
  //     this.categoryService.deletecategory(data._id).subscribe(res => {
  //       console.log(res);
  //       if (res) {
  //         this.ngOnInit()
  //       }
  //     })
  //   }
  // }
}
