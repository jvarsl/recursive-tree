import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recursive-tree';
  data: any;
  constructor(public dataService: DataService) {}
  ngOnInit() {
    this.dataService.getData(0).subscribe((res) => (this.data = res));
  }
}
