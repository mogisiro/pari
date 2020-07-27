import React from 'react';
import MainBoardRow from './mainBoardRow.js';
import './app.css';

export class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    latestState ={
        latest: [
            {brdtitle: "최신글1"},
            {brdtitle: "최신글2"},
            {brdtitle: "최신글3"},
            {brdtitle: "최신글4"},
            {brdtitle: "최신글5"},
            {brdtitle: "최신글6"},
            {brdtitle: "최신글7"},
            {brdtitle: "최신글8"},
            {brdtitle: "최신글9"},
            {brdtitle: "최신글10"}
        ]
      };

      popularState = {
          popular: [
              {brdtitle: "인기글1"},
              {brdtitle: "인기글2"},
              {brdtitle: "인기글3"},
              {brdtitle: "인기글4"},
              {brdtitle: "인기글5"},
              {brdtitle: "인기글6"},
              {brdtitle: "인기글7"},
              {brdtitle: "인기글8"},
              {brdtitle: "인기글9"},
              {brdtitle: "인기글10"}
          ]
      };

      qnaState = {
          qna: [
            {brdtitle: "Q&A 1"},
            {brdtitle: "Q&A 2"},
            {brdtitle: "Q&A 3"},
            {brdtitle: "Q&A 4"},
          ]
      };
      
      handleSelectRow = row => {
        this.child.current.handleSelectRow(row);
      };
  
    render(){
        const { latest } = this.latestState;
        const {popular} = this.popularState;
        const {qna} = this.qnaState;
        return (
            <main className="main">
                <section className='shortcuts'>
                    <div id='latest'>
                        <h4>최신글</h4>
                        <table border="1">
                            <tbody>
                                <tr align="center">
                                    <td style={{display: 'none'}}>제목</td>
                                </tr>
                                {latest.map(row => (
                                <MainBoardRow
                                    row={row}
                                    onSelectRow={this.handleSelectRow}
                                />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div id='popular'>
                    <h4>인기글</h4>
                        <table border="1">
                            <tbody>
                                <tr align="center">
                                    <td style={{display: 'none'}}>제목</td>
                                </tr>
                                {popular.map(row => (
                                <MainBoardRow
                                    row={row}
                                    onSelectRow={this.handleSelectRow}
                                />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div id='qna'>
                    <h4>Q&A</h4>
                        <table border="1">
                            <tbody>
                                <tr align="center">
                                    <td style={{display: 'none'}}>제목</td>
                                </tr>
                                {qna.map(row => (
                                <MainBoardRow
                                    row={row}
                                    onSelectRow={this.handleSelectRow}
                                />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='majors'>
                    <div id='softWare'>융소</div>
                    <div id='CE'>컴공(복전)</div>
                    <div id='AI'>인공지능</div>
                    <div id='BD'>빅데이터</div>
                </section>
            </main>
        )
    }
} 
