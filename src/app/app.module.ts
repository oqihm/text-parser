import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { AppComponent } from './app.component';
import { TextParserComponent } from './text-parser/text-parser.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { NavigationService } from './services/navigation.service';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { OverlayService } from './services/overlay.service';
import { HttpClientModule } from '@angular/common/http';
import { SideOverlayComponent } from './shared/side-overlay/side-overlay.component';
import { PopupService } from './services/popup.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextParserComponent,
    ComponentTwoComponent,
    AboutComponent,
    SideOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule here
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NavigationService, OverlayService, PopupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
