const React = require('react');

const UnselectedTerm = ({name, pos, onSelect}) => {
  return (
    <div className={`term term-${pos}`} onClick={() => onSelect(name)}>
      <div className="term-name">
        <span className="octicon octicon-chevron-right" />
        {name}
      </div>
      <div className="term-pos">{pos}</div>
    </div>
  );
};

module.exports = UnselectedTerm;
