import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router){
    
  }
  usernameLog: string='';
  passwordLog: string='';

  msg: string='';

  recargar(){
    location.reload();
  }
  Ingresar() {
    console.log('Nombre de usuario: ' + this.usernameLog);
    console.log('Contraseña: ' + this.passwordLog);

    if (this.usernameLog == "admin" && this.passwordLog == "admin") {
      console.log("Ingresar");
      this.router.navigate(['/home']);
    }
    else {
      this.msg = 'Usuario o contraseña incorrectos'
      setTimeout(this.recargar, 2000);

    }
  }
}
