import axios from 'axios'
import Item from '@/components/item/Item'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

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
	// const router = useRouter()
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

export const getServerSideProps: GetServerSideProps = async context => {
	// context는 아래와 같은 데이터들을 가져온다.
	// res {...}
	// req {...}
	// query: { id: '477' },
	// resolvedUrl: '/view/477?id=477',
	// params: { id: '477' },
	// locales: undefined,
	// locale: undefined,
	// defaultLocale: undefined
	const id = context.query.id
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
 * 상세 화면은 현재 껍데기만 pre rendering 된 상태이다.
 * 그래서 server side rendering을 해줘야 한다.
 * 그래야 검색엔진에서도 읽을 수 있고, 메신저에 메시지를 보낼 때도 정보가 나온다.
 * 서버 에러는 production에서 확인할 수 있다. dev환경이라면 어디서 에러가 났다라고 표기 되기 때문이다.
 */
