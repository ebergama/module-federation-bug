import React from 'react';
import { MyStyledButton } from 'esm-package';

// const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <MyStyledButton>my button</MyStyledButton>
    {/*<React.Suspense fallback="Loading Button">*/}
    {/*  <RemoteButton />*/}
    {/*</React.Suspense>*/}
  </div>
);

export default App;
