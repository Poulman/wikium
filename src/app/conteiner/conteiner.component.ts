import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.css']
})


export class ConteinerComponent implements OnInit {

  @Input() ConteinerComponent;

  constructor() { }

  ngOnInit() {    

  }

}
