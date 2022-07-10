import { ImageBackground } from "react-native";

import styled from "styled-components/native";
import { responsiveHeight } from "react-native-responsive-dimensions";

type CardProps = {
  width: number;
};

type MoviePreviewProps = {
  width: number;
};

export const Container = styled.ScrollView``;

export const Logo = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.LOGO};
  font-family: ${({ theme }) => theme.FONTS.BLACK};

  margin-top: 50px;
  text-align: center;
`;

export const TitleContainer = styled.View`
  margin-top: 20px;
  margin-left: 10px;

  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H2};
  font-family: ${({ theme }) => theme.FONTS.BOLD};

  margin-left: 8px;
  margin-right: 8px;
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

export const ShowImagePreview = styled(
  ImageBackground
).attrs<MoviePreviewProps>(({ width }) => ({
  width: width,
}))<MoviePreviewProps>`
  height: ${responsiveHeight(45)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ShowStatus = styled.View`
  border: 3px solid ${({ theme }) => theme.COLORS.TERTIARY_900};
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.TERTIARY_900};

  justify-content: center;
  align-items: center;

  margin: 10px;

  width: 150px;
  height: 40px;
`;

export const ShowStatusText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT2};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ShowInformation = styled.View`
  flex-direction: column;
`;

export const ShowTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H3};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;

export const ShowDescription = styled.Text`
  color: ${({ theme }) => theme.COLORS.SECONDARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT3};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin-top: 10px;
`;

export const ShowActions = styled.View`
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 10px;
`;

export const ShowDetails = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ShowDetailsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.TEXT3};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};

  margin: 2px;
`;

export const ShowsContainer = styled.View`
  margin-top: 30px;
`;
