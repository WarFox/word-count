import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui horizontal list">
        <div className="item">
          <a href="http://www.w3.org/html/logo/">
            <img
              src="images/HTML5_Badge_32.png"
              alt="HTML5 Powered"
              title="HTML5 Powered"
              height="24"
              width="24"
            />
          </a>
        </div>
        <div className="item">
          <a href="https://github.com/WarFox/word-count/">
            <img
              src="images/github.png"
              alt="Word count @ github"
              title="Word Count @ github"
              height="24"
              width="24"
            />
          </a>
        </div>
        <div className="item">
          <a href="https://reactjs.org/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              height="24"
              widgth="24"
              alt="React JS"
            />
          </a>
        </div>
        <div className="item">
          <a style={{ color: "#744cbc" }} href="https://redux.js.org/">
            <img
              src="images/redux-spaces-avatar.png"
              height="24"
              width="24"
              alt="Redux"
            />
          </a>
        </div>
        <div className="item">
          <a href="http://spacemacs.org">
            <img
              src="https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg"
              height="24"
              alt="Spacemacs"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
