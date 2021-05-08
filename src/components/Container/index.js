import styled from "styled-components";

export const Container = styled.main`
  display: grid;

  grid-template-columns: 1fr min(65ch, calc(100% - 2 * var(--gap-width))) 1fr;
  grid-column-gap: var(--gap-width);

  grid-row-gap: var(--font-size-lg);

  & > * {
    grid-column: 2;
  }

  & > .full-bleed {
    grid-column: 1 / -1;
  }
`;