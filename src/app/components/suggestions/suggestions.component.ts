import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-suggestions-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suggestions.component.html'
})
export class SuggestionsComponent {
  suggestion = '';

  sendSuggestion(form: NgForm): void {
    const message = this.suggestion.trim();

    if (!message) {
      this.suggestion = '';
      form.control.markAllAsTouched();
      return;
    }

    const text = encodeURIComponent(
      `Olá! Gostaria de enviar uma sugestão para o Espaço Atibaia:\n\n${message}`
    );
    window.open(`https://wa.me/5511965781078?text=${text}`, '_blank', 'noopener,noreferrer');
  }
}
