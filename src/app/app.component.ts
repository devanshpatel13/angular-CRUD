import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ApiService]
})
export class AppComponent {
  // movies = [{title :"titanic"}, {title : "avatar"}];
  movies :any = [{title: 'test'}]
  selectedMovies : any;

  constructor(private api:ApiService){
    
    this.getMovies();
    this.selectedMovies = {id : -1, name : '', std : '' };
  }
  getMovies = () =>{
    this.api.getAllMovies().subscribe(
      data =>{
        this.movies = data;
        console.log(this.movies)
      
      },
      error =>{
        console.log(error)
      }  
    )
  }
  studentClicked = (movie : any) => {
    
    console.log(movie.id);
    this.api.getOneMovies(movie.id).subscribe(
      data =>{
        // this.movies = data;
        console.log(data)

      },
      error =>{
        console.log(error)
      }  
    )

  };
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
}
