import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About Page');
    this.meta.updateTag({
      name: 'description',
      content: 'Este es mi About Page',
    });
    this.meta.updateTag({ name: 'og:title', content: 'Este es mi About Page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Hola, Mundo, Fernando, Gimeno, Curso, Angular, Pro',
    });
  }
}
