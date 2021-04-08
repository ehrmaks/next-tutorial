// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    if (req.method === 'POST') {
        res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
        res.statusCode = 200
        res.json({
            message: "ok"
        })
    }
}