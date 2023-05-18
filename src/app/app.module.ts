import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { TruncDescriptionPipe } from './pipes/trunc-description/trunc-description.pipe';
import { YobToAgePipe } from './pipes/yob-to-age/yob-to-age.pipe';
import { SpecialButtonDirective } from './directives/special-button.directive';


@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveComponent,
    FirstUpperPipe,
    YobToAgePipe,
    TruncDescriptionPipe,
    SpecialButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
