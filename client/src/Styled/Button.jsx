import styled from 'styled-components';

const StyleButton = styled.button`
  display: ${({ display }) => display || 'block'};
  width: ${({ wd }) => wd};
  height: ${({ height }) => height};
  padding: ${({ pd }) => pd || '5px 10px'};
  margin: ${({ mr }) => mr};
  background: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ color }) => color || '#2771FC'};
  border-radius: ${({ radius }) => radius || '12px'};
  border: ${({ border }) => border || 'none'};
  box-shadow: ${({ shadow }) => shadow && '2px 9px 16px #e9edf1'};
  font-size: ${({ fSize }) => fSize || '18'}px;
  font-weight: ${({ fWeight }) => fWeight || '600'};
  cursor: pointer;
`;

export function Button(props) {
  return <StyleButton {...props} />;
}
