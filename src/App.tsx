import React from "react";
import styled from "@emotion/styled";
import { MainRoutes } from "./routes";

const AppRoot = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppRoot>
      <MainRoutes />
    </AppRoot>
  );
};

export default App;
