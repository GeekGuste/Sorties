import { Component } from '@angular/core';
import { NgbDate, NgbModule, NgbAlertModule, NgbDatepickerModule, NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DatepickerLimit } from './home.model';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FrenchDatepickerI18nService, I18n } from '../shared/service/french-datepicker-i18n.service';
import { NgbDateFrenchParserFormatter } from '../shared/service/ngb-date-french-parser-formatter.service';
import { SITUATION_OPTIONS } from '../shared/model/data';
import { OutingDeclaration } from '../shared/model/outing';

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
  SITUATION_OPTIONS = SITUATION_OPTIONS;

  currentOutingDeclarations: OutingDeclaration[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.today = new Date();
    this.todayDatePicker = { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDate() }
    this.outingDate = this.todayDatePicker;
    this.minDate = { year: this.today.getFullYear() - 1, month: this.today.getMonth(), day: this.today.getDate() };
    this.maxDate = { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDate() + 1 };
  }

  ngOnInit(){
    this.outingDeclarationForm = this.formBuilder.group({
      date: [this.todayDatePicker, [Validators.required]],
      name: ["", [Validators.required, Validators.maxLength(20)]],
      situation: ["", [Validators.required]],
      details: [""]
    });
    this.setDateToToday();
  }

  onDateSelect($event: NgbDate): void {
    this.outingDeclarationForm.patchValue({ date: $event });
  }

  setDateToToday(): void {
    this.outingDeclarationForm.patchValue({ date: this.todayDatePicker });
  }

  onSubmit(){
    const payload = this.outingDeclarationForm.getRawValue();
    this.currentOutingDeclarations.push({
      date: new Date(payload.date.year, payload.date.month - 1, payload.date.day),
      name: payload.name,
      details: payload.details,
      situation: payload.situation
    });
    this.outingDeclarationForm.patchValue({name: "", details: "", situation: ""});
  }
}
