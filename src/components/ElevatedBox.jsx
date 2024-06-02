import React from "react";
import PropTypes from "prop-types";

const ElevatedBox = ({ children, className }) => {
  return (
    <div
      className={`flex p-6 text-white rounded-2xl shadow-glass backdrop-blur-md bg-black/40 ${className}`}
    >
      {children}
    </div>
  );
};

ElevatedBox.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ElevatedBox;
