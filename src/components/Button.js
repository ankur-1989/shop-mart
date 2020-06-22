import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--brandColor);
  border-color: ${(props) =>
    props.back ? "var(--brandBlue)" : "var(--brandColor)"};
  color: ${(props) => (props.back ? "var(--brandBlue)" : "var(--brandColor)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transistion: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.back ? "var(--brandBlue)" : "var(--brandColor)"};
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
