import React from "react";
import { DisplayStatistic } from '../components';

const Statistics = ({counts}) => {
  return (
    <div className="ui mini statistics">
      <DisplayStatistic value={counts.wordCount}>Words</DisplayStatistic>
      <DisplayStatistic value={counts.totalChars}>
        Chars <br />(including trails)
      </DisplayStatistic>
      <DisplayStatistic value={counts.charCount}>
        Chars <br />(excluding trails)
      </DisplayStatistic>
      <DisplayStatistic value={counts.charCountNoSpace}>
        Chars <br />(no spaces)
      </DisplayStatistic>
      <DisplayStatistic value={counts.alphabetsCount}>
        Alphabets
      </DisplayStatistic>
      <DisplayStatistic value={counts.numbersCount}>
        Numbers
      </DisplayStatistic>
      <DisplayStatistic value={counts.nonAlphaNumeric}>
        Non AlphaNumeric
      </DisplayStatistic>
      <DisplayStatistic value={280 - counts.charCount}>
        Tweet - 280 max
      </DisplayStatistic>
    </div>
  );
};

export default Statistics;
