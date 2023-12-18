import { Outlet } from "react-router-dom";
import * as S from "./styles";
import { Sidebar } from "./components/Sidebar";

export function Default() {
  return (
    <S.Default>
      <Sidebar />
      <S.WhiteBackground>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.WhiteBackground>
    </S.Default>
  );
}
