import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectSection } from '../actions/index';
import { bindActionCreators } from 'redux';
import Section from './../components/Section';

class SectionList extends Component {

  renderSectionList() {
    return this.props.sections.map((section) => {
      return(
        <Section key={Math.random(new Date().getUTCMilliseconds() * 100)} id={section.title} section={section}/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSection: selectSection}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);