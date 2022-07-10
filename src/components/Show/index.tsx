import * as S from "./styles";

type ShowProps = {
  image: string;
};

export default function Show({ image }: ShowProps) {
  return (
    <S.Container
      source={{
        uri: image,
      }}
    ></S.Container>
  );
}
