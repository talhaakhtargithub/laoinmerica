import { Component } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component {
  faqList = [
    { question: 'What makes Lao in America spices unique?', answer: 'Our spices are crafted with the finest ingredients...', showAnswer: false },
    { question: 'How should I store the spices?', answer: 'Store spices in a cool, dry place...', showAnswer: false },
    { question: 'Are your spices gluten-free?', answer: 'Yes, all our spices are gluten-free.', showAnswer: false },
    { question: 'Are there any preservatives in your products?', answer: 'No, our products are free from preservatives.', showAnswer: false },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide.', showAnswer: false },
    { question: 'Can I return the products if I’m not satisfied?', answer: 'We offer a 30-day return policy...', showAnswer: false },
    { question: 'What is the best way to use these spices?', answer: 'Check out our recipe guide for inspiration...', showAnswer: false },
    { question: 'Are your products organic?', answer: 'Yes, most of our spices are certified organic.', showAnswer: false }
  ];

  faqColumns: any[][] = [];

  ngOnInit() {
    this.splitFaqIntoColumns();
  }

  splitFaqIntoColumns() {
    const columnCount = 2;
    const questionsPerColumn = Math.ceil(this.faqList.length / columnCount);

    for (let i = 0; i < columnCount; i++) {
      this.faqColumns.push(this.faqList.slice(i * questionsPerColumn, (i + 1) * questionsPerColumn));
    }
  }

  toggleAnswer(question: any) {
    question.showAnswer = !question.showAnswer;
  }
}
