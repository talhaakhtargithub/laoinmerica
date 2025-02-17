import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  faqList = [
    { question: 'Ingredients', answer: 'Our spices are crafted with the finest ingredients...', showAnswer: false },
    { question: 'How To Use?', answer: 'Store spices in a cool, dry place...', showAnswer: false },
    { question: 'Health Benefits', answer: 'Yes, all our spices are gluten-free.', showAnswer: false },
  ];

  toggleAnswer(question: any) {
    question.showAnswer = !question.showAnswer;
  }
}
