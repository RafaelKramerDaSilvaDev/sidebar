import { useState } from "react";
import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Sidebar $isOpen={isOpen}>
      <S.Initials>RA</S.Initials>
      <S.ButtonGroup $isOpen={isOpen}>
        <S.Button>
          <S.Circle />
          <span>One</span>
        </S.Button>
        <S.Button>
          <S.Circle />
          <span>Two</span>
        </S.Button>
        <S.Button>
          <S.Circle />
          <span>Three</span>
        </S.Button>
      </S.ButtonGroup>
      <S.ButtonOpen onClick={() => setIsOpen((prev) => !prev)} $isOpen={isOpen}>
        <IoIosArrowBack />
      </S.ButtonOpen>
    </S.Sidebar>
  );
}
