import { Board } from './../../models/board.model';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      "Idea 1",
      "Idea 2",
      "Idea 3"
    ]),
    new Column('Research', [
      "Research 1",
      "Research 2",
      "Research 3"
    ]),
    new Column('Todo', [
      "Todo 1",
      "Todo 2",
      "Todo 3"
    ]),
    new Column('Done', [
      "Done 1",
      "Done 2",
      "Done 3"
    ])
  ]);

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
