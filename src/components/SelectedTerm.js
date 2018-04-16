const React = require('react');

const SelectedTerm = ({name, pos, onSelect}) => {
  return (
    <div className={`term term-${pos}`} onClick={() => onSelect(null)}>
      <div className="term-name">
        <span className="octicon octicon-chevron-down" />
        {name}
      </div>
      <div className="term-pos">{pos}</div>
    </div>
  );
};

module.exports = SelectedTerm;
