import React from 'react';

class MainBoardRow extends React.Component {

    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
      };

    render() {
      return (
        <tr>
          <td width="350px">{this.props.row.brdtitle}</td>
        </tr>
      );
    }
}

export default MainBoardRow;