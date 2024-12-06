import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { ModeService } from 'src/app/shared/mode.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  mode: string = Constants.LIGHT;
  isDarkMode: boolean = false;

  constructor(private modeService: ModeService){}

  ngOnInit(): void {
    this.modeService.mode.subscribe(data => {
      this.mode = data;
      if(this.mode === Constants.LIGHT){
        this.isDarkMode = false;
      } else {
        this.isDarkMode = true;
      }     
    })
  }

}
