import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';

const THead = props => {
  return (
    <th className="text-nowrap" style={props.first ? { width: 70 } : {}}>
      {props.title}
    </th>
  );
};

export default THead;
