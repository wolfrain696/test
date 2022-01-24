import styled from 'styled-components';

const StyleBox = styled.div`
    position: ${({ fixed, relative }) => (fixed && 'fixed') || (relative && 'relative')};
    width: ${({ wd }) => wd};
    height: ${({ height }) => height || '100%'};
    background: ${({ bgColor }) => bgColor};
    margin: ${({ mr }) => mr};
    padding:  ${({ pd }) => pd};
    display: ${({ display }) => display};
    justify-content: ${({ center }) => center && 'center'};
    align-items: ${({ center }) => center && 'center'};
    transform: scale(${({ tScale }) => tScale});
    opacity: ${({ opacity }) => opacity};
    transition: 0.3s opacity ease;
`;

export function Box(props) {
  return <StyleBox {...props} />;
}
