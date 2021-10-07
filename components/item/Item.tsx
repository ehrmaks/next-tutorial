import { Button, Header, Image } from 'semantic-ui-react'
import styles from '@components/styles/Item.module.css'

interface itemProps {
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
}

export default function Item({ item }: itemProps) {
	const { image_link, name, price, description, category, product_type } = item
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.img_item}>
					<Image src={image_link} alt={name} />
				</div>
				<div className={styles.info_item}>
					<strong className={styles.tit_item}>{name}</strong>
					<strong className={styles.num_price}>${price}</strong>
					<span className={styles.txt_info}>
						{category ? `${category}/` : ''}
						{product_type}
					</span>
					<Button color="orange">구매하기</Button>
				</div>
			</div>
			<Header as="h3">Description</Header>
			<p className={styles.desc}>{description}</p>
		</>
	)
}

// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:36:15.012Z"
// currency: null
// description: "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
// id: 495
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer"
// price: "14.99"
// price_sign: null
// product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/495.json"
// product_colors: []
// product_link: "https://well.ca/products/maybelline-face-studio-master_88837.html"
// product_type: "bronzer"
// rating: 5
// tag_list: []
// updated_at: "2017-12-23T21:08:50.624Z"
// website_link: "https://well.ca"
