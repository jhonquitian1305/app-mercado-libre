import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://api.mercadolibre.com';
  }

  getItems(search: string): Promise<any>{    
    return firstValueFrom(this.http.get<any>(`${this.baseUrl}/sites/MCO/search?q=${search}`));
  }

  getItem(id: any) {
    return this.http.get(`${this.baseUrl}/items/${id}`);
  }
}
