function isAuthenticated(req, res, next) {
  if (!req.cookies.userInfo) {
    console.log('我来重定向')
    return res.redirect('/index'); // 重定向到/index
  }
  next();
}

module.exports = isAuthenticated;
