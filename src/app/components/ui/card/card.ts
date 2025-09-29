import { Component, Input, Directive, TemplateRef } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Card {
  @Input() className = '';
}

/* Directives to mimic React "CardHeader", "CardTitle", etc. */
@Directive({ selector: '[appCardHeader]' })
export class CardHeaderDirective {
  public templateRef = inject(TemplateRef<unknown>);
}

@Directive({ selector: '[appCardTitle]' })
export class CardTitleDirective {
  public templateRef = inject(TemplateRef<unknown>);
}

@Directive({ selector: '[appCardDescription]' })
export class CardDescriptionDirective {
  public templateRef = inject(TemplateRef<unknown>);
}

@Directive({ selector: '[appCardAction]' })
export class CardActionDirective {
  public templateRef = inject(TemplateRef<unknown>);
}

@Directive({ selector: '[appCardContent]' })
export class CardContentDirective {
  public templateRef = inject(TemplateRef<unknown>);
}

@Directive({ selector: '[appCardFooter]' })
export class CardFooterDirective {
  public templateRef = inject(TemplateRef<unknown>);
}
