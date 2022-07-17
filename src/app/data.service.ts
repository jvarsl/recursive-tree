import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(id: any) {
    let obs: Observable<any> = new Observable<any>();
    switch (id) {
      case 0:
        obs = of([
          { id: 1, label: 'label1', hasChildren: true },
          { id: 2, label: 'label2' },
        ]);
        break;
      case 1:
        obs = of([
          { id: 11, label: 'label1-1', hasChildren: true },
          { id: 12, label: 'label1-2', hasChildren: true },
        ]);
        break;
      case 11:
        obs = of([
          { id: 111, label: 'label1-1-1' },
          { id: 112, label: 'label1-1-2', hasChildren: true },
        ]);
        break;
      case 12:
        obs = of([
          { id: 121, label: 'label1-2-1' },
          { id: 122, label: 'label1-2-2', hasChildren: true },
        ]);
        break;
      case 112:
        obs = of([
          { id: 1121, label: 'label1-1-2-1' },
          { id: 1122, label: 'label1-1-2-2' },
          { id: 1122, label: 'label1-1-2-3' },
        ]);
        break;
      case 121:
        obs = of([{ id: 1211, label: 'label1-2-1-1' }]);
        break;
      case 122:
        obs = of([
          { id: 1221, label: 'label1-2-2-1' },
          { id: 1221, label: 'label1-2-2-2' },
        ]);
        break;
    }
    return obs.pipe(delay(1000));
  }
}
