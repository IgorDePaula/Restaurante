angular.module('template.app', ['app/module/produtos/view/produto-edit.tpl.html', 'app/module/produtos/view/produto-lista.tpl.html', 'app/module/produtos/view/produto-novo.tpl.html', 'app/module/produtos/view/produtos.tpl.html', 'app/module/relatorios/view/relatorios.tpl.html', 'app/module/user/view/user-dashboard.tpl.html', 'app/module/user/view/user-profile.tpl.html', 'app/module/user/view/user-settings.tpl.html', 'app/module/user/view/user.tpl.html', 'app/module/vendas/view/vendas.tpl.html', 'app/view/about.tpl.html', 'app/view/contact.tpl.html', 'app/view/footer.tpl.html', 'app/view/header.tpl.html', 'app/view/home.tpl.html']);

angular.module('app/module/produtos/view/produto-edit.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/produtos/view/produto-edit.tpl.html',
        '<div class="panel panel-info"><div class=panel-heading><h3 class=panel-title>Editar Produto</h3></div><div class=panel-body><div class="alert alert-success" ng-show=result.result><i class="glyphicon glyphicon-saved"></i> Produto atualizado com sucesso.</div><div class="alert alert-danger" ng-if=result.erro><i class="glyphicon glyphicon-warning-sign"></i> {{result.erro}}</div><div class=form-group><label for=exampleInputEmail1>Nome do produto</label><input name=nome ng-model=produto.nome required class=form-control id=exampleInputEmail1 placeholder="Nome do produto"></div><div class=form-group><label for=exampleInputPassword1>Descrição do produto</label><br><textarea ng-model=produto.descricao name=descricao></textarea></div><div class=form-group><label for=exampleInputEmail1>Preço do produto</label><input ng-model=produto.valorbase name=valor required class=form-control id=exampleInputEmail1 placeholder="Preço do produto"></div><div class=checkbox><label><input ng-model=produto.ativo ng-checked=produto.ativo type=checkbox>Ativo</label></div></div><div class=panel-footer><button type=submit ng-click=add() ng-disabled="!produto.nome || !produto.valorbase" class="btn btn-success"><i class="glyphicon glyphicon-save"></i> Salvar</button></div></div>');
}]);

angular.module('app/module/produtos/view/produto-lista.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/produtos/view/produto-lista.tpl.html',
        '<div class=page-header><h1>Lista de Produtos</h1><br></div><h4><input ng-model=busca placeholder="Busca: Digite um termo"></h4><div ng-show=isLoading class="progress progress-striped active"><div class=progress-bar role=progressbar aria-valuenow=45 aria-valuemin=0 aria-valuemax=100 style="width: 45%"><span class=sr-only>45% Complete</span></div></div><table class="table table-bordered table-striped"><thead><tr><th>Produto</th><th>Descriçao</th><th>Ativo</th><th>Valor</th><th>Opções</th></tr></thead><tbody><tr ng-repeat="produto in produtos | filter:busca"><td>{{produto.nome}}</td><td>{{produto.descricao}}</td><td><span ng-if="produto.ativo == 1" class="label label-success">Sim</span> <span ng-if="produto.ativo == 0" class="label label-danger">Não</span></td><td>{{produto.valorbase | currency}}</td><td><a class="btn btn-default" ui-sref=produtos.edit({id:produto.id}) title="Editar produto"><i class="glyphicon glyphicon-pencil"></i></a></td></tr></tbody><tfoot><tr><td colspan=3><a class="btn btn-default" ui-sref=produtos.novo title="Adicionar produto"><i class="glyphicon glyphicon-plus"></i></a></td></tr></tfoot></table>');
}]);

angular.module('app/module/produtos/view/produto-novo.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/produtos/view/produto-novo.tpl.html',
        '<div class="panel panel-info"><div class=panel-heading><h3 class=panel-title>Adicionar Produto</h3></div><div class=panel-body><div class="alert alert-success" ng-show=result.result><i class="glyphicon glyphicon-saved"></i> Produto registrado com sucesso.</div><div class="alert alert-danger" ng-show={{result.erro}}><i class="glyphicon glyphicon-warning-sign"></i> {{result.erro}}</div><div class=form-group><label for=exampleInputEmail1>Nome do produto</label><input name=nome ng-model=produto.nome required class=form-control id=exampleInputEmail1 placeholder="Nome do produto"></div><div class=form-group><label for=exampleInputPassword1>Descrição do produto</label><br><textarea ng-model=produto.descricao name=descricao></textarea></div><div class=form-group><label for=exampleInputEmail1>Preço do produto</label><input ng-model=produto.valorbase name=valor required class=form-control id=exampleInputEmail1 placeholder="Preço do produto"></div><div class=checkbox><label><input ng-model=produto.ativo type=checkbox>Ativo</label></div></div><div class=panel-footer><button type=submit ng-click=add() ng-disabled="!produto.nome || !produto.valorbase" class="btn btn-success"><i class="glyphicon glyphicon-save"></i> Salvar</button></div></div>');
}]);

