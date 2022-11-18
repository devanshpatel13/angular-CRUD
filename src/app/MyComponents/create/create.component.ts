import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  movies :any = [{title: 'test'}]
  selectedMovies : any;

  constructor(private api:ApiService){
    
 
    this.selectedMovies = {id : -1, name : '', std : '' };
  }
  createMovie = () => {
    
    
    this.api.createMovie(this.selectedMovies).subscribe(
      data =>{
        // this.movies = data;
        console.log(data)
        this.movies.push(data)
      
      },
      error =>{
        console.log(error)
      }  
    )

  };

  ngOnInit(): void {
  }

}
