import React from "react";
import {
  Footer,
  Header,
  TextArea,
  TinyLineChart,
  DisplayStatistic
} from "./components";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { counts } = this.props;

    return (
      <div className="ui container">
        <Header />

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
            Alpbahets
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

        <TinyLineChart
          width={1100}
          height={100}
          data={counts.chartData}
          dataKey="word"
        />

        <div className="ui divider" />
        <TextArea />
        <div className="ui divider" />
        <Footer />

        <ul className="ui list">
          <li className="item">Word density</li>
          <li className="item">Average word length</li>
          <li className="item">Longest word</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
