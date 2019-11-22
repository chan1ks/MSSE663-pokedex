import { ɵNgClassImplProvider__POST_R3__ } from '@angular/common';

export class Pokemon {
  id: number;
  name: string;
  type: Array<string>;
  summary: string;
  height: number;
  category: string;
  weight: number;
  abilities: Array<string>;
  moves: Array<string>;
  gender: string;
  description: string;

  constructor(id: number, name:string, type: Array<string>, height:number, weight:number , abilities: Array<string>){
    this.id=id;
    this.name=name;
    this.type = type;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
  }
}
