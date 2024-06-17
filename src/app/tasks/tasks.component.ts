// // import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// // import { TaskService, Task } from '../task.service';

// // @Component({
// //   selector: 'app-tasks',
// //   templateUrl: './tasks.component.html',
// //   styleUrls: ['./tasks.component.css']
// // })
// // export class TasksComponent implements OnInit {
// //   @Output() viewTaskDetails = new EventEmitter<number>();

// //   tasks: Task[] = [];

// //   constructor(private taskService: TaskService) {}

// //   ngOnInit() {
// //     this.tasks = this.taskService.getTasks();
// //   }
// // }


// import { Component, EventEmitter, Output, OnInit } from '@angular/core';
// import { TaskService, Task } from '../task.service';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.css']
// })
// export class TasksComponent implements OnInit {
//   @Output() viewTaskDetails = new EventEmitter<number>();

//   tasks: Task[] = [];
//   filteredTasks: Task[] = [];
//   showCompleted = true; // Initially show completed tasks

//   constructor(private taskService: TaskService) {}

//   ngOnInit() {
//     this.tasks = this.taskService.getTasks();
//     this.filterTasks();
//   }

//   toggleTasks() {
//     this.showCompleted = !this.showCompleted;
//     this.filterTasks();
//   }

//   showAllTasks() {
//     this.showCompleted = true; // Show all tasks
//     this.filterTasks();
//   }

//   private filterTasks() {
//     if (this.showCompleted) {
//       this.filteredTasks = this.tasks.filter(task => task.completed);
//     } else {
//       this.filteredTasks = this.tasks.filter(task => !task.completed);
//     }
//   }
// }


import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Output() viewTaskDetails = new EventEmitter<number>();

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  showCompleted = true; // Initially show completed tasks

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  toggleTasks() {
    this.showCompleted = !this.showCompleted;
    this.filterTasks();
  }

  // showAllTasks() {
  //   this.showCompleted = true; // Show all tasks
  //   this.filterTasks();
  // }

  showAllTasks() {
    this.filteredTasks = this.tasks; // Set filteredTasks to all tasks
  }
  

  private filterTasks() {
    if (this.showCompleted) {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
}
