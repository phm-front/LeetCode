let text = 1
let element = 1 << 1
// 授权
let target = text | element
// 校验text是否有权限
let isTextAuth = (text & target) === text
