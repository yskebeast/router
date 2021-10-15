import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page2DetailA } from "../Page2DetailA";
import { Page2DetailB } from "../Page2DetailB";
import { Page1Routers } from "./Page1Routers";
import { Page2Routers } from "./Page2Routers";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routers.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routers.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      {/* <Route exact path="/page2">
        <Page2 />
      </Route>
        <Route path="/page2/detailA">
          <Page2DetailA />
        </Route>
        <Route path="/page2/detailB">
          <Page2DetailB />
        </Route> */}
    </Switch>
  );
};
