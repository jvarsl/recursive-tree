import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tree-view-recursive',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
})
export class TreeViewComponent {
  @Input() level!: number;
  @Input() children: any;
  @Input() parent: any;

  @Input() search!: (any: any) => Observable<any>;

  self = this;
  open(item: any) {
    item.isOpen = !item.isOpen;
    if (!item.children) {
      item.loading = '....';
      this.search(item.id).subscribe((res) => {
        item.loading = null;
        item.children = res;
      });
    }
  }
}
