import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { SimpleCalculatorComponent } from './simple-calculator/simple-calculator.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    SimpleCalculatorComponent,
    DigitalClockComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
