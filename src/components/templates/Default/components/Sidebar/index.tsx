import { useState } from "react";
import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <S.Sidebar $isOpen={isOpen}>
      <S.Initials>RA</S.Initials>
      <S.ButtonGroup>
        <S.Button onClick={() => navigate("/")}>
          <S.Circle />
          <span>One</span>
        </S.Button>
        <S.Button onClick={() => navigate("/two")}>
          <S.Circle />
          <span>Two</span>
        </S.Button>
        <S.Button onClick={() => navigate("/three")}>
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
