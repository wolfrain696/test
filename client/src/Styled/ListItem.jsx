import styled from 'styled-components';

const StyleListItem = styled.li`
  display: ${({ flex }) => flex && 'flex'};
  gap: ${({ gap }) => gap}px;
  align-items: ${({ aItems }) => aItems};
  justify-content: ${({ jContent }) => jContent};
  width: ${({ wd }) => wd};
  height: ${({ height }) => height};
  padding: ${({ pd }) => pd};
  margin: ${({ mr }) => mr};
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border || 'none'};
  box-shadow: ${({ shadow }) => shadow && '2px 9px 16px #e9edf1'};
  font-size: ${({ fSize }) => fSize || '18'}px;
  font-weight: ${({ fWeight }) => fWeight || '600'};
  cursor: pointer;
`;

export function ListItem(props) {
  return <StyleListItem {...props} />;
}
