import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import styles from '@components/styles/ItemList.module.css'
import Link from 'next/link'

interface ListProps {
	id: number
	description: string
	name: string
	image_link: string
	price: string
}

export default function ItemList({ list }) {
	return (
		<Grid columns={3}>
			<Grid.Row>
				{list.map(prdt => {
					return (
						<Grid.Column key={prdt.id}>
							<Link href={`/view/${prdt.id}`}>
								<a>
									<div className={styles.wrap}>
										<Image src={prdt.image_link} className={styles.img_item} />
										<strong className={styles.tit_name}>{prdt.name}</strong>
										<span className={styles.txt_info}>
											{prdt.category} {prdt.product_type}
										</span>
										<strong className={styles.num_price}>${prdt.price}</strong>
									</div>
								</a>
							</Link>
						</Grid.Column>
					)
				})}
			</Grid.Row>
		</Grid>
	)
}
