import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {
  sayHello() {
    alert("You clicked the button! And now I say... Hello");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
