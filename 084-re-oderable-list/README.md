# Re-oderable List
The `<ion-list>` element has a big advantage: It allows you to easily create a re-orderable list. Here are the steps/ the code to add this functionality.

```typescript
// list.html in /pages folder
<ion-list reorder="true" (ionItemReorder)="reorderItems($event)">
    <ion-item *ngFor="let item of items">{‌{ item }}</ion-item>
</ion-list>
 
// list.ts in /pages folder
import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';
 
@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    items = ['Apples', 'Bananas', 'Berries'];
 
    reorderItems(indexes){
        this.items = reorderArray(this.items, indexes);
    }
}
```

Need need to set reorder to true (on `<ion-list>`) and add a listener to the `ionItemReorder` event. In the method executed on this event, should simply use the `reorderArray` method (which is provided by `ionic-angular`) to reorder the array.