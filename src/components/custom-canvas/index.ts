import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import Container from './Container';
import CustomComponent from './CustomComponent';
import ConnectFooterComponent from './Connect/ConnectFooter';
import {ConnectHeaderComponent, ConnectHeaderLevelOne, ConnectHeaderLevelTwo } from './Connect/ConnectHeader';
import {ContentAuthorComponent} from './Connect/ContentAuthor';
import { ArticleAgeComponent } from './Connect/ArticleHelpers';
import { FormattedDateComponent } from './UtilityWidgets/FormattedDate';
import { ImageCardComponent } from './Connect/ImageCard';
import { format } from 'path';

// Here, you can add your own component or customize an existing CSK component with your logic or styles.
export const customComponentsMapping: ComponentMapping = {
  // This is a simple example of how you can add your own components.
  customComponent: { component: CustomComponent },
  connectfooter: { component: ConnectFooterComponent },
  connectHeader: { component: ConnectHeaderComponent },
  connectHeaderLevelOne: { component: ConnectHeaderLevelOne },
  connectheaderleveltwo: { component: ConnectHeaderLevelTwo },
  contentauthor: { component: ContentAuthorComponent },
  articleAge: { component: ArticleAgeComponent },
  formattedDate: { component: FormattedDateComponent },
  imageCard: { component: ImageCardComponent },
  // This is an overridden CSK Container component.
  container: { component: Container },
  //Connect replicated components
};