/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
};

/**
 * 格式化手机号为152****8888
 */
export const formatPhone = (phone) => {
    if (typeof phone === 'number') {
        phone = phone.toString();
    }
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

/**
 * 生成随机字符串(可指定长度)
 * @param len
 * @returns {string}
 */
export const randomString = (len) => {
    len = len || 8;
    let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    let maxPos = $chars.length;
    let pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};

/**
 * 获取url后参数
 */
export const GetRequest = () => {
    let url = location.search; //获取url中"?"符后的字串
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * 生成随机颜色值
 */
export const getRandomColor = () => {
    const rgb = [];
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1 ? '0' + color : color;
        rgb.push(color)
    }
    return '#' + rgb.join('')
};

/**
 * 验证身份证号
 * @param el 号码输入input
 * @returns {boolean}
 */
export const checkCardNo = (el) => {
    let txtval = el.value;
    let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return reg.test(txtval);
};

/**
 * 获取字符串字节长度
 * @param {String}
 * @returns {Boolean}
 */
export const checkLength = (v) => {
    let realLength = 0;
    let len = v.length;
    for (let i = 0; i < len; i++) {
        let charCode = v.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

/**
 * 判断微信浏览器
 * @returns {Boolean}
 */
export const isWeiXin = () => {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
};

/**
 * 写cookies
 */
export const setCookie = (name, value, time) => {
    let strsec = getsec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

/**
 * 读取cookies
 */
export const getCookie = (name) => {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) return (arr[2]);
    else return null;
};

/**
 * 删除cookies
 */
export const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

/**
 * 浏览器判断
 * 用法示例——多套页面判断是否显示移动端：
 *   let ua = parseUA();
 *   if (!ua.mobile) {
 *       location.href = './pc.html';
 *   }
 */
export const parseUA = () => {
    let u = navigator.userAgent;
    let u2 = navigator.userAgent.toLowerCase();
    return { //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1,
        //IE内核
        presto: u.indexOf('Presto') > -1,
        //opera内核
        webKit: u.indexOf('AppleWebKit') > -1,
        //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
        //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/),
        //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1,
        //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1,
        //是否iPad
        webApp: u.indexOf('Safari') == -1,
        //是否web应该程序，没有头部与底部
        iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
        weixin: u2.match(/MicroMessenger/i) == "micromessenger",
        ali: u.indexOf('AliApp') > -1,
    };
};



