import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  mode = new BehaviorSubject<string>(Constants.LIGHT)

  constructor() { }

  setMode(mode: string){
    this.mode.next(mode);
  }

  getMode(){
    return this.mode.value;
  }
}
