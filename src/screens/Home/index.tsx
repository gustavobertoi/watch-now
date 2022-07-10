import React, { useCallback, useEffect, useState } from "react";
import { FlatList, TouchableOpacity, useWindowDimensions } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import { Layout } from "../../layout";
import Badge, { BadgeColor } from "../../components/Badge";
import ShowComponent from "../../components/Show";

import { useTvMaze } from "../../hooks";
import { showMock } from "../../mocks";
import { stripTags } from "../../utils";
import { Show } from "../../types";

import * as S from "./styles";

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [show, setShow] = useState<Show>(showMock);

  const dimensions = useWindowDimensions();
  const client = useTvMaze();

  const onPressShow = (show: Show) => {};

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

  useEffect(() => {
    client
      .shows()
      .then(({ isError, body }) => {
        if (isError) return;
        setShows(body);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout type="black">
      <S.Container>
        <S.Logo>WATCH NOW</S.Logo>

        <S.TitleContainer>
          <Entypo name="progress-two" size={32} color="white" />
          <S.Title>Soon</S.Title>
        </S.TitleContainer>

        <S.ShowCard width={dimensions.width}>
          <S.ShowImagePreview
            width={dimensions.width}
            source={{
              uri: show.image.original,
            }}
          >
            <S.ShowInformation>
              <S.ShowTitle>{show.name}</S.ShowTitle>
              <S.ShowDescription>{stripTags(show.summary)}</S.ShowDescription>
            </S.ShowInformation>
            <Badge color={BadgeColor.SECONDARY} text={show.status} />
          </S.ShowImagePreview>
          <S.ShowActions>
            <Badge
              color={BadgeColor.PRIMARY}
              icon="clock"
              text="Episodes soon..."
              disabled={isDisabled()}
            />
            <S.ShowDetails>
              <S.ShowDetailsText>{`Language: ${show.language}`}</S.ShowDetailsText>
              <S.ShowDetailsText>{`Network: ${show.network.name}`}</S.ShowDetailsText>
              <S.ShowDetailsText>{`Country: ${show.network.country.name}`}</S.ShowDetailsText>
            </S.ShowDetails>
          </S.ShowActions>
        </S.ShowCard>

        <S.TitleContainer>
          <Octicons name="video" size={32} color="white" />
          <S.Title> Available shows</S.Title>
        </S.TitleContainer>

        <S.ShowsContainer>
          <FlatList
            key="shows"
            data={shows}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onPressShow(item)}>
                <ShowComponent key={item.id} image={item.image.original} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            bounces={false}
            horizontal
          />
        </S.ShowsContainer>
      </S.Container>
    </Layout>
  );
}
