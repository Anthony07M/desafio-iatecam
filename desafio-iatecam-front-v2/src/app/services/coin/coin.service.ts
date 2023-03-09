import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Coin {
  code: string;
  codein: string;
  name: string;
  high: string;
  low: string;
  varBid: string;
  pctChange: string;
  bid: string;
  ask: string;
  timestamp: string;
  create_date: string;
}

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  private baseUrl: string = 'https://economia.awesomeapi.com.br/USD';

  constructor(private httpClient: HttpClient) {}

  currentAskUSD(): Observable<Coin[]> {
    return this.httpClient.get<Coin[]>(this.baseUrl);
  }
}
