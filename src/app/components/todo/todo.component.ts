import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <p>{{todo.title}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo;
}
