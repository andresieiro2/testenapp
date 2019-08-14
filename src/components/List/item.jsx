import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';

const TItem = props => {
  return (
    <>
      <td style={props.first ? { width: 70 } : {}}>{props.data}</td>
    </>
  );
};

export default TItem;
