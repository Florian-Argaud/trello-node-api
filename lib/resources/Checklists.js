'use strict';

var TrelloResource = require('../TrelloResource');
var trelloMethod = TrelloResource.method;

module.exports = TrelloResource.extend({

    path: 'checklists',
    includeBasic: [
        'create', 'createItems', 'search', 'searchField', 'update', 'del'
    ]

});
