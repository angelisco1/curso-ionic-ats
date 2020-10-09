import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StorageService } from '../storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  formUsuario: FormGroup;

  constructor(private router: Router, private navController: NavController, private formBuilder: FormBuilder, private storageService: StorageService) { }

  ngOnInit() {
    // this.formUsuario = new FormGroup({
    //   nombre: new FormControl('', Validators.required),
    //   password: new FormControl('', Validators.required),
    // });
    this.formUsuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  crearUsuario() {
    // console.log('Creando usuario...');
    // setTimeout(() => {
    //   // this.router.navigate(['/info']);
    //   this.navController.navigateRoot('/');
    // }, 2000)
    // console.log(this.formUsuario)
    const usuario = { ...this.formUsuario.value, id: uuidv4() };
    this.storageService.saveUsuario(usuario)
      .then(() => {
        this.navController.navigateRoot('/');
      });

  }

}
