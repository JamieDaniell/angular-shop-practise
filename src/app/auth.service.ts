import { ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { UserService } from  './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
@Injectable()
export class AuthService {

    // an observable 
    // promises to return a value so when you want to get the
    // current user you jsut subscirbe to the the user$ variable 
    user$: Observable<firebase.User>;
    constructor( private afAuth: AngularFireAuth , private route: ActivatedRoute , private userService: UserService) 
    { 
        this.user$ = afAuth.authState;
    }
    
    login()
    {
        // get the return Url if login successful 
        // must store in local storage as google wont rember it 
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl' , returnUrl);
        
        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()); 
    }
    
    logout()
    {
        this.afAuth.auth.signOut();
    }
    
    get appUser$(): Observable<AppUser>
    {
         return this.user$
            .switchMap(user => {
                if(user)
                {
                    return this.userService.get(user.uid)
                }
                else
                {
                    // observable of type null
                    return Observable.of(null)
                }
            });
    }

}
