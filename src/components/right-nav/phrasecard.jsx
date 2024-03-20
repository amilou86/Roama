import React from "react";

export default function PhraseCard({ phrase, translation }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{phrase}</h5>
        <p className="card-text">{translation}</p>
      </div>
    </div>
  );
}
