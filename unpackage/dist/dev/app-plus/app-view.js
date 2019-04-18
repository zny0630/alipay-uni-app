var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'05efef90'])
Z([3,'_view 05efef90 containner'])
Z([3,'_view 05efef90 topper'])
Z([3,'_view 05efef90 top'])
Z([3,'_text 05efef90 top-title'])
Z([3,'朋友'])
Z([3,'_image 05efef90 tianjia'])
Z([3,'../../static/add.png'])
Z([3,'_image 05efef90 caifua'])
Z([3,'../../static/caifua.png'])
Z([3,'_image 05efef90 sousuo'])
Z([3,'../../static/sousuo.png'])
Z([3,'_view 05efef90 sec-top'])
Z([3,'_image 05efef90'])
Z([3,'../../static/top2.JPG'])
Z([3,'_view 05efef90 divide'])
Z([3,'_view 05efef90 bigcard'])
Z([3,'index'])
Z([3,'book'])
Z([[7],[3,'books']])
Z(z[17])
Z([3,'_view 05efef90 card'])
Z([[7],[3,'index']])
Z([3,'_view 05efef90  txcard'])
Z([3,'_img 05efef90 touxiang'])
Z([[6],[[7],[3,'book']],[3,'cover']])
Z([3,'_view 05efef90  fontcard'])
Z([3,'_span 05efef90 ko titfont'])
Z([a,[[6],[[7],[3,'book']],[3,'title']]])
Z([3,'_span 05efef90 ko tea'])
Z([a,[[6],[[7],[3,'book']],[3,'time']]])
Z([3,'_br 05efef90'])
Z([3,'_span 05efef90 ko word'])
Z([a,[[6],[[7],[3,'book']],[3,'word']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'05efef90'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'18d60ff8'])
Z([3,'_view 18d60ff8 content'])
Z([3,'_view 18d60ff8 top'])
Z([3,'_view 18d60ff8 top_card'])
Z([3,'_view 18d60ff8 firstline'])
Z([3,'_input 18d60ff8 top_search'])
Z([3,'搜索'])
Z([3,'text'])
Z([3,'_image 18d60ff8 addressbook'])
Z([3,'../../static/addressbook.png'])
Z([3,'_image 18d60ff8 add'])
Z([3,'../../static/add.png'])
Z([3,'_br 18d60ff8'])
Z([3,'_view 18d60ff8 top-t-card'])
Z([3,'_view 18d60ff8 card'])
Z([3,'_image 18d60ff8 saoyisao'])
Z([3,'../../static/saoyisao.png'])
Z(z[12])
Z([3,'_text 18d60ff8 top-text-sao'])
Z([3,'扫一扫'])
Z([3,'_view 18d60ff8 card_c'])
Z([3,'_image 18d60ff8 fukuan'])
Z([3,'../../static/fukuan.png'])
Z(z[12])
Z([3,'_text 18d60ff8 top-text-fu'])
Z([3,'付钱'])
Z(z[20])
Z([3,'_image 18d60ff8 shouqian'])
Z([3,'../../static/shouqian.png'])
Z(z[12])
Z([3,'_text 18d60ff8 top-text-shou'])
Z([3,'收钱'])
Z(z[20])
Z([3,'_image 18d60ff8 kabao'])
Z([3,'../../static/kabao.png'])
Z(z[12])
Z([3,'_text 18d60ff8 top-text-ka'])
Z([3,'卡包'])
Z([3,'_view 18d60ff8 second-card'])
Z([3,'_view 18d60ff8 second-t-card first'])
Z([3,'_view 18d60ff8 card1'])
Z([3,'_image 18d60ff8'])
Z([3,'../../static/zhuanzhang.png'])
Z(z[12])
Z(z[18])
Z([3,'转账'])
Z([3,'_view 18d60ff8 card2'])
Z(z[41])
Z([3,'../../static/xinyong.png'])
Z(z[12])
Z(z[18])
Z([3,'信用卡还款'])
Z(z[46])
Z(z[41])
Z([3,'../../static/phone.png'])
Z(z[12])
Z(z[18])
Z([3,'手机充值'])
Z(z[46])
Z(z[41])
Z([3,'../../static/yuebao.png'])
Z(z[12])
Z(z[18])
Z([3,'余额宝'])
Z([3,'_view 18d60ff8 second-t-card second'])
Z(z[40])
Z(z[41])
Z([3,'../../static/game.png'])
Z(z[12])
Z(z[18])
Z([3,'游戏中心'])
Z(z[46])
Z(z[41])
Z([3,'../../static/didi.png'])
Z(z[12])
Z(z[18])
Z([3,'滴滴出行'])
Z(z[46])
Z(z[41])
Z([3,'../../static/lifepay.png'])
Z(z[12])
Z(z[18])
Z([3,'生活缴费'])
Z(z[46])
Z(z[41])
Z([3,'../../static/school.png'])
Z(z[12])
Z(z[18])
Z([3,'大学生活'])
Z(z[64])
Z(z[40])
Z(z[41])
Z([3,'../../static/love.png'])
Z(z[12])
Z(z[18])
Z([3,'爱心捐赠'])
Z(z[46])
Z(z[41])
Z([3,'../../static/car.png'])
Z(z[12])
Z(z[18])
Z([3,'车主服务'])
Z(z[46])
Z(z[41])
Z([3,'../../static/city.png'])
Z(z[12])
Z(z[18])
Z([3,'城市服务'])
Z(z[46])
Z(z[41])
Z([3,'../../static/more.png'])
Z(z[12])
Z(z[18])
Z([3,'更多'])
Z([3,'_view 18d60ff8 divide'])
Z([3,'_view 18d60ff8 third-card'])
Z([3,'_image 18d60ff8 tcard'])
Z([3,'../../static/ant.png'])
Z([3,'_image 18d60ff8 trcard'])
Z([3,'../../static/right.png'])
Z([3,'_text 18d60ff8 leftfont matop'])
Z([3,'·   完成饲料任务获得新饲料'])
Z([3,'_text 18d60ff8 rightfont'])
Z([3,'2天前'])
Z(z[12])
Z([3,'_text 18d60ff8 leftfont'])
Z([3,'·   你本次付款获得的优惠'])
Z(z[122])
Z(z[123])
Z(z[12])
Z(z[114])
Z([3,'_view 18d60ff8 forth-card'])
Z(z[41])
Z([3,'../../static/checkin.jpg'])
Z(z[114])
Z([3,'_view 18d60ff8 bottom-card'])
Z([3,'_text 18d60ff8 f_font'])
Z([3,'惠支付'])
Z([3,'_view 18d60ff8 f_card'])
Z(z[41])
Z([3,'../../static/f_card1.png'])
Z(z[136])
Z([3,'生活服务'])
Z(z[138])
Z(z[41])
Z([3,'../../static/f_card2.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'18d60ff8'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'b8acd2a0'])
Z([3,'_view b8acd2a0 content'])
Z([3,'_view b8acd2a0 top-t'])
Z([3,'_view b8acd2a0 top'])
Z([3,'_view b8acd2a0 title'])
Z([3,'_text b8acd2a0'])
Z([a,[[7],[3,'title']]])
Z([3,'_view b8acd2a0 set'])
Z(z[5])
Z([a,[[7],[3,'setting']]])
Z([3,'_view b8acd2a0 infor'])
Z([3,'_image b8acd2a0'])
Z([3,'../../static/avatar.jpg'])
Z([3,'_text b8acd2a0 username'])
Z([a,[[7],[3,'username']]])
Z([3,'_br b8acd2a0'])
Z([3,'_text b8acd2a0 mobile'])
Z([a,[[7],[3,'mobile']]])
Z([3,'index'])
Z([3,'user'])
Z([[7],[3,'users']])
Z(z[18])
Z([3,'_view b8acd2a0 item'])
Z([[7],[3,'index']])
Z(z[11])
Z([[6],[[7],[3,'user']],[3,'avatar']])
Z([3,'_view b8acd2a0 right'])
Z([a,[[6],[[7],[3,'user']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'b8acd2a0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'194fb147'])
Z([3,'_view 194fb147 content'])
Z([3,'_view 194fb147 top-t'])
Z([3,'_view 194fb147 top'])
Z([3,'_view 194fb147 t1'])
Z([3,'_view 194fb147 left'])
Z([3,'_view 194fb147 w1'])
Z([a,[[7],[3,'title']]])
Z([3,'_view 194fb147 w2'])
Z([3,'总资产（元）'])
Z([3,'_image 194fb147'])
Z([3,'../../static/eyes.png'])
Z([3,'_view 194fb147 w3'])
Z([3,'3000.00'])
Z([3,'_view 194fb147 right'])
Z([3,'_view 194fb147'])
Z(z[10])
Z([3,'../../static/search2.png'])
Z(z[15])
Z([3,'_text 194fb147 w2'])
Z([3,'昨日收益'])
Z(z[15])
Z([3,'_text 194fb147 w3'])
Z([3,'6.30'])
Z([3,'_view 194fb147 t2'])
Z([3,'_view 194fb147 c'])
Z(z[15])
Z([3,'余额'])
Z(z[15])
Z(z[13])
Z(z[25])
Z(z[15])
Z([3,'余额宝'])
Z(z[15])
Z([3,'1000.00'])
Z([3,'_view 194fb147 cc'])
Z(z[15])
Z([3,'更多理财资产'])
Z(z[15])
Z([3,'\x3e0.00'])
Z(z[15])
Z([3,'_view 194fb147 mid'])
Z([3,'_view 194fb147 yl'])
Z([3,'花呗'])
Z([3,'_view 194fb147 ys'])
Z([3,'可用3000'])
Z([3,'_view 194fb147 bottom'])
Z(z[15])
Z(z[10])
Z([3,'../../static/dingqi.png'])
Z(z[15])
Z([3,'定期'])
Z(z[15])
Z(z[10])
Z([3,'../../static/jijin.png'])
Z(z[15])
Z([3,'基金'])
Z(z[15])
Z(z[10])
Z([3,'../../static/yueb.png'])
Z(z[15])
Z(z[32])
Z(z[15])
Z(z[10])
Z([3,'../../static/huangjin.png'])
Z(z[15])
Z([3,'黄金'])
Z(z[15])
Z(z[10])
Z([3,'../../static/gupiao.png'])
Z(z[15])
Z([3,'股票'])
Z([3,'_view 194fb147 youliao'])
Z([3,'_text 194fb147 yl'])
Z([3,'财富有料'])
Z([3,'_text 194fb147 ylw'])
Z([3,'更多'])
Z([3,'_view 194fb147 news'])
Z([3,'_view 194fb147 new'])
Z(z[15])
Z(z[10])
Z([3,'../../static/yangy.JPG'])
Z(z[15])
Z([3,'_p 194fb147 neww'])
Z([3,'一辈子租房不买房 你愿意吗？'])
Z(z[78])
Z(z[15])
Z(z[10])
Z([3,'../../static/tencent.JPG'])
Z(z[15])
Z(z[83])
Z([3,'70块工资到亿万身家，从不炒股的他，坚持每年买一套房！'])
Z(z[78])
Z(z[15])
Z(z[10])
Z([3,'../../static/leij.JPG'])
Z(z[15])
Z(z[83])
Z([3,'进口车密集降价!背后不只是买车便宜这么简单'])
Z([3,'_view 194fb147 ant'])
Z(z[10])
Z([3,'../../static/mycf.png'])
Z([3,'_text 194fb147 a'])
Z([3,'蚂蚁财富'])
Z(z[15])
Z([3,'过往业绩不预示未来表现，市场有风险，投资需谨慎\x3e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'194fb147'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./pages/index/friend.vue.wxml','./pages/index/friend.wxml','./friend.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/index/ucenter.vue.wxml','./pages/index/ucenter.wxml','./ucenter.vue.wxml','./pages/index/wealth.vue.wxml','./pages/index/wealth.wxml','./wealth.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["05efef90"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':05efef90'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/friend.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
cs.push("./pages/index/friend.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/friend.vue.wxml:view:1:67")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/friend.vue.wxml:view:1:110")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/index/friend.vue.wxml:text:1:143")
var fE=_n('text')
_rz(z,fE,'class',4,e,s,gg)
var cF=_oz(z,5,e,s,gg)
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./pages/index/friend.vue.wxml:image:1:195")
var hG=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
cs.pop()
_(oD,hG)
cs.push("./pages/index/friend.vue.wxml:image:1:269")
var oH=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
cs.pop()
_(oD,oH)
cs.push("./pages/index/friend.vue.wxml:image:1:345")
var cI=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
cs.pop()
_(oD,cI)
cs.pop()
_(oB,oD)
cs.push("./pages/index/friend.vue.wxml:view:1:428")
var oJ=_n('view')
_rz(z,oJ,'class',12,e,s,gg)
cs.push("./pages/index/friend.vue.wxml:image:1:465")
var lK=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
cs.pop()
_(oJ,lK)
cs.pop()
_(oB,oJ)
cs.push("./pages/index/friend.vue.wxml:view:1:539")
var aL=_n('view')
_rz(z,aL,'class',15,e,s,gg)
cs.pop()
_(oB,aL)
cs.push("./pages/index/friend.vue.wxml:view:1:582")
var tM=_n('view')
_rz(z,tM,'class',16,e,s,gg)
var eN=_v()
_(tM,eN)
cs.push("./pages/index/friend.vue.wxml:view:1:619")
var bO=function(xQ,oP,oR,gg){
cs.push("./pages/index/friend.vue.wxml:view:1:619")
var cT=_mz(z,'view',['class',21,'key',1],[],xQ,oP,gg)
cs.push("./pages/index/friend.vue.wxml:view:1:743")
var hU=_n('view')
_rz(z,hU,'class',23,xQ,oP,gg)
cs.push("./pages/index/friend.vue.wxml:image:1:780")
var oV=_mz(z,'image',['class',24,'src',1],[],xQ,oP,gg)
cs.pop()
_(hU,oV)
cs.pop()
_(cT,hU)
cs.push("./pages/index/friend.vue.wxml:view:1:854")
var cW=_n('view')
_rz(z,cW,'class',26,xQ,oP,gg)
cs.push("./pages/index/friend.vue.wxml:label:1:893")
var oX=_n('label')
_rz(z,oX,'class',27,xQ,oP,gg)
var lY=_oz(z,28,xQ,oP,gg)
_(oX,lY)
cs.pop()
_(cW,oX)
cs.push("./pages/index/friend.vue.wxml:label:1:958")
var aZ=_n('label')
_rz(z,aZ,'class',29,xQ,oP,gg)
var t1=_oz(z,30,xQ,oP,gg)
_(aZ,t1)
cs.pop()
_(cW,aZ)
cs.push("./pages/index/friend.vue.wxml:view:1:1018")
var e2=_n('view')
_rz(z,e2,'class',31,xQ,oP,gg)
cs.pop()
_(cW,e2)
cs.push("./pages/index/friend.vue.wxml:label:1:1052")
var b3=_n('label')
_rz(z,b3,'class',32,xQ,oP,gg)
var o4=_oz(z,33,xQ,oP,gg)
_(b3,o4)
cs.pop()
_(cW,b3)
cs.pop()
_(cT,cW)
cs.pop()
_(oR,cT)
return oR
}
eN.wxXCkey=2
_2z(z,19,bO,e,s,gg,eN,'book','index','index')
cs.pop()
cs.pop()
_(oB,tM)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
cs.push("./pages/index/friend.wxml:template:2:6")
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
cs.pop()
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["18d60ff8"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':18d60ff8'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:64")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:view:1:104")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:142")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/index/index.vue.wxml:input:1:181")
var cF=_mz(z,'input',['class',5,'placeholder',1,'type',2],[],e,s,gg)
cs.pop()
_(fE,cF)
cs.push("./pages/index/index.vue.wxml:image:1:258")
var hG=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
cs.pop()
_(fE,hG)
cs.push("./pages/index/index.vue.wxml:image:1:344")
var oH=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
cs.pop()
_(fE,oH)
cs.push("./pages/index/index.vue.wxml:view:1:414")
var cI=_n('view')
_rz(z,cI,'class',12,e,s,gg)
cs.pop()
_(fE,cI)
cs.pop()
_(oD,fE)
cs.push("./pages/index/index.vue.wxml:view:1:455")
var oJ=_n('view')
_rz(z,oJ,'class',13,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:495")
var lK=_n('view')
_rz(z,lK,'class',14,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:529")
var aL=_mz(z,'image',['class',15,'src',1],[],e,s,gg)
cs.pop()
_(lK,aL)
cs.push("./pages/index/index.vue.wxml:view:1:609")
var tM=_n('view')
_rz(z,tM,'class',17,e,s,gg)
cs.pop()
_(lK,tM)
cs.push("./pages/index/index.vue.wxml:text:1:643")
var eN=_n('text')
_rz(z,eN,'class',18,e,s,gg)
var bO=_oz(z,19,e,s,gg)
_(eN,bO)
cs.pop()
_(lK,eN)
cs.pop()
_(oJ,lK)
cs.push("./pages/index/index.vue.wxml:view:1:708")
var oP=_n('view')
_rz(z,oP,'class',20,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:744")
var xQ=_mz(z,'image',['class',21,'src',1],[],e,s,gg)
cs.pop()
_(oP,xQ)
cs.push("./pages/index/index.vue.wxml:view:1:820")
var oR=_n('view')
_rz(z,oR,'class',23,e,s,gg)
cs.pop()
_(oP,oR)
cs.push("./pages/index/index.vue.wxml:text:1:854")
var fS=_n('text')
_rz(z,fS,'class',24,e,s,gg)
var cT=_oz(z,25,e,s,gg)
_(fS,cT)
cs.pop()
_(oP,fS)
cs.pop()
_(oJ,oP)
cs.push("./pages/index/index.vue.wxml:view:1:915")
var hU=_n('view')
_rz(z,hU,'class',26,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:951")
var oV=_mz(z,'image',['class',27,'src',1],[],e,s,gg)
cs.pop()
_(hU,oV)
cs.push("./pages/index/index.vue.wxml:view:1:1031")
var cW=_n('view')
_rz(z,cW,'class',29,e,s,gg)
cs.pop()
_(hU,cW)
cs.push("./pages/index/index.vue.wxml:text:1:1065")
var oX=_n('text')
_rz(z,oX,'class',30,e,s,gg)
var lY=_oz(z,31,e,s,gg)
_(oX,lY)
cs.pop()
_(hU,oX)
cs.pop()
_(oJ,hU)
cs.push("./pages/index/index.vue.wxml:view:1:1128")
var aZ=_n('view')
_rz(z,aZ,'class',32,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1164")
var t1=_mz(z,'image',['class',33,'src',1],[],e,s,gg)
cs.pop()
_(aZ,t1)
cs.push("./pages/index/index.vue.wxml:view:1:1238")
var e2=_n('view')
_rz(z,e2,'class',35,e,s,gg)
cs.pop()
_(aZ,e2)
cs.push("./pages/index/index.vue.wxml:text:1:1272")
var b3=_n('text')
_rz(z,b3,'class',36,e,s,gg)
var o4=_oz(z,37,e,s,gg)
_(b3,o4)
cs.pop()
_(aZ,b3)
cs.pop()
_(oJ,aZ)
cs.pop()
_(oD,oJ)
cs.pop()
_(oB,oD)
cs.push("./pages/index/index.vue.wxml:view:1:1347")
var x5=_n('view')
_rz(z,x5,'class',38,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:1388")
var o6=_n('view')
_rz(z,o6,'class',39,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:1437")
var f7=_n('view')
_rz(z,f7,'class',40,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1472")
var c8=_mz(z,'image',['class',41,'src',1],[],e,s,gg)
cs.pop()
_(f7,c8)
cs.push("./pages/index/index.vue.wxml:view:1:1545")
var h9=_n('view')
_rz(z,h9,'class',43,e,s,gg)
cs.pop()
_(f7,h9)
cs.push("./pages/index/index.vue.wxml:text:1:1579")
var o0=_n('text')
_rz(z,o0,'class',44,e,s,gg)
var cAB=_oz(z,45,e,s,gg)
_(o0,cAB)
cs.pop()
_(f7,o0)
cs.pop()
_(o6,f7)
cs.push("./pages/index/index.vue.wxml:view:1:1641")
var oBB=_n('view')
_rz(z,oBB,'class',46,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1676")
var lCB=_mz(z,'image',['class',47,'src',1],[],e,s,gg)
cs.pop()
_(oBB,lCB)
cs.push("./pages/index/index.vue.wxml:view:1:1746")
var aDB=_n('view')
_rz(z,aDB,'class',49,e,s,gg)
cs.pop()
_(oBB,aDB)
cs.push("./pages/index/index.vue.wxml:text:1:1780")
var tEB=_n('text')
_rz(z,tEB,'class',50,e,s,gg)
var eFB=_oz(z,51,e,s,gg)
_(tEB,eFB)
cs.pop()
_(oBB,tEB)
cs.pop()
_(o6,oBB)
cs.push("./pages/index/index.vue.wxml:view:1:1851")
var bGB=_n('view')
_rz(z,bGB,'class',52,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:1886")
var oHB=_mz(z,'image',['class',53,'src',1],[],e,s,gg)
cs.pop()
_(bGB,oHB)
cs.push("./pages/index/index.vue.wxml:view:1:1954")
var xIB=_n('view')
_rz(z,xIB,'class',55,e,s,gg)
cs.pop()
_(bGB,xIB)
cs.push("./pages/index/index.vue.wxml:text:1:1988")
var oJB=_n('text')
_rz(z,oJB,'class',56,e,s,gg)
var fKB=_oz(z,57,e,s,gg)
_(oJB,fKB)
cs.pop()
_(bGB,oJB)
cs.pop()
_(o6,bGB)
cs.push("./pages/index/index.vue.wxml:view:1:2056")
var cLB=_n('view')
_rz(z,cLB,'class',58,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2091")
var hMB=_mz(z,'image',['class',59,'src',1],[],e,s,gg)
cs.pop()
_(cLB,hMB)
cs.push("./pages/index/index.vue.wxml:view:1:2160")
var oNB=_n('view')
_rz(z,oNB,'class',61,e,s,gg)
cs.pop()
_(cLB,oNB)
cs.push("./pages/index/index.vue.wxml:text:1:2194")
var cOB=_n('text')
_rz(z,cOB,'class',62,e,s,gg)
var oPB=_oz(z,63,e,s,gg)
_(cOB,oPB)
cs.pop()
_(cLB,cOB)
cs.pop()
_(o6,cLB)
cs.pop()
_(x5,o6)
cs.push("./pages/index/index.vue.wxml:view:1:2266")
var lQB=_n('view')
_rz(z,lQB,'class',64,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:2316")
var aRB=_n('view')
_rz(z,aRB,'class',65,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2351")
var tSB=_mz(z,'image',['class',66,'src',1],[],e,s,gg)
cs.pop()
_(aRB,tSB)
cs.push("./pages/index/index.vue.wxml:view:1:2418")
var eTB=_n('view')
_rz(z,eTB,'class',68,e,s,gg)
cs.pop()
_(aRB,eTB)
cs.push("./pages/index/index.vue.wxml:text:1:2452")
var bUB=_n('text')
_rz(z,bUB,'class',69,e,s,gg)
var oVB=_oz(z,70,e,s,gg)
_(bUB,oVB)
cs.pop()
_(aRB,bUB)
cs.pop()
_(lQB,aRB)
cs.push("./pages/index/index.vue.wxml:view:1:2520")
var xWB=_n('view')
_rz(z,xWB,'class',71,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2555")
var oXB=_mz(z,'image',['class',72,'src',1],[],e,s,gg)
cs.pop()
_(xWB,oXB)
cs.push("./pages/index/index.vue.wxml:view:1:2622")
var fYB=_n('view')
_rz(z,fYB,'class',74,e,s,gg)
cs.pop()
_(xWB,fYB)
cs.push("./pages/index/index.vue.wxml:text:1:2656")
var cZB=_n('text')
_rz(z,cZB,'class',75,e,s,gg)
var h1B=_oz(z,76,e,s,gg)
_(cZB,h1B)
cs.pop()
_(xWB,cZB)
cs.pop()
_(lQB,xWB)
cs.push("./pages/index/index.vue.wxml:view:1:2724")
var o2B=_n('view')
_rz(z,o2B,'class',77,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2759")
var c3B=_mz(z,'image',['class',78,'src',1],[],e,s,gg)
cs.pop()
_(o2B,c3B)
cs.push("./pages/index/index.vue.wxml:view:1:2829")
var o4B=_n('view')
_rz(z,o4B,'class',80,e,s,gg)
cs.pop()
_(o2B,o4B)
cs.push("./pages/index/index.vue.wxml:text:1:2863")
var l5B=_n('text')
_rz(z,l5B,'class',81,e,s,gg)
var a6B=_oz(z,82,e,s,gg)
_(l5B,a6B)
cs.pop()
_(o2B,l5B)
cs.pop()
_(lQB,o2B)
cs.push("./pages/index/index.vue.wxml:view:1:2931")
var t7B=_n('view')
_rz(z,t7B,'class',83,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:2966")
var e8B=_mz(z,'image',['class',84,'src',1],[],e,s,gg)
cs.pop()
_(t7B,e8B)
cs.push("./pages/index/index.vue.wxml:view:1:3035")
var b9B=_n('view')
_rz(z,b9B,'class',86,e,s,gg)
cs.pop()
_(t7B,b9B)
cs.push("./pages/index/index.vue.wxml:text:1:3069")
var o0B=_n('text')
_rz(z,o0B,'class',87,e,s,gg)
var xAC=_oz(z,88,e,s,gg)
_(o0B,xAC)
cs.pop()
_(t7B,o0B)
cs.pop()
_(lQB,t7B)
cs.pop()
_(x5,lQB)
cs.push("./pages/index/index.vue.wxml:view:1:3144")
var oBC=_n('view')
_rz(z,oBC,'class',89,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:1:3194")
var fCC=_n('view')
_rz(z,fCC,'class',90,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:3229")
var cDC=_mz(z,'image',['class',91,'src',1],[],e,s,gg)
cs.pop()
_(fCC,cDC)
cs.push("./pages/index/index.vue.wxml:view:1:3296")
var hEC=_n('view')
_rz(z,hEC,'class',93,e,s,gg)
cs.pop()
_(fCC,hEC)
cs.push("./pages/index/index.vue.wxml:text:1:3330")
var oFC=_n('text')
_rz(z,oFC,'class',94,e,s,gg)
var cGC=_oz(z,95,e,s,gg)
_(oFC,cGC)
cs.pop()
_(fCC,oFC)
cs.pop()
_(oBC,fCC)
cs.push("./pages/index/index.vue.wxml:view:1:3398")
var oHC=_n('view')
_rz(z,oHC,'class',96,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:3433")
var lIC=_mz(z,'image',['class',97,'src',1],[],e,s,gg)
cs.pop()
_(oHC,lIC)
cs.push("./pages/index/index.vue.wxml:view:1:3499")
var aJC=_n('view')
_rz(z,aJC,'class',99,e,s,gg)
cs.pop()
_(oHC,aJC)
cs.push("./pages/index/index.vue.wxml:text:1:3533")
var tKC=_n('text')
_rz(z,tKC,'class',100,e,s,gg)
var eLC=_oz(z,101,e,s,gg)
_(tKC,eLC)
cs.pop()
_(oHC,tKC)
cs.pop()
_(oBC,oHC)
cs.push("./pages/index/index.vue.wxml:view:1:3601")
var bMC=_n('view')
_rz(z,bMC,'class',102,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:3636")
var oNC=_mz(z,'image',['class',103,'src',1],[],e,s,gg)
cs.pop()
_(bMC,oNC)
cs.push("./pages/index/index.vue.wxml:view:1:3703")
var xOC=_n('view')
_rz(z,xOC,'class',105,e,s,gg)
cs.pop()
_(bMC,xOC)
cs.push("./pages/index/index.vue.wxml:text:1:3737")
var oPC=_n('text')
_rz(z,oPC,'class',106,e,s,gg)
var fQC=_oz(z,107,e,s,gg)
_(oPC,fQC)
cs.pop()
_(bMC,oPC)
cs.pop()
_(oBC,bMC)
cs.push("./pages/index/index.vue.wxml:view:1:3805")
var cRC=_n('view')
_rz(z,cRC,'class',108,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:3840")
var hSC=_mz(z,'image',['class',109,'src',1],[],e,s,gg)
cs.pop()
_(cRC,hSC)
cs.push("./pages/index/index.vue.wxml:view:1:3907")
var oTC=_n('view')
_rz(z,oTC,'class',111,e,s,gg)
cs.pop()
_(cRC,oTC)
cs.push("./pages/index/index.vue.wxml:text:1:3941")
var cUC=_n('text')
_rz(z,cUC,'class',112,e,s,gg)
var oVC=_oz(z,113,e,s,gg)
_(cUC,oVC)
cs.pop()
_(cRC,cUC)
cs.pop()
_(oBC,cRC)
cs.pop()
_(x5,oBC)
cs.pop()
_(oB,x5)
cs.push("./pages/index/index.vue.wxml:view:1:4017")
var lWC=_n('view')
_rz(z,lWC,'class',114,e,s,gg)
cs.pop()
_(oB,lWC)
cs.push("./pages/index/index.vue.wxml:view:1:4060")
var aXC=_n('view')
_rz(z,aXC,'class',115,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:4100")
var tYC=_mz(z,'image',['class',116,'src',1],[],e,s,gg)
cs.pop()
_(aXC,tYC)
cs.push("./pages/index/index.vue.wxml:image:1:4172")
var eZC=_mz(z,'image',['class',118,'src',1],[],e,s,gg)
cs.pop()
_(aXC,eZC)
cs.push("./pages/index/index.vue.wxml:text:1:4247")
var b1C=_n('text')
_rz(z,b1C,'class',120,e,s,gg)
var o2C=_oz(z,121,e,s,gg)
_(b1C,o2C)
cs.pop()
_(aXC,b1C)
cs.push("./pages/index/index.vue.wxml:text:1:4338")
var x3C=_n('text')
_rz(z,x3C,'class',122,e,s,gg)
var o4C=_oz(z,123,e,s,gg)
_(x3C,o4C)
cs.pop()
_(aXC,x3C)
cs.push("./pages/index/index.vue.wxml:view:1:4391")
var f5C=_n('view')
_rz(z,f5C,'class',124,e,s,gg)
cs.pop()
_(aXC,f5C)
cs.push("./pages/index/index.vue.wxml:text:1:4425")
var c6C=_n('text')
_rz(z,c6C,'class',125,e,s,gg)
var h7C=_oz(z,126,e,s,gg)
_(c6C,h7C)
cs.pop()
_(aXC,c6C)
cs.push("./pages/index/index.vue.wxml:text:1:4507")
var o8C=_n('text')
_rz(z,o8C,'class',127,e,s,gg)
var c9C=_oz(z,128,e,s,gg)
_(o8C,c9C)
cs.pop()
_(aXC,o8C)
cs.push("./pages/index/index.vue.wxml:view:1:4560")
var o0C=_n('view')
_rz(z,o0C,'class',129,e,s,gg)
cs.pop()
_(aXC,o0C)
cs.pop()
_(oB,aXC)
cs.push("./pages/index/index.vue.wxml:view:1:4601")
var lAD=_n('view')
_rz(z,lAD,'class',130,e,s,gg)
cs.pop()
_(oB,lAD)
cs.push("./pages/index/index.vue.wxml:view:1:4644")
var aBD=_n('view')
_rz(z,aBD,'class',131,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:4684")
var tCD=_mz(z,'image',['class',132,'src',1],[],e,s,gg)
cs.pop()
_(aBD,tCD)
cs.pop()
_(oB,aBD)
cs.push("./pages/index/index.vue.wxml:view:1:4761")
var eDD=_n('view')
_rz(z,eDD,'class',134,e,s,gg)
cs.pop()
_(oB,eDD)
cs.push("./pages/index/index.vue.wxml:view:1:4804")
var bED=_n('view')
_rz(z,bED,'class',135,e,s,gg)
cs.push("./pages/index/index.vue.wxml:text:1:4845")
var oFD=_n('text')
_rz(z,oFD,'class',136,e,s,gg)
var xGD=_oz(z,137,e,s,gg)
_(oFD,xGD)
cs.pop()
_(bED,oFD)
cs.push("./pages/index/index.vue.wxml:view:1:4897")
var oHD=_n('view')
_rz(z,oHD,'class',138,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:4933")
var fID=_mz(z,'image',['class',139,'src',1],[],e,s,gg)
cs.pop()
_(oHD,fID)
cs.pop()
_(bED,oHD)
cs.push("./pages/index/index.vue.wxml:text:1:5010")
var cJD=_n('text')
_rz(z,cJD,'class',141,e,s,gg)
var hKD=_oz(z,142,e,s,gg)
_(cJD,hKD)
cs.pop()
_(bED,cJD)
cs.push("./pages/index/index.vue.wxml:view:1:5065")
var oLD=_n('view')
_rz(z,oLD,'class',143,e,s,gg)
cs.push("./pages/index/index.vue.wxml:image:1:5101")
var cMD=_mz(z,'image',['class',144,'src',1],[],e,s,gg)
cs.pop()
_(oLD,cMD)
cs.pop()
_(bED,oLD)
cs.pop()
_(oB,bED)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
cs.push("./pages/index/index.wxml:template:2:6")
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
cs.pop()
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["b8acd2a0"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':b8acd2a0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/ucenter.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
cs.push("./pages/index/ucenter.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/ucenter.vue.wxml:view:1:64")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/ucenter.vue.wxml:view:1:106")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/index/ucenter.vue.wxml:view:1:139")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/index/ucenter.vue.wxml:text:1:174")
var cF=_n('text')
_rz(z,cF,'class',5,e,s,gg)
var hG=_oz(z,6,e,s,gg)
_(cF,hG)
cs.pop()
_(fE,cF)
cs.pop()
_(oD,fE)
cs.push("./pages/index/ucenter.vue.wxml:view:1:226")
var oH=_n('view')
_rz(z,oH,'class',7,e,s,gg)
cs.push("./pages/index/ucenter.vue.wxml:text:1:259")
var cI=_n('text')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_oz(z,9,e,s,gg)
_(cI,oJ)
cs.pop()
_(oH,cI)
cs.pop()
_(oD,oH)
cs.pop()
_(oB,oD)
cs.push("./pages/index/ucenter.vue.wxml:view:1:320")
var lK=_n('view')
_rz(z,lK,'class',10,e,s,gg)
cs.push("./pages/index/ucenter.vue.wxml:image:1:355")
var aL=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
cs.pop()
_(lK,aL)
cs.push("./pages/index/ucenter.vue.wxml:text:1:424")
var tM=_n('text')
_rz(z,tM,'class',13,e,s,gg)
var eN=_oz(z,14,e,s,gg)
_(tM,eN)
cs.pop()
_(lK,tM)
cs.push("./pages/index/ucenter.vue.wxml:view:1:481")
var bO=_n('view')
_rz(z,bO,'class',15,e,s,gg)
cs.pop()
_(lK,bO)
cs.push("./pages/index/ucenter.vue.wxml:text:1:515")
var oP=_n('text')
_rz(z,oP,'class',16,e,s,gg)
var xQ=_oz(z,17,e,s,gg)
_(oP,xQ)
cs.pop()
_(lK,oP)
cs.pop()
_(oB,lK)
var oR=_v()
_(oB,oR)
cs.push("./pages/index/ucenter.vue.wxml:view:1:575")
var fS=function(hU,cT,oV,gg){
cs.push("./pages/index/ucenter.vue.wxml:view:1:575")
var oX=_mz(z,'view',['class',22,'key',1],[],hU,cT,gg)
cs.push("./pages/index/ucenter.vue.wxml:image:1:699")
var lY=_mz(z,'image',['mode',-1,'class',24,'src',1],[],hU,cT,gg)
cs.pop()
_(oX,lY)
cs.push("./pages/index/ucenter.vue.wxml:view:1:765")
var aZ=_n('view')
_rz(z,aZ,'class',26,hU,cT,gg)
var t1=_oz(z,27,hU,cT,gg)
_(aZ,t1)
cs.pop()
_(oX,aZ)
cs.pop()
_(oV,oX)
return oV
}
oR.wxXCkey=2
_2z(z,20,fS,e,s,gg,oR,'user','index','index')
cs.pop()
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
cs.push("./pages/index/ucenter.wxml:template:2:6")
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
cs.pop()
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["194fb147"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':194fb147'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/wealth.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
cs.push("./pages/index/wealth.vue.wxml:view:1:27")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:64")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
cs.pop()
_(oB,xC)
cs.push("./pages/index/wealth.vue.wxml:view:1:106")
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:139")
var fE=_n('view')
_rz(z,fE,'class',4,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:171")
var cF=_n('view')
_rz(z,cF,'class',5,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:205")
var hG=_n('view')
_rz(z,hG,'class',6,e,s,gg)
var oH=_oz(z,7,e,s,gg)
_(hG,oH)
cs.pop()
_(cF,hG)
cs.push("./pages/index/wealth.vue.wxml:view:1:255")
var cI=_n('view')
_rz(z,cI,'class',8,e,s,gg)
var oJ=_oz(z,9,e,s,gg)
_(cI,oJ)
cs.push("./pages/index/wealth.vue.wxml:image:1:305")
var lK=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
cs.pop()
_(cI,lK)
cs.pop()
_(cF,cI)
cs.push("./pages/index/wealth.vue.wxml:view:1:379")
var aL=_n('view')
_rz(z,aL,'class',12,e,s,gg)
var tM=_oz(z,13,e,s,gg)
_(aL,tM)
cs.pop()
_(cF,aL)
cs.pop()
_(fE,cF)
cs.push("./pages/index/wealth.vue.wxml:view:1:432")
var eN=_n('view')
_rz(z,eN,'class',14,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:467")
var bO=_n('view')
_rz(z,bO,'class',15,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:496")
var oP=_mz(z,'image',['class',16,'src',1],[],e,s,gg)
cs.pop()
_(bO,oP)
cs.pop()
_(eN,bO)
cs.push("./pages/index/wealth.vue.wxml:view:1:573")
var xQ=_n('view')
_rz(z,xQ,'class',18,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:text:1:602")
var oR=_n('text')
_rz(z,oR,'class',19,e,s,gg)
var fS=_oz(z,20,e,s,gg)
_(oR,fS)
cs.pop()
_(xQ,oR)
cs.pop()
_(eN,xQ)
cs.push("./pages/index/wealth.vue.wxml:view:1:660")
var cT=_n('view')
_rz(z,cT,'class',21,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:text:1:689")
var hU=_n('text')
_rz(z,hU,'class',22,e,s,gg)
var oV=_oz(z,23,e,s,gg)
_(hU,oV)
cs.pop()
_(cT,hU)
cs.pop()
_(eN,cT)
cs.pop()
_(fE,eN)
cs.pop()
_(oD,fE)
cs.push("./pages/index/wealth.vue.wxml:view:1:753")
var cW=_n('view')
_rz(z,cW,'class',24,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:785")
var oX=_n('view')
_rz(z,oX,'class',25,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:816")
var lY=_n('view')
_rz(z,lY,'class',26,e,s,gg)
var aZ=_oz(z,27,e,s,gg)
_(lY,aZ)
cs.pop()
_(oX,lY)
cs.push("./pages/index/wealth.vue.wxml:view:1:858")
var t1=_n('view')
_rz(z,t1,'class',28,e,s,gg)
var e2=_oz(z,29,e,s,gg)
_(t1,e2)
cs.pop()
_(oX,t1)
cs.pop()
_(cW,oX)
cs.push("./pages/index/wealth.vue.wxml:view:1:908")
var b3=_n('view')
_rz(z,b3,'class',30,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:939")
var o4=_n('view')
_rz(z,o4,'class',31,e,s,gg)
var x5=_oz(z,32,e,s,gg)
_(o4,x5)
cs.pop()
_(b3,o4)
cs.push("./pages/index/wealth.vue.wxml:view:1:984")
var o6=_n('view')
_rz(z,o6,'class',33,e,s,gg)
var f7=_oz(z,34,e,s,gg)
_(o6,f7)
cs.pop()
_(b3,o6)
cs.pop()
_(cW,b3)
cs.push("./pages/index/wealth.vue.wxml:view:1:1034")
var c8=_n('view')
_rz(z,c8,'class',35,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:1066")
var h9=_n('view')
_rz(z,h9,'class',36,e,s,gg)
var o0=_oz(z,37,e,s,gg)
_(h9,o0)
cs.pop()
_(c8,h9)
cs.push("./pages/index/wealth.vue.wxml:view:1:1120")
var cAB=_n('view')
_rz(z,cAB,'class',38,e,s,gg)
var oBB=_oz(z,39,e,s,gg)
_(cAB,oBB)
cs.pop()
_(c8,cAB)
cs.pop()
_(cW,c8)
cs.push("./pages/index/wealth.vue.wxml:view:1:1168")
var lCB=_n('view')
_rz(z,lCB,'class',40,e,s,gg)
cs.pop()
_(cW,lCB)
cs.pop()
_(oD,cW)
cs.pop()
_(oB,oD)
cs.push("./pages/index/wealth.vue.wxml:view:1:1218")
var aDB=_n('view')
_rz(z,aDB,'class',41,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:1251")
var tEB=_n('view')
_rz(z,tEB,'class',42,e,s,gg)
var eFB=_oz(z,43,e,s,gg)
_(tEB,eFB)
cs.pop()
_(aDB,tEB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1296")
var bGB=_n('view')
_rz(z,bGB,'class',44,e,s,gg)
var oHB=_oz(z,45,e,s,gg)
_(bGB,oHB)
cs.pop()
_(aDB,bGB)
cs.pop()
_(oB,aDB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1352")
var xIB=_n('view')
_rz(z,xIB,'class',46,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:1388")
var oJB=_n('view')
_rz(z,oJB,'class',47,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:1417")
var fKB=_mz(z,'image',['class',48,'src',1],[],e,s,gg)
cs.pop()
_(oJB,fKB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1486")
var cLB=_n('view')
_rz(z,cLB,'class',50,e,s,gg)
var hMB=_oz(z,51,e,s,gg)
_(cLB,hMB)
cs.pop()
_(oJB,cLB)
cs.pop()
_(xIB,oJB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1535")
var oNB=_n('view')
_rz(z,oNB,'class',52,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:1564")
var cOB=_mz(z,'image',['class',53,'src',1],[],e,s,gg)
cs.pop()
_(oNB,cOB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1632")
var oPB=_n('view')
_rz(z,oPB,'class',55,e,s,gg)
var lQB=_oz(z,56,e,s,gg)
_(oPB,lQB)
cs.pop()
_(oNB,oPB)
cs.pop()
_(xIB,oNB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1681")
var aRB=_n('view')
_rz(z,aRB,'class',57,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:1710")
var tSB=_mz(z,'image',['class',58,'src',1],[],e,s,gg)
cs.pop()
_(aRB,tSB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1777")
var eTB=_n('view')
_rz(z,eTB,'class',60,e,s,gg)
var bUB=_oz(z,61,e,s,gg)
_(eTB,bUB)
cs.pop()
_(aRB,eTB)
cs.pop()
_(xIB,aRB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1829")
var oVB=_n('view')
_rz(z,oVB,'class',62,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:1858")
var xWB=_mz(z,'image',['class',63,'src',1],[],e,s,gg)
cs.pop()
_(oVB,xWB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1929")
var oXB=_n('view')
_rz(z,oXB,'class',65,e,s,gg)
var fYB=_oz(z,66,e,s,gg)
_(oXB,fYB)
cs.pop()
_(oVB,oXB)
cs.pop()
_(xIB,oVB)
cs.push("./pages/index/wealth.vue.wxml:view:1:1978")
var cZB=_n('view')
_rz(z,cZB,'class',67,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:2007")
var h1B=_mz(z,'image',['class',68,'src',1],[],e,s,gg)
cs.pop()
_(cZB,h1B)
cs.push("./pages/index/wealth.vue.wxml:view:1:2076")
var o2B=_n('view')
_rz(z,o2B,'class',70,e,s,gg)
var c3B=_oz(z,71,e,s,gg)
_(o2B,c3B)
cs.pop()
_(cZB,o2B)
cs.pop()
_(xIB,cZB)
cs.pop()
_(oB,xIB)
cs.push("./pages/index/wealth.vue.wxml:view:1:2132")
var o4B=_n('view')
_rz(z,o4B,'class',72,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:text:1:2169")
var l5B=_n('text')
_rz(z,l5B,'class',73,e,s,gg)
var a6B=_oz(z,74,e,s,gg)
_(l5B,a6B)
cs.pop()
_(o4B,l5B)
cs.push("./pages/index/wealth.vue.wxml:text:1:2220")
var t7B=_n('text')
_rz(z,t7B,'class',75,e,s,gg)
var e8B=_oz(z,76,e,s,gg)
_(t7B,e8B)
cs.pop()
_(o4B,t7B)
cs.push("./pages/index/wealth.vue.wxml:view:1:2266")
var b9B=_n('view')
_rz(z,b9B,'class',77,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2300")
var o0B=_n('view')
_rz(z,o0B,'class',78,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2333")
var xAC=_n('view')
_rz(z,xAC,'class',79,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:2362")
var oBC=_mz(z,'image',['class',80,'src',1],[],e,s,gg)
cs.pop()
_(xAC,oBC)
cs.pop()
_(o0B,xAC)
cs.push("./pages/index/wealth.vue.wxml:view:1:2437")
var fCC=_n('view')
_rz(z,fCC,'class',82,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2466")
var cDC=_n('view')
_rz(z,cDC,'class',83,e,s,gg)
var hEC=_oz(z,84,e,s,gg)
_(cDC,hEC)
cs.pop()
_(fCC,cDC)
cs.pop()
_(o0B,fCC)
cs.pop()
_(b9B,o0B)
cs.push("./pages/index/wealth.vue.wxml:view:1:2558")
var oFC=_n('view')
_rz(z,oFC,'class',85,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2591")
var cGC=_n('view')
_rz(z,cGC,'class',86,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:2620")
var oHC=_mz(z,'image',['class',87,'src',1],[],e,s,gg)
cs.pop()
_(cGC,oHC)
cs.pop()
_(oFC,cGC)
cs.push("./pages/index/wealth.vue.wxml:view:1:2697")
var lIC=_n('view')
_rz(z,lIC,'class',89,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2726")
var aJC=_n('view')
_rz(z,aJC,'class',90,e,s,gg)
var tKC=_oz(z,91,e,s,gg)
_(aJC,tKC)
cs.pop()
_(lIC,aJC)
cs.pop()
_(oFC,lIC)
cs.pop()
_(b9B,oFC)
cs.push("./pages/index/wealth.vue.wxml:view:1:2855")
var eLC=_n('view')
_rz(z,eLC,'class',92,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:2888")
var bMC=_n('view')
_rz(z,bMC,'class',93,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:2917")
var oNC=_mz(z,'image',['class',94,'src',1],[],e,s,gg)
cs.pop()
_(bMC,oNC)
cs.pop()
_(eLC,bMC)
cs.push("./pages/index/wealth.vue.wxml:view:1:2991")
var xOC=_n('view')
_rz(z,xOC,'class',96,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:view:1:3020")
var oPC=_n('view')
_rz(z,oPC,'class',97,e,s,gg)
var fQC=_oz(z,98,e,s,gg)
_(oPC,fQC)
cs.pop()
_(xOC,oPC)
cs.pop()
_(eLC,xOC)
cs.pop()
_(b9B,eLC)
cs.pop()
_(o4B,b9B)
cs.pop()
_(oB,o4B)
cs.push("./pages/index/wealth.vue.wxml:view:1:3147")
var cRC=_n('view')
_rz(z,cRC,'class',99,e,s,gg)
cs.push("./pages/index/wealth.vue.wxml:image:1:3180")
var hSC=_mz(z,'image',['mode',-1,'class',100,'src',1],[],e,s,gg)
cs.pop()
_(cRC,hSC)
cs.push("./pages/index/wealth.vue.wxml:text:1:3252")
var oTC=_n('text')
_rz(z,oTC,'class',102,e,s,gg)
var cUC=_oz(z,103,e,s,gg)
_(oTC,cUC)
cs.pop()
_(cRC,oTC)
cs.push("./pages/index/wealth.vue.wxml:view:1:3302")
var oVC=_n('view')
_rz(z,oVC,'class',104,e,s,gg)
var lWC=_oz(z,105,e,s,gg)
_(oVC,lWC)
cs.pop()
_(cRC,oVC)
cs.pop()
_(oB,cRC)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
cs.push("./pages/index/wealth.wxml:template:2:6")
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
cs.pop()
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

;var __pageFrameEndTime__ = Date.now();
if(!window.__uniAppViewReady__){
	window.__uniAppViewReady__ = true;
	document.dispatchEvent(new CustomEvent('uniAppViewReady'));
}

