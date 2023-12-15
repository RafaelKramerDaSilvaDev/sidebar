import { Sidebar } from "../../components/Sidebar";

import * as S from "./styles";
import { One } from "./tabs/one";
import { Three } from "./tabs/three";
import { Two } from "./tabs/two";

const tabs = {
  one: <One />,
  two: <Two />,
  three: <Three />,
};

export function Home() {
  const tabSelected = "two";

  return (
    <S.Home>
      <Sidebar />
      <S.WhiteBackground>
        <S.Content>{tabs[tabSelected]}</S.Content>
      </S.WhiteBackground>
    </S.Home>
  );
}
