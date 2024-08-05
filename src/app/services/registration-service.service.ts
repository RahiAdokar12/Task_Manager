import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServiceService {
  constructor(private httpclient: HttpClient) {}
// working
  // fetchData() {
  //   return this.httpclient.get('http://localhost:4000/showEmpDetails');
  // } 


  fetchData() {
    return this.httpclient.get('http://localhost:4000/showEmpDetails');
  }

  getEmployeeData(data: any) {
    return this.httpclient.post('http://localhost:4000/registerUserApi/', data);
  }

  // taskformData(data:any){
  //  return this.httpclient.post('http://localhost:3000/employees/',data)
  // }

  taskformData(data:any){
     return this.httpclient.post(environment.apiurl +'/createTask',data);
     
     }

 
 Taskprioritydata(data: any){  
   return this.httpclient.get(environment.apiurl +'/priorityList',data)
  }

  Taskcategorydata(data:any){
  return this.httpclient.get(environment.apiurl +'/tskCategoryList',data)

  }
}
