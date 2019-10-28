import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  potrawy: string[] = ['Devolaj',
  'Rolady',
  'Pieczeń z kurczaka', 
  'Golonka', 
  'Bigos',
  'Kotlet schabowy z szynką i serem',
  'Fasolka',
  'Gołąbki z mięsem i ryżem',
  'Kotlet mielony',
  'Kotlet schabowy',
  'Kotlet ziemniaczany',
  'Kotlet jajeczny',
  'Kotlet z kaszy',
  'Kotlet drobiowy',
  'Pieczeń ze schabu',
  'Pierogi ruskie',
  'Pierogi z kapustą i grzybami',
  'Pierogi z mięsem',
  'Pierogi z serem',
  'Pierogi ze szpinakiem',
  'Ryba w zalewie octowej',
  'Kurczak w zalewie octowej',
  'Udka faszerowane',
  'Udka z kurczaka',
  'Szaszłyki',
  'Łazanki'
]

  zupy: string[] = [
    'Żurek',
    'Pomidorowa',
    'Koperkowa',
    'Zupa ogórkowa',
    'Barszcz',
    'Rosół',
    'Grochówka'
  ]

  dodatki:string[] = [
    'Czerwona kapusta gotowana',
    'Galert wieprzowy',
    'Kapusta zasmażana',
    'Kluski ciemne',
    'Kluski jasne',
    'Kluski z mięsem',
    'Kluski ze szpinakiem',
    'Krokiety z kapustą i grzybami',
    'Krokiety z mięsem',
    'Parzybuły',
    'Roladki drobiowe',
    'Sałatka makaronowa',
    'Smalec',
    'Sos pieczeniowy',
    'Sos pomidorowy',
    'Surówka z białej kapusty',
    'Surówka z marchewki',
    'Szałot śląski',
    'Śledź w oleju',
    'Tymbaliki drobiowe'
  ]
  constructor() { }

  ngOnInit() {
  }

}
