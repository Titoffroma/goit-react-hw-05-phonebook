import styled from 'styled-components';

const Title = styled.h2.attrs(({title}) => ({
    children: title || 'Title',
}))`
 color: #212121;
 font-size: ${props => props.fontSize || 22}px;
 text-align: ${props => props.textAlign || 'center'};
 padding: ${props => props.padding || 10}px 0;
 font-weight: bold;
`
export default Title;