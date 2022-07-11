import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, useWindowDimensions } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import { PageHeader } from "../../components/PageHeader";
import { ShowCard } from "../../components/Show";

import { Layout } from "../../layout";
import { useTvMaze } from "../../hooks";
import { Season } from "../../types";
import { SeasonsNavigationParams } from "../../types/navigation";

import * as S from "./styles";

export default function Seasons() {
  const [seasons, setSeasons] = useState<Season[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const dimensions = useWindowDimensions();
  const client = useTvMaze();

  const { show } = route.params as SeasonsNavigationParams;

  const onHandleBack = () => {
    navigation.navigate("Home");
  };

  const onPressSeason = (season: Season) => {
    navigation.navigate("Episodes", { season, show });
  };

  useEffect(() => {
    client.shows
      .seasons(show.id)
      .then(({ isError, body }) => {
        if (isError) return;
        setSeasons(body);
      })
      .catch(console.error);
  }, []);

  return (
    <Layout type="black">
      <S.Container>
        <PageHeader title="Seasons" onPress={onHandleBack} />

        <FlatList
          key="seasons"
          data={seasons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <S.Season width={dimensions.width}>
              <S.SeasonTitle>{`Season ${item.number} ${
                item.name ? `- ${item.name}` : ""
              }`}</S.SeasonTitle>
              <TouchableOpacity onPress={() => onPressSeason(item)}>
                <S.SeasonImage
                  width={dimensions.width}
                  source={{
                    uri:
                      item?.image?.original ??
                      item.image?.medium ??
                      show.image.original,
                  }}
                >
                  <AntDesign name="play" size={80} color="white" />
                </S.SeasonImage>
              </TouchableOpacity>
            </S.Season>
          )}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <ShowCard
          style={{
            direction: "top",
            color: "WHITE",
          }}
          show={{
            name: show.name,
            image: show.image.original,
            summary: show.summary,
            language: show.language,
            status: show.status,
            showStatus: false,
            networkName: show.network?.name ?? "",
            countryName: show.network?.country?.name ?? "",
          }}
          action={{
            showAction: false,
          }}
        />
      </S.Container>
    </Layout>
  );
}
