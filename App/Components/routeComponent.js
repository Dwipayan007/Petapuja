"use strict";
var router_1 = require('@angular/router');
var newArrivalComponent_1 = require('./newArrivalComponent');
var producteasyComponent_1 = require('./producteasyComponent');
var productComponent_1 = require('./productComponent');
exports.routes = [
    { path: '', component: newArrivalComponent_1.newArrivalComponent },
    { path: 'producteasy', component: producteasyComponent_1.producteasyComponent },
    { path: 'pickels', component: productComponent_1.productComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routeComponent.js.map