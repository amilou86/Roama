import React, { useState } from "react";
import { useCollapse } from "react-collapsed";

export default function Collapsible({ comment }) {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
    setExpanded(!isExpanded);
  }
  return (
    <div className="collapsible">
      <div className="header" {...getToggleProps({ onClick: handleOnClick })}>
        {comment.length} {isExpanded ? "Comments" : "Comments"}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          {comment}
        </div>
      </div>
    </div>
  );
}
