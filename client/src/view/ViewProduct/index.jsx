import styled from 'styled-components';

const ProductItem = styled.li`
  flex: 0 0 45%;
  font-size: 24px;
  padding: 5px;
  border: 1px solid black;
  background: ${({ selected }) => selected && 'rgba(0,0,0,0.1)'};
  cursor: pointer;
`;

export function Product({ product, selectedStatus, setSelected }) {
  const { id, name, price } = product;
  return (
    <ProductItem
      onClick={() => setSelected(product)}
      selected={selectedStatus}
    >
      <span>
        {id}
        {'. '}
      </span>
      <span>
        {name}
        {' '}
      </span>
      <span>
        {price}
        р
      </span>
    </ProductItem>
  );
}
