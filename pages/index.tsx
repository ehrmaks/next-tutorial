import axios from 'axios'
import Head from 'next/head'
import React from 'react'
import ItemList from '@components/item/ItemList'
import { Divider, Header, Loader } from 'semantic-ui-react'
import { GetStaticProps } from 'next'

type ListType = {
	list: Array<{
		id: number
		image_link: string
		name: string
		category: string
		product_type: string
		price: number
	}>
}

export default function Home({ list }: ListType) {
	// const API_URL = process.env.NEXT_PUBLIC_API_URL
	// const [list, setList] = useState([] as ListType)
	// const [isLoading, setIsLoading] = useState(true)

	// function getData() {
	// 	axios
	// 		.get(API_URL)
	// 		.then(res => {
	// 			setList(res.data)
	// 			setIsLoading(false)
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }

	// useEffect(() => {
	// 	getData()
	// }, [])

	return (
		<div>
			<Head>
				<title>HOME | Jookbob2</title>
				<meta name="description" content="죽밥이 홈입니다." />
			</Head>
			{/* {isLoading && (
				<div style={{ padding: '300px 0' }}>
					<Loader inline="centered" active>
						Loading...
					</Loader>
				</div>
			)} */}
			{/* {!isLoading && ( */}
			<>
				<Header as="h3" style={{ paddingTop: 20 }}>
					인기 상품
				</Header>
				<Divider></Divider>
				<ItemList list={list.slice(0, 9)}></ItemList>
				<Header as="h3" style={{ paddingTop: 20 }}>
					최신 상품
				</Header>
				<Divider></Divider>
				<ItemList list={list.slice(9)}></ItemList>
			</>
			{/* )} */}
		</div>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const apiUrl = process.env.API_URL
	const res = await axios.get(apiUrl)

	return {
		props: {
			list: res.data as ListType,
			name: process.env.NODE_ENV as string,
		},
	}
}

/*
 * 페이지가 바로 뜨기 때문에 로딩화면이 필요가 없다.
 * 빈화면을 그린다음 API 호출을 통해서 HTML을 채워주는게 아니라 미리 만들어진 Static HTML을 제공하는 것이다.
 */
