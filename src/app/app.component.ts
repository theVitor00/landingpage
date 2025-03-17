import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { BeneficiosComponent } from "./components/beneficios/beneficios.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { FaqComponent } from "./components/faq/faq.component";
import { MainCtaComponent } from "./components/main-cta/main-cta.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, BeneficiosComponent, TestimonialsComponent, FaqComponent, MainCtaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landingpage';
}
