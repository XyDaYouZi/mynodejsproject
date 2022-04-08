import indexTPL from '../views/index.art';
import sigininTPX from '../views/signin.art';
const htmlSignin = sigininTPX();
const htmlIndex = indexTPL();

const _handleSubmit = (router) => {
    return (e) => {
        e.preventDefault();
        router.go('/index');
    }
}
const signin = (router) => {
    return (req, res, next) => {
        res.render(htmlSignin);
        $('#signin').on('submit', _handleSubmit(router));
    }
}
const index = (router) => {
    return (req, res, next) => {
        res.render(htmlIndex);
        //window resize,让页面撑满整个页面
        $(window, '.wrapper').resize();
    }
}

export {
    signin,
    index
}