import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable()
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date('06/24/2017 13:51:18')},
      {id: '2', text: 'Added Bootstrap', date: new Date('06/25/2017 14:06:27')},
      {id: '3', text: 'Added logs component', date: new Date('06/26/2017 11:23:38')}
    ];
  }

  getLogs() {
    return this.logs;
  }
}
