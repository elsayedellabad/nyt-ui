
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { CardDataModel, emptyCardData } from '../../models/card-data.model';
@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})
export class CardsDetailsComponent {

  constructor(public dialogRef: MatDialogRef<CardsDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public story: CardDataModel) { }


  closeDialog(): void {
    this.dialogRef.close();
  }

}
