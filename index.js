'use strict';

var ABSync = require('./libs/ab-sync.js').ABSync;


module.exports = {
    new: function() {
        return new ABSync.Class();
    }
};
