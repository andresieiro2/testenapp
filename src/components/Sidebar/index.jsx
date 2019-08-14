import React from 'react';

import { useDispatch } from 'react-redux';
import SideBarStyle from './style';

import SidebarItem from './item';
import * as ProductsActions from '../../store/product/actions';

const Header = props => {
  const dispatch = useDispatch();

  return (
    <SideBarStyle className="row">
      <div id="sidebar" className="sidebar ">
        <div className="slimScrollDiv">
          <div className="sidebar-user">
            <ul className="nav">
              <li className="nav-profile">
                <div>
                  <div className="cover with-shadow"></div>
                  <div className="image" />
                  <div className="info">
                    <b className="caret pull-right"></b>
                    CMS
                    <small>Produtos</small>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="nav">
              <SidebarItem
                text="Produtos"
                subMenu={[
                  {
                    text: 'Novo',
                    link: '/',
                    onClick: () => {
                      dispatch(ProductsActions.setProduct({}));
                    },
                  },
                  { text: 'Lista', link: '/' },
                ]}
              />
              <SidebarItem text="Carrinho" link="/carrinho" />
            </ul>
          </div>
        </div>
      </div>
    </SideBarStyle>
  );
};

export default Header;
