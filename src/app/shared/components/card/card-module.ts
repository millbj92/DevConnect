import {NgModule} from '@angular/core';
import {
  Card,
  CardActions,
  CardAvatar,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardLgImage,
  CardMdImage,
  CardSmImage,
  CardSubtitle,
  CardTitle,
  CardTitleGroup,
  CardXlImage,
} from './card.component'


@NgModule({
  imports: [],
  exports: [
    Card,
    CardHeader,
    CardTitleGroup,
    CardContent,
    CardTitle,
    CardSubtitle,
    CardActions,
    CardFooter,
    CardSmImage,
    CardMdImage,
    CardLgImage,
    CardImage,
    CardXlImage,
    CardAvatar,
  ],
  declarations: [
    Card, CardHeader, CardTitleGroup, CardContent, CardTitle, CardSubtitle,
    CardActions, CardFooter, CardSmImage, CardMdImage, CardLgImage, CardImage,
    CardXlImage, CardAvatar,
  ],
})
export class CardModule {}