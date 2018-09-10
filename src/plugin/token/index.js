
export default {
    setToken(name, token) {
        if (localStorage) {
            localStorage.setItem(name,token);
        } else if (window.navigator.cookieEnabled) {
            document.cookie = name + "=" + token;
        } else {
            alert('浏览器版本太低，请升级浏览器!');
        }
    },
    getToken(token) {
        if (localStorage && localStorage.getItem(token)) {
            return localStorage.getItem(token)
        }

        if (window.navigator.cookieEnabled) {

            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                if (c.split('=')[0].trim() == token) {
                    return c.split('=')[1]
                }
            }
            return null;
        }

        return null;
    },
    removeToken(name){
        if (localStorage && localStorage.getItem(name)) {
            localStorage.removeItem(name)
        }

        if (window.navigator.cookieEnabled) {
            document.cookie = name + "=; expires=-1";  
        }
    }
}