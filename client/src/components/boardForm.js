import React from 'react';
import './board.css';

class BoardForm extends React.Component {
    state = { brdwriter: "", brdtitle: "" };
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    handleSelectRow = row => {
      this.setState(row);
    };
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSaveData(this.state);
      this.setState({ 
        maxNo: this.state.maxNo + 1,
        brdno: this.state.maxNo, 
        brdwriter: "", 
        brdtitle: "" });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="title"
            name="brdtitle"
            value={this.state.brdtitle}
            onChange={this.handleChange}
          />
          <input
            placeholder="name"
            name="brdwriter"
            value={this.state.brdwriter}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
      );
    }
  }

export default BoardForm;