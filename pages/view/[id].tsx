import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Item from '@/components/item/Item'
import { Loader } from 'semantic-ui-react'

interface itemType {
	api_featured_image: string
	brand: string
	category: string
	created_at: string
	description: string
	id: number
	image_link: string
	name: string
	price: string
	product_api_url: string
	product_colors: []
	product_link: string
	product_type: string
	rating: number
	tag_list: []
	updated_at: string
	website_link: string
}

export default function Post() {
	const router = useRouter()
	const { id } = router.query
	const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
	const [item, setItem] = useState({} as itemType)
	const [isLoading, setIsLoading] = useState(true)

	function getData() {
		if (id && Number(id) > 0) {
			axios
				.get(API_URL)
				.then(res => {
					setItem(res.data)
					setIsLoading(false)
				})
				.catch(err => {
					console.log(err)
				})
		}
	}

	useEffect(() => {
		getData()
	}, [id])
	return (
		<>
			{isLoading && (
				<div style={{ padding: '150px 0' }}>
					<Loader inline="centered" active>
						Loading...
					</Loader>
				</div>
			)}
			{!isLoading && <Item item={item}></Item>}
		</>
	)
}
