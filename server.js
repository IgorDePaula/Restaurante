var restify = require('restify');//para chamadas rest
var Sequelize = require('sequelize');//mara orm
var sequelize = new Sequelize('restaurante', 'restaurante', 'restaurante', {
    host: 'localhost',
    port: 3306,
    dislect: 'mysql'//permite 5 banco de dados
});
var server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());//mas ja vi como me precaver quanto a isso
sequelize.sync(false); //ele sincroniza o model, ou seja, cria a tabela
//defino a tabela
var Produto = sequelize.define('Produto', {
    idProduto: Sequelize.INTEGER,
    nome: Sequelize.STRING,
    descricao: Sequelize.STRING,
    valorbase: Sequelize.FLOAT(5, 2),
    ativo: Sequelize.INTEGER,
    precoativo: Sequelize.INTEGER
}, {
    tableName: 'Produto',
    timestamps: false //timestamps seria akele create_at do rails, igualzinho
});

server.get('/produtos', function(req, res, next) {//ao receber get do produtos, ele verifica se eh get all ou get one
   
    if (!req.params.produto)
    {
        sequelize.query("SELECT * FROM Produto").success(function(myTableRows) {
            res.send(myTableRows);//envio de volta
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

server.post('/produtos', function(req, res, next) {//faz o post da chamada e salva no banco
        var produto = Produto.build(req.body);
        produto.save().success(function(prod,err) {
            if (!err)
                res.send({result: true});
            if (err) {
                res.send({erro: err});
                console.log(err);
            }
        });
    return next();
});

server.listen(4000, function() {
    console.log('%s listening at %s', server.name, server.url);
});


