!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="WZOE")}({"03A+":function(t,e,n){var r=n("JTzB"),i=n("ExA7"),o=Object.prototype,a=o.hasOwnProperty,c=o.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!c.call(t,"callee")};t.exports=u},AP2z:function(t,e,n){var r=n("nmnc"),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(u){}var i=a.call(t);return r&&(e?t[c]=n:delete t[c]),i}},BiGR:function(t,e,n){var r=n("nmnc"),i=n("03A+"),o=n("Z0cm"),a=r?r.isConcatSpreadable:void 0;t.exports=function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},CH3K:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},JTzB:function(t,e,n){var r=n("NykK"),i=n("ExA7");t.exports=function(t){return i(t)&&"[object Arguments]"==r(t)}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();t.exports=o},NykK:function(t,e,n){var r=n("nmnc"),i=n("AP2z"),o=n("KfNM"),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},TYy9:function(t,e,n){var r=n("XGnz");t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},WZOE:function(t,e,n){"use strict";n.r(e);var r=n("TYy9"),i=n.n(r),o=function(){function t(){}return t.prototype.expandToken=function(t){for(var e=[],n="",r=0,i=t.length;r<i;++r)n+=t.charAt(r),e.push(n);return e},t}(),a=function(){function t(){}return t.prototype.sanitize=function(t){return t?t.toLocaleLowerCase().trim():""},t}();function c(t,e){e=e||[];for(var n=t=t||{},r=0;r<e.length;r++)if(null==(n=n[e[r]]))return null;return n}var u=function(){function t(t){this._uidFieldName=t,this._tokenToIdfCache={},this._tokenMap={}}var e=t.prototype;return e.indexDocument=function(t,e,n){this._tokenToIdfCache={};var r,i=this._tokenMap;"object"!=typeof i[t]?i[t]=r={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(r=i[t]).$totalNumOccurrences++;var o=r.$uidMap;"object"!=typeof o[e]?(r.$numDocumentOccurrences++,o[e]={$document:n,$numTokenOccurrences:1}):o[e].$numTokenOccurrences++},e.search=function(t,e){for(var n={},r=0,i=t.length;r<i;r++){var o=t[r],a=this._tokenMap[o];if(!a)return[];if(0===r)for(var c=0,u=(s=Object.keys(a.$uidMap)).length;c<u;c++){n[f=s[c]]=a.$uidMap[f].$document}else{var s;for(c=0,u=(s=Object.keys(n)).length;c<u;c++){var f=s[c];"object"!=typeof a.$uidMap[f]&&delete n[f]}}}var l=[];for(var f in n)l.push(n[f]);var d=this._createCalculateTfIdf();return l.sort((function(n,r){return d(t,r,e)-d(t,n,e)}))},e._createCalculateIdf=function(){var t=this._tokenMap,e=this._tokenToIdfCache;return function(n,r){if(!e[n]){var i=void 0!==t[n]?t[n].$numDocumentOccurrences:0;e[n]=1+Math.log(r.length/(1+i))}return e[n]}},e._createCalculateTfIdf=function(){var t=this._tokenMap,e=this._uidFieldName,n=this._createCalculateIdf();return function(r,i,o){for(var a=0,u=0,s=r.length;u<s;++u){var f,l=r[u],d=n(l,o);d===1/0&&(d=0),f=e instanceof Array?i&&c(i,e):i&&i[e],a+=(void 0!==t[l]&&void 0!==t[l].$uidMap[f]?t[l].$uidMap[f].$numTokenOccurrences:0)*d}return a}},t}(),s=/[^a-zа-яё0-9\-']+/i,f=function(){function t(){}return t.prototype.tokenize=function(t){return t.split(s).filter((function(t){return t}))},t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(t){if(!t)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=t,this._indexStrategy=new o,this._searchIndex=new u(t),this._sanitizer=new a,this._tokenizer=new f,this._documents=[],this._searchableFields=[]}var e,n,r,i=t.prototype;return i.addDocument=function(t){this.addDocuments([t])},i.addDocuments=function(t){this._documents=this._documents.concat(t),this.indexDocuments_(t,this._searchableFields)},i.addIndex=function(t){this._searchableFields.push(t),this.indexDocuments_(this._documents,[t])},i.search=function(t){var e=this._tokenizer.tokenize(this._sanitizer.sanitize(t));return this._searchIndex.search(e,this._documents)},i.indexDocuments_=function(t,e){this._initialized=!0;for(var n=this._indexStrategy,r=this._sanitizer,i=this._searchIndex,o=this._tokenizer,a=this._uidFieldName,u=0,s=t.length;u<s;u++){var f,l=t[u];f=a instanceof Array?c(l,a):l[a];for(var d=0,h=e.length;d<h;d++){var p,v=e[d];if(null!=(p=v instanceof Array?c(l,v):l[v])&&"string"!=typeof p&&p.toString&&(p=p.toString()),"string"==typeof p)for(var y=o.tokenize(r.sanitize(p)),_=0,m=y.length;_<m;_++)for(var g=y[_],b=n.expandToken(g),x=0,z=b.length;x<z;x++){var k=b[x];i.indexDocument(k,f,l)}}}},e=t,(n=[{key:"indexStrategy",set:function(t){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=t},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(t){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=t},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(t){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=t},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(t){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=t},get:function(){return this._tokenizer}}])&&l(e.prototype,n),r&&l(e,r),t}();var h="INIT",p="SEARCH";let v=null;function y(t){var e,n,r,o;e=["path","rawBody"],n=t,r=new d("path"),o=r.tokenizer.tokenize,r.tokenizer.tokenize=function(t){return i()(i()(t.split("/").filter(Boolean).map((function(t){return t.split(/\s+/)}))).map((function(t){return/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(t)?o(t):t.replace(/[\x00-\x7F]/g,"").split("")})))},e.forEach((function(t){return r.addIndex(t)})),r.addDocuments(n),v=r}self.addEventListener("message",t=>{switch(t.data.type){case h:y(t.data.payload);break;case p:self.postMessage(v.search(t.data.payload));break;default:console.log("do nothing...")}})},XGnz:function(t,e,n){var r=n("CH3K"),i=n("BiGR");t.exports=function t(e,n,o,a,c){var u=-1,s=e.length;for(o||(o=i),c||(c=[]);++u<s;){var f=e[u];n>0&&o(f)?n>1?t(f,n-1,o,a,c):r(c,f):a||(c[c.length]=f)}return c}},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}});
//# sourceMappingURL=b8e128a6613726b7dace.worker.js.map