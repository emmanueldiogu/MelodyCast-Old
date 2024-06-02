
import React from 'react'
import PropTypes from 'prop-types';

const Content = ({ children }) => {
    return (
        <section className='flex-grow flex'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start gap-10">{children}</div>
            </div>
        </section>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content;