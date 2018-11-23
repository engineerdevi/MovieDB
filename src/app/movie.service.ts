import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, API_URL } from '../assets/constants';

@Injectable()

export class MovieService {

  private m_string: string;
  private m_id: number;
  //private httpC: HttpClient;

  constructor(public httpC: HttpClient) {
    }

    searchMovies(movie: string){
      this.m_string = movie;
      
      return this.httpC.get(API_URL + 'search/movie?query=' + this.m_string + '&api_key=' + API_KEY);
    }

    searchPersons(name: string){

      return this.httpC.get(API_URL + "search/person?api_key=" + API_KEY + "&language=en-US&query=" + name + "&page=1&include_adult=false" );
    
    }

    getUpcomingMovies(){
      return this.httpC.get(API_URL + "movie/upcoming?api_key=" + API_KEY + "&language=en-US&page=1");

    }

    getPopularMovies() {
      return this.httpC.get(API_URL + "movie/popular?api_key=" + API_KEY + "&language=en-US&page=1");
    }

    getTopRated() {
      return this.httpC.get(API_URL + "movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1");
    }

    getNowPlaying() {
      return this.httpC.get(API_URL + "movie/now_playing?api_key=" + API_KEY + "&language=en-US&page=1");

    }

    getMovie(id: number){
      return this.httpC.get(API_URL + "movie/" + id + "/videos?api_key=" + API_KEY + "&language=en-US");
    }
}
