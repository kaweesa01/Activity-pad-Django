import React from "react";
import Add from "../icons/plus.svg";
import BottomSection from "./bottomSection";
import { addActivity } from "../actions/actions";
import { connect } from "react-redux";

class TopSection extends React.Component {
  constructor() {
    super();

    this.state = {
      activity: "",
      complete: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const activity = {
      activity: this.state.activity,
      complete: this.state.complete,
    };

    this.props.addActivity(activity);

    this.setState({
      activity: "",
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {

    const incomplete = this.props.Activity.filter(cur => {
      return cur.complete == false
    })

    const complete = this.props.Activity.filter(cur => {
      return cur.complete == true
    })

    return (
      <div className="container">
        <div>
          <div className="title">
            <h2>My Activity Pad</h2>
          </div>
          <form className="input-form" onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Enter Activity"
              name="activity"
              onChange={this.onChange}
              value={this.state.activity}
            />
            <button type="submit" className="addBtn">
              {" "}
              <Add /> Add
            </button>
          </form>

          <div className="status">
    <h5 className="completed">Completed: {complete.length} / {this.props.Activity.length}</h5>
    <h5 className="incomplete">Incomplete: {incomplete.length}</h5>
          </div>
        </div>

        {this.state.activity !== "undefined" ? <BottomSection /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Activity: state.activities.activities
});

export default connect(mapStateToProps, { addActivity })(TopSection);
