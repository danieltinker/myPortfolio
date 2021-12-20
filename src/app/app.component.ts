import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { ActivatedRoute, Router } from '@angular/router';
interface myImage {
  url: string;
  imageName: string;
}

interface MyFields {
  fieldTitle: string;
  description: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  fileUrl = "/Users/danielbaruch/Documents/Git/myPortfolio/src/assets/Daniel Baruch's CV.pdf"
  title = 'myPortfolio';
  paragraphes: string[] = [
    'My name is Daniel Baruch (25), I’m based in Tel Aviv. I’m an electrical engineer pursuing a Computer Science B.Sc. at Tel Aviv University. My passion is to seize the day and I do exactly that by play sports, make art & learn new things every day.',
    'After graduating with a degree in electrical engineering from azrieli collage of engineering (GPA 88.2), I spent three years serving in the IAF Engineering Department. There I became fascinated with programming and algorithms, and started pursuing a Computer Sciense degree (currently on my 2nd year).'
  ]
  images: myImage[] = [];
  myf: MyFields[] = [];

  constructor(private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.images = [{ url: 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/119197926_10218068964535267_4712003871451872684_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FMuFZSDvUPUAX88431v&_nc_ht=scontent.fhfa1-1.fna&oh=dffdcafd7c24e1ad2727ccabb4f2a117&oe=61B7DEC5', imageName: 'profile' },
    { url: 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/119197926_10218068964535267_4712003871451872684_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FMuFZSDvUPUAX88431v&_nc_ht=scontent.fhfa1-1.fna&oh=dffdcafd7c24e1ad2727ccabb4f2a117&oe=61B7DEC5', imageName: 'portrait' },
    { url: 'https://scontent.ftlv1-1.fna.fbcdn.net/v/t39.30808-6/255502538_10220541088376818_6313776523963309167_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=efrhrgeOyVsAX_ozzt6&_nc_ht=scontent.ftlv1-1.fna&oh=85d7ad96131e2a2bc5644c873b30f756&oe=6197772C', imageName: 'guitarImage' }];

    this.myf = [{ fieldTitle: 'Electronics', description: 'Ive conducted several experiments that validate airplanes and drones power system safety, plus gave professional solutions that helped prepare the Air crafts during preflight.' },
    { fieldTitle: 'Software Development', description: 'Python based software who takes excel sheets and aircraft power system data, and creates a database that helps forecasting potential generator overload and battery failures.' },
    { fieldTitle: 'Languages', description: 'Hebrew, English, Spanish,Java, Python, C++, Matlab, HTML, CSS, JavaScript.' },
    { fieldTitle: 'Art', description: 'Im a self-taught artist & musician. you can find some of my work ony gallery' }];
  }
   
  HomeNav(){
    this.router.navigate([''],{ relativeTo: this.route })
  }

  GalleryNav(){
    this.router.navigate(['Gallery'],{ relativeTo: this.route })
  }

  carrerNav(){
    this.router.navigate([''],{ relativeTo: this.route })
  }

}

