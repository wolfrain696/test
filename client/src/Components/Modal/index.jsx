import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Box } from '../../Styled/Box';
import { Select } from '../../view/ViewSelect';
import { List } from '../../Styled/List';
import { ListItem } from '../../Styled/ListItem';
import { Button } from '../../Styled/Button';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  padding: 15px;
  background: white;
  transform: scale(${({ open }) => (open ? 1 : 0.5)});
  transition: 0.3s all ease;
`;

export function Modal({
  products,
  onClose,
  open,
  options,
  sendWritingOff,
}) {
  const [writingOff, setWritingOff] = useState([]);

  const disabledButton = (array) => {
    const filteredByReason = array.filter((el) => el.reason === null);
    return !filteredByReason.length;
  };

  useEffect(() => {
    setWritingOff(products.map((product) => ({ ...product, reason: null })));
  }, [products.length]);

  const setReasonProduct = (id, reason) => {
    const writingOffProducts = writingOff.map((product) => {
      if (product.id === id) {
        return { ...product, reason };
      }
      return product;
    });
    setWritingOff(writingOffProducts);
  };

  const sendWritingOffCheck = () => {
    sendWritingOff(writingOff);
  };
  return (
    <Box
      wd="100%"
      tScale={open ? 1 : 0}
      opacity={open ? 1 : 0}
      fixed
      center
      display="flex"
      bgColor="rgba(0,0,0, 0.3)"
    >
      <ModalContent open={open}>
        <List>
          {writingOff.map((product) => (
            <ListItem key={product.id} flex gap={10} mr="0 0 10px 0" jContent="space-between">
              <div>{product.name}</div>
              <Select
                productReason={product.reason}
                productId={product.id}
                setReasonProduct={setReasonProduct}
                options={options}
              />
            </ListItem>
          ))}
        </List>
        <Box mr="auto 0 0 0" height="30px" display="flex">
          <Button
            onClick={onClose}
            bgColor="red"
            mr="0 10px 0 0"
            color="#fff"
            shadow
          >
            Отменить
          </Button>
          <Button
            shadow
            disabled={!disabledButton(writingOff)}
            bgColor={disabledButton(writingOff) ? 'green' : 'grey'}
            color="#fff"
            onClick={sendWritingOffCheck}
          >
            Продолжить
          </Button>
        </Box>
      </ModalContent>
    </Box>
  );
}
