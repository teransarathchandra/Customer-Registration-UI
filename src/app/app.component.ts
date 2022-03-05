import { Component } from '@angular/core';

import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer-Registration';
  
  constructor(private notifyService : NotificationService) { }

  Add?:string;

  ngOnInit(): void {
    this.Add=this.Add;
  }

   
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
   
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }

  imageSource(){
    this.Add="clicked";
  }
}
