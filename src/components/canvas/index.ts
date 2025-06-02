import baseCskComponentsMapping from '@uniformdev/csk-components/components/canvas';
import Button from './Button';
import Header from './Header';
import NavigationFlyout from './NavigationFlyout';
import NavigationGroup from './NavigationGroup';
import NavigationLink from './NavigationLink';

export const cskComponentsMapping = {
  ...baseCskComponentsMapping,
  button: { component: Button },
  header: { component: Header },
  navigationFlyout: { component: NavigationFlyout },
  navigationGroup: { component: NavigationGroup },
  navigationLink: { component: NavigationLink },
};
