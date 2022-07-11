import styled from "styled-components/native";

export const Logo = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY_900};
  font-size: ${({ theme }) => theme.FONTS.SIZES.LOGO};
  font-family: ${({ theme }) => theme.FONTS.BLACK};

  margin-top: 50px;
  text-align: center;
`;
