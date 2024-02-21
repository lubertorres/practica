import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  nuevoCliente: any = {}; 

  constructor(public modal:NgbModal) {
  }
  ngOnInit(): void{

  }



  guardarCliente() {
    if (this.validarCedula() &&
      this.validarTelefono() &&
      this.validarTel10Dig() && 
      this.validarNombres()) {
      let clientesGuardados: any[] = JSON.parse(localStorage.getItem('clientes') || '[]'); // Obtener clientes guardados del LocalStorage
  
      clientesGuardados.push(this.nuevoCliente);
  
      localStorage.setItem('clientes', JSON.stringify(clientesGuardados));
  
      console.log('Cliente guardado en LocalStorage:', this.nuevoCliente);
      location.reload();

    } else {
      var msgAlerta = "Campo cedula: 10 caracteres sólo numeros .\nCampo nombre: 25 caracteres sólo letras .\nCampo apellidos: 40 caracteres sólo letras.\nCampo Teléfono: 10 dígitos sólo números, que empiece con 09 ";
      alert('Por favor, revisa los campos ingresados.\n'+ msgAlerta);
    }
  }
  

  validarCedula(): boolean {
    return /^\d{10}$/.test(this.nuevoCliente.cedula);
  }
  validarTel10Dig(): boolean {
    return /^\d{10}$/.test(this.nuevoCliente.cedula);
  }

  validarTelefono(): boolean {
    
    return /^09/.test(this.nuevoCliente.telefono);
  }
  validarNombres(): boolean {
    return /^[a-zA-Z]{1,25}$/.test(this.nuevoCliente.nombres);
  }
  validarApellidos(): boolean {
    return /^[a-zA-Z]{1,40}$/.test(this.nuevoCliente.apellidos);
  }
}