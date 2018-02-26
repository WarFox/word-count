import React from 'react';

const DisplayStatistic = ({value, children}) => {
  return (
    <div className="statistic">
      <div className="value">{value}</div>
      <div className="label">{children}</div>
    </div>
  );
};

export default DisplayStatistic;
