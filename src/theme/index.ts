import { RFValue } from "react-native-responsive-fontsize";

export default {
  COLORS: {
    BACKGROUND: "#F7F7F7",

    PRIMARY_900: "#E21221",
    SECONDARY_900: "#181A20",
    TERTIARY_900: "#5246BA",

    BLACK_900: "#333333",

    WHITE_900: "#FFFF",

    GRAY_500: "#C3C3C3",
    GRAY_700: "#7E7E7E",
  },
  FONTS: {
    REGULAR: "Inter_300Light",
    MEDIUM: "Inter_500Medium",
    BOLD: "Inter_700Bold",
    SIZES: {
      H1: `${RFValue(22)}px`,
      H2: `${RFValue(20)}px`,
      H3: `${RFValue(18)}px`,
      H4: `${RFValue(16)}px`,
      TEXT1: `${RFValue(14)}px`,
      TEXT2: `${RFValue(12)}px`,
    },
  },
};
