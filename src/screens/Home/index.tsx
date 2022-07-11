import React, { useCallback, useEffect, useState } from "react";
import { FlatList, TouchableOpacity, useWindowDimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Entypo, Octicons } from "@expo/vector-icons";

import { Layout } from "../../layout";
import Logo from "../../components/Logo";
import { BadgeColor } from "../../components/Badge";
import { ShowCard, ShowTileCard } from "../../components/Show";
import { TitleContainer, Title } from "../../components/Title";

import { useTvMaze } from "../../hooks";
import { showMock } from "../../mocks";
import { Show } from "../../types";

import * as S from "./styles";

export default function Home() {
  const [shows, setShows] = useState<Show[]>([]);
  const [show, setShow] = useState<Show>(showMock);

  const navigation = useNavigation();

  const client = useTvMaze();

  const onPressShow = (show: Show) => {
    navigation.navigate("Seasons", {
      show,
    });
  };

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
    client.shows
      .list()
      .then(({ isError, body }) => {
        if (isError) return;
        setShows(body);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout type="black">
      <S.Container>
        <Logo />

        <TitleContainer>
          <Entypo name="progress-two" size={32} color="white" />
          <Title text="Soon" />
        </TitleContainer>

        <ShowCard
          style={{
            direction: "center",
            color: "SECONDARY",
          }}
          show={{
            name: show.name,
            summary: show.summary,
            image: show.image.original,
            language: show.language,
            status: show.status,
            showStatus: isDisabled(),
            networkName: show.network.name,
            countryName: show.network.country.name,
          }}
          action={{
            showAction: true,
            icon: "clock",
            color: BadgeColor.PRIMARY,
            text: "Seasons soon...",
            disabled: true,
          }}
        />

        <TitleContainer>
          <Octicons name="video" size={32} color="white" />
          <Title text="Available shows" />
        </TitleContainer>

        <S.ShowsContainer>
          <FlatList
            key="shows"
            data={shows}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onPressShow(item)}>
                <ShowTileCard key={item.id} image={item.image.original} />
              </TouchableOpacity>
            )}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </S.ShowsContainer>
      </S.Container>
    </Layout>
  );
}
