# useIsTabbing
Hide browser tab outline until it's needed.

## Example using Styled Components

```jsx
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useIsTabbing } from 'use-is-tabbing';

const TabStyles = createGlobalStyle`
  a,
  button {
    &:focus {
      outline: 2px dashed var(--outline-color);
      outline-offset: 2px;
    }
  }
`;

const ActivateTabOutline = () => {
  const showTabOutline = useIsTabbing();

  return showTabOutline ? <TabStyles /> : null;
};

export default ActivateTabOutline;