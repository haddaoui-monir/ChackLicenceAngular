import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofusers',
  templateUrl: './listofusers.component.html',
  styleUrls: ['./listofusers.component.css']
})
export class ListofusersComponent implements OnInit {

  users=[
    new user(1,new Date(),new Date(),'last version 001'),
    new user(1,new Date(),new Date(),'last version 001'),
    new user(1,new Date(),new Date(),'last version 001'),
    new user(1,new Date(),new Date(),'last version 001'),
  ]
  constructor() { }

  ngOnInit() {
  }
}
export class user{
  constructor(
    public id: number,
    public datedebut:Date,
    public datefin: Date,
    public description: String
  ){
    
  }
}