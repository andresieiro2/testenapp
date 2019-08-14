/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React from 'react';

import { connect } from 'react-redux';
import DefaultLayout from '../../layouts/default';
import ProductForm from '../../components/Forms/product';
import * as CartSelectors from '../../store/cart/selectors';
import * as CartActions from '../../store/cart/actions';

class ProductForms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data || {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        data: this.props.data,
      });
    }
  }

  changeField = (name, value) => {
    this.setState({
      data: { ...this.state.data, [name]: value },
    });
  };

  render() {
    return (
      <div className="panel panel-inverse col-6 p-0">
        <div className="panel-heading">
          <p className="panel-title">Formulario</p>
        </div>
        <div className="panel-body">
          <div className="form-group">
            <form
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <ProductForm
                data={this.state.data}
                changeField={(name, value) => {
                  this.changeField(name, value);
                }}
              />

              <br />

              <button
                type="submit"
                className="btn btn-sm btn-primary m-r-5"
                onClick={e => {
                  e.preventDefault();
                  this.props.updateProduct(this.state.data);
                }}
              >
                Atualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: CartSelectors.getProduct(state),
});

const mapDispatchToProps = dispatch => ({
  updateProduct: async product => {
    await dispatch(CartActions.updateProduct(product));
  },
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductForms)
);
