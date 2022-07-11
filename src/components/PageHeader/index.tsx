import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type PageHeaderProps = TouchableOpacityProps & {
  title: string;
};

export function PageHeader({ title, ...rest }: PageHeaderProps) {
  return (
    <S.HeaderContainer>
      <S.IconContainer {...rest}>
        <Feather name="chevron-left" color="#E21221" size={32} />
      </S.IconContainer>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
    </S.HeaderContainer>
  );
}
