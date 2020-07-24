import { Component, OnInit } from '@angular/core';
import { GetNameService } from '../get-name.service';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.css']
})
export class SearchByNameComponent implements OnInit {
  console = console;
  names: any;
  name:any;
  date = new Date()
  
  constructor(private getnames: GetNameService) { 
  }

  ngOnInit() {
  }

  getByName(ngForm:any) {
    this.getnames.getNamesbyName(ngForm.name, ngForm.country).subscribe(data => {
     this.names=data;
     this.names=this.names.results;
     this.date.setMonth = this.names.month
     console.log(this.names)
     this.names.forEach(element => {
       element.date = new Date(0,element.month,element.day)
     });
    })
  }

}
