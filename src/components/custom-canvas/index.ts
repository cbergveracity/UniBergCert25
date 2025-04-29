import { ComponentMapping } from '@uniformdev/csk-components/utils/createComponentResolver';
import Container from './Container';
import CustomComponent from './CustomComponent';
import ConnectFooterComponent from './Connect/ConnectFooter';
import {ConnectHeaderComponent, ConnectHeaderLevelOne, ConnectHeaderLevelTwo } from './Connect/ConnectHeader';
import { connect } from 'http2';

// Here, you can add your own component or customize an existing CSK component with your logic or styles.
export const customComponentsMapping: ComponentMapping = {
  // This is a simple example of how you can add your own components.
  customComponent: { component: CustomComponent },
  connectfooter: { component: ConnectFooterComponent },
  connectHeader: { component: ConnectHeaderComponent },
  connectHeaderLevelOne: { component: ConnectHeaderLevelOne },
  connectheaderleveltwo: { component: ConnectHeaderLevelTwo },
  // This is an overridden CSK Container component.
  container: { component: Container },
  //Connect replicated components
};