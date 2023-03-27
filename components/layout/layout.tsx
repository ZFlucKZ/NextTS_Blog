import React, { Fragment, PropsWithChildren } from "react";
import type { AppProps } from "next/app";

import MainNavigation from "./main-navigation";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
