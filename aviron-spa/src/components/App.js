import React from "react";

import Header from "./Header";
import TodoPrivateWrapper from "./Todo/TodoPrivateWrapper";
import TodoPublicWrapper from "./Todo/TodoPublicWrapper";
import OnlineUsersWrapper from "./OnlineUsers/OnlineUsersWrapper";

import { useAuth0 } from "./Auth/react-auth0-spa";
import { parseCookies } from "nookies";

const App = ({ idToken }) => {
  const { loading, logout } = useAuth0();

  const cookies = parseCookies();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header logoutHandler={logout} />
      <div>
        <h3>{cookies["X-Hasura-User-Id"]}</h3>
        <h3>{cookies["token"]}</h3>
        <h3>{cookies["X-Hasura-User-Id"]}</h3>
        <h3>{cookies["X-Hasura-User-Role"]}</h3>
      </div>
      <div className="row container-fluid p-left-right-0 m-left-right-0">
        <div className="row col-md-9 p-left-right-0 m-left-right-0">
          <div className="col-md-6 sliderMenu p-30">
            <TodoPrivateWrapper />
          </div>
          <div className="col-md-6 sliderMenu p-30 bg-gray border-right">
            <TodoPublicWrapper />
          </div>
        </div>
        <div className="col-md-3 p-left-right-0">
          <div className="col-md-12 sliderMenu p-30 bg-gray">
            <OnlineUsersWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
