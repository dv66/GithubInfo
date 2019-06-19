import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GithubInfo';
  public repos = [
    {name: "Neofile", lang: "java", stars: 40, updated: "20 May 2018"},
    {name: "Dist-Learning",  lang: "python", stars: 40, updated: "20 May 2018"},
    {name: "Sparkit Learn",  lang: "Scala", stars: 40, updated: "20 May 2018"}
  ];

}
