import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Tutorship } from './tutorship';
import { TUTORSHIP } from './mock-tutorship';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TutorshipService {
  
  constructor(private messageService: MessageService){}

  getTutorship(): Observable<Tutorship[]> {

    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('TutorshipService: fetched tutorships');
    return of(TUTORSHIP);    
   }


}
