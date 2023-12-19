import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() item!:string;
  @Output() updateEvent: EventEmitter<string>= new EventEmitter;

  updateParent()
  {
    this.updateEvent.emit(this.item);
  }

}
