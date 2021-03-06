const router = require( 'express' ).Router();
const { check } = require( 'express-validator' );

const { login, googleSignIn } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

router.post( '/login', [
    check( 'correo', 'El correo es obligatorio' ).isEmail(),
    check( 'password', 'La contraseña es obligatoria' ).trim().not().isEmpty(),
    validarCampos
],login );

router.post( '/google', [
    check( 'id_token', 'El id token es necesario' ).not().isEmpty(),
    validarCampos
], googleSignIn );

module.exports = router;