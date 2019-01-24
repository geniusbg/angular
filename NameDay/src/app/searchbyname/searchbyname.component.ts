import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-searchbyname',
  templateUrl: './searchbyname.component.html',
  styleUrls: ['./searchbyname.component.css']
})
export class SearchbynameComponent implements OnInit {
  names: any;

  constructor(private getnames: GetdataService) { }

  getDaybyName(params) {
    this.getnames.getNamesByName(params.name, params.country).subscribe(data => {
      this.names = data;
      this.names = this.names.results;
      this.names.forEach(element => {
        element.date = new Date(2019, element.month, element.day);
      });
    })
  }

  ngOnInit() {

      var audio = {};
      audio[0] = new Audio();
      audio[0].src = "../../assets/audio/typewriter.wav";
      audio[0].play();
    
    ////////////////////////////
    // Twitter: @mikedevelops
    ////////////////////////////

    // your custome placeholder goes here!
    var ph = "Какво искаш да изписва",
      searchBar = $('#search'),
      // placeholder loop counter

      phCount = 0;

    // function to return random number between
    // with min/max range

    function randDelay(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function to print placeholder text in a 
    // 'typing' effect
    function printLetter(string, el) {
      // split string into character seperated array
      var arr = string.split(''),
        input = el,
        // store full placeholder
        origString = string,
        // get current placeholder value
        curPlace = $(input).attr("placeholder"),
        // append next letter to current placeholder
        placeholder = curPlace + arr[phCount];

      setTimeout(function () {
        // print placeholder text
        $(input).attr("placeholder", placeholder);
        // increase loop count
        phCount++;
        // run loop until placeholder is fully printed
        if (phCount < arr.length) {
          printLetter(origString, input);
        }
        // use random speed to simulate
        // 'human' typing
      }, randDelay(50, 90));
    }

    // function to init animation
    function placeholder() {
      $(searchBar).attr("placeholder", "");
      printLetter(ph, searchBar);
    }

    placeholder();
    $('.submit').click(function (e) {
      phCount = 0;
      e.preventDefault();
      placeholder();
    });
  }
}
