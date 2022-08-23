import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  favTitle: string = "Favorite Links"
  favLinks = ["https://www.reddit.com/", "https://open.spotify.com/", "https://www.goodreads.com/"];

}
