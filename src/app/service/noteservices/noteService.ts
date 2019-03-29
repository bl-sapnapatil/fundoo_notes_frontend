import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class noteService {
 
   public  apiBaseurl = environment.apiBaseurl;
    constructor(private http: HttpClient) { }

    postUser(user, url) {
        console.log("data in user--13", user);

        var httpOptions = {
            headers: new HttpHeaders // create header object
                ({
                    'Content-Type': 'application/json'
                }),
        };
        // set header in your http request
        return this.http.post( this.apiBaseurl + 'createNotes', user, httpOptions);
    }

    getNotes(data) {
        console.log(data);
        return this.http.get(this.apiBaseurl+ 'getNotes' + '/' +data.userID);

    }
    updateColor(data) {
        console.log("data on update color",data);
        return this.http.post(this.apiBaseurl+ 'updateColor',data);

    }
    deletedNotes(data) {
        console.log("data",data);
        return this.http.post(this.apiBaseurl+'deleteNote' + '/', data);
    }
    archivedNotes(data) {
        console.log("data",data);
        return this.http.post(this.apiBaseurl+ 'isArchived' + '/', data);
    }
    updateNote(data) {
        console.log("data on updateNOte", data);
        return this.http.post(this.apiBaseurl+'updateNote' + '/', data)
    }
    getArchivedNotes(data){
        console.log("data in archivednotes--43",data);
        // console.log(this.apiBaseurl+ 'getArchived' + '/'+ data.userID);
         return this.http.get(this.apiBaseurl+ 'getArchived' + '/'+ data.userID);   
    }

    getReminder(data){
        console.log("data in reminder--43",data);
        return this.http.get(this.apiBaseurl+'getReminder' + '/' + data.userID);
    }
    getBin(data){
        console.log("data in deletednotes--43",data);
        return this.http.get(this.apiBaseurl+ 'getBin' + '/' + data.userID);
    }

    getLabels(data){
        console.log("data in deletednotes--43",data);
        return this.http.get(this.apiBaseurl+ 'getLabels' + '/' + data.userID);
    }
    
    imageupload(image) {
        console.log("image at service: ",image);
        
        const userID =localStorage.getItem('id');
        const formData = new FormData();
        formData.append('image',image);
        console.log("image at service: ",formData);
        
        return this.http.post(this.apiBaseurl+ 'imageupload'+"/"+userID,formData);
    }
    getProfile(data){
        return this.http.get(this.apiBaseurl+ 'getProfile' + '/' + data.userID);
    }

    addLabeltoNote(data){
        console.log("data on addLabel to note",data);
        return this.http.post(this.apiBaseurl+ 'addLabeltoNote'+ '/',data);
    }
     
    removeLabel(data){
        console.log("data on removeLabel to note",data);
        return this.http.post(this.apiBaseurl+ 'removeLabel'+ '/',data);
    }
    addLabel(data){
        return this.http.post(this.apiBaseurl+'addLabel'+ '/',data);
    }
    deleteLabel(data){
        return this.http.post(this.apiBaseurl+ 'deleteLabel'+ '/',data);
    }
    
}
    

