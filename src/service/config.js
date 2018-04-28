const CONFIG = {
	url: 'http://localhost',
	success: {
		'101': "登录成功",
		'102': "已发送，请进入邮箱进入链接重置密码"
	},
	error: {
		'-1': '操作失败，请检查网络！',
		'-101': '登录失败，用户名不存在！',
		'-102': '登录失败，密码错误！',
		'-103': '发送邮件失败！'
	}
}

export default CONFIG