import { Component } from '@angular/core';
import { List } from 'src/app/models/list';
import { NotesapiService } from 'src/app/services/notesapi.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tutorials?: List[];
  currentTutorial: List = {};
  currentIndex = -1;
  title = '';

  constructor(private apiservice: NotesapiService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.apiservice.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: List, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.apiservice.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.apiservice.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
