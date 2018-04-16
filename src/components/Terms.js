const React = require('react');
const SelectedTerm = require('./SelectedTerm');
const UnselectedTerm = require('./UnselectedTerm');
const terms = require('../terms');

const Terms = ({selected, onSelect}) => {
  return (
    <div className="content">
      {
        terms.map((term, idx) => {
          return selected === term.name ?
            <SelectedTerm key={idx} {...term} onSelect={onSelect} /> :
            <UnselectedTerm key={idx} {...term} onSelect={onSelect} />;
        })
      }
    </div>
  );
};

module.exports = Terms;
