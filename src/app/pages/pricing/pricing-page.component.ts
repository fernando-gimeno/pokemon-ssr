import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    // if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page';
    // }
    
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Esta es mi Pricing Page',
    });
    this.meta.updateTag({
      name: 'og:title',
      content: 'Esta es mi Pricing Page',
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola, Mundo, Pricing, Fernando, Gimeno, Curso, Angular, Pro',
    });
  }
}
