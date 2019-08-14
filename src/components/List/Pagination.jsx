import React from 'react';

import styled from 'styled-components';

const PaginationStyle = styled.ul`
  flex-wrap: wrap;

  button[disabled] {
    opacity: 0.4;
  }
`;

const Pagination = props => {
  return (
    <PaginationStyle className="pagination d-flex justify-content-center">
      <li
        className="paginate_button previous disabled"
        id="data-table-responsive_previous"
      >
        <button
          onClick={() => {
            props.changePage(props.page - 1);
          }}
          disabled={props.page === 1}
        >
          Previous
        </button>
      </li>

      {props.totalPages &&
        Array.from({ length: props.totalPages }).map((page, index) => (
          <li className="paginate_button " key={`pagination-item-${index}`}>
            <button
              onClick={() => {
                props.changePage(index + 1);
              }}
              disabled={props.page === index + 1}
            >
              {index + 1}
            </button>
          </li>
        ))}

      <li className="paginate_button next" id="data-table-responsive_next">
        <button
          onClick={() => {
            props.changePage(props.page + 1);
          }}
          disabled={props.page === props.totalPages}
        >
          Next
        </button>
      </li>
    </PaginationStyle>
  );
};

Pagination.defaultProps = {
  changePage: () => {},
};

export default Pagination;
