import styled from "styled-components/native";

import { responsiveHeight } from "react-native-responsive-dimensions";

type EpisodeProps = {
  width: number;
};

type EpisodeImageProps = {
  width: number;
};

export const Container = styled.View`
  margin-top: 20px;
`;

export const Episode = styled.View<EpisodeProps>`
  width: ${({ width }) => width}px;
  height: ${responsiveHeight(50)}px;

  margin: 5px;
`;

export const EpisodeTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H4};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin: 6px;
`;

export const EpisodeImage = styled.ImageBackground<EpisodeImageProps>`
  width: ${({ width }) => width}px;
  height: ${responsiveHeight(30)}px;
  justify-content: center;
  align-items: center;
`;

export const EpisodeSummary = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT1};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};

  margin-top: 10px;
`;
