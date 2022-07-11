import styled from "styled-components/native";

import { responsiveHeight } from "react-native-responsive-dimensions";

type SeasonProps = {
  width: number;
};

type SeasonImageProps = {
  width: number;
};

export const Container = styled.ScrollView`
  margin-top: 20px;
`;

export const Season = styled.View<SeasonProps>`
  width: ${({ width }) => width}px;
  height: ${responsiveHeight(35)}px;

  margin-right: 10px;
`;

export const SeasonTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H4};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin: 6px;
`;

export const SeasonImage = styled.ImageBackground<SeasonImageProps>`
  width: ${({ width }) => width}px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
