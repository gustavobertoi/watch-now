import { ImageBackground } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

import styled from "styled-components/native";

type CardProps = {
  width: number;
};

type InformationProps = {
  color: "WHITE" | "SECONDARY";
};

export const TileImage = styled(ImageBackground)`
  width: 250px;
  height: 400px;
  margin: 0 5px 0 5px;
`;

export const ShowCard = styled.View.attrs<CardProps>(({ width }) => ({
  width: width,
}))<CardProps>`
  border-radius: 8px;

  margin: 12px 12px 12px 0;

  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

  height: ${responsiveHeight(55)}px;

  elevation: 5;
`;

export const ShowCardImagePreview = styled(ImageBackground).attrs<CardProps>(
  ({ width }) => ({
    width: width,
  })
)<CardProps>`
  height: ${responsiveHeight(45)}px;

  justify-content: flex-end;
  align-items: flex-end;
`;

export const ShowCardInformation = styled.View`
  flex-direction: column;
`;

export const ShowCardInformationTitle = styled.Text<InformationProps>`
  color: ${({ theme, color }) =>
    color === "WHITE" ? theme.COLORS.WHITE_900 : theme.COLORS.SECONDARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H3};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  margin: 10px;
`;

export const ShowCardInformationDescription = styled.Text<InformationProps>`
  color: ${({ theme, color }) =>
    color === "WHITE" ? theme.COLORS.WHITE_900 : theme.COLORS.SECONDARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT2};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin: 10px;
`;

export const ShowCardActions = styled.View`
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 10px;
`;

export const ShowCardDetails = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ShowCardDetailsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT3};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin: 2px;
`;
