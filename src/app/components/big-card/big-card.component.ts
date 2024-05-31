import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCard: string=""

  @Input()
  cardTitle: string=""

  @Input()
  cardDescription: string=""

  constructor() { }

  ngOnInit(): void {

  }

}