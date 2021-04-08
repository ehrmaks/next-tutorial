import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useRouter } from 'next/router'

export default function Gnb() {
	const router = useRouter()
	let activeItem
	if (router.pathname === '/') activeItem = 'home'
	else if (router.pathname === '/about') activeItem = 'about'
	else if (router.pathname === '/admin') activeItem = 'admin'

	const goLink = (e: React.SyntheticEvent, { name }: { name: string }): void => {
		e.preventDefault()
		// const target = e.target as typeof e.target & {
		// 	name: []
		// 	value: string
		// }
		if (name === 'home') router.push('/')
		else if (name === 'about') router.push('/about')
		else if (name === 'admin') router.push('/admin')
	}

	return (
		<Menu inverted>
			<Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
			<Menu.Item name="about" active={activeItem === 'about'} onClick={goLink} />
			<Menu.Item name="admin" active={activeItem === 'admin'} onClick={goLink} />
		</Menu>
	)
}
