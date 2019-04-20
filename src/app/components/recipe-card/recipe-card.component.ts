import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: any = {};
  @Input() index: number;

  @Output() recipeSelecionado: EventEmitter<number>;


  constructor(private router: Router) {
    this.recipeSelecionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verRecipe() {
    this.recipeSelecionado.emit(this.index);
  }

}
