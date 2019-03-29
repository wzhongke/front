function toDecimal(x) { 
    var f = parseFloat(x); 
    if (isNaN(f)) { 
        return 0; 
    } 
    f = Math.round(x*100)/100; 
    return f; 
} 

$.ajax({
    type: 'POST',
    url: '/webapi/decisiondiary/diaryforshare',
    data: $.param({'decision_id' : global.decision_id}),
    dataType: 'json',
    success: function(data, status, xhr) {
        if (data == null) return ;
        var decisionInfo = data.data.decision_info;
        var ownerInfo = data.data.owner_info;

        var userImage = ownerInfo.wechat_headimgurl;
        var userName = ownerInfo.wechat_nickname;
        var todayMoney = 0;

        if (decisionInfo.today_get_money_info) {
            todayMoney = toDecimal(decisionInfo.today_get_money_info.money);
        }

        if (document.title) {
            document.title = "我押入" + decisionInfo.money + "元下决心“" + decisionInfo.name + "”，今天是第" + decisionInfo.passed_days + "天，我在坚持";
        
        }
        $(".desicion").text(userName + ' ' + decisionInfo.name);
        $(".image-wrapper").html("<img src='"+ userImage +"'/>");
        $('.already').text('已经坚持' + decisionInfo.passed_days + '天');
        $('.circle-top h4').text(decisionInfo.money);
        $('.circle-bottom p').text('已经领' + decisionInfo.yiling_money + '元');
        $('.statistic').text('今日领取' + todayMoney + '元，累积领取' + decisionInfo.yiling_money + '元');

        $('#total_money').text(decisionInfo.money + '元');
        $('#total_day').text(decisionInfo.total_days);
        $('#eachday_mondy').text(toDecimal (decisionInfo.money / decisionInfo.total_days));
        $('#remind_time').text(decisionInfo.remind_freq);
    },
    error: function() {
        console.log('error');
    }
});
