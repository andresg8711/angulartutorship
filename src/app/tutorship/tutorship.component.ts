import { Component, OnInit } from "@angular/core";
import { Tutorship } from "../tutorship";
import { TutorshipService } from "../tutorship.service";

@Component({
  selector: "app-tutorship",
  templateUrl: "./tutorship.component.html",
  styleUrls: ["./tutorship.component.css"]
})
export class TutorshipComponent implements OnInit {
  tutorships: Tutorship[];

  constructor(private tutorshipService: TutorshipService) {}

  ngOnInit() {
    this.getTutorships();
  }

  getTutorships(): void {
    this.tutorshipService
      .getTutorship()
      .subscribe(tutorships => (this.tutorships = tutorships));
  }
}
