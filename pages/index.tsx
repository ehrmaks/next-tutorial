import axios from 'axios'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import ItemList from '@components/item/ItemList'
import { Divider, Header, Loader } from 'semantic-ui-react'

export default function Home() {
	const API_URL = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
	const [list, setList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	function getData() {
		axios
			.get(API_URL)
			.then(res => {
				setList(res.data)
				setIsLoading(false)
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<Head>
				<title>HOME | 코딩앙마</title>
			</Head>
			{isLoading && (
				<div style={{ padding: '300px 0' }}>
					<Loader inline="centered" active>
						Loading...
					</Loader>
				</div>
			)}
			{!isLoading && (
				<>
					<Header as="h3" style={{ paddingTop: 20 }}>
						베스트 상품
					</Header>
					<Divider></Divider>
					<ItemList list={list.slice(0, 9)}></ItemList>
					<Header as="h3" style={{ paddingTop: 20 }}>
						신상품
					</Header>
					<Divider></Divider>
					<ItemList list={list.slice(9)}></ItemList>
				</>
			)}
		</div>
	)
}
