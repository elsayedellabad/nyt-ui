import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardsDetailsComponent } from '../cards-details/cards-details.component';
import { CardDataModel, emptyCardData } from './../../models/card-data.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() story: CardDataModel = emptyCardData();

  constructor(public dialog: MatDialog) {}

  openDialog(story: CardDataModel): void {
    const dialogRef = this.dialog.open(CardsDetailsComponent, {
      height: '600px',
      width: '900px',
      data: story,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
