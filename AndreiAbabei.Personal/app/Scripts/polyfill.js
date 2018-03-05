if (!String.prototype.endsWith) {
// ReSharper disable once NativeTypePrototypeExtending
    String.prototype.endsWith = function(search, thisLen) {
        if (thisLen === undefined || thisLen > this.length) {
            thisLen = this.length;
        }
        return this.substring(thisLen - search.length, thisLen) === search;
    };
}