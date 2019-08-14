import React from 'react';

import { connect } from 'react-redux';

import DefaultLayout from '../../layouts/default';
import List from '../../components/List';

import * as CartActions from '../../store/cart/actions';
import * as CartSelectors from '../../store/cart/selectors';

class Cart extends React.Component {
  state = {
    pagination: {
      page: 1,
      limit: 10,
    },
  };

  componentDidMount() {
    this.props.getList(this.state.pagination);
  }

  openFormEdit = (product, index) => {
    this.props.editProduct(product, index);
  };

  render() {
    return (
      <>
        <List
          headers={[
            { title: 'Nome', field: 'name' },
            { title: 'Preço', field: 'price' },
            { title: 'Quantidade', field: 'amount' },
          ]}
          items={this.props.list}
          onEdit={this.openFormEdit}
          title="Carrinho"
        />

        <div className="row">
          <div className="col-12">
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="data-table-responsive_paginate"
            ></div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: CartSelectors.getCartList(state),
});
const mapDispatchToProps = dispatch => ({
  getList: pagination => {
    dispatch(CartActions.getList());
  },
  editProduct: async (product, index) => {
    await dispatch(CartActions.editProduct(product, index));
  },
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
