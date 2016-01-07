'use strict';


var ABSync = {
    self: null,

    _fns: null,
    _parent: null,

    Class: function(parent)
    {
        this.self = this;
        var self = this.self;
        parent = typeof parent === 'undefined' ? null : parent;

        self._fns = [];
        self._parent = parent;
    },

    check: function()
    {
        var self = this.self;

        if (self._fns.length > 0 ||
                self._parent !== null) {
            throw "ABSync stack not empty.";
            return false;
        }

        return true;
    },

    finished: function()
    {
        var self = this.self;

        self._fns.splice(0, 1);
        if (self._fns.length > 0)
            self._fns[0](new ABSync.Class(self));
        else if (self._parent !== null)
            self._parent.finished();
    },

    join: function(fn, id)
    {
        var self = this.self;
        id = typeof id === 'undefined' ? null : id;

        self._fns.push(fn);
        if (self._fns.length === 1)
            fn(new ABSync.Class(self));

        return self;
    },

    _run: function()
    {
        var self = this.self;
    }
};
ABSync.Class.prototype = ABSync;
exports.ABSync = ABSync;
