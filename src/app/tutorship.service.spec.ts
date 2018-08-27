import { TestBed, inject } from '@angular/core/testing';

import { TutorshipService } from './tutorship.service';

describe('TutorshipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TutorshipService]
    });
  });

  it('should be created', inject([TutorshipService], (service: TutorshipService) => {
    expect(service).toBeTruthy();
  }));
});
