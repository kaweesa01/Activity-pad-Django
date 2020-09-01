import React from "react";
import Remove from "../icons/remove.svg";
import { connect  } from "react-redux";
import { getActivities, deleteActivity, updateActivity } from "../actions/actions";

import PropTypes from 'prop-types'

class bottomSection extends React.Component {

  componentDidMount(){
    this.props.getActivities()
  }

  constructor() {
    super();
    this.activityDisplay = this.activityDisplay.bind(this);
  }

  static propTypes = {
    Activity: PropTypes.array.isRequired,
    deleteActivity: PropTypes.func.isRequired,
    getActivities:PropTypes.func.isRequired,
    updateActivity:PropTypes.func.isRequired
  }

  activityDisplay() {
    const displayArray = this.props.Activity.map((cur) => {
      return (
        <div className="activity" key={cur.id}>
          <h5
            className="firstChild"
            style={{ color: cur.complete ? "lime" : "red" }}
          >
            {cur.activity}
          </h5>
          <input
            type="checkbox"
            checked={cur.complete}
            onChange={this.props.updateActivity.bind(this, cur.id, cur.activity, cur.complete)}
          />
          <button className="lastChild" onClick={this.props.deleteActivity.bind(this, cur.id)}>
            <img src={''} />
            <Remove/>
          </button>
        </div>
      );
    });
    return displayArray;
  }

  render() {
    return <div className="activity-container">{this.activityDisplay()}</div>;
  }
}

const mapStateToProps = (state) => ({
  Activity: state.activities.activities
})

export default connect(mapStateToProps, {getActivities, deleteActivity,updateActivity} )(bottomSection);
