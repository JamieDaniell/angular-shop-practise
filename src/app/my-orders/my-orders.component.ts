import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { UserService } from './../user.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

    constructor(private auth: AuthService, private userService: UserService) { }

    ngOnInit() {
    }

}
