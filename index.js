var UF = module.exports = function () {
    this.labels = {}
}

UF.prototype.label = function (name) {
    var uf = this
    return function (handler) {
        uf.labels[name] = handler
    }
}

UF.prototype.goto = function (name) {
    var args = Array.prototype.slice.call(arguments, 1)
    var handler = this.labels[name]
    return handler && handler.apply(handler, args)
}
