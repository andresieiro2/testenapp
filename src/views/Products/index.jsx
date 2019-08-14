import React from 'react';

import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import DefaultLayout from '../../layouts/default';
import List from '../../components/List';

import * as ProductActions from '../../store/product/actions';
import * as ProductSelectors from '../../store/product/selectors';

class Product extends React.Component {
  state = {
    pagination: {
      page: 1,
      limit: 10,
    },
  };

  componentDidMount() {
    this.props.getList(this.state.pagination);
  }

  addProductToCart = product => {
    this.props.addProductToCart(product);
  };

  selectItem = async product => {
    await this.setState({ product });
  };

  render() {
    return (
      <>
        <List
          headers={[
            { title: 'Nome', field: 'name' },
            { title: 'Preço', field: 'price' },
          ]}
          items={this.props.list}
          title="Produtos"
          buttons={[
            {
              name: 'Adicionar',
              onClick: product => {
                this.addProductToCart(product);
              },
            },
          ]}
        ></List>

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
  list: ProductSelectors.getProductList(state),
});
const mapDispatchToProps = dispatch => ({
  getList: pagination => {
    dispatch(ProductActions.getList());
  },
  addProductToCart: async product => {
    await dispatch(ProductActions.addProductToCart(product));

    dispatch(push('/carrinho'));
  },
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)
);
