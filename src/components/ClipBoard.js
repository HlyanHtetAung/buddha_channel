import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState } from "react";
function ClipBoard({ header, Icon, copyLetter }) {
  const [showHoverClipboard, setShowHoverClipboard] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopied = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <CopyToClipboard text={copyLetter}>
        <div
          className="contactUs__contentDiv"
          onMouseEnter={() => setShowHoverClipboard(true)}
          onMouseLeave={() => setShowHoverClipboard(false)}
          onClick={onCopied}
        >
          <div className="contactUs__content">
            <Icon className="contactUs__icon" />
            <h2 className="contactUs__header">{header}</h2>
          </div>
          {showHoverClipboard && (
            <div className="contactUs__hoverClipboard">
              <h2>Click to copy</h2>
            </div>
          )}
          {copied && <h2 className="contactUs__copied">Copied</h2>}
        </div>
      </CopyToClipboard>
    </>
  );
}

export default ClipBoard;
