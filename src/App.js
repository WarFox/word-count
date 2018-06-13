import React from "react";
import {
  Footer,
  Header,
  TextArea,
  TinyLineChart
} from "./components";
import { Statistics } from "./wrappers";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { counts } = this.props;

    return (
      <div className="ui container">
        <Header />

        <Statistics counts={counts}/>

        <TinyLineChart
          width={1100}
          height={75}
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
