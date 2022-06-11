import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  formSearch: FormGroup;

  arrItems: any[] = [];

  constructor(
    private itemsService: ItemsService
  ) {
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSearch(){
    let search = this.formSearch.value
    console.log(search.search)
    this.itemsService.getItems(search.search)
      .then(async response => {
        this.arrItems = await response['results'];
      })
  }

}
