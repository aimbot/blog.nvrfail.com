import React from 'react'
import styles from './Bio.module.css'
import bioPic from './bio-pic.jpg'

function Bio(props) {
	return (
		<div
			className={`
      ${styles.Bio}
      ${props.className || ''}
    `}
		>
			<img src={bioPic} alt="James K Nelson" />
			<p>
				<strong>Shawn Turner</strong>
				<br />
				Software Engineer by experience, lives under a rock, wants to rule the world, and still waiting for
				hoverboards. Likes cameras, games, cars, tech, life... not in that order :P
			</p>
		</div>
	)
}

export default Bio
