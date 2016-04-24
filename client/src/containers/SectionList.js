import React, { Component } from 'react';
import { connect } from 'react-redux'
import Section from './../components/Section';

class SectionList extends Component {

  renderSectionList() {
    return this.props.sections.map((section) => {
      return(
        <Section key={Math.random(new Date().getUTCMilliseconds() * 100)} section={section}/>
      )
    });
  }

  render() {
    return(
      <span>
        {this.renderSectionList()}
      </span>
    )
  }
};

function mapStateToProps(state) {
  return {
    sections : state.sections
  };
}

export default connect(mapStateToProps)(SectionList);