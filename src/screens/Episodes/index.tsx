import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, useWindowDimensions } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { PageHeader } from "../../components/PageHeader";
import { ShowCard } from "../../components/Show";

import { Layout } from "../../layout";
import { useTvMaze } from "../../hooks";
import { Episode } from "../../types";

import * as S from "./styles";
import { EpisodesNavigationParams } from "../../types/navigation";
import { stripTags } from "../../utils";

export default function Seasons() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const dimensions = useWindowDimensions();
  const client = useTvMaze();

  const { show, season } = route.params as EpisodesNavigationParams;

  const onHandleBack = () => {
    navigation.navigate("Seasons", { show });
  };

  useEffect(() => {
    client.seasons
      .episodes(season.id)
      .then(({ isError, body }) => {
        if (isError) return;
        setEpisodes(body);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout type="black">
      <S.Container>
        <PageHeader title="Episodes" onPress={onHandleBack} />
        <FlatList
          key="episodes"
          data={episodes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <S.Episode width={dimensions.width}>
              <S.EpisodeTitle>{`Episode ${item.number} ${
                item.name ? `- ${item.name}` : ""
              }`}</S.EpisodeTitle>
              <TouchableOpacity onPress={() => {}}>
                <S.EpisodeImage
                  width={dimensions.width}
                  source={{
                    uri:
                      item?.image?.original ??
                      item.image?.medium ??
                      show.image.original,
                  }}
                >
                  <AntDesign name="play" size={80} color="white" />
                </S.EpisodeImage>
              </TouchableOpacity>
              <S.EpisodeSummary>{stripTags(item.summary)}</S.EpisodeSummary>
            </S.Episode>
          )}
          bounces={false}
          horizontal
        />
      </S.Container>
    </Layout>
  );
}
