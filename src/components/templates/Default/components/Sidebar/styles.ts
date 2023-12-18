import styled from "styled-components";

export const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 68px;

  background-color: #f4f4f6;
  width: ${({ $isOpen }) => ($isOpen ? "246px" : "100px")};
  height: 100%;

  padding: 20px;
  padding-top: 32px;

  transition: width 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: ${({ $isOpen }) => ($isOpen ? "100px" : "246px")};
  }
`;

export const Initials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  width: 58px;
  height: 58px;

  border-radius: 12px;
  background: #5d26f3;

  color: #fff;

  font-size: 24px;
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  color: #4a4a4a;
  font-size: 15px;
  font-weight: 600;

  height: 50px;
  background-color: #fff;

  border-radius: 14px;
  padding: 8px 12px;

  overflow: hidden;

  span {
    padding-left: 40px;
  }
`;

export const ButtonOpen = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: -16px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 22px;
  width: 34px;
  height: 34px;

  border-radius: 50%;
  background: #5d26f3;

  transform: ${({ $isOpen }) => ($isOpen ? "rotate(0deg)" : "rotate(180deg)")};

  transition: transform 0.3s ease-in-out;
`;

export const Circle = styled.div`
  min-width: 34px;
  min-height: 34px;
  background-color: #5d26f3;
  border-radius: 50%;
`;
