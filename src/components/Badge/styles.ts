import styled, { DefaultTheme } from "styled-components/native";

export enum Color {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

export type ContainerProps = {
  color: Color | string;
  disabled: boolean;
};

function getColor(theme: DefaultTheme, color: Color | string) {
  const colors = {
    [Color.PRIMARY]: theme.COLORS.PRIMARY_900,
    [Color.SECONDARY]: theme.COLORS.SECONDARY_900,
    [Color.TERTIARY]: theme.COLORS.TERTIARY_900,
    [Color.GREEN]: theme.COLORS.GREEN_900,
    [Color.YELLOW]: theme.COLORS.YELLOW_700,
  };
  return Object.keys(colors).includes(color)
    ? colors[color as Color]
    : theme.COLORS.PRIMARY_900;
}

export const Container = styled.View<ContainerProps>`
  border: 3px solid ${({ theme, color }) => getColor(theme, color)};
  border-radius: 8px;

  background-color: ${({ theme, color }) => getColor(theme, color)};

  justify-content: center;
  align-items: center;

  margin: 10px;

  width: 150px;
  height: 40px;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT2};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
