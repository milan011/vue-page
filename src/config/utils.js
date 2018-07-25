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