angular.module('app/module/produtos/view/produtos.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/produtos/view/produtos.tpl.html',
        '<div id=prod-modules ui-view=""></div>');
}]);

angular.module('app/module/relatorios/view/relatorios.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/relatorios/view/relatorios.tpl.html',
        '<div class=page-header><h1>Relatorios</h1></div><p>...</p>');
}]);

angular.module('app/module/user/view/user-dashboard.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-dashboard.tpl.html',
        '<h2>Your dashboard</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-profile.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-profile.tpl.html',
        '<h2>Manage your profile</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user-settings.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user-settings.tpl.html',
        '<h2>Manage your account settings</h2><p>...</p>');
}]);

angular.module('app/module/user/view/user.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/user/view/user.tpl.html',
        '<div class=page-header><h1>{{heading}}</h1></div><ul class="nav nav-tabs"><li ui-sref-active=active ng-repeat="module in userModules"><a ui-sref={{module.sref}}>{{module.title}}</a></li></ul><div id=user-modules ui-view=""></div>');
}]);

angular.module('app/module/vendas/view/vendas.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/module/vendas/view/vendas.tpl.html',
        '<div class=page-header><h1>Vendas</h1></div>produto: {{produto.nome}}<div ng-show=isLoading class="progress progress-striped active"><div class=progress-bar role=progressbar aria-valuenow=45 aria-valuemin=0 aria-valuemax=100 style="width: 45%"><span class=sr-only>45% Complete</span></div></div><div class=row><div class=col-md-2>Total:</div><div class=col-md-10>{{calcula() | currency}}</div></div><div class=row><div class=col-md-2>Valor Pago:</div><div class=col-md-10><input name=pago ng-model=valorpago></div></div><div class=row><div class=col-md-2>Troco:</div><div class=col-md-10>{{valorpago - calcula() | currency}}</div></div><br><div class=row><div class=col-md-12><table ng-if="pedido.length > 0" class="table table-bordered table-striped"><thead><tr><th>Produto</th><th>Valor</th></tr></thead><tbody><tr ng-repeat="ped in pedido"><td>{{ped.nome}}</td><td>{{ped.valorbase| currency}}</td></tr></tbody><tfoot><tr><td>Valor final:</td><td>{{calcula() | currency}}</td></tr></tfoot></table></div></div><h4><input ng-model=busca placeholder="Busca: Digite um termo"></h4><div class=row><div class=col-md-12><table class="table table-bordered table-striped"><thead><tr><th>Produto</th><th>Descriçao</th><th>Valor</th><th>Adicionar</th></tr></thead><tbody><tr ng-repeat="produto in produtos| filter:busca" ng-animate="\'animate\'"><td>{{produto.nome}}</td><td>{{produto.descricao}}</td><td>{{produto.valorbase| currency}}</td><td><input type=checkbox ng-model=produto.add></td></tr></tbody><tfoot><tr><td colspan=3><a class="btn btn-default" ui-sref=produtos.novo title="Adicionar produto"><i class="glyphicon glyphicon-plus"></i></a></td></tr></tfoot></table></div></div>');
}]);

angular.module('app/view/about.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/about.tpl.html',
        '<div class=page-header><h1>About us!</h1></div><p>...</p>');
}]);

angular.module('app/view/contact.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/contact.tpl.html',
        '<div class=page-header><h1>Contact us!</h1></div><address>...</address>');
}]);

angular.module('app/view/footer.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/footer.tpl.html',
        '<div class="navbar navbar-inverse navbar-fixed-bottom" role=navigation><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-ex6-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class="collapse navbar-collapse navbar-ex6-collapse"><ul class="nav navbar-nav"><li><a href=#contact><span class="glyphicon glyphicon-copyright-mark"></span> 2014</a></li></ul></div></div></div>');
}]);

angular.module('app/view/header.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/header.tpl.html',
        '<div ng-controller=NavigationCtrl class="navbar navbar-default navbar-fixed-top"><div class=container><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand ui-sref=vendas>Restaurante</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ng-class="{active: $state.includes(\'{{item.state}}\')}" ng-repeat="item in navItems"><a ui-sref={{item.sref}}><span ng-show=item.icon class="glyphicon {{item.icon}}"></span> {{item.title}}</a></li></ul></div></div></div>');
}]);

angular.module('app/view/home.tpl.html', []).run(['$templateCache', function($templateCache) {
    'use strict';
    $templateCache.put('app/view/home.tpl.html',
        '<div class=jumbotron ng-controller=HomeCtrl><h1>{{heading}}</h1><p>This is an AngularJS application scaffold. It\'s powered by Grunt and Bower and styled with Bootstrap.</p><p><a class="btn btn-lg btn-primary" href=#about>Learn more <span class="glyphicon glyphicon-chevron-right"></span></a></p></div>');
}]);
