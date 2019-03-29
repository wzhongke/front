const router = require('koa-router')();
const pkgInfo = require('../../package.json');

router.get('/', async (ctx, next) => {
  await ctx.render('index/index', {
    title: '下决心',
    content: '404',
    ver: pkgInfo.version
  })
});

router.get('/article/list', async (ctx, next) => {
  await ctx.render('article/list', {
    title: '知识-下决心',
    page_title: '知识',
    ver: pkgInfo.version
  })
});
router.get('/article/:id', async (ctx, next) => {
  await ctx.render('article/article', {
    title: '知识-下决心',
    content: '',
    ver: pkgInfo.version,
    doc_id: ctx.params.id
  })
});

router.get('/item/:id', async (ctx, next) => {
  await ctx.render('item/detail', {
    title: '下决心',
    ver: pkgInfo.version,
    decision_id: ctx.params.id
  })
});

router.get('/daily/:id', async (ctx, next) => {
  await ctx.render('daily/daily', {
    title: '下决心日志',
    ver: pkgInfo.version,
    decision_id: ctx.params.id
  })
})

router.get('/api/decisiondiary/diaryforshare', async(ctx, next) => {
  ctx.response.body = '{"status":0,"msg":"success","data":{"decision_info":{"decision_id":"3","name":"\u8dd1\u6b65","start_date":"2017-12-10","end_date":"2017-12-12","money":"5","status":"3","create_time":"1512913365","type":"0","update_time":"1512913365","pay_type":"2","giveup_time":"","yiling_money":"3.33","left_money":"2.220446049250313e-16","real_yiling_money":"0","zhiyi_money":"0","guoqi_money":"0","fangqi_money":"0","earliest_zhiyi_time":"","remind":"1","remind_freq":"18:30","account_id":"1","privacy":"0","week":"1,2,3,4,5,6,7","last_get_money_date":"2017-12-12","invitation_code":"","is_public":0,"total_days":3,"passed_days":3,"weiling_money":0},"owner_info":{"user_id":"1","username":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434","signature":"\u6211\u7684\u672a\u6765\u4e0d\u662f\u68a6","head_pic":"","register_date":"","ip":"","city":"","sex":"","identification":"","cellphone":"","paypwd":"","wechat_nickname":"\u5434\u5c11\u4e91","wechat_sex":"0","wechat_headimgurl":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/o60fbNDEphfRk8nonOmhibyt2JBdlaib7DchpslD58y5QmRfcFHUoYmnU7npYYP8Zb9MelZ4OJZya6QoWBZb5tUQ\/132","wechat_openid":"odY79s5B6zJCQztAjeden6l2Z-T4","wechat_login_date":"2017-12-10 12:25:44","account_id":"1","show_name":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434"},"diary":[{"basic":{"decision_diary_id":"2","decision_id":"3","add_time":"2017-12-12 16:07:17","content":"\u53c8\u9886\u94b1\u4e86","img":[],"is_delete":"0","del_time":"","add_time_num":"1513066037"},"decision_info":{"decision_id":"3","name":"\u8dd1\u6b65","start_date":"2017-12-10","end_date":"2017-12-12","money":"5","status":"3","create_time":"1512913365","type":"0","update_time":"1512913365","pay_type":"2","giveup_time":"","yiling_money":"3.33","left_money":"2.220446049250313e-16","real_yiling_money":"0","zhiyi_money":"0","guoqi_money":"0","fangqi_money":"0","earliest_zhiyi_time":"","remind":"1","remind_freq":"18:30","account_id":"1","privacy":"0","week":"1,2,3,4,5,6,7","last_get_money_date":"2017-12-12","invitation_code":"","is_public":0,"total_days":3,"passed_days":3,"weiling_money":0},"user_info":{"user_id":"1","username":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434","signature":"\u6211\u7684\u672a\u6765\u4e0d\u662f\u68a6","head_pic":"","register_date":"","ip":"","city":"","sex":"","identification":"","cellphone":"","paypwd":"","wechat_nickname":"\u5434\u5c11\u4e91","wechat_sex":"0","wechat_headimgurl":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/o60fbNDEphfRk8nonOmhibyt2JBdlaib7DchpslD58y5QmRfcFHUoYmnU7npYYP8Zb9MelZ4OJZya6QoWBZb5tUQ\/132","wechat_openid":"odY79s5B6zJCQztAjeden6l2Z-T4","wechat_login_date":"2017-12-10 12:25:44","account_id":"1","show_name":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434"},"pinglun":[],"zan":[],"zanguo":0},{"basic":{"decision_diary_id":"1","decision_id":"3","add_time":"2017-12-10 21:45:45","content":"\u6d4b\u8bd5\u9886\u94b1","img":[],"is_delete":"0","del_time":"","add_time_num":"1512913545"},"decision_info":{"decision_id":"3","name":"\u8dd1\u6b65","start_date":"2017-12-10","end_date":"2017-12-12","money":"5","status":"3","create_time":"1512913365","type":"0","update_time":"1512913365","pay_type":"2","giveup_time":"","yiling_money":"3.33","left_money":"2.220446049250313e-16","real_yiling_money":"0","zhiyi_money":"0","guoqi_money":"0","fangqi_money":"0","earliest_zhiyi_time":"","remind":"1","remind_freq":"18:30","account_id":"1","privacy":"0","week":"1,2,3,4,5,6,7","last_get_money_date":"2017-12-12","invitation_code":"","is_public":0,"total_days":3,"passed_days":3,"weiling_money":0},"user_info":{"user_id":"1","username":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434","signature":"\u6211\u7684\u672a\u6765\u4e0d\u662f\u68a6","head_pic":"","register_date":"","ip":"","city":"","sex":"","identification":"","cellphone":"","paypwd":"","wechat_nickname":"\u5434\u5c11\u4e91","wechat_sex":"0","wechat_headimgurl":"http:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/o60fbNDEphfRk8nonOmhibyt2JBdlaib7DchpslD58y5QmRfcFHUoYmnU7npYYP8Zb9MelZ4OJZya6QoWBZb5tUQ\/132","wechat_openid":"odY79s5B6zJCQztAjeden6l2Z-T4","wechat_login_date":"2017-12-10 12:25:44","account_id":"1","show_name":"\u9a6c\u4e0a30\u5c81\u7684\u5c0f\u5434"},"pinglun":[],"zan":[],"zanguo":0}],"today_get_money_info":[]}}'
})

module.exports = router;
