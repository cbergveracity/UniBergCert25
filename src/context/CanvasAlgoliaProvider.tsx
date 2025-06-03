'use client';
import React, { createContext, useContext } from 'react';

const DefaultIndexContext = createContext<string | undefined>(undefined);

const CanvasAlgoliaProvider = ({ defaultIndexName, children }: { defaultIndexName: string; children: any }) => {
  return <DefaultIndexContext.Provider value={defaultIndexName}>{children}</DefaultIndexContext.Provider>;
};

export const GetDefaultIndexName = () => useContext(DefaultIndexContext);

export default CanvasAlgoliaProvider;
