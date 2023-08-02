import { CardProvider } from '@/context/CardContext'
import React from 'react'
import { FC, ReactNode } from 'react';

type CardProviderProps = {
    children: ReactNode;
  };

export const GlobalProvider:FC<CardProviderProps> = ({ children }) => {
  return <CardProvider>{ children }</CardProvider>
}
