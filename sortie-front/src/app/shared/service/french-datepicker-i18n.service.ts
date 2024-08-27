import { Component, inject, Injectable } from '@angular/core';
import { NgbAlertModule, NgbDatepickerI18n, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const I18N_VALUES = {
	fr: {
		weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
		months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
		weekLabel: 'sem',
	},
	// other languages you would support
} as any;

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
	language = 'fr';
}

@Injectable({
  providedIn: 'root'
})
export class FrenchDatepickerI18nService extends NgbDatepickerI18n {
  private _i18n = inject(I18n);

	getWeekdayLabel(weekday: number): string {
		return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
	}
	override getWeekLabel(): string {
		return I18N_VALUES[this._i18n.language].weekLabel;
	}
	getMonthShortName(month: number): string {
		return I18N_VALUES[this._i18n.language].months[month - 1];
	}
	getMonthFullName(month: number): string {
		return this.getMonthShortName(month);
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.day}-${date.month}-${date.year}`;
	}
}
