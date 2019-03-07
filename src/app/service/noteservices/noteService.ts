import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
@Injectable({
    providedIn: 'root'
})
export class noteService {
    constructor(private http: HttpClient) { }

    postUser(user, url) {
        console.log("data in user--10", user);

        var httpOptions = {
            headers: new HttpHeaders // create header object
                ({
                    'Content-Type': 'application/json'
                }),
        };
        // set header in your http request
        return this.http.post('http://localhost:3000' + url, user, httpOptions);
    }

    getNotes(data) {
        console.log(data);
        return this.http.get('http://localhost:3000/getNotes/' + data.userID);
      }

   updateColor(data){
    return this.http.post('http://localhost:3000/updateColor', data);
   }
    deletedNotes(data){
      return this.http.post('http://localhost:3000/deleteNote',data);
    }
    archivedNotes(data){
        console.log("data",data);  
        return this.http.post('http://localhost:3000/isArchived',data)
    }
    updateNote(data){
        console.log("data on updateNOte",data);
        
        return this.http.post('http://localhost:3000/updateNote',data)
    }

}

