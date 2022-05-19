import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
