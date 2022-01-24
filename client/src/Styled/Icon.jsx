import styled from 'styled-components';

const StyleIcon = styled.img`
  width: ${({ wd }) => wd || '100%'};
  height: ${({ hd }) => hd};
  margin: ${({ mr }) => mr};
  padding: ${({ pd }) => pd};
  display: ${({ display }) => display || 'block'};
  transform: rotate(${({ rotate }) => rotate}deg);
`;

export function Icon(props) {
  return <StyleIcon {...props} />;
}
