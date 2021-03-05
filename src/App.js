import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap");

          * {
            font-family: Source Code Pro;
            color: #333333;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: #f2f2f2;
          }
        `}
      />
      <Router>
        <Switch>
          <Route path="/favorites" component={Favorites} />
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
