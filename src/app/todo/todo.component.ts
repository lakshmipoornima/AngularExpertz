import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist:string[]=[]
  upcominglist:string[]=[]
  task=""
  clicked=false

  getData(eve:any){
    this.task=eve.target.value;
  }

  removeTask(task:string){

    this.todolist.splice(this.todolist.indexOf(task),1);

  }

  addTask(task:string){
    this.todolist.splice(this.todolist.indexOf(task),1);
    this.upcominglist.push(task);

  }
  insertTodo(){
    this.clicked=true;
    if(this.task!=""){
      this.todolist.push(this.task);
      console.log(this.todolist);
      this.task="";
      
    }

   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
