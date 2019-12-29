import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useIsTabbing } from '../.';

const App = () => {
  const isTabbing = useIsTabbing();
  console.log(isTabbing);

  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
