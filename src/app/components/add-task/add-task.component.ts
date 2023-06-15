import { Component } from '@angular/core';
import { List } from 'src/app/models/list';
import { NotesapiService } from 'src/app/services/notesapi.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  tutorial: List = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private apiservice:NotesapiService) { }
  
  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.apiservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
}
