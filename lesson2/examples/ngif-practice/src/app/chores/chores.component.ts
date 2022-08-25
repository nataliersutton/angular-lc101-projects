import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ["Mail package", 'Complete LaunchCode prep work', "Walk dog", "Do laundry",  "Prep dinner"];

   targetImage = 'https://us.123rf.com/450wm/juliarstudio/juliarstudio1602/juliarstudio160202817/51977844-target-with-dart-flat-icon-isolated-on-white-background.jpg?ver=6';

   constructor() { }

   ngOnInit() {
   }

}
