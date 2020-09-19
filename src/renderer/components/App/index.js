import React from "react";
import is from "electron-is";
import "./index.css";
import constants from "../../../constants";
import PopOver from "../PopOver";
import Row from "../Row";

const contentStyle = {
  borderTopLeftRadius: is.macOS() ? constants.macWinBorderRadius : 0,
  borderTopRightRadius: is.macOS() ? constants.macWinBorderRadius : 0,
  borderBottomLeftRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
  borderBottomRightRadius: is.macOS() ? 0 : constants.nonMacWinBorderRadius,
};

const dollarpe = {
  tkambio: { buy: 3.518, sell: 3.54 },
  rextie: { buy: 3.514, sell: 3.547 },
  kambista: { buy: 3.514, sell: 3.555 },
};

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
            <Row titles />
            {Object.entries(dollarpe).map(([key, { buy, sell }]) => (
              <Row key={key} name={key} buy={buy} sell={sell} />
            ))}
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
