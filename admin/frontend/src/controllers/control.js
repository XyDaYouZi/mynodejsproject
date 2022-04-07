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
    }
}

export {
    signin,
    index
}