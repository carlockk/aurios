const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.createUser = async (req, res) => {
	// obtener usuario, email y password de la petición
	const { username, email, password } = req.body    
	try {
		// fragmento aleatorio para usarse con el password
		const salt = await bcryptjs.genSalt(10)
		const hashedPassword = await bcryptjs.hash(password, salt)
		// crea un usuario con su password encriptado
		const respuestaDB = await Usuario.create({
			username, 
			email, 
			password: hashedPassword
        })
		// usuario creado
		return res.json(respuestaDB)
	} catch (error) {
		return res.status(400).json({
			msg: error
		})
	}
}

exports.login = async(req, res) => {

    // obtiene el email y password de la petición
    const {email, password} = req.body
    try {
        // busca al usuario
        let foundUser = await Usuario.findOne({email})
        // si no se encuentra al usuario,da un error
        if(!foundUser){
            return res.status(400).json({msg: "Username does not exist"})
        }
        // si lo encuentra, evalua si la contraseña es correcta
        const passCorrecto = await bcryptjs.compare(password, foundUser.password)
        // si la contraseña es incorrecta, lo reporta 
        // con cuidado de no entregar más info de la estrictamente necesaria
        if(!passCorrecto){
            return await res.status(400).
	            json({msg: "The username or password does not correspond"})
        }
        // si todo es correcto, generam un json web token
        // 1. el 'payload' será un objeto que contendrá el id del usuario
        const payload = { user: { id: foundUser.id } }
        // 2. firma del jwt
        jwt.sign(
            payload, 
            // usa la palabra secreta para descifrar la firma electrónica del token
            process.env.SECRET,
            {
                expiresIn: 3600 // expiración del token
            }, 
            (error, token) => {
                if(error) throw error;
                //si todo va bien, retorna el token
                res.json({token})
	    })
    } catch (error) {
        res.json({
            msg: "we have an error",
            error
        })
    }
}

exports.verifyToken = async (req, res) => {
	try {
		// confirma que el usuario exista y 
		//retorna sus datos, excluyendo de password
		const usuario = await Usuario.findById(req.user.id).select('-password')
		res.json({ usuario })
	} catch (error) {
		// en caso de error, devolver un mensaje
		res.status(500).json({
			msg: "we have an error",
			error
		})
	}
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await Usuario.find({});
        res.json({users}) 
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error al intentar obtener los usuarios",
            error
        })
    }
}
// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const updated = await Usuario.findByIdAndUpdate(req.user.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
