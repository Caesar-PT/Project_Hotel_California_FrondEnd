import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../common/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public dialog: MatDialog) {}

  openConfirm(content: string): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '400px',
      data: {content}
    });
    return dialogRef.afterClosed();
  }
}
