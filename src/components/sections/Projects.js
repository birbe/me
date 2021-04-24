import React from "react";
import styled from "styled-components";

import { Card } from "../Card";

import { font, breakpoint } from "../../theme/config";

const StyledProjects = styled.section`
  grid-column: 1 / span 12;

  ${breakpoint.md} {
    grid-column: 1 / span 6;
  }

  ${breakpoint.lg} {
    grid-column: 1 / span 3;
  }
`;

const SectionTitle = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${font.size.base};
  margin-bottom: 1em;
`;

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledProjects>
  );
};
