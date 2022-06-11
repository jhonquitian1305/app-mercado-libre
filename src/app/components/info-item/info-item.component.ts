import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent implements OnInit {

  item: any;
  id: string | null;
  constructor(
    private itemsService: ItemsService,
    private aRouter: ActivatedRoute
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(){
    this.itemsService.getItem(this.id).subscribe(
      {
        next: (res) => {
          this.item = res;
        }
      }
    )
  }

}
