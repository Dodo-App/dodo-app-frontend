/// <reference types="vinxi/types/client" />
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StartClient } from '@tanstack/start';
import { createRouter } from './router';

const router = createRouter();

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <StartClient router={router} />
  </StrictMode>
);
