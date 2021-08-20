import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Poster.css";

function Poster({ index }) {
  const history = useHistory();

  const truncateSubtitle = (sub, n) => {
    return sub.length > n ? sub.substr(0, n - 1) + "..." : sub;
  };

  return (
    <div className="posterDiv" onClick={() => history.push(`/watch/${index}`)}>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="posterDescription">
        <h2>Title</h2>
        <p>
          {truncateSubtitle(
            "ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်ဖြတ်တောက်ရန်",
            95
          )}
        </p>
      </div>
    </div>
  );
}

export default Poster;
