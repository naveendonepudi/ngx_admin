import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment";

const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
// const httpOptions = {
//   headers: this.headers
// }
@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string = environment.baseUri
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.url + '/user/signin', data, { headers: headers })
  }
  logout() {
    return this.http.get(this.url + '/signout')
  }

  addcategory(data) {
    console.log(this.url);
    return this.http.post(this.url + '/addcategory', data, { headers: headers })
  }

  addsubcategory(data) {
    console.log(this.url);
    return this.http.post(this.url + '/addsubcategory', data, { headers: headers })
  }

  additem(data) {
    console.log(this.url);
    return this.http.post(this.url + '/additem', data, { headers: headers })
  }
  getitems() {
    return this.http.get(this.url + '/items')
  }
  deleteitem(id) {
    return this.http.delete(this.url + `/item/${id}`)
  }

  addbrand(data) {
    return this.http.post(this.url + '/addbrand', data, { headers: headers })
  }

  getbrands() {
    return this.http.get(this.url + '/getbrands')
  }


  getsubcategory(data) {
    return this.http.post(this.url + '/getsubcategories', data, { headers: headers })
  }
  getallsubcategories() {
    return this.http.get(this.url + '/getallsubcategories')
  }

  getcategories() {
    return this.http.get(this.url + '/getcategories')
  }

  getproducts() {
    return this.http.get(this.url + '/getproducts')
  }

  deletecategory(id) {
    return this.http.delete(this.url + `/removecategory/${id}`)
  }
  deletesubcategory(id) {
    return this.http.delete(this.url + `/removecategory/${id}`)
  }
}
