import React from "react";
import "./board.css";
import BoardForm from './boardForm.js';
import BoardRow from './boardRow.js';


export class FreeBoard extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  state = {
    boards: [
      {
        brdno: 1,
        brdwriter: "Lee SunSin",
        brdtitle: "If you intend to live then you die",
        brdlike: 3,
        brdview: 10,
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: "So SiNo",
        brdlike: 2,
        brdview: 11,
        brdtitle: "Founder for two countries",
        brddate: new Date()
      }
    ]
  };
  handleSaveData = data => {
    let boards = this.state.boards;
    if (data.brdno === null || data.brdno === "" || data.brdno === undefined) {
      // new : Insert
      this.setState({
        maxNo: this.state.maxNo + 1,
        boards: boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(),
          ...data
        })
      });
    } else {
      // Update
      this.setState({
        boards: boards.map(row =>
          data.brdno === row.brdno ? { ...data } : row
        )
      });
    }
  };

  handleRemove = brdno => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    });
  };

  handleSelectRow = row => {
    this.child.current.handleSelectRow(row);
  };

  render() {
    const { boards } = this.state;
    return (
      <div className="board">
        <h3>자유게시판</h3>
        <BoardForm onSaveData={this.handleSaveData} ref={this.child} />
        <table border="1">
          <tbody>
            <tr id="freeboard" align="center">
              <td width="50" align="left">번호</td> 
              <td width="400" align="left">제목</td>
              <td width="80">이름</td>
              <td width="50">추천</td>
              <td width="50">조회</td>
              <td width="80">날짜</td>
            </tr>
            {boards.map(row => (
              <BoardRow
                key={row.brdno}
                row={row}
                onRemove={this.handleRemove}
                onSelectRow={this.handleSelectRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

