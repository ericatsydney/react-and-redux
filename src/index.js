import React from 'react';
import { render } from 'react-dom';
import Panel from './Panel';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Panel/>
  </div>
);

render(<App />, document.getElementById('root'));
