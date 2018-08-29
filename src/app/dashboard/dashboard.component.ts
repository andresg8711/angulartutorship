import { Component, OnInit } from '@angular/core';
import { Tutorship } from '../tutorship';
import { TutorshipService } from '../tutorship.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tutorships: Tutorship[] = [];
  constructor(private tutorshipService: TutorshipService) { }
  ngOnInit() {
    this.getTutorships();
  }
  getTutorships(): void {
    this.tutorshipService.getTutorship()
      .subscribe(tutorships => this.tutorships = tutorships.slice(1, 5));
  }
}