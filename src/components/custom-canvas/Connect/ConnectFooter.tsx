import { FC } from 'react';
import {
  ComponentProps,
  UniformSlot,
} from '@uniformdev/canvas-next-rsc/component';

type ConnectfooterParameters = {
  displayName?: string;
};

// Here, you can add slots names to be used on the canvas side.
enum ConnectfooterSlots {
  ConnectfooterSlot = 'connectfootertop',
}
type ConnectfooterProps = ComponentProps<ConnectfooterParameters, ConnectfooterSlots>;

const ConnectFooterComponent: FC<ConnectfooterProps> = ({ component, context, slots }) => (
  <footer className='border-t-2 py-4'>
    <UniformSlot data={component} context={context} slot={slots.connectfootertop} />
  </footer>
);

export default ConnectFooterComponent; 