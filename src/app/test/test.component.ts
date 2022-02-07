import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  choice=false
  choosencolor="yellow"
  ngOnInit(): void {
  }

  disabled=false
  isStudent=true
  age=30

  names=["Poornima","Ron","Anu","Ravi"]

  colors=["red","yellow","green","blue"]

  clickAlert(event:any){
    alert("hello")
    console.log(event);
    
  }

  getData(event:any){
    console.log(event);
    this.name=event.target.value;
    
  }
  name=""
  pcolor="green "
  day=0
  count=false

  getDate(){
    this.day= new Date().getDay();
    this.count=true
    console.log("Day:"+this.day);
    
    
  }

  setColor(event:any){
    console.log(event);
    this.pcolor=event.target.value;
    
  }
}
