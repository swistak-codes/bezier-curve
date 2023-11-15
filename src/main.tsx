import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { BezierCurve } from './bezier-curve';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BezierCurve />
  </StrictMode>
);
