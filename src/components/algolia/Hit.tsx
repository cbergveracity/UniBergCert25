'use client';
import { FC } from 'react';
import { Hits } from 'react-instantsearch';
import { ComponentInstance } from '@uniformdev/canvas';

enum HitTypes {
  Hit = 'algolia-hit',
}

export const renderHits = (component: ComponentInstance) => {
  const hitType = component?.slots?.hitComponent?.[0]?.type;
  switch (hitType) {
    case HitTypes.Hit:
      return <Hits hitComponent={Hit} />;
    default:
      return <Hits />;
  }
};

type HitComponent = {
  objectID: string;
  [name: string]: any;
};

const Hit = ({ hit }: { hit: HitComponent }) => {
  const { objectID = 'unknown', ...properties } = hit || {};

  return (
    <div>
      <h3>{`objectID: ${objectID}`}</h3>
      <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(properties)}</p>
    </div>
  );
};

export default Hit;
