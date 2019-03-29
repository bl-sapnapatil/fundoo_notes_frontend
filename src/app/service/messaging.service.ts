
import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

// import 'rxjs/add/operator/take';
import { BehaviorSubject } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class MessagingService {

messaging ;
currentMessage = new BehaviorSubject(null)
constructor() { 
try{
firebase.initializeApp({
'messagingSenderId': '324312227145'
});
this.messaging = firebase.messaging();
}catch(err){
console.error('Firebase initialization error', err.stack);
}
}

getPermission() {
this.messaging.requestPermission()
.then(() => {
return this.messaging.getToken()
})
.then(token => {
})
.catch((err) => {
console.log('Unable to get permission to notify.', err);
});
}

receiveMessage() {
this.messaging.onMessage((payload) => {
console.log("Message received. ", payload);
this.currentMessage.next(payload)
});

}
}

