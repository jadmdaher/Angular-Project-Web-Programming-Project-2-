import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { ApiTestComponent } from '../api-test/api-test.component';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule, ApiTestComponent, MoviesComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  menuItems: string[] = ['Angular is amazing', 'Child bound to parent', 'Parent notified by child']
  itemSelected: number = 0;

  selectItem(itemNum: number) {
    this.itemSelected = itemNum
  }

  processUpdate(itemUpdate: string) {
    this.menuItems[this.itemSelected] = itemUpdate;
  }

}
