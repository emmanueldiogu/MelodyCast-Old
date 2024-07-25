import React from "react";
import PropTypes from "prop-types";

const ElevatedBox = ({ children, className, customStyle }) => {
  return (
    <div
      className={`flex text-white rounded-2xl shadow-glass backdrop-blur-md bg-black/40 ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

ElevatedBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  customStyle: PropTypes.object,
};

export default ElevatedBox;