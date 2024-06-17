import React from "react";
import PropTypes from "prop-types";

const Content = ({ children }) => {
  return (
    <section className="grid grid-flow-col gap-5 w-full md:grid-cols-12 md:grid-rows-1 max-h-[152px] 2xl:max-h-full 2xl:mt-10">
      {children}
    </section>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
