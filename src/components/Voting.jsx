import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} reset={this.props.reset} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}
/*
 passing the actionCreators into the connect method means
 that when the creator is invoked in the component using 'this.props.vote()',
 it will call the actioncreator and then dispatche that action to the Redux Store.
*/
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);