var restify = require('restify');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('restaurante', 'restaurante', 'restaurante', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});
var server = restify.createServer({
    name: 'localhost',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS()); 
sequelize.sync(false); 
var Produto = sequelize.define('Produto', {
    idProduto: Sequelize.INTEGER,
    nome: Sequelize.STRING,
    descricao: Sequelize.STRING,
    valorbase: Sequelize.FLOAT(5, 2),
    ativo: Sequelize.INTEGER,
    precoativo: Sequelize.INTEGER
}, {
    tableName: 'Produto',
    timestamps: false 
});
server.get('/produtos', function(req, res, next) {

    if (!req.params.produto)
    {
        sequelize.query("SELECT * FROM Produto").success(function(myTableRows) {
            res.send(myTableRows); 
        });
    }
    if (req.params.produto)
    {
        Produto.find({where: {id: req.params.produto}})
                .complete(function(err, produto) {
                    if (!!err) {
                        res.send({erro: err});
                    } else if (!produto) {
                        res.send({erro: "Nenhum produto encontrado com esta identificacao!"});
                    } else {
                        res.send(produto);
                    }
                })

    }
    return next();
});
server.get('/venda/produtos', function(req, res, next) {
        sequelize.query("SELECT * FROM Produto where ativo = 1").success(function(myTableRows) {
            res.send(myTableRows); 
        });
   
    return next();
});


server.post('/produtos', function(req, res, next) {
    if (!req.body.id)
    {
        var produto = Produto.create(req.body).success(function(prod, err) {
            if (!err)
                res.send({result: true});
            if (err) {
                res.send({erro: err});
                console.log(err);
            }
        });
    } else
    {
        Produto.find({where: {id: req.body.id}})
                .complete(function(err, produto) {
                    if (!!err) {
                        res.send({erro: err});
                    } else if (!produto) {
                        res.send({erro: "Nenhum produto encontrado com esta identificacao!"});
                    } else {
                        produto.updateAttributes({
                            nome: req.body.nome,
                            descricao: req.body.descricao,
                            ativo: req.body.ativo,
                            precoativo: req.body.precoativo
                        }).success(function(prod, err) {
                            if (!err)
                                res.send({result: true});
                            if (err) {
                                res.send({erro: err});
                                console.log(err);
                            }
                        })
                    }
                })
    }
    return next();
});
server.listen(4000, function() {
    console.log('%s listening at %s', server.name, server.url);
});


