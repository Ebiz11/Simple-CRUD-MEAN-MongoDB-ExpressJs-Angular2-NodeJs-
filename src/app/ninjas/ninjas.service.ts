import {Http, URLSearchParams, RequestOptions, Response, Headers } from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NinjasService {

  constructor(
    private http: Http,
  ) { }

  private ninjas = "http://localhost:4000/api/ninjas";

  createNinjas(data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.ninjas, JSON.stringify(data), {headers: headers}).map(res => res.json());
  }

  getNinjas(){
    return this.http.get(this.ninjas).map(res => res.json());
  }

  deleteNinjas(id){
    let deleteNinjas = `${this.ninjas}/${id}`;
    return this.http.delete(deleteNinjas).map(res => res.json());
  }

  getNinjasId(id){
    let getNinjasId = `${this.ninjas}/${id}`;
    return this.http.get(getNinjasId).map(res => res.json());
  }

  updateNinjasId(id, data){
    let updateNinjasId = `${this.ninjas}/${id}`;
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    return this.http.put(updateNinjasId, JSON.stringify(data), {headers: headers}).map(res => res.json());
  }

}
