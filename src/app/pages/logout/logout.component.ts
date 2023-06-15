import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/models/component-can-deactivate';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements ComponentCanDeactivate, OnDestroy  {
 constructor(private authService:AuthService,private dialogRef: MatDialogRef<LogoutComponent>,private dialog:MatDialog){}
  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    return false;
  }
  ngOnDestroy(): void {
    this.authService.logout();
  }

  logout() {
    // Add your logout logic here
    this.dialogRef.close();
  }


  openLogoutModal() {
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '400px',
      disableClose: true
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the modal is closed
    });
}

}
