'use strict';

var Promise = require('bluebird');
var isPlainObject = require('lodash.isplainobject');
var trelloMethod = require('./TrelloMethod');

module.exports = {

    create: trelloMethod({
        method: 'POST'
    }),

    search: trelloMethod({
        method: 'GET',
        path: '/{id}',
        urlParams: ['id']
    }),

    createItems: trelloMethod({
        method: 'POST',
        path: '/{id}/checkItems',
        urlParams: ['id']
    }),

    searchField: trelloMethod({
        method: 'GET',
        path: '/{id}/{field}',
        urlParams: ['id', 'field']
    }),

    update: trelloMethod({
        method: 'PUT',
        path: '{id}',
        urlParams: ['id']
    }),

    // Avoid 'delete' keyword in JS
    del: trelloMethod({
        method: 'DELETE',
        path: '{id}',
        urlParams: ['id']
    }),

    setMetadata: function (id, key, value, auth, cb) {
        var self = this;
        var data = key;
        var isObject = isPlainObject(key);
        // We assume null for an empty object
        var isNull = data === null || (isObject && !Object.keys(data).length);

        // Allow optional passing of auth & cb:
        if ((isNull || isObject) && typeof value == 'string') {
            auth = value;
        } else if (typeof auth != 'string') {
            if (!cb && typeof auth == 'function') {
                cb = auth;
            }
            auth = null;
        }

        var urlData = this.createUrlData();
        var path = this.createFullPath('/' + id, urlData);

        return this.wrapTimeout(new Promise((function (resolve, reject) {
            if (isNull) {
                // Reset metadata:
                sendMetadata(null, auth);
            } else if (!isObject) {
                // Set individual metadata property:
                var metadata = {};
                metadata[key] = value;
                sendMetadata(metadata, auth);
            } else {
                // Set entire metadata object after resetting it:
                this._request('POST', path, {
                    metadata: null
                }, auth, {}, function (err, response) {
                    if (err) {
                        return reject(err);
                    }
                    sendMetadata(data, auth);
                });
            }

            function sendMetadata(metadata, auth) {
                self._request('POST', path, {
                    metadata: metadata
                }, auth, {}, function (err, response) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response.metadata);
                    }
                });
            }
        }).bind(this)), cb);
    },

    getMetadata: function (id, auth, cb) {
        if (!cb && typeof auth == 'function') {
            cb = auth;
            auth = null;
        }

        var urlData = this.createUrlData();
        var path = this.createFullPath('/' + id, urlData);

        return this.wrapTimeout(new Promise((function (resolve, reject) {
            this._request('GET', path, {}, auth, {}, function (err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(response.metadata);
                }
            });
        }).bind(this)), cb);
    }

};
