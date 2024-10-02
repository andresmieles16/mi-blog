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
    subtitle: 'Tu fuente confiable de información sobre el mundo de las computadoras.',
    thumbnail: 'https://assets.prestashop2.com/sites/default/files/wysiwyg/pagina-sobre-nosotros-quienes-somos.png'
  }

  constructor(private headerService: HeaderService){
    headerService.uidata.set(this.uidata)
  }

}
