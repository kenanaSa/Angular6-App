import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UiModule } from './ui/ui.module';
import { EquationComponent } from './equation/equation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    EquationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
