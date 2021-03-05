import { Global, css } from '@emotion/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url('#font-to-import');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
        `}
      />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
