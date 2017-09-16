import {Input, Component, ChangeDetectionStrategy} from '@angular/core';

@Component({selector: 'app-todos',
  template: `
    <p *ngIf="todos.pending">Loading...</p>
    <app-todo [todo]="todo"
          *ngFor="let todo of todos.data">
    </app-todo>
    <p *ngIf="todos.error">{{todos.error}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos;
}
