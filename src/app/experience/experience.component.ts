import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ExperienceComponent {

  location: string = "Gurugram, Haryana, India"

  calculateExperience(from: string, to?: string) {
    
    var today = to ? new Date(to) : new Date();
    var yearNow = today.getFullYear();
    var monthNow = today.getMonth();
    var dateNow = today.getDate();

    var dob = new Date(from);

    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age:{years:any, months:any, days:any};
    var ageString = '';
    var yearString = '';
    var monthString = '';

    var yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    if (age.years > 1) yearString = ' years';
    else yearString = ' year';
    if (age.months > 1) monthString = ' months';
    else monthString = ' month';

    if (age.years > 0 && age.months > 0 && age.days > 0)
      ageString =
        age.years +
        yearString +
        ', ' +
        age.months +
        monthString;
    else if (age.years == 0 && age.months == 0 && age.days > 0)
      ageString = '1 mon';
    else if (age.years > 0 && age.months == 0 && age.days == 0)
      ageString = age.years + yearString;
    else if (age.years > 0 && age.months > 0 && age.days == 0)
      ageString = age.years + yearString + ' and ' + age.months + monthString;
    else if (age.years == 0 && age.months > 0 && age.days > 0)
      ageString =age.months + monthString;
    else if (age.years > 0 && age.months == 0 && age.days > 0)
      ageString = age.years + yearString;
    else if (age.years == 0 && age.months > 0 && age.days == 0)
      ageString = age.months + monthString;
    else ageString = 'Oops! Could not calculate age!';

    return ageString;
  }
}
