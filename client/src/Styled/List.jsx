import styled from 'styled-components';

const StyleList = styled.ul`
    display: ${({ flex }) => flex && 'flex'};
    flex-wrap: ${({ flexWrap }) => flexWrap && 'wrap'};
    justify-content: ${({ jContent }) => jContent};
    gap: ${({ gap }) => gap}px;
    margin-bottom: ${({ mrBottom }) => mrBottom}px;
    max-height: 80%;
    overflow-y: scroll;
`;

export function List(props) {
  return <StyleList {...props} />;
}
