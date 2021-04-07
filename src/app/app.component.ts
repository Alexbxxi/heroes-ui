import { Component } from '@angular/core';
import { MarvelService } from './services/marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvelApp';

  public listHeroes = [];
  public offset = '0';
  public limit = '100';

  constructor(
    private heroeS: MarvelService
) {}

  ngOnInit(): void {
    
    this.heroeS.consultarPersonajesMarvel(this.offset, this.limit).subscribe(res => {
      console.log('Respuesta heroes', res);
      this.listHeroes = res.data.results;
    })
  }

}
