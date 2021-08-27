module.exports = {
name: "banner",
code: `
$image[https://dummyimage.com/2000x500/33363c/ffffff&text=$replaceText[$message; ;+;-1]]
$color[RANDOM]
$argsCheck[>1;Bir mesaj yazmalısın.]
`
}  
