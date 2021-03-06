import {Component, Input} from "@angular/core";

@Component({
  selector: 'search',
  template: `
    <form role="search" class="help-hero__input" data-search="" data-instant="true" autocomplete="off">
      <input name="utf8" type="hidden" value="✓">
      <input type="search" name="query" id="query" placeholder="Search" autocomplete="off"
             aria-label="Search">
    </form>
  `,
  styles: [`
    .help-hero__input {
      
      border: 1px solid #AEEEE1;
      
    }
  `]
})
export class SearchComponent {
  @Input() background;

}
