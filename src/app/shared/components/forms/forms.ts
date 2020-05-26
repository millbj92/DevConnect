import { Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Directive,
    Input,
    Optional,
    Inject,
    AfterViewInit,} from '@angular/core';


    @Directive({
        selector: '[form-input], [FormInput]',
        host: {'class': 'form-input'}
      })
      export class FormInput {}



  @Component({
    selector: 'form-group',
    exportAs: 'FormGroup',
    templateUrl: 'form-group.html',
    styleUrls: ['forms.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      'class': 'form-group',
    }
  })
  export class FormGroup {
    @Input() relative: boolean;
    constructor() {
    }
  }

  /*@Component({
    selector: 'form-input',
    exportAs: 'FormInput',
    templateUrl: 'form-input.html',
    styleUrls: ['forms.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      'class': 'input-group',
    }
  })
  export class FormInput {
    // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
    constructor() {}
  }*/