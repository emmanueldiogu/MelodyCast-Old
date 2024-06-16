
import React from 'react'
import PropTypes from 'prop-types';

const Content = ({ children }) => {
    return (
        <section className='flex-grow flex'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-flow-col justify-start gap-10 w-full overflow-hidden">{children}</div>
            </div>
        </section>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content;