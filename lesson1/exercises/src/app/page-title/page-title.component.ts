import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = "The Page of Random Things Title";
  titleGif = "https://images.squarespace-cdn.com/content/v1/55ef80c4e4b004b1f53a6af4/1462304393851-9A6K6ITPQ1565VL3HBPP/Lets-Start-Coding_Maker-Screen_Text-Scroll";
}
