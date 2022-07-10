import styled from "styled-components/native";
import { View } from "react-native";

export type LayoutTypeProps = "white" | "black";

type Props = {
  background: LayoutTypeProps;
};

export const Container = styled(View).attrs<Props>(({ theme, background }) => ({
  backgroundColor:
    background === "white"
      ? theme.COLORS.WHITE_900
      : theme.COLORS.SECONDARY_900,
}))<Props>`
  flex: 1;
`;
