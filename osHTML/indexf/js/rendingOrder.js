$.ajax({
    url: "http://zhonglan.qilewang.net/front/order/list/11",
    type: "get",
    success: function (res) {
        console.log(res)
        $("#toPayNumber").text(res.a)
        $("#delieverGoodsNumber").text(res.b)
        $("#receiveGoodsNumber").text(res.c)
        $("#evaluateNumber").text(res.d)

        var arr10 = [],
            arr20 = [],
            arr30 = [],
            arr40 = [],
            arr50 = [],
            arr60 = [],
            arr70 = [],
            arr80 = [],
            arr90 = [],
            arr100 = [],
            arr110 = [],
            arr120 = []



        var allPro = res.orderVOs

        for (let i = 0; i < res.orderVOs.length; i++ ) {
            console.log(res.orderVOs[i].orderStatus)
            if (res.orderVOs[i].orderStatus == 10) {
                arr10.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 20) {
                arr20.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 30) {
                arr30.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus== 40) {
                arr40.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 50) {
                arr50.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 60) {
                arr60.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 70) {
                arr70.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 80) {
                arr80.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 90) {
                arr90.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 100) {
                arr100.push(res.orderVOs[i])
            } else if (res.orderVOs[i].orderStatus == 110) {
                arr110.push(res.orderVOs[i])
            }
        }


        let orderVO = arr40
        let html40 = ''
        let html40in = ''
        let  orderProduct = ''
        let indextime = ''



        // onerror="/static/defaultImage/default_product.jpg"

        function transformTime(timestamp ) {
            if (timestamp) {
                var time = new Date(timestamp);
                var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
                var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
                var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
                var h = time.getHours(); // getHours方法返回 Date 对象的小时 (0 ~ 23)
                var m = time.getMinutes(); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
                var s = time.getSeconds(); // getSeconds方法返回 Date 对象的秒数 (0 ~ 59)
                return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
            } else {
                return '';
            }
        }



        for (let i = 0; i < orderVO.length; i ++ ) {
            for (let j =0; j < orderVO[i].orderProducts.length; j++ ) {
                orderProduct =  orderVO[i].orderProducts[j]
                html40in = html40in +
                    '<div class="y1-personal-content1-left-box1">\
                            <img src='+ urlimgComm +orderProduct.picImg + ' class="y1-left-box1-img1" \
				width="80" height="80" alt=' +orderProduct.name + '&nbsp;&nbsp;' + 'orderProduct.productSpecName ' + ' onerror="/static/defaultImage/default_product.jpg"\
				title=' + 'orderProduct.name' + '&nbsp;&nbsp;' + 'orderProduct.productSpecName' + '>\
						<div class="y1-left-box1-text">\
						<a><p class="y1-left-box1-text-p">' + orderProduct.name + '</p></a>\
				<span class="y1-left-box1-text-sp">' + orderProduct.productSpecName + '</span>\
						</div>\
						<div class="y1-left-box1-danjia">￥' + orderProduct.price + '</div>\
				<div class="y1-left-box1-shuliang">\
						 ' + orderProduct.buyNumber + '</div>\
						<div class="y1-left-box1-tuikuan"><a\
				href="${ctx}/uc/order/refund/page/${orderVO.orderNumber}?urlId=${urlId}"\
			>申请售后</a></div>\
				<c:if test="${orderVO.orderId == 0}">\
						<div class="y1-left-box1-tuikuan">退货失败</div>\
						</div>'

            }

            indextime = transformTime(orderVO[i].createTime)

            html40 = html40 +
                '<div class="y1-personal-content1 y1-personal-content1_pj">\
            <div class="y1-personal-content1-top y1-personal-content1-top_pj">\
            <div class="y1-personal-content1-date">'+ indextime +'\
                        </div>\
                        <div class="y1-personal-content1-oder">\
                        订单号 ：<a href="${ctx}/uc/order/${orderVO.orderNumber}?urlId=${urlId}">' + orderVO[i].orderNumber + '</a>\
						</div>\
						</div>\
						<div class="y1-personal-content1-left">\
						'+ html40in +
                '</div>\
                <div class="y1-personal-content1-right">\
                <div class="y1-right-box1-shifukuan">\
                <span class="y1-right-box1-shifukuan-sp1">¥'+ orderVO[i].payAmount + '</span>\
				<span class="y1-right-box1-shifukuan-sp1">(含运费:¥ ' +  orderVO[i].shipmentAmount+ ')</span>\
				</div>\
				<div class="y1-right-box1-zhuangtai">\
						<span class="y1-right-box1-zhuangtai-sp1">交易完成</span> <span\
			class="y1-right-box1-zhuangtai-sp1"><a\
				href="${ctx}/uc/order/${orderVO.orderNumber}?urlId=${homePage.urlId }">订单详情</a></span>\
				<span\
			class="y1-right-box1-zhuangtai-sp1 y1-right-box1-zhuangtai-sp1-active" onclick="wuliu( ' + orderVO[i].orderNumber + ');">查看物流</span>\
				</div>\
				<div class="y1-right-box1-jiaoyicaozuo">\
						<span class="y1-right-box1-jiaoyicaozuo-sp1_pj"\
				onclick="goComment("${orderVO.orderNumber}")">评价</span>\
				<!--<span class="y1-right-box1-jiaoyicaozuo-sp2">取消订单</span>-->\
						</div>\
						</div>\
						</div>'
            html40in = ''
        }

        $('#pingjia').html(html40)

    }










})
