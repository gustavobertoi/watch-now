import * as S from "./styles";

export type TitleContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function TitleContainer({ children }: TitleContainerProps) {
  return <S.TitleContainer>{children}</S.TitleContainer>;
}

export type TitleProps = {
  text: string;
};

export function Title({ text }: TitleProps) {
  return <S.Title>{text}</S.Title>;
}
