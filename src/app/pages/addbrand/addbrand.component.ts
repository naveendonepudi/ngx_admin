import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.scss']
})
export class AddbrandComponent implements OnInit {
  brand: string;
  brands: any;
  brandForm: FormGroup;  //declaring our form variable
  constructor(private services: RestService) { }

  ngOnInit() {
    this.get()
    this.brandForm = new FormGroup({
      name: new FormControl(null)
    });
  }

  onSubmit() {
    this.services.addbrand(this.brandForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.status == 'success') {
        alert('brand added successfully')
      }
      this.get()
    })
    this.brandForm.reset()
  }

  get() {
    this.services.getbrands().subscribe((data: any) => {
      this.brands = data.brands
    })
  }

  delete(data) {
    console.log(data.name);
    // if (window.confirm('Are you sure you want to delete?')) {
    //   this.services.deletecategory(data._id).subscribe(res => {
    //     this.ngOnInit()
    //     console.log(res);
    //   })
    // }
  }
}
