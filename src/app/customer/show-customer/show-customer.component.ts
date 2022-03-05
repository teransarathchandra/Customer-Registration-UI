import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  constructor(private service:SharedService,private notifyService : NotificationService) { }

  CustomerList:any=[];

  ModalTitle?:string;
  ActivateAddEditCustomer:boolean=false;
  cus:any;

  //Filtering Data
  CustomerNameFilter?:string;
  CustomerListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCustomerList();
  }

  addClick(){
    this.cus={
      customerID:"",
      customerName:""
    }
    this.ModalTitle="Add New Customer";
    this.ActivateAddEditCustomer=true;
  }

  editClick(item: any){
    this.cus=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCustomer=true;
  }

  closeClick(){
    this.ActivateAddEditCustomer=false;
    this.refreshCustomerList();
  }

  deleteClick(item: { customerID: any; }){
    if(confirm('Are you sure?')){
      this.service.deleteCustomer(item).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
        this.refreshCustomerList();
      });
      this.notifyService.showSuccess("Customer Deleted Successfully !!", "Notification");
    }
    this.ngOnInit();
    this.refreshCustomerList();

    console.log(item,'test');
  }

  refreshCustomerList(){
    this.service.getCustomerList().subscribe(data=>{
      this.CustomerList=data;
      this.CustomerListWithoutFilter=data;
    })
  }

  FilterFn(){
    var CustomerNameFilter = this.CustomerNameFilter;
    console.log(CustomerNameFilter);

    this.CustomerList = this.CustomerListWithoutFilter.filter(function (el:any){
      return el.customerName.toString().toLowerCase().includes(
        CustomerNameFilter?.toString().trim().toLowerCase()
      )
    });
    
  }

}
