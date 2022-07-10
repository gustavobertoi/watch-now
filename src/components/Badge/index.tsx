import { FontAwesome5 } from "@expo/vector-icons";

import * as S from "./styles";

export enum BadgeColor {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

export type BadgeProps = Omit<S.ContainerProps, "disabled"> & {
  text: string;
  disabled?: boolean;
  icon?: string;
};

export default function Badge({
  color,
  text,
  disabled = false,
  icon,
}: BadgeProps) {
  return (
    <S.Container color={color} disabled={disabled}>
      {icon && <FontAwesome5 name={icon} size={12} color="white" />}
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
