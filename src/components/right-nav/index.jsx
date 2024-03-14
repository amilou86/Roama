import React from "react";
import Phrases from "../../components/utils/phrases.json";

export default function RightNav() {
  return (
    <div className="translation-container">
      <h2>Translation</h2>
      <h4>Here are some helpful phrases:</h4>
      <div className="card-container">
        {Phrases.map((phraseObj) => (
          <div className="card mb-3" key={phraseObj.id}>
            <div className="card-body">
              <h5 className="card-title">{phraseObj.phrase}</h5>
                  {/* code to translate text */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
