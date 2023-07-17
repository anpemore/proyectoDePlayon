import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    nombre:string="";
    apellido:string="";
    telefono:string="";
    email:string="";
    
    VerificarCampos(){         
      if(this.nombre=="")
          alert(this.nombre);
       /*  if(this.apellido=="")
            alert(this.apellido);
         if(this.telefono=="")
            alert(this.telefono);
         if(this.email=="")
            alert(this.email);*/
    }
}
