import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

/*
 * 이벤트 동작 불가
 * css 동작 불가
 * 모든 페이지에 적용되어야 하는 것은 _app 에서 해야한다.
 */
