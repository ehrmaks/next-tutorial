import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function Gnb() {
	const [activeItem, setActiveItem] = useState('home')

	const handleItemClick = (e: React.SyntheticEvent, { name }: { name: string }): void => {
		e.preventDefault()
		// const target = e.target as typeof e.target & {
		// 	name: []
		// 	value: string
		// }
		console.log(name)
		setActiveItem(name)
	}

	return (
		<Menu inverted>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick} />
			<Menu.Item name="messages" active={activeItem === 'messages'} onClick={handleItemClick} />
			<Menu.Item name="friends" active={activeItem === 'friends'} onClick={handleItemClick} />
		</Menu>
	)
}
