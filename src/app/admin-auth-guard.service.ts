import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AppUser } from './models/app-user';

@Injectable()
export class AdminAuthGuard implements CanActivate {

     
    constructor(private auth: AuthService , private userService: UserService) { }
    
    // Boolean Obserable
    //return the result
    //     // 1. get the current user from an observable 
    //     // 2. Get the user object from the service (Observable)of type AppUser
    //     // 3.check if the appUser is an admin 
    //     // 4. the obsrevable returns a boolean value
    canActivate(): Observable<boolean>
    {
        return this.auth.appUser$
            .map(appUser => appUser.isAdmin)
    };   

}
