import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NotificationService } from 'src/app/notification.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit {

  constructor(private service:SharedService,private notifyService : NotificationService) { }

  @Input() cus:any;
  customerID?:string;
  customerName?:string;
  phoneNumber?:string;
  address?:string;
  email?:string;

  ngOnInit(): void {
    this.customerID=this.cus.customerID;
    this.customerName=this.cus.customerName;
    this.phoneNumber=this.cus.phoneNumber;
    this.address=this.cus.address;
    this.email=this.cus.email;
    
    console.log(this.cus.customerID);
  }

  addCustomer(){
    var val = {customerName:this.customerName,
                phoneNumber:this.phoneNumber,
                address:this.address,
                email:this.email};
                console.log(val.phoneNumber?.length);
    
                debugger;
                var customername = this.customerName?.length;
                var phoneno = this.phoneNumber?.toString().length;
                var add = this.address?.length;
                var email = this.email?.length;

                if (customername == 0 || customername == undefined)
                {
                  this.notifyService.showError("Please Enter the Customer Name !!", "Notification");
                }
                else if(phoneno == 0 || phoneno == undefined)
                {
                  this.notifyService.showError("Please Enter the Phone Number !!", "Notification");
                }
                else if(phoneno != 9)
                {
                  this.notifyService.showError("Phone Number Should Consist with 9 Digits Excluding 1st Zero Digit !!", "Notification");
                }
                else if(add == 0 || add == undefined)
                {
                  this.notifyService.showError("Please Enter the Address !!", "Notification");
                }
                else if(email == 0 || email == undefined)
                {
                  this.notifyService.showError("Please Enter the Email !!", "Notification");
                }
                else if(this.email?.includes("@") == false || this.email?.includes(".") == false)
                {
                  debugger;
                  this.notifyService.showError("Please Enter Valid Email !!", "Notification");
                }
                else
                {
                  this.service.addCustomer(val).subscribe(res=>{
                    this.notifyService.showSuccess(res, res);
                  });
                  this.notifyService.showSuccess("Customer Added Successfully !!", "Notification");
                }
  }

  updateCustomer(){
    var val = { customerID:this.customerID,
                customerName:this.customerName,
                phoneNumber:this.phoneNumber,
                address:this.address,
                email:this.email};
                console.log(val.phoneNumber?.length);
    
                debugger;
                var customername = this.customerName?.length;
                var phoneno = this.phoneNumber?.toString().length;
                var add = this.address?.length;
                var email = this.email?.length;

                if (customername == 0 || customername == undefined)
                {
                  this.notifyService.showError("Please Enter the Customer Name !!", "Notification");
                }
                else if(phoneno == 0 || phoneno == undefined)
                {
                  this.notifyService.showError("Please Enter the Phone Number !!", "Notification");
                }
                else if(phoneno != 9)
                {
                  this.notifyService.showError("Phone Number Should Consist with 9 Digits Excluding 1st Zero Digit !!", "Notification");
                }
                else if(add == 0 || add == undefined)
                {
                  this.notifyService.showError("Please Enter the Address !!", "Notification");
                }
                else if(email == 0 || email == undefined)
                {
                  this.notifyService.showError("Please Enter the Email !!", "Notification");
                }
                else if(this.email?.includes("@") == false || this.email?.includes(".") == false)
                {
                  debugger;
                  this.notifyService.showError("Please Enter Valid Email !!", "Notification");
                }
                else
                {
                  this.service.updateCustomer(val).subscribe(res=>{
                  this.notifyService.showSuccess(res, res);
                  this.notifyService.showSuccess("Customer Updated Successfully !!", "Notification");
                });
                this.notifyService.showSuccess("Customer Updated Successfully !!", "Notification");
                }
  }

}
