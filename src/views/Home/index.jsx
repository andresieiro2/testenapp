import React from 'react';

import { connect } from 'react-redux';
import DefaultLayout from '../../layouts/default';

class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="page-header m-b-10">
          Dashboard <small>Resumo</small>
        </h1>
      </>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  // getList: () => {
  //   dispatch(UserActions.getList());
  // },
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
