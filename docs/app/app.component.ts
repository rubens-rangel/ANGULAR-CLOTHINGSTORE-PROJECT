import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    { name: 'Camiseta Azul', price: 'R$ 19,99', image: 'assets/camisa-azul.jpg' },
    { name: 'Calça Jeans', price: 'R$ 39,99', image: 'assets/calca-jeans.jpg' },
    { name: 'Vestido Floral', price: 'R$ 29,99', image: 'assets/vestido-floral.jpg' },
    { name: 'Jaqueta de Couro', price: 'R$ 79,99', image: 'assets/jaqueta_couro.jpg' },
    { name: 'Bone', price: 'R$ 15,00', image: 'assets/bone.jpg' },
    { name: 'Bermuda', price: 'R$ 35,00', image: 'assets/bermuda.jpg' },
    { name: 'Tenis', price: 'R$ 30,00', image: 'assets/tenis.jpg' },
  ];
}