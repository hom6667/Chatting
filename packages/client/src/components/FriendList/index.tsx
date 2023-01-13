import React from "react";
import styled from "@emotion/styled/macro";

const Base = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 64px 0;
`;

export interface Props {
  children?: React.ReactNode;
}

const FriendList: React.FC<Props> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default FriendList;

// https://www.youtube.com/watch?v=Knes9ih5ObM&t=1s
