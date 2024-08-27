import { Component } from '@angular/core';
import { NgbDate, NgbModule, NgbAlertModule, NgbDatepickerModule, NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerLimit } from './home.model';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FrenchDatepickerI18nService, I18n } from '../shared/service/french-datepicker-i18n.service';
import { NgbDateFrenchParserFormatter } from '../shared/service/ngb-date-french-parser-formatter.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule, NgbDatepickerModule, NgbAlertModule, ReactiveFormsModule, JsonPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [
                I18n,
                { provide: NgbDatepickerI18n, useClass: FrenchDatepickerI18nService }, // define custom NgbDatepickerI18n provider
                { provide: NgbDateParserFormatter, useClass: NgbDateFrenchParserFormatter },
              ],
})
export class HomeComponent {
  today: Date;
  minDate: DatepickerLimit;
  maxDate: DatepickerLimit;
  outingDate: NgbDateStruct;
  todayDatePicker: NgbDateStruct;
  outingDeclarationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.today = new Date();
    this.todayDatePicker = { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDate() }
    this.outingDate = this.todayDatePicker;
    this.minDate = { year: this.today.getFullYear() - 1, month: this.today.getMonth(), day: this.today.getDate() };
    this.maxDate = { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDate() + 1 };
  }

  ngOnInit(){
    //this.outingDeclarationForm = this.qcs
    this.outingDeclarationForm = this.formBuilder.group({
      id: [""],
      date: [""],
      name: ["", [Validators.required, Validators.maxLength(20)]],
      situation: ["", [Validators.required]],
      details: [""]
    });
  }

  onDateSelect(): void {

  }

  setDateToToday(): void {
    this.outingDate = this.todayDatePicker;
  }
}
