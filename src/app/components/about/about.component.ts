import { Component } from '@angular/core';
import { Headerdata, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  private uidata: Headerdata = {
    title: 'Sobre Nosotros',
    subtitle: 'Hazlo tú mismo: Arma y configura tu PC paso a paso.',
    thumbnail: 'https://ideogram.ai/assets/progressive-image/balanced/response/kl1h1HsaQ_iTvtJjHAiqvA'
  }

  constructor(private headerService: HeaderService){
    headerService.uidata.set(this.uidata)
  }

}
