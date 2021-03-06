import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

import { addDays } from 'date-fns';
import { addWeeks } from 'date-fns';
import { addMonths } from 'date-fns';


/**
 * Change the view date to the next view. For example:
 *
 * ```
 * &lt;button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view"&gt;
 *  Next
 * &lt;/button&gt;
 * ```
 */
@Directive({
  selector: '[mwlCalendarNextView]'
})
export class CalendarNextViewDirective {

  /**
   * The current view
   */
  @Input() view: string;

  /**
   * The current view date
   */
  @Input() viewDate: Date;

  /**
   * Called when the view date is changed
   */
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  /**
   * @hidden
   */
  @HostListener('click')
  onClick(): void {

    const addFn: any = {
      day: addDays,
      week: addWeeks,
      month: addMonths
    }[this.view];

    this.viewDateChange.emit(addFn(this.viewDate, 1));

  }

}
