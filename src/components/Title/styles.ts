import styled from "styled-components/native";

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
