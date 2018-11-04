import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(".parallax").parallax();
  }

}
