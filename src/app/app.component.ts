import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { TaskService, Task } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: 'login' | 'tasks' | 'taskDetails' = 'login';
  selectedTask: Task | undefined;

  constructor(private authService: AuthService, private taskService: TaskService) {}

  onLoginSuccess() {
    this.currentView = 'tasks';
  }

  onViewTaskDetails(taskId: number) {
    this.selectedTask = this.taskService.getTaskById(taskId);
    this.currentView = 'taskDetails';
  }

  onBackToTasks() {
    this.currentView = 'tasks';
    this.selectedTask = undefined;
  }
}
