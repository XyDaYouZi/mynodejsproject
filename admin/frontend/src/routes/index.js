import SMERouter from 'sme-router';
import indexTPL from '../views/index.art';
import sigininTPX from '../views/signin.art';
const router = new SMERouter('root');
const htmlSignin = sigininTPX();
const htmlIndex = indexTPL();



router.route('/', (req, res, next) => {
    res.send(htmlSignin);
})
router.route('/signin', (req, res, next) => {
    res.send(htmlIndex);
})

export default router;