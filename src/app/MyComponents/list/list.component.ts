import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html', 
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  movies: any = [{ title: 'test' }]
  selectedMovies: any;
  constructor(private api: ApiService) {

    this.getMovies();
    this.selectedMovies = { id: -1, name: '', std: '' };
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
        console.log(this.movies)

      },
      error => {
        console.log(error)
      }
    )
  };
  studentClicked = (movie: any) => {
    
    console.log(movie.id);
    this.api.getOneMovies(movie.id).subscribe(
      data => {
        this.selectedMovies = data;
        console.log(this.selectedMovies, "ssssssss")
        console.log(typeof (this.selectedMovies), "ssssssss")

      },
      error => {
        console.log(error)
      }
    )

  };
  updateMovie = () => {
    console.log(this.selectedMovies, "mmmmmmmmmmmmmmm")
    this.api.updateMovies(this.selectedMovies).subscribe(
      data => {
        this.selectedMovies = data;
        console.log(this.selectedMovies, "sdddddddddddd")
        console.log(typeof (this.selectedMovies), "ddddddddd")

      },
      error => {
        console.log(error)
      }
    )

  }
  deleteMovie = () => {
    this.api.deleteMovies(this.selectedMovies.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
  }


}
