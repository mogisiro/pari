import React from 'react';
import './board.css';

class BoardRow extends React.Component {
    handleRemove = () => {
      const { row, onRemove } = this.props;
      onRemove(row.brdno);
    };
    handleSelectRow = () => {
      const { row, onSelectRow } = this.props;
      onSelectRow(row);
    };
  
    render() {
      console.log(this.props.row.brdno);
      return (
        <tr className='board'>
          <td>{this.props.row.brdno}</td>
          <td>{this.props.row.brdtitle}</td>
          <td align="center">{this.props.row.brdwriter}</td>
          <td align="center">{this.props.row.brdlike}</td>
          <td align="center">{this.props.row.brdview}</td>
          <td align="center">{this.props.row.brddate.toLocaleDateString("ko-KR")}</td>
        </tr>
      );
    }
}

export default BoardRow;
