/**
 * Twisttext
 * https://github.com/arufiam/twisttext
 *
 * Copyright (c) 2014 Alfian Busryo
 * Licensed under the MIT license.
 */

/**
 * flip a text/string.
 *
 * @param  {String} oriStr
 * @return {String}
 */
var flipIt = function(oriStr) {
    var charArray =
    {
        'a' : '\u0250',
        'b' : 'q',
        'c' : '\u0254',
        'd' : 'p',
        'e' : '\u01DD',
        'f' : '\u025F',
        'g' : '\u0183',
        'h' : '\u0265',
        'i' : '\u0131',
        'j' : '\u027E',
        'k' : '\u029E',
        'l' : '\u05DF',
        'm' : '\u026F',
        'n' : 'u',
        'r' : '\u0279',
        't' : '\u0287',
        'v' : '\u028C',
        'w' : '\u028D',
        'y' : '\u028E',
        'A' : '∀',
        'B' : '𐐒',
        'C' : 'Ɔ',
        'E' : 'Ǝ',
        'F' : 'Ⅎ',
        'G' : 'פ',
        'H' : 'H',
        'I' : 'I',
        'J' : 'ſ',
        'L' : '˥',
        'M' : 'W',
        'N' : 'N',
        'P' : 'Ԁ',
        'R' : 'ᴚ',
        'T' : '⊥',
        'U' : '∩',
        'V' : 'Λ',
        'Y' : '⅄',
        '.' : '\u02D9',
        '[' : ']',
        '(' : ')',
        '{' : '}',
        '?' : '\u00BF',
        '!' : '\u00A1',
        '\'' : ',',
        '<' : '>',
        '_' : '\u203E',
        '\\' : '\\',
        ';' : '\u061B',
        '\u203F' : '\u2040',     //?
        '\u2045' : '\u2046',     //?
        '\u2234' : '\u2235' 
    };

    var result = '';
    for (var i = oriStr.length - 1; i >= 0; --i)
    {
        var tmp = charArray[oriStr.charAt(i)];
        result += (tmp == undefined) ? oriStr.charAt(i) : tmp;
    }
    return result;
}

/**
 * Twist a text/string.
 *
 * @param  {String} oriStr
 * @param  {Bool}   isEven
 * @return {String}
 */
module.exports = {
    twist: function(oriStr, isEven) {
        var retval = '';
        var arrayStr = [];
        for(var i=0; i<oriStr.length; i++) {
            arrayStr[i] = oriStr.substr(i, 1);
            var addStr = arrayStr[i];
            if((i+1)%2 == isEven) {
                addStr = flipIt(arrayStr[i]);
            }
            retval += addStr;
        }
        return retval;
    },

    /**
     * Flip a text/string.
     *
     * @param  {String} oriStr
     * @return {String}
     */
    flip: function(oriStr) {
        return flipIt(oriStr);
    }
};