import styled from 'styled-components';

const SiderBarStyle = styled.div`
  .slimScrollDiv {
    position: relative;
    overflow: hidden;
    width: auto;
    height: 100%;
  }

  .sidebar-user {
    overflow: hidden;
    width: auto;
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .slimScrollRail {
    width: 7px;
    height: 100%;
    position: absolute;
    top: 0px;
    display: none;
    border-radius: 7px;
    background: rgb(51, 51, 51);
    opacity: 0.2;
    z-index: 90;
    right: 1px;
  }

  .sub-menu {
    display: block !important;
  }

  .nav {
    &.logout {
      margin-top: 50px;
    }
  }
`;

export default SiderBarStyle;
