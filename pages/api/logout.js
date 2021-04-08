// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  // Max-Age가 0이면 즉시 쿠키가 소멸 된다.
  res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
  res.statusCode = 200
  res.json({
    message: "ok"
  })
}