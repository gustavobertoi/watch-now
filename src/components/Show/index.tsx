import { useWindowDimensions, TouchableOpacity } from "react-native";

import Badge, { BadgeColor } from "../Badge";
import { stripTags } from "../../utils";

import * as S from "./styles";

type ShowTileCardProps = {
  image: string;
};

export function ShowTileCard({ image }: ShowTileCardProps) {
  return (
    <S.TileImage
      source={{
        uri: image,
      }}
    ></S.TileImage>
  );
}

type ShowCardProps = {
  style: {
    direction: "top" | "center" | "bottom";
    color: "WHITE" | "SECONDARY";
  };
  show: {
    name: string;
    summary: string;
    image: string;
    language: string;
    status: string;
    showStatus: boolean;
    networkName: string;
    countryName: string;
  };
  action: {
    showAction: boolean;
    icon?: string;
    color?: BadgeColor;
    text?: string;
    disabled?: boolean;
    onPress?: () => {};
  };
};

export function ShowCard({ style, show, action }: ShowCardProps) {
  const dimensions = useWindowDimensions();
  return (
    <S.ShowCard width={dimensions.width}>
      {style.direction === "top" && (
        <S.ShowCardInformation>
          <S.ShowCardInformationTitle color={style.color}>
            {show.name}
          </S.ShowCardInformationTitle>
          <S.ShowCardInformationDescription color={style.color}>
            {stripTags(show.summary)}
          </S.ShowCardInformationDescription>
        </S.ShowCardInformation>
      )}
      <S.ShowCardImagePreview
        width={dimensions.width}
        source={{
          uri: show.image,
        }}
      >
        {style.direction === "center" && (
          <S.ShowCardInformation>
            <S.ShowCardInformationTitle color={style.color}>
              {show.name}
            </S.ShowCardInformationTitle>
            <S.ShowCardInformationDescription color={style.color}>
              {stripTags(show.summary)}
            </S.ShowCardInformationDescription>
          </S.ShowCardInformation>
        )}
        {show.showStatus && (
          <Badge color={BadgeColor.SECONDARY} text={show.status} />
        )}
      </S.ShowCardImagePreview>
      {style.direction === "bottom" && (
        <S.ShowCardInformation>
          <S.ShowCardInformationTitle color={style.color}>
            {show.name}
          </S.ShowCardInformationTitle>
          <S.ShowCardInformationDescription color={style.color}>
            {stripTags(show.summary)}
          </S.ShowCardInformationDescription>
        </S.ShowCardInformation>
      )}
      {action.showAction &&
        action?.color &&
        action?.icon &&
        action?.text &&
        action?.disabled && (
          <S.ShowCardActions>
            <TouchableOpacity onPress={action.onPress}>
              <Badge
                color={action.color}
                icon={action.icon}
                text={action.text}
                disabled={action.disabled}
              />
            </TouchableOpacity>
            <S.ShowCardDetails>
              <S.ShowCardDetailsText>{`Language: ${show.language}`}</S.ShowCardDetailsText>
              <S.ShowCardDetailsText>{`Network: ${show.networkName}`}</S.ShowCardDetailsText>
              <S.ShowCardDetailsText>{`Country: ${show.countryName}`}</S.ShowCardDetailsText>
            </S.ShowCardDetails>
          </S.ShowCardActions>
        )}
    </S.ShowCard>
  );
}
