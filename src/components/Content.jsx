import React from "react";
import PropTypes from "prop-types";

const Content = ({ children }) => {
  return (
    <section className="grid grid-flow-col gap-7 2xl:gap-10 w-full md:grid-cols-12 md:grid-rows-1 md:max-h-[337.33px] 2xl:max-h-[478px] mb-7">
      {children}
    </section>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
