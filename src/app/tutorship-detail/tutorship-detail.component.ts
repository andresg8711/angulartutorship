import { Component, OnInit, Input } from '@angular/core';
import { Tutorship } from '../tutorship';

@Component({
  selector: 'app-tutorship-detail',
  templateUrl: './tutorship-detail.component.html',
  styleUrls: ['./tutorship-detail.component.css']
})
export class TutorshipDetailComponent implements OnInit {
  @Input() tutorship: Tutorship;

  constructor() { }

  ngOnInit() {
  }

}
