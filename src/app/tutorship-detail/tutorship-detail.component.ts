import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { Tutorship } from "../tutorship";
import { TutorshipService } from "../tutorship.service";

@Component({
  selector: "app-tutorship-detail",
  templateUrl: "./tutorship-detail.component.html",
  styleUrls: ["./tutorship-detail.component.css"]
})
export class TutorshipDetailComponent implements OnInit {
  tutorship: Tutorship;

  constructor(
    private route: ActivatedRoute,
    private tutorshipService: TutorshipService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTutorships();
  }

  getTutorships(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.tutorshipService
      .getTutorships(id)
      .subscribe(tutorships => (this.tutorship = tutorships));
  }

  goBack(): void {
    this.location.back();
  }
}
