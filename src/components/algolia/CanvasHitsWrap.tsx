import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { renderHits } from './Hit';

const CanvasHitsWrap = (componentProps: ComponentProps) => {
  return <div className="hits">{renderHits(componentProps.component)}</div>;
};

export default CanvasHitsWrap;
