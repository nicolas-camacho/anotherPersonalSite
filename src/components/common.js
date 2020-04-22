import styled from 'styled-components'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
    font-size: 1.5em;
    text-align: left;
    margin: 5px;
    margin-top: 20px;

    @media (mid-width: 600px) {
        margin: 0;
    }
`

export const Title = styled(Link)`
    font-size: 1.5em;
    text-decoration: none;
    color: black;
    
    :hover {
        color: #58b368;
    }
`

export const Date = styled.span`
    font-size: 0.8em;
    color: gray;
    display: block;
`

export const CustomInternalLink = styled(Link)`
    text-decoration: none;
    color: #58b368;
    :hover {
        text-decoration: underline;
    }
`

export const CustomExternalLink = styled.a`
    text-decoration: none;
    color: #58b368;
    :hover {
        text-decoration: underline;
    }
`