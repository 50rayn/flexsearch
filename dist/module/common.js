import FlexSearch from"./flexsearch.js";export function is_string(a){return"string"==typeof a}export function is_array(a){return a.constructor===Array}export function is_function(a){return"function"==typeof a}export function is_object(a){return"object"==typeof a}export function is_undefined(a){return"undefined"==typeof a}export function get_keys(a){return Object.keys(a)}export function create_object_array(a){const b=Array(a);for(let c=0;c<a;c++)b[c]=create_object();return b}export function create_object(){return Object.create(null)}export function replace(a,b){for(let c=0,d=b.length;c<d&&(a=a.replace(b[c],b[c+1]),!!a);c+=2);return a}export function regex(a){return new RegExp(a,"g")}export function collapse(a){let b="",c="";for(let d,e=0,f=a.length;e<f;e++)(d=a[e])!==c&&(b+=c=d);return b}export function filter(a,b){const c=a.length,d=[];for(let e=0,f=0;e<c;e++){const c=a[e];c&&!b[c]&&(d[f++]=c)}return d}FlexSearch.prototype.pipeline=function(a,b,c,d){if(a&&(b&&a&&(a=replace(a,b)),a&&this.matcher&&(a=replace(a,this.matcher)),this.stemmer&&1<a.length&&(a=replace(a,this.stemmer)),d&&1<a.length&&(a=collapse(a)),a&&(c||""===c))){const b=a.split(c);return this.filter?filter(b,this.filter):b}return a};