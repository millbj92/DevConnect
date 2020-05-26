import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Directive,
  Input,
  Optional,
  Inject,
} from '@angular/core';
import {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';


/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'card-content, [card-content], [CardContent]',
  host: {'class': 'card-content'}
})
export class CardContent {}

/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: `card-title, [card-title], [CardTitle]`,
  host: {
    'class': 'card-title'
  }
})
export class CardTitle {}

/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: `card-subtitle, [card-subtitle], [CardSubtitle]`,
  host: {
    'class': 'card-subtitle'
  }
})
export class CardSubtitle {}

/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'card-actions',
  exportAs: 'CardActions',
  host: {
    'class': 'card-actions',
    '[class.card-actions-align-end]': 'align === "end"',
  }
})
export class CardActions {
  /** Position of the actions inside the card. */
  @Input() align: 'start' | 'end' = 'start';
}

/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */
@Directive({
  selector: 'card-footer',
  host: {'class': 'card-footer'}
})
export class CardFooter {}

/**
 * Image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-image], [CardImage]',
  host: {'class': 'card-image'}
})
export class CardImage {}

/**
 * Image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-sm-image], [CardImageSmall]',
  host: {'class': 'card-sm-image'}
})
export class CardSmImage {}

/**
 * Image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-md-image], [CardImageMedium]',
  host: {'class': 'card-md-image'}
})
export class CardMdImage {}

/**
 * Image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-lg-image], [CardImageLarge]',
  host: {'class': 'card-lg-image'}
})
export class CardLgImage {}

/**
 * Large image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-xl-image], [CardImageXLarge]',
  host: {'class': 'card-xl-image'}
})
export class CardXlImage {}

/**
 * Avatar image used in a card, needed to add the  CSS styling.
 * @docs-private
 */
@Directive({
  selector: '[card-avatar], [CardAvatar]',
  host: {'class': 'card-avatar'}
})
export class CardAvatar {}


/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - card-title
 * - card-subtitle
 * - card-content
 * - card-actions
 * - card-footer
 */
@Component({
  selector: 'card',
  exportAs: 'Card',
  templateUrl: 'card.html',
  styleUrls: ['card.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'card focus-indicator',
    '[class._animation-noopable]': '_animationMode === "NoopAnimations"',
  }
})
export class Card {
  // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode?: string) {}
}


/**
 * Component intended to be used within the `<card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */
@Component({
  selector: 'card-header',
  templateUrl: 'card-header.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'card-header'}
})
export class CardHeader {}


/**
 * Component intended to be used within the `<card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */
@Component({
  selector: 'card-title-group',
  templateUrl: 'card-title-group.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {'class': 'card-title-group'}
})
export class CardTitleGroup {}
