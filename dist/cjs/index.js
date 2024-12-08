'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('react-dom');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@font-face {\n  font-family: \"icons\"; /* Project id 3868664 */\n  src: url('./iconfont.woff2') format('woff2'),\n       url('./iconfont.woff') format('woff'),\n       url('./iconfont.ttf') format('truetype'),\n       url('./iconfont.svg') format('svg');\n}\n\n.icons {\n  font-family: \"icons\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-EyeClosed:before {\n  content: \"\\e6ac\";\n}\n\n.icon-upload:before {\n  content: \"\\e6a3\";\n}\n\n.icon-user:before {\n  content: \"\\e6a4\";\n}\n\n.icon-users:before {\n  content: \"\\e6a5\";\n}\n\n.icon-volume:before {\n  content: \"\\e6a6\";\n}\n\n.icon-volumehigh:before {\n  content: \"\\e6a7\";\n}\n\n.icon-volumelow:before {\n  content: \"\\e6a8\";\n}\n\n.icon-volumemedium:before {\n  content: \"\\e6a9\";\n}\n\n.icon-warning1:before {\n  content: \"\\e6aa\";\n}\n\n.icon-wheelchair:before {\n  content: \"\\e6ab\";\n}\n\n.icon-alarm:before {\n  content: \"\\e600\";\n}\n\n.icon-apartment:before {\n  content: \"\\e602\";\n}\n\n.icon-arrowdown:before {\n  content: \"\\e603\";\n}\n\n.icon-arrowdowncircle:before {\n  content: \"\\e604\";\n}\n\n.icon-arrowleft:before {\n  content: \"\\e605\";\n}\n\n.icon-arrowleftcircle:before {\n  content: \"\\e606\";\n}\n\n.icon-arrowright:before {\n  content: \"\\e607\";\n}\n\n.icon-arrowrightcircle:before {\n  content: \"\\e608\";\n}\n\n.icon-arrowup:before {\n  content: \"\\e609\";\n}\n\n.icon-arrowupcircle:before {\n  content: \"\\e60a\";\n}\n\n.icon-bicycle:before {\n  content: \"\\e60b\";\n}\n\n.icon-bold:before {\n  content: \"\\e60c\";\n}\n\n.icon-book:before {\n  content: \"\\e60d\";\n}\n\n.icon-bookmark:before {\n  content: \"\\e60e\";\n}\n\n.icon-briefcase:before {\n  content: \"\\e60f\";\n}\n\n.icon-bug:before {\n  content: \"\\e611\";\n}\n\n.icon-bullhorn:before {\n  content: \"\\e612\";\n}\n\n.icon-bus:before {\n  content: \"\\e613\";\n}\n\n.icon-calendarfull:before {\n  content: \"\\e614\";\n}\n\n.icon-camera:before {\n  content: \"\\e615\";\n}\n\n.icon-cloudupload:before {\n  content: \"\\e617\";\n}\n\n.icon-cameravideo:before {\n  content: \"\\e618\";\n}\n\n.icon-car:before {\n  content: \"\\e619\";\n}\n\n.icon-cart:before {\n  content: \"\\e61a\";\n}\n\n.icon-chartbars:before {\n  content: \"\\e61b\";\n}\n\n.icon-chevrondowncircle:before {\n  content: \"\\e61d\";\n}\n\n.icon-chevronleftcircle:before {\n  content: \"\\e61f\";\n}\n\n.icon-chevronrightcircle:before {\n  content: \"\\e621\";\n}\n\n.icon-chevronupcircle:before {\n  content: \"\\e623\";\n}\n\n.icon-circleminus:before {\n  content: \"\\e624\";\n}\n\n.icon-clock:before {\n  content: \"\\e625\";\n}\n\n.icon-cloud:before {\n  content: \"\\e626\";\n}\n\n.icon-cloudcheck:before {\n  content: \"\\e627\";\n}\n\n.icon-clouddownload:before {\n  content: \"\\e628\";\n}\n\n.icon-cloudsync:before {\n  content: \"\\e629\";\n}\n\n.icon-exit:before {\n  content: \"\\e62a\";\n}\n\n.icon-coffeecup:before {\n  content: \"\\e62c\";\n}\n\n.icon-construction:before {\n  content: \"\\e62e\";\n}\n\n.icon-crop:before {\n  content: \"\\e62f\";\n}\n\n.icon-database:before {\n  content: \"\\e632\";\n}\n\n.icon-diamond:before {\n  content: \"\\e633\";\n}\n\n.icon-dice:before {\n  content: \"\\e634\";\n}\n\n.icon-dinner:before {\n  content: \"\\e635\";\n}\n\n.icon-directionltr:before {\n  content: \"\\e636\";\n}\n\n.icon-directionrtl:before {\n  content: \"\\e637\";\n}\n\n.icon-drop:before {\n  content: \"\\e639\";\n}\n\n.icon-earth:before {\n  content: \"\\e63a\";\n}\n\n.icon-enter:before {\n  content: \"\\e63b\";\n}\n\n.icon-enterdown:before {\n  content: \"\\e63c\";\n}\n\n.icon-envelope:before {\n  content: \"\\e63d\";\n}\n\n.icon-indentdecrease:before {\n  content: \"\\e63e\";\n}\n\n.icon-exitup:before {\n  content: \"\\e63f\";\n}\n\n.icon-eye:before {\n  content: \"\\e640\";\n}\n\n.icon-fileadd:before {\n  content: \"\\e641\";\n}\n\n.icon-fileempty:before {\n  content: \"\\e642\";\n}\n\n.icon-filmplay:before {\n  content: \"\\e643\";\n}\n\n.icon-flag:before {\n  content: \"\\e644\";\n}\n\n.icon-framecontract:before {\n  content: \"\\e645\";\n}\n\n.icon-frameexpand:before {\n  content: \"\\e646\";\n}\n\n.icon-funnel:before {\n  content: \"\\e647\";\n}\n\n.icon-gift:before {\n  content: \"\\e648\";\n}\n\n.icon-graduationhat:before {\n  content: \"\\e649\";\n}\n\n.icon-hand:before {\n  content: \"\\e64a\";\n}\n\n.icon-heart:before {\n  content: \"\\e64b\";\n}\n\n.icon-heartpulse:before {\n  content: \"\\e64c\";\n}\n\n.icon-highlight:before {\n  content: \"\\e64d\";\n}\n\n.icon-history:before {\n  content: \"\\e64e\";\n}\n\n.icon-hourglass:before {\n  content: \"\\e650\";\n}\n\n.icon-inbox:before {\n  content: \"\\e651\";\n}\n\n.icon-menu:before {\n  content: \"\\e652\";\n}\n\n.icon-indentincrease:before {\n  content: \"\\e653\";\n}\n\n.icon-italic:before {\n  content: \"\\e654\";\n}\n\n.icon-keyboard:before {\n  content: \"\\e655\";\n}\n\n.icon-laptop:before {\n  content: \"\\e656\";\n}\n\n.icon-laptopphone:before {\n  content: \"\\e657\";\n}\n\n.icon-layers:before {\n  content: \"\\e658\";\n}\n\n.icon-leaf:before {\n  content: \"\\e659\";\n}\n\n.icon-license:before {\n  content: \"\\e65a\";\n}\n\n.icon-lighter:before {\n  content: \"\\e65b\";\n}\n\n.icon-linearicons:before {\n  content: \"\\e65c\";\n}\n\n.icon-linespacing:before {\n  content: \"\\e65d\";\n}\n\n.icon-link:before {\n  content: \"\\e65e\";\n}\n\n.icon-list:before {\n  content: \"\\e65f\";\n}\n\n.icon-location:before {\n  content: \"\\e660\";\n}\n\n.icon-magicwand:before {\n  content: \"\\e662\";\n}\n\n.icon-map:before {\n  content: \"\\e664\";\n}\n\n.icon-mapmarker:before {\n  content: \"\\e665\";\n}\n\n.icon-pointerright:before {\n  content: \"\\e666\";\n}\n\n.icon-menucircle:before {\n  content: \"\\e667\";\n}\n\n.icon-mic:before {\n  content: \"\\e668\";\n}\n\n.icon-moon:before {\n  content: \"\\e669\";\n}\n\n.icon-move:before {\n  content: \"\\e66a\";\n}\n\n.icon-musicnote:before {\n  content: \"\\e66b\";\n}\n\n.icon-mustache:before {\n  content: \"\\e66c\";\n}\n\n.icon-neutral:before {\n  content: \"\\e66d\";\n}\n\n.icon-pagebreak:before {\n  content: \"\\e66e\";\n}\n\n.icon-paperclip:before {\n  content: \"\\e66f\";\n}\n\n.icon-paw:before {\n  content: \"\\e670\";\n}\n\n.icon-pencil:before {\n  content: \"\\e671\";\n}\n\n.icon-phone:before {\n  content: \"\\e672\";\n}\n\n.icon-phonehandset:before {\n  content: \"\\e673\";\n}\n\n.icon-picture:before {\n  content: \"\\e674\";\n}\n\n.icon-piechart:before {\n  content: \"\\e675\";\n}\n\n.icon-pilcrow:before {\n  content: \"\\e676\";\n}\n\n.icon-pointerdown:before {\n  content: \"\\e678\";\n}\n\n.icon-pointerleft:before {\n  content: \"\\e679\";\n}\n\n.icon-starhalf:before {\n  content: \"\\e67a\";\n}\n\n.icon-pointerup:before {\n  content: \"\\e67b\";\n}\n\n.icon-poop:before {\n  content: \"\\e67c\";\n}\n\n.icon-powerswitch:before {\n  content: \"\\e67d\";\n}\n\n.icon-printer:before {\n  content: \"\\e67e\";\n}\n\n.icon-questioncircle:before {\n  content: \"\\e681\";\n}\n\n.icon-redo:before {\n  content: \"\\e682\";\n}\n\n.icon-rocket:before {\n  content: \"\\e683\";\n}\n\n.icon-sad:before {\n  content: \"\\e684\";\n}\n\n.icon-screen:before {\n  content: \"\\e685\";\n}\n\n.icon-select:before {\n  content: \"\\e686\";\n}\n\n.icon-shirt:before {\n  content: \"\\e687\";\n}\n\n.icon-smartphone:before {\n  content: \"\\e688\";\n}\n\n.icon-smile:before {\n  content: \"\\e689\";\n}\n\n.icon-sortalphaasc:before {\n  content: \"\\e68a\";\n}\n\n.icon-sortamountasc:before {\n  content: \"\\e68b\";\n}\n\n.icon-spellcheck:before {\n  content: \"\\e68c\";\n}\n\n.icon-star:before {\n  content: \"\\e68d\";\n}\n\n.icon-starempty:before {\n  content: \"\\e68e\";\n}\n\n.icon-unlink:before {\n  content: \"\\e68f\";\n}\n\n.icon-store:before {\n  content: \"\\e690\";\n}\n\n.icon-strikethrough:before {\n  content: \"\\e691\";\n}\n\n.icon-sun:before {\n  content: \"\\e692\";\n}\n\n.icon-sync:before {\n  content: \"\\e693\";\n}\n\n.icon-tablet:before {\n  content: \"\\e694\";\n}\n\n.icon-tag:before {\n  content: \"\\e695\";\n}\n\n.icon-textaligncenter:before {\n  content: \"\\e697\";\n}\n\n.icon-textalignleft:before {\n  content: \"\\e698\";\n}\n\n.icon-textalignright:before {\n  content: \"\\e699\";\n}\n\n.icon-textformat:before {\n  content: \"\\e69a\";\n}\n\n.icon-textformatremove:before {\n  content: \"\\e69b\";\n}\n\n.icon-textsize:before {\n  content: \"\\e69e\";\n}\n\n.icon-train:before {\n  content: \"\\e6a0\";\n}\n\n.icon-underline:before {\n  content: \"\\e6a1\";\n}\n\n.icon-undo:before {\n  content: \"\\e6a2\";\n}\n\n.icon-danger:before {\n  content: \"\\e8e7\";\n}\n\n.icon-warning:before {\n  content: \"\\e785\";\n}\n\n.icon-success:before {\n  content: \"\\e680\";\n}\n\n.icon-info:before {\n  content: \"\\e601\";\n}\n\n.icon-bubble:before {\n  content: \"\\e616\";\n}\n\n.icon-chevrondown:before {\n  content: \"\\e61c\";\n}\n\n.icon-chevronleft:before {\n  content: \"\\e61e\";\n}\n\n.icon-chevronright:before {\n  content: \"\\e620\";\n}\n\n.icon-chevronup:before {\n  content: \"\\e622\";\n}\n\n.icon-code:before {\n  content: \"\\e62b\";\n}\n\n.icon-cog:before {\n  content: \"\\e62d\";\n}\n\n.icon-cross:before {\n  content: \"\\e630\";\n}\n\n.icon-download:before {\n  content: \"\\e638\";\n}\n\n.icon-home:before {\n  content: \"\\e64f\";\n}\n\n.icon-lock:before {\n  content: \"\\e661\";\n}\n\n.icon-magnifier:before {\n  content: \"\\e663\";\n}\n\n.icon-pluscircle:before {\n  content: \"\\e677\";\n}\n\n.icon-pushpin:before {\n  content: \"\\e67f\";\n}\n\n.icon-textalignjustify:before {\n  content: \"\\e696\";\n}\n\n.icon-thumbsdown:before {\n  content: \"\\e69c\";\n}\n\n.icon-thumbsup:before {\n  content: \"\\e69d\";\n}\n\n.icon-trash:before {\n  content: \"\\e69f\";\n}\n\n";
styleInject(css_248z);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]});

	append(root, root.siblings);
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// tab-size
		case 4789:
			return MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// justify-self
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return MS + replace(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, match(element.props, /grid-\w+-end/) })) {
				return ~indexof(value + (children = children[length].value), 'span', 0) ? value : (MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';')
			}
			return MS + replace(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return match(element.props, /grid-\w+-start/) })) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (MS + a + ':' + b + f) + (c ? (MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if (charat(value, length + 6) === 121)
				return replace(value, ':', ':' + WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return replace(value, ':', ':' + MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return replace(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children);
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(children = element.props, function (value) {
							switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									lift(copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
								// :placeholder
								case '::placeholder':
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
							}

							return ''
						})
			}
}

var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var f="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",m="active",y="data-styled-version",v="6.1.13",g="/*!sc*/\n",S="undefined"!=typeof window&&"HTMLElement"in window,w=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),E=/invalid hook call/i,N=new Set,P=function(t,n){if("production"!==process.env.NODE_ENV){var r=n?' with the id of "'.concat(n,'"'):"",s="The component ".concat(t).concat(r," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];E.test(t)?(a=!1,N.delete(s)):i.apply(void 0,__spreadArray([t],n,!1));},React.useRef(),a&&!N.has(s)&&(console.warn(s),N.add(s));}catch(e){E.test(e.message)&&N.delete(s);}finally{console.error=i;}}},_=Object.freeze([]),C=Object.freeze({});function I(e,t,n){return void 0===n&&(n=C),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),O=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D=/(^-|-$)/g;function R(e){return e.replace(O,"-").replace(D,"")}var T=/(a)(d)/gi,k=52,j=function(e){return String.fromCharCode(e+(e>25?39:97))};function x(e){var t,n="";for(t=Math.abs(e);t>k;t=t/k|0)n=j(t%k)+n;return (j(t%k)+n).replace(T,"$1-$2")}var V,F=5381,M=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},z=function(e){return M(F,e)};function $(e){return x(z(e)>>>0)}function B(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function L(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var G="function"==typeof Symbol&&Symbol.for,Y=G?Symbol.for("react.memo"):60115,q=G?Symbol.for("react.forward_ref"):60112,W={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},H={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},J=((V={})[q]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},V[Y]=U,V);function X(e){return ("type"in(t=e)&&t.type.$$typeof)===Y?U:"$$typeof"in e?J[e.$$typeof]:W;var t;}var Z=Object.defineProperty,K=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ee=Object.getOwnPropertyDescriptor,te=Object.getPrototypeOf,ne=Object.prototype;function re(e,t,n){if("string"!=typeof t){if(ne){var r=te(t);r&&r!==ne&&re(e,r,n);}var o=K(t);Q&&(o=o.concat(Q(t)));for(var s=X(e),i=X(t),a=0;a<o.length;++a){var c=o[a];if(!(c in H||n&&n[c]||i&&c in i||s&&c in s)){var l=ee(t,c);try{Z(e,c,l);}catch(e){}}}}return e}function oe(e){return "function"==typeof e}function se(e){return "object"==typeof e&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ae(e,t){if(0===e.length)return "";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ce(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function le(e,t,n){if(void 0===n&&(n=!1),!n&&!ce(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=le(e[r],t[r]);else if(ce(t))for(var r in t)e[r]=le(e[r],t[r]);return e}function ue(e,t){Object.defineProperty(e,"toString",{value:t});}var pe="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function de(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,s=e.length;o<s;o+=1)r.push(e[o]);return r.forEach(function(e){n=n.replace(/%[a-z]/,e);}),n}function he(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return "production"===process.env.NODE_ENV?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):"")):new Error(de.apply(void 0,__spreadArray([pe[t]],n,!1)).trim())}var fe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw he(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(g);return t},e}(),me=1<<30,ye=new Map,ve=new Map,ge=1,Se=function(e){if(ye.has(e))return ye.get(e);for(;ve.has(ge);)ge++;var t=ge++;if("production"!==process.env.NODE_ENV&&((0|t)<0||t>me))throw he(16,"".concat(t));return ye.set(e,t),ve.set(t,e),t},we=function(e,t){ge=t+1,ye.set(e,t),ve.set(t,e);},be="style[".concat(f,"][").concat(y,'="').concat(v,'"]'),Ee=new RegExp("^".concat(f,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ne=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},Pe=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(g),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim();if(a){var c=a.match(Ee);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(we(u,l),Ne(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0;}else o.push(a);}}},_e=function(e){for(var t=document.querySelectorAll(be),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(f)!==m&&(Pe(e,o),o.parentNode&&o.parentNode.removeChild(o));}};function Ce(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ie=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(f,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(f,m),r.setAttribute(y,v);var i=Ce();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},Ae=function(){function e(e){this.element=Ie(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw he(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Oe=function(){function e(e){this.element=Ie(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),De=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Re=S,Te={isServer:!S,useCSSOMInjection:!w},ke=function(){function e(e,n,r){void 0===e&&(e=C),void 0===n&&(n={});var o=this;this.options=__assign(__assign({},Te),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&S&&Re&&(Re=!1,_e(this)),ue(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ve.get(e)}(n);if(void 0===o)return "continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||!s.size||0===i.length)return "continue";var a="".concat(f,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(g);},s=0;s<n;s++)o(s);return r}(o)});}return e.registerId=function(e){return Se(e)},e.prototype.rehydrate=function(){!this.server&&S&&_e(this);},e.prototype.reconstructWithOptions=function(n,r){return void 0===r&&(r=!0),new e(__assign(__assign({},this.options),n),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new De(n):t?new Ae(n):new Oe(n)}(this.options),new fe(e)));var e;},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Se(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Se(e),n);},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},e.prototype.clearRules=function(e){this.getTag().clearGroup(Se(e)),this.clearNames(e);},e.prototype.clearTag=function(){this.tag=void 0;},e}(),je=/&/g,xe=/^\s*\/\/.*$/gm;function Ve(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ve(e.children,t)),e})}function Fe(e){var t,n,r,o=C,s=o.options,i=void 0===s?C:s,a=o.plugins,c=void 0===a?_:a,l=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(je,n).replace(r,l));}),i.prefix&&u.push(prefixer),u.push(stringify);var p=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(xe,""),l=compile(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(l=Ve(l,i.namespace));var p=[];return serialize(l,middleware(u.concat(rulesheet(function(e){return p.push(e)})))),p};return p.hash=c.length?c.reduce(function(e,t){return t.name||he(15),M(e,t.name)},F).toString():"",p}var Me=new ke,ze=Fe(),$e=React.createContext({shouldForwardProp:void 0,styleSheet:Me,stylis:ze});$e.Consumer;React.createContext(void 0);function Ge(){return React.useContext($e)}var qe=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ze);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ue(this,function(){throw he(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=ze),this.name+e.hash},e}(),We=function(e){return e>="A"&&e<="Z"};function He(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;We(r)?t+="-"+r.toLowerCase():t+=r;}return t.startsWith("ms-")?"-"+t:t}var Ue=function(e){return null==e||!1===e||""===e},Je=function(t){var n,r,o=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ue(i)&&(Array.isArray(i)&&i.isCss||oe(i)?o.push("".concat(He(s),":"),i,";"):ce(i)?o.push.apply(o,__spreadArray(__spreadArray(["".concat(s," {")],Je(i),!1),["}"],!1)):o.push("".concat(He(s),": ").concat((n=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in unitlessKeys||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")));}return o};function Xe(e,t,n,r){if(Ue(e))return [];if(se(e))return [".".concat(e.styledComponentId)];if(oe(e)){if(!oe(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var o=e(t);return "production"===process.env.NODE_ENV||"object"!=typeof o||Array.isArray(o)||o instanceof qe||ce(o)||null===o||console.error("".concat(B(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),Xe(o,t,n,r)}var s;return e instanceof qe?n?(e.inject(n,r),[e.getName(r)]):[e]:ce(e)?Je(e):Array.isArray(e)?Array.prototype.concat.apply(_,e.map(function(e){return Xe(e,t,n,r)})):[e.toString()]}function Ze(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(oe(n)&&!se(n))return !1}return !0}var Ke=z(v),Qe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&Ze(e),this.componentId=t,this.baseHash=M(Ke,t),this.baseStyle=n,ke.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ie(r,this.staticRulesId);else {var o=ae(Xe(this.rules,e,t,n)),s=x(M(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}r=ie(r,s),this.staticRulesId=s;}else {for(var a=M(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,"production"!==process.env.NODE_ENV&&(a=M(a,u));else if(u){var p=ae(Xe(u,e,t,n));a=M(a,p+l),c+=p;}}if(c){var d=x(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=ie(r,d);}}return r},e}(),et=React.createContext(void 0);et.Consumer;var ot={},st=new Set;function it(e,o,s){var i=se(e),a=e,c=!L(e),p=o.attrs,d=void 0===p?_:p,h=o.componentId,f=void 0===h?function(e,t){var n="string"!=typeof e?"sc":R(e);ot[n]=(ot[n]||0)+1;var r="".concat(n,"-").concat($(v+n+ot[n]));return t?"".concat(t,"-").concat(r):r}(o.displayName,o.parentComponentId):h,m=o.displayName,y=void 0===m?function(e){return L(e)?"styled.".concat(e):"Styled(".concat(B(e),")")}(e):m,g=o.displayName&&o.componentId?"".concat(R(o.displayName),"-").concat(o.componentId):o.componentId||f,S=i&&a.attrs?a.attrs.concat(d).filter(Boolean):d,w=o.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(o.shouldForwardProp){var E=o.shouldForwardProp;w=function(e,t){return b(e,t)&&E(e,t)};}else w=b;}var N=new Qe(s,g,i?a.componentStyle:void 0);function O(e,o){return function(e,o,s){var i=e.attrs,a=e.componentStyle,c=e.defaultProps,p=e.foldedComponentIds,d=e.styledComponentId,h=e.target,f=React.useContext(et),m=Ge(),y=e.shouldForwardProp||m.shouldForwardProp;"production"!==process.env.NODE_ENV&&React.useDebugValue(d);var v=I(o,f,c)||C,g=function(e,n,r){for(var o,s=__assign(__assign({},n),{className:void 0,theme:r}),i=0;i<e.length;i+=1){var a=oe(o=e[i])?o(s):o;for(var c in a)s[c]="className"===c?ie(s[c],a[c]):"style"===c?__assign(__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=ie(s.className,n.className)),s}(i,o,v),S=g.as||h,w={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?w.as=g.forwardedAs:y&&!y(b,S)||(w[b]=g[b],y||"development"!==process.env.NODE_ENV||isPropValid(b)||st.has(b)||!A.has(S)||(st.add(b),console.warn('styled-components: it looks like an unknown prop "'.concat(b,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var E=function(e,t){var n=Ge(),r=e.generateAndInjectStyles(t,n.styleSheet,n.stylis);return "production"!==process.env.NODE_ENV&&React.useDebugValue(r),r}(a,g);"production"!==process.env.NODE_ENV&&e.warnTooManyClasses&&e.warnTooManyClasses(E);var N=ie(p,d);return E&&(N+=" "+E),g.className&&(N+=" "+g.className),w[L(S)&&!A.has(S)?"class":"className"]=N,w.ref=s,React.createElement(S,w)}(D,e,o)}O.displayName=y;var D=React.forwardRef(O);return D.attrs=S,D.componentStyle=N,D.displayName=y,D.shouldForwardProp=w,D.foldedComponentIds=i?ie(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=g,D.target=i?a.target:e,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)le(e,o[r],!0);return e}({},a.defaultProps,e):e;}}),"production"!==process.env.NODE_ENV&&(P(y,g),D.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(y,g)),ue(D,function(){return ".".concat(D.styledComponentId)}),c&&re(D,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function at(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ct=function(e){return Object.assign(e,{isCss:!0})};function lt(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(oe(t)||ce(t))return ct(Xe(at(_,__spreadArray([t],n,!0))));var o=t;return 0===n.length&&1===o.length&&"string"==typeof o[0]?Xe(o):ct(Xe(at(o,n)))}function ut(n,r,o){if(void 0===o&&(o=C),!r)throw he(1,r);var s=function(t){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return n(r,o,lt.apply(void 0,__spreadArray([t],s,!1)))};return s.attrs=function(e){return ut(n,r,__assign(__assign({},o),{attrs:Array.prototype.concat(o.attrs,e).filter(Boolean)}))},s.withConfig=function(e){return ut(n,r,__assign(__assign({},o),e))},s}var pt=function(e){return ut(it,e)},dt=pt;A.forEach(function(e){dt[e]=pt(e);});"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var wt="__sc-".concat(f,"__");"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window[wt]||(window[wt]=0),1===window[wt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[wt]+=1);

const typeStyles = {
    default: lt `
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #d9d9d9;

    &:not(:disabled) {
      &:hover {
        background-color: #f9f9f9;
      }

      &:active {
        background-color: #f0f0f0;
      }
    }
  `,
    primary: lt `
    background-color: #9090c0;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #8080b0;
      }

      &:active {
        background-color: #7070a0;
      }
    }
  `,
    danger: lt `
    background-color: #ff4d4f;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ff7875;
      }

      &:active {
        background-color: #d9363e;
      }
    }
  `,
    success: lt `
    background-color: #52c41a;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #73d13d;
      }

      &:active {
        background-color: #389e0d;
      }
    }
  `,
    warning: lt `
    background-color: #faad14;
    color: #ffffff;

    &:not(:disabled) {
      &:hover {
        background-color: #ffc53d;
      }

      &:active {
        background-color: #d48806;
      }
    }
  `
};
const sizeStyles = {
    small: lt `
    padding: 6px 12px;
    font-size: 14px;
  `,
    medium: lt `
    padding: 10px 20px;
    font-size: 16px;
  `,
    large: lt `
    padding: 14px 28px;
    font-size: 18px;
  `
};
const shapeStyles = {
    square: lt `
    border-radius: 4px;
  `,
    round: lt `
    border-radius: 20px;
  `,
    circle: lt `
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    font-size: 10px;
    align-items: center;
    justify-content: center;
  `
};
const StyledButton = dt.button `
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ type }) => typeStyles[type]}

  ${({ color }) => lt `
        background-color: ${color};

        &:not(:disabled) {
          &:hover {
            background-color: ${color};
            opacity: 0.9;
          }
          &:active {
            background-color: ${color};
            opacity: 0.8;
          }
        }
      `}
  
  ${({ size }) => sizeStyles[size]}

  ${({ shape }) => shapeStyles[shape]}

  .button-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
  }
`;

const Button = ({ title = "Button", type = "default", size = "medium", shape = "square", disabled = false, icon, ...rest }) => {
    return (jsxRuntime.jsxs(StyledButton, { type: type, size: size, shape: shape, disabled: disabled, ...rest, children: [icon && jsxRuntime.jsx("span", { className: "button-icon", children: icon }), title] }));
};

const getEllipsisStyle = (ellipsis, width = "100%") => ({
    textOverflow: ellipsis === true ? "ellipsis" : undefined,
    whiteSpace: ellipsis === true ? "nowrap" : undefined,
    overflow: ellipsis === true ? "hidden" : undefined,
    width: ellipsis === true ? width : undefined
});
const Title = ({ level = 1, children, className, style, ellipsis, width }) => {
    const Tag = `h${level}`;
    return jsxRuntime.jsx(Tag, { className: className, style: { ...style, ...getEllipsisStyle(ellipsis, width) }, children: children });
};
const Text = ({ children, className, style, strong, italic, underline, delete: del, code, mark, keyboard, ellipsis, width }) => {
    let textElement = jsxRuntime.jsx(jsxRuntime.Fragment, { children: children });
    if (strong === true) {
        textElement = jsxRuntime.jsx("strong", { children: textElement });
    }
    if (italic === true) {
        textElement = jsxRuntime.jsx("em", { children: textElement });
    }
    if (underline === true) {
        textElement = jsxRuntime.jsx("u", { children: textElement });
    }
    if (del === true) {
        textElement = jsxRuntime.jsx("del", { children: textElement });
    }
    if (code === true) {
        textElement = jsxRuntime.jsx("code", { children: textElement });
    }
    if (mark === true) {
        textElement = jsxRuntime.jsx("mark", { children: textElement });
    }
    if (keyboard === true) {
        textElement = jsxRuntime.jsx("kbd", { children: textElement });
    }
    return jsxRuntime.jsx("div", { className: className, style: { ...style, ...getEllipsisStyle(ellipsis, width) }, children: textElement });
};
const Paragraph = ({ children, className, style, blockquote, ellipsis, width }) => {
    const paragraphElement = jsxRuntime.jsx("p", { className: className, style: { ...style, ...getEllipsisStyle(ellipsis, width) }, children: children });
    return (blockquote === true) ? jsxRuntime.jsx("blockquote", { "data-testid": "blockquote", children: paragraphElement }) : paragraphElement;
};
const Typography = ({ children, className, style, onClick }) => {
    return (jsxRuntime.jsx("div", { className: className, style: style, onClick: onClick, children: children }));
};
Typography.Title = Title;
Typography.Text = Text;
Typography.Paragraph = Paragraph;

const Icon = ({ name, size = 16, color = "currentColor", className = "", style = {}, onClick }) => {
    return (jsxRuntime.jsx("span", { className: `icons icon-${name} ${className}`, style: {
            fontSize: size,
            color,
            ...style
        }, onClick: onClick }));
};

const StyledDivider = dt.div `
  display: flex;
  align-items: center;
  justify-content: ${({ position }) => position === "left"
    ? "flex-start"
    : position === "right"
        ? "flex-end"
        : "center"};
  color: ${({ color }) => color ?? "rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  .line {
    flex: 1;
    border-top: ${({ orientation, variant, color }) => orientation === "horizontal" ? `1px ${variant} ${color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
    border-left: ${({ orientation, variant, color }) => orientation === "vertical" ? `1px ${variant} ${color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
    margin: ${({ orientation }) => orientation === "horizontal" ? "0 8px" : "8px 0"};
  }

  .text {
    padding: 0 8px;
    white-space: nowrap;
  }

  ${({ orientation }) => orientation === "vertical" &&
    lt `
      flex-direction: column;
      align-items: center;
      height: 100%;

      .line {
        width: 1px;
        height: 100%;
        margin: 4px 0;
      }
    `}
`;

const Divider = ({ className = "", orientation = "horizontal", color, text, position = "center", style = {}, variant = "solid" }) => {
    return (jsxRuntime.jsx(StyledDivider, { role: "separator", className: className, orientation: orientation, color: color, position: position, style: style, variant: variant, children: (text != null)
            ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [position !== "right" && jsxRuntime.jsx("span", { className: "line" }), jsxRuntime.jsx("span", { className: "text", children: text }), position !== "left" && jsxRuntime.jsx("span", { className: "line" })] }))
            : (jsxRuntime.jsx("span", { className: "line", style: { margin: 0 } })) }));
};

const StyledRow = dt.div `
  display: flex;
  flex-wrap: no-wrap;
  margin-left: -${(props) => props.gutter / 2}px;
  margin-right: -${(props) => props.gutter / 2}px;
  width: calc(100% + ${(props) => props.gutter}px);
`;

const Row = ({ children, gutter = 0, ...rest }) => {
    return (jsxRuntime.jsx(StyledRow, { gutter: gutter, ...rest, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { gutter });
            }
            return child;
        }) }));
};

const StyledCol = dt.div `
  flex: 0 0 ${(props) => ((props.span != null) ? (props.span / 24) * 100 : 100)}%;
  max-width: ${(props) => ((props.span != null) ? (props.span / 24) * 100 : 100)}%;
  margin-left: ${(props) => props.offset != null ? ((props.offset / 24) * 100) + "%" : props.gutter / 2 + "px"};
  margin-right: ${(props) => props.gutter / 2}px;
  box-sizing: border-box;
  text-align: center;
`;

const Col = ({ children, span, gutter = 0, offset = 0, ...rest }) => {
    return (jsxRuntime.jsx(StyledCol, { span: span, gutter: gutter, offset: offset, ...rest, children: children }));
};

const SpaceContainer = dt.div `
  display: flex;
  flex-direction: ${({ direction }) => direction === "horizontal" ? "row" : "column"};
  gap: ${({ size }) => `${size}px`};
`;

const Space = ({ children, size = 8, direction = "horizontal" }) => {
    return jsxRuntime.jsx(SpaceContainer, { size: size, direction: direction, children: children });
};

/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
  // match so we include splat values for "." links.  See:
  // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map(match => match.pathnameBase);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    // With relative="route" (the default), each leading .. segment means
    // "go up one route" instead of "go up one URL segment".  This is a key
    // difference from how <a href> works and a major reason we call this a
    // "to" value instead of a "href".
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);

/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/React__namespace.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let {
    basename,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */
function useInRouterContext() {
  return React__namespace.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  return React__namespace.useContext(LocationContext).location;
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = React__namespace.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = React__namespace.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? invariant(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : invariant(false) : void 0;
  let dataRouterContext = React__namespace.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = React__namespace.useContext(NavigationContext);
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = React__namespace.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React__namespace.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = React__namespace.useContext(NavigationContext);
  let {
    matches
  } = React__namespace.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return React__namespace.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
var DataRouterHook$1 = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook$1 || {});
function getDataRouterConsoleError$1(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext$1(hookName) {
  let ctx = React__namespace.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError$1(hookName)) : invariant(false) : void 0;
  return ctx;
}
function useRouteContext(hookName) {
  let route = React__namespace.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError$1(hookName)) : invariant(false) : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? invariant(false, hookName + " can only be used on routes that contain a unique \"id\"") : invariant(false) : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook$1.UseRouteId);
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext$1(DataRouterHook$1.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = React__namespace.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = React__namespace.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    process.env.NODE_ENV !== "production" ? warning(activeRef.current, navigateEffectWarning) : void 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$1({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
new Promise(() => {});

/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    process.env.NODE_ENV !== "production" ? warning(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : void 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
  _excluded3 = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
  // no-op
}
const ViewTransitionContext = /*#__PURE__*/React__namespace.createContext({
  isTransitioning: false
});
if (process.env.NODE_ENV !== "production") {
  ViewTransitionContext.displayName = "ViewTransition";
}
const FetchersContext = /*#__PURE__*/React__namespace.createContext(new Map());
if (process.env.NODE_ENV !== "production") {
  FetchersContext.displayName = "Fetchers";
}
if (process.env.NODE_ENV !== "production") ;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/React__namespace.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = React__namespace.useContext(NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
        process.env.NODE_ENV !== "production" ? warning(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : void 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    React__namespace.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/React__namespace.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React__namespace.useContext(DataRouterStateContext);
  let {
    navigator,
    basename
  } = React__namespace.useContext(NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
  // we're looking for a slash _after_ what's in `to`.  For example:
  //
  // <NavLink to="/users"> and <NavLink to="/users/">
  // both want to look for a / at index 6 to match URL `/users/matt`
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/React__namespace.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    viewTransition: viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/React__namespace.forwardRef((_ref9, forwardedRef) => {
  let {
      fetcherKey,
      navigate,
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      relative,
      preventScrollReset,
      viewTransition
    } = _ref9,
    props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
  let submit = useSubmit();
  let formAction = useFormAction(action, {
    relative
  });
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      fetcherKey,
      method: submitMethod,
      navigate,
      replace,
      state,
      relative,
      preventScrollReset,
      viewTransition
    });
  };
  return /*#__PURE__*/React__namespace.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}
if (process.env.NODE_ENV !== "production") ;
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = React__namespace.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? invariant(false, getDataRouterConsoleError(hookName)) : invariant(false) : void 0;
  return ctx;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return React__namespace.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
let fetcherId = 0;
let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = React__namespace.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return React__namespace.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    if (options.navigate === false) {
      let key = options.fetcherKey || getUniqueFetcherId();
      router.fetch(key, currentRouteId, options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        flushSync: options.flushSync
      });
    } else {
      router.navigate(options.action || action, {
        preventScrollReset: options.preventScrollReset,
        formData,
        body,
        formMethod: options.method || method,
        formEncType: options.encType || encType,
        replace: options.replace,
        state: options.state,
        fromRouteId: currentRouteId,
        flushSync: options.flushSync,
        viewTransition: options.viewTransition
      });
    }
  }, [router, basename, currentRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React__namespace.useContext(NavigationContext);
  let routeContext = React__namespace.useContext(RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? invariant(false, "useFormAction must be used inside a RouteContext") : invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  }));
  // If no action was specified, browsers will persist current search params
  // when determining the path, so match that behavior
  // https://github.com/remix-run/remix/issues/927
  let location = useLocation();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove any included ?index param
    // since it might not apply to our contextual route.  We add it back based
    // on match.route.index below
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some(v => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter(v => v).forEach(v => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? "?" + qs : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = React__namespace.useContext(ViewTransitionContext);
  !(vtContext != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : invariant(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = useResolvedPath(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

const BreadcrumbContainer = dt.nav `
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const BreadcrumbItem = dt.span `
  color: rgba(0, 0, 0, 0.45);
  
  &:last-child {
    color: rgba(0, 0, 0, 0.85);
  }
  
  a {
    color: rgba(0, 0, 0, 0.45);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #1890ff;
    }
  }
`;
const Separator = dt.span `
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
`;

const Breadcrumb = ({ items = [], separator = "/" }) => {
    return (jsxRuntime.jsx(BreadcrumbContainer, { children: items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsx(BreadcrumbItem, { children: (item.path != null) && !isLast
                            ? (jsxRuntime.jsx(Link, { to: item.path, children: item.title }))
                            : (item.title) }), !isLast && jsxRuntime.jsx(Separator, { children: separator })] }, index));
        }) }));
};

const DropdownContainer$1 = dt.div `
  position: relative;
  display: inline-block;
`;
const MenuContainer$1 = dt.div `
  position: absolute;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
  z-index: 1050;

  ${({ placement }) => {
    switch (placement) {
        case "top":
            return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4px;
        `;
        case "bottom":
            return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 4px;
        `;
        case "left":
            return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 4px;
        `;
        case "right":
            return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 4px;
        `;
        default:
            return "";
    }
}}
`;
const MenuItem$1 = dt.div `
  padding: 8px 12px;
  cursor: ${({ disabled }) => ((disabled ?? false) ? "not-allowed" : "pointer")};
  color: ${({ disabled, $isDanger }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : ($isDanger ?? false) ? "#ff4d4f" : "rgba(0, 0, 0, 0.85)"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ disabled, $isDanger }) => {
    if (disabled ?? false)
        return "transparent";
    return ($isDanger ?? false) ? "#fff1f0" : "#f5f5f5";
}};
    color: ${({ disabled, $isDanger }) => {
    if (disabled ?? false)
        return "rgba(0, 0, 0, 0.25)";
    return ($isDanger ?? false) ? "#ff7875" : "rgba(0, 0, 0, 0.85)";
}};
  }
`;
const SubMenu = dt.div `
  position: relative;

  &:hover > .submenu-content {
    display: block;
  }
`;
const SubMenuContent$1 = dt.div `
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
`;

const renderMenuItem = (item) => {
    if ((item.children?.length) != null) {
        return (jsxRuntime.jsxs(SubMenu, { children: [jsxRuntime.jsxs(MenuItem$1, { children: [(item.icon != null) && jsxRuntime.jsx("span", { className: "menu-item-icon", children: item.icon }), item.label, jsxRuntime.jsx(Icon, { name: "chevronright", size: 12, style: { marginLeft: "auto" } })] }), jsxRuntime.jsx(SubMenuContent$1, { className: "submenu-content", children: item.children.map(child => renderMenuItem(child)) })] }, item.key));
    }
    return (jsxRuntime.jsxs(MenuItem$1, { disabled: item.disabled, "$isDanger": item.$isDanger, onClick: item.onClick, children: [(item.icon != null) && jsxRuntime.jsx("span", { className: "menu-item-icon", children: item.icon }), item.label] }, item.key));
};
const Dropdown = ({ items, trigger = "hover", placement = "bottom", children, className, style }) => {
    const [visible, setVisible] = React.useState(false);
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if ((containerRef.current != null) &&
                !containerRef.current.contains(event.target)) {
                setVisible(false);
            }
        };
        if (trigger === "click") {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            if (trigger === "click") {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        };
    }, [trigger]);
    const handleTrigger = () => {
        if (trigger === "click") {
            setVisible(!visible);
        }
    };
    const handleMouseEnter = () => {
        if (trigger === "hover") {
            setVisible(true);
        }
    };
    const handleMouseLeave = () => {
        if (trigger === "hover") {
            setVisible(false);
        }
    };
    return (jsxRuntime.jsxs(DropdownContainer$1, { ref: containerRef, className: className, style: style, onClick: handleTrigger, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [children, visible && (jsxRuntime.jsx(MenuContainer$1, { placement: placement, children: items.map(item => renderMenuItem(item)) }))] }));
};

const darkTheme = {
    background: "#000c17",
    textColor: "rgba(255, 255, 255, 0.85)",
    textColorSelected: "#1677FF",
    textColorHover: "#1677FF",
    textColorDisabled: "rgba(255, 255, 255, 0.25)",
    itemSelectedBg: "rgba(22, 119, 255, 0.1)",
    itemHoverBg: "rgba(255, 255, 255, 0.04)",
    subMenuBg: "#000c17",
    borderColor: "#16253a"
};
const MenuContainer = dt.ul `
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${({ menuTheme }) => menuTheme === "dark" ? darkTheme.background : "#fff"};
  
  ${({ mode, menuTheme }) => mode === "horizontal"
    ? lt `
          display: flex;
          border-bottom: 1px solid ${menuTheme === "dark" ? darkTheme.borderColor : "#f0f0f0"};
          width: 100%;
          
          > li, > div > li {
            padding: 0 20px;
            height: 46px;
            line-height: 46px;
            background: transparent !important;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
              height: 2px;
              background: transparent;
              transition: all 0.3s;
            }
          }
          
          ${SubMenuContent} {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 160px;
            background: ${menuTheme === "dark" ? darkTheme.background : "#fff"};
            box-shadow: ${menuTheme === "dark"
        ? "0 2px 8px rgba(0, 0, 0, 0.45)"
        : "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08)"};
          }
        `
    : lt `
          width: 200px;
          border-right: 1px solid ${menuTheme === "dark" ? darkTheme.borderColor : "#f0f0f0"};
        `}
`;
const MenuItem = dt.li `
  position: relative;
  padding: 12px 20px;
  cursor: ${({ disabled }) => (disabled === true ? "not-allowed" : "pointer")};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  ${({ menuTheme, disabled, selected, isSubmenu }) => menuTheme === "dark"
    ? lt `
          color: ${(disabled ?? false)
        ? darkTheme.textColorDisabled
        : (selected ?? false)
            ? darkTheme.textColorSelected
            : darkTheme.textColor};
          
          &:hover {
            ${!(disabled ?? false) && lt `
              color: ${darkTheme.textColorHover};
              background: ${darkTheme.itemHoverBg};
            `}
          }
          
          ${(selected ?? false) && !(isSubmenu ?? false) && lt `
            background: ${darkTheme.itemSelectedBg};
            font-weight: 500;
          `}

          .menu-item-icon {
            color: inherit;
          }
        `
    : lt `
          color: ${(disabled ?? false)
        ? "rgba(0, 0, 0, 0.25)"
        : (selected ?? false)
            ? "#1890ff"
            : "rgba(0, 0, 0, 0.85)"};
              
          &:hover {
            ${!(disabled ?? false) && lt `
              color: #1890ff;
              background: ${(menuTheme ?? "horizontal") === "horizontal" ? "transparent" : "#f5f5f5"};
            `}
          }
          
          ${(selected ?? false) && !(isSubmenu ?? false) && lt `
            background: #e6f7ff;
          `}
        `}

  .submenu-arrow {
    margin-left: auto;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${({ isOpen }) => (isOpen ?? false) && "transform: rotate(180deg);"}
    color: inherit;
  }
`;
const SubMenuContent = dt.div `
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: top;
  transform: ${({ isOpen }) => ((isOpen ?? false) ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${({ isOpen }) => ((isOpen ?? false) ? 1 : 0)};
`;
const SubMenuContainer = dt.div `
  position: relative;
`;

const Menu = ({ items, mode = "vertical", menuTheme = "light", defaultSelectedKey, defaultOpenKeys = [], className, style }) => {
    const [selectedKey, setSelectedKey] = React.useState(defaultSelectedKey ?? "");
    const [openKeys, setOpenKeys] = React.useState(defaultOpenKeys);
    const toggleSubMenu = (key, e) => {
        e.stopPropagation();
        if (openKeys.includes(key)) {
            setOpenKeys(prev => prev.filter(k => k !== key));
        }
        else {
            setOpenKeys([key]);
        }
    };
    const handleSelect = (key, onClick, isSubMenuItem) => {
        setSelectedKey(key);
        if (!(isSubMenuItem ?? false)) {
            setOpenKeys([]);
        }
        onClick?.();
    };
    const renderMenuItem = (item) => {
        if ((item.children?.length) != null) {
            const isOpen = openKeys.includes(item.key);
            const hasSelectedChild = item.children.some(child => child.key === selectedKey);
            return (jsxRuntime.jsxs(SubMenuContainer, { children: [jsxRuntime.jsxs(MenuItem, { menuTheme: menuTheme, isSubmenu: true, isOpen: isOpen, selected: hasSelectedChild, onClick: (e) => { toggleSubMenu(item.key, e); }, children: [(item.icon !== null) && jsxRuntime.jsx("span", { className: "menu-item-icon", children: item.icon }), item.label, jsxRuntime.jsx(Icon, { name: "chevrondown", size: 12, className: "submenu-arrow", style: { marginLeft: "auto" } })] }), jsxRuntime.jsx(SubMenuContent, { isOpen: isOpen, children: item.children.map((child) => (jsxRuntime.jsxs(MenuItem, { menuTheme: menuTheme, disabled: child.disabled, selected: selectedKey === child.key, onClick: () => {
                                if (!(child.disabled ?? false)) {
                                    handleSelect(child.key, child.onClick, true);
                                }
                            }, children: [(child.icon !== null) && jsxRuntime.jsx("span", { className: "menu-item-icon", children: child.icon }), child.label] }, child.key))) })] }, item.key));
        }
        return (jsxRuntime.jsxs(MenuItem, { menuTheme: menuTheme, disabled: item.disabled, selected: selectedKey === item.key, onClick: () => {
                if (!(item.disabled ?? false)) {
                    handleSelect(item.key, item.onClick);
                }
            }, children: [(item.icon !== null) && jsxRuntime.jsx("span", { className: "menu-item-icon", children: item.icon }), item.label] }, item.key));
    };
    return (jsxRuntime.jsx(MenuContainer, { mode: mode, menuTheme: menuTheme, className: className, style: style, children: items.map(renderMenuItem) }));
};

const PaginationContainer = dt.div `
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $position }) => {
    switch ($position) {
        case "left": return "flex-start";
        case "right": return "flex-end";
        default: return "center";
    }
}};
`;
const PageButton = dt.button `
  min-width: 32px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ active }) => ((active === true) ? "#1890ff" : "#d9d9d9")};
  background-color: ${({ active }) => ((active === true) ? "#1890ff" : "#ffffff")};
  color: ${({ active }) => ((active === true) ? "#ffffff" : "rgba(0, 0, 0, 0.85)")};
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 2px;
  outline: none;
  user-select: none;

  &:hover:not(:disabled) {
    color: #1890ff;
    border-color: #1890ff;
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    background-color: #f5f5f5;
  }

  &:active:not(:disabled) {
    color: #096dd9;
    border-color: #096dd9;
  }
`;
const Ellipsis = dt.span `
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.45);
`;

const Pagination = ({ current, total, pageSize, onChange, position = "center" }) => {
    const totalPages = Math.ceil(total / pageSize);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            onChange(page);
        }
    };
    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= current - 2 && i <= current + 2)) {
                pages.push(jsxRuntime.jsx(PageButton, { active: current === i, onClick: () => { handlePageChange(i); }, children: i }, i));
            }
            else if (i === current - 3 || i === current + 3) {
                pages.push(jsxRuntime.jsx(Ellipsis, { children: "..." }, `ellipsis-${i}`));
            }
        }
        return pages;
    };
    return (jsxRuntime.jsxs(PaginationContainer, { "$position": position, children: [jsxRuntime.jsx(PageButton, { onClick: () => { handlePageChange(current - 1); }, disabled: current <= 1, children: jsxRuntime.jsx(Icon, { name: "chevronleft", size: 12 }) }), renderPageNumbers(), jsxRuntime.jsx(PageButton, { onClick: () => { handlePageChange(current + 1); }, disabled: current >= totalPages, children: jsxRuntime.jsx(Icon, { name: "chevronright", size: 12 }) })] }));
};

const CascaderContainer = dt.div `
  position: relative;
  display: inline-block;
`;
const CascaderInput = dt.div `
  min-width: 200px;
  height: 32px;
  padding: 4px 30px 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  background: ${({ disabled }) => (disabled ?? false) ? "#f5f5f5" : "#fff"};
  opacity: ${({ disabled }) => (disabled ?? false) ? 0.6 : 1};

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ disabled }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"};
  }

  &:hover {
    border-color: ${({ disabled }) => (disabled ?? false) ? "#d9d9d9" : "#40a9ff"};
  }
`;
const DropdownContainer = dt.div `
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  display: flex;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
`;
const OptionList = dt.ul `
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 120px;
  border-right: 1px solid #f0f0f0;

  &:last-child {
    border-right: none;
  }
`;
const OptionItem = dt.li `
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  color: ${({ disabled }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"};
  background: ${({ selected }) => (selected ?? false) ? "#e6f7ff" : "transparent"};
  opacity: ${({ disabled }) => (disabled ?? false) ? 0.6 : 1};

  &:hover {
    background: ${({ disabled }) => (disabled ?? false) ? "transparent" : "#f5f5f5"};
  }
`;
const ArrowIcon = dt.span `
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({ $visible }) => $visible ? "rotate(180deg)" : "rotate(0)"};
`;
const ClearIcon = dt.span `
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

const Cascader = ({ options = [], defaultValue, value: propValue, onChange, placeholder = "Please select", disabled = false, allowClear = true, expandTrigger = "click", displayRender = labels => labels.join(" / "), className, style }) => {
    const [visible, setVisible] = React.useState(false);
    const [value, setValue] = React.useState(propValue ?? defaultValue ?? []);
    const [activeOptions, setActiveOptions] = React.useState([options]);
    const containerRef = React.useRef(null);
    // Handle outside clicks
    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if ((containerRef.current != null) && !containerRef.current.contains(e.target)) {
                setVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    // Update value when prop changes
    React.useEffect(() => {
        if (propValue !== undefined) {
            setValue(propValue);
        }
    }, [propValue]);
    const getSelectedOptions = (val) => {
        const result = [];
        let currentOptions = options;
        val.forEach(v => {
            const option = currentOptions.find(o => o.value === v);
            if (option != null) {
                result.push(option);
                currentOptions = option.children ?? [];
            }
        });
        return result;
    };
    const handleOptionClick = (option, level) => {
        if (option.disabled ?? false)
            return;
        const newValue = [...value.slice(0, level), option.value];
        const newActiveOptions = [...activeOptions.slice(0, level + 1)];
        if ((option.children?.length) != null) {
            newActiveOptions.push(option.children);
        }
        setValue(newValue);
        setActiveOptions(newActiveOptions);
        if (((option.children?.length) == null) || (option.isLeaf ?? false)) {
            setVisible(false);
            onChange?.(newValue, getSelectedOptions(newValue));
        }
    };
    const handleClear = (e) => {
        e.stopPropagation();
        setValue([]);
        setActiveOptions([options]);
        onChange?.([], []);
    };
    const selectedOptions = getSelectedOptions(value);
    const displayLabel = displayRender(selectedOptions.map(o => o.label));
    return (jsxRuntime.jsxs(CascaderContainer, { ref: containerRef, className: className, style: style, children: [jsxRuntime.jsxs(CascaderInput, { role: "combobox", "aria-expanded": visible, "aria-haspopup": "listbox", onClick: () => { !disabled && setVisible(!visible); }, disabled: disabled, children: [jsxRuntime.jsx("span", { className: "label", children: (value.length > 0) ? displayLabel : placeholder }), allowClear && value.length > 0 && !disabled && (jsxRuntime.jsx(ClearIcon, { onClick: handleClear, children: jsxRuntime.jsx(Icon, { name: "cross", size: 12 }) })), jsxRuntime.jsx(ArrowIcon, { "$visible": visible, children: jsxRuntime.jsx(Icon, { name: "chevrondown", size: 12 }) })] }), visible && (jsxRuntime.jsx(DropdownContainer, { children: activeOptions.map((options, level) => (jsxRuntime.jsx(OptionList, { children: options.map(option => (jsxRuntime.jsxs(OptionItem, { disabled: option.disabled, selected: value[level] === option.value, onMouseEnter: () => {
                            if (expandTrigger === "hover" && ((option.children?.length) != null)) {
                                handleOptionClick(option, level);
                            }
                        }, onClick: () => { handleOptionClick(option, level); }, children: [jsxRuntime.jsx("span", { children: option.label }), ((option.children?.length) != null) && (jsxRuntime.jsx(Icon, { name: "chevronright", size: 12 }))] }, option.value))) }, level))) }))] }));
};

exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Cascader = Cascader;
exports.Col = Col;
exports.Divider = Divider;
exports.Dropdown = Dropdown;
exports.Icon = Icon;
exports.Menu = Menu;
exports.Pagination = Pagination;
exports.Row = Row;
exports.Space = Space;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
