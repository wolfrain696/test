import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { AppViewModel } from './appViewModel';

const Wrapper = styled.div`
    max-width: 999px;
    margin: 0 auto;
    padding: 20px 12px;
  
`;

const Product = styled.li`
  flex: 0 0 45%;
  font-size: 24px;
  padding: 5px;
  border: 1px solid black;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: ${({ mrBottom }) => mrBottom}px;
`;

const Paginate = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 30px;
  li{
    border: palevioletred 2px solid;
    padding: 3px 6px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    
    @media (min-width: 768px ) {
      &:hover {
        color: white;
        background: palevioletred;
      }
    }
  }
`;

const Button = styled.button`
      font-size: 18px;
      border: none;
      background: palevioletred;
      color: white;
      padding: 5px 8px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
`;

function App() {
  const [{ products }] = useState(() => new AppViewModel());
  return (
    <Wrapper>
      <List mrBottom={24}>
        {products.length && products.map((el) => (
          <Product key={el.id}>
            {el.id}
            {el.name}
            {el.price}
          </Product>
        ))}
      </List>
      <Paginate>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </Paginate>
      <Button>Сформировать чек на списание</Button>
    </Wrapper>
  );
}

export default observer(App);
