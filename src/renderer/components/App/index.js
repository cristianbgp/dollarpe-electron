import React from "react";
import is from "electron-is";
import "./index.css";
import constants from "../../../constants";
import PopOver from "../PopOver";
import Row from "../Row";
import useSWR from "swr";
import Spinner from "../Spinner";

const contentStyle = {
  borderTopLeftRadius: is.macOS() ? constants.macWinBorderRadius : 0,
  borderTopRightRadius: is.macOS() ? constants.macWinBorderRadius : 0,
  borderBottomLeftRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
  borderBottomRightRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
};

function fetcher(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}

function Tab() {
  const { data, error, isValidating } = useSWR(
    "https://dollarpe-site.vercel.app/api",
    fetcher
  );

  if (error) {
    return (
      <div className="centered-block">
        <p>Something went wrong</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="centered-block">
        <Spinner />
      </div>
    );
  }

  const dollarpe = data.reduce((acc, element) => {
    acc[element[0]] = element[1];
    return acc;
  }, {});

  return (
    <>
      <Row titles isValidating={isValidating} />
      {Object.entries(dollarpe).map(([key, { buy, sell }]) => (
        <Row key={key} name={key} buy={buy} sell={sell} />
      ))}
    </>
  );
}

function App() {
  return (
    <div className="app">
      {is.macOS() && (
        <div className="top-popover">
          <PopOver position="top" height={12} />
        </div>
      )}

      <div className="content" style={contentStyle}>
        <div className="tab-pages">
          <div className="tab1-panel-container">
            <Tab />
          </div>
        </div>
      </div>

      {!is.macOS() && (
        <div className="bottom-popover">
          <PopOver position="bottom" height={12} />
        </div>
      )}
    </div>
  );
}

export default App;
