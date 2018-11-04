import { Component, OnInit } from '@angular/core';
declare  var $: any;
declare  var jQuery: any;

@Component({
  selector: 'app-aboutinfo',
  templateUrl: './aboutinfo.component.html',
  styleUrls: ['./aboutinfo.component.css']
})
export class AboutinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(".parallax").parallax();
  }

}
