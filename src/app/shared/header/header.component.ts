import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mode: string = Constants.LIGHT;
  isDarkMode: boolean = false;

  constructor(private modeService: ModeService) { }

  ngOnInit(): void {
  }

  changeMode(){
    if(this.mode === Constants.LIGHT){
      this.mode = Constants.DARK;
      this.isDarkMode = !this.isDarkMode;
      this.modeService.setMode(Constants.DARK);
    } else {
      this.mode = Constants.LIGHT;
      this.isDarkMode = !this.isDarkMode;
      this.modeService.setMode(Constants.LIGHT);
    }
  }

}
