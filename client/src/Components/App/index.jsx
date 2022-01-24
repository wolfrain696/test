import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { AppViewModel } from './appViewModel';
import { Product } from '../../view/ViewProduct';
import { Modal } from '../Modal';
import { Button } from '../../Styled/Button';
import { List } from '../../Styled/List';
import { Icon } from '../../Styled/Icon';
import arrow from '../../image/arrow.svg';
import { Box } from '../../Styled/Box';

const Wrapper = styled.div`
    max-width: 999px;
    margin: 0 auto;
    padding: 20px 12px;  
`;
function App() {
  const [{
    products,
    setSelectedProducts,
    selectedProducts,
    setModalOpen,
    modalOpen,
    reasons,
    currentPage,
    changePage,
    fetchProducts,
    countPages,
    sendWritingOff,
  }] = useState(() => new AppViewModel());

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <>
      <Modal
        options={reasons}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        products={selectedProducts}
        sendWritingOff={sendWritingOff}
      />
      <Wrapper>
        <List mrBottom={24} gap={8} flex flexWrap>
          {!!products.length && products.map((el) => (
            <Product
              key={el.id}
              product={el}
              setSelected={setSelectedProducts}
              selectedStatus={selectedProducts.findIndex((product) => product.id === el.id) > -1}
            />
          ))}
        </List>
        <Box display="flex" mr="0 0 24px 0">
          {currentPage !== 1 && (
          <Button onClick={() => changePage('back')} wd="20px" height="20px" pd="0px" bgColor="none">
            <Icon src={arrow} />
          </Button>
          )}
          <span style={{ fontSize: '20px' }}>
            {currentPage}
          </span>
          {currentPage !== countPages && (
          <Button onClick={() => changePage('next')} wd="20px" height="20px" pd="0px" bgColor="none">
            <Icon src={arrow} rotate={180} />
          </Button>
          )}
        </Box>
        <Button
          onClick={() => setModalOpen(true)}
          pd="8px 16px"
          shadow
        >
          Сформировать чек на списание
        </Button>
      </Wrapper>
    </>
  );
}

export default observer(App);
