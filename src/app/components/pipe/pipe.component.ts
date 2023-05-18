import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  user: User = {
    username: "codermonkey",
    name: "nicolò", // mi serve un pipe che mi trasformi in uppercase la prima lettera, sia per name che surname.
    surname: "esposito",
    yob: 1999, // mi serve un pipe che calcola l'età
    // mi serve un pipe che tronchi la description dopo 30 caratteri, e aggiunga 3 puntini.
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia modi totam eos eius repudiandae odit similique cupiditate nesciunt atque consequuntur dicta explicabo expedita deleniti, voluptate excepturi, delectus laboriosam ducimus."
  }

}

export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}
