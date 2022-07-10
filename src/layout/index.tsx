import React, { ReactNode } from "react";
import { ViewProps } from "react-native";

type LayoutProps = ViewProps & {
  type?: S.LayoutTypeProps;
  children: ReactNode;
};

import * as S from "./styles";

export function Layout({ type = "white", children, ...rest }: LayoutProps) {
  return (
    <S.Container background={type} {...rest}>
      {children}
    </S.Container>
  );
}
