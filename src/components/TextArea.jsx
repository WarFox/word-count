import React from "react";
import { connect } from "react-redux";
import { refreshCount } from "../actions";

const TextArea = ({
  onChange,
  onKeyDown,
  onKeyPress,
  onKeyUp,
  onBlur,
  onFocus
}) => {
  return (
    <div className="ui form">
      <textarea
        placeholder="Type or paste your text here to get the word and character statistics"
        autoFocus
        style={{
          height: "500px",
          width: "100%",
          fontSize: "20px",
          borderStyle: "none",
          borderColor: "Transparent",
          overflow: "auto"
        }}
        autoComplete="off"
        onChange={e => onChange(e.target.value)}
        onKeyUp={e => onKeyUp(e.target.value)}
        onBlur={e => onBlur(e.target.value)}
        onFocus={e => onFocus(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: text => {
      dispatch(refreshCount(text, "ON_CHANGE"));
    },
    onKeyDown: text => {
      dispatch(refreshCount(text, "ON_KEYDOWN"));
    },
    onKeyPress: text => {
      dispatch(refreshCount(text, "ON_KEYPRESS"));
    },
    onKeyUp: text => {
      dispatch(refreshCount(text, "ON_KEYUP"));
    },
    onBlur: text => {
      dispatch(refreshCount(text, "ON_BLUR"));
    },
    onFocus: text => {
      dispatch(refreshCount(text, "ON_FOCUS"));
    }
  };
};

export default connect(null, mapDispatchToProps)(TextArea);
