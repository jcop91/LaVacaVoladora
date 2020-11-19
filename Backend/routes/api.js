const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {connect, mongoose } = require('../src/controller/db.controller')
const User = require('../src/models/users.Model')
const Cart = require('../src/models/cart.Model')
const Product = require('../src/models/product.Model');
const Category = require('../src/models/category.Model');
const { json } = require('body-parser');

connect()

module.exports = function(app){

//Revisa si se tiene el content Type de manera correcta con el application/json
const requireJsonContent = () => {
    return (req, res, next) => {
        if (req.headers['content-type'] !== 'application/json') {
            res.status(400).send('Server requires application/json')
        } else {
            next()
        }
    }
}

 /**
 * @swagger
 * /api/test:
 *  get:
 *      description: Test para validar el funcionamiento de la ruta api
 *      responses:
 *          200:
 *              description: success OK!
 */
app.get('/api/test', jsonParser, (req,res)=>{
        res.send('works Api Rest');
    })

////////////////////////////////LOGIN////////////////////////
/**
 * @swagger
 * /api/login:
 *  post:
 *      description: Post para hacer busqueda de un usuario en la base de datos 
 *      parameters: 
 *          correo: correo
 *          password: password
 *      responses:
 *          200:
 *              description: Tienes acceso (trae datos del usuario)
 *          500:
 *              description: Error finding user
 */
app.post("/api/login", jsonParser, requireJsonContent(), (req, res) =>{
    let user = req.body;
    let c = user.correo
    User.findOne({correo: c, password: user.password}, (err, docs) =>{
        if(docs){
            //let token = createToken(user)

            return res.status(200).send({
                message: 'Tienes acceso',
                //token: `${token}`, 
                admin: `${docs.admin}`, 
                user: {
                nombre: `${docs.nombre}`,
                apellido: `${docs.apellido}`,
                correo: `${docs.correo}`,
                telefono: `${docs.telefono}`,
                imagen: `${docs.imagen}`,
                descripcion: `${docs.descripcion}`,
                id: `${docs._id}`,
                },
                id: `${docs.id}`
            })
        }
        else {
            return res.status(400).send('Error finding user')
        }
    })
})

 ///////////////////////USUARIO//////////////////////////////
 /**
 * @swagger
 * /api/register:
 *  post:
 *      description: Post de creacion de usuario
 *      parameters: 
 *          nombre: nombre
 *          apellido: apellido
 *          correo: correo
 *      responses:
 *          200:
 *              description: Usuario creado correctamente
 *          500:
 *              description: Error al crear usuario
 */
app.post('/api/register', jsonParser, (req, res) => {
    console.log("****************************************");
    console.log(req.body);
    const user = new User({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        password: req.body.password,
        telefono: `null`,
        descripcion: `null`,
        imagen: `null`,
        admin: '0'
    })

    
    user.save((err)=>{
        if(err) res.status(500).send({message: `Error al crear usuario: ${err}`})

        return res.status(200).send({
            //token: createToken(user)
            message: "Usuario creado correctamente"
        })
    })
})
 /**
 * @swagger
 * /api/register:
 *  patch:
 *      description: Patch actualizar usuario
 *      parameters: 
 *      responses:
 *          200:
 *              description: Usuario actualizado correctamente
 *          400:
 *              description: Error al actualizar usuario
 */
app.patch('/api/user', requireJsonContent(), (req, res) =>{
    const id = req.body._id
    user.updateOne({_id: id}, req.body) .then((results) => {
        return res.status(200).json(results)
    }) .catch(err => {
        return res.status(400).json(err)
    })
})

////////////////////////CARRITO/////////////////////////////
 /**
 * @swagger
 * /api/cart:
 *  get:
 *      description: Get del carrito populated
 *      parameters: 
 *      responses:
 *          200:
 *              description: Obtencion de los datos del carrito populado correctamente
 *          400:
 *              description: Error al popular carrito
 */
app.get("/api/cart", function(req, res){
    cart.find({correo: req.user})
        .populate({path: 'productos_arr.productos'})
        .then((results) => {
            return res.status(200).json(results)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
})
 /**
 * @swagger
 * /api/cart/add:
 *  patch:
 *      description: Patch del carrito para agregar nuevos productos
 *      parameters: 
 *      responses:
 *          200:
 *              description: El carrito se actualizo correctamente
 *          400:
 *              description: Error al popular carrito
 */
app.patch('/api/cart/add', requireJsonContent(), (req, res) => {
    console.log(req.body);
    cart.findOne({correo: req.user}, (err, docs) =>{
        if(docs){
            Cart.updateOne({correo: req.user}, {$push: {productos_arr: req.body}}, (err, docs)=>{
                if (docs) {
                    let product = docs;
                    res.status(200).send(product);
                }else{
                    res.status(400).send({
                        error: "Error de actualización",err
                    })
                }
            })
        }else{
            let cart = {
                correo: req.user,
                productos_arr: [req.body],
                total: 0
            }
            const model = new Cart(cart)
            model.save()
            .then(result => {
                return res.status(201).json(result)
            })
            .catch(err => {
                console.log(err);
                return res.status(400).json(err)
            })
        }
    })
})


///////////////////////CATEGORIA/////////////////////////////
/**
 * @swagger
 * /api/register:
 *  post:
 *      description: Post de creacion de una cateogria nueva
 *      parameters:
 *          tipo: Nombre de hamburguesa
 *          imagen: urlImage
 *          hidden: false
 *          deleted: false
 *      responses:
 *          201:
 *              description: Category creado correctamente
 *          500:
 *              description: Error al crear categoria
 */
app.post('/api/category', jsonParser, (req, res)=>{
    let model = Category(req.body)
    model.save()
    .then(result => {
        return res.status(201).json(result)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})



/////////////////////////PRODUCT///////////////////////
/**
 * @swagger
 * /api/product:
 *  post:
 *      description: Post de creacion de un producto
 *      parameters: 
 *          tipo: "Nombre del producto"
 *          imagen: "url Imagen"
 *          hidden: false
 *          deleted: false
 *      responses:
 *          201:
 *              description: Category creado correctamente
 *          500:
 *              description: Error al crear categoria
 */
app.post('/api/product', jsonParser, function (req, res ) {
    const model = Product(req.body)
    model.save()
    .then(result => {
        res.status(201).json(result)
    })
    .catch(err => {
        res.status(400)
    })
})

/**
 * @swagger
 * /api/product:
 *  get:
 *      description: Get de traer la lista de producto
 *      parameters: 
 *          tipo: Nombre de hamburguesa
 *          imagen: (Some string)
 *          hidden: false
 *          deleted: false
 *      responses:
 *          200:
 *              description: Json con los productos
 *          400:
 *              description: No existen productos para mostrar
 */
app.get('/api/product', jsonParser, (req, res) => {

    if(req.query.id){
        Product.find({_id: req.query.id}, (err, docs)=>{
            if (docs) {
                let product = docs;
                res.status(200).send(product);
            }else{
                console.log(err);
                res.status(400).send({
                    error: "No existen productos para mostrar"
                })
            }
        })
    }else{
        Product.find({}, (err, docs)=>{
            if (docs) {
                let product = docs;
                res.status(200).send(product);
            }else{
                res.status(400).send({
                    error: "No existen productos para mostrar"
                })
            }
        })
    }
});
}