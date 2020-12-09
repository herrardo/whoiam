import { Component } from '@angular/core';

import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Gerardo Vázquez';
  job = 'Frontend Engineer';
  description = 'I am a Frontend Engineer specialized in fashion websites who love to deliver interesting experiences to users. I also have strong communication and organizational skills to work with other teams or clients. I am currently working on search experiences. Skills: Javascript, React, Vue.';
  smallImage = '../assets/img/ger_cinci.jpg';
  bigImage = '../assets/img/ger_cinci.jpg';

  // Icons
  rrss = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/gerardovazquezvarela/' },
    { icon: faInstagram, url: 'https://www.instagram.com/herr_ardo/' },
    { icon: faTwitter, url: 'https://twitter.com/herr_ardo' },
    { icon: faGithub, url: 'https://https://github.com/herrardo' },
  ]

  navigateTo(url: string) {
    window.open(url);
  }

}
