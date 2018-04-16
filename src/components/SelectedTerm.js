const React = require('react');

const SelectedTerm = ({name, pos, defn, onSelect}) => {
  return (
    <div className="selected-term" onClick={() => onSelect(null)}>
      <div className={`term active term-${pos}`}>
        <div className="term-name">
          <span className="octicon octicon-chevron-down" />
          {name}
        </div>
        <div className="term-pos">{pos}</div>
      </div>
      <div className="term-defn">{defn}</div>
    </div>
  );
};

module.exports = SelectedTerm;
