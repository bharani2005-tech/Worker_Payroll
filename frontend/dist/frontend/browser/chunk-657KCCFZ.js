import{b as Zh,c as Jh}from"./chunk-YV2JKOYM.js";import"./chunk-UN7QIGNX.js";import"./chunk-NMXDW6XX.js";import"./chunk-6T4BJBG7.js";import{c as Yh}from"./chunk-KTOJBZAU.js";import{i as qh}from"./chunk-ADZCTPWR.js";import{Eb as ce,Fb as ge,Gb as Gh,Vb as Hh,Wb as Wh,Xb as Xh,a as fl,b as kh,dc as _e,e as Zr,lb as Vh}from"./chunk-34EBHWZD.js";var gu=0,Zl=1,_u=2;var vr=1,xu=2,Ls=3,ei=0,Xe=1,zn=2,kn=0,Ji=1,Jl=2,$l=3,Kl=4,vu=5;var yi=100,yu=101,Mu=102,Su=103,bu=104,Tu=200,Eu=201,wu=202,Au=203,ga=204,_a=205,Cu=206,Ru=207,Pu=208,Iu=209,Du=210,Lu=211,Nu=212,Uu=213,Fu=214,xa=0,va=1,ya=2,$i=3,Ma=4,Sa=5,ba=6,Ta=7,Ql=0,Ou=1,Bu=2,An=0,jl=1,tc=2,ec=3,nc=4,ic=5,sc=6,rc=7;var Ol=300,Ai=301,Ki=302,Ka=303,Qa=304,yr=306,Ea=1e3,Nn=1001,wa=1002,Le=1003,zu=1004;var Mr=1005;var Ue=1006,ja=1007;var Ci=1008;var $e=1009,ac=1010,oc=1011,Ns=1012,to=1013,Cn=1014,Rn=1015,Vn=1016,eo=1017,no=1018,Us=1020,lc=35902,cc=35899,hc=1021,uc=1022,vn=1023,Un=1026,Ri=1027,fc=1028,io=1029,Pi=1030,so=1031;var ro=1033,Sr=33776,br=33777,Tr=33778,Er=33779,ao=35840,oo=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37488,mo=37489,wr=37490,go=37491,_o=37808,xo=37809,vo=37810,yo=37811,Mo=37812,So=37813,bo=37814,To=37815,Eo=37816,wo=37817,Ao=37818,Co=37819,Ro=37820,Po=37821,Io=36492,Do=36494,Lo=36495,No=36283,Uo=36284,Ar=36285,Fo=36286;var tr=2300,Aa=2301,ma=2302,Bl=2303,zl=2400,kl=2401,Vl=2402;var ku=3200;var Oo=0,Vu=1,ii="",on="srgb",er="srgb-linear",nr="linear",Jt="srgb";var Yi=7680;var Gl=519,Gu=512,Hu=513,Wu=514,Bo=515,Xu=516,qu=517,zo=518,Yu=519,Hl=35044;var dc="300 es",wn=2e3,Es=2001;function Wd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zu(){let s=ir("canvas");return s.style.display="block",s}var $h={},ws=null;function pc(...s){let t="THREE."+s.shift();ws?ws("log",t,...s):console.log(t,...s)}function Ju(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=Ju(s);let t="THREE."+s.shift();if(ws)ws("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function At(...s){s=Ju(s);let t="THREE."+s.shift();if(ws)ws("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ca(...s){let t=s.join(" ");t in $h||($h[t]=!0,Tt(...s))}function $u(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ku={[xa]:va,[ya]:ba,[Ma]:Ta,[$i]:Sa,[va]:xa,[ba]:ya,[Ta]:Ma,[Sa]:$i},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var dl=Math.PI/180,Ra=180/Math.PI;function Cr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[s&255]+ze[s>>8&255]+ze[s>>16&255]+ze[s>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Wt(s,t,e){return Math.max(t,Math.min(e,s))}function qd(s,t){return(s%t+t)%t}function pl(s,t,e){return(1-e)*s+e*t}function Js(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var vc=class vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;var Yt=vc,On=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(f!==g||l!==u||c!==p||h!==_){let d=l*u+c*p+h*_+f*g;d<0&&(u=-u,p=-p,_=-_,g=-g,d=-d);let m=1-o;if(d<.9995){let y=Math.acos(d),S=Math.sin(y);m=Math.sin(m*y)/S,o=Math.sin(o*y)/S,l=l*m+u*o,c=c*m+p*o,h=h*m+_*o,f=f*m+g*o}else{l=l*m+u*o,c=c*m+p*o,h=h*m+_*o,f=f*m+g*o;let y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*f+l*p-c*u,t[e+1]=l*_+h*u+c*f-o*p,t[e+2]=c*_+h*p+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yc=class yc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ml.copy(this).projectOnVector(t),this.sub(ml)}reflect(t){return this.sub(ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;var V=yc,ml=new V,Kh=new On,Mc=class Mc{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],g=i[0],d=i[3],m=i[6],y=i[1],S=i[4],b=i[7],A=i[2],w=i[5],C=i[8];return r[0]=a*g+o*y+l*A,r[3]=a*d+o*S+l*w,r[6]=a*m+o*b+l*C,r[1]=c*g+h*y+f*A,r[4]=c*d+h*S+f*w,r[7]=c*m+h*b+f*C,r[2]=u*g+p*y+_*A,r[5]=u*d+p*S+_*w,r[8]=u*m+p*b+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,p=c*r-a*l,_=e*f+n*u+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gl.makeScale(t,e)),this}rotate(t){return this.premultiply(gl.makeRotation(-t)),this}translate(t,e){return this.premultiply(gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mc.prototype.isMatrix3=!0;var Pt=Mc,gl=new Pt,Qh=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jh=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){let s={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?nr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[er]:{primaries:t,whitePoint:n,transfer:nr,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Qh,fromXYZ:jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),s}var Ht=Yd();function ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fs,Pa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=ir("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,As=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Cr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_l(i[a].image)):r.push(_l(i[a]))}else r=_l(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function _l(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}var Jd=0,xl=new V,si=(()=>{class s extends Fn{constructor(e=s.DEFAULT_IMAGE,n=s.DEFAULT_MAPPING,i=Nn,r=Nn,a=Ue,o=Ci,l=vn,c=$e,h=s.DEFAULT_ANISOTROPY,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Cr(),this.name="",this.source=new As(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xl).x}get height(){return this.source.getSize(xl).y}get depth(){return this.source.getSize(xl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Tt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){Tt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ea:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ea:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return s.DEFAULT_IMAGE=null,s.DEFAULT_MAPPING=Ol,s.DEFAULT_ANISOTROPY=1,s})(),Sc=class Sc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],g=l[2],d=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+d)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,b=(p+1)/2,A=(m+1)/2,w=(h+u)/4,C=(f+g)/4,x=(_+d)/4;return S>b&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=C/n):b>A?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=w/i,r=x/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=x/r),this.set(n,i,r,e),this}let y=Math.sqrt((d-_)*(d-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(d-_)/y,this.y=(f-g)/y,this.z=(u-h)/y,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sc.prototype.isVector4=!0;var he=Sc,Ia=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new si(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new As(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Ia{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends si{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends si{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Le,this.minFilter=Le,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $a=class $a{constructor(t,e,n,i,r,a,o,l,c,h,f,u,p,_,g,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,p,_,g,d)}set(t,e,n,i,r,a,o,l,c,h,f,u,p,_,g,d){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=p,m[7]=_,m[11]=g,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,p=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,_=c*h,g=c*f;e[0]=u+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,_=c*h,g=c*f;e[0]=u-g*o,e[4]=-a*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,p=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+_,e[10]=u-g*f}else if(t.order==="XZY"){let u=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=a*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($d,t,Kd)}lookAt(t,e,n){let i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),di.crossVectors(n,rn),di.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),di.crossVectors(n,rn)),di.normalize(),Jr.crossVectors(rn,di),i[0]=di.x,i[4]=Jr.x,i[8]=rn.x,i[1]=di.y,i[5]=Jr.y,i[9]=rn.y,i[2]=di.z,i[6]=Jr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],g=n[6],d=n[10],m=n[14],y=n[3],S=n[7],b=n[11],A=n[15],w=i[0],C=i[4],x=i[8],T=i[12],P=i[1],R=i[5],U=i[9],G=i[13],W=i[2],D=i[6],B=i[10],F=i[14],$=i[3],j=i[7],ot=i[11],mt=i[15];return r[0]=a*w+o*P+l*W+c*$,r[4]=a*C+o*R+l*D+c*j,r[8]=a*x+o*U+l*B+c*ot,r[12]=a*T+o*G+l*F+c*mt,r[1]=h*w+f*P+u*W+p*$,r[5]=h*C+f*R+u*D+p*j,r[9]=h*x+f*U+u*B+p*ot,r[13]=h*T+f*G+u*F+p*mt,r[2]=_*w+g*P+d*W+m*$,r[6]=_*C+g*R+d*D+m*j,r[10]=_*x+g*U+d*B+m*ot,r[14]=_*T+g*G+d*F+m*mt,r[3]=y*w+S*P+b*W+A*$,r[7]=y*C+S*R+b*D+A*j,r[11]=y*x+S*U+b*B+A*ot,r[15]=y*T+S*G+b*F+A*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],_=t[3],g=t[7],d=t[11],m=t[15],y=l*p-c*u,S=o*p-c*f,b=o*u-l*f,A=a*p-c*h,w=a*u-l*h,C=a*f-o*h;return e*(g*y-d*S+m*b)-n*(_*y-d*A+m*w)+i*(_*S-g*A+m*C)-r*(_*b-g*w+d*C)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],_=t[12],g=t[13],d=t[14],m=t[15],y=e*o-n*a,S=e*l-i*a,b=e*c-r*a,A=n*l-i*o,w=n*c-r*o,C=i*c-r*l,x=h*g-f*_,T=h*d-u*_,P=h*m-p*_,R=f*d-u*g,U=f*m-p*g,G=u*m-p*d,W=y*G-S*U+b*R+A*P-w*T+C*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/W;return t[0]=(o*G-l*U+c*R)*D,t[1]=(i*U-n*G-r*R)*D,t[2]=(g*C-d*w+m*A)*D,t[3]=(u*w-f*C-p*A)*D,t[4]=(l*P-a*G-c*T)*D,t[5]=(e*G-i*P+r*T)*D,t[6]=(d*b-_*C-m*S)*D,t[7]=(h*C-u*b+p*S)*D,t[8]=(a*U-o*P+c*x)*D,t[9]=(n*P-e*U-r*x)*D,t[10]=(_*w-g*b+m*y)*D,t[11]=(f*b-h*w-p*y)*D,t[12]=(o*T-a*R-l*x)*D,t[13]=(e*R-n*T+i*x)*D,t[14]=(g*S-_*A-d*y)*D,t[15]=(h*A-f*S+u*y)*D,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,p=r*h,_=r*f,g=a*h,d=a*f,m=o*f,y=l*c,S=l*h,b=l*f,A=n.x,w=n.y,C=n.z;return i[0]=(1-(g+m))*A,i[1]=(p+b)*A,i[2]=(_-S)*A,i[3]=0,i[4]=(p-b)*w,i[5]=(1-(u+m))*w,i[6]=(d+y)*w,i[7]=0,i[8]=(_+S)*C,i[9]=(d-y)*C,i[10]=(1-(u+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ds.set(i[0],i[1],i[2]).length(),o=ds.set(i[4],i[5],i[6]).length(),l=ds.set(i[8],i[9],i[10]).length();r<0&&(a=-a),bn.copy(this);let c=1/a,h=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=wn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===wn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Es)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=wn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),p=-(n+i)/(n-i),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===wn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Es)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var ve=$a,ds=new V,bn=new ve,$d=new V(0,0,0),Kd=new V(1,1,1),di=new V,Jr=new V,rn=new V,tu=new ve,eu=new On,Cs=(()=>{class s{constructor(e=0,n=0,i=0,r=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,a=r[0],o=r[4],l=r[8],c=r[1],h=r[5],f=r[9],u=r[2],p=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,_),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return s.DEFAULT_ORDER="XYZ",s})(),rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qd=0,nu=new V,ps=new On,Jn=new ve,$r=new V,$s=new V,jd=new V,tp=new On,iu=new V(1,0,0),su=new V(0,1,0),ru=new V(0,0,1),au={type:"added"},ep={type:"removed"},ms={type:"childadded",child:null},vl={type:"childremoved",child:null},Ii=(()=>{class s extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new V,n=new Cs,i=new On,r=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ve},normalMatrix:{value:new Pt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,n){return ps.setFromAxisAngle(e,n),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ru,e)}translateOnAxis(e,n){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$r.copy(e):$r.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt($s,$r,this.up):Jn.lookAt($r,$s,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Jn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(au),ms.child=e,this.dispatchEvent(ms),ms.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ep),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(au),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,tp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*r,a[13]+=i-a[1]*n-a[5]*i-a[9]*r,a[14]+=r-a[2]*n-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>kh(fl({},l),{boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>fl({},l)),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,f=c.length;h<f;h++){let u=c[h];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(a(e.materials,this.material[c]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];r.animations.push(a(e.animations,c))}}if(n){let l=o(e.geometries),c=o(e.materials),h=o(e.textures),f=o(e.images),u=o(e.shapes),p=o(e.skeletons),_=o(e.animations),g=o(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(l){let c=[];for(let h in l){let f=l[h];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}}return s.DEFAULT_UP=new V(0,1,0),s.DEFAULT_MATRIX_AUTO_UPDATE=!0,s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,s})(),Zi=class extends Ii{constructor(){super(),this.isGroup=!0,this.type="Group"}},np={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let d=e.getJointPose(g,n),m=this._getHandJoint(c,g);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(np)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function yl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ht.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Ht.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ht.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Ht.workingColorSpace){if(t=qd(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=yl(a,r,t+1/3),this.g=yl(a,r,t),this.b=yl(a,r,t-1/3)}return Ht.colorSpaceToWorking(this,i),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){let n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return Ht.workingToColorSpace(ke.copy(this),t),Math.round(Wt(ke.r*255,0,255))*65536+Math.round(Wt(ke.g*255,0,255))*256+Math.round(Wt(ke.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ht.workingColorSpace){Ht.workingToColorSpace(ke.copy(this),e);let n=ke.r,i=ke.g,r=ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ht.workingColorSpace){return Ht.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=on){Ht.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,i=ke.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Kr);let n=pl(pi.h,Kr.h,e),i=pl(pi.s,Kr.s,e),r=pl(pi.l,Kr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new zt;zt.NAMES=Qu;var ar=class extends Ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new V,$n=new V,Ml=new V,Kn=new V,gs=new V,_s=new V,ou=new V,Sl=new V,bl=new V,Tl=new V,El=new he,wl=new he,Al=new he,vi=class s{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),$n.subVectors(n,e),Ml.subVectors(t,e);let a=Tn.dot(Tn),o=Tn.dot($n),l=Tn.dot(Ml),c=$n.dot($n),h=$n.dot(Ml),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return El.setScalar(0),wl.setScalar(0),Al.setScalar(0),El.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(Al,r.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),$n.subVectors(t,e),Tn.cross($n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;gs.subVectors(i,n),_s.subVectors(r,n),Sl.subVectors(t,n);let l=gs.dot(Sl),c=_s.dot(Sl);if(l<=0&&c<=0)return e.copy(n);bl.subVectors(t,i);let h=gs.dot(bl),f=_s.dot(bl);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gs,a);Tl.subVectors(t,r);let p=gs.dot(Tl),_=_s.dot(Tl);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(_s,o);let d=h*_-p*f;if(d<=0&&f-h>=0&&p-_>=0)return ou.subVectors(r,i),o=(f-h)/(f-h+(p-_)),e.copy(i).addScaledVector(ou,o);let m=1/(d+g+u);return a=g*m,o=u*m,e.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),jr.subVectors(this.max,Ks),xs.subVectors(t.a,Ks),vs.subVectors(t.b,Ks),ys.subVectors(t.c,Ks),mi.subVectors(vs,xs),gi.subVectors(ys,vs),Hi.subVectors(xs,ys);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Hi.z,Hi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Hi.z,0,-Hi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Hi.y,Hi.x,0];return!Cl(e,xs,vs,ys,jr)||(e=[1,0,0,0,1,0,0,0,1],!Cl(e,xs,vs,ys,jr))?!1:(ta.crossVectors(mi,gi),e=[ta.x,ta.y,ta.z],Cl(e,xs,vs,ys,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new V,new V,new V,new V,new V,new V,new V,new V],En=new V,Qr=new Mi,xs=new V,vs=new V,ys=new V,mi=new V,gi=new V,Hi=new V,Ks=new V,jr=new V,ta=new V,Wi=new V;function Cl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Wi.fromArray(s,r);let o=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var we=new V,ea=new Yt,ip=0,ln=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Js(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Js(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Js(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Js(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Js(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var or=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xn=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},sp=new Mi,Qs=new V,Rl=new V,Ps=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):sp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(Rl)),this.expandByPoint(Qs.copy(t.center).sub(Rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rp=0,_n=new ve,Pl=new Ii,Ms=new V,an=new Mi,js=new Mi,De=new V,Bn=class s extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?lr:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(an.min,js.min),an.expandByPoint(De),De.addVectors(an.max,js.max),an.expandByPoint(De)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(t,c),De.add(Ms)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new V,l[x]=new V;let c=new V,h=new V,f=new V,u=new Yt,p=new Yt,_=new Yt,g=new V,d=new V;function m(x,T,P){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,x),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,P),h.sub(c),f.sub(c),p.sub(u),_.sub(u);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(R),d.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(R),o[x].add(g),o[T].add(g),o[P].add(g),l[x].add(d),l[T].add(d),l[P].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,T=y.length;x<T;++x){let P=y[x],R=P.start,U=P.count;for(let G=R,W=R+U;G<W;G+=3)m(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let S=new V,b=new V,A=new V,w=new V;function C(x){A.fromBufferAttribute(i,x),w.copy(A);let T=o[x];S.copy(T),S.sub(A.multiplyScalar(A.dot(T))).normalize(),b.crossVectors(w,T);let R=b.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,R)}for(let x=0,T=y.length;x<T;++x){let P=y[x],R=P.start,U=P.count;for(let G=R,W=R+U;G<W;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new V,r=new V,a=new V,o=new V,l=new V,c=new V,h=new V,f=new V;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),g=t.getX(u+1),d=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,d),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let g=0,d=l.length;g<d;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let m=0;m<h;m++)u[_++]=c[p++]}return new ln(u,h,f)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ap=0,Si=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Cr(),this.name="",this.type="Material",this.blending=Ji,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var jn=new V,Il=new V,na=new V,_i=new V,Dl=new V,ia=new V,Ll=new V,La=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Il.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),_i.copy(this.origin).sub(Il);let r=t.distanceTo(e)*.5,a=-this.direction.dot(na),o=_i.dot(this.direction),l=-_i.dot(na),c=_i.lengthSq(),h=Math.abs(1-a*a),f,u,p,_;if(h>0)if(f=a*l-o,u=a*o-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let g=1/h;f*=g,u*=g,p=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Il).addScaledVector(na,u),p}intersectSphere(t,e){jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,i,r){Dl.subVectors(e,t),ia.subVectors(n,t),Ll.crossVectors(Dl,ia);let a=this.direction.dot(Ll),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,t);let l=o*this.direction.dot(ia.crossVectors(_i,ia));if(l<0)return null;let c=o*this.direction.dot(Dl.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(Ll);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cr=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new ve,Xi=new La,sa=new Ps,cu=new V,ra=new V,aa=new V,oa=new V,Nl=new V,la=new V,hu=new V,ca=new V,Je=class extends Ii{constructor(t=new Bn,e=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Nl.fromBufferAttribute(f,t),a?la.addScaledVector(Nl,h):la.addScaledVector(Nl.sub(e),h))}e.add(la)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(sa.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(sa,cu)===null||Xi.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let d=u[_],m=a[d.materialIndex],y=Math.max(d.start,p.start),S=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let b=y,A=S;b<A;b+=3){let w=o.getX(b),C=o.getX(b+1),x=o.getX(b+2);i=ha(this,m,t,n,c,h,f,w,C,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){let y=o.getX(d),S=o.getX(d+1),b=o.getX(d+2);i=ha(this,a,t,n,c,h,f,y,S,b),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){let d=u[_],m=a[d.materialIndex],y=Math.max(d.start,p.start),S=Math.min(l.count,Math.min(d.start+d.count,p.start+p.count));for(let b=y,A=S;b<A;b+=3){let w=b,C=b+1,x=b+2;i=ha(this,m,t,n,c,h,f,w,C,x),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=d.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){let y=d,S=d+1,b=d+2;i=ha(this,a,t,n,c,h,f,y,S,b),i&&(i.faceIndex=Math.floor(d/3),e.push(i))}}}};function op(s,t,e,n,i,r,a,o){let l;if(t.side===Xe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ei,o),l===null)return null;ca.copy(o),ca.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:s}}function ha(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ra),s.getVertexPosition(l,aa),s.getVertexPosition(c,oa);let h=op(s,t,e,n,ra,aa,oa,hu);if(h){let f=new V;vi.getBarycoord(hu,ra,aa,oa,f),i&&(h.uv=vi.getInterpolatedAttribute(i,o,l,c,f,new Yt)),r&&(h.uv1=vi.getInterpolatedAttribute(r,o,l,c,f,new Yt)),a&&(h.normal=vi.getInterpolatedAttribute(a,o,l,c,f,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};vi.getNormal(ra,aa,oa,u.normal),h.face=u,h.barycoord=f}return h}var Na=class extends si{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Le,h=Le,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=new V,lp=new V,cp=new Pt,Ln=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ul.subVectors(n,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ul),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cp.getNormalMatrix(t),i=this.coplanarPoint(Ul).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},qi=new Ps,hp=new Yt(.5,.5),ua=new V,Is=class{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],g=r[9],d=r[10],m=r[11],y=r[12],S=r[13],b=r[14],A=r[15];if(i[0].setComponents(c-a,p-h,m-_,A-y).normalize(),i[1].setComponents(c+a,p+h,m+_,A+y).normalize(),i[2].setComponents(c+o,p+f,m+g,A+S).normalize(),i[3].setComponents(c-o,p-f,m-g,A-S).normalize(),n)i[4].setComponents(l,u,d,b).normalize(),i[5].setComponents(c-l,p-u,m-d,A-b).normalize();else if(i[4].setComponents(c-l,p-u,m-d,A-b).normalize(),e===wn)i[5].setComponents(c+l,p+u,m+d,A+b).normalize();else if(e===Es)i[5].setComponents(l,u,d,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){qi.center.set(0,0,0);let e=hp.distanceTo(t.center);return qi.radius=.7071067811865476+e,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ua.x=i.normal.x>0?t.max.x:t.min.x,ua.y=i.normal.y>0?t.max.y:t.min.y,ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hr=class extends si{constructor(t=[],e=Ai,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ni=class extends si{constructor(t,e,n=Cn,i,r,a,o=Le,l=Le,c,h=Un,f=1){if(h!==Un&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new As(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ua=class extends ni{constructor(t,e=Cn,n=Ai,i,r,a=Le,o=Le,l,c=Un){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ur=class extends si{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bi=class s extends Bn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(h,3)),this.setAttribute("uv",new xn(f,2));function _(g,d,m,y,S,b,A,w,C,x,T){let P=b/C,R=A/x,U=b/2,G=A/2,W=w/2,D=C+1,B=x+1,F=0,$=0,j=new V;for(let ot=0;ot<B;ot++){let mt=ot*R-G;for(let vt=0;vt<D;vt++){let kt=vt*P-U;j[g]=kt*y,j[d]=mt*S,j[m]=W,c.push(j.x,j.y,j.z),j[g]=0,j[d]=0,j[m]=w>0?1:-1,h.push(j.x,j.y,j.z),f.push(vt/C),f.push(1-ot/x),F+=1}}for(let ot=0;ot<x;ot++)for(let mt=0;mt<C;mt++){let vt=u+mt+D*ot,kt=u+mt+D*(ot+1),Ot=u+(mt+1)+D*(ot+1),Et=u+(mt+1)+D*ot;l.push(vt,kt,Et),l.push(kt,Ot,Et),$+=6}o.addGroup(p,$,T),p+=$,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fr=class s extends Bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,p=[],_=[],g=[],d=[];for(let m=0;m<h;m++){let y=m*u-a;for(let S=0;S<c;S++){let b=S*f-r;_.push(b,-y,0),g.push(0,0,1),d.push(S/o),d.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let S=y+c*m,b=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;p.push(S,b,w),p.push(b,A,w)}this.setIndex(p),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};function Qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(uu(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(uu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ve(s){let t={};for(let e=0;e<s.length;e++){let n=Qi(s[e]);for(let i in n)t[i]=n[i]}return t}function uu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function up(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ht.workingColorSpace}var ju={clone:Qi,merge:Ve},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fa=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oa=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dr=class extends Oa{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ba=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},za=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fa(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}var Ti=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ka=class extends Ti{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=t,o=2*e-n;break;case Vl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=t,l=2*n-e;break;case Vl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(i-e),g=_*_,d=g*_,m=-u*d+2*u*g-u*_,y=(1+u)*d+(-1.5-2*u)*g+(-.5+u)*_+1,S=(-1-p)*d+(1.5+p)*g+.5*_,b=p*d-p*g;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+y*a[c+A]+S*a[l+A]+b*a[f+A];return r}},Va=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ga=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ha=class extends Ti{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.settings||this.DefaultSettings_,f=h.inTangents,u=h.outTangents;if(!f||!u){let g=(n-e)/(i-e),d=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*d+a[l+m]*g;return r}let p=o*2,_=t-1;for(let g=0;g!==o;++g){let d=a[c+g],m=a[l+g],y=_*p+g*2,S=u[y],b=u[y+1],A=t*p+g*2,w=f[A],C=f[A+1],x=(n-e)/(i-e),T,P,R,U,G;for(let W=0;W<8;W++){T=x*x,P=T*x,R=1-x,U=R*R,G=U*R;let B=G*e+3*U*x*S+3*R*T*w+P*i-n;if(Math.abs(B)<1e-10)break;let F=3*U*(S-e)+6*R*x*(w-S)+3*T*(i-w);if(Math.abs(F)<1e-10)break;x=x-B/F,x=Math.max(0,Math.min(1,x))}r[g]=G*d+3*U*x*b+3*R*T*C+P*m}return r}},un=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fa(e,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fa(t.times,Array),values:fa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Va(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ha(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(At("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(At("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){At("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){At("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Xd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){At("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[u+_]||g!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[f+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Aa;var Ei=class extends un{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=tr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends un{constructor(t,e,n,i){super(t,e,n,i)}};Wa.prototype.ValueTypeName="color";var Xa=class extends un{constructor(t,e,n,i){super(t,e,n,i)}};Xa.prototype.ValueTypeName="number";var qa=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},pr=class extends un{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}};pr.prototype.ValueTypeName="quaternion";pr.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends un{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=tr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends un{constructor(t,e,n,i){super(t,e,n,i)}};Ya.prototype.ValueTypeName="vector";var mr=class extends Ii{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Fl=new ve,fu=new V,du=new V,Wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),du.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(du),e.updateMatrixWorld(),Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Es||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},da=new V,pa=new On,Dn=new V,gr=class extends Ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(da,pa,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(da,pa,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(da,pa,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new V,pu=new Yt,mu=new Yt,Ne=class extends gr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xl=class extends Wl{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},Ds=class extends mr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},_r=class extends gr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var xr=class extends mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ss=-90,bs=1,Za=class extends Ii{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Ss,bs,t,e);i.layers=this.layers,this.add(i);let r=new Ne(Ss,bs,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Ss,bs,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Ss,bs,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let d=!1;t.isWebGLRenderer===!0?d=t.state.buffers.depth.getReversed():d=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),d&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ja=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gc="\\[\\]\\.:\\/",pp=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",mp="[^"+gc.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",_c),_p=/(WCOD+)?/.source.replace("WCOD",mp),xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),yp=new RegExp("^"+gp+_p+xp+vp+"$"),Mp=["material","materials","bones","map"],ql=class{constructor(t,e,n){let i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=(()=>{class s{constructor(e,n,i){this.path=n,this.parsedPath=i||s.parseTrackName(n),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,n,i):new s(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){let n=yp.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=i.nodeName.substring(r+1);Mp.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let l=a[o];if(l.name===n||l.uuid===n)return l;let c=i(l.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,a=i.length;r!==a;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,a=n.propertyIndex;if(e||(e=s.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=n.objectIndex;switch(i){case"materials":if(!e.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){At("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){At("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===h){h=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){At("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){At("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){At("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){At("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let o=e[r];if(o===void 0){let h=n.nodeName;At("PropertyBinding: Trying to update property for track: "+h+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){At("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return s.Composite=ql,s})();xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kv=new Float32Array(1);var bc=class bc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};bc.prototype.isMatrix2=!0;var Yl=bc;function xc(s,t,e,n){let i=Sp(n);switch(e){case hc:return s*t;case fc:return s*t/i.components*i.byteLength;case io:return s*t/i.components*i.byteLength;case Pi:return s*t*2/i.components*i.byteLength;case so:return s*t*2/i.components*i.byteLength;case uc:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case ro:return s*t*4/i.components*i.byteLength;case Sr:case br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case oo:case co:return Math.max(s,16)*Math.max(t,8)/4;case ao:case lo:return Math.max(s,8)*Math.max(t,8)/2;case ho:case uo:case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:case wr:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Io:case Do:case Lo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case No:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ar:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sp(s){switch(s){case $e:case ac:return{byteLength:1,components:1};case Ns:case oc:case Vn:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case Cn:case to:case Rn:return{byteLength:4,components:1};case lc:case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function bf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Tp(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let g=f[p];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,em="gl_FragColor = linearToOutputTexel( gl_FragColor );",nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,im=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_m=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Am=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Um=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ig=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ng=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$g=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:Ep,alphahash_pars_fragment:wp,alphamap_fragment:Ap,alphamap_pars_fragment:Cp,alphatest_fragment:Rp,alphatest_pars_fragment:Pp,aomap_fragment:Ip,aomap_pars_fragment:Dp,batching_pars_vertex:Lp,batching_vertex:Np,begin_vertex:Up,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Hp,color_fragment:Wp,color_pars_fragment:Xp,color_pars_vertex:qp,color_vertex:Yp,common:Zp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Kp,displacementmap_vertex:Qp,emissivemap_fragment:jp,emissivemap_pars_fragment:tm,colorspace_fragment:em,colorspace_pars_fragment:nm,envmap_fragment:im,envmap_common_pars_fragment:sm,envmap_pars_fragment:rm,envmap_pars_vertex:am,envmap_physical_pars_fragment:_m,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:fm,lightmap_pars_fragment:dm,lights_lambert_fragment:pm,lights_lambert_pars_fragment:mm,lights_pars_begin:gm,lights_toon_fragment:xm,lights_toon_pars_fragment:vm,lights_phong_fragment:ym,lights_phong_pars_fragment:Mm,lights_physical_fragment:Sm,lights_physical_pars_fragment:bm,lights_fragment_begin:Tm,lights_fragment_maps:Em,lights_fragment_end:wm,lightprobes_pars_fragment:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Lm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:km,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Hm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:qm,normal_vertex:Ym,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:$m,clearcoat_pars_fragment:Km,iridescence_pars_fragment:Qm,opaque_fragment:jm,packing:tg,premultiplied_alpha_fragment:eg,project_vertex:ng,dithering_fragment:ig,dithering_pars_fragment:sg,roughnessmap_fragment:rg,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:og,shadowmap_pars_vertex:lg,shadowmap_vertex:cg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:dg,skinnormal_vertex:pg,specularmap_fragment:mg,specularmap_pars_fragment:gg,tonemapping_fragment:_g,tonemapping_pars_fragment:xg,transmission_fragment:vg,transmission_pars_fragment:yg,uv_pars_fragment:Mg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:Tg,background_vert:Eg,background_frag:wg,backgroundCube_vert:Ag,backgroundCube_frag:Cg,cube_vert:Rg,cube_frag:Pg,depth_vert:Ig,depth_frag:Dg,distance_vert:Lg,distance_frag:Ng,equirect_vert:Ug,equirect_frag:Fg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:kg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Hg,meshmatcap_frag:Wg,meshnormal_vert:Xg,meshnormal_frag:qg,meshphong_vert:Yg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:$g,meshtoon_vert:Kg,meshtoon_frag:Qg,points_vert:jg,points_frag:t_,shadow_vert:e_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},ct={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ve([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ve([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ve([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ve([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ve([ct.points,ct.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ve([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ve([ct.common,ct.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ve([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ve([ct.sprite,ct.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Ve([ct.common,ct.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Ve([ct.lights,ct.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Hn.physical={uniforms:Ve([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var ko={r:0,b:0,g:0},r_=new ve,Tf=new Pt;Tf.set(-1,0,0,0,1,0,0,0,1);function a_(s,t,e,n,i,r){let a=new zt(0),o=i===!0?0:1,l,c,h=null,f=0,u=null;function p(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let b=y.backgroundBlurriness>0;S=t.get(S,b)}return S}function _(y){let S=!1,b=p(y);b===null?d(a,o):b&&b.isColor&&(d(b,1),S=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,S){let b=p(S);b&&(b.isCubeTexture||b.mapping===yr)?(c===void 0&&(c=new Je(new bi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Qi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tf),c.material.toneMapped=Ht.getTransfer(b.colorSpace)!==Jt,(h!==b||f!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Je(new fr(2,2),new hn({name:"BackgroundMaterial",uniforms:Qi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ht.getTransfer(b.colorSpace)!==Jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,u=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,S){y.getRGB(ko,mc(s)),e.buffers.color.setClear(ko.r,ko.g,ko.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,d(a,o)},render:_,addToRenderList:g,dispose:m}}function o_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(R,U,G,W,D){let B=!1,F=f(R,W,G,U);r!==F&&(r=F,c(r.object)),B=p(R,W,G,D),B&&_(R,W,G,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,b(R,U,G,W),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function f(R,U,G,W){let D=W.wireframe===!0,B=n[U.id];B===void 0&&(B={},n[U.id]=B);let F=R.isInstancedMesh===!0?R.id:0,$=B[F];$===void 0&&($={},B[F]=$);let j=$[G.id];j===void 0&&(j={},$[G.id]=j);let ot=j[D];return ot===void 0&&(ot=u(l()),j[D]=ot),ot}function u(R){let U=[],G=[],W=[];for(let D=0;D<e;D++)U[D]=0,G[D]=0,W[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:W,object:R,attributes:{},index:null}}function p(R,U,G,W){let D=r.attributes,B=U.attributes,F=0,$=G.getAttributes();for(let j in $)if($[j].location>=0){let mt=D[j],vt=B[j];if(vt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),mt===void 0||mt.attribute!==vt||vt&&mt.data!==vt.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function _(R,U,G,W){let D={},B=U.attributes,F=0,$=G.getAttributes();for(let j in $)if($[j].location>=0){let mt=B[j];mt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor));let vt={};vt.attribute=mt,mt&&mt.data&&(vt.data=mt.data),D[j]=vt,F++}r.attributes=D,r.attributesNum=F,r.index=W}function g(){let R=r.newAttributes;for(let U=0,G=R.length;U<G;U++)R[U]=0}function d(R){m(R,0)}function m(R,U){let G=r.newAttributes,W=r.enabledAttributes,D=r.attributeDivisors;G[R]=1,W[R]===0&&(s.enableVertexAttribArray(R),W[R]=1),D[R]!==U&&(s.vertexAttribDivisor(R,U),D[R]=U)}function y(){let R=r.newAttributes,U=r.enabledAttributes;for(let G=0,W=U.length;G<W;G++)U[G]!==R[G]&&(s.disableVertexAttribArray(G),U[G]=0)}function S(R,U,G,W,D,B,F){F===!0?s.vertexAttribIPointer(R,U,G,D,B):s.vertexAttribPointer(R,U,G,W,D,B)}function b(R,U,G,W){g();let D=W.attributes,B=G.getAttributes(),F=U.defaultAttributeValues;for(let $ in B){let j=B[$];if(j.location>=0){let ot=D[$];if(ot===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),ot!==void 0){let mt=ot.normalized,vt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;let Ot=kt.buffer,Et=kt.type,J=kt.bytesPerElement,ft=Et===s.INT||Et===s.UNSIGNED_INT||ot.gpuType===to;if(ot.isInterleavedBufferAttribute){let it=ot.data,wt=it.stride,It=ot.offset;if(it.isInstancedInterleavedBuffer){for(let Ct=0;Ct<j.locationSize;Ct++)m(j.location+Ct,it.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ct=0;Ct<j.locationSize;Ct++)d(j.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let Ct=0;Ct<j.locationSize;Ct++)S(j.location+Ct,vt/j.locationSize,Et,mt,wt*J,(It+vt/j.locationSize*Ct)*J,ft)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<j.locationSize;it++)m(j.location+it,ot.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<j.locationSize;it++)d(j.location+it);s.bindBuffer(s.ARRAY_BUFFER,Ot);for(let it=0;it<j.locationSize;it++)S(j.location+it,vt/j.locationSize,Et,mt,vt*J,vt/j.locationSize*it*J,ft)}}else if(F!==void 0){let mt=F[$];if(mt!==void 0)switch(mt.length){case 2:s.vertexAttrib2fv(j.location,mt);break;case 3:s.vertexAttrib3fv(j.location,mt);break;case 4:s.vertexAttrib4fv(j.location,mt);break;default:s.vertexAttrib1fv(j.location,mt)}}}}y()}function A(){T();for(let R in n){let U=n[R];for(let G in U){let W=U[G];for(let D in W){let B=W[D];for(let F in B)h(B[F].object),delete B[F];delete W[D]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let U=n[R.id];for(let G in U){let W=U[G];for(let D in W){let B=W[D];for(let F in B)h(B[F].object),delete B[F];delete W[D]}}delete n[R.id]}function C(R){for(let U in n){let G=n[U];for(let W in G){let D=G[W];if(D[R.id]===void 0)continue;let B=D[R.id];for(let F in B)h(B[F].object),delete B[F];delete D[R.id]}}}function x(R){for(let U in n){let G=n[U],W=R.isInstancedMesh===!0?R.id:0,D=G[W];if(D!==void 0){for(let B in D){let F=D[B];for(let $ in F)h(F[$].object),delete F[$];delete D[B]}delete G[W],Object.keys(G).length===0&&delete n[U]}}}function T(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:d,disableUnusedAttributes:y}}function l_(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==$e&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!x)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:A,samples:w}}function h_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Ln,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||i;return i=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,m=s.get(f);if(!i||_===null||_.length===0||r&&!d)r?h(null):c();else{let y=r?0:n,S=y*4,b=m.clippingState||null;l.value=b,b=h(_,u,S,p);for(let A=0;A!==S;++A)b[A]=e[A];m.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,_){let g=f!==null?f.length:0,d=null;if(g!==0){if(d=l.value,_!==!0||d===null){let m=p+g*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let S=0,b=p;S!==g;++S,b+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(d,b),d[b+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,d}}var Di=4,tf=[.125,.215,.35,.446,.526,.582],ji=20,u_=256,Rr=new _r,ef=new zt,Tc=null,Ec=0,wc=0,Ac=!1,f_=new V,Go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=f_}=r;Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Tc,Ec,wc),this._renderer.xr.enabled=Ac,t.scissorTest=!1,Fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Vn,format:vn,colorSpace:er,depthBuffer:!1},i=nf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d_(r)),this._blurMaterial=m_(r,t,e),this._ggxMaterial=p_(r,t,e)}return i}_compileMaterial(t){let e=new Je(new Bn,t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,i,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(ef),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new bi,new cr({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,d=g.material,m=!1,y=t.background;y?y.isColor&&(d.color.copy(y),t.background=null,m=!0):(d.color.copy(ef),m=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let A=this._cubeSize;Fs(i,b*A,S>2?A:0,A,A),f.setRenderTarget(i),m&&f.render(g,l),f.render(t,l)}f.toneMapping=p,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ai||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,p=f*u,{_lodMax:_}=this,g=this._sizeLods[n],d=3*g*(n>_-Di?n-_+Di:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Fs(r,d,m,3*g,2*g),i.setRenderTarget(r),i.render(o,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Fs(t,d,m,3*g,2*g),i.setRenderTarget(t),i.render(o,Rr)}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[i];f.material=c;let u=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ji-1),g=r/_,d=isFinite(r)?1+Math.floor(h*g):ji;d>ji&&Tt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ji}`);let m=[],y=0;for(let C=0;C<ji;++C){let x=C/g,T=Math.exp(-x*x/2);m.push(T),C===0?y+=T:C<d&&(y+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;let b=this._sizeLods[i],A=3*b*(i>S-Di?i-S+Di:0),w=4*(this._cubeSize-b);Fs(e,A,w,3*b,2*b),l.setRenderTarget(e),l.render(f,Rr)}};function d_(s){let t=[],e=[],n=[],i=s,r=s-Di+1+tf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Di?l=tf[a-s+Di-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,g=3,d=2,m=1,y=new Float32Array(g*_*p),S=new Float32Array(d*_*p),b=new Float32Array(m*_*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,x=w>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];y.set(T,g*_*w),S.set(u,d*_*w);let P=[w,w,w,w,w,w];b.set(P,m*_*w)}let A=new Bn;A.setAttribute("position",new ln(y,g)),A.setAttribute("uv",new ln(S,d)),A.setAttribute("faceIndex",new ln(b,m)),n.push(new Je(A,null)),i>Di&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function nf(s,t,e){let n=new cn(s,t,e);return n.texture.mapping=yr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function p_(s,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:u_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function m_(s,t,e){let n=new Float32Array(ji),i=new V(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sf(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ho=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bi(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:kn});r.uniforms.tEquirect.value=e;let a=new Je(i,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Ue),new Za(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function g_(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ka||p===Qa)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let g=new Ho(_.height);return g.fromEquirectangularTexture(s,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,_=p===Ka||p===Qa,g=p===Ai||p===Ki;if(_||g){let d=e.get(u),m=d!==void 0?d.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Go(s)),d=_?n.fromEquirectangular(u,d):n.fromCubemap(u,d),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),d.texture;if(d!==void 0)return d.texture;{let y=u.image;return _&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new Go(s)),d=_?n.fromEquirectangular(u):n.fromCubemap(u),d.texture.pmremVersion=u.pmremVersion,e.set(u,d),u.addEventListener("dispose",h),d.texture):null}}}return u}function o(u,p){return p===Ka?u.mapping=Ai:p===Qa&&(u.mapping=Ki),u}function l(u){let p=0,_=6;for(let g=0;g<_;g++)u[g]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function __(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ca("WebGLRenderer: "+n+" extension not supported."),i}}}function x_(s,t,e,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete i[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,_=f.attributes.position,g=0;if(_===void 0)return;if(p!==null){let y=p.array;g=p.version;for(let S=0,b=y.length;S<b;S+=3){let A=y[S+0],w=y[S+1],C=y[S+2];u.push(A,w,w,C,C,A)}}else{let y=_.array;g=_.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let A=S+0,w=S+1,C=S+2;u.push(A,w,w,C,C,A)}}let d=new(_.count>=65535?lr:or)(u,1);d.version=g;let m=r.get(f);m&&t.remove(m),r.set(f,d)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function v_(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,p){p!==0&&(s.drawElementsInstanced(n,u,r,f*a,p),e.update(u,n,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let g=0;for(let d=0;d<p;d++)g+=u[d];e.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function y_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:At("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function M_(s,t,e){let n=new WeakMap,i=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let P=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],b=0;_===!0&&(b=1),g===!0&&(b=2),d===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*w*4*f),x=new sr(C,A,w,f);x.type=Rn,x.needsUpdate=!0;let T=b*4;for(let R=0;R<f;R++){let U=m[R],G=y[R],W=S[R],D=A*w*4*R;for(let B=0;B<U.count;B++){let F=B*T;_===!0&&(i.fromBufferAttribute(U,B),C[D+F+0]=i.x,C[D+F+1]=i.y,C[D+F+2]=i.z,C[D+F+3]=0),g===!0&&(i.fromBufferAttribute(G,B),C[D+F+4]=i.x,C[D+F+5]=i.y,C[D+F+6]=i.z,C[D+F+7]=0),d===!0&&(i.fromBufferAttribute(W,B),C[D+F+8]=i.x,C[D+F+9]=i.y,C[D+F+10]=i.z,C[D+F+11]=W.itemSize===4?i.w:1)}}u={count:f,texture:x,size:new Yt(A,w)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];let g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function S_(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var b_={[jl]:"LINEAR_TONE_MAPPING",[tc]:"REINHARD_TONE_MAPPING",[ec]:"CINEON_TONE_MAPPING",[nc]:"ACES_FILMIC_TONE_MAPPING",[sc]:"AGX_TONE_MAPPING",[rc]:"NEUTRAL_TONE_MAPPING",[ic]:"CUSTOM_TONE_MAPPING"};function T_(s,t,e,n,i){let r=new cn(t,e,{type:s,depthBuffer:n,stencilBuffer:i,depthTexture:n?new ni(t,e):void 0}),a=new cn(t,e,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),o=new Bn;o.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xn([0,2,0,0,2,0],2));let l=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Je(o,l),h=new _r(-1,1,1,-1,0,1),f=null,u=null,p=!1,_,g=null,d=[],m=!1;this.setSize=function(y,S){r.setSize(y,S),a.setSize(y,S);for(let b=0;b<d.length;b++){let A=d[b];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){d=y,m=d.length>0&&d[0].isRenderPass===!0;let S=r.width,b=r.height;for(let A=0;A<d.length;A++){let w=d[A];w.setSize&&w.setSize(S,b)}},this.begin=function(y,S){if(p||y.toneMapping===An&&d.length===0)return!1;if(g=S,S!==null){let b=S.width,A=S.height;(r.width!==b||r.height!==A)&&this.setSize(b,A)}return m===!1&&y.setRenderTarget(r),_=y.toneMapping,y.toneMapping=An,!0},this.hasRenderPass=function(){return m},this.end=function(y,S){y.toneMapping=_,p=!0;let b=r,A=a;for(let w=0;w<d.length;w++){let C=d[w];if(C.enabled!==!1&&(C.render(y,A,b,S),C.needsSwap!==!1)){let x=b;b=A,A=x}}if(f!==y.outputColorSpace||u!==y.toneMapping){f=y.outputColorSpace,u=y.toneMapping,l.defines={},Ht.getTransfer(f)===Jt&&(l.defines.SRGB_TRANSFER="");let w=b_[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(g),y.render(c,h),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Ef=new si,Pc=new ni(1,1),wf=new sr,Af=new Da,Cf=new hr,af=[],of=[],lf=new Float32Array(16),cf=new Float32Array(9),hf=new Float32Array(4);function Bs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=af[i];if(r===void 0&&(r=new Float32Array(i),af[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qo(s,t){let e=of[t];e===void 0&&(e=new Int32Array(t),of[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function E_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function w_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function A_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function C_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function R_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;hf.set(n),s.uniformMatrix2fv(this.addr,!1,hf),Pe(e,n)}}function P_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;cf.set(n),s.uniformMatrix3fv(this.addr,!1,cf),Pe(e,n)}}function I_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;lf.set(n),s.uniformMatrix4fv(this.addr,!1,lf),Pe(e,n)}}function D_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function L_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function N_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function U_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function F_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function O_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function B_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function z_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function k_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Pc.compareFunction=e.isReversedDepthBuffer()?zo:Bo,r=Pc):r=Ef,e.setTexture2D(t||r,i)}function V_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Af,i)}function G_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cf,i)}function H_(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||wf,i)}function W_(s){switch(s){case 5126:return E_;case 35664:return w_;case 35665:return A_;case 35666:return C_;case 35674:return R_;case 35675:return P_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return L_;case 35668:case 35672:return N_;case 35669:case 35673:return U_;case 5125:return F_;case 36294:return O_;case 36295:return B_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return H_}}function X_(s,t){s.uniform1fv(this.addr,t)}function q_(s,t){let e=Bs(t,this.size,2);s.uniform2fv(this.addr,e)}function Y_(s,t){let e=Bs(t,this.size,3);s.uniform3fv(this.addr,e)}function Z_(s,t){let e=Bs(t,this.size,4);s.uniform4fv(this.addr,e)}function J_(s,t){let e=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function $_(s,t){let e=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function K_(s,t){let e=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Q_(s,t){s.uniform1iv(this.addr,t)}function j_(s,t){s.uniform2iv(this.addr,t)}function t0(s,t){s.uniform3iv(this.addr,t)}function e0(s,t){s.uniform4iv(this.addr,t)}function n0(s,t){s.uniform1uiv(this.addr,t)}function i0(s,t){s.uniform2uiv(this.addr,t)}function s0(s,t){s.uniform3uiv(this.addr,t)}function r0(s,t){s.uniform4uiv(this.addr,t)}function a0(s,t,e){let n=this.cache,i=t.length,r=qo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Pc:a=Ef;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function o0(s,t,e){let n=this.cache,i=t.length,r=qo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Af,r[a])}function l0(s,t,e){let n=this.cache,i=t.length,r=qo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Cf,r[a])}function c0(s,t,e){let n=this.cache,i=t.length,r=qo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||wf,r[a])}function h0(s){switch(s){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return j_;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}var Ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=W_(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}},Lc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function uf(s,t){s.seq.push(t),s.map[t.id]=t}function u0(s,t,e){let n=s.name,i=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uf(e,c===void 0?new Ic(o,s,t):new Dc(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Lc(o),uf(e,f)),e=f}}}var Os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);u0(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function ff(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var f0=37297,d0=0;function p0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var df=new Pt;function m0(s){Ht._getMatrix(df,Ht.workingColorSpace,s);let t=`mat3( ${df.elements.map(e=>e.toFixed(4))} )`;switch(Ht.getTransfer(s)){case nr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function pf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+p0(s.getShaderSource(t),o)}else return r}function g0(s,t){let e=m0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var _0={[jl]:"Linear",[tc]:"Reinhard",[ec]:"Cineon",[nc]:"ACESFilmic",[sc]:"AgX",[rc]:"Neutral",[ic]:"Custom"};function x0(s,t){let e=_0[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Vo=new V;function v0(){Ht.getLuminanceCoefficients(Vo);let s=Vo.x.toFixed(4),t=Vo.y.toFixed(4),e=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function M0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ir(s){return s!==""}function mf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(b0,E0)}var T0=new Map;function E0(s,t){let e=Ut[t];if(e===void 0){let n=T0.get(t);if(n!==void 0)e=Ut[n],Tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var w0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(s){return s.replace(w0,A0)}function A0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C0={[vr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function R0(s){return C0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P0={[Ai]:"ENVMAP_TYPE_CUBE",[Ki]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE_UV"};function I0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":P0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var D0={[Ki]:"ENVMAP_MODE_REFRACTION"};function L0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":D0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var N0={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function U0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N0[s.combine]||"ENVMAP_BLENDING_NONE"}function F0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function O0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=R0(e),c=I0(e),h=L0(e),f=U0(e),u=F0(e),p=y0(e),_=M0(r),g=i.createProgram(),d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ir).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ir).join(`
`),m.length>0&&(m+=`
`)):(d=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),m=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Ut.tonemapping_pars_fragment:"",e.toneMapping!==An?x0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,g0("linearToOutputTexel",e.outputColorSpace),v0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Nc(a),a=mf(a,e),a=gf(a,e),o=Nc(o),o=mf(o,e),o=gf(o,e),a=_f(a),o=_f(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=y+d+a,b=y+m+o,A=ff(i,i.VERTEX_SHADER,S),w=ff(i,i.FRAGMENT_SHADER,b);i.attachShader(g,A),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(R){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(g)||"",G=i.getShaderInfoLog(A)||"",W=i.getShaderInfoLog(w)||"",D=U.trim(),B=G.trim(),F=W.trim(),$=!0,j=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,w);else{let ot=pf(i,A,"vertex"),mt=pf(i,w,"fragment");At("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+ot+`
`+mt)}else D!==""?Tt("WebGLProgram: Program Info Log:",D):(B===""||F==="")&&(j=!1);j&&(R.diagnostics={runnable:$,programLog:D,vertexShader:{log:B,prefix:d},fragmentShader:{log:F,prefix:m}})}i.deleteShader(A),i.deleteShader(w),x=new Os(i,g),T=S0(i,g)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,f0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}var B0=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Fc(t),e.set(t,n)),n}},Fc=class{constructor(t){this.id=B0++,this.code=t,this.usedTimes=0}};function z0(s){return s===Pi||s===wr||s===Ar}function k0(s,t,e,n,i,r){let a=new rr,o=new Uc,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,T,P,R,U,G){let W=R.fog,D=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=t.get(x.envMap||B,F),j=$&&$.mapping===yr?$.image.height:null,ot=p[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Tt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let mt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,vt=mt!==void 0?mt.length:0,kt=0;D.morphAttributes.position!==void 0&&(kt=1),D.morphAttributes.normal!==void 0&&(kt=2),D.morphAttributes.color!==void 0&&(kt=3);let Ot,Et,J,ft;if(ot){let Dt=Hn[ot];Ot=Dt.vertexShader,Et=Dt.fragmentShader}else Ot=x.vertexShader,Et=x.fragmentShader,o.update(x),J=o.getVertexShaderID(x),ft=o.getFragmentShaderID(x);let it=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),It=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,oe=!!x.map,Vt=!!x.matcap,$t=!!$,re=!!x.aoMap,Bt=!!x.lightMap,Ae=!!x.bumpMap,le=!!x.normalMap,nn=!!x.displacementMap,L=!!x.emissiveMap,Ce=!!x.metalnessMap,Gt=!!x.roughnessMap,ie=x.anisotropy>0,lt=x.clearcoat>0,pe=x.dispersion>0,E=x.iridescence>0,v=x.sheen>0,O=x.transmission>0,Y=ie&&!!x.anisotropyMap,Q=lt&&!!x.clearcoatMap,tt=lt&&!!x.clearcoatNormalMap,at=lt&&!!x.clearcoatRoughnessMap,X=E&&!!x.iridescenceMap,Z=E&&!!x.iridescenceThicknessMap,dt=v&&!!x.sheenColorMap,_t=v&&!!x.sheenRoughnessMap,st=!!x.specularMap,et=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Nt=O&&!!x.transmissionMap,Zt=O&&!!x.thicknessMap,I=!!x.gradientMap,nt=!!x.alphaMap,q=x.alphaTest>0,pt=!!x.alphaHash,rt=!!x.extensions,K=An;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(K=s.toneMapping);let Mt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Et,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&U._colorsTexture!==null,instancing:It,instancingColor:It&&U.instanceColor!==null,instancingMorph:It&&U.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:oe,matcap:Vt,envMap:$t,envMapMode:$t&&$.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:Bt,bumpMap:Ae,normalMap:le,displacementMap:nn,emissiveMap:L,normalMapObjectSpace:le&&x.normalMapType===Vu,normalMapTangentSpace:le&&x.normalMapType===Oo,packedNormalMap:le&&x.normalMapType===Oo&&z0(x.normalMap.format),metalnessMap:Ce,roughnessMap:Gt,anisotropy:ie,anisotropyMap:Y,clearcoat:lt,clearcoatMap:Q,clearcoatNormalMap:tt,clearcoatRoughnessMap:at,dispersion:pe,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:Z,sheen:v,sheenColorMap:dt,sheenRoughnessMap:_t,specularMap:st,specularColorMap:et,specularIntensityMap:Rt,transmission:O,transmissionMap:Nt,thicknessMap:Zt,gradientMap:I,opaque:x.transparent===!1&&x.blending===Ji&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:q,alphaHash:pt,combine:x.combine,mapUv:oe&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:Bt&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:le&&_(x.normalMap.channel),displacementMapUv:nn&&_(x.displacementMap.channel),emissiveMapUv:L&&_(x.emissiveMap.channel),metalnessMapUv:Ce&&_(x.metalnessMap.channel),roughnessMapUv:Gt&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:Q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(x.sheenRoughnessMap.channel),specularMapUv:st&&_(x.specularMap.channel),specularColorMapUv:et&&_(x.specularColorMap.channel),specularIntensityMapUv:Rt&&_(x.specularIntensityMap.channel),transmissionMapUv:Nt&&_(x.transmissionMap.channel),thicknessMapUv:Zt&&_(x.thicknessMap.channel),alphaMapUv:nt&&_(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(le||ie),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(oe||nt),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:wt,skinning:U.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:kt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:K,decodeVideoTexture:oe&&x.map.isVideoTexture===!0&&Ht.getTransfer(x.map.colorSpace)===Jt,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(x.emissiveMap.colorSpace)===Jt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===Xe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function d(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(T,x),y(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function y(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function S(x){let T=p[x.type],P;if(T){let R=Hn[T];P=ju.clone(R.uniforms)}else P=x.uniforms;return P}function b(x,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new O0(s,T,x,i),c.push(P),h.set(T,P)),P}function A(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function V0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function G0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function vf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function yf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,g,d,m){let y=s[t];return y===void 0?(y={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:d,group:m},s[t]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=_,y.materialVariant=a(u),y.groupOrder=g,y.renderOrder=u.renderOrder,y.z=d,y.group=m),t++,y}function l(u,p,_,g,d,m){let y=o(u,p,_,g,d,m);_.transmission>0?n.push(y):_.transparent===!0?i.push(y):e.push(y)}function c(u,p,_,g,d,m){let y=o(u,p,_,g,d,m);_.transmission>0?n.unshift(y):_.transparent===!0?i.unshift(y):e.unshift(y)}function h(u,p){e.length>1&&e.sort(u||G0),n.length>1&&n.sort(p||vf),i.length>1&&i.sort(p||vf)}function f(){for(let u=t,p=s.length;u<p;u++){let _=s[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function H0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new yf,s.set(n,[a])):i>=r.length?(a=new yf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function W0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new zt};break;case"SpotLight":e={position:new V,direction:new V,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function X0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var q0=0;function Y0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Z0(s){let t=new W0,e=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let i=new V,r=new ve,a=new ve;function o(c){let h=0,f=0,u=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,g=0,d=0,m=0,y=0,S=0,b=0,A=0,w=0,C=0;c.sort(Y0);for(let T=0,P=c.length;T<P;T++){let R=c[T],U=R.color,G=R.intensity,W=R.distance,D=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Pi?D=R.shadow.map.texture:D=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*G,f+=U.g*G,u+=U.b*G;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],G);C++}else if(R.isDirectionalLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,$=e.get(R);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=D,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=B,p++}else if(R.isSpotLight){let B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(U).multiplyScalar(G),B.distance=W,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[g]=B;let F=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,F.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=F.matrix,R.castShadow){let $=e.get(R);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.spotShadow[g]=$,n.spotShadowMap[g]=D,b++}g++}else if(R.isRectAreaLight){let B=t.get(R);B.color.copy(U).multiplyScalar(G),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=B,d++}else if(R.isPointLight){let B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let F=R.shadow,$=e.get(R);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=D,n.pointShadowMatrix[_]=R.shadow.matrix,S++}n.point[_]=B,_++}else if(R.isHemisphereLight){let B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(G),B.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[m]=B,m++}}d>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let x=n.hash;(x.directionalLength!==p||x.pointLength!==_||x.spotLength!==g||x.rectAreaLength!==d||x.hemiLength!==m||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==b||x.numSpotMaps!==A||x.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=d,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,x.directionalLength=p,x.pointLength=_,x.spotLength=g,x.rectAreaLength=d,x.hemiLength=m,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=b,x.numSpotMaps=A,x.numLightProbes=C,n.version=q0++)}function l(c,h){let f=0,u=0,p=0,_=0,g=0,d=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let S=c[m];if(S.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),f++}else if(S.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(d),p++}else if(S.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),u++}else if(S.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function Mf(s){let t=new Z0(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Mf(s),t.set(i,[o])):r>=a.length?(o=new Mf(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q0=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],j0=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Sf=new ve,Pr=new V,Rc=new V;function tx(s,t,e){let n=new Is,i=new Yt,r=new Yt,a=new he,o=new Ba,l=new za,c={},h=e.maxTextureSize,f={[ei]:Xe,[Xe]:ei,[zn]:zn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:$0,fragmentShader:K0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Bn;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Je(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let m=this.type;this.render=function(w,C,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===xu&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vr);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),U=s.state;U.setBlending(kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=m!==this.type;G&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(D=>D.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,D=w.length;W<D;W++){let B=w[W],F=B.shadow;if(F===void 0){Tt("WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let $=F.getFrameExtents();i.multiply($),r.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,F.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,F.mapSize.y=r.y));let j=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ls){if(B.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new cn(i.x,i.y,{format:Pi,type:Vn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),F.map.texture.name=B.name+".shadowMap",F.map.depthTexture=new ni(i.x,i.y,Rn),F.map.depthTexture.name=B.name+".shadowMapDepth",F.map.depthTexture.format=Un,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le}else B.isPointLight?(F.map=new Ho(i.x),F.map.depthTexture=new Ua(i.x,Cn)):(F.map=new cn(i.x,i.y),F.map.depthTexture=new ni(i.x,i.y,Cn)),F.map.depthTexture.name=B.name+".shadowMap",F.map.depthTexture.format=Un,this.type===vr?(F.map.depthTexture.compareFunction=j?zo:Bo,F.map.depthTexture.minFilter=Ue,F.map.depthTexture.magFilter=Ue):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le);F.camera.updateProjectionMatrix()}let ot=F.map.isWebGLCubeRenderTarget?6:1;for(let mt=0;mt<ot;mt++){if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,mt),s.clear();else{mt===0&&(s.setRenderTarget(F.map),s.clear());let vt=F.getViewport(mt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),U.viewport(a)}if(B.isPointLight){let vt=F.camera,kt=F.matrix,Ot=B.distance||vt.far;Ot!==vt.far&&(vt.far=Ot,vt.updateProjectionMatrix()),Pr.setFromMatrixPosition(B.matrixWorld),vt.position.copy(Pr),Rc.copy(vt.position),Rc.add(Q0[mt]),vt.up.copy(j0[mt]),vt.lookAt(Rc),vt.updateMatrixWorld(),kt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Sf.multiplyMatrices(vt.projectionMatrix,vt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Sf,vt.coordinateSystem,vt.reversedDepth)}else F.updateMatrices(B);n=F.getFrustum(),b(C,x,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Ls&&y(F,x),F.needsUpdate=!1}m=this.type,d.needsUpdate=!1,s.setRenderTarget(T,P,R)};function y(w,C){let x=t.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cn(i.x,i.y,{format:Pi,type:Vn})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,x,u,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,x,p,g,null)}function S(w,C,x,T){let P=null,R=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)P=R;else if(P=x.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let U=P.uuid,G=C.uuid,W=c[U];W===void 0&&(W={},c[U]=W);let D=W[G];D===void 0&&(D=P.clone(),W[G]=D,C.addEventListener("dispose",A)),P=D}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Ls?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:f[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=x}return P}function b(w,C,x,T,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ls)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let G=t.update(w),W=w.material;if(Array.isArray(W)){let D=G.groups;for(let B=0,F=D.length;B<F;B++){let $=D[B],j=W[$.materialIndex];if(j&&j.visible){let ot=S(w,j,T,P);w.onBeforeShadow(s,w,C,x,G,ot,$),s.renderBufferDirect(x,null,G,ot,w,$),w.onAfterShadow(s,w,C,x,G,ot,$)}}}else if(W.visible){let D=S(w,W,T,P);w.onBeforeShadow(s,w,C,x,G,D,null),s.renderBufferDirect(x,null,G,D,w,null),w.onAfterShadow(s,w,C,x,G,D,null)}}let U=w.children;for(let G=0,W=U.length;G<W;G++)b(U[G],C,x,T,P)}function A(w){w.target.removeEventListener("dispose",A);for(let x in c){let T=c[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function ex(s,t){function e(){let I=!1,nt=new he,q=null,pt=new he(0,0,0,0);return{setMask:function(rt){q!==rt&&!I&&(s.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){I=rt},setClear:function(rt,K,Mt,Dt,Se){Se===!0&&(rt*=Dt,K*=Dt,Mt*=Dt),nt.set(rt,K,Mt,Dt),pt.equals(nt)===!1&&(s.clearColor(rt,K,Mt,Dt),pt.copy(nt))},reset:function(){I=!1,q=null,pt.set(-1,0,0,0)}}}function n(){let I=!1,nt=!1,q=null,pt=null,rt=null;return{setReversed:function(K){if(nt!==K){let Mt=t.get("EXT_clip_control");K?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),nt=K;let Dt=rt;rt=null,this.setClear(Dt)}},getReversed:function(){return nt},setTest:function(K){K?it(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(K){q!==K&&!I&&(s.depthMask(K),q=K)},setFunc:function(K){if(nt&&(K=Ku[K]),pt!==K){switch(K){case xa:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case ya:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case Ta:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=K}},setLocked:function(K){I=K},setClear:function(K){rt!==K&&(rt=K,nt&&(K=1-K),s.clearDepth(K))},reset:function(){I=!1,q=null,pt=null,rt=null,nt=!1}}}function i(){let I=!1,nt=null,q=null,pt=null,rt=null,K=null,Mt=null,Dt=null,Se=null;return{setTest:function(Kt){I||(Kt?it(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!I&&(s.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,Zn,Pn){(q!==Kt||pt!==Zn||rt!==Pn)&&(s.stencilFunc(Kt,Zn,Pn),q=Kt,pt=Zn,rt=Pn)},setOp:function(Kt,Zn,Pn){(K!==Kt||Mt!==Zn||Dt!==Pn)&&(s.stencilOp(Kt,Zn,Pn),K=Kt,Mt=Zn,Dt=Pn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){Se!==Kt&&(s.clearStencil(Kt),Se=Kt)},reset:function(){I=!1,nt=null,q=null,pt=null,rt=null,K=null,Mt=null,Dt=null,Se=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],g=null,d=!1,m=null,y=null,S=null,b=null,A=null,w=null,C=null,x=new zt(0,0,0),T=0,P=!1,R=null,U=null,G=null,W=null,D=null,B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,$=0,j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=$>=2);let ot=null,mt={},vt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Ot=new he().fromArray(vt),Et=new he().fromArray(kt);function J(I,nt,q,pt){let rt=new Uint8Array(4),K=s.createTexture();s.bindTexture(I,K),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Mt=0;Mt<q;Mt++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(nt+Mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return K}let ft={};ft[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc($i),Ae(!1),le(Zl),it(s.CULL_FACE),re(kn);function it(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function wt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function It(I,nt){return u[I]!==nt?(s.bindFramebuffer(I,nt),u[I]=nt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Ct(I,nt){let q=_,pt=!1;if(I){q=p.get(nt),q===void 0&&(q=[],p.set(nt,q));let rt=I.textures;if(q.length!==rt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let K=0,Mt=rt.length;K<Mt;K++)q[K]=s.COLOR_ATTACHMENT0+K;q.length=rt.length,pt=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,pt=!0);pt&&s.drawBuffers(q)}function oe(I){return g!==I?(s.useProgram(I),g=I,!0):!1}let Vt={[yi]:s.FUNC_ADD,[yu]:s.FUNC_SUBTRACT,[Mu]:s.FUNC_REVERSE_SUBTRACT};Vt[Su]=s.MIN,Vt[bu]=s.MAX;let $t={[Tu]:s.ZERO,[Eu]:s.ONE,[wu]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[Du]:s.SRC_ALPHA_SATURATE,[Pu]:s.DST_COLOR,[Cu]:s.DST_ALPHA,[Au]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[Iu]:s.ONE_MINUS_DST_COLOR,[Ru]:s.ONE_MINUS_DST_ALPHA,[Lu]:s.CONSTANT_COLOR,[Nu]:s.ONE_MINUS_CONSTANT_COLOR,[Uu]:s.CONSTANT_ALPHA,[Fu]:s.ONE_MINUS_CONSTANT_ALPHA};function re(I,nt,q,pt,rt,K,Mt,Dt,Se,Kt){if(I===kn){d===!0&&(wt(s.BLEND),d=!1);return}if(d===!1&&(it(s.BLEND),d=!0),I!==vu){if(I!==m||Kt!==P){if((y!==yi||A!==yi)&&(s.blendEquation(s.FUNC_ADD),y=yi,A=yi),Kt)switch(I){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jl:s.blendFunc(s.ONE,s.ONE);break;case $l:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",I);break}else switch(I){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case $l:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",I);break}S=null,b=null,w=null,C=null,x.set(0,0,0),T=0,m=I,P=Kt}return}rt=rt||nt,K=K||q,Mt=Mt||pt,(nt!==y||rt!==A)&&(s.blendEquationSeparate(Vt[nt],Vt[rt]),y=nt,A=rt),(q!==S||pt!==b||K!==w||Mt!==C)&&(s.blendFuncSeparate($t[q],$t[pt],$t[K],$t[Mt]),S=q,b=pt,w=K,C=Mt),(Dt.equals(x)===!1||Se!==T)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Se),x.copy(Dt),T=Se),m=I,P=!1}function Bt(I,nt){I.side===zn?wt(s.CULL_FACE):it(s.CULL_FACE);let q=I.side===Xe;nt&&(q=!q),Ae(q),I.blending===Ji&&I.transparent===!1?re(kn):re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pt=I.stencilWrite;o.setTest(pt),pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),L(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(I){R!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),R=I)}function le(I){I!==gu?(it(s.CULL_FACE),I!==U&&(I===Zl?s.cullFace(s.BACK):I===_u?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),U=I}function nn(I){I!==G&&(F&&s.lineWidth(I),G=I)}function L(I,nt,q){I?(it(s.POLYGON_OFFSET_FILL),(W!==nt||D!==q)&&(W=nt,D=q,a.getReversed()&&(nt=-nt),s.polygonOffset(nt,q))):wt(s.POLYGON_OFFSET_FILL)}function Ce(I){I?it(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function Gt(I){I===void 0&&(I=s.TEXTURE0+B-1),ot!==I&&(s.activeTexture(I),ot=I)}function ie(I,nt,q){q===void 0&&(ot===null?q=s.TEXTURE0+B-1:q=ot);let pt=mt[q];pt===void 0&&(pt={type:void 0,texture:void 0},mt[q]=pt),(pt.type!==I||pt.texture!==nt)&&(ot!==q&&(s.activeTexture(q),ot=q),s.bindTexture(I,nt||ft[I]),pt.type=I,pt.texture=nt)}function lt(){let I=mt[ot];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pe(){try{s.compressedTexImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function E(){try{s.compressedTexImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function v(){try{s.texSubImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function O(){try{s.texSubImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function tt(){try{s.texStorage2D(...arguments)}catch(I){At("WebGLState:",I)}}function at(){try{s.texStorage3D(...arguments)}catch(I){At("WebGLState:",I)}}function X(){try{s.texImage2D(...arguments)}catch(I){At("WebGLState:",I)}}function Z(){try{s.texImage3D(...arguments)}catch(I){At("WebGLState:",I)}}function dt(I){return f[I]!==void 0?f[I]:s.getParameter(I)}function _t(I,nt){f[I]!==nt&&(s.pixelStorei(I,nt),f[I]=nt)}function st(I){Ot.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ot.copy(I))}function et(I){Et.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Et.copy(I))}function Rt(I,nt){let q=c.get(nt);q===void 0&&(q=new WeakMap,c.set(nt,q));let pt=q.get(I);pt===void 0&&(pt=s.getUniformBlockIndex(nt,I.name),q.set(I,pt))}function Nt(I,nt){let pt=c.get(nt).get(I);l.get(nt)!==pt&&(s.uniformBlockBinding(nt,pt,I.__bindingPointIndex),l.set(nt,pt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},ot=null,mt={},u={},p=new WeakMap,_=[],g=null,d=!1,m=null,y=null,S=null,b=null,A=null,w=null,C=null,x=new zt(0,0,0),T=0,P=!1,R=null,U=null,G=null,W=null,D=null,Ot.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:wt,bindFramebuffer:It,drawBuffers:Ct,useProgram:oe,setBlending:re,setMaterial:Bt,setFlipSided:Ae,setCullFace:le,setLineWidth:nn,setPolygonOffset:L,setScissorTest:Ce,activeTexture:Gt,bindTexture:ie,unbindTexture:lt,compressedTexImage2D:pe,compressedTexImage3D:E,texImage2D:X,texImage3D:Z,pixelStorei:_t,getParameter:dt,updateUBOMapping:Rt,uniformBlockBinding:Nt,texStorage2D:tt,texStorage3D:at,texSubImage2D:v,texSubImage3D:O,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:st,viewport:et,reset:Zt}}function nx(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Yt,h=new WeakMap,f=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return _?new OffscreenCanvas(E,v):ir("canvas")}function d(E,v,O){let Y=1,Q=pe(E);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let tt=Math.floor(Y*Q.width),at=Math.floor(Y*Q.height);u===void 0&&(u=g(tt,at));let X=v?g(tt,at):u;return X.width=tt,X.height=at,X.getContext("2d").drawImage(E,0,0,tt,at),Tt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+tt+"x"+at+")."),X}else return"data"in E&&Tt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function y(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(E,v,O,Y,Q,tt=!1){if(E!==null){if(s[E]!==void 0)return s[E];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at;Y&&(at=t.get("EXT_texture_norm16"),at||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===s.RED&&(O===s.FLOAT&&(X=s.R32F),O===s.HALF_FLOAT&&(X=s.R16F),O===s.UNSIGNED_BYTE&&(X=s.R8),O===s.UNSIGNED_SHORT&&at&&(X=at.R16_EXT),O===s.SHORT&&at&&(X=at.R16_SNORM_EXT)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.R8UI),O===s.UNSIGNED_SHORT&&(X=s.R16UI),O===s.UNSIGNED_INT&&(X=s.R32UI),O===s.BYTE&&(X=s.R8I),O===s.SHORT&&(X=s.R16I),O===s.INT&&(X=s.R32I)),v===s.RG&&(O===s.FLOAT&&(X=s.RG32F),O===s.HALF_FLOAT&&(X=s.RG16F),O===s.UNSIGNED_BYTE&&(X=s.RG8),O===s.UNSIGNED_SHORT&&at&&(X=at.RG16_EXT),O===s.SHORT&&at&&(X=at.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RG8UI),O===s.UNSIGNED_SHORT&&(X=s.RG16UI),O===s.UNSIGNED_INT&&(X=s.RG32UI),O===s.BYTE&&(X=s.RG8I),O===s.SHORT&&(X=s.RG16I),O===s.INT&&(X=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGB8UI),O===s.UNSIGNED_SHORT&&(X=s.RGB16UI),O===s.UNSIGNED_INT&&(X=s.RGB32UI),O===s.BYTE&&(X=s.RGB8I),O===s.SHORT&&(X=s.RGB16I),O===s.INT&&(X=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),O===s.UNSIGNED_INT&&(X=s.RGBA32UI),O===s.BYTE&&(X=s.RGBA8I),O===s.SHORT&&(X=s.RGBA16I),O===s.INT&&(X=s.RGBA32I)),v===s.RGB&&(O===s.UNSIGNED_SHORT&&at&&(X=at.RGB16_EXT),O===s.SHORT&&at&&(X=at.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),v===s.RGBA){let Z=tt?nr:Ht.getTransfer(Q);O===s.FLOAT&&(X=s.RGBA32F),O===s.HALF_FLOAT&&(X=s.RGBA16F),O===s.UNSIGNED_BYTE&&(X=Z===Jt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&at&&(X=at.RGBA16_EXT),O===s.SHORT&&at&&(X=at.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function A(E,v){let O;return E?v===null||v===Cn||v===Us?O=s.DEPTH24_STENCIL8:v===Rn?O=s.DEPTH32F_STENCIL8:v===Ns&&(O=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cn||v===Us?O=s.DEPTH_COMPONENT24:v===Rn?O=s.DEPTH_COMPONENT32F:v===Ns&&(O=s.DEPTH_COMPONENT16),O}function w(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Le&&E.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(E){let v=E.target;v.removeEventListener("dispose",x),R(v)}function T(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,Y=p.get(O);if(Y){let Q=Y[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(E),Object.keys(Y).length===0&&p.delete(O)}n.remove(E)}function P(E){let v=n.get(E);s.deleteTexture(v.__webglTexture);let O=E.source,Y=p.get(O);delete Y[v.__cacheKey],a.memory.textures--}function R(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Q=0;Q<v.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)s.deleteFramebuffer(v.__webglFramebuffer[Y]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=E.textures;for(let Y=0,Q=O.length;Y<Q;Y++){let tt=n.get(O[Y]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(E)}let U=0;function G(){U=0}function W(){return U}function D(E){U=E}function B(){let E=U;return E>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),U+=1,E}function F(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function $(E,v){let O=n.get(E);if(E.isVideoTexture&&ie(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let Y=E.image;if(Y===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function j(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){wt(O,E,v);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function ot(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){wt(O,E,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function mt(E,v){let O=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){It(O,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}let vt={[Ea]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[wa]:s.MIRRORED_REPEAT},kt={[Le]:s.NEAREST,[zu]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[Ue]:s.LINEAR,[ja]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},Ot={[Gu]:s.NEVER,[Yu]:s.ALWAYS,[Hu]:s.LESS,[Bo]:s.LEQUAL,[Wu]:s.EQUAL,[zo]:s.GEQUAL,[Xu]:s.GREATER,[qu]:s.NOTEQUAL};function Et(E,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ue||v.magFilter===ja||v.magFilter===Mr||v.magFilter===Ci||v.minFilter===Ue||v.minFilter===ja||v.minFilter===Mr||v.minFilter===Ci)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,vt[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,vt[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,vt[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,kt[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,kt[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,Ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Le||v.minFilter!==Mr&&v.minFilter!==Ci||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let Y=v.source,Q=p.get(Y);Q===void 0&&(Q={},p.set(Y,Q));let tt=F(v);if(tt!==E.__cacheKey){Q[tt]===void 0&&(Q[tt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[tt].usedTimes++;let at=Q[E.__cacheKey];at!==void 0&&(Q[E.__cacheKey].usedTimes--,at.usedTimes===0&&P(v)),E.__cacheKey=tt,E.__webglTexture=Q[tt].texture}return O}function ft(E,v,O){return Math.floor(Math.floor(E/O)/v)}function it(E,v,O,Y){let tt=E.updateRanges;if(tt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,O,Y,v.data);else{tt.sort((_t,st)=>_t.start-st.start);let at=0;for(let _t=1;_t<tt.length;_t++){let st=tt[at],et=tt[_t],Rt=st.start+st.count,Nt=ft(et.start,v.width,4),Zt=ft(st.start,v.width,4);et.start<=Rt+1&&Nt===Zt&&ft(et.start+et.count-1,v.width,4)===Nt?st.count=Math.max(st.count,et.start+et.count-st.start):(++at,tt[at]=et)}tt.length=at+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),Z=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let _t=0,st=tt.length;_t<st;_t++){let et=tt[_t],Rt=Math.floor(et.start/4),Nt=Math.ceil(et.count/4),Zt=Rt%v.width,I=Math.floor(Rt/v.width),nt=Nt,q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(s.UNPACK_SKIP_ROWS,I),e.texSubImage2D(s.TEXTURE_2D,0,Zt,I,nt,q,O,Y,v.data)}E.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function wt(E,v,O){let Y=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=s.TEXTURE_3D);let Q=J(E,v),tt=v.source;e.bindTexture(Y,E.__webglTexture,s.TEXTURE0+O);let at=n.get(tt);if(tt.version!==at.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let q=Ht.getPrimaries(Ht.workingColorSpace),pt=v.colorSpace===ii?null:Ht.getPrimaries(v.colorSpace),rt=v.colorSpace===ii||q===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=d(v.image,!1,i.maxTextureSize);Z=lt(v,Z);let dt=r.convert(v.format,v.colorSpace),_t=r.convert(v.type),st=b(v.internalFormat,dt,_t,v.normalized,v.colorSpace,v.isVideoTexture);Et(Y,v);let et,Rt=v.mipmaps,Nt=v.isVideoTexture!==!0,Zt=at.__version===void 0||Q===!0,I=tt.dataReady,nt=w(v,Z);if(v.isDepthTexture)st=A(v.format===Ri,v.type),Zt&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,st,Z.width,Z.height):e.texImage2D(s.TEXTURE_2D,0,st,Z.width,Z.height,0,dt,_t,null));else if(v.isDataTexture)if(Rt.length>0){Nt&&Zt&&e.texStorage2D(s.TEXTURE_2D,nt,st,Rt[0].width,Rt[0].height);for(let q=0,pt=Rt.length;q<pt;q++)et=Rt[q],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,dt,_t,et.data):e.texImage2D(s.TEXTURE_2D,q,st,et.width,et.height,0,dt,_t,et.data);v.generateMipmaps=!1}else Nt?(Zt&&e.texStorage2D(s.TEXTURE_2D,nt,st,Z.width,Z.height),I&&it(v,Z,dt,_t)):e.texImage2D(s.TEXTURE_2D,0,st,Z.width,Z.height,0,dt,_t,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,st,Rt[0].width,Rt[0].height,Z.depth);for(let q=0,pt=Rt.length;q<pt;q++)if(et=Rt[q],v.format!==vn)if(dt!==null)if(Nt){if(I)if(v.layerUpdates.size>0){let rt=xc(et.width,et.height,v.format,v.type);for(let K of v.layerUpdates){let Mt=et.data.subarray(K*rt/et.data.BYTES_PER_ELEMENT,(K+1)*rt/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,K,et.width,et.height,1,dt,Mt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,et.width,et.height,Z.depth,dt,et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,st,et.width,et.height,Z.depth,0,et.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,et.width,et.height,Z.depth,dt,_t,et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,st,et.width,et.height,Z.depth,0,dt,_t,et.data)}else{Nt&&Zt&&e.texStorage2D(s.TEXTURE_2D,nt,st,Rt[0].width,Rt[0].height);for(let q=0,pt=Rt.length;q<pt;q++)et=Rt[q],v.format!==vn?dt!==null?Nt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,dt,et.data):e.compressedTexImage2D(s.TEXTURE_2D,q,st,et.width,et.height,0,et.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,et.width,et.height,dt,_t,et.data):e.texImage2D(s.TEXTURE_2D,q,st,et.width,et.height,0,dt,_t,et.data)}else if(v.isDataArrayTexture)if(Nt){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,nt,st,Z.width,Z.height,Z.depth),I)if(v.layerUpdates.size>0){let q=xc(Z.width,Z.height,v.format,v.type);for(let pt of v.layerUpdates){let rt=Z.data.subarray(pt*q/Z.data.BYTES_PER_ELEMENT,(pt+1)*q/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,Z.width,Z.height,1,dt,_t,rt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,dt,_t,Z.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,st,Z.width,Z.height,Z.depth,0,dt,_t,Z.data);else if(v.isData3DTexture)Nt?(Zt&&e.texStorage3D(s.TEXTURE_3D,nt,st,Z.width,Z.height,Z.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,dt,_t,Z.data)):e.texImage3D(s.TEXTURE_3D,0,st,Z.width,Z.height,Z.depth,0,dt,_t,Z.data);else if(v.isFramebufferTexture){if(Zt)if(Nt)e.texStorage2D(s.TEXTURE_2D,nt,st,Z.width,Z.height);else{let q=Z.width,pt=Z.height;for(let rt=0;rt<nt;rt++)e.texImage2D(s.TEXTURE_2D,rt,st,q,pt,0,dt,_t,null),q>>=1,pt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let q=s.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),Z.parentNode!==q){q.appendChild(Z),f.add(v),q.onpaint=Dt=>{let Se=Dt.changedElements;for(let Kt of f)Se.includes(Kt.image)&&(Kt.needsUpdate=!0)},q.requestPaint();return}let pt=0,rt=s.RGBA,K=s.RGBA,Mt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,pt,rt,K,Mt,Z),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Nt&&Zt){let q=pe(Rt[0]);e.texStorage2D(s.TEXTURE_2D,nt,st,q.width,q.height)}for(let q=0,pt=Rt.length;q<pt;q++)et=Rt[q],Nt?I&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,dt,_t,et):e.texImage2D(s.TEXTURE_2D,q,st,dt,_t,et);v.generateMipmaps=!1}else if(Nt){if(Zt){let q=pe(Z);e.texStorage2D(s.TEXTURE_2D,nt,st,q.width,q.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,_t,Z)}else e.texImage2D(s.TEXTURE_2D,0,st,dt,_t,Z);m(v)&&y(Y),at.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function It(E,v,O){if(v.image.length!==6)return;let Y=J(E,v),Q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);let tt=n.get(Q);if(Q.version!==tt.__version||Y===!0){e.activeTexture(s.TEXTURE0+O);let at=Ht.getPrimaries(Ht.workingColorSpace),X=v.colorSpace===ii?null:Ht.getPrimaries(v.colorSpace),Z=v.colorSpace===ii||at===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,_t=v.image[0]&&v.image[0].isDataTexture,st=[];for(let K=0;K<6;K++)!dt&&!_t?st[K]=d(v.image[K],!0,i.maxCubemapSize):st[K]=_t?v.image[K].image:v.image[K],st[K]=lt(v,st[K]);let et=st[0],Rt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),Zt=b(v.internalFormat,Rt,Nt,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,nt=tt.__version===void 0||Y===!0,q=Q.dataReady,pt=w(v,et);Et(s.TEXTURE_CUBE_MAP,v);let rt;if(dt){I&&nt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Zt,et.width,et.height);for(let K=0;K<6;K++){rt=st[K].mipmaps;for(let Mt=0;Mt<rt.length;Mt++){let Dt=rt[Mt];v.format!==vn?Rt!==null?I?q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt,0,0,Dt.width,Dt.height,Rt,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt,Zt,Dt.width,Dt.height,0,Dt.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt,0,0,Dt.width,Dt.height,Rt,Nt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt,Zt,Dt.width,Dt.height,0,Rt,Nt,Dt.data)}}}else{if(rt=v.mipmaps,I&&nt){rt.length>0&&pt++;let K=pe(st[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,Zt,K.width,K.height)}for(let K=0;K<6;K++)if(_t){I?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st[K].width,st[K].height,Rt,Nt,st[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,st[K].width,st[K].height,0,Rt,Nt,st[K].data);for(let Mt=0;Mt<rt.length;Mt++){let Se=rt[Mt].image[K].image;I?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt+1,0,0,Se.width,Se.height,Rt,Nt,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt+1,Zt,Se.width,Se.height,0,Rt,Nt,Se.data)}}else{I?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,Nt,st[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Zt,Rt,Nt,st[K]);for(let Mt=0;Mt<rt.length;Mt++){let Dt=rt[Mt];I?q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt+1,0,0,Rt,Nt,Dt.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Mt+1,Zt,Rt,Nt,Dt.image[K])}}}m(v)&&y(s.TEXTURE_CUBE_MAP),tt.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ct(E,v,O,Y,Q,tt){let at=r.convert(O.format,O.colorSpace),X=r.convert(O.type),Z=b(O.internalFormat,at,X,O.normalized,O.colorSpace),dt=n.get(v),_t=n.get(O);if(_t.__renderTarget=v,!dt.__hasExternalTextures){let st=Math.max(1,v.width>>tt),et=Math.max(1,v.height>>tt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,tt,Z,st,et,v.depth,0,at,X,null):e.texImage2D(Q,tt,Z,st,et,0,at,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,_t.__webglTexture,0,Ce(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,_t.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(E,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){let Y=v.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,tt=A(v.stencilBuffer,Q),at=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce(v),tt,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce(v),tt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,tt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,E)}else{let Y=v.textures;for(let Q=0;Q<Y.length;Q++){let tt=Y[Q],at=r.convert(tt.format,tt.colorSpace),X=r.convert(tt.type),Z=b(tt.internalFormat,at,X,tt.normalized,tt.colorSpace);Gt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce(v),Z,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce(v),Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Vt(E,v,O){let Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(v.depthTexture);if(Q.__renderTarget=v,(!Q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Et(s.TEXTURE_CUBE_MAP,v.depthTexture);let dt=r.convert(v.depthTexture.format),_t=r.convert(v.depthTexture.type),st;v.depthTexture.format===Un?st=s.DEPTH_COMPONENT24:v.depthTexture.format===Ri&&(st=s.DEPTH24_STENCIL8);for(let et=0;et<6;et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,st,v.width,v.height,0,dt,_t,null)}}else $(v.depthTexture,0);let tt=Q.__webglTexture,at=Ce(v),X=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Z=v.depthTexture.format===Ri?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===Un)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,X,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Z,X,tt,0);else if(v.depthTexture.format===Ri)Gt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,X,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,Z,X,tt,0);else throw new Error("Unknown depthTexture format")}function $t(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=Y}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)Vt(v.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?Vt(v.__webglFramebuffer[0],E,0):Vt(v.__webglFramebuffer,E,0)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=s.createRenderbuffer(),oe(v.__webglDepthbuffer[Y],E,!1);else{let Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,tt)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),oe(v.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,tt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(E,v,O){let Y=n.get(E);v!==void 0&&Ct(Y.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&$t(E)}function Bt(E){let v=E.texture,O=n.get(E),Y=n.get(v);E.addEventListener("dispose",x);let Q=E.textures,tt=E.isWebGLCubeRenderTarget===!0,at=Q.length>1;if(at||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=v.version,a.memory.textures++),tt){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let Z=0;Z<v.mipmaps.length;Z++)O.__webglFramebuffer[X][Z]=s.createFramebuffer()}else O.__webglFramebuffer[X]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)O.__webglFramebuffer[X]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(at)for(let X=0,Z=Q.length;X<Z;X++){let dt=n.get(Q[X]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&Gt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let Z=Q[X];O.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[X]);let dt=r.convert(Z.format,Z.colorSpace),_t=r.convert(Z.type),st=b(Z.internalFormat,dt,_t,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),et=Ce(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,st,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,O.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Et(s.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ct(O.__webglFramebuffer[X][Z],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else Ct(O.__webglFramebuffer[X],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);m(v)&&y(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let X=0,Z=Q.length;X<Z;X++){let dt=Q[X],_t=n.get(dt),st=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(st=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,_t.__webglTexture),Et(st,dt),Ct(O.__webglFramebuffer,E,dt,s.COLOR_ATTACHMENT0+X,st,0),m(dt)&&y(st)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,Y.__webglTexture),Et(X,v),v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Ct(O.__webglFramebuffer[Z],E,v,s.COLOR_ATTACHMENT0,X,Z);else Ct(O.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,X,0);m(v)&&y(X),e.unbindTexture()}E.depthBuffer&&$t(E)}function Ae(E){let v=E.textures;for(let O=0,Y=v.length;O<Y;O++){let Q=v[O];if(m(Q)){let tt=S(E),at=n.get(Q).__webglTexture;e.bindTexture(tt,at),y(tt),e.unbindTexture()}}}let le=[],nn=[];function L(E){if(E.samples>0){if(Gt(E)===!1){let v=E.textures,O=E.width,Y=E.height,Q=s.COLOR_BUFFER_BIT,tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(E),X=v.length>1;if(X)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let Z=E.texture.mipmaps;Z&&Z.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);let _t=n.get(v[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_t,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,s.NEAREST),l===!0&&(le.length=0,nn.length=0,le.push(s.COLOR_ATTACHMENT0+dt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(le.push(tt),nn.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);let _t=n.get(v[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,_t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Ce(E){return Math.min(i.maxSamples,E.samples)}function Gt(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ie(E){let v=a.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function lt(E,v){let O=E.colorSpace,Y=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==er&&O!==ii&&(Ht.getTransfer(O)===Jt?(Y!==vn||Q!==$e)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",O)),v}function pe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.getTextureUnits=W,this.setTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=ot,this.setTextureCube=mt,this.rebindTextures=re,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ix(s,t){function e(n,i=ii){let r,a=Ht.getTransfer(i);if(n===$e)return s.UNSIGNED_BYTE;if(n===eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===no)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ac)return s.BYTE;if(n===oc)return s.SHORT;if(n===Ns)return s.UNSIGNED_SHORT;if(n===to)return s.INT;if(n===Cn)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===Vn)return s.HALF_FLOAT;if(n===hc)return s.ALPHA;if(n===uc)return s.RGB;if(n===vn)return s.RGBA;if(n===Un)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===fc)return s.RED;if(n===io)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===so)return s.RG_INTEGER;if(n===ro)return s.RGBA_INTEGER;if(n===Sr||n===br||n===Tr||n===Er)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo||n===po||n===mo||n===wr||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===po)return r.COMPRESSED_R11_EAC;if(n===mo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===wr)return r.COMPRESSED_RG11_EAC;if(n===go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===bo||n===To||n===Eo||n===wo||n===Ao||n===Co||n===Ro||n===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===No||n===Uo||n===Ar||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===No)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Je(new fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Fn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,g=typeof XRWebGLBinding<"u",d=new Oc,m={},y=e.getContextAttributes(),S=null,b=null,A=[],w=[],C=new Yt,x=null,T=new Ne;T.viewport=new he;let P=new Ne;P.viewport=new he;let R=[T,P],U=new Ja,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=A[J];return ft===void 0&&(ft=new Rs,A[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=A[J];return ft===void 0&&(ft=new Rs,A[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=A[J];return ft===void 0&&(ft=new Rs,A[J]=ft),ft.getHandSpace()};function D(J){let ft=w.indexOf(J.inputSource);if(ft===-1)return;let it=A[ft];it!==void 0&&(it.update(J.inputSource,J.frame,c||a),it.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",F);for(let J=0;J<A.length;J++){let ft=w[J];ft!==null&&(w[J]=null,A[J].disconnect(ft))}G=null,W=null,d.reset();for(let J in m)delete m[J];t.setRenderTarget(S),p=null,u=null,f=null,i=null,b=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=function(J){return Zr(this,null,function*(){if(i=J,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",B),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&(yield e.makeXRCompatible()),x=t.getPixelRatio(),t.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,wt=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?Ri:Un,wt=y.stencil?Us:Cn);let Ct={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ct),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new cn(u.textureWidth,u.textureHeight,{format:vn,type:$e,depthTexture:new ni(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new cn(p.framebufferWidth,p.framebufferHeight,{format:vn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=yield i.requestReferenceSpace(o),Et.setContext(i),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function F(J){for(let ft=0;ft<J.removed.length;ft++){let it=J.removed[ft],wt=w.indexOf(it);wt>=0&&(w[wt]=null,A[wt].disconnect(it))}for(let ft=0;ft<J.added.length;ft++){let it=J.added[ft],wt=w.indexOf(it);if(wt===-1){for(let Ct=0;Ct<A.length;Ct++)if(Ct>=w.length){w.push(it),wt=Ct;break}else if(w[Ct]===null){w[Ct]=it,wt=Ct;break}if(wt===-1)break}let It=A[wt];It&&It.connect(it)}}let $=new V,j=new V;function ot(J,ft,it){$.setFromMatrixPosition(ft.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);let wt=$.distanceTo(j),It=ft.projectionMatrix.elements,Ct=it.projectionMatrix.elements,oe=It[14]/(It[10]-1),Vt=It[14]/(It[10]+1),$t=(It[9]+1)/It[5],re=(It[9]-1)/It[5],Bt=(It[8]-1)/It[0],Ae=(Ct[8]+1)/Ct[0],le=oe*Bt,nn=oe*Ae,L=wt/(-Bt+Ae),Ce=L*-Bt;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(L),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),It[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Gt=oe+L,ie=Vt+L,lt=le-Ce,pe=nn+(wt-Ce),E=$t*Vt/ie*Gt,v=re*Vt/ie*Gt;J.projectionMatrix.makePerspective(lt,pe,E,v,Gt,ie),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function mt(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ft=J.near,it=J.far;d.texture!==null&&(d.depthNear>0&&(ft=d.depthNear),d.depthFar>0&&(it=d.depthFar)),U.near=P.near=T.near=ft,U.far=P.far=T.far=it,(G!==U.near||W!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,W=U.far),U.layers.mask=J.layers.mask|6,T.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let wt=J.parent,It=U.cameras;mt(U,wt);for(let Ct=0;Ct<It.length;Ct++)mt(It[Ct],wt);It.length===2?ot(U,T,P):U.projectionMatrix.copy(T.projectionMatrix),vt(J,U,wt)};function vt(J,ft,it){it===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(it.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ra*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(J){return m[J]};let kt=null;function Ot(J,ft){if(h=ft.getViewerPose(c||a),_=ft,h!==null){let it=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let wt=!1;it.length!==U.cameras.length&&(U.cameras.length=0,wt=!0);for(let Vt=0;Vt<it.length;Vt++){let $t=it[Vt],re=null;if(p!==null)re=p.getViewport($t);else{let Ae=f.getViewSubImage(u,$t);re=Ae.viewport,Vt===0&&(t.setRenderTargetTextures(b,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(b))}let Bt=R[Vt];Bt===void 0&&(Bt=new Ne,Bt.layers.enable(Vt),Bt.viewport=new he,R[Vt]=Bt),Bt.matrix.fromArray($t.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray($t.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(re.x,re.y,re.width,re.height),Vt===0&&(U.matrix.copy(Bt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),wt===!0&&U.cameras.push(Bt)}let It=i.enabledFeatures;if(It&&It.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();let Vt=f.getDepthInformation(it[0]);Vt&&Vt.isValid&&Vt.texture&&d.init(Vt,i.renderState)}if(It&&It.includes("camera-access")&&g){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<it.length;Vt++){let $t=it[Vt].camera;if($t){let re=m[$t];re||(re=new ur,m[$t]=re);let Bt=f.getCameraImage($t);re.sourceTexture=Bt}}}}for(let it=0;it<A.length;it++){let wt=w[it],It=A[it];wt!==null&&It!==void 0&&It.update(wt,ft,c||a)}kt&&kt(J,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),_=null}let Et=new bf;Et.setAnimationLoop(Ot),this.setAnimationLoop=function(J){kt=J},this.dispose=function(){}}},ax=new ve,Rf=new Pt;Rf.set(-1,0,0,0,1,0,0,0,1);function ox(s,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,mc(s)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,y,S,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(d,m):m.isMeshLambertMaterial?(r(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(d,m),f(d,m)):m.isMeshPhongMaterial?(r(d,m),h(d,m),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(d,m),u(d,m),m.isMeshPhysicalMaterial&&p(d,m,b)):m.isMeshMatcapMaterial?(r(d,m),_(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?l(d,m,y,S):m.isSpriteMaterial?c(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Xe&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Xe&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let y=t.get(m),S=y.envMap,b=y.envMapRotation;S&&(d.envMap.value=S,d.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Rf),d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function l(d,m,y,S){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=S*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function h(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function f(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function u(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){let y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lx(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=i[y.id];b===void 0&&(_(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",d));let A=S.program;n.updateUBOMapping(y,A);let w=t.render.frame;r[y.id]!==w&&(u(y),r[y.id]=w)}function h(y){let S=f();y.__bindingPointIndex=S;let b=s.createBuffer(),A=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],b=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,C=b.length;w<C;w++){let x=Array.isArray(b[w])?b[w]:[b[w]];for(let T=0,P=x.length;T<P;T++){let R=x[T];if(p(R,w,T,A)===!0){let U=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],W=0;for(let D=0;D<G.length;D++){let B=G[D],F=g(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,U+W,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):ArrayBuffer.isView(B)?R.__data.set(new B.constructor(B.buffer,B.byteOffset,R.__data.length)):(B.toArray(R.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,S,b,A){let w=y.value,C=S+"_"+b;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:ArrayBuffer.isView(w)?A[C]=w.slice():A[C]=w.clone(),!0;{let x=A[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return A[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function _(y){let S=y.uniforms,b=0,A=16;for(let C=0,x=S.length;C<x;C++){let T=Array.isArray(S[C])?S[C]:[S[C]];for(let P=0,R=T.length;P<R;P++){let U=T[P],G=Array.isArray(U.value)?U.value:[U.value];for(let W=0,D=G.length;W<D;W++){let B=G[W],F=g(B),$=b%A,j=$%F.boundary,ot=$+j;b+=j,ot!==0&&A-ot<F.storage&&(b+=A-ot),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=F.storage}}}let w=b%A;return w>0&&(b+=A-w),y.__size=b,y.__cache={},this}function g(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",y),S}function d(y){let S=y.target;S.removeEventListener("dispose",d);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function m(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}var cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function hx(){return Gn===null&&(Gn=new Na(cx,16,16,Pi,Vn),Gn.name="DFG_LUT",Gn.minFilter=Ue,Gn.magFilter=Ue,Gn.wrapS=Nn,Gn.wrapT=Nn,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var Wo=class{constructor(t={}){let{canvas:e=Zu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=$e}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let g=p,d=new Set([ro,so,io]),m=new Set([$e,Cn,Ns,Us,eo,no]),y=new Uint32Array(4),S=new Int32Array(4),b=new V,A=null,w=null,C=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,U=null;this._outputColorSpace=on;let G=0,W=0,D=null,B=-1,F=null,$=new he,j=new he,ot=null,mt=new zt(0),vt=0,kt=e.width,Ot=e.height,Et=1,J=null,ft=null,it=new he(0,0,kt,Ot),wt=new he(0,0,kt,Ot),It=!1,Ct=new Is,oe=!1,Vt=!1,$t=new ve,re=new V,Bt=new he,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function nn(){return D===null?Et:1}let L=n;function Ce(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"184"}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),L===null){let N="webgl2";if(L=Ce(N,M),L===null)throw Ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw At("WebGLRenderer: "+M.message),M}let Gt,ie,lt,pe,E,v,O,Y,Q,tt,at,X,Z,dt,_t,st,et,Rt,Nt,Zt,I,nt,q;function pt(){Gt=new __(L),Gt.init(),I=new ix(L,Gt),ie=new c_(L,Gt,t,I),lt=new ex(L,Gt),ie.reversedDepthBuffer&&u&&lt.buffers.depth.setReversed(!0),pe=new y_(L),E=new V0,v=new nx(L,Gt,lt,E,ie,I,pe),O=new g_(P),Y=new Tp(L),nt=new o_(L,Y),Q=new x_(L,Y,pe,nt),tt=new S_(L,Q,Y,nt,pe),Rt=new M_(L,ie,v),_t=new h_(E),at=new k0(P,O,Gt,ie,nt,_t),X=new ox(P,E),Z=new H0,dt=new J0(Gt),et=new a_(P,O,lt,tt,_,l),st=new tx(P,tt,ie),q=new lx(L,pe,ie,lt),Nt=new l_(L,Gt,pe),Zt=new v_(L,Gt,pe),pe.programs=at.programs,P.capabilities=ie,P.extensions=Gt,P.properties=E,P.renderLists=Z,P.shadowMap=st,P.state=lt,P.info=pe}pt(),g!==$e&&(T=new T_(g,e.width,e.height,i,r));let rt=new Bc(P,L);this.xr=rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(M){M!==void 0&&(Et=M,this.setSize(kt,Ot,!1))},this.getSize=function(M){return M.set(kt,Ot)},this.setSize=function(M,N,H=!0){if(rt.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=M,Ot=N,e.width=Math.floor(M*Et),e.height=Math.floor(N*Et),H===!0&&(e.style.width=M+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(kt*Et,Ot*Et).floor()},this.setDrawingBufferSize=function(M,N,H){kt=M,Ot=N,Et=H,e.width=Math.floor(M*H),e.height=Math.floor(N*H),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(g===$e){At("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Tt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(it)},this.setViewport=function(M,N,H,z){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,N,H,z),lt.viewport($.copy(it).multiplyScalar(Et).round())},this.getScissor=function(M){return M.copy(wt)},this.setScissor=function(M,N,H,z){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,N,H,z),lt.scissor(j.copy(wt).multiplyScalar(Et).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(M){lt.setScissorTest(It=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,H=!0){let z=0;if(M){let k=!1;if(D!==null){let ut=D.texture.format;k=d.has(ut)}if(k){let ut=D.texture.type,xt=m.has(ut),ht=et.getClearColor(),yt=et.getClearAlpha(),St=ht.r,Lt=ht.g,Ft=ht.b;xt?(y[0]=St,y[1]=Lt,y[2]=Ft,y[3]=yt,L.clearBufferuiv(L.COLOR,0,y)):(S[0]=St,S[1]=Lt,S[2]=Ft,S[3]=yt,L.clearBufferiv(L.COLOR,0,S))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),et.dispose(),Z.dispose(),dt.dispose(),E.dispose(),O.dispose(),tt.dispose(),nt.dispose(),q.dispose(),at.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Dh),rt.removeEventListener("sessionend",Lh),Gi.stop()};function K(M){M.preventDefault(),pc("WebGLRenderer: Context Lost."),R=!0}function Mt(){pc("WebGLRenderer: Context Restored."),R=!1;let M=pe.autoReset,N=st.enabled,H=st.autoUpdate,z=st.needsUpdate,k=st.type;pt(),pe.autoReset=M,st.enabled=N,st.autoUpdate=H,st.needsUpdate=z,st.type=k}function Dt(M){At("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Se(M){let N=M.target;N.removeEventListener("dispose",Se),Kt(N)}function Kt(M){Zn(M),E.remove(M)}function Zn(M){let N=E.get(M).programs;N!==void 0&&(N.forEach(function(H){at.releaseProgram(H)}),M.isShaderMaterial&&at.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,H,z,k,ut){N===null&&(N=Ae);let xt=k.isMesh&&k.matrixWorld.determinant()<0,ht=Bd(M,N,H,z,k);lt.setMaterial(z,xt);let yt=H.index,St=1;if(z.wireframe===!0){if(yt=Q.getWireframeAttribute(H),yt===void 0)return;St=2}let Lt=H.drawRange,Ft=H.attributes.position,bt=Lt.start*St,Qt=(Lt.start+Lt.count)*St;ut!==null&&(bt=Math.max(bt,ut.start*St),Qt=Math.min(Qt,(ut.start+ut.count)*St)),yt!==null?(bt=Math.max(bt,0),Qt=Math.min(Qt,yt.count)):Ft!=null&&(bt=Math.max(bt,0),Qt=Math.min(Qt,Ft.count));let be=Qt-bt;if(be<0||be===1/0)return;nt.setup(k,z,ht,H,yt);let me,jt=Nt;if(yt!==null&&(me=Y.get(yt),jt=Zt,jt.setIndex(me)),k.isMesh)z.wireframe===!0?(lt.setLineWidth(z.wireframeLinewidth*nn()),jt.setMode(L.LINES)):jt.setMode(L.TRIANGLES);else if(k.isLine){let Be=z.linewidth;Be===void 0&&(Be=1),lt.setLineWidth(Be*nn()),k.isLineSegments?jt.setMode(L.LINES):k.isLineLoop?jt.setMode(L.LINE_LOOP):jt.setMode(L.LINE_STRIP)}else k.isPoints?jt.setMode(L.POINTS):k.isSprite&&jt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))jt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Be=k._multiDrawStarts,gt=k._multiDrawCounts,sn=k._multiDrawCount,qt=yt?Y.get(yt).bytesPerElement:1,gn=E.get(z).currentProgram.getUniforms();for(let In=0;In<sn;In++)gn.setValue(L,"_gl_DrawID",In),jt.render(Be[In]/qt,gt[In])}else if(k.isInstancedMesh)jt.renderInstances(bt,be,k.count);else if(H.isInstancedBufferGeometry){let Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,gt=Math.min(H.instanceCount,Be);jt.renderInstances(bt,be,gt)}else jt.render(bt,be)};function Pn(M,N,H){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Xe,M.needsUpdate=!0,Yr(M,N,H),M.side=ei,M.needsUpdate=!0,Yr(M,N,H),M.side=zn):Yr(M,N,H)}this.compile=function(M,N,H=null){H===null&&(H=M),w=dt.get(H),w.init(N),x.push(w),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),M!==H&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights();let z=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ut=k.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let ht=ut[xt];Pn(ht,H,k),z.add(ht)}else Pn(ut,H,k),z.add(ut)}),w=x.pop(),z},this.compileAsync=function(M,N,H=null){let z=this.compile(M,N,H);return new Promise(k=>{function ut(){if(z.forEach(function(xt){E.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){k(M);return}setTimeout(ut,10)}Gt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let hl=null;function Fd(M){hl&&hl(M)}function Dh(){Gi.stop()}function Lh(){Gi.start()}let Gi=new bf;Gi.setAnimationLoop(Fd),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(M){hl=M,rt.setAnimationLoop(M),M===null?Gi.stop():Gi.start()},rt.addEventListener("sessionstart",Dh),rt.addEventListener("sessionend",Lh),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(M,N);let H=rt.enabled===!0&&rt.isPresenting===!0,z=T!==null&&(D===null||H)&&T.begin(P,D);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(N),N=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,D),w=dt.get(M,x.length),w.init(N),w.state.textureUnits=v.getTextureUnits(),x.push(w),$t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ct.setFromProjectionMatrix($t,wn,N.reversedDepth),Vt=this.localClippingEnabled,oe=_t.init(this.clippingPlanes,Vt),A=Z.get(M,C.length),A.init(),C.push(A),rt.enabled===!0&&rt.isPresenting===!0){let xt=P.xr.getDepthSensingMesh();xt!==null&&ul(xt,N,-1/0,P.sortObjects)}ul(M,N,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(J,ft),le=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,le&&et.addToRenderList(A,M),this.info.render.frame++,oe===!0&&_t.beginShadows();let k=w.state.shadowsArray;if(st.render(k,M,N),oe===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&T.hasRenderPass())===!1){let xt=A.opaque,ht=A.transmissive;if(w.setupLights(),N.isArrayCamera){let yt=N.cameras;if(ht.length>0)for(let St=0,Lt=yt.length;St<Lt;St++){let Ft=yt[St];Uh(xt,ht,M,Ft)}le&&et.render(M);for(let St=0,Lt=yt.length;St<Lt;St++){let Ft=yt[St];Nh(A,M,Ft,Ft.viewport)}}else ht.length>0&&Uh(xt,ht,M,N),le&&et.render(M),Nh(A,M,N)}D!==null&&W===0&&(v.updateMultisampleRenderTarget(D),v.updateRenderTargetMipmap(D)),z&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),nt.resetDefaultState(),B=-1,F=null,x.pop(),x.length>0?(w=x[x.length-1],v.setTextureUnits(w.state.textureUnits),oe===!0&&_t.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?A=C[C.length-1]:A=null,U!==null&&U.renderEnd()};function ul(M,N,H,z){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ct.intersectsSprite(M)){z&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4($t);let xt=tt.update(M),ht=M.material;ht.visible&&A.push(M,xt,ht,H,Bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ct.intersectsObject(M))){let xt=tt.update(M),ht=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Bt.copy(xt.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4($t)),Array.isArray(ht)){let yt=xt.groups;for(let St=0,Lt=yt.length;St<Lt;St++){let Ft=yt[St],bt=ht[Ft.materialIndex];bt&&bt.visible&&A.push(M,xt,bt,H,Bt.z,Ft)}}else ht.visible&&A.push(M,xt,ht,H,Bt.z,null)}}let ut=M.children;for(let xt=0,ht=ut.length;xt<ht;xt++)ul(ut[xt],N,H,z)}function Nh(M,N,H,z){let{opaque:k,transmissive:ut,transparent:xt}=M;w.setupLightsView(H),oe===!0&&_t.setGlobalState(P.clippingPlanes,H),z&&lt.viewport($.copy(z)),k.length>0&&qr(k,N,H),ut.length>0&&qr(ut,N,H),xt.length>0&&qr(xt,N,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Uh(M,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let bt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new cn(1,1,{generateMipmaps:!0,type:bt?Vn:$e,minFilter:Ci,samples:Math.max(4,ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace})}let ut=w.state.transmissionRenderTarget[z.id],xt=z.viewport||$;ut.setSize(xt.z*P.transmissionResolutionScale,xt.w*P.transmissionResolutionScale);let ht=P.getRenderTarget(),yt=P.getActiveCubeFace(),St=P.getActiveMipmapLevel();P.setRenderTarget(ut),P.getClearColor(mt),vt=P.getClearAlpha(),vt<1&&P.setClearColor(16777215,.5),P.clear(),le&&et.render(H);let Lt=P.toneMapping;P.toneMapping=An;let Ft=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),oe===!0&&_t.setGlobalState(P.clippingPlanes,z),qr(M,H,z),v.updateMultisampleRenderTarget(ut),v.updateRenderTargetMipmap(ut),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let Qt=0,be=N.length;Qt<be;Qt++){let me=N[Qt],{object:jt,geometry:Be,material:gt,group:sn}=me;if(gt.side===zn&&jt.layers.test(z.layers)){let qt=gt.side;gt.side=Xe,gt.needsUpdate=!0,Fh(jt,H,z,Be,gt,sn),gt.side=qt,gt.needsUpdate=!0,bt=!0}}bt===!0&&(v.updateMultisampleRenderTarget(ut),v.updateRenderTargetMipmap(ut))}P.setRenderTarget(ht,yt,St),P.setClearColor(mt,vt),Ft!==void 0&&(z.viewport=Ft),P.toneMapping=Lt}function qr(M,N,H){let z=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ut=M.length;k<ut;k++){let xt=M[k],{object:ht,geometry:yt,group:St}=xt,Lt=xt.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),ht.layers.test(H.layers)&&Fh(ht,N,H,yt,Lt,St)}}function Fh(M,N,H,z,k,ut){M.onBeforeRender(P,N,H,z,k,ut),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(P,N,H,z,M,ut),k.transparent===!0&&k.side===zn&&k.forceSinglePass===!1?(k.side=Xe,k.needsUpdate=!0,P.renderBufferDirect(H,N,z,k,M,ut),k.side=ei,k.needsUpdate=!0,P.renderBufferDirect(H,N,z,k,M,ut),k.side=zn):P.renderBufferDirect(H,N,z,k,M,ut),M.onAfterRender(P,N,H,z,k,ut)}function Yr(M,N,H){N.isScene!==!0&&(N=Ae);let z=E.get(M),k=w.state.lights,ut=w.state.shadowsArray,xt=k.state.version,ht=at.getParameters(M,k.state,ut,N,H,w.state.lightProbeGridArray),yt=at.getProgramCacheKey(ht),St=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Lt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=O.get(M.envMap||z.environment,Lt),z.envMapRotation=z.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,St===void 0&&(M.addEventListener("dispose",Se),St=new Map,z.programs=St);let Ft=St.get(yt);if(Ft!==void 0){if(z.currentProgram===Ft&&z.lightsStateVersion===xt)return Bh(M,ht),Ft}else ht.uniforms=at.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,H,ht),M.onBeforeCompile(ht,P),Ft=at.acquireProgram(ht,yt),St.set(yt,Ft),z.uniforms=ht.uniforms;let bt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(bt.clippingPlanes=_t.uniform),Bh(M,ht),z.needsLights=kd(M),z.lightsStateVersion=xt,z.needsLights&&(bt.ambientLightColor.value=k.state.ambient,bt.lightProbe.value=k.state.probe,bt.directionalLights.value=k.state.directional,bt.directionalLightShadows.value=k.state.directionalShadow,bt.spotLights.value=k.state.spot,bt.spotLightShadows.value=k.state.spotShadow,bt.rectAreaLights.value=k.state.rectArea,bt.ltc_1.value=k.state.rectAreaLTC1,bt.ltc_2.value=k.state.rectAreaLTC2,bt.pointLights.value=k.state.point,bt.pointLightShadows.value=k.state.pointShadow,bt.hemisphereLights.value=k.state.hemi,bt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,bt.spotLightMatrix.value=k.state.spotLightMatrix,bt.spotLightMap.value=k.state.spotLightMap,bt.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=Ft,z.uniformsList=null,Ft}function Oh(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Os.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Bh(M,N){let H=E.get(M);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Od(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let H=0,z=M.length;H<z;H++){let k=M[H];if(k.texture!==null&&k.boundingBox.containsPoint(b))return k}return null}function Bd(M,N,H,z,k){N.isScene!==!0&&(N=Ae),v.resetTextureUnits();let ut=N.fog,xt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ht=D===null?P.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ht.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,St=O.get(z.envMap||xt,yt),Lt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,be=!!H.morphAttributes.color,me=An;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=P.toneMapping);let jt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Be=jt!==void 0?jt.length:0,gt=E.get(z),sn=w.state.lights;if(oe===!0&&(Vt===!0||M!==F)){let se=M===F&&z.id===B;_t.setState(z,M,se)}let qt=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==sn.state.version||gt.outputColorSpace!==ht||k.isBatchedMesh&&gt.batching===!1||!k.isBatchedMesh&&gt.batching===!0||k.isBatchedMesh&&gt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&gt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&gt.instancing===!1||!k.isInstancedMesh&&gt.instancing===!0||k.isSkinnedMesh&&gt.skinning===!1||!k.isSkinnedMesh&&gt.skinning===!0||k.isInstancedMesh&&gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&gt.instancingMorph===!1&&k.morphTexture!==null||gt.envMap!==St||z.fog===!0&&gt.fog!==ut||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==_t.numPlanes||gt.numIntersection!==_t.numIntersection)||gt.vertexAlphas!==Lt||gt.vertexTangents!==Ft||gt.morphTargets!==bt||gt.morphNormals!==Qt||gt.morphColors!==be||gt.toneMapping!==me||gt.morphTargetsCount!==Be||!!gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(qt=!0):(qt=!0,gt.__version=z.version);let gn=gt.currentProgram;qt===!0&&(gn=Yr(z,N,k),U&&z.isNodeMaterial&&U.onUpdateProgram(z,gn,gt));let In=!1,hi=!1,hs=!1,te=gn.getUniforms(),Te=gt.uniforms;if(lt.useProgram(gn.program)&&(In=!0,hi=!0,hs=!0),z.id!==B&&(B=z.id,hi=!0),gt.needsLights){let se=Od(w.state.lightProbeGridArray,k);gt.lightProbeGrid!==se&&(gt.lightProbeGrid=se,hi=!0)}if(In||F!==M){lt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),te.setValue(L,"projectionMatrix",M.projectionMatrix),te.setValue(L,"viewMatrix",M.matrixWorldInverse);let fi=te.map.cameraPosition;fi!==void 0&&fi.setValue(L,re.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&te.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&te.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),F!==M&&(F=M,hi=!0,hs=!0)}if(gt.needsLights&&(sn.state.directionalShadowMap.length>0&&te.setValue(L,"directionalShadowMap",sn.state.directionalShadowMap,v),sn.state.spotShadowMap.length>0&&te.setValue(L,"spotShadowMap",sn.state.spotShadowMap,v),sn.state.pointShadowMap.length>0&&te.setValue(L,"pointShadowMap",sn.state.pointShadowMap,v)),k.isSkinnedMesh){te.setOptional(L,k,"bindMatrix"),te.setOptional(L,k,"bindMatrixInverse");let se=k.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),te.setValue(L,"boneTexture",se.boneTexture,v))}k.isBatchedMesh&&(te.setOptional(L,k,"batchingTexture"),te.setValue(L,"batchingTexture",k._matricesTexture,v),te.setOptional(L,k,"batchingIdTexture"),te.setValue(L,"batchingIdTexture",k._indirectTexture,v),te.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&te.setValue(L,"batchingColorTexture",k._colorsTexture,v));let ui=H.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Rt.update(k,H,gn),(hi||gt.receiveShadow!==k.receiveShadow)&&(gt.receiveShadow=k.receiveShadow,te.setValue(L,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Te.envMapIntensity.value=N.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=hx()),hi){if(te.setValue(L,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&zd(Te,hs),ut&&z.fog===!0&&X.refreshFogUniforms(Te,ut),X.refreshMaterialUniforms(Te,z,Et,Ot,w.state.transmissionRenderTarget[M.id]),gt.needsLights&&gt.lightProbeGrid){let se=gt.lightProbeGrid;Te.probesSH.value=se.texture,Te.probesMin.value.copy(se.boundingBox.min),Te.probesMax.value.copy(se.boundingBox.max),Te.probesResolution.value.copy(se.resolution)}Os.upload(L,Oh(gt),Te,v)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Os.upload(L,Oh(gt),Te,v),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&te.setValue(L,"center",k.center),te.setValue(L,"modelViewMatrix",k.modelViewMatrix),te.setValue(L,"normalMatrix",k.normalMatrix),te.setValue(L,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let se=z.uniformsGroups;for(let fi=0,us=se.length;fi<us;fi++){let zh=se[fi];q.update(zh,gn),q.bind(zh,gn)}}return gn}function zd(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function kd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,N,H){let z=E.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),E.get(M.texture).__webglTexture=N,E.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let H=E.get(M);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};let Vd=L.createFramebuffer();this.setRenderTarget=function(M,N=0,H=0){D=M,G=N,W=H;let z=null,k=!1,ut=!1;if(M){let ht=E.get(M);if(ht.__useDefaultFramebuffer!==void 0){lt.bindFramebuffer(L.FRAMEBUFFER,ht.__webglFramebuffer),$.copy(M.viewport),j.copy(M.scissor),ot=M.scissorTest,lt.viewport($),lt.scissor(j),lt.setScissorTest(ot),B=-1;return}else if(ht.__webglFramebuffer===void 0)v.setupRenderTarget(M);else if(ht.__hasExternalTextures)v.rebindTextures(M,E.get(M.texture).__webglTexture,E.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Lt=M.depthTexture;if(ht.__boundDepthTexture!==Lt){if(Lt!==null&&E.has(Lt)&&(M.width!==Lt.image.width||M.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(M)}}let yt=M.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ut=!0);let St=E.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(St[N])?z=St[N][H]:z=St[N],k=!0):M.samples>0&&v.useMultisampledRTT(M)===!1?z=E.get(M).__webglMultisampledFramebuffer:Array.isArray(St)?z=St[H]:z=St,$.copy(M.viewport),j.copy(M.scissor),ot=M.scissorTest}else $.copy(it).multiplyScalar(Et).floor(),j.copy(wt).multiplyScalar(Et).floor(),ot=It;if(H!==0&&(z=Vd),lt.bindFramebuffer(L.FRAMEBUFFER,z)&&lt.drawBuffers(M,z),lt.viewport($),lt.scissor(j),lt.setScissorTest(ot),k){let ht=E.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ht.__webglTexture,H)}else if(ut){let ht=N;for(let yt=0;yt<M.textures.length;yt++){let St=E.get(M.textures[yt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+yt,St.__webglTexture,H,ht)}}else if(M!==null&&H!==0){let ht=E.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,H)}B=-1},this.readRenderTargetPixels=function(M,N,H,z,k,ut,xt,ht=0){if(!(M&&M.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){lt.bindFramebuffer(L.FRAMEBUFFER,yt);try{let St=M.textures[ht],Lt=St.format,Ft=St.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),!ie.textureFormatReadable(Lt)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ft)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-z&&H>=0&&H<=M.height-k&&L.readPixels(N,H,z,k,I.convert(Lt),I.convert(Ft),ut)}finally{let St=D!==null?E.get(D).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=function(M,N,H,z,k,ut,xt,ht=0){return Zr(this,null,function*(){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(N>=0&&N<=M.width-z&&H>=0&&H<=M.height-k){lt.bindFramebuffer(L.FRAMEBUFFER,yt);let St=M.textures[ht],Lt=St.format,Ft=St.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht),!ie.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),L.readPixels(N,H,z,k,I.convert(Lt),I.convert(Ft),0);let Qt=D!==null?E.get(D).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,Qt);let be=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),yield $u(L,be,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(bt),L.deleteSync(be),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")})},this.copyFramebufferToTexture=function(M,N=null,H=0){let z=Math.pow(2,-H),k=Math.floor(M.image.width*z),ut=Math.floor(M.image.height*z),xt=N!==null?N.x:0,ht=N!==null?N.y:0;v.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,xt,ht,k,ut),lt.unbindTexture()};let Gd=L.createFramebuffer(),Hd=L.createFramebuffer();this.copyTextureToTexture=function(M,N,H=null,z=null,k=0,ut=0){let xt,ht,yt,St,Lt,Ft,bt,Qt,be,me=M.isCompressedTexture?M.mipmaps[ut]:M.image;if(H!==null)xt=H.max.x-H.min.x,ht=H.max.y-H.min.y,yt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Lt=H.min.y,Ft=H.isBox3?H.min.z:0;else{let Te=Math.pow(2,-k);xt=Math.floor(me.width*Te),ht=Math.floor(me.height*Te),M.isDataArrayTexture?yt=me.depth:M.isData3DTexture?yt=Math.floor(me.depth*Te):yt=1,St=0,Lt=0,Ft=0}z!==null?(bt=z.x,Qt=z.y,be=z.z):(bt=0,Qt=0,be=0);let jt=I.convert(N.format),Be=I.convert(N.type),gt;N.isData3DTexture?(v.setTexture3D(N,0),gt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(v.setTexture2DArray(N,0),gt=L.TEXTURE_2D_ARRAY):(v.setTexture2D(N,0),gt=L.TEXTURE_2D),lt.activeTexture(L.TEXTURE0),lt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),lt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),lt.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let sn=lt.getParameter(L.UNPACK_ROW_LENGTH),qt=lt.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=lt.getParameter(L.UNPACK_SKIP_PIXELS),In=lt.getParameter(L.UNPACK_SKIP_ROWS),hi=lt.getParameter(L.UNPACK_SKIP_IMAGES);lt.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),lt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),lt.pixelStorei(L.UNPACK_SKIP_PIXELS,St),lt.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),lt.pixelStorei(L.UNPACK_SKIP_IMAGES,Ft);let hs=M.isDataArrayTexture||M.isData3DTexture,te=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Te=E.get(M),ui=E.get(N),se=E.get(Te.__renderTarget),fi=E.get(ui.__renderTarget);lt.bindFramebuffer(L.READ_FRAMEBUFFER,se.__webglFramebuffer),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let us=0;us<yt;us++)hs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(M).__webglTexture,k,Ft+us),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(N).__webglTexture,ut,be+us)),L.blitFramebuffer(St,Lt,xt,ht,bt,Qt,xt,ht,L.DEPTH_BUFFER_BIT,L.NEAREST);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||E.has(M)){let Te=E.get(M),ui=E.get(N);lt.bindFramebuffer(L.READ_FRAMEBUFFER,Gd),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hd);for(let se=0;se<yt;se++)hs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.__webglTexture,k,Ft+se):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,k),te?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ui.__webglTexture,ut,be+se):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ui.__webglTexture,ut),k!==0?L.blitFramebuffer(St,Lt,xt,ht,bt,Qt,xt,ht,L.COLOR_BUFFER_BIT,L.NEAREST):te?L.copyTexSubImage3D(gt,ut,bt,Qt,be+se,St,Lt,xt,ht):L.copyTexSubImage2D(gt,ut,bt,Qt,St,Lt,xt,ht);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else te?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(gt,ut,bt,Qt,be,xt,ht,yt,jt,Be,me.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,ut,bt,Qt,be,xt,ht,yt,jt,me.data):L.texSubImage3D(gt,ut,bt,Qt,be,xt,ht,yt,jt,Be,me):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,bt,Qt,xt,ht,jt,Be,me.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,bt,Qt,me.width,me.height,jt,me.data):L.texSubImage2D(L.TEXTURE_2D,ut,bt,Qt,xt,ht,jt,Be,me);lt.pixelStorei(L.UNPACK_ROW_LENGTH,sn),lt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt),lt.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),lt.pixelStorei(L.UNPACK_SKIP_ROWS,In),lt.pixelStorei(L.UNPACK_SKIP_IMAGES,hi),ut===0&&N.generateMipmaps&&L.generateMipmap(gt),lt.unbindTexture()},this.initRenderTarget=function(M){E.get(M).__webglFramebuffer===void 0&&v.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?v.setTextureCube(M,0):M.isData3DTexture?v.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?v.setTexture2DArray(M,0):v.setTexture2D(M,0),lt.unbindTexture()},this.resetState=function(){G=0,W=0,D=null,lt.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ht._getUnpackColorSpace()}};function ri(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Bf(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Or={duration:.5,overwrite:!1,delay:0},nh,Fe,ae,Mn=1e8,ne=1/Mn,qc=Math.PI*2,fx=qc/4,dx=0,zf=Math.sqrt,px=Math.cos,mx=Math.sin,Ie=function(t){return typeof t=="string"},ye=function(t){return typeof t=="function"},oi=function(t){return typeof t=="number"},nl=function(t){return typeof t>"u"},qn=function(t){return typeof t=="object"},je=function(t){return t!==!1},ih=function(){return typeof window<"u"},Yo=function(t){return ye(t)||Ie(t)},kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,gx=/random\([^)]+\)/g,_x=/,\s*/g,Pf=/(?:-?\.?\d|\.)+/gi,sh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rh=/[+-]=-?[.\d]+/,xx=/[^,'"\[\]\s]+/gi,vx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,Wn,Yc,ah,dn={},Ko={},Vf,Gf=function(t){return(Ko=ks(t,dn))&&We},il=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Br=function(t,e){return!e&&console.warn(t)},Hf=function(t,e){return t&&(dn[t]=e)&&Ko&&(Ko[t]=e)||dn},zr=function(){return 0},yx={suppressEvents:!0,isStart:!0,kill:!1},Zo={suppressEvents:!0,kill:!1},Mx={suppressEvents:!0},oh={},Ni=[],Zc={},Wf,Ke={},kc={},If=30,Jo=[],lh="",ch=function(t){var e=t[0],n,i;if(qn(e)||ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Jo.length;i--&&!Jo[i].targetTest(e););n=Jo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dh(t[i],n)))||t.splice(i,1);return t},Ui=function(t){return t._gsap||ch(Sn(t))[0]._gsap},hh=function(t,e,n){return(n=t[e])&&ye(n)?t[e]():nl(n)&&t.getAttribute&&t.getAttribute(e)||n},qe=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},ue=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Qo=function(){var t=Ni.length,e=Ni.slice(0),n,i;for(Zc={},Ni.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uh=function(t){return!!(t._initted||t._startAt||t.add)},Xf=function(t,e,n,i){Ni.length&&!Fe&&Qo(),t.render(e,n,i||!!(Fe&&e<0&&uh(t))),Ni.length&&!Fe&&Qo()},qf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(xx).length<2?e:Ie(t)?t.trim():t},Yf=function(t){return t},pn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},bx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ks=function(t,e){for(var n in e)t[n]=e[n];return t},Df=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},jo=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Nr=function(t){var e=t.parent||fe,n=t.keyframes?bx(He(t.keyframes)):pn;if(je(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Tx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Zf=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},sl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Fi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ts=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ex=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Jc=function(t,e,n,i){return t._startAt&&(Fe?t._startAt.revert(Zo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},wx=function s(t){return!t||t._ts&&s(t.parent)},Lf=function(t){return t._repeat?Vs(t._tTime,t=t.duration()+t._rDelay)*t:0},Vs=function(t,e){var n=Math.floor(t=ue(t/e));return t&&n===t?n-1:n},tl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},rl=function(t){return t._end=ue(t._start+(t._tDur/Math.abs(t._ts||t._rts||ne)||0))},al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ue(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),rl(t),n._dirty||ts(n,t)),t},Jf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=tl(t.rawTime(),e),(!e._dur||Gr(0,e.totalDuration(),n)-e._tTime>ne)&&e.render(n,!0)),ts(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ne}},Xn=function(t,e,n,i){return e.parent&&Fi(e),e._start=ue((oi(n)?n:n||t!==fe?yn(t,n,e):t._time)+e._delay),e._end=ue(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zf(t,e,"_first","_last",t._sort?"_start":0),$c(e)||(t._recent=e),i||Jf(t,e),t._ts<0&&al(t,t._tTime),t},$f=function(t,e){return(dn.ScrollTrigger||il("scrollTrigger",e))&&dn.ScrollTrigger.create(e,t)},Kf=function(t,e,n,i,r){if(gh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wf!==Qe.frame)return Ni.push(t),t._lazy=[r,i],1},Ax=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},$c=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Cx=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Ax(t)&&!(!t._initted&&$c(t))||(t._ts<0||t._dp._ts<0)&&!$c(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=Gr(0,t._tDur,e),h=Vs(l,o),t._yoyo&&h&1&&(a=1-a),h!==Vs(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Fe||i||t._zTime===ne||!e&&t._zTime){if(!t._initted&&Kf(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?ne:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Jc(t,e,n,!0),t._onUpdate&&!n&&fn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&fn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Fi(t,1),!n&&!Fe&&(fn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Rx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Gs=function(t,e,n,i){var r=t._repeat,a=ue(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:ue(a*(r+1)+t._rDelay*r):a,o>0&&!i&&al(t,t._tTime=t._tDur*o),t.parent&&rl(t),n||ts(t.parent,t),t},Nf=function(t){return t instanceof Ge?ts(t):Gs(t,t._dur)},Px={_start:0,endTime:zr,totalDuration:zr},yn=function s(t,e,n){var i=t.labels,r=t._recent||Px,a=t.duration()>=Mn?r.endTime(!1):t._dur,o,l,c;return Ie(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ur=function(t,e,n){var i=oi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=je(l.vars.inherit)&&l.parent;a.immediateRender=je(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Ee(e[0],a,e[r+1])},Oi=function(t,e){return t||t===0?e(t):e},Gr=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!Ie(t)||!(e=vx.exec(t))?"":e[1]},Ix=function(t,e,n){return Oi(n,function(i){return Gr(t,e,i)})},Kc=[].slice,Qf=function(t,e){return t&&qn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&qn(t[0]))&&!t.nodeType&&t!==Wn},Dx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ie(i)&&!e||Qf(i,1)?(r=n).push.apply(r,Sn(i)):n.push(i)})||n},Sn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):Ie(t)&&!n&&(Yc||!Hs())?Kc.call((e||ah).querySelectorAll(t),0):He(t)?Dx(t,n):Qf(t)?Kc.call(t,0):t?[t]:[]},Qc=function(t){return t=Sn(t)[0]||Br("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Sn(e,n.querySelectorAll?n:n===t?Br("Invalid scope")||ah.createElement("div"):t)}},jf=function(t){return t.sort(function(){return .5-Math.random()})},td=function(t){if(ye(t))return t;var e=qn(t)?t:{each:t},n=es(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,f=i;return Ie(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],f=i[1]),function(u,p,_){var g=(_||e).length,d=a[g],m,y,S,b,A,w,C,x,T;if(!d){if(T=e.grid==="auto"?0:(e.grid||[1,Mn])[1],!T){for(C=-Mn;C<(C=_[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(d=a[g]=[],m=l?Math.min(T,g)*h-.5:i%T,y=T===Mn?0:l?g*f/T-.5:i/T|0,C=0,x=Mn,w=0;w<g;w++)S=w%T-m,b=y-(w/T|0),d[w]=A=c?Math.abs(c==="y"?b:S):zf(S*S+b*b),A>C&&(C=A),A<x&&(x=A);i==="random"&&jf(d),d.max=C-x,d.min=x,d.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(i==="edges"?-1:1),d.b=g<0?r-g:r,d.u=Oe(e.amount||e.each)||0,n=n&&g<0?Xx(n):n}return g=(d[u]-d.min)/d.max||0,ue(d.b+(n?n(g):g)*d.v)+d.u}},jc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ue(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(oi(n)?0:Oe(n))}},ed=function(t,e){var n=He(t),i,r;return!n&&qn(t)&&(i=n=t.radius||Mn,t.values?(t=Sn(t.values),(r=!oi(t[0]))&&(i*=i)):t=jc(t.increment)),Oi(e,n?ye(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Mn,h=0,f=t.length,u,p;f--;)r?(u=t[f].x-o,p=t[f].y-l,u=u*u+p*p):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:a,r||h===a||oi(a)?h:h+Oe(a)}:jc(t))},nd=function(t,e,n,i){return Oi(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Lx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Nx=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},Ux=function(t,e,n){return sd(t,e,0,1,n)},id=function(t,e,n){return Oi(n,function(i){return t[~~e(i)]})},Fx=function s(t,e,n){var i=e-t;return He(t)?id(t,s(0,t.length),e):Oi(n,function(r){return(i+(r-t)%i)%i+t})},Ox=function s(t,e,n){var i=e-t,r=i*2;return He(t)?id(t,s(0,t.length-1),e):Oi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Ws=function(t){return t.replace(gx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(_x);return nd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},sd=function(t,e,n,i,r){var a=e-t,o=i-n;return Oi(r,function(l){return n+((l-t)/a*o||0)})},Bx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=Ie(t),o={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(_){_*=f;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=ks(He(t)?[]:{},t));if(!h){for(l in e)ph.call(o,t,l,"get",e[l]);r=function(_){return vh(_,o)||(a?t.p:t)}}}return Oi(n,r)},Uf=function(t,e,n){var i=t.labels,r=Mn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},fn=function(t,e,n){var i=t.vars,r=i[e],a=ae,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ni.length&&Qo(),o&&(ae=o),h=l?r.apply(c,l):r.call(c),ae=a,h},Dr=function(t){return Fi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&fn(t,"onInterrupt"),t},zs,rd=[],ad=function(t){if(t)if(t=!t.name&&t.default||t,ih()||t.headless){var e=t.name,n=ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:zr,render:vh,add:ph,kill:ev,modifier:tv,rawVars:0},a={targetTest:0,get:0,getSetter:ol,aliases:{},register:0};if(Hs(),t!==i){if(Ke[e])return;pn(i,pn(jo(t,r),a)),ks(i.prototype,ks(r,jo(t,a))),Ke[i.prop=e]=i,t.targetTest&&(Jo.push(i),oh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Hf(e,i),t.register&&t.register(We,i,Ye)}else rd.push(t)},ee=255,Lr={aqua:[0,ee,ee],lime:[0,ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ee],navy:[0,0,128],white:[ee,ee,ee],olive:[128,128,0],yellow:[ee,ee,0],orange:[ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ee,0,0],pink:[ee,192,203],cyan:[0,ee,ee],transparent:[ee,ee,ee,0]},Vc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ee+.5|0},od=function(t,e,n){var i=t?oi(t)?[t>>16,t>>8&ee,t&ee]:0:Lr.black,r,a,o,l,c,h,f,u,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lr[t])i=Lr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ee,i&ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ee,t&ee]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Pf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Vc(l+1/3,r,a),i[1]=Vc(l,r,a),i[2]=Vc(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(sh),n&&i.length<4&&(i[3]=1),i}else i=t.match(Pf)||Lr.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/ee,a=i[1]/ee,o=i[2]/ee,f=Math.max(r,a,o),u=Math.min(r,a,o),h=(f+u)/2,f===u?l=c=0:(p=f-u,c=h>.5?p/(2-f-u):p/(f+u),l=f===r?(a-o)/p+(a<o?6:0):f===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ld=function(t){var e=[],n=[],i=-1;return t.split(ai).forEach(function(r){var a=r.match(is)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Ff=function(t,e,n){var i="",r=(t+i).match(ai),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!r)return t;if(r=r.map(function(u){return(u=od(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ld(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ai,"1").split(is),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ai),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},ai=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lr)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),zx=/hsl[a]?\(/,fh=function(t){var e=t.join(" "),n;if(ai.lastIndex=0,ai.test(e))return n=zx.test(e),t[1]=Ff(t[1],n),t[0]=Ff(t[0],n,ld(t[1])),!0},kr,Qe=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,f,u,p,_=function g(d){var m=s()-i,y=d===!0,S,b,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,S=A-a,(S>0||y)&&(w=++f.frame,u=A-f.time*1e3,f.time=A=A/1e3,a+=S+(S>=r?4:r-S),b=1),y||(l=c(g)),b)for(p=0;p<o.length;p++)o[p](A,u,w,d)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(d){return u/(1e3/(d||60))},wake:function(){Vf&&(!Yc&&ih()&&(Wn=Yc=window,ah=Wn.document||{},dn.gsap=We,(Wn.gsapVersions||(Wn.gsapVersions=[])).push(We.version),Gf(Ko||Wn.GreenSockGlobals||!Wn.gsap&&Wn||{}),rd.forEach(ad)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(d){return setTimeout(d,a-f.time*1e3+1|0)},kr=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),kr=0,c=zr},lagSmoothing:function(d,m){t=d||1/0,e=Math.min(m||33,t)},fps:function(d){r=1e3/(d||240),a=f.time*1e3+r},add:function(d,m,y){var S=m?function(b,A,w,C){d(b,A,w,C),f.remove(S)}:d;return f.remove(d),o[y?"unshift":"push"](S),Hs(),S},remove:function(d,m){~(m=o.indexOf(d))&&o.splice(m,1)&&p>=m&&p--},_listeners:o},f})(),Hs=function(){return!kr&&Qe.wake()},Xt={},kx=/^[\d.\-M][\d.\-,\s]/,Vx=/["']/g,Gx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Vx,"").trim():+c,i=l.substr(o+1).trim();return e},Hx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Wx=function(t){var e=(t+"").split("("),n=Xt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Gx(e[1])]:Hx(t).split(",").map(qf)):Xt._CE&&kx.test(t)?Xt._CE("",t):n},Xx=function(t){return function(e){return 1-t(1-e)}},es=function(t,e){return t&&(ye(t)?t:Xt[t]||Wx(t))||e},rs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return qe(t,function(o){Xt[o]=dn[o]=r,Xt[a=o.toLowerCase()]=n;for(var l in r)Xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xt[o+"."+l]=r[l]}),r},cd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/qc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*mx((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:cd(o);return r=qc/r,l.config=function(c,h){return s(t,c,h)},l},Hc=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:cd(n);return i.config=function(r){return s(t,r)},i};qe("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;rs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Xt.Linear.easeNone=Xt.none=Xt.Linear.easeIn;rs("Elastic",Gc("in"),Gc("out"),Gc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};rs("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);rs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});rs("Circ",function(s){return-(zf(1-s*s)-1)});rs("Sine",function(s){return s===1?1:-px(s*fx)+1});rs("Back",Hc("in"),Hc("out"),Hc());Xt.SteppedEase=Xt.steps=dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-ne;return function(o){return((i*Gr(0,a,o)|0)+r)*n}}};Or.ease=Xt["quad.out"];qe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return lh+=s+","+s+"Params,"});var dh=function(t,e){this.id=dx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:hh,this.set=e?e.getSetter:ol},Vr=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gs(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),kr||Qe.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Hs(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(al(this,n),!r._dp||r.parent||Jf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ne||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Vs(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ne?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?tl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ne?0:this._rts,this.totalTime(Gr(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),rl(this),Ex(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ne&&(this._tTime-=ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=ue(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(je(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mx);var i=Fe;return Fe=n,uh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(yn(this,n),je(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,je(i)),this._dur||(this._zTime=-ne),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ne)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=ye(n)?n:Yf,l=function(){var h=i.then;i.then=null,r&&r(),ye(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Dr(this)},s})();pn(Vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ne,_prom:0,_ps:!1,_rts:1});var Ge=(function(s){Bf(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=je(n.sortChildren),fe&&Xn(n.parent||fe,ri(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$f(ri(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Ur(0,arguments,this),this},e.from=function(i,r,a){return Ur(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Ur(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Nr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ee(i,r,yn(this,a),1),this},e.call=function(i,r,a){return Xn(this,Ee.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ee(i,a,yn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Nr(a).immediateRender=je(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,f){return o.startAt=a,Nr(o).immediateRender=je(o.immediateRender),this.staggerTo(i,r,o,l,c,h,f)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:ue(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,p,_,g,d,m,y,S,b,A,w,C;if(this!==fe&&h>l&&i>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,b=this._start,S=this._ts,m=!S,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,d=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(d*100+i,r,a);if(u=ue(h%d),h===l?(g=this._repeat,u=c):(A=ue(h/d),g=~~A,g&&g===A&&(u=c,g--),u>c&&(u=c)),A=Vs(this._tTime,d),!o&&this._tTime&&A!==g&&this._tTime-A*d-this._dur<=0&&(A=g),w&&g&1&&(u=c-u,C=1),g!==A&&!this._lock){var x=w&&A&1,T=x===(w&&g&1);if(g<A&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(C?0:ue(g*d)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&fn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Rx(this,ue(o),ue(u)),y&&(h-=u-(u=y._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!r&&!A&&(fn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||u>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,a),u!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=-ne);break}}p=_}else{p=this._last;for(var P=i<0?i:u;p;){if(_=p._prev,(p._act||P<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,r,a||Fe&&uh(p)),u!==this._time||!this._ts&&!m){y=0,_&&(h+=this._zTime=P?-ne:ne);break}}p=_}}if(y&&!r&&(this.pause(),y.render(u>=o?0:-ne)._zTime=u>=o?1:-1,this._ts))return this._start=b,rl(this),this.render(i,r,a);this._onUpdate&&!r&&fn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fi(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(fn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(oi(r)||(r=yn(this,r,i)),!(i instanceof Vr)){if(He(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ie(i))return this.addLabel(i,r);if(ye(i))i=Ee.delayedCall(0,i);else return this}return this!==i?Xn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ee?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ie(i)?this.removeLabel(i):ye(i)?this.killTweensOf(i):(i.parent===this&&sl(this,i),i===this._recent&&(this._recent=this._last),ts(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ue(Qe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=yn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=Ee.delayedCall(0,r||zr,a);return o.data="isPause",this._hasPause=1,Xn(this,o,yn(this,i))},e.removePause=function(i){var r=this._first;for(i=yn(this,i);r;)r._start===i&&r.data==="isPause"&&Fi(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Li!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=Sn(i),l=this._first,c=oi(r),h;l;)l instanceof Ee?Sx(l._targets,o)&&(c?(!Li||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=yn(a,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,p,_=Ee.to(a,pn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ne,onStart:function(){if(a.pause(),!p){var d=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==d&&Gs(_,d,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,f||[])}},r));return u?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,pn({startAt:{time:yn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Uf(this,yn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Uf(this,yn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ne)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=ue(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ts(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ts(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Mn,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=ue(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Gs(a,a===fe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(fe._ts&&(Xf(fe,tl(i,fe)),Wf=Qe.frame),Qe.frame>=If){If+=tn.autoSleep||120;var r=fe._first;if((!r||!r._ts)&&tn.autoSleep&&Qe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Qe.sleep()}}},t})(Vr);pn(Ge.prototype,{_lock:0,_hasPause:0,_forcing:0});var qx=function(t,e,n,i,r,a,o){var l=new Ye(this._pt,t,e,0,1,xh,null,r),c=0,h=0,f,u,p,_,g,d,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ws(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),u=n.match(zc)||[];f=zc.exec(i);)_=f[0],g=i.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==u[h++]&&(d=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:d,c:_.charAt(1)==="="?ss(d,_)-d:parseFloat(_)-d,m:p&&p<4?Math.round:0},c=zc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(rh.test(i)||m)&&(l.e=0),this._pt=l,l},ph=function(t,e,n,i,r,a,o,l,c,h){ye(i)&&(i=i(r||0,t,a));var f=t[e],u=n!=="get"?n:ye(f)?c?t[e.indexOf("set")||!ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=ye(f)?c?Kx:fd:_h,_;if(Ie(i)&&(~i.indexOf("random(")&&(i=Ws(i)),i.charAt(1)==="="&&(_=ss(u,i)+(Oe(u)||0),(_||_===0)&&(i=_))),!h||u!==i||th)return!isNaN(u*i)&&i!==""?(_=new Ye(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?jx:dd,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&il(e,i),qx.call(this,t,e,u,i,p,l||tn.stringFilter,c))},Yx=function(t,e,n,i,r){if(ye(t)&&(t=Fr(t,r,e,n,i)),!qn(t)||t.style&&t.nodeType||He(t)||kf(t))return Ie(t)?Fr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Fr(t[o],r,e,n,i);return a},mh=function(t,e,n,i,r,a){var o,l,c,h;if(Ke[t]&&(o=new Ke[t]).init(r,o.rawVars?e[t]:Yx(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Ye(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Li,th,gh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,d=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:d,S=t._overwrite==="auto"&&!nh,b=t.timeline,A=i.easeReverse||f,w,C,x,T,P,R,U,G,W,D,B,F,$;if(b&&(!u||!r)&&(r="none"),t._ease=es(r,Or.ease),t._rEase=A&&(es(A)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||u&&!i.stagger){if(G=d[0]?Ui(d[0]).harness:0,F=G&&i[G.prop],w=jo(i,oh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?Zo:yx),g._lazy=0),a){if(Fi(t._startAt=Ee.set(d,pn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&je(l),startAt:null,delay:0,onUpdate:c&&function(){return fn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!o&&!p)&&t._startAt.revert(Zo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),x=pn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&je(l),immediateRender:o,stagger:0,parent:m},w),F&&(x[G.prop]=F),Fi(t._startAt=Ee.set(d,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(Zo):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,ne,ne);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&je(l)||l&&!_,C=0;C<d.length;C++){if(P=d[C],U=P._gsap||ch(d)[C]._gsap,t._ptLookup[C]=D={},Zc[U.id]&&Ni.length&&Qo(),B=y===d?C:y.indexOf(P),G&&(W=new G).init(P,F||w,t,B,y)!==!1&&(t._pt=T=new Ye(t._pt,P,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(j){D[j]=T}),W.priority&&(R=1)),!G||F)for(x in w)Ke[x]&&(W=mh(x,w,t,B,P,y))?W.priority&&(R=1):D[x]=T=ph.call(t,P,x,"get",w[x],B,y,0,i.stringFilter);t._op&&t._op[C]&&t.kill(P,t._op[C]),S&&t._pt&&(Li=t,fe.killTweensOf(P,D,t.globalTime(e)),$=!t.parent,Li=0),t._pt&&l&&(Zc[U.id]=1)}R&&yh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,u&&e<=0&&b.render(Mn,!0,!0)},Zx=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,p;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,p=t._targets.length;p--;){if(h=u[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return th=1,t.vars[e]="+=0",gh(t,o),th=0,l?Br(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(p=c.length;p--;)f=c[p],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Me(n)+Oe(f.e)),f.b&&(f.b=h.s+Oe(f.b))},Jx=function(t,e){var n=t[0]?Ui(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=ks({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},$x=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(He(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Fr=function(t,e,n,i,r){return ye(t)?t.call(e,n,i,r):Ie(t)&&~t.indexOf("random(")?Ws(t):t},hd=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ud={};qe(hd+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ud[s]=1});var Ee=(function(s){Bf(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Nr(i))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,d=l.scrollTrigger,m=i.parent||fe,y=(He(n)||kf(n)?oi(n[0]):"length"in i)?[n]:Sn(n),S,b,A,w,C,x,T,P;if(o._targets=y.length?ch(y):Br("GSAP target "+n+" not found. https://gsap.com",!tn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||u||Yo(c)||Yo(h)){i=o.vars;var R=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Ge({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),S.kill(),S.parent=S._dp=ri(o),S._start=0,u||Yo(c)||Yo(h)){if(w=y.length,T=u&&td(u),qn(u))for(C in u)~hd.indexOf(C)&&(P||(P={}),P[C]=u[C]);for(b=0;b<w;b++)A=jo(i,ud),A.stagger=0,R&&(A.easeReverse=R),P&&ks(A,P),x=y[b],A.duration=+Fr(c,ri(o),b,x,y),A.delay=(+Fr(h,ri(o),b,x,y)||0)-o._delay,!u&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),S.to(x,A,T?T(b,x,y):0),S._ease=Xt.none;S.duration()?c=h=0:o.timeline=0}else if(_){Nr(pn(S.vars.defaults,{ease:"none"})),S._ease=es(_.ease||i.ease||"none");var U=0,G,W,D;if(He(_))_.forEach(function(B){return S.to(y,B,">")}),S.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||$x(C,_[C],A,_.easeEach);for(C in A)for(G=A[C].sort(function(B,F){return B.t-F.t}),U=0,b=0;b<G.length;b++)W=G[b],D={ease:W.e,duration:(W.t-(b?G[b-1].t:0))/100*c},D[C]=W.v,S.to(y,D,U),U+=D.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return p===!0&&!nh&&(Li=ri(o),fe.killTweensOf(y),Li=0),Xn(m,ri(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===ue(m._time)&&je(f)&&wx(ri(o))&&m.data!=="nested")&&(o._tTime=-ne,o.render(Math.max(0,-h)||0)),d&&$f(ri(o),d),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-ne&&!h?l:i<ne?0:i,u,p,_,g,d,m,y,S;if(!c)Cx(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(u=ue(f%g),f===l?(_=this._repeat,u=c):(d=ue(f/g),_=~~d,_&&_===d?(u=c,_--):u>c&&(u=c)),m=this._yoyo&&_&1,m&&(u=c-u),d=Vs(this._tTime,g),u===o&&!a&&this._initted&&_===d)return this._tTime=f,this;_!==d&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(ue(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Kf(this,h?i:u,a,r,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==d))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._rEase){var b=u<o;if(b!==this._inv){var A=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(b?-1:1)/A:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(u/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!r&&!d&&(fn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Jc(this,i,r,a),fn(this,"onUpdate")),this._repeat&&_!==d&&this.vars.onRepeat&&!r&&this.parent&&fn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Jc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fi(this,1),!r&&!(h&&!o)&&(f||o||m)&&(fn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){kr||Qe.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||gh(this,c),h=this._ease(c/this._dur),Zx(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(al(this,0),this.parent||Zf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Li&&Li.vars.overwrite!==!0)._first||Dr(this),this.parent&&a!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Sn(i):o,c=this._ptLookup,h=this._pt,f,u,p,_,g,d,m;if((!r||r==="all")&&Tx(o,l))return r==="all"&&(this._pt=0),Dr(this);for(f=this._op=this._op||[],r!=="all"&&(Ie(r)&&(g={},qe(r,function(y){return g[y]=1}),r=g),r=Jx(o,r)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],r==="all"?(f[m]=r,_=u,p={}):(p=f[m]=f[m]||{},_=r);for(g in _)d=u&&u[g],d&&((!("kill"in d.d)||d.d.kill(g)===!0)&&sl(this,d,"_pt"),delete u[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Dr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Ur(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Ur(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return fe.killTweensOf(i,r,a)},t})(Vr);pn(Ee.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});qe("staggerTo,staggerFrom,staggerFromTo",function(s){Ee[s]=function(){var t=new Ge,e=Kc.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var _h=function(t,e,n){return t[e]=n},fd=function(t,e,n){return t[e](n)},Kx=function(t,e,n,i){return t[e](i.fp,n)},Qx=function(t,e,n){return t.setAttribute(e,n)},ol=function(t,e){return ye(t[e])?fd:nl(t[e])&&t.setAttribute?Qx:_h},dd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},jx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},vh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},tv=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},ev=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?sl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},nv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},yh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ye=(function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||dd,this.d=l||this,this.set=c||_h,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=nv,this.m=n,this.mt=r,this.tween=i},s})();qe(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return oh[s]=1});dn.TweenMax=dn.TweenLite=Ee;dn.TimelineLite=dn.TimelineMax=Ge;fe=new Ge({sortChildren:!1,defaults:Or,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});tn.stringFilter=fh;var ns=[],$o={},iv=[],Of=0,sv=0,Wc=function(t){return($o[t]||iv).map(function(e){return e()})},eh=function(){var t=Date.now(),e=[];t-Of>2&&(Wc("matchMediaInit"),ns.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Wn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Wc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Of=t,Wc("matchMedia"))},pd=(function(){function s(e,n){this.selector=n&&Qc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=sv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){ye(n)&&(r=i,i=n,n=ye);var a=this,o=function(){var c=ae,h=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Qc(r)),ae=a,f=i.apply(a,arguments),ye(f)&&a._r.push(f),ae=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===ye?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ee&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Ge?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ee)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ns.length;a--;)ns[a].id===this.id&&ns.splice(a,1)},t.revert=function(n){this.kill(n||{})},s})(),rv=(function(){function s(e){this.contexts=[],this.scope=e,ae&&ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){qn(n)||(n={matches:n});var a=new pd(0,r||this.scope),o=a.conditions={},l,c,h;ae&&!a.selector&&(a.selector=ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Wn.matchMedia(n[c]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(eh):l.addEventListener("change",eh)));return h&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),el={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return ad(i)})},timeline:function(t){return new Ge(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ie(t)&&(t=Sn(t)[0]);var r=Ui(t||{}).get,a=n?Yf:qf;return n==="native"&&(n=""),t&&(e?a((Ke[e]&&Ke[e].get||r)(t,e,n,i)):function(o,l,c){return a((Ke[o]&&Ke[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Sn(t),t.length>1){var i=t.map(function(h){return We.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var a=Ke[e],o=Ui(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;zs._pt=0,f.init(t,n?h+n:h,zs,0,[t]),f.render(1,f),zs._pt&&vh(1,zs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=We.to(t,pn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=es(t.ease,Or.ease)),Df(Or,t||{})},config:function(t){return Df(tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ke[o]&&!dn[o]&&Br(e+" effect requires "+o+" plugin.")}),kc[e]=function(o,l,c){return n(Sn(o),pn(l||{},r),c)},a&&(Ge.prototype[e]=function(o,l,c){return this.add(kc[e](o,qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Xt[t]=es(e)},parseEase:function(t,e){return arguments.length?es(t,e):Xt},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ge(t),i,r;for(n.smoothChildTiming=je(t.smoothChildTiming),fe.remove(n),n._dp=0,n._time=n._tTime=fe._time,i=fe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ee&&i.vars.onComplete===i._targets[0]))&&Xn(n,i,i._start-i._delay),i=r;return Xn(fe,n,0),n},context:function(t,e){return t?new pd(t,e):ae},matchMedia:function(t){return new rv(t)},matchMediaRefresh:function(){return ns.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||eh()},addEventListener:function(t,e){var n=$o[t]||($o[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$o[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Fx,wrapYoyo:Ox,distribute:td,random:nd,snap:ed,normalize:Ux,getUnit:Oe,clamp:Ix,splitColor:od,toArray:Sn,selector:Qc,mapRange:sd,pipe:Lx,unitize:Nx,interpolate:Bx,shuffle:jf},install:Gf,effects:kc,ticker:Qe,updateRoot:Ge.updateRoot,plugins:Ke,globalTimeline:fe,core:{PropTween:Ye,globals:Hf,Tween:Ee,Timeline:Ge,Animation:Vr,getCache:Ui,_removeLinkedListItem:sl,reverting:function(){return Fe},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return nh=t}}};qe("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return el[s]=Ee[s]});Qe.add(Ge.updateRoot);zs=el.to({},{duration:0});var av=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ov=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=av(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Xc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ie(r)&&(l={},qe(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}ov(o,r)}}}},We=el.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Xc("roundProps",jc),Xc("modifiers"),Xc("snap",ed))||el;Ee.version=Ge.version=We.version="3.15.0";Vf=1;ih()&&Hs();var lv=Xt.Power0,cv=Xt.Power1,hv=Xt.Power2,uv=Xt.Power3,fv=Xt.Power4,dv=Xt.Linear,pv=Xt.Quad,mv=Xt.Cubic,gv=Xt.Quart,_v=Xt.Quint,xv=Xt.Strong,vv=Xt.Elastic,yv=Xt.Back,Mv=Xt.SteppedEase,Sv=Xt.Bounce,bv=Xt.Sine,Tv=Xt.Expo,Ev=Xt.Circ;var md,Bi,qs,wh,cs,wv,gd,Ah,Av=function(){return typeof window<"u"},ci={},ls=180/Math.PI,Ys=Math.PI/180,Xs=Math.atan2,_d=1e8,Ch=/([A-Z])/g,Cv=/(left|right|width|margin|padding|x)/i,Rv=/[\s,\(]\S/,Yn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Pv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Iv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Dv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Lv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ed=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},wd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Nv=function(t,e,n){return t.style[e]=n},Uv=function(t,e,n){return t.style.setProperty(e,n)},Fv=function(t,e,n){return t._gsap[e]=n},Ov=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Bv=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},zv=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},de="transform",en=de+"Origin",kv=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ci&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Yn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=li(i,o)}):this.tfm[t]=a.x?a[t]:li(i,t),t===en&&(this.tfm.zOrigin=a.zOrigin);else return Yn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(de)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(en,e,"")),t=de}(r||e)&&this.props.push(t,e,r[t])},Ad=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Vv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Ch,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ah(),(!r||!r.isStart)&&!n[de]&&(Ad(n),i.zOrigin&&n[en]&&(n[en]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cd=function(t,e){var n={target:t,props:[],revert:Vv,save:kv};return t._gsap||We.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Rd,bh=function(t,e){var n=Bi.createElementNS?Bi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Bi.createElement(t);return n&&n.style?n:Bi.createElement(t)},mn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ch,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Zs(e)||e,1)||""},xd="O,Moz,ms,Ms,Webkit".split(","),Zs=function(t,e,n){var i=e||cs,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(xd[a]+t in r););return a<0?null:(a===3?"ms":a>=0?xd[a]:"")+t},Th=function(){Av()&&window.document&&(md=window,Bi=md.document,qs=Bi.documentElement,cs=bh("div")||{style:{}},wv=bh("div"),de=Zs(de),en=de+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rd=!!Zs("perspective"),Ah=We.core.reverting,wh=1)},vd=function(t){var e=t.ownerSVGElement,n=bh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),qs.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),qs.removeChild(n),r},yd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Pd=function(t){var e,n;try{e=t.getBBox()}catch{e=vd(t),n=1}return e&&(e.width||e.height)||n||(e=vd(t)),e&&!e.width&&!e.x&&!e.y?{x:+yd(t,["x","cx","x1"])||0,y:+yd(t,["y","cy","y1"])||0,width:0,height:0}:e},Id=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pd(t))},ki=function(t,e){if(e){var n=t.style,i;e in ci&&e!==en&&(e=de),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ch,"-$1").toLowerCase())):n.removeAttribute(e)}},zi=function(t,e,n,i,r,a){var o=new Ye(t._pt,e,n,0,1,a?wd:Ed);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},Md={deg:1,rad:1,turn:1},Gv={grid:1,flex:1},Vi=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=cs.style,l=Cv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",p=i==="%",_,g,d,m;if(i===a||!r||Md[i]||Md[a])return r;if(a!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&Id(t),(p||a==="%")&&(ci[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],Me(p?r/_*f:r/100*_);if(o[l?"width":"height"]=f+(u?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Bi||!g.appendChild)&&(g=Bi.body),d=g._gsap,d&&p&&d.width&&l&&d.time===Qe.time&&!d.uncache)return Me(r/d.width*f);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[h],y?t.style[e]=y:ki(t,e)}else(p||a==="%")&&!Gv[mn(g,"display")]&&(o.position=mn(t,"position")),g===t&&(o.position="static"),g.appendChild(cs),_=cs[h],g.removeChild(cs),o.position="absolute";return l&&p&&(d=Ui(g),d.time=Qe.time,d.width=g[h]),Me(u?_*r/f:_&&r?f/_*r:0)},li=function(t,e,n,i){var r;return wh||Th(),e in Yn&&e!=="transform"&&(e=Yn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ci[e]&&e!=="transform"?(r=Xr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:cl(mn(t,en))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ll[e]&&ll[e](t,e,n)||mn(t,e)||hh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Vi(t,e,r,n)+n:r},Hv=function(t,e,n,i){if(!n||n==="none"){var r=Zs(e,t,1),a=r&&mn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=mn(t,"borderTopColor"))}var o=new Ye(this._pt,t.style,e,0,1,xh),l=0,c=0,h,f,u,p,_,g,d,m,y,S,b,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=mn(t,e)||i,g?t.style[e]=g:ki(t,e)),h=[n,i],fh(h),n=h[0],i=h[1],u=n.match(is)||[],A=i.match(is)||[],A.length){for(;f=is.exec(i);)d=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),d!==(g=u[c++]||"")&&(p=parseFloat(g)||0,b=g.substr((p+"").length),d.charAt(1)==="="&&(d=ss(p,d)+b),m=parseFloat(d),S=d.substr((m+"").length),l=is.lastIndex-S.length,S||(S=S||tn.units[e]||b,l===i.length&&(i+=S,o.e+=S)),b!==S&&(p=Vi(t,e,g,S)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:p,c:m-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?wd:Ed;return rh.test(i)&&(o.e=0),this._pt=o,o},Sd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Sd[n]||n,e[1]=Sd[i]||i,e.join(" ")},Xv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ci[o]&&(l=1,o=o==="transformOrigin"?en:de),ki(n,o);l&&(ki(n,de),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xr(n,1),a.uncache=1,Ad(i)))}},ll={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ye(t._pt,e,n,0,0,Xv);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Wr=[1,0,0,1,0,0],Dd={},Ld=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},bd=function(t){var e=mn(t,de);return Ld(e)?Wr:e.substr(7).match(sh).map(Me)},Rh=function(t,e){var n=t._gsap||Ui(t),i=t.style,r=bd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Wr:r):(r===Wr&&!t.offsetParent&&t!==qs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,qs.appendChild(t)),r=bd(t),l?i.display=l:ki(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):qs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Eh=function(t,e,n,i,r,a){var o=t._gsap,l=r||Rh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,p=l[0],_=l[1],g=l[2],d=l[3],m=l[4],y=l[5],S=e.split(" "),b=parseFloat(S[0])||0,A=parseFloat(S[1])||0,w,C,x,T;n?l!==Wr&&(C=p*d-_*g)&&(x=b*(d/C)+A*(-g/C)+(g*y-d*m)/C,T=b*(-_/C)+A*(p/C)-(p*y-_*m)/C,b=x,A=T):(w=Pd(t),b=w.x+(~S[0].indexOf("%")?b/100*w.width:b),A=w.y+(~(S[1]||S[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=b-c,y=A-h,o.xOffset=f+(m*p+y*g)-m,o.yOffset=u+(m*_+y*d)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[en]="0px 0px",a&&(zi(a,o,"xOrigin",c,b),zi(a,o,"yOrigin",h,A),zi(a,o,"xOffset",f,o.xOffset),zi(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+A)},Xr=function(t,e){var n=t._gsap||new dh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=mn(t,en)||"0",h,f,u,p,_,g,d,m,y,S,b,A,w,C,x,T,P,R,U,G,W,D,B,F,$,j,ot,mt,vt,kt,Ot,Et;return h=f=u=g=d=m=y=S=b=0,p=_=1,n.svg=!!(t.getCTM&&Id(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[de]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[de]!=="none"?l[de]:"")),i.scale=i.rotate=i.translate="none"),C=Rh(t,n.svg),n.svg&&(n.uncache?($=t.getBBox(),c=n.xOrigin-$.x+"px "+(n.yOrigin-$.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Eh(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,C)),A=n.xOrigin||0,w=n.yOrigin||0,C!==Wr&&(R=C[0],U=C[1],G=C[2],W=C[3],h=D=C[4],f=B=C[5],C.length===6?(p=Math.sqrt(R*R+U*U),_=Math.sqrt(W*W+G*G),g=R||U?Xs(U,R)*ls:0,y=G||W?Xs(G,W)*ls+g:0,y&&(_*=Math.abs(Math.cos(y*Ys))),n.svg&&(h-=A-(A*R+w*G),f-=w-(A*U+w*W))):(Et=C[6],kt=C[7],ot=C[8],mt=C[9],vt=C[10],Ot=C[11],h=C[12],f=C[13],u=C[14],x=Xs(Et,vt),d=x*ls,x&&(T=Math.cos(-x),P=Math.sin(-x),F=D*T+ot*P,$=B*T+mt*P,j=Et*T+vt*P,ot=D*-P+ot*T,mt=B*-P+mt*T,vt=Et*-P+vt*T,Ot=kt*-P+Ot*T,D=F,B=$,Et=j),x=Xs(-G,vt),m=x*ls,x&&(T=Math.cos(-x),P=Math.sin(-x),F=R*T-ot*P,$=U*T-mt*P,j=G*T-vt*P,Ot=W*P+Ot*T,R=F,U=$,G=j),x=Xs(U,R),g=x*ls,x&&(T=Math.cos(x),P=Math.sin(x),F=R*T+U*P,$=D*T+B*P,U=U*T-R*P,B=B*T-D*P,R=F,D=$),d&&Math.abs(d)+Math.abs(g)>359.9&&(d=g=0,m=180-m),p=Me(Math.sqrt(R*R+U*U+G*G)),_=Me(Math.sqrt(B*B+Et*Et)),x=Xs(D,B),y=Math.abs(x)>2e-4?x*ls:0,b=Ot?1/(Ot<0?-Ot:Ot):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ld(mn(t,de)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(r?(p*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Me(p),n.scaleY=Me(_),n.rotation=Me(g)+o,n.rotationX=Me(d)+o,n.rotationY=Me(m)+o,n.skewX=y+o,n.skewY=S+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[en]=cl(c)),n.xOffset=n.yOffset=0,n.force3D=tn.force3D,n.renderTransform=n.svg?Yv:Rd?Nd:qv,n.uncache=0,n},cl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Mh=function(t,e,n){var i=Oe(e);return Me(parseFloat(e)+parseFloat(Vi(t,"x",n+"px",i)))+i},qv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nd(t,e)},as="0deg",Hr="0px",os=") ",Nd=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,d=n.transformPerspective,m=n.force3D,y=n.target,S=n.zOrigin,b="",A=m==="auto"&&t&&t!==1||m===!0;if(S&&(f!==as||h!==as)){var w=parseFloat(h)*Ys,C=Math.sin(w),x=Math.cos(w),T;w=parseFloat(f)*Ys,T=Math.cos(w),a=Mh(y,a,C*T*-S),o=Mh(y,o,-Math.sin(w)*-S),l=Mh(y,l,x*T*-S+S)}d!==Hr&&(b+="perspective("+d+os),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(A||a!==Hr||o!==Hr||l!==Hr)&&(b+=l!==Hr||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+os),c!==as&&(b+="rotate("+c+os),h!==as&&(b+="rotateY("+h+os),f!==as&&(b+="rotateX("+f+os),(u!==as||p!==as)&&(b+="skew("+u+", "+p+os),(_!==1||g!==1)&&(b+="scale("+_+", "+g+os),y.style[de]=b||"translate(0, 0)"},Yv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,d=n.xOffset,m=n.yOffset,y=n.forceCSS,S=parseFloat(a),b=parseFloat(o),A,w,C,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ys,c*=Ys,A=Math.cos(l)*f,w=Math.sin(l)*f,C=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Ys,T=Math.tan(c-h),T=Math.sqrt(1+T*T),C*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),A*=T,w*=T)),A=Me(A),w=Me(w),C=Me(C),x=Me(x)):(A=f,x=u,w=C=0),(S&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(S=Vi(p,"x",a,"px"),b=Vi(p,"y",o,"px")),(_||g||d||m)&&(S=Me(S+_-(_*A+g*C)+d),b=Me(b+g-(_*w+g*x)+m)),(i||r)&&(T=p.getBBox(),S=Me(S+i/100*T.width),b=Me(b+r/100*T.height)),T="matrix("+A+","+w+","+C+","+x+","+S+","+b+")",p.setAttribute("transform",T),y&&(p.style[de]=T)},Zv=function(t,e,n,i,r){var a=360,o=Ie(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?ls:1),c=l-i,h=i+c+"deg",f,u;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*_d)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*_d)%a-~~(c/a)*a)),t._pt=u=new Ye(t._pt,e,n,i,c,Pv),u.e=h,u.u="deg",t._props.push(n),u},Td=function(t,e){for(var n in e)t[n]=e[n];return t},Jv=function(t,e,n){var i=Td({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[de]=e,o=Xr(n,1),ki(n,de),n.setAttribute("transform",c)):(c=getComputedStyle(n)[de],a[de]=e,o=Xr(n,1),a[de]=c);for(l in ci)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=Oe(c),_=Oe(h),f=p!==_?Vi(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new Ye(t._pt,o,l,f,u-f,Sh),t._pt.u=_||0,t._props.push(l));Td(o,i)};qe("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});ll[t>1?"border"+s:s]=function(o,l,c,h,f){var u,p;if(arguments.length<4)return u=a.map(function(_){return li(o,_,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,p,f)}});var Ph={name:"css",register:Th,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,p,_,g,d,m,y,S,b,A,w,C,x,T;wh||Th(),this.styles=this.styles||Cd(t),x=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ke[g]&&mh(g,e,n,i,t,r)))){if(p=typeof h,_=ll[g],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Ws(h)),_)_(this,t,g,h,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ai.lastIndex=0,ai.test(c)||(d=Oe(c),m=Oe(h),m?d!==m&&(c=Vi(t,g,c,m)+m):d&&(h+=d)),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),x.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ie(c)&&~c.indexOf("random(")&&(c=Ws(c)),Oe(c+"")||c==="auto"||(c+=tn.units[g]||Oe(li(t,g))||""),(c+"").charAt(1)==="="&&(c=li(t,g))):c=li(t,g),u=parseFloat(c),y=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),g in Yn&&(g==="autoAlpha"&&(u===1&&li(t,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),zi(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Yn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ci,S){if(this.styles.save(g),T=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=mn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var P=t.style.perspective;t.style.perspective=h,h=mn(t,"perspective"),P?t.style.perspective=P:ki(t,"perspective")}f=parseFloat(h)}if(b||(A=t._gsap,A.renderTransform&&!e.parseTransform||Xr(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,b=this._pt=new Ye(this._pt,o,de,0,1,A.renderTransform,A,0,-1),b.dep=1),g==="scale")this._pt=new Ye(this._pt,A,"scaleY",A.scaleY,(y?ss(A.scaleY,y+f):f)-A.scaleY||0,Sh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(en,0,o[en]),h=Wv(h),A.svg?Eh(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&zi(this,A,"zOrigin",A.zOrigin,m),zi(this,o,g,cl(c),cl(h)));continue}else if(g==="svgOrigin"){Eh(t,h,1,w,0,this);continue}else if(g in Dd){Zv(this,A,g,u,y?ss(u,y+h):h);continue}else if(g==="smoothOrigin"){zi(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Jv(this,h,t);continue}}else g in o||(g=Zs(g)||g);if(S||(f||f===0)&&(u||u===0)&&!Rv.test(h)&&g in o)d=(c+"").substr((u+"").length),f||(f=0),m=Oe(h)||(g in tn.units?tn.units[g]:d),d!==m&&(u=Vi(t,g,c,m)),this._pt=new Ye(this._pt,S?A:o,g,u,(y?ss(u,y+f):f)-u,!S&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?Lv:Sh),this._pt.u=m||0,S&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Dv):d!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Iv);else if(g in o)Hv.call(this,t,g,c,y?y+h:h);else if(g in t)this.add(t,g,c||t[g],y?y+h:h,i,r);else if(g!=="parseTransform"){il(g,h);continue}S||(g in o?x.push(g,0,o[g]):typeof t[g]=="function"?x.push(g,2,t[g]()):x.push(g,1,c||t[g])),a.push(g)}}C&&yh(this)},render:function(t,e){if(e.tween._time||!Ah())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:li,aliases:Yn,getSetter:function(t,e,n){var i=Yn[e];return i&&i.indexOf(",")<0&&(e=i),e in ci&&e!==en&&(t._gsap.x||li(t,"x"))?n&&gd===n?e==="scale"?Ov:Fv:(gd=n||{})&&(e==="scale"?Bv:zv):t.style&&!nl(t.style[e])?Nv:~e.indexOf("-")?Uv:ol(t,e)},core:{_removeProperty:ki,_getMatrix:Rh}};We.utils.checkPrefix=Zs;We.core.getStyleSaver=Cd;(function(s,t,e,n){var i=qe(s+","+t+","+e,function(r){ci[r]=1});qe(t,function(r){tn.units[r]="deg",Dd[r]=1}),Yn[i[13]]=s+","+t,qe(n,function(r){var a=r.split(":");Yn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");qe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){tn.units[s]="px"});We.registerPlugin(Ph);var Ih=We.registerPlugin(Ph)||We,qb=Ih.core.Tween;var $v=["sceneCanvas"],Ud=class s{canvasRef;renderer;scene;camera;cards=[];animationFrameId;resizeObserver;ngAfterViewInit(){this.initScene(),this.animate(),Ih.from(".hero-fade",{opacity:0,y:24,duration:.8,stagger:.12,ease:"power3.out"})}ngOnDestroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),this.resizeObserver?.disconnect(),this.renderer?.dispose()}initScene(){let t=this.canvasRef.nativeElement,e=t.parentElement;this.scene=new ar,this.camera=new Ne(50,e.clientWidth/e.clientHeight,.1,100),this.camera.position.set(0,0,14),this.renderer=new Wo({canvas:t,antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));let n=[2450411,440020,9133302,1096065],i=new bi(2.2,1.3,.06),r=5,a=4,o=2.8,l=1.9;for(let u=0;u<a;u++)for(let p=0;p<r;p++){let _=n[(u+p)%n.length],g=new dr({color:_,metalness:.15,roughness:.35,transmission:.55,transparent:!0,opacity:.85}),d=new Je(i,g);d.position.x=(p-(r-1)/2)*o,d.position.y=(u-(a-1)/2)*l,d.position.z=(Math.random()-.5)*4,d.rotation.x=(Math.random()-.5)*.3,d.rotation.y=(Math.random()-.5)*.3,d._floatPhase=Math.random()*Math.PI*2,d._floatSpeed=.4+Math.random()*.4,d._baseY=d.position.y,this.scene.add(d),this.cards.push(d)}let c=new xr(16777215,.7),h=new Ds(2450411,60,50);h.position.set(8,8,10);let f=new Ds(9133302,50,50);f.position.set(-8,-6,8),this.scene.add(c,h,f),this.resizeObserver=new ResizeObserver(()=>this.onResize()),this.resizeObserver.observe(e)}onResize(){if(!this.renderer||!this.camera||!this.canvasRef)return;let t=this.canvasRef.nativeElement.parentElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(t.clientWidth,t.clientHeight)}animate=()=>{if(this.animationFrameId=requestAnimationFrame(this.animate),!this.renderer||!this.scene||!this.camera)return;let t=performance.now()/1e3;this.cards.forEach(e=>{let n=e._floatPhase,i=e._floatSpeed,r=e._baseY;e.position.y=r+Math.sin(t*i+n)*.18,e.rotation.z=Math.sin(t*i*.5+n)*.05}),this.scene.rotation.y=Math.sin(t*.08)*.15,this.scene.rotation.x=Math.cos(t*.06)*.05,this.renderer.render(this.scene,this.camera)};static \u0275fac=function(e){return new(e||s)};static \u0275cmp=Vh({type:s,selectors:[["app-landing"]],viewQuery:function(e,n){if(e&1&&Hh($v,5),e&2){let i;Wh(i=Xh())&&(n.canvasRef=i.first)}},decls:61,vars:0,consts:[["sceneCanvas",""],[1,"bg-white"],[1,"relative","min-h-screen","overflow-hidden",2,"background","radial-gradient(ellipse at top, #0f1b3d, #0b1120 70%)"],[1,"absolute","inset-0","w-full","h-full"],[1,"relative","z-10","flex","items-center","justify-between","px-6","sm:px-10","h-20"],[1,"flex","items-center","gap-2"],[1,"w-8","h-8","rounded-lg","bg-white/10","flex","items-center","justify-center","font-display","font-bold","text-white"],[1,"font-display","font-bold","text-white","tracking-tight"],[1,"flex","items-center","gap-3"],["routerLink","/auth/login",1,"text-sm","font-medium","text-white/80","hover:text-white"],["routerLink","/auth/register","mat-flat-button","","color","primary",1,"!rounded-lg","!font-semibold"],[1,"relative","z-10","flex","flex-col","items-center","text-center","px-6","pt-20","sm:pt-28","pointer-events-none"],[1,"hero-fade","text-xs","font-semibold","tracking-[0.2em]","uppercase","text-cyan-300","mb-4"],[1,"hero-fade","font-display","text-4xl","sm:text-6xl","font-extrabold","text-white","leading-[1.05]","max-w-3xl"],[1,"hero-fade","text-white/70","text-base","sm:text-lg","max-w-xl","mt-6","leading-relaxed"],[1,"hero-fade","flex","items-center","gap-3","mt-8","pointer-events-auto"],["routerLink","/auth/register","mat-flat-button","","color","primary",1,"!h-12","!px-6","!rounded-lg","!font-semibold","!text-base"],["routerLink","/auth/login","mat-stroked-button","",1,"!h-12","!px-6","!rounded-lg","!font-semibold","!text-base","!text-white","!border-white/30"],[1,"px-6","sm:px-10","py-20","max-w-6xl","mx-auto"],[1,"grid","grid-cols-1","sm:grid-cols-3","gap-8"],[1,"w-10","h-10","rounded-lg","flex","items-center","justify-center","mb-4",2,"background","#2563eb1a","color","var(--brand-primary)"],[1,"font-display","font-bold"],[1,"font-display","font-bold","text-lg","text-slate-900","mb-2"],[1,"text-slate-500","text-sm","leading-relaxed"],[1,"w-10","h-10","rounded-lg","flex","items-center","justify-center","mb-4",2,"background","#06b6d41a","color","var(--brand-secondary)"],[1,"w-10","h-10","rounded-lg","flex","items-center","justify-center","mb-4",2,"background","#8b5cf61a","color","var(--brand-accent)"],[1,"border-t","border-slate-100","px-6","sm:px-10","py-8","flex","items-center","justify-between","text-sm","text-slate-400"],[1,"w-6","h-6","rounded","flex","items-center","justify-center","font-display","font-bold","text-white","text-xs",2,"background","var(--brand-primary)"],[1,"font-medium","text-slate-500"]],template:function(e,n){e&1&&(ce(0,"div",1)(1,"section",2),Gh(2,"canvas",3,0),ce(4,"nav",4)(5,"div",5)(6,"div",6),_e(7,"W"),ge(),ce(8,"span",7),_e(9,"WorkerPay Pro"),ge()(),ce(10,"div",8)(11,"a",9),_e(12,"Sign in"),ge(),ce(13,"a",10),_e(14,"Get started"),ge()()(),ce(15,"div",11)(16,"p",12),_e(17,"Workforce & Payroll, Unified"),ge(),ce(18,"h1",13),_e(19," Pay every worker right, on time, every time. "),ge(),ce(20,"p",14),_e(21," Track daily work, auto-calculate earnings, and manage payroll for your entire workforce \u2014 built for teams who pay by the day or by the task. "),ge(),ce(22,"div",15)(23,"a",16),_e(24," Start free "),ge(),ce(25,"a",17),_e(26," Sign in "),ge()()()(),ce(27,"section",18)(28,"div",19)(29,"div")(30,"div",20)(31,"span",21),_e(32,"01"),ge()(),ce(33,"h3",22),_e(34,"Record work daily"),ge(),ce(35,"p",23),_e(36," Log tasks or hours per worker. Earnings calculate automatically based on daily or per-task rates \u2014 no spreadsheets required. "),ge()(),ce(37,"div")(38,"div",24)(39,"span",21),_e(40,"02"),ge()(),ce(41,"h3",22),_e(42,"Generate payroll"),ge(),ce(43,"p",23),_e(44," Roll up any date range into a payroll record per worker, track what's paid versus pending, and export reports in PDF, Excel, or CSV. "),ge()(),ce(45,"div")(46,"div",25)(47,"span",21),_e(48,"03"),ge()(),ce(49,"h3",22),_e(50,"See it all at a glance"),ge(),ce(51,"p",23),_e(52," Live dashboards for admins and workers alike \u2014 earnings trends, productivity, and payment status, always up to date. "),ge()()()(),ce(53,"footer",26)(54,"span"),_e(55,"\xA9 2026 WorkerPay Pro"),ge(),ce(56,"div",5)(57,"div",27),_e(58,"W"),ge(),ce(59,"span",28),_e(60,"WorkerPay Pro"),ge()()()())},dependencies:[qh,Yh,Jh,Zh],encapsulation:2})};export{Ud as LandingComponent};
