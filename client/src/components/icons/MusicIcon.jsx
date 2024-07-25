import React from "react";
import PropTypes from "prop-types";
import SVGIcons from "./SVGIcons";

const MusicIcon = ({ className }) => {
  return (
    <SVGIcons
      className={className}
      path={[
        <path
          key="1"
          d="M37.065.333v29.905h-.015c0 .108.015.211.015.32a6.816 6.816 0 0 1-6.811 6.811 6.816 6.816 0 0 1-6.811-6.811 6.816 6.816 0 0 1 6.811-6.811c1.35 0 2.605.398 3.664 1.078V10.351l-20.296 4.875v20.65h-.02c-.186 3.591-3.156 6.457-6.79 6.457C3.176 42.333 0 39.28 0 35.523a6.816 6.816 0 0 1 6.811-6.812 6.76 6.76 0 0 1 3.664 1.079V6.726L37.065.333Z"
        />,
      ]}
      aspectRatio="0 0 45 51"
    />
  );
};

MusicIcon.propTypes = {
  className: PropTypes.string,
};

export default MusicIcon;
