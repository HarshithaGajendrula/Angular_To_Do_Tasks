import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
  @Input() task: Task | undefined;
  @Output() backToTasks = new EventEmitter<void>();
}
