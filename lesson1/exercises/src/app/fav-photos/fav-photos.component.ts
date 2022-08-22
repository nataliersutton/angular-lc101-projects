import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Always More Cat Pictures!';
  image1 = 'https://i.pinimg.com/originals/cb/5e/af/cb5eafb205bc2a1914fe240e5d441cf9.jpg';
  image2 = 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1';
  image3 = 'https://thechive.com/wp-content/uploads/2022/07/c7e73b75f7c73a7b1f923c5f6185de34_width-600-1.jpg?attachment_cache_bust=4146554&quality=85&strip=info&w=292&h=231&crop=1';

  constructor() { }

  ngOnInit() {
  }

}