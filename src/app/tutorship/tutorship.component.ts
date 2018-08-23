import { Component, OnInit } from '@angular/core';
import { Tutorship } from '../tutorship';
import { TUTORSHIP } from '../mock-tutorship';

@Component({
  selector: 'app-tutorship',
  templateUrl: './tutorship.component.html',
  styleUrls: ['./tutorship.component.css']
})
export class TutorshipComponent implements OnInit {

  tutorships = TUTORSHIP;

  selectedTutorship: Tutorship;
  constructor() { }

  ngOnInit() {
  }

  onSelect(tutorship: Tutorship): void {
    this.selectedTutorship = tutorship;
  }

}
