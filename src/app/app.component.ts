import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GithubInfo';  

  public repos = null;
  public username = null;

  getUsername(){
    this.username = (<HTMLInputElement>document.getElementById('usernameInput')).value;
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
     
    const data = fetch('https://api.github.com/users/'+ this.username +'/repos')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(_ => this.repos =  _);
  }


  ngOnInit(){
    // let Octokit = require('@octokit/rest')
    // let octokit = new Octokit({
    //   auth: {
    //       username: 'dv66',
    //       password: '.Heydipto9396',
    //       async on2fa () {
    //           // example: ask the user
    //           return prompt('Two-factor authentication Code:')
    //       }
    //   }
    //   // auth:'dv66' 
    // });


    require('es6-promise').polyfill();
    require('isomorphic-fetch');
     
    const data = fetch('https://api.github.com/users/Remian/repos')
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(_ => this.repos =  _);
    
  }

}
