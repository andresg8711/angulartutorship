import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tutorship } from './tutorship';
import { TUTORSHIP } from './mock-tutorship';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root'})
export class TutorshipService {
  constructor(private messageService: MessageService) {}

  getTutorship(): Observable<Tutorship[]> {
    this.messageService.add('TutorshipService: fetched tutorships');
    return of(TUTORSHIP);
    }
    getTutorships(id: number): Observable<Tutorship> {

      this.messageService.add(`TutorshipService: fetched tutorship id=${id}`);
      return of(TUTORSHIP.find(tutorship => tutorship.id === id));
    }

}
