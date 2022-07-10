import React, { useCallback, useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

import { Layout } from "../../layout";
import Badge, { BadgeColor } from "../../components/Badge";

import { useTvMaze } from "../../hooks";
import { showMock } from "../../mocks";

import { stripTags } from "../../utils";
import { Show } from "../../types";

import * as S from "./styles";

export default function Home() {
  const [show, setShow] = useState<Show>(showMock);

  const dimensions = useWindowDimensions();
  const client = useTvMaze();

  const isDisabled = useCallback(() => {
    const { status } = show;
    return status === "In Development";
  }, [show.status]);

  useEffect(() => {
    client.singlesearch
      .shows({
        q: "Powerpuff Girls",
      })
      .then(({ isError, body }) => {
        if (isError) return;
        setShow(body);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout type="black">
      <S.Container>
        <S.ShowCard width={dimensions.width}>
          <S.ShowImagePreview
            width={dimensions.width}
            source={{
              uri: show.image.original,
            }}
          >
            <Badge color={BadgeColor.SECONDARY} text={show.status} />
          </S.ShowImagePreview>
          <S.ShowInformation>
            <S.ShowTitle>{show.name}</S.ShowTitle>
            <S.ShowDescription>{stripTags(show.summary)}</S.ShowDescription>
          </S.ShowInformation>
          <S.ShowActions>
            <Badge
              color={BadgeColor.PRIMARY}
              icon="search-plus"
              text="Episodes"
              disabled={isDisabled()}
            />
            <S.ShowDetails>
              <S.ShowDetailsText>{`Language: ${show.language}`}</S.ShowDetailsText>
              <S.ShowDetailsText>{`Network: ${show.network.name}`}</S.ShowDetailsText>
              <S.ShowDetailsText>{`Country: ${show.network.country.name}`}</S.ShowDetailsText>
            </S.ShowDetails>
          </S.ShowActions>
        </S.ShowCard>
      </S.Container>
    </Layout>
  );
}
