import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { BaseApi } from '../../../shared/core/base-api';
import { HistoryEvent } from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: HistoryEvent): Observable<HistoryEvent> {
    return this.post('events', event);
  }
  getEvents(): Observable<HistoryEvent[]> {
    return this.get('events');
  }
  getEventById(id: string): Observable<HistoryEvent> {
    return this.get(`events/${id}`);
  }

  deleteEvent(id: string): Observable<HistoryEvent> {
    return this.delete(`events/${id}`);
  }

  updateEvent(event: HistoryEvent): Observable<HistoryEvent> {
    return this.put(`events/${event._id}`, event);
  }

  getEventByProjectId(id: string): Observable<HistoryEvent[]> {
    return this.get(`events/pro/${id}`);
  }
}
