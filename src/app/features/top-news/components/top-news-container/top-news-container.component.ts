import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-news-container',
  templateUrl: './top-news-container.component.html',
  styleUrls: ['./top-news-container.component.scss'],
})
export class TopNewsContainerComponent {
  constructor(private router: Router) {}
}
