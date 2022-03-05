import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:36948/api/Customer";

  constructor(private http:HttpClient) { }

  getCustomerList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/GetCustomer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/InsertCustomer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/UpdateCustomer',val);
  }

  deleteCustomer(val:any){
    console.log(val,'teran');
    return this.http.delete(this.APIUrl+'/DeleteCustomer?customerID='+val);
  }
}
