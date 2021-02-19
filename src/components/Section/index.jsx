import PropTypes from 'prop-types';
import Title from '../Title';

const Section = ({ title, fontSize, padding, tagName, children }) => {
    return (
        <>
            <Title as={tagName} title={title} fontSize={fontSize} padding={padding}/>
            {children}
        </>
    )
}

Section.propTypes = {
    as: PropTypes.string,
    title: PropTypes.string,
    fontSize: PropTypes.number,
    padding: PropTypes.number,
}

export default Section;