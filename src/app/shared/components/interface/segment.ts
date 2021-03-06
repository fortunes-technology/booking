import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'segment',
  template: `
    <div [ngClass]="{intro:  type === 'intro', alternate:  type === 'alternate', action:  type === 'action', lovely: type === 'lovely', flat: type === 'flat'}" class="segment">
      <div [ngClass]="{flat:  type === 'flat'}" class="container">
        <div class="discover">
          <div class="discover__intro">
            <div class="content content--center">
              <div *ngIf="pretitle" class="pretitle">{{ pretitle}}</div>
              <h1 [ngClass]="{intro:  type === 'intro'}" class="content__headline">{{ title || 'Some of what you can discover'}}</h1>
              <p [ngClass]="{intro:  type === 'intro'}" class="subtitle" *ngIf="subtitle">{{ subtitle || 'Some of what you can discover' }}</p>
              <img *ngIf="type === 'intro'" src="assets/intro.jpg" alt="">
            </div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .segment {
      padding: 6em 0 3em;
    }
    .alternate {
      background: #FAFAFB;
    }
    .lovely {
      background: #F7E7E7;
    }
    .action {
      background: #384368;
      color: #FFFFFF;
      padding: 3em 0;
    }
    .flat {
      padding: 3em 0 0;
    }
    .discover__intro {
      margin-bottom: 0;
    }
    .content--main {
      max-width: 920px;
      margin-left: auto;
      margin-right: auto;
    }

    .content__headline {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
      margin-bottom: 10px;
      line-height: 1.2;
      text-align: center;
    }

    .content__headline {
      font-size: 42px;
      letter-spacing: -.035em;
    }
    .subtitle {
      opacity: 0.7;
    }
  
    .pretitle {
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 16px;
    }
    div.intro {
      border-bottom: 1px solid #e8e9e9;
    }
    h1.intro {
      font-size: 32px;
      line-height: 42px;
  
    }
    
    p.intro {
      max-width: 570px;
      margin: 30px auto 85px auto;
      font-size: 18px;
      line-height: 28px;
      opacity: 0.8;
      
    }
  `]
})
export class SegmentComponent implements OnInit {
  @Input() pretitle;
  @Input() title;
  @Input() subtitle;
  @Input() type;


  constructor() {
  }

  ngOnInit() {
  }

}
