import axios from 'axios'
import Item from '@/components/item/Item'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { Loader } from 'semantic-ui-react'

interface itemType {
	item: {
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
	name: string
}

export default function Post({ item, name }: itemType) {
	const { isFallback } = useRouter()

	if (isFallback) {
		return (
			<div style={{ padding: '150px 0' }}>
				<Loader inline="centered" active>
					Loading...
				</Loader>
			</div>
		)
	}

	// const { id } = router.query
	// const API_URL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
	// const [item, setItem] = useState({} as itemType)
	// const [isLoading, setIsLoading] = useState(true)

	// function getData() {
	// 	if (id && Number(id) > 0) {
	// 		axios
	// 			.get(API_URL)
	// 			.then(res => {
	// 				setItem(res.data)
	// 				setIsLoading(false)
	// 			})
	// 			.catch(err => {
	// 				console.log(err)
	// 			})
	// 	}
	// }

	// useEffect(() => {
	// 	getData()
	// }, [id])
	return (
		<>
			{/* {isLoading && (
				<div style={{ padding: '150px 0' }}>
					<Loader inline="centered" active>
						Loading...
					</Loader>
				</div>
			)} */}
			{/* {!isLoading && } */}
			{item && (
				<>
					<Head>
						<title>{item.name}</title>
						<meta name="description" content={item.description} />
					</Head>
					{name} 환경 입니다.
					<Item item={item}></Item>
				</>
			)}
		</>
	)
}

export const getStaticPaths = async () => {
	const apiUrl = process.env.API_URL
	const products = await axios.get(apiUrl)

	return {
		paths: products.data.slice(0, 9).map(prdt => ({
			params: {
				id: prdt.id.toString(),
			},
		})),
		fallback: true, // fallback이 false 이면 없는 페이지는 대응해주지 않아서 404 에러 발생
	}
}

export const getStaticProps: GetStaticProps = async context => {
	// getStaticPaths를 통해 가져온 데이터
	// {
	// 	params: { id: '495' },
	// 	locales: undefined,
	// 	locale: undefined,
	// 	defaultLocale: undefined
	// }

	const id = context.params.id
	const apiUrl = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
	const res = await axios.get(apiUrl)
	const data = res.data

	return {
		props: {
			item: data,
			name: process.env.NODE_ENV,
		},
	}
}

/*
 * fallback이 false 이면 없는 페이지는 대응해주지 않아서 404 에러 발생
 * fallback을 true로 바꾸면, getStaticPaths로 전달 된 경로들은 빌드 타임에 만들어지는건 변함 없다.
 * 나머지들은 최초 접속 시에 빈 화면이 나오고, 이후에 background에서 정적 파일로 HTML을 js를 생성해준다.
 * 그리고 next.js는 pre-redering 목록에 추가 한다.
 * 두번째 접속 부터는 정적 생성된 HTML을 사용한다.
 * 그래서 두번째 접속 부터는 새로고침해도 빈화면이 없다.
 * fallback: true는 페이지에 데이터가 많을 경우 유용하다.
 * 모든 제품을 pre-rendering 하고 싶겠지만, 그렇게 되면 빌드 타임이 늘어난다.
 * 최초 접속자들은 빈화면을 잠깐 보게 되겠지만 이후 접속하는 유저들은 정적 파일로 빠르게 제공 받는 것이다.
 * next Link에는 prefetch 기능이 있다. 기본 값은 true이다.
 * 이 기능은 첫화면이나 스크롤을 했을 때 viewport 내부에 있는 것들은 다 pre load 됩니다.
 * pre load가 되면 정적 생성이 되는 것이다.
 */
