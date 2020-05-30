import React from "react";

const authcontext = React.createContext({
  authenticated: false,
  login: () => {},
  name: "Bunny"
});

export default authcontext;
