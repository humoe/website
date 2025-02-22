import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MassageComponent } from './pages/massage/massage.component';
import { TaichiComponent } from './pages/taichi/taichi.component';
import { GallerieComponent } from './pages/gallerie/gallerie.component';
import { EntrepriseComponent } from './pages/entreprise/entreprise.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImgBandComponent } from './components/img-band/img-band.component';
import { OnTopComponent } from './components/on-top/on-top.component';
import { ShiatsuComponent } from './pages/shiatsu/shiatsu.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { QuotemarksComponent } from './components/quotemarks/quotemarks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { NewsComponent } from './components/news/news.component';
import { CarrouselComponent } from './components/carousel/carrousel.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ChapterComponent } from './components/chapter/chapter.component';
import { TestimonyComponent } from './components/testimony/testimony.component';
import { ArticleComponent } from './components/article/article.component';
import { PostComponent } from './components/post/post.component';
import { MatTableModule } from '@angular/material/table';
import { LibraryComponent } from './pages/library/library.component';
import { LibraryComponentComponent } from './pages/library/library-component/library-component.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AProposComponent } from './pages/a-propos/a-propos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MassageComponent,
    TaichiComponent,
    GallerieComponent,
    EntrepriseComponent,
    NavBarComponent,
    ImgBandComponent,
    OnTopComponent,
    ShiatsuComponent,
    ClickOutsideDirective,
    QuotemarksComponent,
    FooterComponent,
    ThumbnailComponent,
    NewsComponent,
    CarrouselComponent,
    ChapterComponent,
    TestimonyComponent,
    ArticleComponent,
    PostComponent,
    LibraryComponent,
    LibraryComponentComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    NgbCarouselModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  exports: [
    ArticleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'building',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/building.svg'));
    iconRegistry.addSvgIcon(
      'massage',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/massage.svg'));
    iconRegistry.addSvgIcon(
      'quotemark',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/quotemark.svg'));
    iconRegistry.addSvgIcon(
      'shiatsu',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/shiatsu.svg'));
    iconRegistry.addSvgIcon(
      'tai-chi',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/tai-chi.svg'));
    iconRegistry.addSvgIcon(
      'up-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/images/svg/up-arrow.svg'));
  }
}
