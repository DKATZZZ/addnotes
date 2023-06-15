import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesapiService } from 'src/app/services/notesapi.service';
import { List } from 'src/app/models/list';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  @Input() viewMode = false;

  @Input() currentTask: List= {
    title: '',
    description: '',
    published: false
  };
  
  message = '';
  constructor(
    private apiservice: NotesapiService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getTutorial(this.route.snapshot.params["id"]);
      }
    }
  
    getTutorial(id: string): void {
      this.apiservice.get(id)
        .subscribe({
          next: (data) => {
            this.currentTask = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  
    updatePublished(status: boolean): void {
      const data = {
        title: this.currentTask.title,
        description: this.currentTask.description,
        published: status
      };
  
      this.message = '';
  
      this.apiservice.update(this.currentTask.id, data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.currentTask.published = status;
            this.message = res.message ? res.message : 'The status was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
  
    updateTutorial(): void {
      this.message = '';
  
      this.apiservice.update(this.currentTask.id, this.currentTask)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          },
          error: (e) => console.error(e)
        });
    }
  
    deleteTutorial(): void {
      this.apiservice.delete(this.currentTask.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.router.navigate(['/tutorials']);
          },
          error: (e) => console.error(e)
        });
    }
}

