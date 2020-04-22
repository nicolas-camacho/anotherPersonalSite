import React from 'react'
//Components
import { Title, CustomExternalLink } from './common'

const SectionList = ({ id, title, items}) => (
    <div id={id}>
        <Title to={`${window.location.pathname}#${id}`}>{title}</Title>
        <ul>
            {items.map(item => (
                <li key={item.name}><CustomExternalLink href={item.link} target="_blank">{item.name}</CustomExternalLink>: {item.description}</li>
            ))}
        </ul>
    </div>
)

export default SectionList