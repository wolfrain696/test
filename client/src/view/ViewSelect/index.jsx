import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../../Styled/Box';
import { Button } from '../../Styled/Button';

const OptionList = styled.ul`
`;
const Option = styled.li`
  cursor: pointer;
  width: 100%;
  padding: 5px;

&:hover {
  background: aliceblue;
}
`;

export function Select({
  options,
  productId,
  setReasonProduct,
  productReason,
}) {
  const [isActive, setIsActive] = useState(false);

  const onCloseSelect = (id, reason) => {
    setReasonProduct(id, reason);
    setIsActive(false);
  };

  const onToggleSelect = () => {
    setIsActive(!isActive);
  };
  return (
    <Box relative pd>
      <Button
        onClick={onToggleSelect}
        radius={8}
        fSize={18}
        aItems="center"
        pd="0"
      >
        { productReason?.name || 'Выбери причину списания'}
      </Button>
      {isActive && (
        <OptionList>
          {options.map((option) => (
            <Option
              onClick={() => onCloseSelect(productId, option)}
              key={option.id}
            >
              {option.name}
            </Option>
          ))}
        </OptionList>
      )}
    </Box>
  );
}
