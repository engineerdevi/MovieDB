import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovies: any;
  upcomingMovies: any;
  topRated: any;
  PSearchMovies: [];
  MSearchMovies: any;
  textSearch: "";
  selectedSearch:"";
  pSearch: "";
  mSearch: "";
  findClick = false;
obj :[];
obj2 : [];
  constructor(public movieService: MovieService)  { 
   
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcomingMovies = data['results'];
    });

    this.movieService.getTopRated().subscribe(data => {
      this.topRated = data['results'];
    });

    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'];
    });

   
    }
    
  

  searchMovie() {
    this.findClick=true;
    if(this.mSearch != null) {
      this.pSearch =null;
      this.movieService.searchMovies(this.textSearch).subscribe(data => {
        this.MSearchMovies = data['results'];
        console.log(this.MSearchMovies);
      });
  }

  else if(this.pSearch != null){
    this.movieService.searchPersons(this.textSearch).subscribe(data => {
     this.PSearchMovies= data['results'];
      });
  }
  } 

  setDefault() {
this.findClick=false;

  }

  onChange(event: any) {
    
    this.findClick=false;
    if ((this.pSearch = event.target.value) === "pSearch") {
      this.mSearch = null;
      
    
   
    }
    else if ((this.mSearch = event.target.value) === "mSearch") {
      
      this.pSearch =null;
      
      
    }
  }

  ngOnInit() {
  }

}
