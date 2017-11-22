import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';   
import { AppUser } from './models/app-user';
import 'rxjs/add/operator/map'

// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
import { FirebaseListObservable , FirebaseObjectObservable , AngularFireDatabase} from "angularfire2/database";
@Injectable()
export class UserService {

    constructor(private db: AngularFireDatabase) { }
  
    // save a user to the database
    save(user: firebase.User)
    {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        })  
    }
    
    // get a user from firebase
    get( uid: string ): FirebaseObjectObservable<AppUser>
    {
        return this.db.object('/users/'+ uid)
    }
}
