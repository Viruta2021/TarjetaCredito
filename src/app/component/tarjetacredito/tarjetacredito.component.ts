import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjetacredito',
  templateUrl: './tarjetacredito.component.html',
  styleUrls: ['./tarjetacredito.component.css']
})
export class TarjetacreditoComponent implements OnInit {
  listtarjeta:any[] = [
  { titular: "juan perez", numeroTarjeta:"7636756", fechaexpiracion:"06/30",cvc:"33554"   },
  { titular: "mili", numeroTarjeta:"667973", fechaexpiracion:"01/22",cvc:"5666"   },

  ];
  form: FormGroup;
  constructor(private fb : FormBuilder) {

    this.form = this.fb.group({
      titular:[''],
      numeroTarjeta:[''],
      fechaexpiracion:[''],
      cvc:['']

    });
   }

  ngOnInit(): void {
  }

  agregarTarjeta(){
    
    alert("ssss");
      const tarjeta:any = {

        titular : this.form.get("titular")?.value,
        numeroTarjeta : this.form.get("numeroTarjeta")?.value,
        fechaexpiracion : this.form.get("fechaexpiracion")?.value,
        cvc : this.form.get("cvc")?.value,
      }

      this.listtarjeta.push(tarjeta);
      this.form.reset();
  }

}
