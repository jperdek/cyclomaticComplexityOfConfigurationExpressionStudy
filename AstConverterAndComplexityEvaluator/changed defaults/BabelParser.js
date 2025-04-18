'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

exports.onPluginLoad = onPluginLoad;

var _parser = require('@babel/parser');

var babelParser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default babel parser options applying most available plugins.
 *
 * Caveats include:
 * - that both decorators and decorators-legacy can not be used simultaneously.
 * - that both 'flow' and 'typescript' can not be used simultaneously
 *
 * @type {{plugins: string[]}}
 * @ignore
 */
var s_DEFAULT_BABELPARSER_OPTIONS = {
   plugins: ['asyncGenerators', 'bigInt', 'classProperties', 'classPrivateProperties', 'classPrivateMethods', ['decorators', {decoratorsBeforeExport: true}], 'doExpressions', 'dynamicImport', 'exportDefaultFrom', 'exportNamespaceFrom', 'functionBind', 'functionSent', 'importMeta', 'jsx', 'logicalAssignment', 'nullishCoalescingOperator', 'numericSeparator', 'objectRestSpread', 'optionalCatchBinding', 'optionalChaining', ['pipelineOperator', { proposal: 'minimal' }], 'throwExpressions', 'typescript']
};

/**
 * Provides a convenience wrapper around Babel parser.
 */

var BabelParser = function () {
   function BabelParser() {
      (0, _classCallCheck3.default)(this, BabelParser);
   }

   (0, _createClass3.default)(BabelParser, null, [{
      key: 'parse',

      /**
       * Parses the given source with Babel parser.
       *
       * @param {string}   source - Javascript source code to parse.
       * @param {object}   [options] - Overrides default babel parser options.
       * @param {object}   [override] - Provides helper directives to override options to simplify modification of default
       *                                Babel parser options.
       *
       * @returns {object}
       */
      value: function parse(source) {
         var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
         var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;

         // Make a copy of the default options.
         var defaultOptions = JSON.parse((0, _stringify2.default)(s_DEFAULT_BABELPARSER_OPTIONS));

         if ((typeof override === 'undefined' ? 'undefined' : (0, _typeof3.default)(override)) === 'object') {
            // If decoratorsBeforeExport is defined as an override then set that value.
            if (typeof override.decoratorsBeforeExport === 'boolean') {
               defaultOptions.plugins[5][1].decoratorsBeforeExport = override.decoratorsBeforeExport;
            }

            // If decoratorsLegacy is enabled as an override then the actual implementation is swapped for
            // decorators-legacy.
            if (typeof override.decoratorsLegacy === 'boolean' && override.decoratorsLegacy) {
               defaultOptions.plugins[5] = 'decorators-legacy';
            }

            // If pipelineOperatorProposal is defined as an override then set that value.
            if (typeof override.pipelineOperatorProposal === 'string') {
               defaultOptions.plugins[20][1].proposal = override.pipelineOperatorProposal;
            }

            // If flow is enabled as an override 'typescript' must be removed and 'flow' added.
            if (typeof override.flow === 'boolean' && override.flow) {
               var index = defaultOptions.plugins.indexOf('typescript');
               if (index > -1) {
                  defaultOptions.plugins.splice(index, 1);
               }

               defaultOptions.plugins.push('flow');
            }
         }

         options = (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object' ? options : defaultOptions;
         options.sourceType = typeof options.sourceType === 'string' ? options.sourceType : 'unambiguous';

         return babelParser.parse(source, options);
      }
   }]);
   return BabelParser;
}();

/**
 * Wires up BabelParser on the plugin eventbus. The following event bindings are available:
 *
 * `typhonjs:babel:parser:file:parse`: Invokes `parseFile`.
 * `typhonjs:babel:parser:source:parse`: Invokes `parseSource`.
 *
 * @param {PluginEvent} ev - The plugin event.
 * @ignore
 */


exports.default = BabelParser;
function onPluginLoad(ev) {
   var eventbus = ev.eventbus;

   eventbus.on('typhonjs:babel:parser:parse', BabelParser.parse, BabelParser);
}