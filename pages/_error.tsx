function Error({ statusCode }) {
	return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error

/*
 * 서버 에러는 production에서 확인할 수 있다. dev환경이라면 어디서 에러가 났다라고 표기 되기 때문이다.
 * 이 페이지는 정적으로 최적화 되지 않습니다.
 * 왜냐하면, 서버 쪽으로 에러를 동반하는 경우가 많기 때문인데요.
 * 어떤 에러다. 로그에도 남기고 리프팅 하는거죠.
 * 에러 페이지는 404일 경우에도 제공 된다. 그러나 404 에러 페이지는 정적으로 생성되어야 하기 때문에 404.tsx는 살려두자.
 * 이러면 결과적으로 404 에러가 나면 404.tsx 페이지가 보여지고, 서버에러는 _error.tsx 페이지가 보여질 것이다.
 */
