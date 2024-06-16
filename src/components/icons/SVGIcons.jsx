import React from "react";
import PropTypes from "prop-types";

const SVGIcons = ({ className = "text-[#FFFFFF33]", path, aspectRatio }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={aspectRatio}
    >
      <React.Fragment>{path}</React.Fragment>
    </svg>
  );
};

SVGIcons.propTypes = {
  path: PropTypes.node.isRequired,
  className: PropTypes.string,
  aspectRatio: PropTypes.string.isRequired,
};

export default SVGIcons;
