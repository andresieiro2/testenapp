import React from 'react';

import styled from 'styled-components';
import TableHead from './head';
import TableItem from './item';

const ListStyle = styled.div`
  tr {
    &:hover {
      td {
        background-color: #d9d9d9 !important;
        cursor: pointer;
      }
    }
  }
`;

const List = props => {
  return (
    <ListStyle className="ui-sortable">
      <div className="panel panel-inverse">
        <div className="panel-heading ui-sortable-handle">
          <h4 className="panel-title">{props.title}</h4>
        </div>

        <div className="panel-body">
          <div className="row">
            <div className="col-sm-12">
              <table
                id="data-table-responsive"
                className="table table-striped table-bordered dataTable no-footer dtr-inline"
              >
                <thead>
                  <tr role="row">
                    {props.headers &&
                      props.headers.map((item, index) => (
                        <TableHead key={`table-header-${index}`} {...item} />
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {props.items &&
                    props.headers &&
                    props.items.map((item, index) => {
                      return (
                        <tr
                          className="gradeX odd"
                          role="row"
                          key={`table-item-count-${index}`}
                          onDoubleClick={() => {
                            props.onEdit(item, index);
                          }}
                        >
                          {props.headers.map((headItem, indexHead) => (
                            <TableItem
                              key={`table-item-${indexHead}`}
                              data={item[headItem.field]}
                            />
                          ))}
                          {props.buttons &&
                            props.buttons.map((btn, i) => (
                              <td style={{ width: 80 }} key={`index-btn-${i}`}>
                                <button
                                  className="btn btn-success"
                                  onClick={() => {
                                    btn.onClick(item);
                                  }}
                                >
                                  {btn.name}
                                </button>
                              </td>
                            ))}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ListStyle>
  );
};

List.defaultProps = {
  onEdit: () => {},
};

export default List;
