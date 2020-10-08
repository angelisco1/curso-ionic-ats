import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  constructor(private router: Router, private navController: NavController) { }

  ngOnInit() {
  }

  crearUsuario() {
    console.log('Creando usuario...');
    setTimeout(() => {
      // this.router.navigate(['/info']);
      this.navController.navigateRoot('/');
    }, 2000)
  }

}
