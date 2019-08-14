/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import InputText from '../../components/Inputs/Text';

const ProductForm = props => {
  return (
    <>
      <fieldset>
        <legend>Editar Produto</legend>
        <div>
          <label>Produto</label>
          <InputText
            name="name"
            value={props.data.name}
            onChange={value => {
              props.changeField('name', value);
            }}
          />
        </div>
        <div>
          <label>Quantidade</label>
          <InputText
            name="quantidade"
            value={props.data.amount}
            onChange={value => {
              props.changeField('amount', value);
            }}
          />
        </div>
        <div>
          <label>preço</label>
          <InputText
            name="price"
            value={props.data.price}
            onChange={value => {
              props.changeField('price', value);
            }}
          />
        </div>
      </fieldset>
    </>
  );
};

ProductForm.defaultProps = {
  data: {},
  changeField: () => {},
};

export default ProductForm;
