import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { browserHistory } from 'react-router';


export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    let disabled = this.props.hasVoted === entry;
    return disabled;
  },
  seeResults : function () {
    browserHistory.push('/results');
  },
  click : function(entry) {
    this.props.vote(entry);
  },
  next : function(){
    this.props.next();
  },
  render: function() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.click(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )}
        <div className="management">
          <button
            ref="next"
            className="next"
            disabled={!this.props.hasVoted}
            onClick={this.next}>
            Next
          </button>

          <button
            onClick={this.seeResults}>
            See ResultsNext
          </button>
        </div>
      </div>
    )
  }
});