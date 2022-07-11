import { TouchableOpacity } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin: ${responsiveHeight(8)}px 10px 10px 10px;
`;

export const IconContainer = styled(TouchableOpacity)``;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONTS.SIZES.H1};
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  text-align: center;
`;
