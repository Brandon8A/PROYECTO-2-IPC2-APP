import { Injectable } from '@angular/core';
import { UserMarketing } from '../interfaces/user-marketing';

@Injectable({
  providedIn: 'root'
})
export class UserMarketingServiceService {

  constructor() { }

  marketinUpdate:UserMarketing | undefined;

}
