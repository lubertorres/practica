import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  clienteIn: string = '';
  nuevoCliente: any = {}; 
  clienteEditado: any = {}; // Cliente que se está editando

  constructor(private router: Router, public modal:NgbModal) {}

  redirectHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    let storedData = localStorage.getItem('clientes');
    if (storedData) {
      this.clientes = JSON.parse(storedData);
    }
  }




  filtrarPorCedula(): void {
    if (this.clienteIn.trim() === '') {
      let storedData = localStorage.getItem('clientes');
      if (storedData) {
        this.clientes = JSON.parse(storedData);
      }
    } else {
      this.clientes = this.clientes.filter(cliente => cliente.cedula === this.clienteIn.trim());
    }
  }



  eliminarCliente(cliente: any): void {
    this.clientes = this.clientes.filter(c => c !== cliente);
    
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  editarCliente(cliente: any): void {
    // Copiar el cliente para editar
    this.clienteEditado = { ...cliente };
  }

  guardarCambios(): void {
    // Encontrar el índice del cliente que se está editando
    const index = this.clientes.findIndex(c => c.id === this.clienteEditado.id);
    if (index !== -1) {
      // Actualizar los detalles del cliente en la lista
      this.clientes[index] = this.clienteEditado;
      // Guardar la lista actualizada en el LocalStorage
      localStorage.setItem('clientes', JSON.stringify(this.clientes));
      // Limpiar el cliente editado
      this.clienteEditado = {};
    }
  }
}





//constructor(private httpclient: HttpClient, private router: Router) {
    // setInterval(() => {
    //   console.log('Username' + this.username);
    //   console.log('Password' + this.password);
    //   this.date = Date.now().toString();
    // }, 500);
  //}
// postPetition() {
  //   const headers = new HttpHeaders().append('content-type', 'application/json');
  //   const options = { headers: headers };
  //   const body = {
  //     username: this.username,
  //     password: this.password,
  //   };

  //   this.httpclient
  //   .post<any>('https://api.github.com/users', {})
  //   .subscribe((data) => {
  //     console.log(data);
  //   });
  // }


  // getPetition() {
  //   this.httpclient.get("https://rickandmortyapi.com/api/character")
  //   .subscribe((data : any) => {
  //     this.response = data.results
  //     console.log(data);
  //   });
  // }
