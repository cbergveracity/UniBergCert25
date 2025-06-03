'use client';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import CanvasHitsWrap from './CanvasHitsWrap';

const CanvasHits = (props: ComponentProps) => {
  return (
    <div className="canvas-hits">
      <CanvasHitsWrap {...props} />
    </div>
  );
};

export default CanvasHits;
