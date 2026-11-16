(()=>{var Xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zd=0,Jc=1,Hd=2;var ba=1,Vd=2,lr=3,ti=0,sn=1,xn=2,Ms=0,cr=1,Qc=2,eu=3,tu=4,Gd=5;var bs=100,Wd=101,$d=102,Xd=103,qd=104,Yd=200,Zd=201,Kd=202,jd=203,nu=204,iu=205,Jd=206,Qd=207,ef=208,tf=209,nf=210,sf=211,rf=212,af=213,of=214,bo=0,So=1,Eo=2,Xs=3,To=4,wo=5,Ao=6,Ro=7,Qo=0,lf=1,cf=2,ni=0,su=1,ru=2,au=3,Sa=4,ou=5,lu=6,cu=7,kc="attached",uf="detached",uu=300,Ss=301,ur=302,el=303,tl=304,Bi=1e3,Ln=1001,qs=1002,Ft=1003,nl=1004;var Es=1005;var Gt=1006,hr=1007;var On=1008;var yn=1009,hu=1010,du=1011,dr=1012,il=1013,$n=1014,In=1015,Xn=1016,sl=1017,rl=1018,Ts=1020,fu=35902,pu=35899,mu=1021,gu=1022,Fn=1023,gi=1026,Ri=1027,al=1028,ol=1029,Yi=1030,ll=1031;var cl=1033,Ea=33776,Ta=33777,wa=33778,Aa=33779,ul=35840,hl=35841,dl=35842,fl=35843,pl=36196,ml=37492,gl=37496,_l=37488,vl=37489,Ra=37490,xl=37491,yl=37808,Ml=37809,bl=37810,Sl=37811,El=37812,Tl=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Il=37818,Pl=37819,Ll=37820,Dl=37821,Nl=36492,Ul=36494,Ol=36495,Fl=36283,Bl=36284,Ca=36285,kl=36286,zl=2200,hf=2201,df=2202,us=2300,hs=2301,yo=2302,zc=2303,as=2400,os=2401,Br=2402,Hl=2500,ff=2501,_u=0,Ia=1,fr=2,pf=3200;var Pa=0,mf=1,Ci="",Mt="srgb",Qt="srgb-linear",kr="linear",yt="srgb";var Mo=7680;var gf=519,_f=512,vf=513,xf=514,vu=515,yf=516,Mf=517,xu=518,yu=519,Mu=35044,Vl=35048;var bu="300 es",Dn=2e3,Ys=2001;function Qp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function em(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){let i=Zs("canvas");return i.style.display="block",i}var Yh={},Ks=null;function zr(...i){let e="THREE."+i.shift();Ks?Ks("log",e,...i):console.log(e,...i)}function Sf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Sf(i);let e="THREE."+i.shift();if(Ks)Ks("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Sf(i);let e="THREE."+i.shift();if(Ks)Ks("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function cs(...i){let e=i.join(" ");e in Yh||(Yh[e]=!0,He(...i))}function Ef(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Tf={[bo]:bo,[Eo]:Ao,[To]:To,[Xs]:wo,[So]:So,[Ao]:Eo,[Ro]:Ro,[wo]:Xs},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,Ws=Math.PI/180,ds=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Su(i,e){return(i%e+e)%e}function tm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function nm(i,e,t){return i!==e?(t-i)/(e-i):0}function Ur(i,e,t){return(1-t)*i+t*e}function im(i,e,t,n){return Ur(i,e,1-Math.exp(-t*n))}function sm(i,e=1){return e-Math.abs(Su(i,e*2)-e)}function rm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function am(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function om(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lm(i,e){return i+Math.random()*(e-i)}function cm(i){return i*(.5-Math.random())}function um(i){i!==void 0&&(Zh=i);let e=Zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hm(i){return i*Ws}function dm(i){return i*ds}function fm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tu(i,e){if(e.constructor===Float32Array)return i;let t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function wu(i,e){if(e.constructor===Float32Array)return i;let t=Gl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Bt={DEG2RAD:Ws,RAD2DEG:ds,generateUUID:qn,clamp:rt,euclideanModulo:Su,mapLinear:tm,inverseLerp:nm,lerp:Ur,damp:im,pingpong:sm,smoothstep:rm,smootherstep:am,randInt:om,randFloat:lm,randFloatSpread:cm,seededRandom:um,degToRad:hm,radToDeg:dm,isPowerOfTwo:fm,ceilPowerOfTwo:pm,floorPowerOfTwo:Eu,setQuaternionFromProperEuler:mm,normalize:wu,denormalize:Tu},Lu=class Lu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lu.prototype.isVector2=!0;var me=Lu,Ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(h!==v||l!==d||c!==p||u!==g){let f=l*d+c*p+u*g+h*v;f<0&&(d=-d,p=-p,g=-g,v=-v,f=-f);let m=1-o;if(f<.9995){let b=Math.acos(f),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,h=h*m+v*o}else{l=l*m+d*o,c=c*m+p*o,u=u*m+g*o,h=h*m+v*o;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-o*p,e[t+2]=c*g+u*p+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Du=class Du{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Du.prototype.isVector3=!0;var D=Du,hc=new D,Kh=new Ot,Nu=class Nu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=s[0],f=s[3],m=s[6],b=s[1],E=s[4],M=s[7],R=s[2],w=s[5],_=s[8];return r[0]=a*v+o*b+l*R,r[3]=a*f+o*E+l*w,r[6]=a*m+o*M+l*_,r[1]=c*v+u*b+h*R,r[4]=c*f+u*E+h*w,r[7]=c*m+u*M+h*_,r[2]=d*v+p*b+g*R,r[5]=d*f+p*E+g*w,r[8]=d*m+p*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,p=c*r-a*l,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nu.prototype.isMatrix3=!0;var Je=Nu,dc=new Je,jh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gm(){let i={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qt]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:jh,fromXYZ:Jh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:jh,fromXYZ:Jh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var st=gm();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,Co=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Zs("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_m=0,js=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Co.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var vm=0,pc=new D,Wt=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=Gt,a=On,o=Fn,l=yn,c=i.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=qn(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=uu;Wt.DEFAULT_ANISOTROPY=1;var Uu=class Uu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],f=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(p+1)/2,R=(m+1)/2,w=(u+d)/4,_=(h+v)/4,y=(g+f)/4;return E>M&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=y/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(f-g)/b,this.y=(h-v)/b,this.z=(d-u)/b,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uu.prototype.isVector4=!0;var bt=Uu,Io=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Wt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Io{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hr=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Po=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Jo=class Jo{constructor(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,f)}set(e,t,n,s,r,a,o,l,c,u,h,d,p,g,v,f){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=p,m[7]=g,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ps.setFromMatrixColumn(e,0).length(),r=1/Ps.setFromMatrixColumn(e,1).length(),a=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,ym)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Li.crossVectors(n,Sn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Li.crossVectors(n,Sn)),Li.normalize(),Ga.crossVectors(Sn,Li),s[0]=Li.x,s[4]=Ga.x,s[8]=Sn.x,s[1]=Li.y,s[5]=Ga.y,s[9]=Sn.y,s[2]=Li.z,s[6]=Ga.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],f=n[10],m=n[14],b=n[3],E=n[7],M=n[11],R=n[15],w=s[0],_=s[4],y=s[8],L=s[12],P=s[1],U=s[5],B=s[9],V=s[13],N=s[2],W=s[6],q=s[10],G=s[14],oe=s[3],H=s[7],J=s[11],te=s[15];return r[0]=a*w+o*P+l*N+c*oe,r[4]=a*_+o*U+l*W+c*H,r[8]=a*y+o*B+l*q+c*J,r[12]=a*L+o*V+l*G+c*te,r[1]=u*w+h*P+d*N+p*oe,r[5]=u*_+h*U+d*W+p*H,r[9]=u*y+h*B+d*q+p*J,r[13]=u*L+h*V+d*G+p*te,r[2]=g*w+v*P+f*N+m*oe,r[6]=g*_+v*U+f*W+m*H,r[10]=g*y+v*B+f*q+m*J,r[14]=g*L+v*V+f*G+m*te,r[3]=b*w+E*P+M*N+R*oe,r[7]=b*_+E*U+M*W+R*H,r[11]=b*y+E*B+M*q+R*J,r[15]=b*L+E*V+M*G+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],f=e[11],m=e[15],b=l*p-c*d,E=o*p-c*h,M=o*d-l*h,R=a*p-c*u,w=a*d-l*u,_=a*h-o*u;return t*(v*b-f*E+m*M)-n*(g*b-f*R+m*w)+s*(g*E-v*R+m*_)-r*(g*M-v*w+f*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],f=e[14],m=e[15],b=t*o-n*a,E=t*l-s*a,M=t*c-r*a,R=n*l-s*o,w=n*c-r*o,_=s*c-r*l,y=u*v-h*g,L=u*f-d*g,P=u*m-p*g,U=h*f-d*v,B=h*m-p*v,V=d*m-p*f,N=b*V-E*B+M*U+R*P-w*L+_*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/N;return e[0]=(o*V-l*B+c*U)*W,e[1]=(s*B-n*V-r*U)*W,e[2]=(v*_-f*w+m*R)*W,e[3]=(d*w-h*_-p*R)*W,e[4]=(l*P-a*V-c*L)*W,e[5]=(t*V-s*P+r*L)*W,e[6]=(f*M-g*_-m*E)*W,e[7]=(u*_-d*M+p*E)*W,e[8]=(a*B-o*P+c*y)*W,e[9]=(n*P-t*B-r*y)*W,e[10]=(g*w-v*M+m*b)*W,e[11]=(h*M-u*w-p*b)*W,e[12]=(o*L-a*U-l*y)*W,e[13]=(t*U-n*L+s*y)*W,e[14]=(v*E-g*R-f*b)*W,e[15]=(u*R-h*E+d*b)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,p=r*u,g=r*h,v=a*u,f=a*h,m=o*h,b=l*c,E=l*u,M=l*h,R=n.x,w=n.y,_=n.z;return s[0]=(1-(v+m))*R,s[1]=(p+M)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(d+m))*w,s[6]=(f+b)*w,s[7]=0,s[8]=(g+E)*_,s[9]=(f-b)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ps.set(s[0],s[1],s[2]).length(),o=Ps.set(s[4],s[5],s[6]).length(),l=Ps.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,u=1/o,h=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=h,Hn.elements[9]*=h,Hn.elements[10]*=h,t.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Ys)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Dn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Dn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Ys)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Jo.prototype.isMatrix4=!0;var tt=Jo,Ps=new D,Hn=new tt,xm=new D(0,0,0),ym=new D(1,1,1),Li=new D,Ga=new D,Sn=new D,Qh=new tt,ed=new Ot,jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ed.setFromEuler(this),this.setFromQuaternion(ed,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};jn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mm=0,td=new D,Ls=new Ot,li=new tt,Wa=new D,Tr=new D,bm=new D,Sm=new Ot,nd=new D(1,0,0),id=new D(0,1,0),sd=new D(0,0,1),rd={type:"added"},Em={type:"removed"},Ds={type:"childadded",child:null},mc={type:"childremoved",child:null},Ct=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new jn,n=new Ot,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Je}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(nd,e)}rotateY(e){return this.rotateOnAxis(id,e)}rotateZ(e){return this.rotateOnAxis(sd,e)}translateOnAxis(e,t){return td.copy(e).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nd,e)}translateY(e){return this.translateOnAxis(id,e)}translateZ(e){return this.translateOnAxis(sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Tr,Wa,this.up):li.lookAt(Wa,Tr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(li),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Em),mc.child=e,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rd),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tm={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},$a={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Su(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gc(a,r,e+1/3),this.g=gc(a,r,e),this.b=gc(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=wf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return st.workingToColorSpace(ln.copy(this),e),Math.round(rt(ln.r*255,0,255))*65536+Math.round(rt(ln.g*255,0,255))*256+Math.round(rt(ln.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(ln.copy(this),t);let n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Mt){st.workingToColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,s=ln.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL($a);let n=Ur(Di.h,$a.h,t),s=Ur(Di.s,$a.s,t),r=Ur(Di.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Ve;Ve.NAMES=wf;var _i=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vn=new D,ci=new D,_c=new D,ui=new D,Ns=new D,Us=new D,ad=new D,vc=new D,xc=new D,yc=new D,Mc=new bt,bc=new bt,Sc=new bt,pi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),ci.subVectors(n,t),_c.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(ci),l=Vn.dot(_c),c=ci.dot(ci),u=ci.dot(_c),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,p=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mc.setScalar(0),bc.setScalar(0),Sc.setScalar(0),Mc.fromBufferAttribute(e,t),bc.fromBufferAttribute(e,n),Sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mc,r.x),a.addScaledVector(bc,r.y),a.addScaledVector(Sc,r.z),a}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),ci.subVectors(e,t),Vn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Vn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ns.subVectors(s,n),Us.subVectors(r,n),vc.subVectors(e,n);let l=Ns.dot(vc),c=Us.dot(vc);if(l<=0&&c<=0)return t.copy(n);xc.subVectors(e,s);let u=Ns.dot(xc),h=Us.dot(xc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ns,a);yc.subVectors(e,r);let p=Ns.dot(yc),g=Us.dot(yc);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Us,o);let f=u*g-p*h;if(f<=0&&h-u>=0&&p-g>=0)return ad.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(ad,o);let m=1/(f+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ns,a).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xa.copy(n.boundingBox)),Xa.applyMatrix4(e.matrixWorld),this.union(Xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),qa.subVectors(this.max,wr),Os.subVectors(e.a,wr),Fs.subVectors(e.b,wr),Bs.subVectors(e.c,wr),Ni.subVectors(Fs,Os),Ui.subVectors(Bs,Fs),ns.subVectors(Os,Bs);let t=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-ns.z,ns.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,ns.z,0,-ns.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-ns.y,ns.x,0];return!Ec(t,Os,Fs,Bs,qa)||(t=[1,0,0,0,1,0,0,0,1],!Ec(t,Os,Fs,Bs,qa))?!1:(Ya.crossVectors(Ni,Ui),t=[Ya.x,Ya.y,Ya.z],Ec(t,Os,Fs,Bs,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hi=[new D,new D,new D,new D,new D,new D,new D,new D],Gn=new D,Xa=new en,Os=new D,Fs=new D,Bs=new D,Ni=new D,Ui=new D,ns=new D,wr=new D,qa=new D,Ya=new D,is=new D;function Ec(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);let o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=n.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var zt=new D,Za=new me,wm=0,Nt=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mu,this.updateRanges=[],this.gpuType=In,this.version=0,this._normalizationScale=e!==void 0?Gl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.array)}};var Gr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Am=new en,Ar=new D,Tc=new D,_n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);let t=Ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(Tc)),this.expandByPoint(Ar.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rm=0,Pn=new tt,wc=new Ct,ks=new D,En=new en,Rr=new en,jt=new D,It=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,n){return Pn.makeTranslation(e,t,n),this.applyMatrix4(Pn),this}scale(e,t,n){return Pn.makeScale(e,t,n),this.applyMatrix4(Pn),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(En.min,Rr.min),En.expandByPoint(jt),jt.addVectors(En.max,Rr.max),En.expandByPoint(jt)):(En.expandByPoint(Rr.min),En.expandByPoint(Rr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),jt.add(ks)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;let u=new D,h=new D,d=new D,p=new me,g=new me,v=new me,f=new D,m=new D;function b(L,P,U){c[L]=c[P]=c[U]=1,u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,U),p.fromBufferAttribute(r,L),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,U),h.sub(u),d.sub(u),g.sub(p),v.sub(p);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(f.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(B),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(B),o[L].add(f),o[P].add(f),o[U].add(f),l[L].add(m),l[P].add(m),l[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,P=E.length;L<P;++L){let U=E[L],B=U.start,V=U.count;for(let N=B,W=B+V;N<W;N+=3)b(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let M=new D,R=new D,w=new D,_=new D;function y(L){w.fromBufferAttribute(s,L),_.copy(w);let P=o[L];M.copy(P),M.sub(w.multiplyScalar(w.dot(P))).normalize(),R.crossVectors(_,P);let B=R.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,B)}for(let L=0,P=n.count;L<P;++L)c[L]&&y(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let m=0;m<u;m++)d[g++]=c[p++]}return new Nt(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ki=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=od(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=od(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function od(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=qn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var pn=new D,zi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Gl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Tu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):wu(e,this.data.array)}},Ac=new D,Cm=new D,Im=new Je,Tn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Im.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pm=0,mn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=cr,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Tn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new D,Rc=new D,Ka=new D,ja=new D,vi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),ja.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=ja.dot(this.direction),l=-ja.dot(Ka),c=ja.lengthSq(),u=Math.abs(1-a*a),h,d,p,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,p=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Rc).addScaledVector(Ka,d),p}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let n=di.dot(this.direction),s=di.dot(di)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,p=e.z-a.z,g=t.x-a.x,v=t.y-a.y,f=t.z-a.z,m=n.x-a.x,b=n.y-a.y,E=n.z-a.z,M=Math.abs(l),R=Math.abs(c),w=Math.abs(u),_,y,L,P,U,B,V,N,W,q,G,oe;if(M>=R&&M>=w?(L=l,B=h,W=g,oe=m,l>=0?(_=c,y=u,P=d,U=p,V=v,N=f,q=b,G=E):(_=u,y=c,P=p,U=d,V=f,N=v,q=E,G=b)):R>=w?(L=c,B=d,W=v,oe=b,c>=0?(_=u,y=l,P=p,U=h,V=f,N=g,q=E,G=m):(_=l,y=u,P=h,U=p,V=g,N=f,q=m,G=E)):(L=u,B=p,W=f,oe=E,u>=0?(_=l,y=c,P=h,U=d,V=g,N=v,q=m,G=b):(_=c,y=l,P=d,U=h,V=v,N=g,q=b,G=m)),L===0)return null;let H=_/L,J=y/L,te=1/L,le=P-H*B,De=U-J*B,K=V-H*W,he=N-J*W,we=q-H*oe,Le=G-J*oe,ye=we*he-Le*K,Be=le*Le-De*we,ft=K*De-he*le;if(s){if(ye<0||Be<0||ft<0)return null}else if((ye<0||Be<0||ft<0)&&(ye>0||Be>0||ft>0))return null;let We=ye+Be+ft;if(We===0)return null;let qe=te*(ye*B+Be*W+ft*oe);return(We>0?qe<0:qe>0)?null:this.at(qe/We,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ld=new tt,ss=new vi,Ja=new _n,cd=new D,Qa=new D,eo=new D,to=new D,Cc=new D,no=new D,ud=new D,io=new D,lt=class extends Ct{constructor(e=new It,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Cc.fromBufferAttribute(h,e),a?no.addScaledVector(Cc,u):no.addScaledVector(Cc.sub(t),u))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(Ja.containsPoint(ss.origin)===!1&&(ss.intersectSphere(Ja,cd)===null||ss.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),ss.copy(e.ray).applyMatrix4(ld),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let f=d[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),E=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let M=b,R=E;M<R;M+=3){let w=o.getX(M),_=o.getX(M+1),y=o.getX(M+2);s=so(this,m,e,n,c,u,h,w,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){let b=o.getX(f),E=o.getX(f+1),M=o.getX(f+2);s=so(this,a,e,n,c,u,h,b,E,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let f=d[g],m=a[f.materialIndex],b=Math.max(f.start,p.start),E=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let M=b,R=E;M<R;M+=3){let w=M,_=M+1,y=M+2;s=so(this,m,e,n,c,u,h,w,_,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let f=g,m=v;f<m;f+=3){let b=f,E=f+1,M=f+2;s=so(this,a,e,n,c,u,h,b,E,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function Lm(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Qa),i.getVertexPosition(l,eo),i.getVertexPosition(c,to);let u=Lm(i,e,t,n,Qa,eo,to,ud);if(u){let h=new D;pi.getBarycoord(ud,Qa,eo,to,h),s&&(u.uv=pi.getInterpolatedAttribute(s,o,l,c,h,new me)),r&&(u.uv1=pi.getInterpolatedAttribute(r,o,l,c,h,new me)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};pi.getNormal(Qa,eo,to,d.normal),u.face=d,u.barycoord=h}return u}var Cr=new bt,hd=new bt,dd=new bt,Dm=new bt,fd=new tt,ro=new D,Ic=new _n,pd=new tt,Pc=new vi,$r=class extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kc,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingBox.expandByPoint(ro)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingSphere.expandByPoint(ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ic.copy(this.boundingSphere),Ic.applyMatrix4(s),e.ray.intersectsSphere(Ic)!==!1&&(pd.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(pd),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uf?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hd.fromBufferAttribute(s.attributes.skinIndex,e),dd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Cr.copy(t),t.set(0,0,0,0)):(Cr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Cr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=dd.getComponent(r);if(a!==0){let o=hd.getComponent(r);fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dm.copy(Cr).applyMatrix4(fd),a)}}return t.isVector4&&(t.w=Cr.w),t.applyMatrix4(this.bindMatrixInverse)}},Qs=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},er=class extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ft,u=Ft,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},md=new tt,Nm=new tt,Xr=class i{constructor(e=[],t=[]){this.uuid=qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Nm;md.multiplyMatrices(o,t[r]),md.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new er(t,e,e,Fn,In);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(He("Skeleton: No bone found with UUID:",r),a=new Qs),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},xi=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new tt,gd=new tt,ao=[],_d=new en,Um=new tt,Ir=new lt,Pr=new _n,fs=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Um)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),_d.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(_d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),Pr.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zs),gd.multiplyMatrices(n,zs),Ir.matrixWorld=gd,Ir.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){let l=ao[a];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new er(new Float32Array(s*this.count),s,this.count,al,In));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new _n,Om=new me(.5,.5),oo=new D,Hi=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],v=r[9],f=r[10],m=r[11],b=r[12],E=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,p-u,m-g,R-b).normalize(),s[1].setComponents(c+a,p+u,m+g,R+b).normalize(),s[2].setComponents(c+o,p+h,m+v,R+E).normalize(),s[3].setComponents(c-o,p-h,m-v,R-E).normalize(),n)s[4].setComponents(l,d,f,M).normalize(),s[5].setComponents(c-l,p-d,m-f,R-M).normalize();else if(s[4].setComponents(c-l,p-d,m-f,R-M).normalize(),t===Dn)s[5].setComponents(c+l,p+d,m+f,R+M).normalize();else if(t===Ys)s[5].setComponents(l,d,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=Om.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vd=new tt,Lo=class i{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Hi),n[s].setFromProjectionMatrix(vd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Hi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Wn=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new D,No=new D,xd=new tt,Lr=new vi,lo=new _n,Lc=new D,yd=new D,yi=class extends Ct{constructor(e=new It,t=new Wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Do.fromBufferAttribute(t,s-1),No.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Do.distanceTo(No);e.setAttribute("lineDistance",new pt(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;xd.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,f=g-1;v<f;v+=c){let m=u.getX(v),b=u.getX(v+1),E=co(this,e,Lr,l,m,b,v);E&&t.push(E)}if(this.isLineLoop){let v=u.getX(g-1),f=u.getX(p),m=co(this,e,Lr,l,v,f,g-1);m&&t.push(m)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=p,f=g-1;v<f;v+=c){let m=co(this,e,Lr,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=co(this,e,Lr,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function co(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Do.fromBufferAttribute(o,s),No.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,No,Lc,yd)>n)return;Lc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lc);if(!(c<e.near||c>e.far))return{distance:c,point:yd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Md=new D,bd=new D,Vi=class extends yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Md.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Md.distanceTo(bd);e.setAttribute("lineDistance",new pt(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qr=class extends yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},tr=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sd=new tt,Hc=new vi,uo=new _n,ho=new D,Yr=class extends Ct{constructor(e=new It,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(s),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Sd.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Sd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,v=p;g<v;g++){let f=c.getX(g);ho.fromBufferAttribute(h,f),Ed(ho,f,l,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,v=p;g<v;g++)ho.fromBufferAttribute(h,g),Ed(ho,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ed(i,e,t,n,s,r,a){let o=Hc.distanceSqToPoint(i);if(o<t){let l=new D;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zr=class extends Wt{constructor(e=[],t=Ss,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kr=class extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Mi=class extends Wt{constructor(e,t,n=$n,s,r,a,o=Ft,l=Ft,c,u=gi,h=1){if(u!==gi&&u!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jr=class extends Mi{constructor(e,t=$n,n=Ss,s,r,a=Ft,o=Ft,l,c=gi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},An=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2));function g(v,f,m,b,E,M,R,w,_,y,L){let P=M/_,U=R/y,B=M/2,V=R/2,N=w/2,W=_+1,q=y+1,G=0,oe=0,H=new D;for(let J=0;J<q;J++){let te=J*U-V;for(let le=0;le<W;le++){let De=le*P-B;H[v]=De*b,H[f]=te*E,H[m]=N,c.push(H.x,H.y,H.z),H[v]=0,H[f]=0,H[m]=w>0?1:-1,u.push(H.x,H.y,H.z),h.push(le/_),h.push(1-J/y),G+=1}}for(let J=0;J<y;J++)for(let te=0;te<_;te++){let le=d+te+W*J,De=d+te+W*(J+1),K=d+(te+1)+W*(J+1),he=d+(te+1)+W*J;l.push(le,De,he),l.push(De,K,he),oe+=6}o.addGroup(p,oe,L),p+=oe,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ps=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],p=[],g=0,v=[],f=n/2,m=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(p,2));function b(){let M=new D,R=new D,w=0,_=(t-e)/n;for(let y=0;y<=r;y++){let L=[],P=y/r,U=P*(t-e)+e;for(let B=0;B<=s;B++){let V=B/s,N=V*l+o,W=Math.sin(N),q=Math.cos(N);R.x=U*W,R.y=-P*n+f,R.z=U*q,h.push(R.x,R.y,R.z),M.set(W,_,q).normalize(),d.push(M.x,M.y,M.z),p.push(V,1-P),L.push(g++)}v.push(L)}for(let y=0;y<s;y++)for(let L=0;L<r;L++){let P=v[L][y],U=v[L+1][y],B=v[L+1][y+1],V=v[L][y+1];(e>0||L!==0)&&(u.push(P,U,V),w+=3),(t>0||L!==r-1)&&(u.push(U,B,V),w+=3)}c.addGroup(m,w,0),m+=w}function E(M){let R=g,w=new me,_=new D,y=0,L=M===!0?e:t,P=M===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,f*P,0),d.push(0,P,0),p.push(.5,.5),g++;let U=g;for(let B=0;B<=s;B++){let N=B/s*l+o,W=Math.cos(N),q=Math.sin(N);_.x=L*q,_.y=f*P,_.z=L*W,h.push(_.x,_.y,_.z),d.push(0,P,0),w.x=W*.5+.5,w.y=q*.5*P+.5,p.push(w.x,w.y),g++}for(let B=0;B<s;B++){let V=R+B,N=U+B;M===!0?u.push(N,N+1,V):u.push(N+1,N,V),y+=3}c.addGroup(m,y,M===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fo=new D,po=new D,Dc=new D,mo=new pi,Qr=class extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ws*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d=new Map,p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:f,c:m}=mo;if(v.fromBufferAttribute(o,c[0]),f.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),mo.getNormal(Dc),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,h[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){let E=(b+1)%3,M=h[b],R=h[E],w=mo[u[b]],_=mo[u[E]],y=`${M}_${R}`,L=`${R}_${M}`,P=d.get(L);P?(Dc.dot(P.normal)<=r&&(p.push(w.x,w.y,w.z),p.push(_.x,_.y,_.z)),d.set(L,null)):d.has(y)||d.set(y,{index0:c[b],index1:c[E],normal:Dc.clone()})}}for(let g of d.values())if(g){let{index0:v,index1:f}=g;fo.fromBufferAttribute(o,v),po.fromBufferAttribute(o,f),p.push(fo.x,fo.y,fo.z),p.push(po.x,po.y,po.z)}this.setAttribute("position",new pt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new tt;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(rt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(rt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},nr=class extends Rn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*h+this.aX,c=d*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uo=class extends nr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Au(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,p*=u,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Td=new D,wd=new D,Nc=new Au,Uc=new Au,Oc=new Au,ir=class extends Rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(wd.subVectors(s[0],s[1]).add(s[0]),c=wd);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Td.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Td),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(u),p);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),Nc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,f),Uc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,f),Oc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Uc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Oc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Nc.calc(l),Uc.calc(l),Oc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ad(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Fm(i,e){let t=1-i;return t*t*e}function Bm(i,e){return 2*(1-i)*i*e}function km(i,e){return i*i*e}function Or(i,e,t,n){return Fm(i,e)+Bm(i,t)+km(i,n)}function zm(i,e){let t=1-i;return t*t*t*e}function Hm(i,e){let t=1-i;return 3*t*t*i*e}function Vm(i,e){return 3*(1-i)*i*i*e}function Gm(i,e){return i*i*i*e}function Fr(i,e,t,n,s){return zm(i,e)+Hm(i,t)+Vm(i,n)+Gm(i,s)}var ea=class extends Rn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oo=class extends Rn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fr(e,s.x,r.x,a.x,o.x),Fr(e,s.y,r.y,a.y,o.y),Fr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends Rn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Rn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(e,s.x,r.x,a.x),Or(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bo=class extends Rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Or(e,s.x,r.x,a.x),Or(e,s.y,r.y,a.y),Or(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ad(o,l.x,c.x,u.x,h.x),Ad(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Vc=Object.freeze({__proto__:null,ArcCurve:Uo,CatmullRomCurve3:ir,CubicBezierCurve:ea,CubicBezierCurve3:Oo,EllipseCurve:nr,LineCurve:ta,LineCurve3:Fo,QuadraticBezierCurve:na,QuadraticBezierCurve3:Bo,SplineCurve:ia}),ko=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Vc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ms=class extends ko{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new na(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ea(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new nr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Gi=class extends ms{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ms().fromJSON(s))}return this}};function Wm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Af(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return sa(r,a,t,o,l,c,0),a}function Af(i,e,t,n,s){let r;if(s===ag(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Rd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Rd(a/n|0,i[a],i[a+1],r);return r&&sr(r,r.next)&&(aa(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&eg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xm(i,n,s,r):$m(i)){e.push(l.i,i.i,c.i),aa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qm(gs(i),e),sa(i,e,t,n,s,r,2)):a===2&&Ym(i,e,t,n,s,r):sa(gs(i),e,t,n,s,r,1);break}}}function $m(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=p&&Dr(s,o,r,l,a,c,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,p=Math.min(o,l,c),g=Math.min(u,h,d),v=Math.max(o,l,c),f=Math.max(u,h,d),m=Gc(p,g,e,t,n),b=Gc(v,f,e,t,n),E=i.prevZ,M=i.nextZ;for(;E&&E.z>=m&&M&&M.z<=b;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=f&&E!==s&&E!==a&&Dr(o,u,l,h,c,d,E.x,E.y)&&Lt(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=p&&M.x<=v&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Dr(o,u,l,h,c,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=m;){if(E.x>=p&&E.x<=v&&E.y>=g&&E.y<=f&&E!==s&&E!==a&&Dr(o,u,l,h,c,d,E.x,E.y)&&Lt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Dr(o,u,l,h,c,d,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!sr(n,s)&&Cf(n,t,t.next,s)&&ra(n,s)&&ra(s,n)&&(e.push(n.i,t.i,s.i),aa(t),aa(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function Ym(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ig(a,o)){let l=If(a,o);a=gs(a,a.next),l=gs(l,l.next),sa(a,e,t,n,s,r,0),sa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Af(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ng(c))}s.sort(Km);for(let r=0;r<s.length;r++)t=jm(s[r],t);return t}function Km(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function jm(i,e){let t=Jm(i,e);if(!t)return e;let n=If(t,i);return gs(n,n.next),gs(t,t.next)}function Jm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(sr(i,t))return t;do{if(sr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Rf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ra(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Qm(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Qm(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function eg(i,e,t,n){let s=i;do s.z===0&&(s.z=Gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ng(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Rf(i,e,t,n,s,r,a,o)}function ig(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sg(i,e)&&(ra(i,e)&&ra(e,i)&&rg(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||sr(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sr(i,e){return i.x===e.x&&i.y===e.y}function Cf(i,e,t,n){let s=_o(Lt(i,e,t)),r=_o(Lt(i,e,n)),a=_o(Lt(t,n,i)),o=_o(Lt(t,n,e));return!!(s!==r&&a!==o||s===0&&go(i,t,e)||r===0&&go(i,n,e)||a===0&&go(t,i,n)||o===0&&go(t,e,n))}function go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _o(i){return i>0?1:i<0?-1:0}function sg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Cf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ra(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function rg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function If(i,e){let t=Wc(i.i,i.x,i.y),n=Wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rd(i,e,t,n){let s=Wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ag(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var $c=class{static triangulate(e,t,n=2){return Wm(e,t,n)}},ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Cd(e),Id(n,e);let a=e.length;t.forEach(Cd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Id(n,t[l]);let o=$c.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Cd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Id(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _s=class i extends It{constructor(e=new Gi([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new pt(s,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:og,E,M=!1,R,w,_,y;if(m){E=m.getSpacedPoints(u),M=!0,d=!1;let re=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(u,re),w=new D,_=new D,y=new D}d||(f=0,p=0,g=0,v=0);let L=o.extractPoints(c),P=L.shape,U=L.holes;if(!ls.isClockWise(P)){P=P.reverse();for(let re=0,ge=U.length;re<ge;re++){let ve=U[re];ls.isClockWise(ve)&&(U[re]=ve.reverse())}}function V(re){let ve=10000000000000001e-36,Ie=re[0];for(let Me=1;Me<=re.length;Me++){let Ye=Me%re.length,Ue=re[Ye],nt=Ue.x-Ie.x,Ge=Ue.y-Ie.y,ct=nt*nt+Ge*Ge,I=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ie.x),Math.abs(Ie.y)),Te=ve*I*I;if(ct<=Te){re.splice(Ye,1),Me--;continue}Ie=Ue}}V(P),U.forEach(V);let N=U.length,W=P;for(let re=0;re<N;re++){let ge=U[re];P=P.concat(ge)}function q(re,ge,ve){return ge||Ze("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ge,ve)}let G=P.length;function oe(re,ge,ve){let Ie,Me,Ye,Ue=re.x-ge.x,nt=re.y-ge.y,Ge=ve.x-re.x,ct=ve.y-re.y,I=Ue*Ue+nt*nt,Te=Ue*ct-nt*Ge;if(Math.abs(Te)>Number.EPSILON){let Ae=Math.sqrt(I),Ce=Math.sqrt(Ge*Ge+ct*ct),ae=ge.x-nt/Ae,C=ge.y+Ue/Ae,F=ve.x-ct/Ce,ie=ve.y+Ge/Ce,T=((F-ae)*ct-(ie-C)*Ge)/(Ue*ct-nt*Ge);Ie=ae+Ue*T-re.x,Me=C+nt*T-re.y;let x=Ie*Ie+Me*Me;if(x<=2)return new me(Ie,Me);Ye=Math.sqrt(x/2)}else{let Ae=!1;Ue>Number.EPSILON?Ge>Number.EPSILON&&(Ae=!0):Ue<-Number.EPSILON?Ge<-Number.EPSILON&&(Ae=!0):Math.sign(nt)===Math.sign(ct)&&(Ae=!0),Ae?(Ie=-nt,Me=Ue,Ye=Math.sqrt(I)):(Ie=Ue,Me=nt,Ye=Math.sqrt(I/2))}return new me(Ie/Ye,Me/Ye)}let H=[];for(let re=0,ge=W.length,ve=ge-1,Ie=re+1;re<ge;re++,ve++,Ie++)ve===ge&&(ve=0),Ie===ge&&(Ie=0),H[re]=oe(W[re],W[ve],W[Ie]);let J=[],te,le=H.concat();for(let re=0,ge=N;re<ge;re++){let ve=U[re];te=[];for(let Ie=0,Me=ve.length,Ye=Me-1,Ue=Ie+1;Ie<Me;Ie++,Ye++,Ue++)Ye===Me&&(Ye=0),Ue===Me&&(Ue=0),te[Ie]=oe(ve[Ie],ve[Ye],ve[Ue]);J.push(te),le=le.concat(te)}let De;if(f===0)De=ls.triangulateShape(W,U);else{let re=[],ge=[];for(let ve=0;ve<f;ve++){let Ie=ve/f,Me=p*Math.cos(Ie*Math.PI/2),Ye=g*Math.sin(Ie*Math.PI/2)+v;for(let Ue=0,nt=W.length;Ue<nt;Ue++){let Ge=q(W[Ue],H[Ue],Ye);Be(Ge.x,Ge.y,-Me),Ie===0&&re.push(Ge)}for(let Ue=0,nt=N;Ue<nt;Ue++){let Ge=U[Ue];te=J[Ue];let ct=[];for(let I=0,Te=Ge.length;I<Te;I++){let Ae=q(Ge[I],te[I],Ye);Be(Ae.x,Ae.y,-Me),Ie===0&&ct.push(Ae)}Ie===0&&ge.push(ct)}}De=ls.triangulateShape(re,ge)}let K=De.length,he=g+v;for(let re=0;re<G;re++){let ge=d?q(P[re],le[re],he):P[re];M?(_.copy(R.normals[0]).multiplyScalar(ge.x),w.copy(R.binormals[0]).multiplyScalar(ge.y),y.copy(E[0]).add(_).add(w),Be(y.x,y.y,y.z)):Be(ge.x,ge.y,0)}for(let re=1;re<=u;re++)for(let ge=0;ge<G;ge++){let ve=d?q(P[ge],le[ge],he):P[ge];M?(_.copy(R.normals[re]).multiplyScalar(ve.x),w.copy(R.binormals[re]).multiplyScalar(ve.y),y.copy(E[re]).add(_).add(w),Be(y.x,y.y,y.z)):Be(ve.x,ve.y,h/u*re)}for(let re=f-1;re>=0;re--){let ge=re/f,ve=p*Math.cos(ge*Math.PI/2),Ie=g*Math.sin(ge*Math.PI/2)+v;for(let Me=0,Ye=W.length;Me<Ye;Me++){let Ue=q(W[Me],H[Me],Ie);Be(Ue.x,Ue.y,h+ve)}for(let Me=0,Ye=U.length;Me<Ye;Me++){let Ue=U[Me];te=J[Me];for(let nt=0,Ge=Ue.length;nt<Ge;nt++){let ct=q(Ue[nt],te[nt],Ie);M?Be(ct.x,ct.y+E[u-1].y,E[u-1].x+ve):Be(ct.x,ct.y,h+ve)}}}we(),Le();function we(){let re=s.length/3;if(d){let ge=0,ve=G*ge;for(let Ie=0;Ie<K;Ie++){let Me=De[Ie];ft(Me[2]+ve,Me[1]+ve,Me[0]+ve)}ge=u+f*2,ve=G*ge;for(let Ie=0;Ie<K;Ie++){let Me=De[Ie];ft(Me[0]+ve,Me[1]+ve,Me[2]+ve)}}else{for(let ge=0;ge<K;ge++){let ve=De[ge];ft(ve[2],ve[1],ve[0])}for(let ge=0;ge<K;ge++){let ve=De[ge];ft(ve[0]+G*u,ve[1]+G*u,ve[2]+G*u)}}n.addGroup(re,s.length/3-re,0)}function Le(){let re=s.length/3,ge=0;ye(W,ge),ge+=W.length;for(let ve=0,Ie=U.length;ve<Ie;ve++){let Me=U[ve];ye(Me,ge),ge+=Me.length}n.addGroup(re,s.length/3-re,1)}function ye(re,ge){let ve=re.length;for(;--ve>=0;){let Ie=ve,Me=ve-1;Me<0&&(Me=re.length-1);for(let Ye=0,Ue=u+f*2;Ye<Ue;Ye++){let nt=G*Ye,Ge=G*(Ye+1),ct=ge+Ie+nt,I=ge+Me+nt,Te=ge+Me+Ge,Ae=ge+Ie+Ge;We(ct,I,Te,Ae)}}}function Be(re,ge,ve){l.push(re),l.push(ge),l.push(ve)}function ft(re,ge,ve){qe(re),qe(ge),qe(ve);let Ie=s.length/3,Me=b.generateTopUV(n,s,Ie-3,Ie-2,Ie-1);je(Me[0]),je(Me[1]),je(Me[2])}function We(re,ge,ve,Ie){qe(re),qe(ge),qe(Ie),qe(ge),qe(ve),qe(Ie);let Me=s.length/3,Ye=b.generateSideWallUV(n,s,Me-6,Me-3,Me-2,Me-1);je(Ye[0]),je(Ye[1]),je(Ye[3]),je(Ye[1]),je(Ye[2]),je(Ye[3])}function qe(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function je(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Vc[s.type]().fromJSON(s)),new i(n,e.options)}},og={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],p=e[s*3+1],g=e[s*3+2],v=e[r*3],f=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-h),new me(d,1-g),new me(v,1-m)]:[new me(o,1-l),new me(u,1-h),new me(p,1-g),new me(f,1-m)]}};function lg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var bi=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,p=[],g=[],v=[],f=[];for(let m=0;m<u;m++){let b=m*d-a;for(let E=0;E<c;E++){let M=E*h-r;g.push(M,-b,0),v.push(0,0,1),f.push(E/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let E=b+c*m,M=b+c*(m+1),R=b+1+c*(m+1),w=b+1+c*m;p.push(E,M,w),p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},oa=class i extends It{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,p=new D,g=new me;for(let v=0;v<=s;v++){for(let f=0;f<=n;f++){let m=r+f/n*a;p.x=h*Math.cos(m),p.y=h*Math.sin(m),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){let f=v*(n+1);for(let m=0;m<n;m++){let b=m+f,E=b,M=b+n+1,R=b+n+2,w=b+1;o.push(E,M,w),o.push(M,R,w)}}this.setIndex(o),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var la=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new D,d=new D,p=[],g=[],v=[],f=[];for(let m=0;m<=n;m++){let b=[],E=m/n,M=a+E*o,R=e*Math.cos(M),w=Math.sqrt(e*e-R*R),_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let y=0;y<=t;y++){let L=y/t,P=s+L*r;h.x=-w*Math.cos(P),h.y=R,h.z=w*Math.sin(P),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),f.push(L+_,1-E),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let E=u[m][b+1],M=u[m][b],R=u[m+1][b],w=u[m+1][b+1];(m!==0||a>0)&&p.push(E,M,w),(m!==n-1||l<Math.PI)&&p.push(M,R,w)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(v,3)),this.setAttribute("uv",new pt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ca=class i extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new D,p=new D,g=new D;for(let v=0;v<=n;v++){let f=a+v/n*o;for(let m=0;m<=s;m++){let b=m/s*r;p.x=(e+t*Math.cos(f))*Math.cos(b),p.y=(e+t*Math.cos(f))*Math.sin(b),p.z=t*Math.sin(f),c.push(p.x,p.y,p.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),g.subVectors(p,d).normalize(),u.push(g.x,g.y,g.z),h.push(m/s),h.push(v/n)}}for(let v=1;v<=n;v++)for(let f=1;f<=s;f++){let m=(s+1)*v+f-1,b=(s+1)*(v-1)+f-1,E=(s+1)*(v-1)+f,M=(s+1)*v+f;l.push(m,b,M),l.push(b,E,M)}this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Pd(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Pd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=ws(i[t]);for(let s in n)e[s]=n[s]}return e}function Pd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ru(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var Pf={clone:ws,merge:un},ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nn=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},gn=class extends nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ua=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Qo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ho=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vo=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function dg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ld(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function fg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Go=class extends Qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:as,endingEnd:as}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case os:r=e,o=2*t-n;break;case Br:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case os:a=e,l=2*n-t;break;case Br:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,f=v*g,m=-d*f+2*d*v-d*g,b=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-p)*f+(1.5+p)*v+.5*g,M=p*f-p*v;for(let R=0;R!==o;++R)r[R]=m*a[u+R]+b*a[c+R]+E*a[l+R]+M*a[h+R];return r}},ha=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Wo=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$o=class extends Qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(s-t),v=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*v+a[l+f]*g;return r}let d=o*2,p=e-1;for(let g=0;g!==o;++g){let v=a[c+g],f=a[l+g],m=p*d+g*2,b=h[m],E=h[m+1],M=e*d+g*2,R=u[M],w=u[M+1],_=mg(n,t,b,R,s);r[g]=Lf(_,v,E,w,f)}return r}};function Lf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function pg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Lf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=pg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fi(t,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fi(e.times,Array),values:Fi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Nr(e.settings)&&(n.settings={inTangents:Fi(e.settings.inTangents,Array),outTangents:Fi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $o(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break;case zc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return yo;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Nr(this.settings)&&(Dd(this.settings.inTangents,e),Dd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Nr(this.settings)&&(Nd(this.settings.inTangents,e),Nd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&em(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Nr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Dd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Nd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=hs;var Si=class extends vn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=us;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="color";var Ei=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Ei.prototype.ValueTypeName="number";var Xo=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ti=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName="quaternion";Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var wi=class extends vn{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=us;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};Wi.prototype.ValueTypeName="vector";var vs=class{constructor(e="",t=-1,n=[],s=Hl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(_g(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=dg(l);l=Ld(l,1,u),c=Ld(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ei(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return Wi;case"color":return da;case"quaternion":return Ti;case"bool":case"boolean":return Si;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _g(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gg(i.type);if(i.times===void 0){let n=[],s=[];fg(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Nr(i.settings)&&(t.settings={inTangents:Fi(i.settings.inTangents,Float32Array),outTangents:Fi(i.settings.outTangents,Float32Array)}),t}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ud(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ud(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ud(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var qo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Df=new qo,Un=class{constructor(e){this.manager=e!==void 0?e:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Un.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},Xc=class extends Error{constructor(e,t){super(e),this.response=t}},Ai=class extends Un{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:s});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=fi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,v=0,f=new ReadableStream({start(m){b();function b(){h.read().then(({done:E,value:M})=>{if(E)m.close();else{v+=M.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let w=0,_=u.length;w<_;w++){let y=u[w];y.onProgress&&y.onProgress(R)}m.enqueue(M),b()}},E=>{m.error(E)})}}});return new Response(f)}else throw new Xc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Kn.add(`file:${e}`,c);let u=fi[e];delete fi[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let h=0,d=u.length;h<d;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hs=new WeakMap,Yo=class extends Un{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Hs.get(a);h===void 0&&(h=[],Hs.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Zs("img");function l(){u(),t&&t(this);let h=Hs.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}Hs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Kn.remove(`image:${e}`);let d=Hs.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}Hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var fa=class extends Un{constructor(e){super(e)}load(e,t,n,s){let r=new Wt,a=new Yo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},$i=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pa=class extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new tt,Od=new D,Fd=new D,rr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Od.setFromMatrixPosition(e.matrixWorld),t.position.copy(Od),Fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ys||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new D,xo=new Ot,Zn=new D,ma=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,xo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,xo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,xo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,xo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new D,Bd=new me,kd=new me,Ut=class extends ma{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,Bd,kd),t.subVectors(kd,Bd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qc=class extends rr{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ds*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ga=class extends $i{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yc=class extends rr{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},xs=class extends $i{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends ma{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends rr{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},_a=class extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Bc=new WeakMap,va=class extends Un{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Bc.has(a)===!0?(s&&s(Bc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Kn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Bc.set(l,c),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=-90,Gs=1,ar=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new Ut(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new Ut(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let l=new Ut(Vs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zo=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ko=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Ot.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Ot.multiplyQuaternionsFlat(e,a,e,t,e,n),Ot.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},Cu="\\[\\]\\.:\\/",vg=new RegExp("["+Cu+"]","g"),Iu="[^"+Cu+"]",xg="[^"+Cu.replace("\\.","")+"]",yg=/((?:WC+[\/:])*)/.source.replace("WC",Iu),Mg=/(WCOD+)?/.source.replace("WCOD",xg),bg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),Sg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),Eg=new RegExp("^"+yg+Mg+bg+Sg+"$"),Tg=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vg,"")}static parseTrackName(e){let t=Eg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Kc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jo=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:as,endingEnd:as};for(let c=0;c!==a;++c){let u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=hf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ff:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Hl:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===df;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===zl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=os,s.endingEnd=os):(e?s.endingStart=this.zeroSlopeAtStart?os:as:s.endingStart=Br,t?s.endingEnd=this.zeroSlopeAtEnd?os:as:s.endingEnd=Br)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},wg=new Float32Array(1),xa=class extends Nn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],p=d.name,g=u[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}let v=t&&t._propertyBindings[h].binding.parsedPath;g=new Ko(Tt.create(n,p,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ha(new Float32Array(2),new Float32Array(2),1,wg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?vs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Hl),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let u=new jo(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?vs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var or=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ou=class Ou{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ou.prototype.isMatrix2=!0;var jc=Ou;var ya=class extends Vi{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ve(n),s=new Ve(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let v=d===r?n:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}let u=new It;u.setAttribute("position",new pt(l,3)),u.setAttribute("color",new pt(c,3));let h=new Wn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Ma=class extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Pu(i,e,t,n){let s=Ag(n);switch(t){case mu:return i*e;case al:return i*e/s.components*s.byteLength;case ol:return i*e/s.components*s.byteLength;case Yi:return i*e*2/s.components*s.byteLength;case ll:return i*e*2/s.components*s.byteLength;case gu:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case cl:return i*e*4/s.components*s.byteLength;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hl:case fl:return Math.max(i,16)*Math.max(e,8)/4;case ul:case dl:return Math.max(i,8)*Math.max(e,8)/2;case pl:case ml:case _l:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gl:case Ra:case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Ul:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fl:case Bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case kl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ag(i){switch(i){case yn:case hu:return{byteLength:1,components:1};case dr:case du:case Xn:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case $n:case il:case In:return{byteLength:4,components:1};case fu:case pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function tp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cg(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g0=`#ifdef USE_GRADIENTMAP
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
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,M0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,A0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,R0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,X0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,J0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,p_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,R_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I_=`uniform sampler2D t2D;
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
}`,P_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,O_=`#if DEPTH_PACKING == 3200
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
}`,F_=`#define DISTANCE
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
}`,B_=`#define DISTANCE
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
void main() {
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,j_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,ev=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,tv=`#define TOON
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
}`,nv=`#define TOON
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
}`,iv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,lv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Ig,alphahash_pars_fragment:Pg,alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Ug,aomap_fragment:Og,aomap_pars_fragment:Fg,batching_pars_vertex:Bg,batching_vertex:kg,begin_vertex:zg,beginnormal_vertex:Hg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:$g,clipping_planes_pars_fragment:Xg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:Yg,color_fragment:Zg,color_pars_fragment:Kg,color_pars_vertex:jg,color_vertex:Jg,common:Qg,defaultnormal_vertex:e0,displacementmap_pars_vertex:t0,displacementmap_vertex:n0,emissivemap_fragment:i0,emissivemap_pars_fragment:s0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:o0,envmap_common_pars_fragment:l0,envmap_pars_fragment:c0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:M0,envmap_vertex:h0,fog_vertex:d0,fog_pars_vertex:f0,fog_fragment:p0,fog_pars_fragment:m0,gradientmap_pars_fragment:g0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:x0,lights_pars_begin:y0,lights_toon_fragment:b0,lights_toon_pars_fragment:S0,lights_phong_fragment:E0,lights_phong_pars_fragment:T0,lights_physical_fragment:w0,lights_physical_pars_fragment:A0,lights_fragment_begin:R0,lights_fragment_maps:C0,lights_fragment_end:I0,lightprobes_pars_fragment:P0,logdepthbuf_fragment:L0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:U0,map_fragment:O0,map_pars_fragment:F0,map_particle_fragment:B0,map_particle_pars_fragment:k0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:H0,morphinstance_vertex:V0,morphcolor_vertex:G0,morphnormal_vertex:W0,morphtarget_pars_vertex:$0,morphtarget_vertex:X0,normal_fragment_begin:q0,normal_fragment_maps:Y0,normal_pars_fragment:Z0,normal_pars_vertex:K0,normal_vertex:j0,normalmap_pars_fragment:J0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:d_,shadowmap_vertex:f_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:__,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:y_,tonemapping_fragment:M_,tonemapping_pars_fragment:b_,transmission_fragment:S_,transmission_pars_fragment:E_,uv_pars_fragment:T_,uv_pars_vertex:w_,uv_vertex:A_,worldpos_vertex:R_,background_vert:C_,background_frag:I_,backgroundCube_vert:P_,backgroundCube_frag:L_,cube_vert:D_,cube_frag:N_,depth_vert:U_,depth_frag:O_,distance_vert:F_,distance_frag:B_,equirect_vert:k_,equirect_frag:z_,linedashed_vert:H_,linedashed_frag:V_,meshbasic_vert:G_,meshbasic_frag:W_,meshlambert_vert:$_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:K_,meshphong_vert:j_,meshphong_frag:J_,meshphysical_vert:Q_,meshphysical_frag:ev,meshtoon_vert:tv,meshtoon_frag:nv,points_vert:iv,points_frag:sv,shadow_vert:rv,shadow_frag:av,sprite_vert:ov,sprite_frag:lv},Re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},si={basic:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:un([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:un([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:un([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:un([Re.points,Re.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:un([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:un([Re.common,Re.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:un([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:un([Re.sprite,Re.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:un([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:un([Re.lights,Re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};si.physical={uniforms:un([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Wl={r:0,b:0,g:0},cv=new tt,np=new Je;np.set(-1,0,0,0,1,0,0,0,1);function uv(i,e,t,n,s,r){let a=new Ve(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let M=b.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(b){let E=!1,M=p(b);M===null?f(a,o):M&&M.isColor&&(f(M,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(b,E){let M=p(E);M&&M.isCubeTexture?(c===void 0&&(c=new lt(new An(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ws(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(np),c.material.toneMapped=st.getTransfer(M.colorSpace)!==yt,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new lt(new bi(2,2),new Jn({name:"BackgroundMaterial",uniforms:ws(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=st.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,E){b.getRGB(Wl,Ru(i)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,f(a,o)},render:g,addToRenderList:v,dispose:m}}function hv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,B,V,N,W){let q=!1,G=h(U,N,V,B);r!==G&&(r=G,c(r.object)),q=p(U,N,V,W),q&&g(U,N,V,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(U,B,V,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function h(U,B,V,N){let W=N.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let G=U.isInstancedMesh===!0?U.id:0,oe=q[G];oe===void 0&&(oe={},q[G]=oe);let H=oe[V.id];H===void 0&&(H={},oe[V.id]=H);let J=H[W];return J===void 0&&(J=d(l()),H[W]=J),J}function d(U){let B=[],V=[],N=[];for(let W=0;W<t;W++)B[W]=0,V[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:N,object:U,attributes:{},index:null}}function p(U,B,V,N){let W=r.attributes,q=B.attributes,G=0,oe=V.getAttributes();for(let H in oe)if(oe[H].location>=0){let te=W[H],le=q[H];if(le===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(U,B,V,N){let W={},q=B.attributes,G=0,oe=V.getAttributes();for(let H in oe)if(oe[H].location>=0){let te=q[H];te===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));let le={};le.attribute=te,te&&te.data&&(le.data=te.data),W[H]=le,G++}r.attributes=W,r.attributesNum=G,r.index=N}function v(){let U=r.newAttributes;for(let B=0,V=U.length;B<V;B++)U[B]=0}function f(U){m(U,0)}function m(U,B){let V=r.newAttributes,N=r.enabledAttributes,W=r.attributeDivisors;V[U]=1,N[U]===0&&(i.enableVertexAttribArray(U),N[U]=1),W[U]!==B&&(i.vertexAttribDivisor(U,B),W[U]=B)}function b(){let U=r.newAttributes,B=r.enabledAttributes;for(let V=0,N=B.length;V<N;V++)B[V]!==U[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function E(U,B,V,N,W,q,G){G===!0?i.vertexAttribIPointer(U,B,V,W,q):i.vertexAttribPointer(U,B,V,N,W,q)}function M(U,B,V,N){v();let W=N.attributes,q=V.getAttributes(),G=B.defaultAttributeValues;for(let oe in q){let H=q[oe];if(H.location>=0){let J=W[oe];if(J===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let te=J.normalized,le=J.itemSize,De=e.get(J);if(De===void 0)continue;let K=De.buffer,he=De.type,we=De.bytesPerElement,Le=he===i.INT||he===i.UNSIGNED_INT||J.gpuType===il;if(J.isInterleavedBufferAttribute){let ye=J.data,Be=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,ft=J.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let We=0;We<H.locationSize;We++)m(H.location+We,ye.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let We=0;We<H.locationSize;We++)f(H.location+We);i.bindBuffer(i.ARRAY_BUFFER,K);for(let We=0;We<H.locationSize;We++)E(H.location+We,le/H.locationSize,he,te,Be*we,(ft+le/H.locationSize*We)*we,Le)}else{if(J.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)m(H.location+ye,J.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<H.locationSize;ye++)f(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,K);for(let ye=0;ye<H.locationSize;ye++)E(H.location+ye,le/H.locationSize,he,te,le*we,le/H.locationSize*ye*we,Le)}}else if(G!==void 0){let te=G[oe];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(H.location,te);break;case 3:i.vertexAttrib3fv(H.location,te);break;case 4:i.vertexAttrib4fv(H.location,te);break;default:i.vertexAttrib1fv(H.location,te)}}}}b()}function R(){L();for(let U in n){let B=n[U];for(let V in B){let N=B[V];for(let W in N){let q=N[W];for(let G in q)u(q[G].object),delete q[G];delete N[W]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let B=n[U.id];for(let V in B){let N=B[V];for(let W in N){let q=N[W];for(let G in q)u(q[G].object),delete q[G];delete N[W]}}delete n[U.id]}function _(U){for(let B in n){let V=n[B];for(let N in V){let W=V[N];if(W[U.id]===void 0)continue;let q=W[U.id];for(let G in q)u(q[G].object),delete q[G];delete W[U.id]}}}function y(U){for(let B in n){let V=n[B],N=U.isInstancedMesh===!0?U.id:0,W=V[N];if(W!==void 0){for(let q in W){let G=W[q];for(let oe in G)u(G[oe].object),delete G[oe];delete W[q]}delete V[N],Object.keys(V).length===0&&delete n[B]}}}function L(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:f,disableUnusedAttributes:b}}function dv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let y=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==yn&&_!==In&&!y&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,maxSamples:R,samples:w}}function pv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Tn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,m=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):c();else{let b=r?0:n,E=b*4,M=m.clippingState||null;l.value=M,M=u(g,d,E,p);for(let R=0;R!==E;++R)M[R]=t[R];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let v=h!==null?h.length:0,f=null;if(v!==0){if(f=l.value,g!==!0||f===null){let m=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(f===null||f.length<m)&&(f=new Float32Array(m));for(let E=0,M=p;E!==v;++E,M+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}var Na=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ms});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=Gt),new ar(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Nf=256,mv=3,gv=20,ip=256,sp=16,_v=3,vv=new D,xv=new Ve,mr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new lt(new An(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vv}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(xv));let f=new ar(n,s,u);return f.position.copy(o),f.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=g,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nf,Eu(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===ur?this._setSize(e.image.length===0?Nf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Uf(e,!1,!1),n=Math.log2(e)-mv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Of()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yv(),this._integrationMaterial=Mv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/sp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-_v)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(ip*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Uf(i,e,t){return new Na(i,{minFilter:On,generateMipmaps:e,type:Xn,colorSpace:Qt,depthBuffer:t})}function Ua(i,e,t){return new Jn({name:i,uniforms:e,vertexShader:at.cube_vert,fragmentShader:t,side:sn,blending:Ms,depthTest:!1,depthWrite:!1})}function yv(){return Ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ip}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Mv(){return Ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bv(){return Ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Of(){return Ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ff(){return Ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Sv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){let p=d.mapping;if(p===el||p===tl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Na(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let p=d.mapping,g=p===el||p===tl,v=p===Ss||p===ur;if(g||v){let f=t.get(d),m=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new mr(i)),f=g?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),f.texture;if(f!==void 0)return f.texture;{let b=d.image;return g&&b&&b.height>0||v&&b&&l(b)?(n===null&&(n=new mr(i)),f=g?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,t.set(d,f),d.addEventListener("dispose",u),f.texture):null}}}return d}function o(d,p){return p===el?d.mapping=Ss:p===tl&&(d.mapping=ur),d}function l(d){let p=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function c(d){let p=d.target;p.removeEventListener("dispose",c);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ev(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Tv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let f in g.attributes)e.remove(g.attributes[f]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(g){let v=g.attributes;for(let f in v)e.update(v[f],i.ARRAY_BUFFER)}function h(g){let v=g.index,f=g.attributes.position,m=0;if(f===void 0)return;let b=v!==null?v.array.length:f.array.length/3-1,E=f.count>=65535?Wr:Gr,M=new E(Math.ceil(b/3)*6,1),R=M.array;if(v!==null){let _=v.array;m=v.version;for(let y=0,L=0;y<b;y+=3){let P=_[y+0],U=_[y+1],B=_[y+2];R[L++]=P,R[L++]=U,R[L++]=U,R[L++]=B,R[L++]=B,R[L++]=P}}else{m=f.version;for(let _=0,y=0;_<b;_+=3){let L=_+0,P=_+1,U=_+2;R[y++]=L,R[y++]=P,R[y++]=P,R[y++]=U,R[y++]=U,R[y++]=L}}M.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,M)}function d(g){let v=r.get(g);if(v){let f=g.index;f!==null&&v.version<f.version&&h(g)}else h(g);return r.get(g)}function p(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function wv(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,h*a,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,p);let v=0;for(let f=0;f<p;f++)v+=d[f];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Av(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rv(i,e,t){let n=new WeakMap,s=new bt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let L=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*R*4*h),_=new Hr(w,M,R,h);_.type=In,_.needsUpdate=!0;let y=E*4;for(let P=0;P<h;P++){let U=f[P],B=m[P],V=b[P],N=M*R*4*P;for(let W=0;W<U.count;W++){let q=W*y;p===!0&&(s.fromBufferAttribute(U,W),w[N+q+0]=s.x,w[N+q+1]=s.y,w[N+q+2]=s.z,w[N+q+3]=0),g===!0&&(s.fromBufferAttribute(B,W),w[N+q+4]=s.x,w[N+q+5]=s.y,w[N+q+6]=s.z,w[N+q+7]=0),v===!0&&(s.fromBufferAttribute(V,W),w[N+q+8]=s.x,w[N+q+9]=s.y,w[N+q+10]=s.z,w[N+q+11]=V.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new me(M,R)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cv(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Iv={[su]:"LINEAR_TONE_MAPPING",[ru]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[Sa]:"ACES_FILMIC_TONE_MAPPING",[lu]:"AGX_TONE_MAPPING",[cu]:"NEUTRAL_TONE_MAPPING",[ou]:"CUSTOM_TONE_MAPPING"};function Pv(i,e,t,n,s,r){let a=new wn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new It;u.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new pt([0,2,0,0,2,0],2));let h=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new lt(u,h),p=new ys(-1,1,1,-1,0,1),g=null,v=null,f=!1,m,b=null,E=[],M=!1;this.setSize=function(R,w){a.setSize(R,w),o!==null&&o.setSize(R,w),l!==null&&l.setSize(R,w);for(let _=0;_<E.length;_++){let y=E[_];y.setSize&&y.setSize(R,w)}},this.setEffects=function(R){E=R,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new wn(w,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new wn(w,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));let y=s===!0&&E.some(L=>L.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&c===null&&(c=new Mi(w,_),r===!0&&(c.format=Ri,c.type=Ts)),a.dispose(),a.depthTexture=y?c:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let L=0;L<E.length;L++){let P=E[L];P.setSize&&P.setSize(w,_),y&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,w){if(f||R.toneMapping===ni&&E.length===0)return!1;if(b=w,w!==null){let _=w.width,y=w.height;(a.width!==_||a.height!==y)&&this.setSize(_,y)}return M===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=ni,!0},this.hasRenderPass=function(){return M},this.end=function(R,w){R.toneMapping=m,f=!0;let _=a,y=o;for(let L=0;L<E.length;L++){let P=E[L];P.enabled!==!1&&(P.render(R,y,_,w),P.needsSwap!==!1&&(_=y,y=y===o?l:o))}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,h.defines={},st.getTransfer(g)===yt&&(h.defines.SRGB_TRANSFER="");let L=Iv[v];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(b),R.render(d,p),b=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var rp=new Wt,ap=new Mi(1,1),op=new jr(1),lp=new Hr,cp=new Po,up=new Zr,Bf=[],kf=[],zf=new Float32Array(16),Hf=new Float32Array(9),Vf=new Float32Array(4);function _r(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bf[s];if(r===void 0&&(r=new Float32Array(s),Bf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xl(i,e){let t=kf[e];t===void 0&&(t=new Int32Array(e),kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),Xt(t,n)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),Xt(t,n)}}function Bv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if($t(t,n))return;zf.set(n),i.uniformMatrix4fv(this.addr,!1,zf),Xt(t,n)}}function kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Gv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function ql(i){return i.version===0&&(i.compareFunction=yu,i.needsUpdate=!0),i}function qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ql(ap):r=rp,t.setTexture2D(e||r,s)}function Yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cp,s)}function Zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ql(op):r=up,t.setTextureCube(e||r,s)}function Kv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||lp,s)}function jv(i){switch(i){case 5126:return Lv;case 35664:return Dv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Gv;case 36294:return Wv;case 36295:return $v;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Jv(i,e){i.uniform1fv(this.addr,e)}function Qv(i,e){let t=_r(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){let t=_r(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){let t=_r(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){let t=_r(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){let t=_r(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sx(i,e){let t=_r(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rx(i,e){i.uniform1iv(this.addr,e)}function ax(i,e){i.uniform2iv(this.addr,e)}function ox(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function cx(i,e){i.uniform1uiv(this.addr,e)}function ux(i,e){i.uniform2uiv(this.addr,e)}function hx(i,e){i.uniform3uiv(this.addr,e)}function dx(i,e){i.uniform4uiv(this.addr,e)}function fx(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ql(ap):a=rp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function px(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cp,r[a])}function mx(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ql(op):a=up;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function gx(i,e,t){let n=this.cache,s=e.length,r=Xl(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lp,r[a])}function _x(i){switch(i){case 5126:return Jv;case 35664:return Qv;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return ux;case 36295:return hx;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}var ku=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}},zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_x(t.type)}},Hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Fu=/(\w+)(\])?(\[|\.)?/g;function Gf(i,e){i.seq.push(e),i.map[e.id]=e}function vx(i,e,t){let n=i.name,s=n.length;for(Fu.lastIndex=0;;){let r=Fu.exec(n),a=Fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gf(t,c===void 0?new ku(o,i,e):new zu(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Hu(o),Gf(t,h)),t=h}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);vx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Wf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xx=37297,yx=0;function Mx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $f=new Je;function bx(i){st._getMatrix($f,st.workingColorSpace,i);let e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case kr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Mx(i.getShaderSource(e),o)}else return r}function Sx(i,e){let t=bx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ex={[su]:"Linear",[ru]:"Reinhard",[au]:"Cineon",[Sa]:"ACESFilmic",[lu]:"AgX",[cu]:"Neutral",[ou]:"Custom"};function Tx(i,e){let t=Ex[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $l=new D;function wx(){st.getLuminanceCoefficients($l);let i=$l.x.toFixed(4),e=$l.y.toFixed(4),t=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ax(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function Rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Da(i){return i!==""}function qf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Yf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(i){return i.replace(Ix,Px)}function Px(i,e){let t=at[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Vu(t)}var Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zf(i){return i.replace(Lx,Dx)}function Dx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Nx={[ba]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function Ux(i){return Nx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ox={[ur]:"ENVMAP_MODE_REFRACTION"};function Fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bx={[Qo]:"ENVMAP_BLENDING_MULTIPLY",[lf]:"ENVMAP_BLENDING_MIX",[cf]:"ENVMAP_BLENDING_ADD"};function kx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bx[i.combine]||"ENVMAP_BLENDING_NONE"}function zx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ux(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Fx(t),h=kx(t),d=Ax(t),p=Rx(r),g=s.createProgram(),v,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Da).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Da).join(`
`),f.length>0&&(f+=`
`)):(v=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),f=[Kf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?at.tonemapping_pars_fragment:"",t.toneMapping!==ni?Tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Sx("linearToOutputTexel",t.outputColorSpace),wx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=Vu(a),a=qf(a,t),a=Yf(a,t),o=Vu(o),o=qf(o,t),o=Yf(o,t),a=Zf(a),o=Zf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=m+v+a,E=m+f+o,M=Wf(s,s.VERTEX_SHADER,b),R=Wf(s,s.FRAGMENT_SHADER,E);s.attachShader(g,M),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(M)||"",V=s.getShaderInfoLog(R)||"",N=U.trim(),W=B.trim(),q=V.trim(),G=!0,oe=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,R);else{let H=Xf(s,M,"vertex"),J=Xf(s,R,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+H+`
`+J)}else N!==""?He("WebGLProgram: Program Info Log:",N):(W===""||q==="")&&(oe=!1);oe&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:W,prefix:v},fragmentShader:{log:q,prefix:f}})}s.deleteShader(M),s.deleteShader(R),_=new pr(s,g),y=Cx(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(g,xx)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}var Hx=0,Gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wu(e),t.set(e,n)),n}},Wu=class{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}};function Vx(i){return i===Yi||i===Ra||i===Ca}function Gx(i,e,t,n,s,r){let a=new Vr,o=new Gu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,y,L,P,U,B){let V=P.fog,N=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=e.get(_.envMap||W,q),oe=d[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,te=J!==void 0?J.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let De,K,he,we;if(oe){let Se=si[oe];De=Se.vertexShader,K=Se.fragmentShader}else{De=_.vertexShader,K=_.fragmentShader;let Se=o.getVertexShaderStage(_),gt=o.getFragmentShaderStage(_);o.update(_,Se,gt),he=Se.id,we=gt.id}let Le=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,ft=U.isBatchedMesh===!0,We=!!_.map,qe=!!_.matcap,je=!!G,re=je&&G.isPMREMTexture===!0,ge=!!_.aoMap,ve=!!_.lightMap,Ie=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Ye=!!_.displacementMap,Ue=!!_.emissiveMap,nt=!!_.metalnessMap,Ge=!!_.roughnessMap,ct=_.anisotropy>0,I=_.clearcoat>0,Te=_.diffuseRoughness>0,Ae=_.dispersion>0,Ce=_.retroreflectivity>0,ae=_.iridescence>0,C=_.sheen>0,F=_.transmission>0,ie=ct&&!!_.anisotropyMap,T=I&&!!_.clearcoatMap,x=I&&!!_.clearcoatNormalMap,z=I&&!!_.clearcoatRoughnessMap,se=Te&&!!_.diffuseRoughnessMap,ee=ae&&!!_.iridescenceMap,de=ae&&!!_.iridescenceThicknessMap,ue=C&&!!_.sheenColorMap,Q=C&&!!_.sheenRoughnessMap,Y=!!_.specularMap,_e=!!_.specularColorMap,O=!!_.specularIntensityMap,ne=F&&!!_.transmissionMap,j=F&&!!_.thicknessMap,fe=!!_.gradientMap,pe=!!_.alphaMap,xe=_.alphaTest>0,ke=!!_.alphaHash,Xe=!!_.extensions,ce=ni;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ce=i.toneMapping);let $e=re?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ke={shaderID:oe,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:K,defines:_.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ft,batchingColor:ft&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:We,matcap:qe,envMap:je,envMapMode:je&&G.mapping,envMapPMREM:re,envMapMaxLod:re?$e.length-1:null,envMapSize:re?$e[0].width:null,aoMap:ge,lightMap:ve,bumpMap:Ie,normalMap:Me,displacementMap:Ye,emissiveMap:Ue,normalMapObjectSpace:Me&&_.normalMapType===mf,normalMapTangentSpace:Me&&_.normalMapType===Pa,packedNormalMap:Me&&_.normalMapType===Pa&&Vx(_.normalMap.format),metalnessMap:nt,roughnessMap:Ge,anisotropy:ct,anisotropyMap:ie,clearcoat:I,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:z,diffuseRoughness:Te,diffuseRoughnessMap:se,dispersion:Ae,retroreflection:Ce,iridescence:ae,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:C,sheenColorMap:ue,sheenRoughnessMap:Q,specularMap:Y,specularColorMap:_e,specularIntensityMap:O,transmission:F,transmissionMap:ne,thicknessMap:j,gradientMap:fe,opaque:_.transparent===!1&&_.blending===cr&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:ke,combine:_.combine,mapUv:We&&p(_.map.channel),aoMapUv:ge&&p(_.aoMap.channel),lightMapUv:ve&&p(_.lightMap.channel),bumpMapUv:Ie&&p(_.bumpMap.channel),normalMapUv:Me&&p(_.normalMap.channel),displacementMapUv:Ye&&p(_.displacementMap.channel),emissiveMapUv:Ue&&p(_.emissiveMap.channel),metalnessMapUv:nt&&p(_.metalnessMap.channel),roughnessMapUv:Ge&&p(_.roughnessMap.channel),anisotropyMapUv:ie&&p(_.anisotropyMap.channel),clearcoatMapUv:T&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(_.sheenRoughnessMap.channel),specularMapUv:Y&&p(_.specularMap.channel),specularColorMapUv:_e&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:ne&&p(_.transmissionMap.channel),thicknessMapUv:j&&p(_.thicknessMap.channel),alphaMapUv:pe&&p(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Me||ct),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(We||pe),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:le,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:We&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&_.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function v(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)y.push(L),y.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(y,_),m(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function f(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function m(_,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let y=d[_.type],L;if(y){let P=si[y];L=Pf.clone(P.uniforms)}else L=_.uniforms;return L}function E(_,y){let L=u.get(y);return L!==void 0?++L.usedTimes:(L=new zx(i,y,_,s),c.push(L),u.set(y,L)),L}function M(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:w}}function Wx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function jf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,g,v,f,m){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:p,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:f,group:m},i[e]=b):(b.id=d.id,b.object=d,b.geometry=p,b.material=g,b.materialVariant=a(d),b.groupOrder=v,b.renderOrder=d.renderOrder,b.z=f,b.group=m),e++,b}function l(d,p,g,v,f,m,b){b.reversedDepth===!0&&(f=-f);let E=o(d,p,g,v,f,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(d,p,g,v,f,m){let b=o(d,p,g,v,f,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function u(d,p){t.length>1&&t.sort(d||$x),n.length>1&&n.sort(p||jf),s.length>1&&s.sort(p||jf)}function h(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Xx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Jf,i.set(n,[a])):s>=r.length?(a=new Jf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Yx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zx=0;function Kx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jx(i){let e=new qx,t=Yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new tt,a=new tt;function o(c){let u=0,h=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,g=0,v=0,f=0,m=0,b=0,E=0,M=0,R=0,w=0,_=0,y=0,L=0,P=0;c.sort(Kx);for(let B=0,V=c.length;B<V;B++){let N=c[B],W=N.color,q=N.intensity,G=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Yi?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*q,h+=W.g*q,d+=W.b*q;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],q);P++}else if(N.isSunLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,te=t.get(N);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[g]=te,n.sunShadowMap[g]=oe;let le=J.getViewportCount();for(let De=0;De<le;De++)n.sunShadowMatrix[v+De]=J.getMatrix(De),n.sunShadowCascade[v+De]=J._cascadeData[De];v+=le,g++}n.sun[p]=H,p++}else if(N.isDirectionalLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,te=t.get(N);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=oe,n.directionalShadowMatrix[f]=N.shadow.matrix,R++}n.directional[f]=H,f++}else if(N.isSpotLight){let H=e.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(W).multiplyScalar(q),H.distance=G,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[b]=H;let J=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,J.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[b]=J.matrix,N.castShadow){let te=t.get(N);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=oe,_++}b++}else if(N.isRectAreaLight){let H=e.get(N);H.color.copy(W).multiplyScalar(q),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=H,E++}else if(N.isPointLight){let H=e.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){let J=N.shadow,te=t.get(N);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,n.pointShadow[m]=te,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=N.shadow.matrix,w++}n.point[m]=H,m++}else if(N.isHemisphereLight){let H=e.get(N);H.skyColor.copy(N.color).multiplyScalar(q),H.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[M]=H,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.sunLength!==p||U.directionalLength!==f||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==E||U.hemiLength!==M||U.numSunShadows!==g||U.numDirectionalShadows!==R||U.numPointShadows!==w||U.numSpotShadows!==_||U.numSpotMaps!==y||U.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=f,n.spot.length=b,n.rectArea.length=E,n.point.length=m,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-L,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=P,U.sunLength=p,U.directionalLength=f,U.pointLength=m,U.spotLength=b,U.rectAreaLength=E,U.hemiLength=M,U.numSunShadows=g,U.numDirectionalShadows=R,U.numPointShadows=w,U.numSpotShadows=_,U.numSpotMaps=y,U.numLightProbes=P,n.version=Zx++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0,f=0,m=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let M=c[b];if(M.isSunLight){let R=n.sun[h];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),h++}else if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let R=n.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){let R=n.hemi[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:n}}function Qf(i){let e=new jx(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Qf(i),e.set(s,[o])):r>=a.length?(o=new Qf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`,ty=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ny=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ep=new tt,La=new D,Bu=new D;function iy(i,e,t){let n=new Hi,s=new me,r=new me,a=new bt,o=new Ho,l=new Vo,c={},u=t.maxTextureSize,h={[ti]:sn,[sn]:ti,[xn]:xn},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Qx,fragmentShader:ey}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new lt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ba;let m=this.type;this.render=function(w,_,y){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===Vd&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ba);let L=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ms),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=w.length;N<W;N++){let q=w[N],G=q.shadow;if(G===void 0){He("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let oe=G.getFrameExtents();s.multiply(oe),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,G.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===lr){if(q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new wn(s.x,s.y,{format:Yi,type:Xn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Mi(s.x,s.y,In),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=gi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft}else q.isPointLight?(G.map=new Na(s.x),G.map.depthTexture=new jr(s.x,$n)):(G.map=new wn(s.x,s.y),G.map.depthTexture=new Mi(s.x,s.y,$n)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=gi,this.type===ba?(G.map.depthTexture.compareFunction=H?xu:vu,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ft,G.map.depthTexture.magFilter=Ft);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let J=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();q.isPointLight!==!0&&G.updateMatrices(q,y);let te=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:y.layers;for(let le=0;le<J;le++){let De=G.getCamera(le);if(q.isPointLight){let K=G.camera,he=G.matrix,we=q.distance||K.far;we!==K.far&&(K.far=we,K.updateProjectionMatrix()),La.setFromMatrixPosition(q.matrixWorld),K.position.copy(La),Bu.copy(K.position),Bu.add(ty[le]),K.up.copy(ny[le]),K.lookAt(Bu),K.updateMatrixWorld(),he.makeTranslation(-La.x,-La.y,-La.z),ep.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ep,K.coordinateSystem,K.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,le),i.clear();else{le===0&&(i.setRenderTarget(G.map),i.clear());let K=G.getViewport(le);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(a)}n=G.getFrustum(le),M(_,y,De,q,te,this.type)}G.isPointLightShadow!==!0&&this.type===lr&&b(G,y),G.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(L,P,U)};function b(w,_){let y=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new wn(s.x,s.y,{format:Yi,type:Xn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,y,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,y,p,v,null)}function E(w,_,y,L){let P=null,U=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=y.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=P.uuid,V=_.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let W=N[V];W===void 0&&(W=P.clone(),N[V]=W,_.addEventListener("dispose",R)),P=W}if(P.visible=_.visible,P.wireframe=_.wireframe,L===lr?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:h[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=i.properties.get(P);B.light=y}return P}function M(w,_,y,L,P,U){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===lr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let N=e.update(w),W=w.material;if(Array.isArray(W)){let q=N.groups;for(let G=0,oe=q.length;G<oe;G++){let H=q[G],J=W[H.materialIndex];if(J&&J.visible){let te=E(w,J,L,U);w.onBeforeShadow(i,w,_,y,N,te,H),i.renderBufferDirect(y,null,N,te,w,H),w.onAfterShadow(i,w,_,y,N,te,H)}}}else if(W.visible){let q=E(w,W,L,U);w.onBeforeShadow(i,w,_,y,N,q,null),i.renderBufferDirect(y,null,N,q,w,null),w.onAfterShadow(i,w,_,y,N,q,null)}}let V=w.children;for(let N=0,W=V.length;N<W;N++)M(V[N],_,y,L,P,U)}function R(w){w.target.removeEventListener("dispose",R);for(let y in c){let L=c[y],P=w.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function sy(i,e){function t(){let O=!1,ne=new bt,j=null,fe=new bt(0,0,0,0);return{setMask:function(pe){j!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){O=pe},setClear:function(pe,xe,ke,Xe,ce){ce===!0&&(pe*=Xe,xe*=Xe,ke*=Xe),ne.set(pe,xe,ke,Xe),fe.equals(ne)===!1&&(i.clearColor(pe,xe,ke,Xe),fe.copy(ne))},reset:function(){O=!1,j=null,fe.set(-1,0,0,0)}}}function n(){let O=!1,ne=!1,j=null,fe=null,pe=null;return{setReversed:function(xe){if(ne!==xe){let ke=e.get("EXT_clip_control");xe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ne=xe;let Xe=pe;pe=null,this.setClear(Xe)}},getReversed:function(){return ne},setTest:function(xe){xe?ye(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(xe){j!==xe&&!O&&(i.depthMask(xe),j=xe)},setFunc:function(xe){if(ne&&(xe=Tf[xe]),fe!==xe){switch(xe){case bo:i.depthFunc(i.NEVER);break;case So:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case Xs:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case wo:i.depthFunc(i.GEQUAL);break;case Ao:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=xe}},setLocked:function(xe){O=xe},setClear:function(xe){pe!==xe&&(pe=xe,ne&&(xe=1-xe),i.clearDepth(xe))},reset:function(){O=!1,j=null,fe=null,pe=null,ne=!1}}}function s(){let O=!1,ne=null,j=null,fe=null,pe=null,xe=null,ke=null,Xe=null,ce=null;return{setTest:function($e){O||($e?ye(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function($e){ne!==$e&&!O&&(i.stencilMask($e),ne=$e)},setFunc:function($e,Ke,Se){(j!==$e||fe!==Ke||pe!==Se)&&(i.stencilFunc($e,Ke,Se),j=$e,fe=Ke,pe=Se)},setOp:function($e,Ke,Se){(xe!==$e||ke!==Ke||Xe!==Se)&&(i.stencilOp($e,Ke,Se),xe=$e,ke=Ke,Xe=Se)},setLocked:function($e){O=$e},setClear:function($e){ce!==$e&&(i.clearStencil($e),ce=$e)},reset:function(){O=!1,ne=null,j=null,fe=null,pe=null,xe=null,ke=null,Xe=null,ce=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},p=new WeakMap,g=[],v=null,f=!1,m=null,b=null,E=null,M=null,R=null,w=null,_=null,y=new Ve(0,0,0),L=0,P=!1,U=null,B=null,V=null,N=null,W=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,oe=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=oe>=1):H.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=oe>=2);let J=null,te={},le=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),K=new bt().fromArray(le),he=new bt().fromArray(De);function we(O,ne,j,fe){let pe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(O,xe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<j;ke++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ne+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return xe}let Le={};Le[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),a.setFunc(Xs),Ie(!1),Me(Jc),ye(i.CULL_FACE),ge(Ms);function ye(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Be(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function ft(O,ne){return d[O]!==ne?(i.bindFramebuffer(O,ne),d[O]=ne,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function We(O,ne){let j=g,fe=!1;if(O){j=p.get(ne),j===void 0&&(j=[],p.set(ne,j));let pe=O.textures;if(j.length!==pe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,ke=pe.length;xe<ke;xe++)j[xe]=i.COLOR_ATTACHMENT0+xe;j.length=pe.length,fe=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,fe=!0);fe&&i.drawBuffers(j)}function qe(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let je={[bs]:i.FUNC_ADD,[Wd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};je[Xd]=i.MIN,je[qd]=i.MAX;let re={[Yd]:i.ZERO,[Zd]:i.ONE,[Kd]:i.SRC_COLOR,[nu]:i.SRC_ALPHA,[nf]:i.SRC_ALPHA_SATURATE,[ef]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[jd]:i.ONE_MINUS_SRC_COLOR,[iu]:i.ONE_MINUS_SRC_ALPHA,[tf]:i.ONE_MINUS_DST_COLOR,[Qd]:i.ONE_MINUS_DST_ALPHA,[sf]:i.CONSTANT_COLOR,[rf]:i.ONE_MINUS_CONSTANT_COLOR,[af]:i.CONSTANT_ALPHA,[of]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(O,ne,j,fe,pe,xe,ke,Xe,ce,$e){if(O===Ms){f===!0&&(Be(i.BLEND),f=!1);return}if(f===!1&&(ye(i.BLEND),f=!0),O!==Gd){if(O!==m||$e!==P){if((b!==bs||R!==bs)&&(i.blendEquation(i.FUNC_ADD),b=bs,R=bs),$e)switch(O){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFunc(i.ONE,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",O);break}else switch(O){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case eu:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tu:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",O);break}E=null,M=null,w=null,_=null,y.set(0,0,0),L=0,m=O,P=$e}return}pe=pe||ne,xe=xe||j,ke=ke||fe,(ne!==b||pe!==R)&&(i.blendEquationSeparate(je[ne],je[pe]),b=ne,R=pe),(j!==E||fe!==M||xe!==w||ke!==_)&&(i.blendFuncSeparate(re[j],re[fe],re[xe],re[ke]),E=j,M=fe,w=xe,_=ke),(Xe.equals(y)===!1||ce!==L)&&(i.blendColor(Xe.r,Xe.g,Xe.b,ce),y.copy(Xe),L=ce),m=O,P=!1}function ve(O,ne){O.side===xn?Be(i.CULL_FACE):ye(i.CULL_FACE);let j=O.side===sn;ne&&(j=!j),Ie(j),O.blending===cr&&O.transparent===!1?ge(Ms):ge(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let fe=O.stencilWrite;o.setTest(fe),fe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){U!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),U=O)}function Me(O){O!==zd?(ye(i.CULL_FACE),O!==B&&(O===Jc?i.cullFace(i.BACK):O===Hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),B=O}function Ye(O){O!==V&&(G&&i.lineWidth(O),V=O)}function Ue(O,ne,j){O?(ye(i.POLYGON_OFFSET_FILL),(N!==ne||W!==j)&&(N=ne,W=j,a.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):Be(i.POLYGON_OFFSET_FILL)}function nt(O){O?ye(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Ge(O){O===void 0&&(O=i.TEXTURE0+q-1),J!==O&&(i.activeTexture(O),J=O)}function ct(O,ne,j){j===void 0&&(J===null?j=i.TEXTURE0+q-1:j=J);let fe=te[j];fe===void 0&&(fe={type:void 0,texture:void 0},te[j]=fe),(fe.type!==O||fe.texture!==ne)&&(J!==j&&(i.activeTexture(j),J=j),i.bindTexture(O,ne||Le[O]),fe.type=O,fe.texture=ne)}function I(){let O=te[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Te(){try{i.compressedTexImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Ae(){try{i.compressedTexImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function Ce(){try{i.texSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ae(){try{i.texSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function C(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function F(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function ie(){try{i.texStorage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function T(){try{i.texStorage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function x(){try{i.texImage2D(...arguments)}catch(O){Ze("WebGLState:",O)}}function z(){try{i.texImage3D(...arguments)}catch(O){Ze("WebGLState:",O)}}function se(O){return h[O]!==void 0?h[O]:i.getParameter(O)}function ee(O,ne){h[O]!==ne&&(i.pixelStorei(O,ne),h[O]=ne)}function de(O){K.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),K.copy(O))}function ue(O){he.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),he.copy(O))}function Q(O,ne){let j=c.get(ne);j===void 0&&(j=new WeakMap,c.set(ne,j));let fe=j.get(O);fe===void 0&&(fe=i.getUniformBlockIndex(ne,O.name),i.uniformBlockBinding(ne,fe,fe),j.set(O,fe))}function Y(O,ne,j){let pe=c.get(ne).get(O);l[pe]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,j),l[pe]=j)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,te={},d={},l={},p=new WeakMap,g=[],v=null,f=!1,m=null,b=null,E=null,M=null,R=null,w=null,_=null,y=new Ve(0,0,0),L=0,P=!1,U=null,B=null,V=null,N=null,W=null,K.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Be,bindFramebuffer:ft,drawBuffers:We,useProgram:qe,setBlending:ge,setMaterial:ve,setFlipSided:Ie,setCullFace:Me,setLineWidth:Ye,setPolygonOffset:Ue,setScissorTest:nt,activeTexture:Ge,bindTexture:ct,unbindTexture:I,compressedTexImage2D:Te,compressedTexImage3D:Ae,texImage2D:x,texImage3D:z,pixelStorei:ee,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:Y,texStorage2D:ie,texStorage3D:T,texSubImage2D:Ce,texSubImage3D:ae,compressedTexSubImage2D:C,compressedTexSubImage3D:F,scissor:de,viewport:ue,reset:_e}}function ry(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,h=new Set,d,p=new WeakMap,g=new Set,v=new FinalizationRegistry(T=>g.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,x){return f?new OffscreenCanvas(T,x):Zs("canvas")}function b(T,x,z){let se=1,ee=ie(T);if((ee.width>z||ee.height>z)&&(se=z/Math.max(ee.width,ee.height)),se<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let de=Math.floor(se*ee.width),ue=Math.floor(se*ee.height);d===void 0&&(d=m(de,ue));let Q=x?m(de,ue):d;return Q.width=de,Q.height=ue,Q.getContext("2d").drawImage(T,0,0,de,ue),He("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+ue+")."),Q}else return"data"in T&&He("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),T;return T}function E(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,x,z,se,ee,de=!1){if(T!==null){if(i[T]!==void 0)return i[T];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;se&&(ue=e.get("EXT_texture_norm16"),ue||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8),z===i.UNSIGNED_SHORT&&ue&&(Q=ue.R16_EXT),z===i.SHORT&&ue&&(Q=ue.R16_SNORM_EXT)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8),z===i.UNSIGNED_SHORT&&ue&&(Q=ue.RG16_EXT),z===i.SHORT&&ue&&(Q=ue.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(z===i.UNSIGNED_SHORT&&ue&&(Q=ue.RGB16_EXT),z===i.SHORT&&ue&&(Q=ue.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let Y=de?kr:st.getTransfer(ee);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=Y===yt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ue&&(Q=ue.RGBA16_EXT),z===i.SHORT&&ue&&(Q=ue.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(T,x){let z;return T?x===null||x===$n||x===Ts?z=i.DEPTH24_STENCIL8:x===In?z=i.DEPTH32F_STENCIL8:x===dr&&(z=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===$n||x===Ts?z=i.DEPTH_COMPONENT24:x===In?z=i.DEPTH_COMPONENT32F:x===dr&&(z=i.DEPTH_COMPONENT16),z}function y(T,x){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){let x=new WeakRef(T);n.get(T).__ref=x,g.add(x),v.register(T,x,x)}function P(T){let x=n.get(T).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function U(T){V(T.target)}function B(T){N(T.target)}function V(T){T.removeEventListener("dispose",U),P(T),q(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function N(T){T.removeEventListener("dispose",B),P(T),oe(T)}function W(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?N(x):V(x))}g.clear(),h.clear()}function q(T){let x=n.get(T);if(x.__webglInit===void 0)return;let z=T.source,se=p.get(z);if(se){let ee=se[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&G(T),Object.keys(se).length===0&&p.delete(z)}n.remove(T)}function G(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let z=T.source,se=p.get(z);delete se[x.__cacheKey],a.memory.textures--}function oe(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let z=T.depthTexture;if(z&&z.renderTarget===T&&V(z),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let de=0;de<x.__webglFramebuffer[ee].length;de++)i.deleteFramebuffer(x.__webglFramebuffer[ee][de]);else i.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[ee]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let se=T.textures;for(let ee=0,de=se.length;ee<de;ee++){let ue=n.get(se[ee]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(se[ee])}n.remove(T)}let H=0;function J(){H=0}function te(){return H}function le(T){H=T}function De(){let T=H;return T>=s.maxTextures&&He("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function he(T,x){let z=n.get(T);if(T.isVideoTexture&&C(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let se=T.image;if(se===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(z,T,x);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function we(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ve(z,T,x);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function Le(T,x){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ve(z,T,x);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function ye(T,x){let z=n.get(T);if(T.version>0&&z.__version!==T.version){Ie(z,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let Be={[Bi]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},ft={[Ft]:i.NEAREST,[nl]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},We={[_f]:i.NEVER,[yu]:i.ALWAYS,[vf]:i.LESS,[vu]:i.LEQUAL,[xf]:i.EQUAL,[xu]:i.GEQUAL,[yf]:i.GREATER,[Mf]:i.NOTEQUAL};function qe(T,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===hr||x.magFilter===Es||x.magFilter===On||x.minFilter===Gt||x.minFilter===hr||x.minFilter===Es||x.minFilter===On)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Be[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Be[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Be[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ft[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ft[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,We[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ft||x.minFilter!==Es&&x.minFilter!==On||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function je(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",U),L(x));let se=x.source,ee=p.get(se);ee===void 0&&(ee={},p.set(se,ee));let de=K(x);if(de!==T.__cacheKey){ee[de]===void 0&&(ee[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[de].usedTimes++;let ue=ee[T.__cacheKey];ue!==void 0&&(ee[T.__cacheKey].usedTimes--,ue.usedTimes===0&&G(x)),T.__cacheKey=de,T.__webglTexture=ee[de].texture}return z}function re(T,x,z){return Math.floor(Math.floor(T/z)/x)}function ge(T,x,z,se){let de=T.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,z,se,x.data);else{de.sort((O,ne)=>O.start-ne.start);let ue=0;for(let O=1;O<de.length;O++){let ne=de[ue],j=de[O],fe=ne.start+ne.count,pe=re(j.start,x.width,4),xe=re(ne.start,x.width,4);j.start<=fe+1&&pe===xe&&re(j.start+j.count-1,x.width,4)===pe?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++ue,de[ue]=j)}de.length=ue+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let O=0,ne=de.length;O<ne;O++){let j=de[O],fe=Math.floor(j.start/4),pe=Math.ceil(j.count/4),xe=fe%x.width,ke=Math.floor(fe/x.width),Xe=pe,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,xe,ke,Xe,ce,z,se,x.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function ve(T,x,z){let se=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(se=i.TEXTURE_3D);let ee=je(T,x),de=x.source;t.bindTexture(se,T.__webglTexture,i.TEXTURE0+z);let ue=n.get(de);if(de.version!==ue.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ce=st.getPrimaries(st.workingColorSpace),$e=x.colorSpace===Ci?null:st.getPrimaries(x.colorSpace),Ke=x.colorSpace===Ci||ce===$e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Y=b(x.image,!1,s.maxTextureSize);Y=F(x,Y);let _e=r.convert(x.format,x.colorSpace),O=r.convert(x.type),ne=w(x.internalFormat,_e,O,x.normalized,x.colorSpace,x.isVideoTexture);qe(se,x);let j,fe=x.mipmaps,pe=x.isVideoTexture!==!0,xe=ue.__version===void 0||ee===!0,ke=de.dataReady,Xe=y(x,Y);if(x.isDepthTexture)ne=_(x.format===Ri,x.type),xe&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ne,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,ne,Y.width,Y.height,0,_e,O,null));else if(x.isDataTexture)if(fe.length>0){pe&&xe&&t.texStorage2D(i.TEXTURE_2D,Xe,ne,fe[0].width,fe[0].height);for(let ce=0,$e=fe.length;ce<$e;ce++)j=fe[ce],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,_e,O,j.data):t.texImage2D(i.TEXTURE_2D,ce,ne,j.width,j.height,0,_e,O,j.data);x.generateMipmaps=!1}else pe?(xe&&t.texStorage2D(i.TEXTURE_2D,Xe,ne,Y.width,Y.height),ke&&ge(x,Y,_e,O)):t.texImage2D(i.TEXTURE_2D,0,ne,Y.width,Y.height,0,_e,O,Y.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){pe&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,ne,fe[0].width,fe[0].height,Y.depth);for(let ce=0,$e=fe.length;ce<$e;ce++)if(j=fe[ce],x.format!==Fn)if(_e!==null)if(pe){if(ke)if(x.layerUpdates.size>0){let Ke=Pu(j.width,j.height,x.format,x.type);for(let Se of x.layerUpdates){let gt=j.data.subarray(Se*Ke/j.data.BYTES_PER_ELEMENT,(Se+1)*Ke/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Se,j.width,j.height,1,_e,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,j.width,j.height,Y.depth,_e,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,ne,j.width,j.height,Y.depth,0,j.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,j.width,j.height,Y.depth,_e,O,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,ne,j.width,j.height,Y.depth,0,_e,O,j.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{pe&&xe&&t.texStorage2D(i.TEXTURE_2D,Xe,ne,fe[0].width,fe[0].height);for(let ce=0,$e=fe.length;ce<$e;ce++)j=fe[ce],x.format!==Fn?_e!==null?pe?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,_e,j.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,ne,j.width,j.height,0,j.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,j.width,j.height,_e,O,j.data):t.texImage2D(i.TEXTURE_2D,ce,ne,j.width,j.height,0,_e,O,j.data)}else if(x.isDataArrayTexture)if(pe){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,ne,Y.width,Y.height,Y.depth),ke)if(x.layerUpdates.size>0){let ce=Pu(Y.width,Y.height,x.format,x.type);for(let $e of x.layerUpdates){let Ke=Y.data.subarray($e*ce/Y.data.BYTES_PER_ELEMENT,($e+1)*ce/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$e,Y.width,Y.height,1,_e,O,Ke)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,_e,O,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,Y.width,Y.height,Y.depth,0,_e,O,Y.data);else if(x.isData3DTexture)pe?(xe&&t.texStorage3D(i.TEXTURE_3D,Xe,ne,Y.width,Y.height,Y.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,_e,O,Y.data)):t.texImage3D(i.TEXTURE_3D,0,ne,Y.width,Y.height,Y.depth,0,_e,O,Y.data);else if(x.isFramebufferTexture){if(xe)if(pe)t.texStorage2D(i.TEXTURE_2D,Xe,ne,Y.width,Y.height);else{let ce=Y.width,$e=Y.height;for(let Ke=0;Ke<Xe;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,ne,ce,$e,0,_e,O,null),ce>>=1,$e>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),Y.parentNode!==ce){ce.appendChild(Y),h.add(x),ce.onpaint=$e=>{let Ke=$e.changedElements;for(let Se of h)Ke.includes(Se.image)&&(Se.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let Ke=i.RGBA,Se=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Se,gt,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(pe&&xe){let ce=ie(fe[0]);t.texStorage2D(i.TEXTURE_2D,Xe,ne,ce.width,ce.height)}for(let ce=0,$e=fe.length;ce<$e;ce++)j=fe[ce],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,_e,O,j):t.texImage2D(i.TEXTURE_2D,ce,ne,_e,O,j);x.generateMipmaps=!1}else if(pe){if(xe){let ce=ie(Y);t.texStorage2D(i.TEXTURE_2D,Xe,ne,ce.width,ce.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,O,Y)}else t.texImage2D(i.TEXTURE_2D,0,ne,_e,O,Y);E(x)&&x.mipmapsAutoUpdate===!0&&M(se),ue.__version=de.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ie(T,x,z){if(x.image.length!==6)return;let se=je(T,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let de=n.get(ee);if(ee.version!==de.__version||se===!0){t.activeTexture(i.TEXTURE0+z);let ue=st.getPrimaries(st.workingColorSpace),Q=x.colorSpace===Ci?null:st.getPrimaries(x.colorSpace),Y=x.colorSpace===Ci||ue===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,O=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let Se=0;Se<6;Se++)!_e&&!O?ne[Se]=b(x.image[Se],!0,s.maxCubemapSize):ne[Se]=O?x.image[Se].image:x.image[Se],ne[Se]=F(x,ne[Se]);let j=ne[0],fe=r.convert(x.format,x.colorSpace),pe=r.convert(x.type),xe=w(x.internalFormat,fe,pe,x.normalized,x.colorSpace),ke=x.isVideoTexture!==!0,Xe=de.__version===void 0||se===!0,ce=ee.dataReady,$e=y(x,j);qe(i.TEXTURE_CUBE_MAP,x);let Ke;if(x.isDepthTexture){if(xe=_(x.format===Ri,x.type),Xe)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,xe,j.width,j.height);else for(let Se=0;Se<6;Se++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xe,j.width,j.height,0,fe,pe,null)}else if(_e){ke&&Xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,xe,j.width,j.height);for(let Se=0;Se<6;Se++){Ke=ne[Se].mipmaps;for(let gt=0;gt<Ke.length;gt++){let ut=Ke[gt];x.format!==Fn?fe!==null?ke?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,0,0,ut.width,ut.height,fe,ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,xe,ut.width,ut.height,0,ut.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,0,0,ut.width,ut.height,fe,pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt,xe,ut.width,ut.height,0,fe,pe,ut.data)}}}else{if(Ke=x.mipmaps,ke&&Xe){Ke.length>0&&$e++;let Se=ie(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,xe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(O){ke?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ne[Se].width,ne[Se].height,fe,pe,ne[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xe,ne[Se].width,ne[Se].height,0,fe,pe,ne[Se].data);for(let gt=0;gt<Ke.length;gt++){let Vt=Ke[gt].image[Se].image;ke?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,0,0,Vt.width,Vt.height,fe,pe,Vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,xe,Vt.width,Vt.height,0,fe,pe,Vt.data)}}else{ke?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,fe,pe,ne[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,xe,fe,pe,ne[Se]);for(let gt=0;gt<Ke.length;gt++){let ut=Ke[gt];ke?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,0,0,fe,pe,ut.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,gt+1,xe,fe,pe,ut.image[Se])}}}E(x)&&x.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),de.__version=ee.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Me(T,x,z,se,ee,de){let ue=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),Y=w(z.internalFormat,ue,Q,z.normalized,z.colorSpace),_e=n.get(x),O=n.get(z);if(O.__renderTarget=x,!_e.__hasExternalTextures){let ne=Math.max(1,x.width>>de),j=Math.max(1,x.height>>de);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,de,Y,ne,j,x.depth,0,ue,Q,null):t.texImage2D(ee,de,Y,ne,j,0,ue,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ee,O.__webglTexture,0,Ce(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ee,O.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let se=x.depthTexture,ee=se&&se.isDepthTexture?se.type:null,de=_(x.stencilBuffer,ee),ue=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(x),de,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(x),de,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,de,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,T)}else{let se=x.textures;for(let ee=0;ee<se.length;ee++){let de=se[ee],ue=r.convert(de.format,de.colorSpace),Q=r.convert(de.type),Y=w(de.internalFormat,ue,Q,de.normalized,de.colorSpace);ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(x),Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(x),Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(T,x,z){let se=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(x.depthTexture);ee.__renderTarget=x;let de=se?x.depthTexture.image[0]:x.depthTexture.image;(!ee.__webglTexture||de.width!==x.width||de.height!==x.height)&&(de.width=x.width,de.height=x.height,x.depthTexture.needsUpdate=!0),se?ye(x.depthTexture,0):he(x.depthTexture,0);let ue=ee.__webglTexture,Q=Ce(x),Y=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,_e=x.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===gi)ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Y,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,_e,Y,ue,0);else if(x.depthTexture.format===Ri)ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,Y,ue,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,_e,Y,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(T){let x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let se=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),se){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,se.removeEventListener("dispose",ee)};se.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=se}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let se=0;se<6;se++)Ue(x.__webglFramebuffer[se],T,se);else T.texture.mipmaps.length>0?Ue(x.__webglFramebuffer[0],T,0):Ue(x.__webglFramebuffer,T,0);else if(z){x.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[se]),x.__webglDepthbuffer[se]===void 0)x.__webglDepthbuffer[se]=i.createRenderbuffer(),Ye(x.__webglDepthbuffer[se],T,!1);else{let ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}}else if(T.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ye(x.__webglDepthbuffer,T,!1);else{let ee=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,de)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(T,x,z){let se=n.get(T);x!==void 0&&Me(se.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(T)}function ct(T){let x=T.texture,z=n.get(T),se=n.get(x);T.addEventListener("dispose",B),L(T);let ee=T.textures,de=T.isWebGLCubeRenderTarget===!0,ue=ee.length>1;if(ue||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=x.version,a.memory.textures++),de){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let Y=0;Y<x.mipmaps.length;Y++)z.__webglFramebuffer[Q][Y]=i.createFramebuffer()}else z.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Q=0,Y=ee.length;Q<Y;Q++){let _e=n.get(ee[Q]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ae(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<ee.length;Q++){let Y=ee[Q];z.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let _e=r.convert(Y.format,Y.colorSpace),O=r.convert(Y.type),ne=w(Y.internalFormat,_e,O,Y.normalized,Y.colorSpace,T.isXRRenderTarget===!0),j=Ce(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),qe(i.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Me(z.__webglFramebuffer[Q][Y],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Y);else Me(z.__webglFramebuffer[Q],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);E(x)?M(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let Q=0,Y=ee.length;Q<Y;Q++){let _e=ee[Q],O=n.get(_e),ne=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ne=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,O.__webglTexture),qe(ne,_e),Me(z.__webglFramebuffer,T,_e,i.COLOR_ATTACHMENT0+Q,ne,0),E(_e)&&M(ne)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),qe(Q,x),x.mipmaps.length>0)for(let Y=0;Y<x.mipmaps.length;Y++)Me(z.__webglFramebuffer[Y],T,x,i.COLOR_ATTACHMENT0,Q,Y);else Me(z.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Q,0);E(x)?M(Q):x.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}T.depthBuffer&&nt(T)}function I(T){let x=T.textures;for(let z=0,se=x.length;z<se;z++){let ee=x[z];if(E(ee)&&ee.mipmapsAutoUpdate===!0){let de=R(T),ue=n.get(ee).__webglTexture;t.bindTexture(de,ue),M(de),t.unbindTexture()}}}let Te=[];function Ae(T){if(T.samples>0){if(ae(T)===!1){let x=T.textures,z=T.width,se=T.height,ee=i.COLOR_BUFFER_BIT,de=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(T),Q=x.length>1;if(Q)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);let O=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,z,se,0,0,z,se,ee,i.NEAREST),l===!0&&(Te.length=0,Te.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Te.push(de),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ue.__webglColorRenderbuffer[_e]);let O=n.get(x[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ce(T){return Math.min(s.maxSamples,T.samples)}function ae(T){let x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function C(T){let x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function F(T,x){let z=T.colorSpace,se=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Qt&&z!==Ci&&(st.getTransfer(z)===yt?(se!==Fn||ee!==yn)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",z)),x}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=De,this.resetTextureUnits=J,this.getTextureUnits=te,this.setTextureUnits=le,this.setTexture2D=he,this.setTexture2DArray=we,this.setTexture3D=Le,this.setTextureCube=ye,this.rebindTextures=Ge,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ae,this.dispose=W}function ay(i,e){function t(n,s=Ci){let r,a=st.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===du)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===mu)return i.ALPHA;if(n===gu)return i.RGB;if(n===Fn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===al)return i.RED;if(n===ol)return i.RED_INTEGER;if(n===Yi)return i.RG;if(n===ll)return i.RG_INTEGER;if(n===cl)return i.RGBA_INTEGER;if(n===Ea||n===Ta||n===wa||n===Aa)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===hl||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pl||n===ml||n===gl||n===_l||n===vl||n===Ra||n===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pl||n===ml)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===_l)return r.COMPRESSED_R11_EAC;if(n===vl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===Ml||n===bl||n===Sl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Il||n===Pl||n===Ll||n===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Ul||n===Ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fl||n===Bl||n===Ca||n===kl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`,$u=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jn({vertexShader:oy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xu=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",f=new $u,m={},b=t.getContextAttributes(),E=null,M=null,R=[],w=[],_=new me,y=null,L=null,P=new Ut;P.viewport=new bt;let U=new Ut;U.viewport=new bt;let B=[P,U],V=new Zo,N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let he=R[K];return he===void 0&&(he=new Js,R[K]=he),he.getTargetRaySpace()},this.getControllerGrip=function(K){let he=R[K];return he===void 0&&(he=new Js,R[K]=he),he.getGripSpace()},this.getHand=function(K){let he=R[K];return he===void 0&&(he=new Js,R[K]=he),he.getHandSpace()};function q(K){let he=w.indexOf(K.inputSource);if(he===-1)return;let we=R[he];we!==void 0&&(we.update(K.inputSource,K.frame,c||a),we.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",oe);for(let K=0;K<R.length;K++){let he=w[K];he!==null&&(w[K]=null,R[K].disconnect(he))}N=null,W=null,f.reset();for(let K in m)delete m[K];if(e.setRenderTarget(E),p=null,d=null,h=null,s=null,M=null,De.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",G),s.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Le=null,ye=null;b.depth&&(ye=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=b.stencil?Ri:gi,Le=b.stencil?Ts:$n);let Be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new wn(d.textureWidth,d.textureHeight,{format:Fn,type:yn,depthTexture:new Mi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let we={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new wn(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function oe(K){for(let he=0;he<K.removed.length;he++){let we=K.removed[he],Le=w.indexOf(we);Le>=0&&(w[Le]=null,R[Le].disconnect(we))}for(let he=0;he<K.added.length;he++){let we=K.added[he],Le=w.indexOf(we);if(Le===-1){for(let Be=0;Be<R.length;Be++)if(Be>=w.length){w.push(we),Le=Be;break}else if(w[Be]===null){w[Be]=we,Le=Be;break}if(Le===-1)break}let ye=R[Le];ye&&ye.connect(we)}}function H(K,he){he===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(he.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let he=K.near,we=K.far;f.texture!==null&&(f.depthNear>0&&(he=f.depthNear),f.depthFar>0&&(we=f.depthFar)),V.near=U.near=P.near=he,V.far=U.far=P.far=we,(N!==V.near||W!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,W=V.far),V.layers.mask=K.layers.mask|6,P.layers.mask=V.layers.mask&-5,U.layers.mask=V.layers.mask&-3;let Le=K.parent,ye=V.cameras;H(V,Le);for(let Be=0;Be<ye.length;Be++)H(ye[Be],Le);V.projectionMatrix.copy(P.projectionMatrix),V.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),J(K,V,Le)};function J(K,he,we){we===null?K.matrix.copy(he.matrixWorld):(K.matrix.copy(we.matrixWorld),K.matrix.invert(),K.matrix.multiply(he.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(he.projectionMatrix),K.projectionMatrixInverse.copy(he.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(V)},this.getCameraTexture=function(K){return m[K]};let te=null;function le(K,he){if(u=he.getViewerPose(c||a),g=he,u!==null){let we=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Le=!1;we.length!==V.cameras.length&&(V.cameras.length=0,Le=!0);for(let We=0;We<we.length;We++){let qe=we[We],je=null;if(p!==null)je=p.getViewport(qe);else{let ge=h.getViewSubImage(d,qe);je=ge.viewport,We===0&&(e.setRenderTargetTextures(M,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(M))}let re=B[We];re===void 0&&(re=new Ut,re.layers.enable(We),re.viewport=new bt,B[We]=re),re.matrix.fromArray(qe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(qe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(je.x,je.y,je.width,je.height),We===0&&(V.matrix.copy(re.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Le===!0&&V.cameras.push(re)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let We=h.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&f.init(We,s.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),h=n.getBinding();for(let We=0;We<we.length;We++){let qe=we[We].camera;if(qe){let je=m[qe];je||(je=new Jr,m[qe]=je);let re=h.getCameraImage(qe);je.sourceTexture=re}}}}for(let we=0;we<R.length;we++){let Le=w[we],ye=R[we];Le!==null&&ye!==void 0&&ye.update(Le,he,c||a)}te&&te(K,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let De=new tp;De.setAnimationLoop(le),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},cy=new tt,hp=new Je;hp.set(-1,0,0,0,1,0,0,0,1);function uy(i,e){function t(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Ru(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,b,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),h(f,m)):m.isMeshPhongMaterial?(r(f,m),u(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&p(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),g(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),v(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,b,E):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,t(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===sn&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,t(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===sn&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,t(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,t(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let b=e.get(m),E=b.envMap,M=b.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(hp),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,b,E){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*b,f.scale.value=E*.5,m.map&&(f.map.value=m.map,t(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,t(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,t(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function u(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function p(f,m,b){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=b.texture,f.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){let b=e.get(m).light;f.referencePosition.value.setFromMatrixPosition(b.matrixWorld),f.nearDistance.value=b.shadow.camera.near,f.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hy(i,e,t,n){let s={},r={};function a(b,E){let M=E.program;n.uniformBlockBinding(b,M,s[b.id])}function o(b,E){let M=s[b.id];M===void 0&&(g(b),M=l(b),s[b.id]=M,b.addEventListener("dispose",f));let R=E.program;n.updateUBOMapping(b,R);let w=e.render.frame;r[b.id]!==w&&(c(b),r[b.id]=w)}function l(b){let E=i.createBuffer(),M=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],M=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=M.length;w<_;w++){let y=M[w];if(Array.isArray(y))for(let L=0,P=y.length;L<P;L++)u(y[L],w,L,R);else u(y,w,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,E,M,R){if(d(b,E,M,R)===!0){let w=b.__offset,_=b.value;if(Array.isArray(_)){let y=0;for(let L=0;L<_.length;L++){let P=_[L],U=v(P,!0);h(P,b.__data,y),y+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}function h(b,E,M){typeof b=="number"||typeof b=="boolean"?E[M]=b:b.isMatrix3?(E[M]=b.elements[0],E[M+1]=b.elements[1],E[M+2]=b.elements[2],E[M+3]=0,E[M+4]=b.elements[3],E[M+5]=b.elements[4],E[M+6]=b.elements[5],E[M+7]=0,E[M+8]=b.elements[6],E[M+9]=b.elements[7],E[M+10]=b.elements[8],E[M+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-M),M):b.toArray(E,M)}function d(b,E,M,R){let w=b.value,_=E+"_"+M;if(Array.isArray(w)){R[_]===void 0&&(R[_]=[]);let y=R[_],L=!1;for(let P=0;P<w.length;P++)p(w[P],y,P)===!0&&(L=!0);return L}return p(w,R,_)}function p(b,E,M){if(E[M]===void 0)return typeof b=="number"||typeof b=="boolean"?E[M]=b:ArrayBuffer.isView(b)?E[M]=b.slice():E[M]=b.clone(),!0;{let R=E[M];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[M]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function g(b){let E=b.uniforms,M=0,R=16;for(let _=0,y=E.length;_<y;_++){let L=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,U=L.length;P<U;P++){let B=L[P],V=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(E[_])||Array.isArray(B.value),W=M;for(let G=0,oe=V.length;G<oe;G++){let H=V[G],J=v(H,N),te=M%R,le=te%J.boundary,De=te+le;M+=le,De!==0&&R-De<J.storage&&(M+=R-De),G===0&&(W=M),M+=J.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((M-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}let w=M%R;return w>0&&(M+=R-w),b.__size=M,b.__cache={},this}function v(b,E){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=16,M.storage=48):b.isMatrix4?(M.boundary=16,M.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):He("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function f(b){let E=b.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var dy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function fy(){return ii===null&&(ii=new er(dy,16,16,Yi,Xn),ii.name="DFG_LUT",ii.minFilter=Gt,ii.magFilter=Gt,ii.wrapS=Ln,ii.wrapT=Ln,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var gr=class{constructor(e={}){let{canvas:t=bf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=p,f=new Set([cl,ll,ol]),m=new Set([yn,$n,dr,Ts,sl,rl]),b=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,w=null,_=[],y=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,B=null,V=null,N=null,W=null;this._outputColorSpace=Mt;let q=0,G=0,oe=null,H=-1,J=null,te=new bt,le=new bt,De=null,K=new Ve(0),he=0,we=t.width,Le=t.height,ye=1,Be=null,ft=null,We=new bt(0,0,we,Le),qe=new bt(0,0,we,Le),je=!1,re=new Hi,ge=new Lo,ve=!1,Ie=!1,Me=new tt,Ye=new D,Ue=new bt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function ct(){return oe===null?ye:1}let I=n;function Te(S,k){return t.getContext(S,k)}let Ae,Ce,ae,C,F,ie,T,x,z,se,ee,de,ue,Q,Y,_e,O,ne,j,fe,pe,xe,ke;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Se,!1),I===null){let k="webgl2";if(I=Te(k,S),I===null)throw Te(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(S){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze("WebGLRenderer: "+S.message),S}function Xe(){Ae=new Ev(I),Ae.init(),pe=new ay(I,Ae),Ce=new fv(I,Ae,e,pe),ae=new sy(I,Ae),Ce.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),V=I.createFramebuffer(),N=I.createFramebuffer(),W=I.createFramebuffer(),C=new Av(I),F=new Wx,ie=new ry(I,Ae,ae,F,Ce,pe,C),T=new Sv(P),x=new Cg(I),xe=new hv(I,x),z=new Tv(I,x,C,xe),se=new Cv(I,z,x,xe,C),ne=new Rv(I,Ce,ie),Y=new pv(F),ee=new Gx(P,T,Ae,Ce,xe,Y),de=new uy(P,F),ue=new Xx,Q=new Jx(Ae),O=new uv(P,T,ae,se,g,l),_e=new iy(P,se,Ce),ke=new hy(I,C,Ce,ae),j=new dv(I,Ae,C),fe=new wv(I,Ae,C),C.programs=ee.programs,P.capabilities=Ce,P.extensions=Ae,P.properties=F,P.renderLists=ue,P.shadowMap=_e,P.state=ae,P.info=C}v!==yn&&(L=new Pv(v,t.width,t.height,o,s,r));let ce=new Xu(P,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(S){S!==void 0&&(ye=S,this.setSize(we,Le,!1))},this.getSize=function(S){return S.set(we,Le)},this.setSize=function(S,k,Z=!0){if(ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}we=S,Le=k,t.width=Math.floor(S*ye),t.height=Math.floor(k*ye),Z===!0&&(t.style.width=S+"px",t.style.height=k+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(we*ye,Le*ye).floor()},this.setDrawingBufferSize=function(S,k,Z){we=S,Le=k,ye=Z,t.width=Math.floor(S*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,S,k)},this.setEffects=function(S){if(v===yn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let k=0;k<S.length;k++)if(S[k].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(te)},this.getViewport=function(S){return S.copy(We)},this.setViewport=function(S,k,Z,$){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,k,Z,$),ae.viewport(te.copy(We).multiplyScalar(ct()).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,k,Z,$){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,k,Z,$),ae.scissor(le.copy(qe).multiplyScalar(ct()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){ae.setScissorTest(je=S)},this.setOpaqueSort=function(S){Be=S},this.setTransparentSort=function(S){ft=S},this.getClearColor=function(S){return S.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(S=!0,k=!0,Z=!0){let $=0;if(S){let X=!1;if(oe!==null){let Ee=oe.texture.format;X=f.has(Ee)}if(X){let Ee=oe.texture.type,Ne=m.has(Ee),be=O.getClearColor(),Pe=O.getClearAlpha(),ze=be.r,et=be.g,ht=be.b;Ne?(b[0]=ze,b[1]=et,b[2]=ht,b[3]=Pe,I.clearBufferuiv(I.COLOR,0,b)):(E[0]=ze,E[1]=et,E[2]=ht,E[3]=Pe,I.clearBufferiv(I.COLOR,0,E))}else $|=I.COLOR_BUFFER_BIT}k&&($|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),O.dispose(),ue.dispose(),Q.dispose(),ie.dispose(),F.dispose(),T.dispose(),se.dispose(),z.dispose(),xe.dispose(),ke.dispose(),ee.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Bh),ce.removeEventListener("sessionend",kh),Qi.stop()};function $e(S){S.preventDefault(),zr("WebGLRenderer: Context Lost."),U=!0}function Ke(){zr("WebGLRenderer: Context Restored."),U=!1;let S=C.autoReset,k=_e.enabled,Z=_e.autoUpdate,$=_e.needsUpdate,X=_e.type;Xe(),C.autoReset=S,_e.enabled=k,_e.autoUpdate=Z,_e.needsUpdate=$,_e.type=X}function Se(S){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function gt(S){let k=S.target;k.removeEventListener("dispose",gt),ut(k)}function ut(S){Vt(S),F.remove(S)}function Vt(S){let k=F.get(S).programs;k!==void 0&&(k.forEach(function(Z){ee.releaseProgram(Z)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,Z,$,X,Ee){k===null&&(k=nt);let Ne=X.isMesh&&X.matrixWorld.determinantAffine()<0,be=Kp(S,k,Z,$,X);ae.setMaterial($,Ne);let Pe=Z.index,ze=1;if($.wireframe===!0){if(Pe=z.getWireframeAttribute(Z),Pe===void 0)return;ze=2}let et=Z.drawRange,ht=Z.attributes.position,Oe=et.start*ze,dt=(et.start+et.count)*ze;Ee!==null&&(Oe=Math.max(Oe,Ee.start*ze),dt=Math.min(dt,(Ee.start+Ee.count)*ze)),Pe!==null?(Oe=Math.max(Oe,0),dt=Math.min(dt,Pe.count)):ht!=null&&(Oe=Math.max(Oe,0),dt=Math.min(dt,ht.count));let kt=dt-Oe;if(kt<0||kt===1/0)return;xe.setup(X,$,be,Z,Pe);let Rt,At=j;if(Pe!==null&&(Rt=x.get(Pe),At=fe,At.setIndex(Rt)),X.isMesh)$.wireframe===!0?(ae.setLineWidth($.wireframeLinewidth*ct()),At.setMode(I.LINES)):At.setMode(I.TRIANGLES);else if(X.isLine){let rn=$.linewidth;rn===void 0&&(rn=1),ae.setLineWidth(rn*ct()),X.isLineSegments?At.setMode(I.LINES):X.isLineLoop?At.setMode(I.LINE_LOOP):At.setMode(I.LINE_STRIP)}else X.isPoints?At.setMode(I.POINTS):X.isSprite&&At.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))At.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let rn=X._multiDrawStarts,Fe=X._multiDrawCounts,fn=X._multiDrawCount,vt=Pe?x.get(Pe).bytesPerElement:1,es=F.get($).currentProgram.getUniforms();for(let an=0;an<fn;an++)es.setValue(I,"_gl_DrawID",an),At.render(rn[an]/vt,Fe[an])}else if(X.isInstancedMesh)At.renderInstances(Oe,kt,X.count);else if(Z.isInstancedBufferGeometry){let rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fe=Math.min(Z.instanceCount,rn);At.renderInstances(Oe,kt,Fe)}else At.render(Oe,kt)};function Ji(S,k,Z,$){B!==null&&S.isNodeMaterial&&B.setObject($,S),ve===!0&&Y.setState(S,Z,!1),S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=sn,S.needsUpdate=!0,Er(S,k,$),S.side=ti,S.needsUpdate=!0,Er(S,k,$),S.side=xn):Er(S,k,$)}this.compile=function(S,k,Z=null){Z===null&&(Z=S),B!==null&&B.renderStart(S,k,Z),w=Q.get(Z),w.init(k),y.push(w),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),S!==Z&&S.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),Ie=this.localClippingEnabled,ve=Y.init(this.clippingPlanes,Ie),ve===!0&&Y.setGlobalState(this.clippingPlanes,k),B!==null&&_e.render(w.state.shadowsArray,Z,k);let $=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ne=0;Ne<Ee.length;Ne++){let be=Ee[Ne];Ji(be,Z,k,X),$.add(be)}else Ji(Ee,Z,k,X),$.add(Ee)}),w=y.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(S,k,Z=null){let $=this.compile(S,k,Z);return new Promise(X=>{function Ee(){if($.forEach(function(Ne){let Pe=F.get(Ne).currentProgram;(Pe===void 0||Pe.isReady())&&$.delete(Ne)}),$.size===0){X(S);return}setTimeout(Ee,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let cc=null;function Yp(S){cc&&cc(S)}function Bh(){Qi.stop()}function kh(){Qi.start()}let Qi=new tp;Qi.setAnimationLoop(Yp),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(S){cc=S,ce.setAnimationLoop(S),S===null?Qi.stop():Qi.start()},ce.addEventListener("sessionstart",Bh),ce.addEventListener("sessionend",kh),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(S,k);let Z=ce.enabled===!0&&ce.isPresenting===!0,$=L!==null&&(oe===null||Z)&&L.begin(P,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,k,oe),w=Q.get(S,y.length),w.init(k),w.state.textureUnits=ie.getTextureUnits(),y.push(w),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),k.isArrayCamera?ge.setFromArrayCamera(k):re.setFromProjectionMatrix(Me,Dn,k.reversedDepth),Ie=this.localClippingEnabled,ve=Y.init(this.clippingPlanes,Ie),R=ue.get(S,_.length),R.init(),_.push(R),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let Ne=P.xr.getDepthSensingMesh();Ne!==null&&uc(Ne,k,-1/0,P.sortObjects)}uc(S,k,0,P.sortObjects),R.finish(),B!==null&&B.updateLights(w.state.lightsArray),P.sortObjects===!0&&R.sort(Be,ft),Ge=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ge&&O.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),ve===!0&&Y.beginShadows();let X=w.state.shadowsArray;if(_e.render(X,S,k),ve===!0&&Y.endShadows(),($&&L.hasRenderPass())===!1){let Ne=R.opaque,be=R.transmissive;if(w.setupLights(),k.isArrayCamera){let Pe=k.cameras;if(be.length>0)for(let ze=0,et=Pe.length;ze<et;ze++){let ht=Pe[ze];Hh(Ne,be,S,ht)}Ge&&O.render(S);for(let ze=0,et=Pe.length;ze<et;ze++){let ht=Pe[ze];zh(R,S,ht,ht.viewport)}}else be.length>0&&Hh(Ne,be,S,k),Ge&&O.render(S),zh(R,S,k)}oe!==null&&G===0&&(ie.updateMultisampleRenderTarget(oe),ie.updateRenderTargetMipmap(oe)),$&&L.end(P),S.isScene===!0&&S.onAfterRender(P,S,k),xe.resetDefaultState(),H=-1,J=null,y.pop(),y.length>0?(w=y[y.length-1],ie.setTextureUnits(w.state.textureUnits),ve===!0&&Y.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,B!==null&&B.renderEnd()};function uc(S,k,Z,$){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){let Ne=k.isArrayCamera?ge:re;if(!S.frustumCulled||S.intersectsFrustum(Ne)){$&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Me);let be=se.update(S),Pe=S.material;Pe.visible&&R.push(S,be,Pe,Z,Ue.z,null,k)}}else if(S.isMesh||S.isLine||S.isPoints){let Ne=k.isArrayCamera?ge:re;if(!S.frustumCulled||S.intersectsFrustum(Ne)){let be=se.update(S),Pe=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(Me)),Array.isArray(Pe)){let ze=be.groups;for(let et=0,ht=ze.length;et<ht;et++){let Oe=ze[et],dt=Pe[Oe.materialIndex];dt&&dt.visible&&R.push(S,be,dt,Z,Ue.z,Oe,k)}}else Pe.visible&&R.push(S,be,Pe,Z,Ue.z,null,k)}}}let Ee=S.children;for(let Ne=0,be=Ee.length;Ne<be;Ne++)uc(Ee[Ne],k,Z,$)}function zh(S,k,Z,$){let{opaque:X,transmissive:Ee,transparent:Ne}=S;w.setupLightsView(Z),ve===!0&&Y.setGlobalState(P.clippingPlanes,Z),$&&ae.viewport(te.copy($)),X.length>0&&Ha(X,k,Z),Ee.length>0&&Ha(Ee,k,Z),Ne.length>0&&Ha(Ne,k,Z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Hh(S,k,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let Oe=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new wn(1,1,{generateMipmaps:!0,type:Oe?Xn:yn,minFilter:On,samples:Math.max(4,Ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ee=w.state.transmissionRenderTarget[$.id],Ne=$.viewport||te;Ee.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);let be=P.getRenderTarget(),Pe=P.getActiveCubeFace(),ze=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(K),he=P.getClearAlpha(),he<1&&P.setClearColor(16777215,.5),P.clear(),Ge&&O.render(Z);let et=P.toneMapping;P.toneMapping=ni;let ht=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),ve===!0&&Y.setGlobalState(P.clippingPlanes,$),Ha(S,Z,$),ie.updateMultisampleRenderTarget(Ee),ie.updateRenderTargetMipmap(Ee),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let dt=0,kt=k.length;dt<kt;dt++){let Rt=k[dt],{object:At,geometry:rn,material:Fe,group:fn}=Rt;if(Fe.side===xn&&At.layers.test($.layers)){let vt=Fe.side;Fe.side=sn,Fe.needsUpdate=!0,Vh(At,Z,$,rn,Fe,fn),Fe.side=vt,Fe.needsUpdate=!0,Oe=!0}}Oe===!0&&(ie.updateMultisampleRenderTarget(Ee),ie.updateRenderTargetMipmap(Ee))}P.setRenderTarget(be,Pe,ze),P.setClearColor(K,he),ht!==void 0&&($.viewport=ht),P.toneMapping=et}function Ha(S,k,Z){let $=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Ee=S.length;X<Ee;X++){let Ne=S[X],{object:be,geometry:Pe,group:ze}=Ne,et=Ne.material;et.allowOverride===!0&&$!==null&&(et=$),be.layers.test(Z.layers)&&Vh(be,k,Z,Pe,et,ze)}}function Vh(S,k,Z,$,X,Ee){B!==null&&X.isNodeMaterial&&B.setObject(S,X),S.onBeforeRender(P,k,Z,$,X,Ee),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(P,k,Z,$,S,Ee),X.transparent===!0&&X.side===xn&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,P.renderBufferDirect(Z,k,$,X,S,Ee),X.side=ti,X.needsUpdate=!0,P.renderBufferDirect(Z,k,$,X,S,Ee),X.side=xn):P.renderBufferDirect(Z,k,$,X,S,Ee),S.onAfterRender(P,k,Z,$,X,Ee)}function Gh(S){let k=0;for(let Z of S)Z.texture!==null&&k++;return k}function Er(S,k,Z){k.isScene!==!0&&(k=nt);let $=F.get(S),X=w.state.lights,Ee=w.state.shadowsArray,Ne=X.state.version,be=ee.getParameters(S,X.state,Ee,k,Z,w.state.lightProbeGridArray),Pe=ee.getProgramCacheKey(be),ze=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;let et=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=T.get(S.envMap||$.environment,et),$.envMapRotation=$.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",gt),ze=new Map,$.programs=ze,$.programVariants=new Map);let ht=ze.get(Pe);if(ht!==void 0){if($.currentProgram===ht&&$.lightsStateVersion===Ne)return $h(S,be),ht}else be.uniforms=ee.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,Z,be),S.onBeforeCompile(be,P),ht=ee.acquireProgram(be,Pe),ze.set(Pe,ht),$.uniforms=be.uniforms;let Oe=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=Y.uniform),$h(S,be),$.needsLights=Jp(S),$.lightsStateVersion=Ne,$.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.sunLights.value=X.state.sun,Oe.sunLightShadows.value=X.state.sunShadow,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.sunShadowMatrix.value=X.state.sunShadowMatrix,Oe.sunShadowCascade.value=X.state.sunShadowCascade,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix),$.numLightProbeGrids=Gh(w.state.lightProbeGridArray),$.currentProgram=ht,$.uniformsList=null,ht}function Zp(S,k,Z,$,X){let Ee=F.get(S),Ne=Ee.currentProgram.id+","+$+","+X,be=Ee.programVariants.get(Ne);return be===void 0?(be=Er(S,k,Z),Ee.programVariants.set(Ne,be)):(Ee.currentProgram=be,Ee.uniformsList=null,Ee.outputColorSpace=$,Ee.toneMapping=X),be}function Wh(S){if(S.uniformsList===null){let k=S.currentProgram.getUniforms();S.uniformsList=pr.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function $h(S,k){let Z=F.get(S);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Kp(S,k,Z,$,X){k.isScene!==!0&&(k=nt),ie.resetTextureUnits();let Ee=k.fog,Ne=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,be=oe===null?P.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:st.workingColorSpace,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,ze=T.get($.envMap||Ne,Pe),et=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ht=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,kt=!!Z.morphAttributes.color,Rt=ni;$.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Rt=P.toneMapping);let At=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=At!==void 0?At.length:0,Fe=F.get($),fn=w.state.lights;if(ve===!0&&(Ie===!0||S!==J)){let Pt=S===J&&$.id===H;Y.setState($,S,Pt)}let vt=!1,es=!1;$.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==fn.state.version||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==ze||$.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Y.numPlanes||Fe.numIntersection!==Y.numIntersection)||Fe.vertexAlphas!==et||Fe.vertexTangents!==ht||Fe.morphTargets!==Oe||Fe.morphNormals!==dt||Fe.morphColors!==kt||Fe.morphTargetsCount!==rn||Fe.numLightProbeGrids!==Gh(w.state.lightProbeGridArray)?vt=!0:(Fe.outputColorSpace!==be||Fe.toneMapping!==Rt)&&(es=!0):(vt=!0,Fe.__version=$.version);let an=Fe.currentProgram;(vt===!0||es===!0)&&(an=es===!0?Zp($,k,X,be,Rt):Er($,k,X),B&&$.isNodeMaterial&&B.onUpdateProgram($,an,Fe));let Va=!1,Pi=!1,ts=!1,_t=an.getUniforms(),Jt=Fe.uniforms;if(ae.useProgram(an.program)&&(Va=!0,Pi=!0,ts=!0),$.id!==H&&(H=$.id,Pi=!0),Va||J!==S){ae.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",S.projectionMatrix),_t.setValue(I,"viewMatrix",S.matrixWorldInverse);let Kt=_t.map.cameraPosition;Kt!==void 0&&Kt.setValue(I,Ye.setFromMatrixPosition(S.matrixWorld)),Ce.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_t.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Pi=!0,ts=!0)}if(Fe.needsLights&&(fn.state.sunShadowMap.length>0&&_t.setValue(I,"sunShadowMap",fn.state.sunShadowMap,ie),fn.state.directionalShadowMap.length>0&&_t.setValue(I,"directionalShadowMap",fn.state.directionalShadowMap,ie),fn.state.spotShadowMap.length>0&&_t.setValue(I,"spotShadowMap",fn.state.spotShadowMap,ie),fn.state.pointShadowMap.length>0&&_t.setValue(I,"pointShadowMap",fn.state.pointShadowMap,ie)),X.isSkinnedMesh){_t.setOptional(I,X,"bindMatrix"),_t.setOptional(I,X,"bindMatrixInverse");let Pt=X.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),_t.setValue(I,"boneTexture",Pt.boneTexture,ie))}X.isBatchedMesh&&(_t.setOptional(I,X,"batchingTexture"),_t.setValue(I,"batchingTexture",X._matricesTexture,ie),_t.setOptional(I,X,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",X._indirectTexture,ie),_t.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",X._colorsTexture,ie));let zn=Z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&ne.update(X,Z,an),(Pi||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,_t.setValue(I,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=fy()),Pi){if(_t.setValue(I,"toneMappingExposure",P.toneMappingExposure),Fe.needsLights&&jp(Jt,ts),Ee&&$.fog===!0&&de.refreshFogUniforms(Jt,Ee),de.refreshMaterialUniforms(Jt,$,ye,Le,w.state.transmissionRenderTarget[S.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Pt=M,Kt=0;for(let oi of w.state.lightProbeGridArray)oi.texture!==null&&(Pt.textures[Kt]=oi.texture,Pt.min[Kt]=oi.boundingBox.min,Pt.max[Kt]=oi.boundingBox.max,Pt.resolution[Kt]=oi.resolution,Kt++);for(let oi in Pt)Pt[oi].length=Kt;Jt.probesSH.value=Pt.textures,Jt.probesMin.value=Pt.min,Jt.probesMax.value=Pt.max,Jt.probesResolution.value=Pt.resolution}pr.upload(I,Wh(Fe),Jt,ie)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(pr.upload(I,Wh(Fe),Jt,ie),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_t.setValue(I,"center",X.center),_t.setValue(I,"modelViewMatrix",X.modelViewMatrix),_t.setValue(I,"normalMatrix",X.normalMatrix),_t.setValue(I,"modelMatrix",X.matrixWorld),$.uniformsGroups!==void 0){let Pt=$.uniformsGroups;for(let Kt=0,oi=Pt.length;Kt<oi;Kt++){let qh=Pt[Kt];ke.update(qh,an),ke.bind(qh,an)}}return an}function jp(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.sunLights.needsUpdate=k,S.sunLightShadows.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Jp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,k,Z){let $=F.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),F.get(S.texture).__webglTexture=k,F.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,k){let Z=F.get(S);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,Z=0){oe=S,q=k,G=Z;let $=null,X=!1,Ee=!1;if(S){let be=F.get(S);if(be.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(I.FRAMEBUFFER,be.__webglFramebuffer),te.copy(S.viewport),le.copy(S.scissor),De=S.scissorTest,ae.viewport(te),ae.scissor(le),ae.setScissorTest(De),H=-1;return}else if(be.__webglFramebuffer===void 0)ie.setupRenderTarget(S);else if(be.__hasExternalTextures)ie.rebindTextures(S,F.get(S.texture).__webglTexture,F.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let et=S.depthTexture;if(be.__boundDepthTexture!==et){if(et!==null&&F.has(et)&&(S.width!==et.image.width||S.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(S)}}let Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ee=!0);let ze=F.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?$=ze[k][Z]:$=ze[k],X=!0):S.samples>0&&ie.useMultisampledRTT(S)===!1?$=F.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?$=ze[Z]:$=ze,te.copy(S.viewport),le.copy(S.scissor),De=S.scissorTest}else te.copy(We).multiplyScalar(ye).floor(),le.copy(qe).multiplyScalar(ye).floor(),De=je;if(Z!==0&&($=V),ae.bindFramebuffer(I.FRAMEBUFFER,$)&&ae.drawBuffers(S,$),ae.viewport(te),ae.scissor(le),ae.setScissorTest(De),X){let be=F.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,Z)}else if(Ee){let be=k;for(let Pe=0;Pe<S.textures.length;Pe++){let ze=F.get(S.textures[Pe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Pe,ze.__webglTexture,Z,be)}}else if(S!==null&&Z!==0){let be=F.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,Z)}H=-1};function Xh(S){let k=F.get(S);return(k.__readFormat!==S.format||k.__readType!==S.type)&&(k.__readFormat=S.format,k.__readType=S.type,k.__formatReadable=Ce.textureFormatReadable(S.format),k.__typeReadable=Ce.textureTypeReadable(S.type)),k}this.readRenderTargetPixels=function(S,k,Z,$,X,Ee,Ne,be=0){if(!(S&&S.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){ae.bindFramebuffer(I.FRAMEBUFFER,Pe);try{let ze=S.textures[be],et=ze.format,ht=ze.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Oe=Xh(ze);if(Oe.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-$&&Z>=0&&Z<=S.height-X&&I.readPixels(k,Z,$,X,pe.convert(et),pe.convert(ht),Ee)}finally{let ze=oe!==null?F.get(oe).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(S,k,Z,$,X,Ee,Ne,be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=F.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(k>=0&&k<=S.width-$&&Z>=0&&Z<=S.height-X){ae.bindFramebuffer(I.FRAMEBUFFER,Pe);let ze=S.textures[be],et=ze.format,ht=ze.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be);let Oe=Xh(ze);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),I.readPixels(k,Z,$,X,pe.convert(et),pe.convert(ht),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let kt=oe!==null?F.get(oe).__webglFramebuffer:null;ae.bindFramebuffer(I.FRAMEBUFFER,kt);let Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ef(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,dt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(dt),I.deleteSync(Rt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,k=null,Z=0){let $=Math.pow(2,-Z),X=Math.floor(S.image.width*$),Ee=Math.floor(S.image.height*$),Ne=k!==null?k.x:0,be=k!==null?k.y:0;ie.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ne,be,X,Ee),ae.unbindTexture()},this.copyTextureToTexture=function(S,k,Z=null,$=null,X=0,Ee=0){let Ne,be,Pe,ze,et,ht,Oe,dt,kt,Rt=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(Z!==null)Ne=Z.max.x-Z.min.x,be=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,et=Z.min.y,ht=Z.isBox3?Z.min.z:0;else{let _t=Math.pow(2,-X);Ne=Math.floor(Rt.width*_t),be=Math.floor(Rt.height*_t),S.isDataArrayTexture?Pe=Rt.depth:S.isData3DTexture?Pe=Math.floor(Rt.depth*_t):Pe=1,ze=0,et=0,ht=0}$!==null?(Oe=$.x,dt=$.y,kt=$.z):(Oe=0,dt=0,kt=0);let At=pe.convert(k.format),rn=pe.convert(k.type),Fe;k.isData3DTexture?(ie.setTexture3D(k,0),Fe=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ie.setTexture2DArray(k,0),Fe=I.TEXTURE_2D_ARRAY):(ie.setTexture2D(k,0),Fe=I.TEXTURE_2D),ae.activeTexture(I.TEXTURE0),ae.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),ae.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),ae.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let fn=ae.getParameter(I.UNPACK_ROW_LENGTH),vt=ae.getParameter(I.UNPACK_IMAGE_HEIGHT),es=ae.getParameter(I.UNPACK_SKIP_PIXELS),an=ae.getParameter(I.UNPACK_SKIP_ROWS),Va=ae.getParameter(I.UNPACK_SKIP_IMAGES);ae.pixelStorei(I.UNPACK_ROW_LENGTH,Rt.width),ae.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rt.height),ae.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),ae.pixelStorei(I.UNPACK_SKIP_ROWS,et),ae.pixelStorei(I.UNPACK_SKIP_IMAGES,ht);let Pi=S.isDataArrayTexture||S.isData3DTexture,ts=k.isDataArrayTexture||k.isData3DTexture;if(S.isDepthTexture){let _t=F.get(S),Jt=F.get(k),zn=F.get(_t.__renderTarget),Pt=F.get(Jt.__renderTarget);ae.bindFramebuffer(I.READ_FRAMEBUFFER,zn.__webglFramebuffer),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Kt=0;Kt<Pe;Kt++)Pi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,F.get(S).__webglTexture,X,ht+Kt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,F.get(k).__webglTexture,Ee,kt+Kt)),I.blitFramebuffer(ze,et,ze+Ne,et+be,Oe,dt,Oe+Ne,dt+be,I.DEPTH_BUFFER_BIT,I.NEAREST);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||F.has(S)){let _t=F.get(S),Jt=F.get(k);ae.bindFramebuffer(I.READ_FRAMEBUFFER,N),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,W);for(let zn=0;zn<Pe;zn++)Pi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,X,ht+zn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,X),ts?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,Ee,kt+zn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,Ee),X!==0?I.blitFramebuffer(ze,et,ze+Ne,et+be,Oe,dt,Oe+Ne,dt+be,I.COLOR_BUFFER_BIT,I.NEAREST):ts?I.copyTexSubImage3D(Fe,Ee,Oe,dt,kt+zn,ze,et,Ne,be):I.copyTexSubImage2D(Fe,Ee,Oe,dt,ze,et,Ne,be);ae.bindFramebuffer(I.READ_FRAMEBUFFER,null),ae.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ts?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Fe,Ee,Oe,dt,kt,Ne,be,Pe,At,rn,Rt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,Ee,Oe,dt,kt,Ne,be,Pe,At,Rt.data):I.texSubImage3D(Fe,Ee,Oe,dt,kt,Ne,be,Pe,At,rn,Rt):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Oe,dt,Ne,be,At,rn,Rt.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Oe,dt,Rt.width,Rt.height,At,Rt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Oe,dt,Ne,be,At,rn,Rt);ae.pixelStorei(I.UNPACK_ROW_LENGTH,fn),ae.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt),ae.pixelStorei(I.UNPACK_SKIP_PIXELS,es),ae.pixelStorei(I.UNPACK_SKIP_ROWS,an),ae.pixelStorei(I.UNPACK_SKIP_IMAGES,Va),Ee===0&&k.generateMipmaps===!0&&k.mipmapsAutoUpdate===!0&&I.generateMipmap(Fe),ae.unbindTexture()},this.initRenderTarget=function(S){F.get(S).__webglFramebuffer===void 0&&ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ie.setTextureCube(S,0):S.isData3DTexture?ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ie.setTexture2DArray(S,0):ie.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){q=0,G=0,oe=null,ae.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var dp={type:"change"},Yu={type:"start"},pp={type:"end"},Zl=new vi,fp=new Tn,py=Math.cos(70*Bt.DEG2RAD),qt=new D,Mn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qu=1e-6,vr=class extends Ma{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xi.ROTATE,MIDDLE:Xi.DOLLY,RIGHT:Xi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ot,this._lastTargetPosition=new D,this._quat=new Ot().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new D,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new D,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gy.bind(this),this._onPointerDown=my.bind(this),this._onPointerUp=_y.bind(this),this._onContextMenu=Ey.bind(this),this._onMouseWheel=yy.bind(this),this._onKeyDown=My.bind(this),this._onTouchStart=by.bind(this),this._onTouchMove=Sy.bind(this),this._onMouseDown=vy.bind(this),this._onMouseMove=xy.bind(this),this._interceptControlDown=Ty.bind(this),this._interceptControlUp=wy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dp),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Zl.origin.copy(this.object.position),Zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zl.direction))<py?this.object.lookAt(this.target):(fp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zl.intersectPlane(fp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qu||this._lastTargetPosition.distanceToSquared(this.target)>qu?(this.dispatchEvent(dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function my(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function _y(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pp),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Yu)}function xy(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yy(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Yu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pp))}function My(i){this.enabled!==!1&&this._handleKeyDown(i)}function by(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1){this.state=xt.NONE;break}this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1){this.state=xt.NONE;break}this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Yu)}function Sy(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function Ey(i){this.enabled!==!1&&i.preventDefault()}function Ty(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zu(i,e){if(e===_u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===fr||e===Ia){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===fr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function mp(i){let e=new Map,t=new Map,n=i.clone();return gp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function gp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)gp(i.children[n],e.children[n],t)}var yr=class extends Un{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new Kl(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kl(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Cn.extractUrlBase(e);a=Cn.resolveURL(c,this.path)}else a=Cn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ai(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mp){try{a[ot.KHR_BINARY_GLTF]=new _h(e)}catch(h){s&&s(h);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Eh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case ot.KHR_MATERIALS_UNLIT:a[h]=new eh;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[h]=new vh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[h]=new xh;break;case ot.KHR_MESH_QUANTIZATION:a[h]=new yh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ay(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Dt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qu=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ei(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xs(u),c.distance=h;break;case"spot":c=new ga(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},eh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new Ve(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},th=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(r,r)}return Promise.all(s)}},ih=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},sh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ah=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},oh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},lh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(r[0],r[1],r[2],Qt),Promise.all(s)}},ch=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},uh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(r[0],r[1],r[2],Qt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}},hh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},dh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?gn:null}extendMaterialParams(e,t){let n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},fh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ph=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},mh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Kl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}},gh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(let g of h){let v=new tt,f=new D,m=new Ot,b=new D(1,1,1),E=new fs(g.geometry,g.material,d);for(let R=0;R<d;R++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,R),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,R),l.SCALE&&b.fromBufferAttribute(l.SCALE,R),E.setMatrixAt(R,v.compose(f,m,b));let M=null;for(let R in l)if(R==="_COLOR_0"){let w=l[R];E.instanceColor=new xi(w.array,w.itemSize,w.normalized)}else if(R!=="TRANSLATION"&&R!=="ROTATION"&&R!=="SCALE"){if(M===null){let _=E.geometry;M=new It,M.name=_.name;for(let y in _.attributes)M.setAttribute(y,_.attributes[y]);for(let y in _.morphAttributes)M.morphAttributes[y]=_.morphAttributes[y];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let y of _.groups)M.addGroup(y.start,y.count,y.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),E.geometry=M}let w=l[R];M.setAttribute(R,new xi(w.array,w.itemSize,w.normalized))}Ct.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),p.push(E)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Mp="glTF",Oa=12,_p={JSON:1313821514,BIN:5130562},_h=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Oa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Oa,r=new DataView(e,Oa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===_p.JSON){let c=new Uint8Array(e,Oa+a,o);this.content=n.decode(c)}else if(l===_p.BIN){let c=Oa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=bh[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=bh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],p=xr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],f=l[g];f!==void 0&&(v.normalized=f)}h(p)},o,c,Qt,d)})})}},xh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},jl=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,v=g-c,f=-2*p+3*d,m=p-d,b=1-f,E=m-d+h;for(let M=0;M!==o;M++){let R=a[v+M+o],w=a[v+M+l]*u,_=a[g+M+o],y=a[g+M]*u;r[M]=b*R+E*w+f*_+m*y}return r}},Ry=new Ot,Mh=class extends jl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ry.fromArray(r).normalize().toArray(r),r}},Bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vp={9728:Ft,9729:Gt,9984:nl,9985:hr,9986:Es,9987:On},xp={33071:Ln,33648:qs,10497:Bi},Ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cy={CUBICSPLINE:void 0,LINEAR:hs,STEP:us},ju={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Iy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new nn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function As(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Py(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ly(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dy(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ju(t.attributes):e=i.indices+":"+Ju(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ju(i.targets[n]);return e}function Ju(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Sh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ny(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Uy=new tt,Eh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ay,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new fa(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new va(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ai(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return As(r,o,s),ri(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Cn.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ku[s.type],o=xr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Nt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Ku[s.type],c=xr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,f;if(p&&p!==h){let m=Math.floor(d/p),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,E=t.cache.get(b);E||(v=new c(o,m*p,s.count*p/u),E=new ki(v,p/u),t.cache.add(b,E)),f=new zi(E,l,d%p/u,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),f=new Nt(v,l,g);if(s.sparse!==void 0){let m=Ku.SCALAR,b=xr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,R=new b(a[1],E,s.sparse.count*m),w=new c(a[2],M,s.sparse.count*l);o!==null&&(f=new Nt(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let _=0,y=R.length;_<y;_++){let L=R[_];if(f.setX(L,w[_*l]),l>=2&&f.setY(L,w[_*l+1]),l>=3&&f.setZ(L,w[_*l+2]),l>=4&&f.setW(L,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=vp[d.magFilter]||Gt,u.minFilter=vp[d.minFilter]||On,u.wrapS=xp[d.wrapS]||Bi,u.wrapT=xp[d.wrapT]||Bi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)u=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(p,g){t.parse(d,p,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let p=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(p,g){let v=p;t.isImageBitmapLoader===!0&&(v=function(f){let m=new Wt(f);m.needsUpdate=!0,p(m)}),t.load(Cn.resolveURL(d,r.path),v,void 0,g)})})}let h=u.then(function(d){return c===!0&&o.revokeObjectURL(l),ri(d,a),d.userData.mimeType=a.mimeType||Ny(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new tr,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Wn,mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let h=s[ot.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ve(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Qt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Mt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xn);let u=r.alphaMode||ju.OPAQUE;if(u===ju.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ju.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let h=r.emissiveFactor;o.emissive=new Ve().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&a!==tn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&As(s,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return yp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Dy(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yp(new It,c,t),c.mode===Bn.TRIANGLE_STRIP?d=d.then(p=>Zu(p,Ia)):c.mode===Bn.TRIANGLE_FAN&&(d=d.then(p=>Zu(p,fr))),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Iy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],f=a[p],m,b=c[p];if(f.mode===Bn.TRIANGLES||f.mode===Bn.TRIANGLE_STRIP||f.mode===Bn.TRIANGLE_FAN||f.mode===void 0){let E=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");E&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&M?new $r(v,b):new lt(v,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(f.mode===Bn.LINES)m=new Vi(v,b);else if(f.mode===Bn.LINE_STRIP)m=new yi(v,b);else if(f.mode===Bn.LINE_LOOP)m=new qr(v,b);else if(f.mode===Bn.POINTS)m=new Yr(v,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(m.geometry.morphAttributes).length>0&&Ly(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),ri(m,r),f.extensions&&As(s,m,f),t.assignFinalMaterial(m),h.push(m)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&As(s,h[0],r),h[0];let d=new cn;r.extensions&&As(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Bt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new tt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xr(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let p=s.channels[h],g=s.samplers[p.sampler],v=p.target,f=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",f)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",b)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],p=h[1],g=h[2],v=h[3],f=h[4],m=[];for(let E=0,M=d.length;E<M;E++){let R=d[E],w=p[E],_=g[E],y=v[E],L=f[E];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let P=n._createAnimationTracks(R,w,_,y,L);if(P)for(let U=0;U<P.length;U++)m.push(P[U])}let b=new vs(r,void 0,m);return ri(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Uy)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);if(u.userData.pivot!==void 0&&h.length>0){let p=u.userData.pivot,g=h[0];u.pivot=new D().fromArray(p),u.position.x-=p[0],u.position.y-=p[1],u.position.z-=p[2],g.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Qs:c.length>1?u=new cn:c.length===1?u=c[0]:u=new Ct,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ri(u,r),r.extensions&&As(n,u,r),r.matrix!==void 0){let h=new tt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new cn;n.name&&(r.name=s.createUniqueName(n.name)),ri(r,n),n.extensions&&As(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(mp(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,p]of s.associations)(d instanceof mn||d instanceof Wt)&&h.set(d,p);return u.traverse(d=>{let p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}Zi[r.path]===Zi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Zi[r.path]){case Zi.weights:u=Ei;break;case Zi.rotation:u=Ti;break;case Zi.translation:case Zi.scale:u=Wi;break;default:n.itemSize===1?u=Ei:u=Wi;break}let h=s.interpolation!==void 0?Cy[s.interpolation]:hs,d=this._getArrayFromAccessor(n);for(let p=0,g=l.length;p<g;p++){let v=new u(l[p]+"."+Zi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ti?Mh:jl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Oy(i,e,t){let n=e.attributes,s=new en;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=Sh(xr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let v=Sh(xr[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new _n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function yp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=bh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ri(i,e),Oy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Py(i,e.targets,t):i})}function bp(){let i=new cn,e=(y,L=.4,P=.58)=>new nn({color:y,metalness:L,roughness:P}),t=e(1664697),n=e(14201675),s=e(4479338),r=e(2108469),a=e(3424845),o=e(13196622),l=e(4693167,.7,.23),c=e(10929103),u=e(1519164),h=(y,L,P,U,B,V,N=s)=>{let W=new lt(new An(y,L,P),N);return W.position.set(U,B,V),i.add(W),W},d=(y,L,P,U=s)=>{let B=new D(...y),V=new D(...L),N=new lt(new ps(P,P,B.distanceTo(V),8),U);return N.position.copy(B).add(V).multiplyScalar(.5),N.quaternion.setFromUnitVectors(new D(0,1,0),V.sub(B).normalize()),i.add(N),N},p=(y,L,P,U,B=s)=>{let V=new D(...y),N=new D(...L),W=new lt(new An(P,V.distanceTo(N),U),B);return W.position.copy(V).add(N).multiplyScalar(.5),W.quaternion.setFromUnitVectors(new D(0,1,0),N.sub(V).normalize()),i.add(W),W},g=(y,L,P,U,B,V=a)=>{let N=new lt(new ps(y,y,L,24),V);return N.rotation.x=Math.PI/2,N.position.set(P,U,B),i.add(N),N};for(let y of[-2.05,2.05]){h(7.5,1.2,1.22,.8,.8,y,r);for(let L=-2.3;L<4.05;L+=1.02)g(.58,1.28,L,.8,y,a),g(.26,1.31,L,.8,y,s);for(let L=0;L<32;L++){let P=-3.04+L*.245;h(.2,.13,1.4,P,1.46,y,a),h(.2,.13,1.4,P,.14,y,a)}for(let L of[-3.05,4.52]){g(.66,1.35,L,.8,y,a);for(let P=0;P<7;P++){let U=-Math.PI/2+P*Math.PI/6,B=h(.18,.13,1.43,L+(L<0?-1:1)*Math.cos(U)*.67,.8+Math.sin(U)*.67,y,s);B.rotation.z=(L<0?-1:1)*U}}}h(5.6,.65,3.2,.8,1.82,0,s);let v=new lt(new ps(2.35,2.5,.48,40),r);v.position.set(.7,2.2,0),i.add(v),h(9,.46,6,.65,2.58,0,s),h(4.5,2.75,4.6,2.25,4.16,0,t),h(4.85,.3,4.95,2.25,5.66,0,t),h(1.6,2.3,5.4,5.05,3.98,0,n),h(.14,1.65,4.7,5.9,4.02,0,n);for(let y of[-2.32,2.32]){h(2.3,1.5,.04,2.85,4.35,y,r);for(let L=0;L<9;L++)h(.1,1.48,.08,1.85+L*.25,4.35,y,t);h(1.05,2.05,.05,.72,3.95,y,t),d([1.06,4.04,y*1.01],[1.06,4.34,y*1.01],.025,c)}h(2.1,1.85,1.9,-1.65,5.14,2.18,t),h(1.88,.16,2.12,-1.65,6.14,2.18,t),h(1.75,.95,.035,-1.65,5.5,3.15,l),h(.035,.95,1.57,-2.72,5.5,2.18,l);for(let y of[-2.58,-1.7,-.78])h(.06,1.05,.08,y,5.5,3.18,r);for(let y of[-2.8,2.8]){d([-3.45,3.45,y],[5.45,3.45,y],.04,c);for(let L=-3.4;L<5.5;L+=.85)d([L,2.85,y],[L,3.45,y],.035,c)}for(let y=0;y<7;y++)h(.78,.1,.35,-.1+y*.26,2.8+y*.26,3.05,s);d([-.2,3.4,3.25],[1.7,5.2,3.25],.035,c);let f=new D(-2.8,3.6,0),m=new D(-9.3,12.5,0);for(let y of[-.85,.85]){p([f.x,f.y,y],[m.x,m.y,y],.55,.55,s);for(let P=0;P<8;P++){let U=P/8,B=(P+1)/8,V=f.clone().lerp(m,U),N=f.clone().lerp(m,B);p([V.x,V.y,y],[N.x,N.y,-y],.13,.13,s),d([V.x,V.y,y],[V.x,V.y,-y],.08,c)}g(1.23,.24,m.x,m.y,y,o),g(.31,.36,m.x,m.y,y,s);let L=new lt(new ca(1.02,.1,8,36),o);L.position.set(m.x,m.y,y),i.add(L);for(let P=0;P<8;P++){let U=P*Math.PI/4;d([m.x,m.y,y],[m.x+Math.cos(U),m.y+Math.sin(U),y],.055,o)}d([m.x,m.y,y],[-1.2,7.4,y],.035,u),d([m.x-.18,m.y,y],[-10,3.4,y],.04,u),d([m.x+.16,m.y,y],[-9.7,3.4,y],.04,u),p([-2.9,5.35,y*.7],[-9.8,3.1,y*.7],.46,.38,s)}let b=new Gi;b.moveTo(-11.7,2.2),b.lineTo(-11.05,1.65),b.lineTo(-9.4,1.95),b.lineTo(-9.15,3.45),b.lineTo(-9.55,3.8),b.lineTo(-9.9,2.45),b.lineTo(-11.7,2.2);let E=new lt(new _s(b,{depth:3,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,steps:1}),r);E.position.z=-1.5,i.add(E);for(let y of[-1.46,1.46])h(1.7,1.25,.12,-10.3,2.63,y,s);for(let y=-1.23;y<=1.3;y+=.5){let L=h(.7,.18,.27,-11.55,2.18,y,s);L.rotation.z=-.16}let M=document.createElement("canvas");M.width=512,M.height=128;let R=M.getContext("2d");R.fillStyle="#1966b9",R.fillRect(0,0,512,128),R.fillStyle="#d8eaf1",R.font="600 65px sans-serif",R.textAlign="center",R.fillText("WK-35",256,89);let w=new Kr(M);w.colorSpace=Mt;let _=new lt(new bi(2.35,.59),new tn({map:w}));return _.position.set(2.6,3.64,2.355),i.add(_),i}function Sp(i,{points:e,onSelect:t,selected:n,resultMode:s=!1,machineView:r=!1,onFocusStructure:a,getOperation:o=()=>null,getResult:l=()=>null}){let c=i.clientWidth||600,u=i.clientHeight||360,h=new _i,d=new Ut(36,c/u,.1,100),p=r?new D(-23,14,23):new D(13,7.2,15.5),g=r?new D(-2,5.8,0):new D(0,3.4,0);d.position.copy(p);let v=new gr({antialias:!0,alpha:!0});v.setPixelRatio(Math.min(window.devicePixelRatio,2)),v.setSize(c,u),v.outputColorSpace=Mt,v.setClearColor(1060153,0),v.domElement.setAttribute("aria-label",(r?"WK35\u7535\u94F2\u6574\u673A":"A\u578B\u67B6")+"\u4E09\u7EF4\u7ED3\u6784\u793A\u610F\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u548C\u6EDA\u8F6E\u7F29\u653E"),i.prepend(v.domElement);let f=new vr(d,v.domElement);f.target.copy(g),f.enableDamping=!0,f.dampingFactor=.09,f.minDistance=r?17:9,f.maxDistance=r?55:35,f.maxPolarAngle=Math.PI*.51,h.add(new _a(11985388,1.8));let m=new ei(12707317,3.3);m.position.set(-7,14,9),h.add(m);let b=new ei(5941191,1.7);b.position.set(8,8,-5),h.add(b);let E=new cn;h.add(E);let M=new nn({color:7577263,roughness:.62,metalness:.55}),R=new nn({color:5077132,roughness:.72,metalness:.4}),w=new nn({color:10143183,roughness:.65,metalness:.5}),_=new nn({color:3758955,roughness:.85}),y=[];function L(I,Te,Ae,Ce=M,ae=Ae){let C=new D(...I),F=new D(...Te),ie=new lt(new An(Ae,C.distanceTo(F),ae,1,24,1),Ce);ie.position.copy(C).add(F).multiplyScalar(.5),ie.quaternion.setFromUnitVectors(new D(0,1,0),F.sub(C).normalize()),E.add(ie),y.push(ie);let T=new Vi(new Qr(ie.geometry),new Wn({color:11852512,transparent:!0,opacity:.24}));return ie.add(T),ie}function P(I,Te,Ae,Ce=.3){let ae=new Gi;ae.absarc(0,0,Ce,0,Math.PI*2,!1);let C=new ms;C.absarc(0,0,Ce*.48,0,Math.PI*2,!0),ae.holes.push(C);let F=new lt(new _s(ae,{depth:.18,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:1,steps:1}),M);F.position.set(I,Te,Ae-.09),E.add(F),y.push(F)}for(let I of[-.9,.9]){L([-3,.42,I],[-.58,6.92,I],.31,M,.46),L([3,.42,I],[.58,6.92,I],.31,M,.46),L([-2.14,2.7,I],[2.14,2.7,I],.22,R,.3),L([-.65,6.65,I],[.65,6.65,I],.28,M,.38);for(let[Te,Ae,Ce]of[[-3,.3,.24],[3,.3,.24],[-.58,7.1,.34],[.58,7.1,.34]])P(Te,Ae,I,Ce)}for(let I of[-.58,.58])L([I,6.72,-.9],[I,6.72,.9],.28,M,.3);for(let I of[-1,1])for(let Te of[2.55,4.85]){let Ae=I*(3-(Te-.42)/6.5*2.42);L([Ae,Te,-.9],[Ae,Te,.9],.13,R)}let U=r?bp():null;U&&(h.add(U),E.scale.setScalar(.58),E.position.set(-1.25,2.85,0));let B=new lt(new bi(70,70),new tn({color:1060153,transparent:!0,opacity:.12}));B.rotation.x=-Math.PI/2,B.position.y=-.08,h.add(B);let V=new ya(r?60:25,r?65:40,2840167,1983058);V.material.transparent=!0,V.material.opacity=.5,V.position.y=-.04,h.add(V);let N=[[-2.96,.5,1.15],[-2.55,1.7,1.15],[-2.1,2.7,1.15],[-1.45,4.5,1.15],[-.82,6.3,1.15],[-.58,7.1,1.15],[0,6.7,1.15],[.58,7.1,1.15],[.82,6.3,1.15],[1.45,4.5,1.15],[2.1,2.7,1.15],[2.55,1.7,1.15],[2.96,.5,1.15],[-.58,7.1,-1.15],[0,6.7,-1.15],[.58,7.1,-1.15]],W=new cn;h.add(W);let q=document.createElement("div");q.className="point-labels",i.append(q);let G=document.createElement("button");r&&(G.className="machine-focus",G.innerHTML="<strong>A \u578B\u67B6 \xB7 16 \u6D4B\u70B9</strong><span>\u8FDB\u5165\u7ED3\u6784\u76D1\u6D4B \u2197</span>",G.addEventListener("click",()=>a?.()),q.append(G));let oe={normal:6411474,warning:15905097,alarm:16414068,offline:7373966},H=e,J=n,te=s,le=null,De=!0,K=0,he=0,we=0,Le=0,ye=0,Be=null,ft=performance.now(),We=window.matchMedia("(prefers-reduced-motion: reduce)").matches,qe=new Ve,je=new D,re=new D,ge=[1526447,424896,1294279,6474855,14932294,15502135,14109503].map(I=>new Ve(I));E.updateMatrixWorld(!0),y.forEach(I=>{I.updateMatrix();let Te=I.matrix.clone().invert(),Ae=[I,...I.children.filter(C=>C.isLineSegments)].map(C=>{let F=C.geometry.getAttribute("position"),ie=F.array.slice(),T=new Float32Array(ie.length);for(let x=0;x<ie.length;x+=3)je.set(ie[x],ie[x+1],ie[x+2]).applyMatrix4(I.matrix),T[x]=je.x,T[x+1]=je.y,T[x+2]=je.z;return F.setUsage(Vl),{target:C,position:F,rest:ie,world:T}}),Ce=new tn({color:16777215,vertexColors:!0}),ae=new pt(new Float32Array(Ae[0].rest.length),3);ae.setUsage(Vl),I.geometry.setAttribute("color",ae),I.userData.result={sources:Ae,inverse:Te,material:Ce,originalMaterial:I.material,colors:ae}});function ve(I){y.forEach(Te=>{let Ae=Te.userData.result;if(Te.material=I?Ae.material:Ae.originalMaterial,!I)for(let Ce of Ae.sources)Ce.position.array.set(Ce.rest),Ce.position.needsUpdate=!0}),i.dataset.simulationState=I?"ready":"inactive",I&&Ie(0,o())}function Ie(I,Te){if(!te||le)return;let Ae=l(),Ce=H.filter(se=>se.quality==="valid"&&Number.isFinite(se.value)),ae=Bt.clamp(Number(Te?.load??(Ce.length?Math.max(...Ce.map(se=>Math.abs(se.value)))/400:0)),0,1),C=Ae||{stress:ae*100,displacement:ae,load:ae},F=Ae?"proxy":"normalized";Be!==F&&(Be=F,he=Number(C.stress)||0,we=Number(C.displacement)||0,Le=ae,ye=(Te?.phase==="slew"?.55:.22)*ae),i.dataset.responseKind=F;let ie=De&&Te?.moving!==!1&&Te?.simulationPlaying!==!1&&H.every(se=>se.quality==="valid");if(ie){K+=I;let se=1-Math.exp(-I*4);he=Bt.lerp(he,Number(C.stress)||0,se),we=Bt.lerp(we,Number(C.displacement)||0,se),Le=Bt.lerp(Le,Number(Te?.load??C.load)||0,se),ye=Bt.lerp(ye,(Te?.phase==="slew"?.55:.22)*ae,se)}let T=We?0:Math.sin(K*7.1)*.018*Le,x=Bt.clamp(we*(F==="normalized"?.19:.055),0,.25)*(1+T),z=ye;for(let se of y){let ee=se.userData.result;for(let[de,ue]of ee.sources.entries()){let Q=ue.position.array;for(let Y=0;Y<ue.world.length;Y+=3){let _e=ue.world[Y],O=ue.world[Y+1],ne=ue.world[Y+2],j=Bt.clamp(O/7.25,0,1),fe=j*j*(3-2*j);if(re.set(_e+x*fe,O-x*.24*fe,ne+x*z*fe).applyMatrix4(ee.inverse),Q[Y]=re.x,Q[Y+1]=re.y,Q[Y+2]=re.z,de===0){let pe=Math.exp(-((Math.abs(_e)-.57)**2/.19+(O-6.83)**2/.55)),xe=Math.exp(-((Math.abs(_e)-2.12)**2/.32+(O-2.7)**2/.4)),ke=Math.exp(-((Math.abs(_e)-2.9)**2/.22+(O-.52)**2/.3)),Xe=.18+.27*j+.47*pe+.32*xe+.16*ke,ce=1+Math.sign(_e)*z*.12,Ke=Bt.clamp(Xe*ce*he/(F==="normalized"?100:220),0,1)*(ge.length-1),Se=Math.min(ge.length-2,Math.floor(Ke));qe.copy(ge[Se]).lerp(ge[Se+1],Ke-Se),ee.colors.setXYZ(Y/3,qe.r,qe.g,qe.b)}}ue.position.needsUpdate=!0}ee.colors.needsUpdate=!0}i.dataset.simulationState=ie?"playing":"paused",i.dataset.simulationFrame=K.toFixed(3),i.dataset.simulationLoad=Le.toFixed(3),i.dataset.simulationStress=he.toFixed(2),i.dataset.simulationDisplacement=we.toFixed(3)}let Me=N.map((I,Te)=>{let Ae=new tn({color:oe[e[Te].status]}),Ce=new lt(new la(.073,12,10),Ae);Ce.position.set(...I),Ce.userData.pointId=e[Te].id,W.add(Ce);let ae=new lt(new oa(.13,.145,32),new tn({color:oe[e[Te].status],side:xn,transparent:!0,opacity:.65}));ae.position.set(...I),W.add(ae);let C=document.createElement("button");C.className="anchor-label",C.type="button",C.textContent=e[Te].id,C.setAttribute("aria-label","\u4E09\u7EF4\u6D4B\u70B9 "+e[Te].id),C.addEventListener("click",()=>t(e[Te].id));let F=document.createElement("span");return F.className="anchor-leader",q.append(F),q.append(C),{sphere:Ce,halo:ae,label:C,leader:F,point:e[Te],v:new D}});function Ye(I,Te=J,Ae=te){if(H=I,J=Te,te=Ae,r){let Ce=I.filter(ae=>ae.status==="alarm"||ae.status==="warning").length;G.querySelector("span").textContent=I.some(ae=>ae.quality!=="valid")?"\u542B\u65E0\u6548\u6570\u636E \xB7 \u8FDB\u5165\u76D1\u6D4B \u2197":Ce?Ce+" \u4E2A\u8D8A\u9650 \xB7 \u8FDB\u5165\u76D1\u6D4B \u2197":"\u8FDB\u5165\u7ED3\u6784\u76D1\u6D4B \u2197"}Me.forEach((Ce,ae)=>{let C=I[ae];Ce.point=C,Ce.label.className="anchor-label "+C.status+(Te===C.id?" selected":""),Ce.label.textContent=C.id,Ce.label.title=C.id+" \xB7 "+(C.quality==="stale"?"\u7F13\u5B58\u503C ":"")+(C.value??"\u65E0\u6570\u636E")+" \u03BC\u03B5",Ce.sphere.material.color.setHex(oe[C.status]),Ce.halo.material.color.setHex(oe[C.status]),Ce.sphere.scale.setScalar(Te===C.id?1.65:1),Ce.halo.scale.setScalar(Te===C.id?1.5:1)}),ve(Ae)}Ye(e);let Ue=new ResizeObserver(()=>{let I=i.clientWidth,Te=i.clientHeight;!I||!Te||(d.aspect=I/Te,d.updateProjectionMatrix(),v.setSize(I,Te))});Ue.observe(i);let nt,Ge=!0;function ct(I=performance.now()){if(!Ge)return;if(nt=requestAnimationFrame(ct),document.hidden){ft=I;return}if(I-ft<32)return;let Te=Math.min((I-ft)/1e3,.1);ft=I;let Ae=o();Ie(Te,Ae),f.update();let Ce=[],ae=[[0,0],[-35,0],[35,0],[0,-21],[-35,-21],[35,-21],[-70,0],[70,0],[0,21],[-35,21],[35,21],[-70,-21],[70,-21],[0,-42],[-35,-42],[35,-42],[-70,21],[70,21]];if(Me.forEach(C=>{C.halo.quaternion.copy(d.quaternion),C.v.copy(C.sphere.position).project(d);let F=(C.v.x*.5+.5)*i.clientWidth,ie=(-C.v.y*.5+.5)*i.clientHeight,T=F,x=ie-17;for(let[z,se]of ae){let ee=F+z,de=ie-17+se;if(!(ee<20||ee>i.clientWidth-20||de<49||de>i.clientHeight-15)&&Ce.every(ue=>Math.abs(ue.x-ee)>33||Math.abs(ue.y-de)>18)){T=ee,x=de;break}}Ce.push({x:T,y:x}),C.label.style.left=T+"px",C.label.style.top=x+"px",C.label.hidden=r||te||!!le||C.v.z>1,C.leader.hidden=C.label.hidden,C.leader.style.left=F+"px",C.leader.style.top=ie+"px",C.leader.style.width=Math.hypot(T-F,x-ie)+"px",C.leader.style.transform="rotate("+Math.atan2(x-ie,T-F)+"rad)"}),W.visible=!r&&!te&&!le,r){let C=new D(-1.25,8.25,0).project(d);G.style.left=(C.x*.5+.5)*i.clientWidth+"px",G.style.top=(-C.y*.5+.5)*i.clientHeight-16+"px",G.hidden=!!le}v.render(h,d)}return ct(),{update:Ye,setPlayback(I){De=!!I},reset(){d.position.copy(p),f.target.copy(g),f.update()},viewFront(){d.position.copy(r?new D(-2,9,33):new D(0,4,20)),f.target.copy(g),f.update()},wireframe(){let I=le?[le]:[E,...U?[U]:[]],Te=new Set;I.forEach(Ae=>Ae.traverse(Ce=>{Ce.isMesh&&(Array.isArray(Ce.material)?Ce.material:[Ce.material]).forEach(ae=>Te.add(ae))})),Te.forEach(Ae=>Ae.wireframe=!Ae.wireframe)},async loadGLB(I){let Te=await new yr().parseAsync(I,""),Ae=new en().setFromObject(Te.scene),Ce=Ae.getSize(new D),ae=Ae.getCenter(new D),C=7/Math.max(Ce.x,Ce.y,Ce.z,.001);Te.scene.position.sub(ae).multiplyScalar(C),Te.scene.position.y+=3.5,Te.scene.scale.setScalar(C),le&&h.remove(le),le=Te.scene,h.add(le),E.visible=!1,U&&(U.visible=!1),W.visible=!1},dispose(){Ge=!1,cancelAnimationFrame(nt),Ue.disconnect(),f.dispose(),y.forEach(I=>{let Te=I.userData.result;Te&&(Te.material.dispose(),Te.originalMaterial.dispose())}),h.traverse(I=>{I.geometry?.dispose(),I.material&&(Array.isArray(I.material)?I.material:[I.material]).forEach(Te=>Te.dispose())}),v.dispose(),v.domElement.remove(),q.remove()}}}function Ep(i){let{S:e,points:t,rules:n,icon:s,button:r,tag:a,escape:o,pointById:l,currentRule:c,valueText:u,statusName:h,fmtTime:d,signalSeries:p,historySeries:g,heading:v}=i,f={view:"business",monitorMode:"live",signal:"average",trend:"strain",signalResult:null,trendResult:null,signalRunning:!1,trendRunning:!1,resultRunning:!0,reports:[],iotFilter:"all",dimensions:{L:null,W:null,H:null,S:null},users:[],maintenance:[],importTarget:"structure"},m=(C,F,ie="",T="")=>`<section class="customer-panel ${T}"><div class="customer-panel-head"><h2>${C}</h2><div>${ie}</div></div>${F}</section>`,b=C=>`${r("\u5BFC\u5165","customer-import",{compact:!0}).replace('data-action="customer-import"',`data-action="customer-import" data-target="${C}"`)}${r("\u5BFC\u51FA","customer-export",{compact:!0}).replace('data-action="customer-export"',`data-action="customer-export" data-target="${C}"`)}`,E=()=>`<div class="customer-structure-fields"><label>\u540D\u79F0\uFF1A<input class="input" value="\u77FF\u7528\u7535\u94F2 A \u578B\u67B6" readonly aria-label="\u7ED3\u6784\u540D\u79F0"></label><label>\u6D4B\u70B9\u6570\u91CF\uFF1A<input class="input" value="16" readonly aria-label="\u6D4B\u70B9\u6570\u91CF"></label><label>\u670D\u5F79\u65F6\u95F4\uFF1A<input class="input" value="\u2014" readonly aria-label="\u670D\u5F79\u65F6\u95F4"><span>\u5929</span></label><button class="icon-btn" data-action="refresh-status" aria-label="\u5237\u65B0\u7ED3\u6784\u72B6\u6001">${s("reset")}</button></div>`,M=(C=!1)=>`<button class="customer-frame ${C?"large":""}" data-action="customer-scene" aria-label="\u67E5\u770B A \u578B\u67B6\u4E09\u7EF4\u6D4B\u70B9"><img src="assets/image-51d61f66093a8bc2.png" alt="A \u578B\u67B6\u7ED3\u6784\u56FE"><span>${s("expand")}\u4E09\u7EF4\u6D4B\u70B9</span></button>`,R=()=>({online:t.filter(C=>C.quality==="valid").length,offline:t.filter(C=>C.quality==="missing").length,abnormal:t.filter(C=>C.quality==="stale").length});function w(){let C=R();return`<div class="customer-sensor-stat"><div class="customer-donut" style="--online:${C.online/16*100}%;--offline:${(C.online+C.offline)/16*100}%"><div><strong>16</strong><span>\u603B\u6570</span></div></div><div class="customer-sensor-legend">${[["online","\u5728\u7EBF"],["offline","\u79BB\u7EBF"],["abnormal","\u5F02\u5E38"]].map(([F,ie])=>`<div><i class="${F}"></i><span>${ie}</span><small>${Math.round(C[F]/16*100)}%</small><strong>${C[F]}</strong></div>`).join("")}</div></div>`}function _(){let C=e.alarms.length;return`<div class="customer-alarm-stat"><div class="customer-alarm-total"><strong>${C}</strong><span>\u4ECA\u65E5\u62A5\u8B66\u6570\u91CF</span></div><div class="customer-alarm-counts">${[[C,"\u7D2F\u8BA1\u4E0A\u62A5\u6570\u91CF","bell"],[e.alarms.filter(F=>!F.acknowledged).length,"\u5F85\u5904\u7406\u6570\u91CF","clock"],[e.alarms.filter(F=>F.acknowledged).length,"\u5DF2\u5904\u7406\u6570\u91CF","file"]].map(([F,ie,T])=>`<div>${s(T)}<strong>${F}</strong><span>${ie}</span></div>`).join("")}</div></div>`}function y(){return'<div class="customer-gauge"><svg viewBox="0 0 300 188" role="img" aria-label="\u7ED3\u6784\u5065\u5EB7\u6307\u6570\u672A\u8BC4\u4F30"><path d="M44 153 A116 116 0 0 1 90 45" stroke="#b65365"/><path d="M90 45 A116 116 0 0 1 210 45" stroke="#d9c878"/><path d="M210 45 A116 116 0 0 1 256 153" stroke="#66b591"/><path class="gauge-inner" d="M60 152 A99 99 0 1 1 240 152"/><text x="52" y="135">0</text><text x="78" y="58">25</text><text x="143" y="33">50</text><text x="211" y="58">75</text><text x="239" y="135">100</text></svg><div><strong>\u2014<small>\u5206</small></strong><span>\u5065\u5EB7\u6307\u6570</span><b>\u672A\u8BC4\u4F30</b></div></div>'}function L(){let C=e.operation||{};return`<span class="operation-live-dot ${e.paused||e.simulationPlaying===!1||e.scenario==="network"?"stopped":""}"></span><strong>${o(C.phaseLabel||"\u5F85\u673A")}</strong><span>\u8F7D\u8377 <b>${Math.round((C.load||0)*100)}</b> %</span><span>\u5FAA\u73AF <b>${C.cycle||1}</b></span>`}function P(){return`<button class="btn compact" data-action="customer-playback" aria-pressed="${e.simulationPlaying!==!1}">${s(e.simulationPlaying===!1?"play":"pause")}<span>${e.simulationPlaying===!1?"\u7EE7\u7EED\u56DE\u653E":"\u6682\u505C\u56DE\u653E"}</span></button>`}function U(){return`<div class="customer-home"><div class="customer-home-machine" id="home-model-stage"><svg class="equipment-sky" viewBox="700 0 664 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><image href="assets/image-d6687363f9291df9.png" width="1364" height="922"/></svg><img class="equipment-fallback" src="assets/image-d6687363f9291df9.png" alt="\u7528\u6237\u6307\u5B9A\u7684 WK35 \u7535\u94F2\u6A21\u578B"><div class="equipment-loading" data-equipment-status role="status">\u6A21\u578B\u52A0\u8F7D</div><div class="customer-operation-bar" id="customer-operation">${L()}</div><div class="equipment-tools">${P()}<button class="icon-btn" data-action="equipment-zoom-in" aria-label="\u653E\u5927\u7535\u94F2\u6A21\u578B">+</button><button class="icon-btn" data-action="equipment-zoom-out" aria-label="\u7F29\u5C0F\u7535\u94F2\u6A21\u578B">\u2212</button><button class="icon-btn" data-action="reset-model" aria-label="\u590D\u4F4D\u7535\u94F2\u89C6\u89D2">${s("reset")}</button><button class="btn" data-action="focus-structure">\u7ED3\u6784\u76D1\u6D4B ${s("arrow")}</button></div></div><aside class="customer-home-rail"><div id="customer-health">${m("\u7ED3\u6784\u5065\u5EB7\u6307\u6570",y())}</div><div id="customer-sensors">${m("\u4F20\u611F\u5668\u7EDF\u8BA1",w())}</div><div id="customer-alarms">${m("\u62A5\u8B66\u7EDF\u8BA1",_())}</div></aside></div>`}function B(C=!1){let F=l(e.selected),ie=Math.max(0,Math.floor((e.operation?.elapsed||0)/60));return C?`<div class="customer-monitor-time"><strong>${ie}<small>\u5206\u949F</small></strong><span>\u76D1\u6D4B\u65F6\u95F4</span></div><div class="customer-evaluation-state"><strong>${e.modelResult?"\u5DF2\u751F\u6210\u6A21\u578B\u7ED3\u679C":"\u672A\u8BC4\u4F30"}</strong><span>\u7ED3\u6784\u8BC4\u4F30\u7ED3\u679C</span></div>`:`<div class="customer-monitor-time"><strong>${ie}<small>\u5206\u949F</small></strong><span>\u76D1\u6D4B\u65F6\u95F4</span></div><div class="customer-health-state"><div class="customer-state-labels"><span>\u6B63\u5E38</span><span>\u9884\u8B66</span><span>\u62A5\u8B66</span></div><div class="customer-state-bar"><i class="${F.status}" style="left:${F.status==="alarm"?91:F.status==="warning"?55:12}%"></i></div><span>${a(h[F.status],F.status==="alarm"?"red":F.status==="warning"?"amber":"")}<span>\u5065\u5EB7\u72B6\u6001</span></span></div>`}function V(C=!1){let F=B(C),ie=C?`<div class="customer-report-actions"><button data-action="customer-report-generate">${s("file")}<span>\u751F\u6210</span></button><button data-action="customer-report-query">${s("clock")}<span>\u67E5\u8BE2</span></button><button data-action="customer-fea">${s("layers")}<span>\u4EFF\u771F\u6210\u679C</span></button></div>`:`<div class="customer-point-state" id="customer-point-state">${N()}</div>`;return`<div class="customer-monitor-top"><div>${E()}<div class="customer-info-pair">${m(C?"\u7ED3\u6784\u8BC4\u4F30\u4FE1\u606F":"\u7ED3\u6784\u76D1\u6D4B\u4FE1\u606F",`<div class="customer-info-body" id="customer-monitor-info">${F}</div>`,`<span>${e.time.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"})}</span>`)}${m(C?"\u7ED3\u6784\u8BC4\u4F30\u62A5\u544A":"\u6D4B\u70B9\u72B6\u6001\u4FE1\u606F",ie)}</div></div>${M()}</div>`}function N(){let C=l(e.selected),F=c();return`<dl><div><dt>\u6D4B\u70B9\uFF1A</dt><dd>${C.id} \xB7 ${C.name}</dd></div><div><dt>\u4F20\u611F\u5668\u7C7B\u578B\uFF1A</dt><dd>\u5E94\u53D8\u4F20\u611F\u5668</dd></div><div><dt>\u76D1\u6D4B\u6307\u6807\u503C\uFF1A</dt><dd><strong>${u(C)}</strong> \u03BC\u03B5</dd></div><div><dt>\u9884\u8B66\u4E0A\u4E0B\u9650\uFF1A</dt><dd>${F.lowWarning} / ${F.highWarning} \u03BC\u03B5</dd></div></dl><div>${r("IOT\u7BA1\u7406","customer-iot",{compact:!0})}${r("\u8BE6\u60C5","point-detail",{compact:!0})}</div>`}function W(){return`<div class="customer-filter-bar"><label>\u6D4B\u70B9<select class="select" id="customer-point" aria-label="\u9009\u62E9\u6D4B\u70B9">${i.pointOptions(e.selected)}</select></label><label>\u6570\u636E\u8303\u56F4<input class="input" type="datetime-local" id="customer-from" aria-label="\u6570\u636E\u5F00\u59CB\u65F6\u95F4" value="${e.historyFrom}"></label><span>\u2014</span><input class="input" type="datetime-local" id="customer-to" aria-label="\u6570\u636E\u7ED3\u675F\u65F6\u95F4" value="${e.historyTo}"><label>\u76D1\u6D4B\u6307\u6807<select class="select" aria-label="\u76D1\u6D4B\u6307\u6807"><option>\u5E94\u53D8 / \u03BC\u03B5</option></select></label>${r("\u67E5\u8BE2","customer-query",{compact:!0})}${r("\u5B9E\u65F6","customer-live",{compact:!0})}</div>`}function q(){return f.monitorMode==="history"?g(e.selected):p(e.selected,121,.5)}function G(C,{color:F="#4b8dff",name:ie="\u5E94\u53D8\u66F2\u7EBF",threshold:T=!1,unit:x="\u03BC\u03B5",range:z=null,sampleTimes:se=null}={}){if(!C?.length)return'<div class="customer-chart-empty">\u5C1A\u65E0\u7ED3\u679C</div>';let ee=l(e.selected);if(ee.quality!=="valid"&&f.monitorMode==="live")return`<div class="customer-chart-empty">${ee.quality==="stale"?"\u6570\u636E\u94FE\u8DEF\u4E2D\u65AD":"\u65E0\u6709\u6548\u6570\u636E"}</div>`;let de=Math.max(1,Math.ceil(C.length/500)),ue=C.map((ut,Vt)=>Vt).filter(ut=>ut%de===0||ut===C.length-1),Q=ue.map(ut=>C[ut]),Y=se?ue.map(ut=>Number(se[ut])):null,_e=z?.[0]??Math.min(0,...Q)-15,O=z?.[1]??Math.max(360,...Q)+15,ne=1100,j=180,fe=49,pe=18,xe=14,ke=27,Xe=ut=>xe+(O-ut)/(O-_e)*(j-xe-ke),ce=ut=>fe+(Y&&Y.at(-1)>Y[0]?(Y[ut]-Y[0])/(Y.at(-1)-Y[0]):ut/Math.max(1,Q.length-1))*(ne-fe-pe),$e=Array.from({length:4},(ut,Vt)=>{let Ji=_e+(O-_e)*Vt/3;return`<line x1="${fe}" x2="${ne-pe}" y1="${Xe(Ji)}" y2="${Xe(Ji)}"/><text x="${fe-9}" y="${Xe(Ji)+4}" text-anchor="end">${Math.round(Ji)}</text>`}).join(""),Ke=c(),Se=Y?[d(new Date(Y[0])),d(new Date((Y[0]+Y.at(-1))/2)),d(new Date(Y.at(-1)))]:f.monitorMode==="history"?[e.historyFrom.slice(11),"",e.historyTo.slice(11)]:[d(new Date(e.time-6e4)),d(new Date(e.time-3e4)),d()],gt=Q.at(-1);return`<svg viewBox="0 0 ${ne} ${j}" preserveAspectRatio="none" role="img" aria-label="${ie}\uFF0C\u5355\u4F4D${x}" data-last-value="${gt.toFixed(2)}"><title>${ie} \xB7 ${gt.toFixed(1)} ${x}</title><g class="customer-chart-grid">${$e}</g>${T&&Ke.enabled?`<path d="M${fe} ${Xe(Ke.highWarning)}H${ne-pe}" stroke="#d5a54f" stroke-dasharray="7 5" fill="none"/>`:""}<path class="customer-signal-line" d="${Q.map((ut,Vt)=>`${Vt?"L":"M"}${ce(Vt).toFixed(1)},${Xe(ut).toFixed(1)}`).join(" ")}" fill="none" stroke="${F}" stroke-width="1.8" vector-effect="non-scaling-stroke"/><circle cx="${ce(Q.length-1)}" cy="${Xe(gt)}" r="3" fill="${F}"/><g class="customer-chart-time">${Se.map((ut,Vt)=>`<text x="${fe+Vt*(ne-fe-pe)/2}" y="${j-6}" text-anchor="${Vt===0?"start":Vt===2?"end":"middle"}">${ut}</text>`).join("")}<text x="8" y="12">${x}</text></g></svg>`}let oe=(C,F,ie="",T="")=>`<section class="customer-chart-block"><div class="customer-chart-side">${C}</div><div class="customer-chart-body"><div class="customer-chart-content" ${T?`id="${T}"`:""}>${F}</div>${ie?`<div class="customer-chart-footer">${ie}</div>`:""}</div></section>`;function H(){return v("","\u7ED3\u6784\u76D1\u6D4B","",`${r(e.paused?"\u7EE7\u7EED\u5237\u65B0":"\u6682\u505C\u5237\u65B0","pause",{compact:!0})}${r("\u5386\u53F2\u8FFD\u6EAF","customer-history",{compact:!0})}${r("\u5BFC\u51FA","customer-export-monitor",{compact:!0})}`)+`<div class="customer-content">${V()}${W()}${oe("\u539F\u59CB\u4FE1\u53F7",G(q(),{name:"\u539F\u59CB\u4FE1\u53F7"}),r("\u4FE1\u53F7\u5904\u7406","customer-process",{compact:!0}),"customer-raw-chart")}${oe("\u76D1\u6D4B\u6307\u6807",G(q(),{threshold:!0,name:"\u5E94\u53D8\u76D1\u6D4B\u6307\u6807"}),r("\u8D8B\u52BF\u5206\u6790","customer-analysis",{compact:!0}),"customer-indicator-chart")}</div>`}function J(C){let F=f[C+"Running"];return`<span class="customer-run-status">${F?"\u8FD0\u884C\u4E2D":f[C+"Result"]?"\u5DF2\u505C\u6B62":"\u672A\u6267\u884C"}</span>${r("\u6267\u884C","customer-execute-"+C,{compact:!0})}${r("\u505C\u6B62","customer-stop-"+C,{compact:!0,disabled:!F})}`}function te(){return f.view!=="business"?Le():v("","\u7ED3\u6784\u8BC4\u4F30","",`${r("\u52A8\u6001\u4EFF\u771F","customer-simulation",{compact:!0})}${r("\u6A21\u578B\u7BA1\u7406","goto-deployment",{compact:!0})}${r("\u89C6\u9891\u8D44\u6599","goto-videos",{compact:!0})}`)+`<div class="customer-content">${V(!0)}${W()}<div class="customer-analysis-grid"><section class="customer-analysis-column"><div class="customer-analysis-heading"><h2>\u4FE1\u53F7\u5904\u7406</h2><select class="select" id="customer-signal" aria-label="\u4FE1\u53F7\u5904\u7406\u7B97\u6CD5">${[["average","\u6ED1\u52A8\u5E73\u5747"],["raw","\u539F\u59CB\u4FE1\u53F7"]].map(([C,F])=>`<option value="${C}" ${f.signal===C?"selected":""}>${F}</option>`).join("")}</select></div>${oe("\u539F\u59CB\u4FE1\u53F7",G(q(),{name:"\u4FE1\u53F7\u5904\u7406\u8F93\u5165"}),"","customer-signal-input")}${oe("\u4FE1\u53F7\u5904\u7406\u7ED3\u679C",G(f.signalResult,{color:"#6bd2c8",name:"\u4FE1\u53F7\u5904\u7406\u7ED3\u679C"}),J("signal"),"customer-signal-output")}</section><section class="customer-analysis-column"><div class="customer-analysis-heading"><h2>\u8D8B\u52BF\u5206\u6790</h2><select class="select" id="customer-trend" aria-label="\u8D8B\u52BF\u5206\u6790\u7B97\u6CD5">${[["strain","\u5E94\u53D8\u8D8B\u52BF"],["proxy","\u964D\u9636\u4EE3\u7406\u6A21\u578B"]].map(([C,F])=>`<option value="${C}" ${f.trend===C?"selected":""}>${F}</option>`).join("")}</select></div>${oe("\u76D1\u6D4B\u6307\u6807",G(q(),{threshold:!0,name:"\u8D8B\u52BF\u5206\u6790\u8F93\u5165"}),"","customer-trend-input")}${oe("\u8D8B\u52BF\u5206\u6790\u7ED3\u679C",f.trend==="proxy"?le():G(f.trendResult,{color:"#e2bf69",name:"\u5E94\u53D8\u8D8B\u52BF\u7ED3\u679C"}),J("trend"),"customer-trend-output")}</section></div></div>`}function le(){if(!t.every(F=>F.quality==="valid"))return'<div class="customer-chart-empty">\u8F93\u5165\u6570\u636E\u5F02\u5E38</div>';let C=e.modelResult;return C?`<div class="customer-proxy-summary"><div><span>\u6D3B\u52A8\u7248\u672C</span><strong>${o(C.version)}</strong></div><div><span>\u8F93\u5165\u6279\u6B21</span><strong>${o(C.batch)}</strong></div><div><span>\u7ED3\u679C\u65F6\u95F4</span><strong>${d(C.time)}</strong></div>${r("\u67E5\u770B\u6A21\u578B\u7ED3\u679C","customer-model-results",{compact:!0})}</div>`:`<div class="customer-chart-empty">${e.modelReady?"\u5C1A\u65E0\u6A21\u578B\u7ED3\u679C":"\u6A21\u578B\u672A\u90E8\u7F72"}</div>`}function De(){return`<div class="customer-playback-toolbar"><div id="customer-operation">${L()}</div><div>${P()}${f.view==="simulation"?r("\u4EFF\u771F\u6210\u679C","customer-fea",{compact:!0}):""}</div></div>`}function K(){let C=e.operation||{},F=t.filter(T=>T.quality==="valid"),ie=F.length?F.reduce((T,x)=>Math.abs(T.value)>Math.abs(x.value)?T:x):null;return`<div class="key-values"><div><span>\u5F53\u524D\u5DE5\u51B5</span><strong>${o(C.phaseLabel||"\u5F85\u673A")}</strong></div><div><span>\u8F7D\u8377\u6C34\u5E73</span><strong>${Math.round((C.load||0)*100)} %</strong></div><div><span>\u9636\u6BB5\u8FDB\u5EA6</span><strong>${Math.round((C.progress||0)*100)} %</strong></div><div><span>\u5CF0\u503C\u6D4B\u70B9</span><strong>${ie?.id||"\u2014"}</strong></div><div><span>\u5CF0\u503C\u5E94\u53D8</span><strong>${ie?u(ie):"\u2014"} \u03BC\u03B5</strong></div><div><span>\u6570\u636E\u65F6\u95F4</span><strong>${d(e.time)}</strong></div></div><div class="customer-load-meter"><i style="width:${Math.round((C.load||0)*100)}%"></i></div>`}function he(){return`<div class="model-result-grid customer-dynamic-simulation"><section class="panel model-panel"><div class="panel-head"><h2>A \u578B\u67B6 \xB7 \u5DE5\u51B5\u54CD\u5E94</h2><span class="tag">\u5FAA\u73AF\u56DE\u653E</span></div><div class="model-stage" id="model-stage"><div class="model-tools"><button class="icon-btn" data-action="reset-model" aria-label="\u590D\u4F4D\u4E09\u7EF4\u89C6\u89D2">${s("reset")}</button><button class="icon-btn" data-action="wire-model" aria-label="\u5207\u6362\u6A21\u578B\u7EBF\u6846">${s("layers")}</button></div></div><div class="model-footer"><span>\u54CD\u5E94\u5E45\u503C</span><div class="result-scale"><span>\u4F4E</span><div class="scale-gradient"></div><span>\u9AD8</span></div></div></section>${m("\u8FD0\u884C\u72B6\u6001",`<div class="panel-content" id="customer-simulation-metrics">${K()}</div>`)}</div>${m(e.selected+" \xB7 \u5E94\u53D8\u54CD\u5E94",`<div class="customer-simulation-chart" id="customer-simulation-chart">${G(q(),{threshold:!0,name:"\u5DE5\u51B5\u5E94\u53D8\u54CD\u5E94",color:"#55c5bd"})}</div>`)}`}function we(){if(!t.every(ie=>ie.quality==="valid"))return'<div class="customer-chart-empty">\u8F93\u5165\u6570\u636E\u5F02\u5E38</div>';let C=e.modelResult?.stressSamples||[],F=C.map(ie=>ie.value);return G(F,{name:"\u7B49\u6548\u5E94\u529B\u54CD\u5E94",unit:"MPa",color:"#e2bf69",range:[0,Math.max(200,...F)*1.12],sampleTimes:C.map(ie=>ie.time)})}function Le(){let C={fea:["\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C",i.finiteElementView],videos:["\u89C6\u9891\u8D44\u6599",i.videoLibrary],model:["\u6A21\u578B\u7BA1\u7406",i.deploymentView],"model-results":["\u4EE3\u7406\u6A21\u578B\u7ED3\u679C",i.resultsView],simulation:["\u52A8\u6001\u4EFF\u771F",he]}[f.view],F=f.view==="simulation"||f.view==="model-results";return v("",C[0],"",`${f.view==="fea"?r("\u52A8\u6001\u4EFF\u771F","customer-simulation",{compact:!0}):""}${r("\u8FD4\u56DE\u7ED3\u6784\u8BC4\u4F30","customer-assessment-back",{compact:!0})}`)+(F?De():"")+C[1]()+(f.view==="model-results"?m("\u5E94\u529B\u54CD\u5E94\u8D8B\u52BF",`<div class="customer-simulation-chart" id="customer-result-trace">${we()}</div>`):"")}function ye(){let C=i.visibleAlarms();return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u5E8F\u53F7</th><th>\u6D4B\u70B9</th><th>\u76D1\u6D4B\u65F6\u957F</th><th>\u5065\u5EB7\u72B6\u6001</th><th>\u62A5\u8B66\u65F6\u95F4</th><th>\u62A5\u8B66\u7C7B\u578B</th><th>\u62A5\u8B66\u5185\u5BB9</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${C.map((F,ie)=>`<tr><td>${ie+1}</td><td>${F.pointId}<span class="point-table-sub">${F.name}</span></td><td>${Math.max(0,Math.floor((e.time-F.time)/1e3))} s</td><td>${a(F.recovered?"\u5DF2\u6062\u590D":h[F.level],F.recovered?"neutral":F.level==="alarm"?"red":"amber")}</td><td class="mono">${d(F.time)}</td><td>\u5E94\u53D8${h[F.level]}</td><td>${F.value.toFixed(1)} \u03BC\u03B5 / \u9608\u503C ${F.threshold} \u03BC\u03B5<span class="point-table-sub">${F.acknowledged?"\u5DF2\u5904\u7406":"\u5F85\u5904\u7406"}</span></td><td><div class="table-action"><button data-action="alarm-detail" data-id="${F.id}">${F.acknowledged?"\u67E5\u770B":"\u5904\u7406"}</button><button data-action="customer-ignore-alarm" data-id="${F.id}" ${F.acknowledged?"disabled":""}>\u5FFD\u7565</button><button data-action="locate-alarm" data-id="${F.id}">\u5B9A\u4F4D</button></div></td></tr>`).join("")||'<tr><td colspan="8" class="customer-empty">\u6682\u65E0\u62A5\u8B66\u4FE1\u606F</td></tr>'}</tbody></table></div><div class="customer-table-count">\u5171 ${C.length} \u6761</div>`}function Be(){return v("","\u62A5\u8B66\u4FE1\u606F","")+`<div class="customer-content">${E()}<div class="customer-stat-and-frame">${m("\u62A5\u8B66\u4FE1\u606F\u7EDF\u8BA1",`<div id="customer-alarm-summary">${_()}</div>`)}${M(!0)}</div>${m("\u62A5\u8B66\u4FE1\u606F\u5217\u8868",`<div id="customer-alarm-table">${ye()}</div>`,`<select class="select" id="customer-alarm-filter" aria-label="\u62A5\u8B66\u7C7B\u578B\u7B5B\u9009">${[["all","\u5168\u90E8\u62A5\u8B66"],["active","\u6D3B\u52A8\u8D8A\u9650"],["alarm","\u62A5\u8B66"],["warning","\u9884\u8B66"]].map(([C,F])=>`<option value="${C}" ${e.alarmFilter===C?"selected":""}>${F}</option>`).join("")}</select><input class="input" id="alarm-search" placeholder="\u641C\u7D22\u6D4B\u70B9" aria-label="\u641C\u7D22\u544A\u8B66\u6D4B\u70B9" value="${o(e.alarmSearch)}">${r("\u67E5\u8BE2","customer-query-alarm",{compact:!0})}${r("\u5BFC\u51FA","export-alarms",{compact:!0})}`)}</div>`}function ft(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u7ED3\u6784</th><th>L / mm</th><th>W / mm</th><th>H / mm</th><th>S / mm</th></tr></thead><tbody><tr><td>A \u578B\u67B6</td>${["L","W","H","S"].map(C=>`<td>${f.dimensions[C]??"\u2014"}</td>`).join("")}</tr></tbody></table></div><div class="customer-panel-footer">${r("\u7F16\u8F91","customer-edit-structure",{compact:!0})}</div>`}function We(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u7528\u6237\u7F16\u53F7</th><th>\u7528\u6237\u540D</th><th>\u59D3\u540D</th><th>\u5355\u4F4D</th><th>\u8054\u7CFB\u65B9\u5F0F</th><th>\u89D2\u8272</th><th>\u72B6\u6001</th></tr></thead><tbody>${f.users.map(C=>`<tr><td>${o(C.id)}</td><td>${o(C.username)}</td><td>${o(C.name)}</td><td>${o(C.organization)}</td><td>${o(C.contact||"\u2014")}</td><td>${o(C.role)}</td><td>${a(C.status||"\u79BB\u7EBF","neutral")}</td></tr>`).join("")||'<tr><td colspan="7" class="customer-empty">\u6682\u65E0\u7528\u6237\u4FE1\u606F</td></tr>'}</tbody></table></div><div class="customer-panel-footer">${r("\u7F16\u8F91","customer-edit-user",{compact:!0})}</div>`}function qe(){return`<div class="customer-table-scroll customer-threshold-scroll"><table class="data-table"><thead><tr><th>\u76D1\u6D4B\u6307\u6807</th><th>\u9884\u8B66\u4E0A\u4E0B\u9650 / \u03BC\u03B5</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${n.map(C=>`<tr><td>${C.pointId} \u5E94\u53D8</td><td>${C.lowWarning} / ${C.highWarning}</td><td><button class="row-link" data-action="edit-rule" data-point-id="${C.pointId}">\u7F16\u8F91</button></td></tr>`).join("")}</tbody></table></div>`}function je(){let C=c();return`<div class="customer-parameter-stack"><div class="customer-parameter-part"><h3>\u76D1\u6D4B\u9608\u503C\u8BBE\u5B9A</h3>${qe()}</div><div class="customer-parameter-part"><h3>\u62A5\u8B66\u53C2\u6570\u914D\u7F6E</h3><table class="data-table"><thead><tr><th>\u62A5\u8B66\u7EA7\u522B</th><th>\u5173\u8054\u53C2\u6570</th><th>\u62A5\u8B66\u6761\u4EF6 / \u03BC\u03B5</th></tr></thead><tbody><tr><td>${a("\u9884\u8B66","amber")}</td><td>${e.selected} \u5E94\u53D8</td><td>\u2264 ${C.lowWarning} / \u2265 ${C.highWarning}</td></tr><tr><td>${a("\u62A5\u8B66","red")}</td><td>${e.selected} \u5E94\u53D8</td><td>\u2264 ${C.lowAlarm} / \u2265 ${C.highAlarm}</td></tr></tbody></table><div class="customer-panel-footer"><button class="btn compact" data-action="edit-rule" data-point-id="${e.selected}">\u7F16\u8F91</button></div></div></div>`}function re(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u8BB0\u5F55\u7F16\u53F7</th><th>\u7EF4\u62A4\u65E5\u671F</th><th>\u7EF4\u62A4\u5185\u5BB9</th><th>\u7EF4\u62A4\u4EBA\u5458</th><th>\u7EF4\u62A4\u7ED3\u679C</th></tr></thead><tbody>${f.maintenance.map(C=>`<tr><td>${o(C.id)}</td><td>${o(C.date)}</td><td>${o(C.content)}</td><td>${o(C.person)}</td><td>${a(C.result)}</td></tr>`).join("")||'<tr><td colspan="5" class="customer-empty">\u6682\u65E0\u7EF4\u62A4\u8BB0\u5F55</td></tr>'}</tbody></table></div><div class="customer-panel-footer">${r("\u65B0\u589E","customer-add-maintenance",{compact:!0})}</div>`}function ge(){return v("","\u53C2\u6570\u7BA1\u7406","")+`<div class="customer-content"><div class="customer-parameters-top">${m("\u7ED3\u6784\u53C2\u6570\u7BA1\u7406",ft(),b("structure"))}${M()}</div><div class="customer-parameters-grid">${m("\u7528\u6237\u4FE1\u606F\u7BA1\u7406",We(),b("users"))}${m("\u76D1\u6D4B\u53C2\u6570\u914D\u7F6E",je(),b("thresholds"))}${m("\u8BBE\u5907\u7EF4\u62A4\u8BB0\u5F55",re(),b("maintenance"))}</div></div><input type="file" id="customer-data-import" accept=".json,application/json" hidden>`}function ve(){let C=t.filter(F=>f.iotFilter==="all"||f.iotFilter==="online"&&F.quality==="valid"||f.iotFilter==="offline"&&F.quality!=="valid");return`<div class="customer-table-scroll customer-iot-scroll"><table class="data-table"><thead><tr><th>\u5E8F\u53F7</th><th>\u6D4B\u70B9</th><th>\u7C7B\u578B</th><th>\u5DE5\u4F5C\u72B6\u6001</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${C.map((F,ie)=>`<tr><td>${ie+1}</td><td>${F.id}<span class="point-table-sub">\u91C7\u96C6\u5361 ${F.card} / CH${F.channel}</span></td><td>\u5E94\u53D8\u4F20\u611F\u5668</td><td>${a(F.quality==="valid"?"\u5728\u7EBF":F.quality==="missing"?"\u79BB\u7EBF":"\u5F02\u5E38",F.quality==="valid"?"":F.quality==="missing"?"neutral":"amber")}</td><td><div class="table-action"><button data-action="customer-sensor-detail" data-id="${F.id}">\u67E5\u770B</button><button data-action="customer-sensor-setting" data-id="${F.id}">\u8BBE\u7F6E</button></div></td></tr>`).join("")||'<tr><td colspan="5" class="customer-empty">\u6682\u65E0\u5339\u914D\u7684\u4F20\u611F\u5668</td></tr>'}</tbody></table></div><div class="customer-table-count">\u5171 ${C.length} \u6761</div>`}function Ie(){return v("","IOT\u7BA1\u7406","",r("\u6570\u636E\u94FE\u8DEF","customer-topology",{compact:!0}))+`<div class="customer-content">${E()}<div class="customer-stat-and-frame">${m("\u4F20\u611F\u5668\u4FE1\u606F\u7EDF\u8BA1",`<div id="customer-iot-stat">${w()}</div>`)}${M(!0)}</div><div class="customer-iot-bottom">${m("\u4F20\u611F\u5668\u4FE1\u606F\u5217\u8868",`<div id="customer-sensor-table">${ve()}</div>`,`<select class="select" id="customer-iot-filter" aria-label="\u4F20\u611F\u5668\u72B6\u6001\u7B5B\u9009"><option value="all" ${f.iotFilter==="all"?"selected":""}>\u5168\u90E8\u4F20\u611F\u5668</option><option value="online" ${f.iotFilter==="online"?"selected":""}>\u5728\u7EBF</option><option value="offline" ${f.iotFilter==="offline"?"selected":""}>\u79BB\u7EBF / \u5F02\u5E38</option></select>${r("\u67E5\u8BE2","customer-query-iot",{compact:!0})}${r("\u5BFC\u51FA","export-points",{compact:!0})}`)}${m("\u4F20\u611F\u5668\u4F18\u5316\u5E03\u5C40\u5206\u6790",`<div class="customer-iot-fea"><img src="assets/image-de266d0ff056ba6e.png" alt="A \u578B\u67B6\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C"><div class="customer-fea-scale"><div></div><span>S, Mises</span></div></div><div class="customer-panel-footer">${r("\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C","customer-fea",{compact:!0})}</div>`)}</div></div>`}function Me(){let C=f.reports.at(-1);i.openModal("\u7ED3\u6784\u8BC4\u4F30\u62A5\u544A",C?`<div class="key-values"><div><span>\u62A5\u544A\u7F16\u53F7</span><strong>${C.id}</strong></div><div><span>\u751F\u6210\u65F6\u95F4</span><strong>${d(C.time)}</strong></div><div><span>\u7ED3\u6784</span><strong>A \u578B\u67B6</strong></div><div><span>\u6709\u6548\u6D4B\u70B9</span><strong>${C.valid} / 16</strong></div><div><span>\u6D3B\u52A8\u8D8A\u9650</span><strong>${C.active}</strong></div><div><span>\u6A21\u578B\u7248\u672C</span><strong>${o(C.version)}</strong></div></div>`:'<div class="customer-empty">\u6682\u65E0\u8BC4\u4F30\u62A5\u544A</div>',C?r("\u5BFC\u51FA\u62A5\u544A","customer-report-export",{primary:!0}):r("\u5173\u95ED","close-modal"))}function Ye(){i.openModal("\u7ED3\u6784\u53C2\u6570\u7BA1\u7406",`<div class="form-grid">${["L","W","H","S"].map(C=>`<label class="form-field">${C} / mm<input class="input" id="customer-dimension-${C}" type="number" min="0.001" step="any" value="${f.dimensions[C]??""}"></label>`).join("")}</div><p id="customer-form-error" role="alert" class="text-red"></p>`,r("\u4FDD\u5B58","customer-save-structure",{primary:!0}))}function Ue(){let C=f.users[0]||{};i.openModal("\u7528\u6237\u4FE1\u606F\u7BA1\u7406",`<div class="form-grid">${[["username","\u7528\u6237\u540D"],["name","\u59D3\u540D"],["organization","\u5355\u4F4D"],["contact","\u8054\u7CFB\u65B9\u5F0F"]].map(([F,ie])=>`<label class="form-field">${ie}<input class="input" id="customer-user-${F}" value="${o(C[F]||"")}"></label>`).join("")}<label class="form-field">\u89D2\u8272<select class="select" id="customer-user-role"><option>\u7BA1\u7406\u5458</option><option ${C.role==="\u76D1\u6D4B\u5458"?"selected":""}>\u76D1\u6D4B\u5458</option><option ${C.role==="\u67E5\u770B\u8005"?"selected":""}>\u67E5\u770B\u8005</option></select></label></div><p class="text-red" id="customer-form-error" role="alert"></p>`,r("\u4FDD\u5B58","customer-save-user",{primary:!0}))}function nt(){i.openModal("\u65B0\u589E\u8BBE\u5907\u7EF4\u62A4\u8BB0\u5F55",`<div class="form-grid"><label class="form-field">\u7EF4\u62A4\u65E5\u671F<input class="input" type="date" id="customer-maintenance-date" value="${e.time.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"})}"></label><label class="form-field">\u7EF4\u62A4\u4EBA\u5458<input class="input" id="customer-maintenance-person"></label><label class="form-field full">\u7EF4\u62A4\u5185\u5BB9<textarea class="input" id="customer-maintenance-content" rows="3"></textarea></label><label class="form-field">\u7EF4\u62A4\u7ED3\u679C<select class="select" id="customer-maintenance-result"><option>\u5DF2\u5B8C\u6210</option><option>\u8FDB\u884C\u4E2D</option></select></label></div><p class="text-red" id="customer-form-error" role="alert"></p>`,r("\u4FDD\u5B58","customer-save-maintenance",{primary:!0}))}let Ge=C=>document.getElementById(C);function ct(){let C=Ge("customer-from").value,F=Ge("customer-to").value;if(!C||!F||C>=F){i.toast("\u7ED3\u675F\u65F6\u95F4\u9700\u665A\u4E8E\u5F00\u59CB\u65F6\u95F4");return}if((new Date(F)-new Date(C))/1e3/parseInt(e.historyGranularity,10)>1e4){i.toast("\u67E5\u8BE2\u65F6\u6BB5\u8FC7\u957F\uFF0C\u8BF7\u7F29\u5C0F\u65F6\u95F4\u8303\u56F4");return}e.historyFrom=C,e.historyTo=F,e.historyPoints=[e.selected],e.historyQueried=!0,f.monitorMode="history",f.signalResult=null,f.trendResult=null,f.signalRunning=!1,f.trendRunning=!1,i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")}function I(C){if(l(e.selected).quality!=="valid"&&f.monitorMode==="live"){i.toast("\u5F53\u524D\u6D4B\u70B9\u65E0\u6709\u6548\u6570\u636E");return}if(C==="trend"&&f.trend==="proxy"){if(!e.modelReady){f.view="model",i.render(),i.toast("\u8BF7\u5148\u90E8\u7F72\u4EE3\u7406\u6A21\u578B");return}if(f.monitorMode==="history"){i.toast("\u8BF7\u5207\u6362\u5B9E\u65F6\u6570\u636E\u540E\u8FD0\u884C\u4EE3\u7406\u6A21\u578B");return}if(!i.runModel({quiet:!0,renderResult:!1})){i.toast("16 \u8DEF\u8F93\u5165\u4E0D\u5B8C\u6574");return}f.view="business",f.trendRunning=!0,f.trendResult=[e.modelResult.stress],f.resultRunning=!0,i.render(),i.toast("\u4EE3\u7406\u6A21\u578B\u5DF2\u542F\u52A8");return}let F=q();f[C+"Result"]=C==="signal"&&f.signal==="raw"?F:F.map((ie,T)=>{let x=F.slice(Math.max(0,T-4),T+1);return x.reduce((z,se)=>z+se,0)/x.length}),f[C+"Running"]=f.monitorMode==="live",i.render(),i.toast("\u6267\u884C\u5B8C\u6210")}function Te(){let C=(T,x)=>{let z=Ge(T);z&&(z.innerHTML=x)};Ae();let F=!e.paused&&e.simulationPlaying!==!1&&e.scenario!=="network";(F||!Ge("customer-operation")?.textContent.trim())&&C("customer-operation",L()),document.querySelectorAll(".operation-live-dot").forEach(T=>T.classList.toggle("stopped",!F)),document.querySelectorAll('[data-action="customer-playback"]').forEach(T=>{T.setAttribute("aria-pressed",String(e.simulationPlaying!==!1)),T.innerHTML=s(e.simulationPlaying===!1?"play":"pause")+`<span>${e.simulationPlaying===!1?"\u7EE7\u7EED\u56DE\u653E":"\u6682\u505C\u56DE\u653E"}</span>`}),e.page==="models"&&f.view==="model-results"&&(F&&f.resultRunning&&e.modelReady&&e.modelResult&&i.runModel({quiet:!0,renderResult:!1}),i.refreshModelResult?.(),C("customer-result-trace",we())),e.page==="models"&&f.view==="simulation"&&F&&(C("customer-simulation-metrics",K()),C("customer-simulation-chart",G(q(),{threshold:!0,name:"\u5DE5\u51B5\u5E94\u53D8\u54CD\u5E94",color:"#55c5bd"})));let ie=Ge("customer-point");if(ie&&(ie.value=e.selected),e.page==="home"&&(C("customer-sensors",m("\u4F20\u611F\u5668\u7EDF\u8BA1",w())),C("customer-alarms",m("\u62A5\u8B66\u7EDF\u8BA1",_()))),e.page==="overview"){C("customer-monitor-info",B()),C("customer-point-state",N()),C("customer-raw-chart",G(q(),{name:"\u539F\u59CB\u4FE1\u53F7"})),C("customer-indicator-chart",G(q(),{threshold:!0,name:"\u5E94\u53D8\u76D1\u6D4B\u6307\u6807"}));let T=Ge("customer-point");T&&(T.value=e.selected)}if(e.page==="models"&&f.view==="business"){C("customer-monitor-info",B(!0)),C("customer-signal-input",G(q(),{name:"\u4FE1\u53F7\u5904\u7406\u8F93\u5165"})),C("customer-trend-input",G(q(),{threshold:!0,name:"\u8D8B\u52BF\u5206\u6790\u8F93\u5165"})),f.trend==="proxy"&&(f.trendRunning&&f.monitorMode==="live"&&F&&i.runModel({quiet:!0,renderResult:!1}),C("customer-trend-output",le()));for(let T of["signal","trend"])if(f[T+"Running"]&&!(T==="trend"&&f.trend==="proxy")){let x=q();f[T+"Result"]=T==="signal"&&f.signal==="raw"?x:x.map((z,se)=>{let ee=x.slice(Math.max(0,se-4),se+1);return ee.reduce((de,ue)=>de+ue,0)/ee.length}),C("customer-"+T+"-output",G(f[T+"Result"],{color:T==="signal"?"#6bd2c8":"#e2bf69",name:T==="signal"?"\u4FE1\u53F7\u5904\u7406\u7ED3\u679C":"\u5E94\u53D8\u8D8B\u52BF\u7ED3\u679C"}))}}e.page==="connections"&&(C("customer-iot-stat",w()),C("customer-sensor-table",ve())),e.page==="alarms"&&(C("customer-alarm-summary",_()),Ge("modal")?.hidden&&C("customer-alarm-table",ye()))}function Ae(){let C=Ge("customer-clock"),F=new Date;C&&(C.textContent=F.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"}).replaceAll("-",".")+"  "+d(F))}let Ce={"customer-playback":()=>{e.simulationPlaying=e.simulationPlaying===!1,f.resultRunning=e.simulationPlaying,Te()},"customer-simulation":()=>{f.view="simulation",f.monitorMode="live",e.structureView="structure",i.navigate("models")},"customer-scene":()=>{e.structureView="structure",i.showScene()},"customer-iot":()=>i.navigate("connections"),"customer-history":()=>i.navigate("history"),"customer-query":ct,"customer-live":()=>{f.monitorMode="live",f.signalResult=null,f.trendResult=null,i.render()},"customer-export-monitor":()=>{e.historyPoints=[e.selected],f.monitorMode==="history"?i.exportHistory():i.download("MindEdge-\u5B9E\u65F6\u4FE1\u53F7.csv",i.csv([["\u6D4B\u70B9","\u6837\u672C","\u5E94\u53D8/\u03BC\u03B5"],...q().map((C,F)=>[e.selected,F,C.toFixed(2)])]),"text/csv;charset=utf-8")},"customer-process":()=>{f.view="business",i.navigate("models")},"customer-analysis":()=>{f.view="business",i.navigate("models")},"customer-fea":()=>{f.view="fea",e.resultMode="offline",i.navigate("models")},"customer-assessment-back":()=>{f.view="business",i.render()},"customer-model-results":()=>{f.view="model-results",f.monitorMode="live",e.resultMode="proxy",e.structureView="structure",f.resultRunning=!0,i.render()},"customer-execute-signal":()=>I("signal"),"customer-execute-trend":()=>I("trend"),"customer-stop-signal":()=>{f.signalRunning=!1,i.render()},"customer-stop-trend":()=>{f.trendRunning=!1,i.render()},"customer-query-alarm":()=>{i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")},"customer-query-iot":()=>{i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")},"customer-ignore-alarm":C=>{i.alarmModal(C.dataset.id);let F=Ge("alarm-remark");F&&!F.readOnly&&(F.value="\u7ECF\u6838\u5BF9\u5FFD\u7565\u6B64\u4E8B\u4EF6")},"customer-sensor-detail":C=>{e.selected=C.dataset.id,i.pointModal()},"customer-sensor-setting":C=>{e.selected=C.dataset.id;let F=l(e.selected);i.openModal(F.id+" \xB7 \u4F20\u611F\u5668\u8BBE\u7F6E",`<div class="key-values"><div><span>\u91C7\u96C6\u8BBE\u5907</span><strong>DH5908N \xB7 ${F.card}</strong></div><div><span>\u901A\u9053</span><strong>CH${F.channel}</strong></div><div><span>\u7C7B\u578B</span><strong>\u5E94\u53D8\u4F20\u611F\u5668</strong></div><div><span>\u5355\u4F4D</span><strong>\u03BC\u03B5</strong></div></div><label class="form-field" style="margin-top:16px">\u5B89\u88C5\u90E8\u4F4D<input class="input" id="customer-sensor-name" value="${o(F.name)}"></label><p id="customer-form-error" role="alert" class="text-red"></p>`,r("\u4FDD\u5B58","customer-save-sensor",{primary:!0}))},"customer-save-sensor":()=>{let C=Ge("customer-sensor-name").value.trim();if(!C){Ge("customer-form-error").textContent="\u8BF7\u586B\u5199\u5B89\u88C5\u90E8\u4F4D";return}l(e.selected).name=C,i.closeModal(),i.render()},"customer-topology":()=>i.openModal("\u6570\u636E\u94FE\u8DEF",i.topology(),r("\u5173\u95ED","close-modal"),!0),"customer-report-generate":()=>{f.reports.push({id:"RPT-"+String(f.reports.length+1).padStart(4,"0"),time:new Date(e.time),valid:R().online,active:e.alarms.filter(C=>!C.recovered).length,version:e.deployedVersion||"\u672A\u90E8\u7F72"}),Me()},"customer-report-query":Me,"customer-report-export":()=>{let C=f.reports.at(-1);C&&i.download(C.id+".json",JSON.stringify({...C,dataSource:"\u6D4F\u89C8\u5668\u6A21\u62DF\u76D1\u6D4B\u6570\u636E\uFF0C\u975E\u6B63\u5F0F\u7ED3\u6784\u8BC4\u4F30\u7ED3\u8BBA",points:t},null,2),"application/json")},"customer-edit-structure":Ye,"customer-save-structure":()=>{let C=Object.fromEntries(["L","W","H","S"].map(F=>[F,Ge("customer-dimension-"+F).value.trim()]));if(Object.values(C).some(F=>F&&(!Number.isFinite(Number(F))||Number(F)<=0))){Ge("customer-form-error").textContent="\u7ED3\u6784\u5C3A\u5BF8\u5E94\u4E3A\u6B63\u6570\uFF0C\u672A\u63D0\u4F9B\u7684\u53C2\u6570\u53EF\u7559\u7A7A";return}Object.keys(C).forEach(F=>f.dimensions[F]=C[F]?Number(C[F]):null),i.closeModal(),i.render()},"customer-edit-user":Ue,"customer-save-user":()=>{let C=Object.fromEntries(["username","name","organization","contact","role"].map(F=>[F,Ge("customer-user-"+F).value.trim()]));if(!C.username||!C.name){Ge("customer-form-error").textContent="\u8BF7\u586B\u5199\u7528\u6237\u540D\u548C\u59D3\u540D";return}f.users=[{...C,id:f.users[0]?.id||"USR-001",status:"\u79BB\u7EBF"},...f.users.slice(1)],i.closeModal(),i.render()},"customer-add-maintenance":nt,"customer-save-maintenance":()=>{let C=Object.fromEntries(["date","person","content","result"].map(F=>[F,Ge("customer-maintenance-"+F).value.trim()]));if(!C.date||!C.person||!C.content){Ge("customer-form-error").textContent="\u8BF7\u586B\u5199\u65E5\u671F\u3001\u7EF4\u62A4\u4EBA\u5458\u548C\u7EF4\u62A4\u5185\u5BB9";return}f.maintenance.unshift({...C,id:"REC-"+String(f.maintenance.length+1).padStart(4,"0")}),i.closeModal(),i.render()},"customer-import":C=>{f.importTarget=C.dataset.target,Ge("customer-data-import").click()},"customer-export":C=>{let F=C.dataset.target,ie=F==="structure"?f.dimensions:F==="thresholds"?n:f[F];i.download("MindEdge-"+{structure:"\u7ED3\u6784\u53C2\u6570",users:"\u7528\u6237\u4FE1\u606F",thresholds:"\u76D1\u6D4B\u53C2\u6570",maintenance:"\u7EF4\u62A4\u8BB0\u5F55"}[F]+".json",JSON.stringify(ie,null,2),"application/json")}};async function ae(C){if(C.id==="customer-point")return e.selected=C.value,f.signalResult=null,f.trendResult=null,f.signalRunning=!1,f.trendRunning=!1,i.render(),!0;if(C.id==="customer-from"||C.id==="customer-to")return e[C.id==="customer-from"?"historyFrom":"historyTo"]=C.value,!0;if(C.id==="customer-signal"||C.id==="customer-trend"){let F=C.id.slice(9);return f[F]=C.value,f[F+"Running"]=!1,f[F+"Result"]=null,i.render(),!0}if(C.id==="customer-alarm-filter")return e.alarmFilter=C.value,i.render(),!0;if(C.id==="customer-iot-filter")return f.iotFilter=C.value,i.render(),!0;if(C.id==="customer-data-import"&&C.files?.[0]){try{let F=C.files[0];if(F.size>1024*1024)throw new Error("\u8BF7\u9009\u62E9 1 MB \u4EE5\u5185\u7684\u6570\u636E\u6587\u4EF6");let ie=JSON.parse(await F.text());if(f.importTarget==="structure"){if(!ie||Array.isArray(ie)||["L","W","H","S"].some(T=>ie[T]!=null&&(typeof ie[T]!="number"||!Number.isFinite(ie[T])||ie[T]<=0)))throw new Error("\u7ED3\u6784\u53C2\u6570\u683C\u5F0F\u65E0\u6548");f.dimensions=Object.fromEntries(["L","W","H","S"].map(T=>[T,ie[T]??null]))}else if(f.importTarget==="thresholds"){let T=["lowAlarm","lowWarning","highWarning","highAlarm"];if(!Array.isArray(ie)||ie.length!==16||new Set(ie.map(x=>x.pointId)).size!==16||ie.some(x=>!l(x.pointId)||T.some(z=>typeof x[z]!="number"||!Number.isFinite(x[z]))||!T.every((z,se)=>se===0||x[T[se-1]]<x[z])))throw new Error("\u8BF7\u5BFC\u5165\u5B8C\u6574\u7684 16 \u70B9\u9608\u503C\u53C2\u6570");ie.forEach(x=>{let z=c(x.pointId);T.forEach(se=>z[se]=x[se]),z.version++}),i.updatePoints()}else{let T=f.importTarget==="users"?["id","username","name","organization","role","status"]:["id","date","content","person","result"];if(!Array.isArray(ie)||ie.length>1e3||ie.some(x=>!x||T.some(z=>typeof x[z]!="string")))throw new Error("\u6570\u636E\u6587\u4EF6\u5B57\u6BB5\u4E0D\u5B8C\u6574");f[f.importTarget]=ie.map(x=>({...Object.fromEntries(T.map(z=>[z,x[z]])),...f.importTarget==="users"?{contact:typeof x.contact=="string"?x.contact:""}:{}}))}i.render(),i.toast("\u5BFC\u5165\u5B8C\u6210")}catch(F){i.toast(F instanceof SyntaxError?"\u8BF7\u9009\u62E9\u6709\u6548\u7684 JSON \u6570\u636E\u6587\u4EF6":F.message)}finally{C.value=""}return!0}return!1}return{home:U,monitor:H,assessment:te,alarms:Be,params:ge,iot:Ie,actions:Ce,change:ae,refresh:Te,updateClock:Ae,setView:C=>{f.view=C,C==="model-results"&&(f.monitorMode="live")},getView:()=>f.view,resetAnalysis:()=>{f.signalResult=null,f.trendResult=null,f.signalRunning=!1,f.trendRunning=!1}}}var Th=new WeakMap,Fy=new URL("../libs/draco/draco_decoder.wasm",document.baseURI).toString(),By=new URL("../libs/draco/draco_wasm_wrapper.js",document.baseURI).toString(),ky=new URL("../libs/draco/draco_decoder.js",document.baseURI).toString(),tE={js:new URL("../libs/draco/gltf/draco_wasm_wrapper.js",document.baseURI).toString(),wasm:new URL("../libs/draco/gltf/draco_decoder.wasm",document.baseURI).toString()},Jl=class extends Un{constructor(e){super(e),this.decoderPaths={js:By,wasm:Fy,dep_js:ky},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Cn.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Cn.resolveURL("draco_decoder.wasm",e),t.dep_js=Cn.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new Ai(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Mt,n).catch(n)}decodeDracoFile(e,t,n,s,r=Qt,a=()=>{}){let o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Th.has(e)){let l=Th.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(s=l,new Promise((c,u)=>{s._callbacks[r]={resolve:c,reject:u},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Th.set(e,{key:n,promise:o}),o}_createGeometry(e){let t=new It;e.index&&t.setIndex(new Nt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:s,array:r,itemSize:a,stride:o,vertexColorSpace:l}=e.attributes[n],c;if(a===o)c=new Nt(r,a);else{let u=new ki(r,o);c=new zi(u,a,0)}s==="color"&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(s,c)}return t}_assignVertexColorSpace(e,t){if(t!==Mt)return;let n=new Ve;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),st.colorSpaceToWorking(n,Mt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Ai(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(s=>{let r=s[0];e||(this.decoderConfig.wasmBinary=s[1]);let a=zy.toString(),o=["/* draco decoder */",r,"","/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let a=r.data;switch(a.type){case"decode":s._callbacks[a.id].resolve(a);break;case"error":s._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function zy(){let i,e;onmessage=function(a){let o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":let l=o.buffer,c=o.taskConfig;e.then(u=>{let h=u.draco,d=new h.Decoder;try{let p=t(h,d,new Int8Array(l),c),g=p.attributes.map(v=>v.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{h.destroy(d)}});break}};function t(a,o,l,c){let u=c.attributeIDs,h=c.attributeTypes,d,p,g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());let v={index:null,attributes:[]};for(let f in u){let m=self[h[f]],b,E;if(c.useUniqueIDs)E=u[f],b=o.GetAttributeByUniqueId(d,E);else{if(E=o.GetAttributeId(d,a[u[f]]),E===-1)continue;b=o.GetAttribute(d,E)}let M=s(a,o,d,f,m,b);f==="color"&&(M.vertexColorSpace=c.vertexColorSpace),v.attributes.push(M)}return g===a.TRIANGULAR_MESH&&(v.index=n(a,o,d)),a.destroy(d),v}function n(a,o,l){let u=l.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(l,h,d);let p=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:p,itemSize:1}}function s(a,o,l,c,u,h){let d=l.num_points(),p=h.num_components(),g=r(a,u),v=p*u.BYTES_PER_ELEMENT,f=Math.ceil(v/4)*4,m=f/u.BYTES_PER_ELEMENT,b=d*v,E=d*f,M=a._malloc(b);o.GetAttributeDataArrayForAllPoints(l,h,g,b,M);let R=new u(a.HEAPF32.buffer,M,b/u.BYTES_PER_ELEMENT),w;if(v===f)w=R.slice();else{w=new u(E/u.BYTES_PER_ELEMENT);let _=0;for(let y=0;y<d;y++){for(let L=0;L<p;L++)w[_+L]=R[y*p+L];_+=m}}return a._free(M),{name:c,count:d,itemSize:p,array:w,stride:m}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var Ql=class extends _i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new An;e.deleteAttribute("uv");let t=new nn({side:sn}),n=new nn,s=new xs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new lt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new fs(e,n,6),o=new Ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new lt(e,Mr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new lt(e,Mr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new lt(e,Mr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new lt(e,Mr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new lt(e,Mr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new lt(e,Mr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Mr(i){return new ua({color:0,emissive:16777215,emissiveIntensity:i})}var br=i=>(i=Bt.clamp(i,0,1),i*i*(3-2*i)),Rs=Bt.lerp,Hy=[["\u8FDE\u63A5\u59342","\u8FDE\u63A5\u59342004"],["\u8FDE\u63A5\u59342003","\u8FDE\u63A5\u5934u2006"],["\u8FDE\u63A5\u59342001","\u8FDE\u63A5\u59342005"],["\u8FDE\u63A5\u59342002","\u8FDE\u63A5\u59342007"],...[1,2,3,4].map(i=>Array.from({length:7},(e,t)=>`\u94A2\u4E1D${i}${t+1}`)),["\u5E95\u6597\u94A2\u4E1D11","\u5E95\u6597\u94A2\u4E1D12"],["\u5E95\u6597\u94A2\u4E1D21","\u5E95\u6597\u94A2\u4E1D22"]];function Tp(i,e,t){let n={upper:i.getObjectByName("\u4E0A\u8F66"),boom:i.getObjectByName("\u8D77\u91CD\u81C2\u6574\u4F53"),stick:i.getObjectByName("\u6296\u6746\u81C2"),crowd:i.getObjectByName("\u5347\u51FA\u81C2"),wheel:i.getObjectByName("\u5929\u8F6E")},s=new Map(Object.values(n).filter(Boolean).map(w=>[w,{position:w.position.clone(),quaternion:w.quaternion.clone()}])),r=new xa(i),a=[];for(let w of e){if(w.name==="\u697C\u68AFAction"||w.name==="WK35_native_pivots")continue;let _=r.clipAction(w);_.setLoop(zl,1),_.clampWhenFinished=!0,_.play(),_.paused=!0,a.push({action:_,duration:w.duration})}let o=[],l=new Wn({color:1579810});for(let w of Hy){let _=w.map(B=>i.getObjectByName(B));if(_.some(B=>!B))continue;let y=new It;y.setAttribute("position",new Nt(new Float32Array(96),3));let L=new yi(y,l);L.frustumCulled=!1,t.add(L);let P=_.map(()=>new D),U=new ir(P,!1,"centripetal",0);o.push({anchors:_,geometry:y,line:L,points:P,curve:U})}let c=new Ot,u=new D(1,0,0),h=new D(0,1,0),d=new D(0,0,1),p=new D,g=i.getObjectByName("tiliang"),v=i.getObjectByName("tiliang2"),f=i.getObjectByName("tiliangdian"),m=new D,b=new D,E=new D;function M(w,_,y){w&&w.quaternion.copy(s.get(w).quaternion).multiply(c.setFromAxisAngle(_,y))}function R(w){let _=(w%60+60)%60,y=0,L=0,P=0,U=0;if(_<16){let B=br(_/16);y=Rs(0,.04,B),L=Rs(0,-.6,B)}else if(_<27)y=Rs(.04,.19,br((_-16)/11)),L=-.6;else if(_<39)y=.19,L=-.6,P=Rs(0,-.42,br((_-27)/12));else if(_<45)y=.19,L=-.6,P=-.42,U=br((_-39)/3.2);else{let B=br((_-45)/15);y=Rs(.19,0,B),L=Rs(-.6,0,B),P=Rs(-.42,0,B),U=1-br((_-45)/5)}for(let{action:B,duration:V}of a)B.time=U*V;r.update(0),M(n.upper,h,P),M(n.boom,u,y*.045),M(n.stick,u,y),n.crowd&&n.crowd.position.copy(s.get(n.crowd).position).addScaledVector(d,L),M(n.wheel,u,Math.sin(_/60*Math.PI*2)*.85),i.updateMatrixWorld(!0),g&&v&&f&&(g.getWorldPosition(m),v.getWorldPosition(b),f.getWorldPosition(E),b.sub(m),E.sub(m),b.lengthSq()&&E.lengthSq()&&(g.rotation.x=-Math.acos(Bt.clamp(b.dot(E)/(b.length()*E.length()),-1,1))),i.updateMatrixWorld(!0));for(let B of o){B.anchors.forEach((N,W)=>N.getWorldPosition(B.points[W]));let V=B.geometry.getAttribute("position");for(let N=0;N<32;N++)B.curve.getPoint(N/31,p),V.setXYZ(N,p.x,p.y,p.z);V.needsUpdate=!0}return{time:_,lift:y,crowd:L,yaw:P,door:U,articulated:!!n.stick&&!!n.upper}}return{update:R,dispose(){r.stopAllAction(),r.uncacheRoot(i);for(let w of o)t.remove(w.line),w.geometry.dispose();l.dispose()}}}var ec,tc,nc,ic,wh=0,Ah=new Set,wp=new WeakSet;function Vy(){return nc||(ic=new Jl,ic.setDecoderPath("models/draco/"),ic.setWorkerLimit(2),nc=new yr().setDRACOLoader(ic)),ec||(ec=nc.loadAsync("models/wk35-display.glb",i=>{wh=i.total?Math.min(90,Math.round(i.loaded/i.total*90)):15;for(let e of Ah)e(wh)}).catch(i=>{throw ec=null,i})),tc||(tc=nc.loadAsync("models/mine-ground.glb").catch(i=>{throw tc=null,i})),[ec,tc]}function Rh(i,{home:e=!1,getOperation:t=()=>null}={}){let n=!0,s=!0,r,a,o,l,c,u=!0,h=!0,d=0,p=18,g=performance.now(),v=i.querySelector(".equipment-fallback"),f=i.querySelector("[data-equipment-status]"),m=H=>{n&&f&&(f.hidden=!1,f.textContent="\u6A21\u578B\u52A0\u8F7D "+H+"%")};i.dataset.modelState="loading",m(wh),Ah.add(m);let b=new _i,E=new Ut(36,1,.1,1200),M=new gr({alpha:!0,antialias:!0,powerPreference:"high-performance"});M.setPixelRatio(Math.min(devicePixelRatio,e?1.5:1.75)),M.setClearColor(0,0),M.outputColorSpace=Mt,M.toneMapping=Sa,M.toneMappingExposure=1.2,M.domElement.setAttribute("aria-label","WK35 \u7535\u94F2\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u548C\u6EDA\u8F6E\u7F29\u653E"),M.domElement.setAttribute("role","img"),i.prepend(M.domElement);let R=new Ql,w=new mr(M);o=w.fromScene(R,.04),b.environment=o.texture,R.dispose(),w.dispose();let _=new vr(E,M.domElement);_.enableDamping=!0,_.dampingFactor=.08,_.maxPolarAngle=Math.PI*.495,_.enablePan=!0,_.screenSpacePanning=!0,_.addEventListener("change",()=>{s=!0}),b.add(new pa(13360105,3290692,2.2));for(let[H,J,te,le,De]of[[13231871,2.1,25,45,25],[14871807,1.5,-25,20,-30]]){let K=new ei(H,J);K.position.set(te,le,De),b.add(K)}let y=new D,L=new D,P=35;function U(){let H=i.clientWidth||800,J=i.clientHeight||500;E.aspect=H/J,E.updateProjectionMatrix(),M.setSize(H,J,!1),a&&N(),s=!0}let B=new ResizeObserver(U);B.observe(i),U();let V=new IntersectionObserver(H=>{h=H[0]?.isIntersecting!==!1,h&&(s=!0)});V.observe(i);function N(){let H=new en().setFromObject(a),J=H.getCenter(new D),te=H.getSize(new D);P=te.length(),L.copy(J),L.y=H.min.y+te.y*.47;let le=new D(1.1,.4,.9).normalize();E.position.copy(L).add(le),E.lookAt(L),E.updateMatrixWorld();let De=new D().setFromMatrixColumn(E.matrixWorld,0),K=new D().setFromMatrixColumn(E.matrixWorld,1),he=1/0,we=-1/0,Le=1/0,ye=-1/0;for(let We of[H.min.x,H.max.x])for(let qe of[H.min.y,H.max.y])for(let je of[H.min.z,H.max.z]){let re=new D(We,qe,je).sub(L),ge=re.dot(De),ve=re.dot(K);he=Math.min(he,ge),we=Math.max(we,ge),Le=Math.min(Le,ve),ye=Math.max(ye,ve)}let Be=Math.tan(Bt.degToRad(E.fov/2)),ft=Math.max((ye-Le)/(2*Be),(we-he)/(2*Be*E.aspect))*(e?1.02:1.06);y.copy(L).addScaledVector(le,ft),E.position.copy(y),_.target.copy(L),_.minDistance=P*.25,_.maxDistance=P*4,E.clearViewOffset(),e&&i.clientWidth>740&&E.setViewOffset(i.clientWidth,i.clientHeight,i.clientWidth*.07,0,i.clientWidth,i.clientHeight),_.update(),s=!0}let W=new Set;function q(H){let J=H.clone(!0),te=new Map;return J.traverse(le=>{if(!le.isMesh)return;wp.has(le.geometry)||(le.geometry.computeVertexNormals(),wp.add(le.geometry));let De=K=>{if(!te.has(K)){let he=K.clone();he.roughness=Math.max(.6,he.roughness||0),he.envMapIntensity=.45,te.set(K,he),W.add(he)}return te.get(K)};le.material=Array.isArray(le.material)?le.material.map(De):De(le.material),le.castShadow=!1,le.receiveShadow=!1}),J}let G=Promise.all(Vy()).then(([H,J])=>{if(n){if(a=q(H.scene),a.rotation.y=Math.PI,a.name="WK35 \xB7 \u7528\u6237\u6307\u5B9A\u6A21\u578B",b.add(a),e){let te=q(J.scene);b.add(te)}N(),l=Tp(a,H.animations,b),i.dataset.modelState="ready",i.dataset.modelSource="wk35-metav",v&&(v.hidden=!0),f&&(f.hidden=!0,f.textContent=""),s=!0}}).catch(H=>{n&&(i.dataset.modelState="error",f&&(f.hidden=!1,f.textContent="\u4E09\u7EF4\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5"),console.warn("Equipment model unavailable",H.message))});function oe(H=performance.now()){if(n&&(r=requestAnimationFrame(oe),!(!h||document.visibilityState==="hidden"||H-d<1e3/24))){if(d=H,l){let J=t(),te=u&&(J?J.moving!==!1&&!J.paused:!0),le=J?.elapsed??18+(H-g)/1e3;J&&te&&(le+=Math.min(1,Math.max(0,(H-(J.updatedAt??H))/1e3))),(te||!c)&&(p=le,c=l.update(le),s=!0),i.dataset.motionState=te?"playing":"paused",i.dataset.motionPhase=J?.phase||"replay",i.dataset.motionTime=p.toFixed(2),i.dataset.motionArticulated=String(!!c?.articulated)}(_.update()||s)&&(M.render(b,E),s=!1)}}return oe(),{ready:G,update(){s=!0},setPlayback(H){u=!!H,s=!0},getMotionState(){return c?{...c,playing:i.dataset.motionState==="playing"}:null},reset(){a&&(E.position.copy(y),_.target.copy(L),_.update(),s=!0)},viewFront(){a&&(E.position.copy(L).add(new D(P*.85,P*.2,0)),_.target.copy(L),_.update(),s=!0)},zoom(H){E.position.sub(_.target).multiplyScalar(H).add(_.target),_.update(),s=!0},wireframe(){W.forEach(H=>H.wireframe=!H.wireframe),s=!0},dispose(){n=!1,Ah.delete(m),cancelAnimationFrame(r),B.disconnect(),V.disconnect(),l?.dispose(),_.dispose(),W.forEach(H=>H.dispose()),o?.dispose(),M.dispose(),M.forceContextLoss(),M.domElement.remove()}}}var Gy=[["dig","\u6316\u6398",0,16],["lift","\u63D0\u5347",16,27],["slew","\u56DE\u8F6C",27,39],["unload","\u5378\u8F7D",39,45],["return","\u8FD4\u56DE",45,60]],Fa=[[0,.34],[4,.45],[10,.82],[16,1],[22,.93],[28,.83],[36,.82],[39,.84],[44,.22],[50,.25],[60,.34]],Wy=[138,165,291,142,186,213,348,193,166,202,175,302,156,187,164,179],$y=i=>i*i*(3-2*i);function sc(i){let e=(i%60+60)%60,[t,n,s,r]=Gy.find(u=>e>=u[2]&&e<u[3]),a=Fa.findIndex((u,h)=>h<Fa.length-1&&e>=u[0]&&e<Fa[h+1][0]),o=Fa[a],l=Fa[a+1],c=$y((e-o[0])/(l[0]-o[0]));return{phase:t,phaseLabel:n,progress:(e-s)/(r-s),load:o[1]+(l[1]-o[1])*c,cycle:Math.floor(i/60)+1,elapsed:i,cycleSeconds:60,moving:!0}}function Ba(i,e,t="typical"){let{load:n}=sc(e),s=t==="normal"?125+i*4:Wy[i],r=Math.sin(e*.65)*2.7+Math.sin(e*1.71)*1.6,a=Math.sin(e*2.83+i*.71)*(1.5+n*2.2),o=Math.sin(e*.19+i*.62)*3.2,l=s*(.52+.48*n)+r+a+o;return Math.round(l*10)/10}var Ap={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',trend:'<path d="M3 3v18h18M6 15l4-5 4 3 6-8"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',box:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5ZM3 8l9 5 9-5M12 13v9M7 5.8l10 5.5"/>',network:'<rect x="8" y="2" width="8" height="6" rx="1"/><rect x="2" y="16" width="7" height="6" rx="1"/><rect x="15" y="16" width="7" height="6" rx="1"/><path d="M12 8v4M5.5 16v-4h13v4"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5"/>',upload:'<path d="M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5"/>',arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',external:'<path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1.5-1.5 2.5M12 17h.01"/>',book:'<path d="M12 5c-3-2-7-2-10-1v16c4-1 7-1 10 1m0-16c3-2 7-2 10-1v16c-4-1-7-1-10 1V5Z"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',reset:'<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>',focus:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><circle cx="12" cy="12" r="3"/>',scan:'<path d="M5 3H3v4m16-4h2v4M3 17v4h2m16-4v4h-2M3 12h18M8 8v8m4-8v8m4-8v8"/>',check:'<path d="m4 12 5 5L20 6"/>',checkcircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14M8 8a5 5 0 0 0 0 8m8-8a5 5 0 0 1 0 8"/>',cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/>',sliders:'<path d="M4 21v-7m0-4V3M12 21v-3m0-4V3M20 21v-7m0-4V3M1 10h6m2 8h6m2-8h6"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',pause:'<path d="M8 4v16M16 4v16"/>',file:'<path d="M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 13h8m-8 4h8"/>',layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',chevron:'<path d="m9 5 7 7-7 7"/>',expand:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5m13-5v5h-5"/>',shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>'};function St(i,e=""){return`<svg class="${e}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Ap[i]||Ap.box}</svg>`}function Yn(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Qe=i=>document.querySelector(i),Ih=[["home","dashboard","\u9996\u9875"],["overview","trend","\u7ED3\u6784\u76D1\u6D4B"],["models","box","\u7ED3\u6784\u8BC4\u4F30"],["alarms","bell","\u62A5\u8B66\u4FE1\u606F"],["params","sliders","\u53C2\u6570\u7BA1\u7406"],["connections","network","IOT\u7BA1\u7406"]],Cs={home:"/home",overview:"/monitor",history:"/monitor/history",models:"/assessment",alarms:"/alarm",params:"/params",connections:"/iot"};function Lp(){let i=location.hash.slice(1);return Object.keys(Cs).find(e=>Cs[e]===i)||(Object.hasOwn(Cs,i)?i:"home")}var Xy=["\u5DE6\u652F\u817F\u4E0B\u6BB5","\u5DE6\u652F\u817F\u4E2D\u6BB5","\u5DE6\u652F\u817F\u710A\u7F1D","\u5DE6\u652F\u817F\u4E0A\u6BB5","\u5DE6\u4E0A\u8FDE\u63A5\u6BB5","\u5DE6\u4FA7\u6A2A\u6881\u7AEF","\u6A2A\u6881\u8DE8\u4E2D","\u53F3\u4FA7\u6A2A\u6881\u7AEF","\u53F3\u4E0A\u8FDE\u63A5\u6BB5","\u53F3\u652F\u817F\u4E0A\u6BB5","\u53F3\u652F\u817F\u710A\u7F1D","\u53F3\u652F\u817F\u4E2D\u6BB5","\u53F3\u652F\u817F\u4E0B\u6BB5","\u540E\u4FA7\u5DE6\u8FDE\u63A5","\u540E\u4FA7\u6A2A\u6881","\u540E\u4FA7\u53F3\u8FDE\u63A5"],Rp=[138,165,291,142,186,213,348,193,166,202,175,302,156,187,164,179],mt=Array.from({length:16},(i,e)=>({id:`T${String(e+1).padStart(2,"0")}`,name:Xy[e],card:e<8?"A":"B",channel:e%8+1,base:Rp[e],value:Rp[e],status:"normal",quality:"valid"})),Nh=mt.map(i=>({pointId:i.id,lowAlarm:-330,lowWarning:-280,highWarning:280,highAlarm:330,enabled:!0,version:1})),Ph=[{id:"FE-REF-01",name:"A \u578B\u67B6\u6574\u4F53\u5E94\u529B\u4E91\u56FE 01",quantity:"S, Mises \xB7 \u5E73\u5747 75%",image:"assets/image-de266d0ff056ba6e.png",note:"\u6574\u4F53\u6784\u4EF6\u4E0E\u6A2A\u6881\u8FDE\u63A5\u533A\u53C2\u8003"},{id:"FE-REF-02",name:"A \u578B\u67B6\u6574\u4F53\u5E94\u529B\u4E91\u56FE 02",quantity:"S, Mises \xB7 \u5E73\u5747 75%",image:"assets/image-ffcf9a9f6c37881b.png",note:"\u9876\u7AEF\u8FDE\u63A5\u5B54\u4E0E\u6574\u4F53\u5206\u5E03\u53C2\u8003"},{id:"FE-REF-03",name:"\u8FDE\u63A5\u5B54\u5C40\u90E8\u4E91\u56FE",quantity:"S, Mises \xB7 \u539F\u56FE\u6807\u6CE8",image:"assets/image-64f13216b068c6fc.png",note:"\u539F\u56FE\u5206\u8FA8\u7387\u8F83\u5C0F\uFF0C\u4FDD\u7559\u539F\u59CB\u5185\u5BB9"},{id:"FE-REF-04",name:"\u6784\u4EF6\u5E94\u529B\u5206\u5E03\u53C2\u8003",quantity:"\u672A\u5F55\u5165",image:"assets/image-c2c168925dc5a50b.png",note:"\u7AEF\u90E8\u8FDE\u63A5\u533A\u4E0E\u957F\u6784\u4EF6\u5206\u5E03\u53C2\u8003"},{id:"FE-REF-05",name:"\u5C40\u90E8\u6784\u4EF6\u4E91\u56FE",quantity:"\u672A\u5F55\u5165",image:"assets/image-c6d0b0dce50a0d64.png",note:"\u539F\u56FE\u5206\u8FA8\u7387\u8F83\u5C0F\uFF0C\u672A\u9644\u5E26\u8272\u6807\u4E0E\u53C2\u6570"}],qy=["assets/image-f8ab7b7d737511da.jpg","assets/image-3c755545bad80396.jpg","assets/image-f7f4dc075d875861.jpg","assets/image-bb6dae2c8beb8a2c.jpg","assets/image-42916f987c715a78.jpg","assets/image-cba9c0a0cf8af265.jpg","assets/image-5448784d861eab4f.jpg","assets/image-c2ca1df88a96c0bc.jpg","assets/image-2fd7d0c689d90139.jpg","assets/image-9a2041405e41d173.jpg","assets/image-dcb9b0e689abf611.jpg","assets/image-ad6b5c9d3809f2f1.jpg"],Lh=[["01-frame-crack","A \u578B\u67B6 + \u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u88C2\u7EB9",20.9],["02-ct-crack","CT \u4EF6\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u8BD5\u4EF6",16.1],["03-frame","\u5F27\u5F62\u6784\u4EF6\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u5C40\u90E8",14.3],["04-hole","\u5B54\u90E8\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u5C40\u90E8",14.5],["05-sent-crack","SENT \u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u8BD5\u4EF6",7.6],["06-test","\u88C2\u7EB9\u6269\u5C55\u5BF9\u7167","\u4EFF\u771F / \u5BF9\u7167",11.3],["07-frontend","\u7CFB\u7EDF\u64CD\u4F5C\u89C6\u9891","\u7CFB\u7EDF\u64CD\u4F5C",28.7],["08-cycle-strain","\u5355\u5468\u671F\u53D8\u5E45\u5E94\u53D8\u6570\u636E","\u4EFF\u771F / \u5E94\u53D8\u5BF9\u7167",25.8],["09-real-frame","A \u578B\u67B6\u4EFF\u771F","\u4EFF\u771F / \u6574\u4F53",20.8],["10-acquisition","\u5E94\u53D8\u4FE1\u53F7\u91C7\u96C6","\u73B0\u573A / \u91C7\u96C6",20.2],["11-fatigue-strain","\u75B2\u52B3\u5B9E\u9A8C + \u5E94\u53D8\u4FE1\u53F7","\u5B9E\u9A8C / \u5BF9\u7167",19.9],["12-fatigue","\u75B2\u52B3\u5B9E\u9A8C\u89C6\u9891","\u5B9E\u9A8C / \u75B2\u52B3",19.9]].map(([i,e,t,n],s)=>({id:i,name:e,category:t,duration:n,poster:qy[s],url:"media/"+i+".mp4"})),A={page:Lp(),selected:"T07",structureView:"structure",paramTab:"thresholds",homeZoom:1,scenario:"typical",paused:!1,tick:0,time:new Date,sampleElapsed:18,simulationPlaying:!0,operation:sc(18),liveSamples:[],alarms:[],alarmTab:"events",alarmFilter:"all",alarmSearch:"",alarmPeriod:"all",ruleSearch:"",historyPoints:["T07","T03","T12"],historyFrom:"2026-11-16T10:22",historyTo:"2026-11-16T10:32",historyGranularity:"10s",historyQueried:!0,modelTab:"results",resultMode:"offline",feaIndex:0,videoIndex:0,modelReady:!1,modelStatus:"pending",modelVersion:"",deployedVersion:"",previousVersion:null,modelFile:"",modelStep:0,modelRunCount:0,inputMap:mt.map(i=>i.id),validation:null,modelResult:null,modelLogs:[],resultCondition:"\u6316\u6398\u5DE5\u51B5",resultQuantity:"stress",connTab:"topology",pointSearch:"",externalUrl:"",externalEnabled:!1,uploadedGLB:!1,report:null,ruleCondition:"\u901A\u7528\u5DE5\u51B5"},Ht=null,Cp,Dp,dn=i=>mt.find(e=>e.id===i),Ki=(i=A.time)=>i.toLocaleTimeString("zh-CN",{hour12:!1,timeZone:"Asia/Shanghai"}),Uh={normal:"\u6B63\u5E38",warning:"\u9884\u8B66",alarm:"\u62A5\u8B66",offline:"\u6570\u636E\u5F02\u5E38"};function bn(i,e=""){return`<span class="tag ${e}">${i}</span>`}function Et(i,e,t={}){return`<button class="btn ${t.primary?"primary":""} ${t.ghost?"ghost":""} ${t.compact?"compact":""}" data-action="${e}" ${t.disabled?"disabled":""}>${t.icon?St(t.icon):""}${i}</button>`}function Np(i){return mt.map(e=>`<option value="${e.id}" ${e.id===i?"selected":""}>${e.id} \xB7 ${e.name}</option>`).join("")}function ji(i=A.selected){return Nh.find(e=>e.pointId===i)}function za(i){return i.quality==="stale"||i.value===null?"\u2014":i.value.toFixed(1)}function Up(){let i=A.alarmPeriod==="10"?A.time.getTime()-6e5:-1/0;return A.alarms.filter(e=>(A.alarmFilter==="all"||A.alarmFilter==="active"&&!e.recovered||A.alarmFilter==="alarm"&&e.level==="alarm"||A.alarmFilter==="warning"&&e.level==="warning")&&(!A.alarmSearch||[e.pointId,e.name].join(" ").toLowerCase().includes(A.alarmSearch.toLowerCase()))&&e.time.getTime()>=i)}function Yy(i,e){return i.value===null||i.quality!=="valid"?"offline":e.enabled?i.value>=e.highAlarm||i.value<=e.lowAlarm?"alarm":i.value>=e.highWarning||i.value<=e.lowWarning?"warning":"normal":"normal"}function Ii(){if(A.operation={...sc(A.sampleElapsed),updatedAt:performance.now()},mt.forEach((i,e)=>{let t=A.scenario==="sensor"&&e>=8;if(A.scenario==="network"){i.quality="stale",i.status="offline";return}i.quality=t?"missing":"valid",i.value=t?null:Ba(e,A.sampleElapsed,A.scenario),i.status=Yy(i,ji(i.id))}),A.scenario!=="network"){let i={time:A.time.getTime(),elapsed:A.sampleElapsed,values:mt.map(e=>e.value)};A.liveSamples.at(-1)?.elapsed===i.elapsed?A.liveSamples[A.liveSamples.length-1]=i:A.liveSamples.push(i),A.liveSamples.length>601&&A.liveSamples.shift()}Zy()}function Ch(){return{...A.operation,paused:A.paused,simulationPlaying:A.simulationPlaying,moving:!A.paused&&A.scenario!=="network"&&A.simulationPlaying!==!1}}function Zy(){mt.forEach(i=>{let e=A.alarms.find(t=>t.pointId===i.id&&!t.recovered);if(i.status==="warning"||i.status==="alarm"){if(e&&e.level===i.status)return;e&&(e.recovered=!0,e.recoverTime=new Date(A.time));let t=ji(i.id);A.alarms.unshift({id:"AL-"+String(A.alarms.length+1).padStart(4,"0"),pointId:i.id,name:i.name,level:i.status,value:i.value,threshold:i.status==="alarm"?i.value<0?t.lowAlarm:t.highAlarm:i.value<0?t.lowWarning:t.highWarning,ruleVersion:t.version,time:new Date(A.time),acknowledged:!1,recovered:!1,remark:""})}else i.status==="normal"&&e&&(e.recovered=!0,e.recoverTime=new Date(A.time))})}function wt(i){clearTimeout(Cp),Qe("#toast").textContent=i,Qe("#toast").classList.add("show"),Cp=setTimeout(()=>Qe("#toast").classList.remove("show"),3500)}function Op(i,e,t,n=""){return`<div class="page-heading"><h1>${e}</h1><div class="heading-actions">${n}</div></div>`}function Ky(){return`<div class="scene-switch"><button class="${A.structureView==="machine"?"active":""}" data-action="scene-view" data-value="machine">\u6574\u673A\u6982\u89C8</button><button class="${A.structureView==="structure"?"active":""}" data-action="scene-view" data-value="structure">A \u578B\u67B6 \xB7 16 \u70B9</button><button data-action="reference">\u7ED3\u6784\u8D44\u6599 \u2197</button></div>`}function jy(){Zt={type:"reference"},ai("\u7ED3\u6784\u8D44\u6599",'<img class="reference-image" src="assets/image-2cf7e8eeba19e058.jpg" alt="WK35 \u7535\u94F2\u7ED3\u6784\u8D44\u6599">',Et("\u5173\u95ED","close-modal",{primary:!0}),!0)}function Fp(i=!1){return`<div class="model-stage" id="model-stage"><div class="model-annotation"><span class="status-dot cyan"></span><span id="model-caption">${!i&&A.structureView==="machine"?"WK35 \xB7 \u6574\u673A\u53C2\u6570\u5316\u793A\u610F":"A-FRAME \xB7 \u7ED3\u6784\u4E0E\u6D4B\u70B9\u793A\u610F"}</span></div><div class="model-tags">${bn(i?"\u6F14\u793A\u7740\u8272 \xB7 \u975E\u771F\u5B9E\u8BA1\u7B97":A.structureView==="machine"?"\u6574\u673A\u5916\u89C2\u53C2\u8003 \xB7 \u975E\u539F\u59CB GLB":"16 \u4E2A\u5360\u4F4D\u6D4B\u70B9","dark")}</div><div class="model-tools"><button class="icon-btn" data-action="reset-model" aria-label="\u590D\u4F4D\u4E09\u7EF4\u89C6\u89D2">${St("reset")}</button><button class="icon-btn" data-action="front-model" aria-label="\u4E09\u7EF4\u6B63\u89C6\u56FE">${St("focus")}</button><button class="icon-btn" data-action="wire-model" aria-label="\u5207\u6362\u6A21\u578B\u7EBF\u6846">${St("layers")}</button></div></div>`}function Bp(i=!1){return i?'<div class="model-footer"><span>\u7ED3\u679C\u8272\u6807</span><div class="result-scale"><span>\u4F4E</span><div class="scale-gradient"></div><span>\u9AD8</span></div></div>':'<div class="model-footer"><div class="legend"><span><i class="normal"></i>\u6B63\u5E38</span><span><i class="warning"></i>\u9884\u8B66</span><span><i class="alarm"></i>\u62A5\u8B66</span><span><i class="offline"></i>\u65E0\u6709\u6548\u6570\u636E</span></div></div>'}function Oh(i,e=70,t=1,n=0,s=A.scenario==="normal"){let r=dn(i)||mt[0],a=mt.indexOf(r),o=A.liveSamples.at(-1),l=o?.elapsed??A.sampleElapsed;return Array.from({length:e},(c,u)=>{let h=l-(e-1-u)*t;return A.liveSamples.find(p=>p.elapsed===h)?.values[a]??Ba(a,h,s?"normal":A.scenario)})}function lc(i){let e=new Date(A.historyFrom+"+08:00"),t=new Date(A.historyTo+"+08:00"),n=parseInt(A.historyGranularity,10),s=Math.max(1,Math.floor((t-e)/1e3/n)+1),r=mt.indexOf(dn(i)||mt[0]),a=new Date("2026-11-16T00:00:00+08:00").getTime();return Array.from({length:s},(o,l)=>Ba(r,(e.getTime()-a)/1e3+l*n,"typical"))}function Jy(){let i=dn(A.selected);return i.quality==="valid"?Fh([A.selected]):`<div class="empty-state" style="padding:35px 20px"><h3>${i.quality==="stale"?"\u94FE\u8DEF\u4E2D\u65AD\uFF0C\u5B9E\u65F6\u66F2\u7EBF\u6682\u505C":"\u91C7\u96C6\u901A\u9053\u65E0\u6709\u6548\u6570\u636E"}</h3><p>${i.id} \xB7 \u7B49\u5F85\u6709\u6548\u8F93\u5165\uFF0C\u6682\u505C\u663E\u793A\u5B9E\u65F6\u66F2\u7EBF\u3002</p></div>`}function Fh(i=["T07"],{large:e=!1,history:t=!1}={}){let n=innerWidth>1200?224:innerWidth>980?192:innerWidth>740?78:64,s=innerWidth-n-(innerWidth>1200?64:innerWidth>740?48:30),r=Math.max(250,Math.round(e?s-40:innerWidth>980?s*.57-36:s-36)),a=e?270:174,o=38,l=18,c=20,u=29,h=i.slice(0,4),d=0,p=420,g=R=>c+(p-R)/(p-d)*(a-c-u),v=["#50d9fa","#a4b3ff","#f4c36e","#65d7b6"],f=[0,100,200,300,400].map(R=>`<line class="gridline" x1="${o}" y1="${g(R)}" x2="${r-l}" y2="${g(R)}"/><text x="${o-10}" y="${g(R)+3}" text-anchor="end">${R}</text>`).join(""),m=ji(h[0]||"T07"),b=h.map((R,w)=>{let _=t?lc(R):Oh(R,61,1,A.tick*2),y=Math.max(1,Math.ceil(_.length/600)),P=_.map((U,B)=>({v:U,i:B})).filter(({i:U})=>U%y===0||U===_.length-1).map(({v:U,i:B},V)=>`${V===0?"M":"L"}${o+B/Math.max(_.length-1,1)*(r-o-l)},${g(U)}`).join(" ");return`${w===0?`<path d="${P} L${r-l},${a-u} L${o},${a-u}Z" fill="url(#chart-area)"/>`:""}<path d="${P}" fill="none" stroke="${v[w]}" stroke-width="${w===0?2:1.5}"/>`}).join(""),E=m&&m.enabled&&h.length>0,M=t?[A.historyFrom.slice(11),"","",A.historyTo.slice(11)]:[6e4,4e4,2e4,0].map(R=>Ki(new Date(A.time.getTime()-R)));return`<svg class="${e?"wide-chart":"chart"}" viewBox="0 0 ${r} ${a}" preserveAspectRatio="none" role="img" aria-label="\u6A21\u62DF\u5E94\u53D8\u65F6\u5E8F\u66F2\u7EBF\uFF0C\u5355\u4F4D\u5FAE\u5E94\u53D8"><defs><linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#178e99" stop-opacity=".10"/><stop offset="1" stop-color="#178e99" stop-opacity="0"/></linearGradient></defs>${f}${E?`<line x1="${o}" y1="${g(m.highWarning)}" x2="${r-l}" y2="${g(m.highWarning)}" stroke="#d6af67" stroke-width="1" stroke-dasharray="6 5"/><text x="${r-l}" y="${g(m.highWarning)-6}" text-anchor="end" fill="#bd9b60">\u9884\u8B66\u4E0A\u9650 ${m.highWarning}</text>`:""}${b}${M.map((R,w)=>`<text x="${o+w*(r-o-l)/3}" y="${a-8}" text-anchor="${w===0?"start":w===3?"end":"middle"}">${Yn(R)}</text>`).join("")}<text x="12" y="11">\u03BC\u03B5</text></svg>`}function Qy(i){let e=Oh(i,40),t=Math.min(...e)-7,n=Math.max(...e)+7;return`<svg class="sparkline" viewBox="0 0 290 48" preserveAspectRatio="none" aria-hidden="true"><path d="${e.map((r,a)=>`${a?"L":"M"}${a/39*290},${44-(r-t)/(n-t)*36}`).join(" ")}" fill="none" stroke="${dn(i).status==="alarm"?"#cf7570":"#2d999d"}" stroke-width="1.5"/><path d="M0 47H290" stroke="#edf0ef"/></svg>`}function rc(){return mt.map(i=>`<button class="point-tile ${i.status} ${i.id===A.selected?"selected":""}" data-point="${i.id}" aria-label="\u6D4B\u70B9 ${i.id}" aria-pressed="${i.id===A.selected}"><span class="point-id">${i.id}<i></i></span><span class="point-value">${za(i)}</span></button>`).join("")}function eM(){let i=A.historyQueried?mt.filter(t=>A.historyPoints.includes(t.id)):[],e=i.map(t=>{let n=lc(t.id);return`<tr><td><strong>${t.id}</strong><span class="point-table-sub">${t.name}</span></td><td>\u91C7\u96C6\u5361 ${t.card} / CH${t.channel}</td><td class="mono">${Math.min(...n).toFixed(1)}</td><td class="mono">${Math.max(...n).toFixed(1)}</td><td class="mono">${(n.reduce((s,r)=>s+r,0)/n.length).toFixed(1)}</td><td>${bn("\u5386\u53F2\u6570\u636E","blue")}</td><td><button class="row-link" data-action="history-locate" data-point-id="${t.id}">\u5B9A\u4F4D\u7ED3\u6784</button></td></tr>`}).join("");return Op("TIME SERIES EXPLORER","\u6570\u636E\u8FFD\u6EAF","\u5C06\u5386\u53F2\u66F2\u7EBF\u3001\u6D4B\u70B9\u5BF9\u6BD4\u4E0E\u6570\u636E\u5BFC\u51FA\u653E\u5728\u540C\u4E00\u4E2A\u89C6\u56FE\u3002",`${Et("\u5BFC\u51FA\u5F53\u524D\u6570\u636E","export-history",{icon:"download",disabled:!A.historyPoints.length})}`)+`<section class="panel"><div class="toolbar"><label>\u65F6\u95F4\u8303\u56F4<input class="input" id="history-from" type="datetime-local" value="${A.historyFrom}" aria-label="\u5F00\u59CB\u65F6\u95F4"></label><span class="muted">\u81F3</span><input class="input" id="history-to" type="datetime-local" value="${A.historyTo}" aria-label="\u7ED3\u675F\u65F6\u95F4"><label>\u805A\u5408<select class="select" id="history-granularity"><option value="1s" ${A.historyGranularity==="1s"?"selected":""}>1 \u79D2</option><option value="10s" ${A.historyGranularity==="10s"?"selected":""}>10 \u79D2</option><option value="60s" ${A.historyGranularity==="60s"?"selected":""}>1 \u5206\u949F</option></select></label>${Et("\u67E5\u8BE2","query-history",{primary:!0})}</div><div class="toolbar"><span class="muted small">\u5BF9\u6BD4\u6D4B\u70B9</span><div class="filters">${mt.map(t=>`<button class="filter-chip ${A.historyPoints.includes(t.id)?"active":""}" data-action="toggle-history-point" data-point-id="${t.id}">${A.historyPoints.includes(t.id)?St("check"):""}${t.id}</button>`).join("")}</div><span class="muted xs">\u6700\u591A 4 \u70B9\u540C\u5C4F</span></div>${A.historyQueried&&A.historyPoints.length?`<div class="chart-meta">${A.historyPoints.map((t,n)=>`<span><i style="background:${["#50d9fa","#a4b3ff","#f4c36e","#65d7b6"][n]}"></i>${t}</span>`).join("")}<span class="muted" style="margin-left:auto">\u65F6\u95F4 ${A.historyFrom.slice(11)}\u2013${A.historyTo.slice(11)} \xB7 \u5355\u4F4D \u03BC\u03B5</span></div><div class="full-chart">${Fh(A.historyPoints,{large:!0,history:!0})}</div>`:`<div class="empty-state">${St("trend")}<h3>${A.historyPoints.length?"\u67E5\u8BE2\u6761\u4EF6\u5DF2\u8C03\u6574":"\u9009\u62E9\u9700\u8981\u5BF9\u6BD4\u7684\u6D4B\u70B9"}</h3><p>\u9009\u62E9\u65F6\u6BB5\u548C\u6D4B\u70B9\u540E\u67E5\u8BE2\uFF0C\u6700\u591A\u6BD4\u8F83 4 \u4E2A\u6D4B\u70B9\u3002</p></div>`}<div class="note">\u66F2\u7EBF\u6765\u81EA\u6D4F\u89C8\u5668\u5185\u751F\u6210\u7684\u5386\u53F2\u6570\u636E\u3002\u5B9E\u9645\u91C7\u6837\u9891\u7387\u3001\u5B58\u50A8\u5468\u671F\u548C\u6570\u636E\u8D28\u91CF\u5224\u5B9A\u5F85\u8054\u8C03\u786E\u8BA4\u3002</div></section><section class="panel section-gap"><div class="panel-head"><h2>\u65F6\u6BB5\u7EDF\u8BA1</h2><span class="muted xs">${A.historyQueried?i.length:0} \u4E2A\u6D4B\u70B9</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>\u6D4B\u70B9 / \u5B89\u88C5\u90E8\u4F4D</th><th>\u901A\u9053</th><th>\u6700\u5C0F\u503C / \u03BC\u03B5</th><th>\u6700\u5927\u503C / \u03BC\u03B5</th><th>\u5747\u503C / \u03BC\u03B5</th><th>\u6570\u636E\u6765\u6E90</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${A.historyQueried&&e?e:'<tr><td colspan="7" class="muted">\u6682\u65E0\u67E5\u8BE2\u7ED3\u679C</td></tr>'}</tbody></table></div></section>`}function tM(){let i=mt.every(s=>s.quality==="valid"),e=A.modelReady&&A.modelResult&&i,t=A.resultMode==="offline",n=e||t;return`<div class="notice neutral">${St("box")}<span>${t?"\u79BB\u7EBF\u6709\u9650\u5143\u6210\u679C\u6309\u5DE5\u51B5\u8F7D\u5165\u4E0E\u5BF9\u7167\u3002\u4E0B\u65B9\u4F7F\u7528\u793A\u610F\u7740\u8272\u8868\u8FBE\u6210\u679C\u67E5\u770B\u65B9\u5F0F\uFF0C\u5B9E\u9645\u7F51\u683C\u3001\u4E91\u56FE\u548C\u6D4B\u70B9\u6620\u5C04\u5F85\u7532\u65B9\u4EA4\u4ED8\u3002":"\u4EE3\u7406\u6A21\u578B\u63A5\u6536 16 \u8DEF\u5E94\u53D8\uFF0C\u6A21\u578B\u7531\u6821\u65B9\u5B66\u751F\u56E2\u961F\u5F00\u53D1\u5E76\u4EA4\u4ED8\u3002\u672C\u89C6\u56FE\u9884\u7559\u7ED3\u679C\u5B57\u6BB5\u3001\u7248\u672C\u4E0E\u8F93\u5165\u6279\u6B21\u8FFD\u6EAF\uFF0C\u6F14\u793A\u8FD0\u884C\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u5185\u5B8C\u6210\u3002"}</span></div><div class="model-result-grid"><section class="panel ${n?"model-panel":""}"><div class="panel-head"><div><h2>${t?"\u79BB\u7EBF\u6709\u9650\u5143\u6210\u679C":"\u964D\u9636\u4EE3\u7406\u6A21\u578B\u7ED3\u679C"} </h2><p>${t?"\u6309\u5DE5\u51B5\u67E5\u770B\u7ED3\u679C\u8D44\u6E90":"\u5173\u8054\u8F93\u5165\u6279\u6B21\u3001\u6A21\u578B\u7248\u672C\u53CA\u7ED3\u6784\u90E8\u4F4D"}</p></div><div class="result-source"><select class="select" id="result-condition" aria-label="\u7ED3\u679C\u5DE5\u51B5"><option ${A.resultCondition==="\u6316\u6398\u5DE5\u51B5"?"selected":""}>\u6316\u6398\u5DE5\u51B5</option><option ${A.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"selected":""}>\u56DE\u8F6C\u5DE5\u51B5</option><option ${A.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"selected":""}>\u5378\u8F7D\u5DE5\u51B5</option></select></div></div>${n?`${Fp(!0)}${Bp(!0)}<div class="result-notice">\u5F53\u524D\u4E3A\u7A0B\u5E8F\u751F\u6210\u7684\u7ED3\u6784\u793A\u610F\u548C\u5F52\u4E00\u5316\u7740\u8272\uFF0C\u4E0D\u5BF9\u5E94\u771F\u5B9E\u7F51\u683C\u89E3\u3001\u5E94\u529B\u573A\u6216\u7ED3\u6784\u5B89\u5168\u7ED3\u8BBA\u3002</div>`:`<div class="empty-state" style="padding:80px 20px 85px">${St("cpu")}<h3>${A.modelReady?i?"\u6682\u65E0\u8FD0\u884C\u7ED3\u679C":"\u8F93\u5165\u6570\u636E\u5F02\u5E38":"\u6A21\u578B\u672A\u90E8\u7F72"}</h3><p>${A.modelReady?i?"\u53EF\u4F7F\u7528\u5F53\u524D 16 \u8DEF\u6F14\u793A\u8F93\u5165\u751F\u6210\u4E00\u6279\u6837\u4F8B\u7ED3\u679C\u3002":`16 \u8DEF\u8F93\u5165\u4E2D\u5B58\u5728\u7F3A\u5931\u6216\u8FC7\u671F\u6570\u636E\uFF0C\u7ED3\u679C\u5C55\u793A\u5DF2\u6682\u505C\u3002
\u6062\u590D\u94FE\u8DEF\u540E\u53EF\u91CD\u65B0\u6F14\u793A\u8FD0\u884C\u3002`:`\u6821\u65B9\u4EA4\u4ED8\u7B97\u6CD5\u5305\u3001\u8FD0\u884C\u73AF\u5883\u53CA\u8F93\u5165\u8F93\u51FA\u8BF4\u660E\u540E\uFF0C
\u5B8C\u6210\u70B9\u4F4D\u6620\u5C04\u3001\u6821\u9A8C\u5E76\u90E8\u7F72\u81F3 MindEdge\u3002`}</p>${Et(A.modelReady?i?"\u8FD0\u884C\u4E00\u6B21":"\u67E5\u770B\u6570\u636E\u94FE\u8DEF":"\u6A21\u578B\u7BA1\u7406",A.modelReady?i?"run-model":"goto-connections":"goto-deployment",{primary:!0,icon:"arrow"})}</div>`}</section><section class="panel"><div class="panel-head"><h2>${t?"\u6210\u679C\u4FE1\u606F\u4E0E\u5B9E\u6D4B\u5BF9\u7167":"\u7ED3\u679C\u4FE1\u606F\u4E0E\u5B9E\u6D4B\u5BF9\u7167"}</h2>${bn(n?"\u8BA1\u7B97\u7ED3\u679C":"\u5C1A\u65E0\u7ED3\u679C",n?"blue":"neutral")}</div><div class="panel-content"><div class="key-values"><div><span>\u7ED3\u679C\u6765\u6E90</span><strong>${t?"\u7532\u65B9\u79BB\u7EBF\u6210\u679C\u5E93\uFF08\u5360\u4F4D\uFF09":"MindEdge \u4EE3\u7406\u6A21\u578B"}</strong></div><div><span>\u7248\u672C / \u5DE5\u51B5</span><strong>${t?"FE-demo / ":Yn(A.modelResult?.version||A.deployedVersion||"\u672A\u90E8\u7F72")+" / "}${t?A.resultCondition:`<span data-result-phase>${Yn(A.modelResult?.phaseLabel||"\u2014")}</span>`}</strong></div><div><span>\u8F93\u5165\u6279\u6B21</span><strong class="mono" data-result-batch>${n?t?"FE-SAMPLE-001":A.modelResult.batch:"\u2014"}</strong></div><div><span>\u7ED3\u679C\u65F6\u95F4</span><strong class="mono" data-result-time>${n?Ki(A.modelResult?.time):"\u2014"}</strong></div></div><div class="result-confidence">\u6A21\u578B\u6709\u6548\u57DF\u3001\u9A8C\u8BC1\u8BEF\u5DEE\u548C\u7ED3\u679C\u5224\u5B9A\u6807\u51C6\u5F85\u7532\u65B9\u63D0\u4F9B\u3002\u539F\u578B\u4E2D\u7684\u6A21\u578B\u6307\u6807\u4E3A\u5360\u4F4D\u5B57\u6BB5\u3002</div><div class="result-metrics"><div class="result-stat"><span>\u6700\u5927\u7B49\u6548\u5E94\u529B</span><strong><span data-result-stress>${n?t?A.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"163.2":A.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"94.1":"148.6":A.modelResult.stress.toFixed(1):"\u2014"}</span><small> MPa</small></strong></div><div class="result-stat"><span>\u6700\u5927\u4F4D\u79FB</span><strong><span data-result-displacement>${n?t?A.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"2.81":A.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"1.73":"2.36":A.modelResult.displacement.toFixed(2):"\u2014"}</span><small> mm</small></strong></div></div><h3 style="margin:19px 0 9px">${A.selected} \u5B9E\u6D4B\u5173\u8054</h3><select class="select" id="result-point" style="width:100%;max-width:none" aria-label="\u7ED3\u679C\u5173\u8054\u6D4B\u70B9">${Np(A.selected)}</select><div class="panel-content" style="padding:15px 0 0"><div class="key-values"><div><span>\u5F53\u524D\u5E94\u53D8</span><strong class="mono"><span data-result-strain>${za(dn(A.selected))}</span> \u03BC\u03B5</strong></div><div><span>\u5173\u8054\u7ED3\u6784\u90E8\u4F4D</span><strong>${dn(A.selected).name}</strong></div></div><p class="muted xs" style="margin-top:13px">\u7ED3\u679C\u4E0E\u5B9E\u6D4B\u7684\u91CF\u7EB2\u3001\u7F51\u683C\u5750\u6807\u548C\u65F6\u95F4\u57FA\u51C6\u987B\u5728\u63A5\u53E3\u786E\u8BA4\u65F6\u5BF9\u9F50\u3002</p></div></div></section></div>`}function nM(){let i=A.modelStep;return`<div class="notice">${St("cpu")}<span>\u63A5\u5165\u5BF9\u8C61\u4E3A\u6821\u65B9\u63D0\u4F9B\u7684\u964D\u9636\u4EE3\u7406\u6A21\u578B\u3002\u524D\u7AEF\u7F16\u6392\u8F93\u5165\u6620\u5C04\u3001\u5951\u7EA6\u6821\u9A8C\u3001\u90E8\u7F72\u72B6\u6001\u548C\u7ED3\u679C\u5C55\u793A\u3002\u5F53\u524D\u64CD\u4F5C\u5747\u4E3A\u6D4F\u89C8\u5668\u5185\u7684\u90E8\u7F72\u6F14\u793A\u3002</span></div><div class="two-col"><section class="panel"><div class="panel-head"><div><h2>MindEdge \u6A21\u578B\u63A5\u5165</h2><p>\u6F14\u793A\u751F\u547D\u5468\u671F \xB7 \u6A21\u578B\u5305\u4EA4\u4ED8\u540E\u8054\u8C03</p></div>${bn(A.modelStatus==="running"?"\u8FD0\u884C\u4E2D":A.modelStatus==="validated"?"\u914D\u7F6E\u6709\u6548":A.modelFile?"\u5DF2\u8F7D\u5165":"\u672A\u90E8\u7F72",A.modelStatus==="running"?"":"neutral")}</div><div class="panel-content"><div class="step-list"><div class="step ${i>=1?"active":""}"><b>01  \u6A21\u578B\u7248\u672C</b></div><div class="step ${i>=2?"active":""}"><b>02  \u8F93\u5165\u6620\u5C04</b></div><div class="step ${i>=3?"active":""}"><b>03  \u90E8\u7F72\u9A8C\u8BC1</b></div></div><div class="form-grid"><label class="form-field">\u6A21\u578B\u540D\u79F0<input class="input" id="model-name" value="A \u578B\u67B6\u964D\u9636\u4EE3\u7406\u6A21\u578B" readonly></label><label class="form-field">\u4EA4\u4ED8\u65B9<input class="input" value="\u592A\u539F\u7406\u5DE5\u5B66\u751F\u56E2\u961F" readonly></label><label class="form-field">\u7248\u672C\u53F7<input class="input" id="model-version" placeholder="\u8BF7\u8F93\u5165\u7248\u672C\u53F7" value="${Yn(A.modelVersion)}"></label><label class="form-field">\u90E8\u7F72\u76EE\u6807<input class="input" value="MindEdge / \u5185\u7F51\u8FB9\u7F18\u8282\u70B9" readonly></label><div class="form-field full"><span>\u6A21\u578B\u4EA4\u4ED8\u5305</span><div class="upload-zone">${St("box")}<strong>${A.modelFile?Yn(A.modelFile):"\u672A\u8F7D\u5165\u6A21\u578B\u5305"}</strong><p>\u5B9E\u9645\u683C\u5F0F\u3001\u4F9D\u8D56\u3001\u8D44\u6E90\u9700\u6C42\u53CA\u542F\u52A8\u65B9\u5F0F\u5F85\u5B66\u751F\u56E2\u961F\u786E\u8BA4</p>${Et(A.modelFile?"\u91CD\u65B0\u8F7D\u5165":"\u8F7D\u5165\u6A21\u578B","load-sample-model",{compact:!0,icon:"file"})}</div></div></div><div style="display:flex;align-items:center;justify-content:space-between;margin:19px 0 10px"><h3>16 \u8DEF\u8F93\u5165\u6620\u5C04</h3><span class="muted xs">strain[16] \xB7 \u5355\u4F4D \u03BC\u03B5</span></div><div class="table-scroll" style="max-height:240px;border:1px solid var(--line);border-radius:7px"><table class="data-table"><thead><tr><th>\u6A21\u578B\u8F93\u5165</th><th>\u6E90\u6D4B\u70B9 / \u91C7\u96C6\u5361</th><th>\u8D28\u91CF\u72B6\u6001</th></tr></thead><tbody>${A.inputMap.map((e,t)=>`<tr><td class="mono">strain[${t}]</td><td><select class="select model-mapping" aria-label="\u6A21\u578B\u8F93\u5165${t}\u6620\u5C04" data-index="${t}">${mt.map(n=>`<option value="${n.id}" ${n.id===e?"selected":""}>${n.id} \xB7 ${n.card} / CH${n.channel}</option>`).join("")}</select></td><td>${bn(dn(e).quality==="valid"?"\u6709\u6548":"\u7F3A\u5931 / \u8FC7\u671F",dn(e).quality==="valid"?"":"amber")}</td></tr>`).join("")}</tbody></table></div>${A.validation?`<div class="notice validation-message ${A.validation.ok?"":"warning"}" style="margin:15px 0 0">${St(A.validation.ok?"checkcircle":"alert")}<span>${A.validation.message}</span></div>`:""}<div class="foot-actions"><span class="floating-note">\u683C\u5F0F\u4E0E\u8FD0\u884C\u73AF\u5883\u7531\u6A21\u578B\u63D0\u4F9B\u65B9\u786E\u8BA4</span>${Et("\u6821\u9A8C\u914D\u7F6E","validate-model",{icon:"checkcircle",disabled:!A.modelFile})}${Et("\u90E8\u7F72\u6A21\u578B","deploy-model",{primary:!0,icon:"upload",disabled:!A.validation?.ok})}</div></div></section><div><section class="panel"><div class="panel-head"><h2>\u8F93\u5165 / \u8F93\u51FA\u5951\u7EA6</h2>${bn("\u672A\u914D\u7F6E","amber")}</div><div class="panel-content"><div class="check-list"><div class="check-item">${St("radio")}<div>\u65F6\u95F4\u6233\u4E0E 16 \u8DEF\u5E94\u53D8<small>timestamp / pointIds / strain / quality</small></div></div><div class="check-item">${St("layers")}<div>\u6A21\u578B\u7ED3\u679C\u4E0E\u7A7A\u95F4\u7D22\u5F15<small>stress / displacement / meshRef / pointMap</small></div></div><div class="check-item wait">${St("clock")}<div>\u6A21\u578B\u6709\u6548\u57DF<small>\u672A\u914D\u7F6E</small></div></div><div class="check-item wait">${St("clock")}<div>\u4F9D\u8D56\u53CA\u8D44\u6E90\u8981\u6C42<small>\u672A\u914D\u7F6E</small></div></div></div>${Et("\u63A5\u53E3\u5B9A\u4E49","contract-example",{ghost:!0,icon:"file"})}</div></section><section class="panel section-gap"><div class="panel-head"><h2>\u90E8\u7F72\u4E0E\u8FD0\u884C\u8BB0\u5F55</h2><button class="row-link" data-action="rollback-model" ${A.previousVersion?"":"disabled"}>\u56DE\u6EDA\u7248\u672C</button></div><div class="panel-content"><div class="terminal" id="model-log">${A.modelLogs.length?A.modelLogs.map(e=>`<div><span class="${e.type==="ok"?"green":e.type==="error"?"orange":""}">[${e.time}] ${Yn(e.text)}</span></div>`).join(""):"<div>\u7B49\u5F85\u8F7D\u5165\u6A21\u578B\u5305</div>"}</div><div class="foot-actions">${Et("\u8FD0\u884C\u4E00\u6B21","run-model",{primary:!0,icon:"play",disabled:!A.modelReady})}</div></div></section></div></div>`}function iM(){let i=Ph[A.feaIndex];return`<div class="notice neutral">${St("file")}<span>\u5DF2\u63A5\u5165\u60A8\u63D0\u4F9B\u7684 5 \u5F20\u4EFF\u771F\u539F\u56FE\uFF0C\u4FDD\u7559\u539F\u6709\u8272\u6807\u548C\u6807\u6CE8\u3002\u8FD9\u91CC\u5C55\u793A\u79BB\u7EBF\u53C2\u8003\u8D44\u6599\uFF0C\u672A\u4E0E\u5B9E\u65F6\u91C7\u96C6\u6570\u636E\u6216\u4EE3\u7406\u6A21\u578B\u63A8\u7406\u5EFA\u7ACB\u8BA1\u7B97\u5173\u8054\u3002</span></div><div class="fea-grid"><section class="panel"><div class="panel-head"><div><h2>${i.name}</h2><p>${i.id}\u7684\u4EFF\u771F\u7ED3\u679C\u622A\u56FE</p></div><button class="row-link" data-action="fea-original">\u67E5\u770B\u539F\u56FE ${St("external")}</button></div><div class="fea-stage"><img src="${i.image}" alt="${i.name}\uFF0C\u4FDD\u7559\u539F\u59CB\u8272\u6807\u4E0E\u6807\u6CE8"></div><div class="asset-thumbnails">${Ph.map((e,t)=>`<button class="${t===A.feaIndex?"active":""}" data-action="fea-select" data-index="${t}" aria-label="\u67E5\u770B${e.name}" aria-pressed="${t===A.feaIndex}"><img src="${e.image}" alt=""><span>${String(t+1).padStart(2,"0")} / ${e.name}</span></button>`).join("")}</div></section><aside class="panel"><div class="panel-head"><h2>\u6210\u679C\u4FE1\u606F</h2></div><div class="panel-content"><div class="key-values"><div><span>\u7ED3\u679C\u91CF</span><strong>${i.quantity}</strong></div><div><span>\u5355\u4F4D</span><strong>\u672A\u5F55\u5165</strong></div><div><span>\u5DE5\u51B5 / \u8F7D\u8377</span><strong>\u672A\u5F55\u5165</strong></div><div><span>\u6C42\u89E3\u65F6\u95F4 / \u7248\u672C</span><strong>\u672A\u63D0\u4F9B</strong></div><div><span>\u6E90\u6570\u636E\u4E0E\u7F51\u683C</span><strong>\u56FE\u50CF\u6587\u4EF6</strong></div><div><span>16 \u70B9\u7A7A\u95F4\u6620\u5C04</span><strong>\u672A\u7ED1\u5B9A</strong></div></div><p class="asset-notice">${i.note}\u3002\u56FE\u4E2D\u989C\u8272\u8303\u56F4\u4EE5\u5404\u81EA\u539F\u56FE\u4E3A\u51C6\uFF0C\u4E0D\u80FD\u8DE8\u56FE\u76F4\u63A5\u6BD4\u8F83\u7EDD\u5BF9\u5927\u5C0F\u3002</p><div class="notice warning" style="margin-top:20px">${St("layers")}<span>\u5EFA\u7ACB\u5B9E\u6D4B\u5BF9\u7167\u524D\uFF0C\u9700\u8865\u9F50\u5DE5\u51B5\u3001\u5355\u4F4D\u3001\u6C42\u89E3\u7248\u672C\u3001\u8282\u70B9 / \u5355\u5143\u7D22\u5F15\u3001\u65F6\u95F4\u57FA\u51C6\u53CA\u6D4B\u70B9\u5750\u6807\u3002</span></div><p class="asset-notice">\u79BB\u7EBF\u4EFF\u771F\u7528\u4E8E\u6210\u679C\u590D\u6838\u4E0E\u7A7A\u95F4\u53C2\u8003\u3002\u5B9E\u65F6\u4EE3\u7406\u6A21\u578B\u7531\u6821\u65B9\u4EA4\u4ED8\uFF0C\u6309\u8F93\u5165\u6279\u6B21\u548C\u7248\u672C\u8FFD\u6EAF\uFF1B\u539F\u56FE\u4E2D\u7684\u5CF0\u503C\u4E0D\u4F5C\u4E3A\u5B9E\u65F6\u9884\u8B66\u9608\u503C\u3002</p><div class="foot-actions">${Et("\u67E5\u770B\u89C6\u9891","goto-videos",{icon:"play",primary:!0})}</div></div></aside></div>`}function sM(){let i=Ph[A.feaIndex];Zt={type:"fea"},ai(i.name,`<p>\u7528\u6237\u63D0\u4F9B\u7684\u539F\u59CB\u622A\u56FE \xB7 \u5DE5\u51B5\u3001\u5355\u4F4D\u4E0E\u6C42\u89E3\u7248\u672C\u5F85\u786E\u8BA4</p><img class="reference-image" src="${i.image}" alt="${i.name}\u539F\u56FE">`,Et("\u5173\u95ED","close-modal",{primary:!0}),!0)}function rM(){let i=Lh[A.videoIndex];return`<div class="notice neutral">${St("play")}<span>\u4ECE\u60A8\u63D0\u4F9B\u7684\u300A\u6F14\u793A\u89C6\u9891.rar\u300B\u4E2D\u6574\u7406 12 \u6BB5\u89C6\u9891\uFF0C\u6DB5\u76D6 A \u578B\u67B6\u3001\u88C2\u7EB9\u6269\u5C55\u3001\u5E94\u53D8\u91C7\u96C6\u548C\u75B2\u52B3\u5B9E\u9A8C\u3002\u89C6\u9891\u4E3A\u5386\u53F2\u6F14\u793A\u8D44\u6599\uFF0C\u5C1A\u672A\u5173\u8054\u672C\u6B21\u5B9E\u65F6\u6570\u636E\u6216\u6A21\u578B\u8FD0\u884C\u6279\u6B21\u3002</span></div><div class="video-grid"><section class="panel"><div class="panel-head"><div><h2>${i.name}</h2><p>${i.category} \xB7 ${i.duration.toFixed(1)} s</p></div>${bn("\u53C2\u8003\u89C6\u9891","blue")}</div><div class="video-theater"><video id="reference-video" controls playsinline preload="metadata" poster="${i.poster}" src="${i.url}" aria-label="${i.name}\u6F14\u793A\u89C6\u9891"></video></div><div class="video-meta"><span id="video-status"></span><button class="row-link" data-action="download-video">\u4E0B\u8F7D\u5F53\u524D\u89C6\u9891 ${St("download")}</button></div><div class="panel-content"><p class="asset-notice">\u6838\u5BF9 A \u578B\u67B6\u5F62\u6001\u4E0E\u5173\u6CE8\u90E8\u4F4D\u3001\u79BB\u7EBF\u7ED3\u679C\u5C55\u793A\u65B9\u5F0F\u3001\u5E94\u53D8\u6570\u636E\u94FE\u8DEF\u53CA\u7B97\u6CD5\u63A5\u5165\u6D41\u7A0B\u3002\u88C2\u7EB9\u6F14\u793A\u4E0D\u4EE3\u8868\u672C\u9879\u76EE\u5DF2\u5B9E\u73B0\u88C2\u7EB9\u8BC6\u522B\u6216\u6269\u5C55\u9884\u6D4B\uFF0C\u76F8\u5173\u7B97\u6CD5\u80FD\u529B\u987B\u4EE5\u53CC\u65B9\u7EA6\u5B9A\u53CA\u6821\u65B9\u5B9E\u9645\u4EA4\u4ED8\u4E3A\u51C6\u3002</p></div></section><aside class="panel"><div class="panel-head"><h2>\u89C6\u9891\u76EE\u5F55</h2><span class="muted xs">12 \u6BB5</span></div><div class="video-list">${Lh.map((e,t)=>`<button class="video-item ${t===A.videoIndex?"active":""}" data-action="video-select" data-index="${t}" aria-pressed="${t===A.videoIndex}"><img src="${e.poster}" alt=""><span><strong>${e.name}</strong><small>${e.category} \xB7 ${e.duration.toFixed(1)} s</small></span>${St("play")}</button>`).join("")}</div><div class="note">\u5206\u7C7B\u6309\u539F\u6587\u4EF6\u540D\u6574\u7406\uFF0C\u539F\u59CB\u6C42\u89E3\u548C\u5B9E\u9A8C\u53C2\u6570\u672A\u968F\u89C6\u9891\u63D0\u4F9B\u3002</div></aside></div>`}function aM(){let i=A.scenario==="network";return`<div class="two-col"><section class="panel"><div class="panel-head"><h2>\u91C7\u96C6\u4E0E\u8BA1\u7B97\u94FE\u8DEF</h2>${bn(i?"\u8FDE\u63A5\u4E2D\u65AD":"\u8FDE\u63A5\u6B63\u5E38",i?"amber":"blue")}</div><div class="link-diagram"><div class="link-source"><strong>DH5908N \xD7 2</strong><span>16 \u901A\u9053 / \u03BC\u03B5</span></div><div class="link-direction">\u2193</div><div class="link-split"><div class="link-branch"><h3>${St("cpu")}MindEdge</h3><div class="key-values"><div><span>\u6A21\u578B\u72B6\u6001</span><strong>${A.modelReady?"\u8FD0\u884C\u4E2D":"\u672A\u90E8\u7F72"}</strong></div><div><span>\u6D3B\u52A8\u7248\u672C</span><strong>${Yn(A.deployedVersion||"\u2014")}</strong></div></div></div><div class="link-branch"><h3>${St("network")}\u5185\u7F51\u6570\u636E\u670D\u52A1</h3><div class="key-values"><div><span>\u8FDE\u63A5\u72B6\u6001</span><strong>${i?"\u4E2D\u65AD":"\u6B63\u5E38"}</strong></div><div><span>\u6570\u636E\u72B6\u6001</span><strong>${i?"\u8FC7\u671F":"\u6709\u6548"}</strong></div></div></div></div><div class="link-direction">\u2193</div><div class="pipeline" style="justify-content:center"><div class="pipeline-node"><b>\u7ED3\u6784\u76D1\u6D4B / \u7ED3\u6784\u8BC4\u4F30</b></div></div></div></section><section class="panel"><div class="panel-head"><h2>\u8282\u70B9\u72B6\u6001</h2></div><div class="panel-content"><div class="timeline"><div class="timeline-item"><span>\u91C7\u96C6\u5361 A / 8 \u901A\u9053</span>DH5908N \xB7 ${bn("\u5728\u7EBF")}</div><div class="timeline-item"><span>\u91C7\u96C6\u5361 B / 8 \u901A\u9053</span>DH5908N \xB7 ${bn(A.scenario==="sensor"?"\u79BB\u7EBF":"\u5728\u7EBF",A.scenario==="sensor"?"amber":"")}</div><div class="timeline-item"><span>MindEdge / Manage OS</span>${bn(A.modelReady?"\u8FD0\u884C\u4E2D":"\u672A\u90E8\u7F72",A.modelReady?"":"neutral")}</div><div class="timeline-item"><span>\u6570\u636E\u670D\u52A1</span>${bn(i?"\u4E2D\u65AD":"\u5728\u7EBF",i?"amber":"")}</div></div><div class="key-values"><div><span>\u6700\u8FD1\u66F4\u65B0</span><strong class="mono">${Ki()}</strong></div><div><span>\u6570\u636E\u540C\u6B65</span><strong>${i?"\u7B49\u5F85\u8865\u4F20":"\u6B63\u5E38"}</strong></div></div><div class="foot-actions">${Et("\u5237\u65B0\u72B6\u6001","refresh-status",{icon:"reset"})}</div></div></section></div>`}function oM(){let i=Qe("#main");i.querySelectorAll(".panel-head p,.state-note,.assembly-legend,.asset-notice,.result-notice,.result-confidence,.detail-foot,.floating-note,.upload-zone p,.model-annotation,.model-tags,.notice:not(.validation-message)").forEach(e=>e.remove()),i.querySelectorAll(".note").forEach(e=>{let t=e.textContent.trim().match(/^共\s*\d+\s*条/);t?e.textContent=t[0]:e.remove()}),i.querySelectorAll(".empty-state p").forEach(e=>e.remove()),i.querySelectorAll(".panel-content").forEach(e=>{!e.textContent.trim()&&!e.querySelector("input,select,button,canvas")&&e.remove()})}function it(){Ht?.dispose(),Ht=null;let i=A.page==="history"?"overview":A.page;Qe("#nav").innerHTML=Ih.map(([t,n,s],r)=>`<a class="nav-item ${i===t?"active":""}" href="#${Cs[t]}" aria-label="${s}" title="${s}" ${i===t?'aria-current="page"':""}>${St(n)}<span>${s}</span><small class="nav-no">0${r+1}</small></a>`).join(""),Qe("#breadcrumb").textContent=Ih.find(t=>t[0]===i)?.[2]||"\u9996\u9875",document.body.dataset.page=A.page;let e={home:Yt.home,overview:Yt.monitor,history:eM,alarms:Yt.alarms,models:Yt.assessment,params:Yt.params,connections:Yt.iot};Qe("#main").innerHTML=`<div class="page-enter">${e[A.page]()}</div>`,A.page==="history"&&Qe(".page-heading").insertAdjacentHTML("afterend",Et("\u8FD4\u56DE\u7ED3\u6784\u76D1\u6D4B","customer-monitor-back",{compact:!0})),oM(),kp(),Yt.updateClock()}function kp(){let i=Qe("#home-model-stage");if(i){try{Ht=Rh(i,{home:!0,getOperation:Ch})}catch(t){i.dataset.modelState="error",console.warn("Equipment viewer unavailable",t.message)}return}let e=Qe("#model-stage");if(e){if(A.structureView==="machine"){try{Ht=Rh(e,{getOperation:Ch})}catch(t){e.dataset.modelState="error",console.warn("Equipment viewer unavailable",t.message)}return}try{Ht=Sp(e,{points:mt,onSelect:zp,selected:A.selected,resultMode:A.page==="models"&&Zt?.type!=="structure",machineView:A.structureView==="machine",getOperation:Ch,getResult:()=>Yt.getView()==="simulation"?null:A.modelResult,onFocusStructure:()=>{A.structureView="structure",Zt?.type==="structure"?ac():it()}})}catch(t){let n=document.createElement("div");n.className="empty-state",n.style.paddingTop="105px",n.innerHTML=`${St("box")}<h3>\u4E09\u7EF4\u6E32\u67D3\u6682\u4E0D\u53EF\u7528</h3><p>\u53EF\u901A\u8FC7\u53F3\u4FA7 16 \u6D4B\u70B9\u7EE7\u7EED\u67E5\u770B\u8BFB\u6570\u4E0E\u6CE2\u5F62\u3002<br>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u684C\u9762\u6D4F\u89C8\u5668\u3002</p>`,e.append(n),console.warn("WebGL view unavailable",t.message)}}}function hn(i){Object.hasOwn(Cs,i)&&(A.page=i,window.history.pushState(null,"","#"+Cs[i]),kn(),it(),window.scrollTo({top:0,behavior:"instant"}))}window.addEventListener("hashchange",()=>{A.page=Lp(),kn(),it(),window.scrollTo({top:0,behavior:"instant"})});function zp(i){if(dn(i)){if(A.selected=i,Zt?.type==="structure"){Yt.resetAnalysis(),Yt.refresh(),Ht?.update(mt,i),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=rc());return}if(A.page==="home"){A.structureView="structure",hn("overview");return}if(A.page==="overview"&&A.structureView==="machine"){A.structureView="structure",it();return}A.page==="overview"?(Yt.refresh(),Ht?.update(mt,i),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=rc())):it()}}var Zt=null,Dh=null;function ai(i,e,t="",n=!1){Dh=document.activeElement,Qe("#modal").innerHTML=`<section class="modal ${n?"wide":""}" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div class="modal-head"><h2 id="dialog-title">${i}</h2><button class="icon-btn" data-action="close-modal" aria-label="\u5173\u95ED\u5BF9\u8BDD\u6846">${St("close")}</button></div><div class="modal-body">${e}</div>${t?`<div class="modal-foot">${t}</div>`:""}</section>`,Qe("#modal").hidden=!1,Qe("#modal").querySelector("input:not([readonly]),select,textarea,button")?.focus()}function kn(){let i=!Qe("#modal").hidden;Zt?.type==="structure"&&(Ht?.dispose(),Ht=null),Qe("#modal").hidden=!0,Qe("#modal").innerHTML="",Zt=null,i&&Dh?.isConnected&&Dh.focus()}function ac(){Ht?.dispose(),Ht=null,Zt={type:"structure"},ai("A \u578B\u67B6 \xB7 \u4E09\u7EF4\u6D4B\u70B9",Ky()+Fp()+Bp()+`<div class="point-grid customer-modal-points" id="modal-point-grid">${rc()}</div>`,`${Et("\u8F7D\u5165 GLB","import-glb",{compact:!0})}${Et("\u5173\u95ED","close-modal",{primary:!0})}`,!0),kp()}function lM(){Zt={type:"design"},ai("\u7CFB\u7EDF\u4FE1\u606F",`<div class="key-values"><div><span>\u7CFB\u7EDF</span><strong>MindEdge \u7ED3\u6784\u76D1\u6D4B\u5E73\u53F0</strong></div><div><span>\u7248\u672C</span><strong>V2.4</strong></div><div><span>\u8FD0\u884C\u73AF\u5883</span><strong>\u524D\u7AEF\u5C55\u793A\u73AF\u5883</strong></div><div><span>\u76D1\u6D4B\u914D\u7F6E</span><strong>\u53CC\u91C7\u96C6\u5361 / 16 \u901A\u9053</strong></div><div><span>\u73B0\u573A\u8BBE\u5907</span><strong>\u672A\u63A5\u5165</strong></div><div><span>\u7B97\u6CD5\u670D\u52A1</span><strong>\u672A\u63A5\u5165</strong></div></div><p class="system-disclosure">\u9996\u9875\u548C\u6574\u673A\u6982\u89C8\u4F7F\u7528\u7528\u6237\u6307\u5B9A MetaV \u5206\u4EAB\u9875\u7684 WK35 \u4E0E\u77FF\u533A GLB \u6A21\u578B\uFF0C\u7F51\u9875\u7248\u672C\u7ECF\u663E\u793A\u4F18\u5316\uFF0C\u7ED3\u6784\u6D4B\u70B9\u4F4D\u7F6E\u4ECD\u9700\u6309\u7532\u65B9\u70B9\u8868\u7ED1\u5B9A\u3002\u76D1\u6D4B\u503C\u6309\u6316\u6398\u3001\u63D0\u5347\u3001\u56DE\u8F6C\u3001\u5378\u8F7D\u3001\u8FD4\u56DE\u7684 60 \u79D2\u5FAA\u73AF\u5728\u6D4F\u89C8\u5668\u5185\u6BCF\u79D2\u751F\u6210\uFF0C\u6570\u503C\u3001\u66F2\u7EBF\u548C\u8D8A\u9650\u4E8B\u4EF6\u4F7F\u7528\u540C\u4E00\u6570\u636E\u6D41\uFF0C\u672A\u63A5\u5165\u73B0\u573A\u5B9E\u65F6\u91C7\u96C6\u3002\u6574\u673A\u52A8\u4F5C\u4E0E\u7ED3\u6784\u52A8\u6001\u4E91\u56FE\u4E3A\u5DE5\u51B5\u8054\u52A8\u5C55\u793A\uFF1B\u5E94\u529B\u3001\u4F4D\u79FB\u7531\u6F14\u793A\u6620\u5C04\u751F\u6210\uFF0C\u53D8\u5F62\u7ECF\u8FC7\u663E\u793A\u653E\u5927\uFF0C\u4E0D\u4EE3\u8868\u6709\u9650\u5143\u6C42\u89E3\u3001\u5B9E\u9645\u7ED3\u6784\u54CD\u5E94\u6216\u5B89\u5168\u7ED3\u8BBA\u3002\u6A21\u578B\u90E8\u7F72\u3001\u63A8\u7406\u548C\u7248\u672C\u5207\u6362\u4E3A\u524D\u7AEF\u4EA4\u4E92\u6A21\u62DF\u3002\u4FE1\u53F7\u5904\u7406\u548C\u8D8B\u52BF\u66F2\u7EBF\u5728\u6D4F\u89C8\u5668\u5185\u6F14\u7B97\uFF0C\u4E0D\u4EE3\u8868\u5DF2\u90E8\u7F72\u8FB9\u7F18\u7B97\u6CD5\u3002\u4EFF\u771F\u56FE\u548C\u89C6\u9891\u4FDD\u7559\u4E3A\u5386\u53F2\u53C2\u8003\u8D44\u6599\uFF1B\u70B9\u4F4D\u3001\u9608\u503C\u548C\u7B97\u6CD5\u9700\u63A5\u5165\u540E\u786E\u8BA4\u3002\u7ED3\u6784\u5C3A\u5BF8\u4E0E\u5065\u5EB7\u6307\u6570\u672A\u63D0\u4F9B\u7684\u9879\u76EE\u4FDD\u6301\u7A7A\u503C\u3002\u7528\u6237\u4FE1\u606F\u548C\u7EF4\u62A4\u8BB0\u5F55\u6CBF\u7528\u5BA2\u6237\u9875\u9762\u5C55\u793A\uFF0C\u7F16\u8F91\u3001\u5BFC\u5165\u53CA\u62A5\u544A\u4EC5\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u4F1A\u8BDD\u5185\u751F\u6548\uFF0C\u4E0D\u6D89\u53CA\u8D26\u53F7\u6743\u9650\u6216\u7EF4\u62A4\u4E1A\u52A1\u670D\u52A1\u3002</p><details class="system-diagnostics"><summary>\u8BCA\u65AD\u5DE5\u5177</summary><label class="form-field">\u6570\u636E\u573A\u666F<select class="select" id="scenario" aria-label="\u6570\u636E\u573A\u666F"><option value="typical" ${A.scenario==="typical"?"selected":""}>\u5178\u578B\u5DE5\u51B5</option><option value="normal" ${A.scenario==="normal"?"selected":""}>\u6B63\u5E38\u5DE5\u51B5</option><option value="sensor" ${A.scenario==="sensor"?"selected":""}>\u91C7\u96C6\u5361 B \u79BB\u7EBF</option><option value="network" ${A.scenario==="network"?"selected":""}>\u6570\u636E\u94FE\u8DEF\u4E2D\u65AD</option></select></label><div class="foot-actions">${Et("\u4E2D\u65AD\u6570\u636E","simulate-network",{compact:!0})}${Et("\u6062\u590D\u6570\u636E","restore-network",{compact:!0})}</div></details>`,Et("\u5173\u95ED","close-modal",{primary:!0}))}function Hp(){let i=dn(A.selected),e=ji();Zt={type:"point",id:i.id},ai(`${i.id} \xB7 \u6D4B\u70B9\u8BE6\u60C5`,`<div class="key-values"><div><span>\u5B89\u88C5\u90E8\u4F4D</span><strong>${i.name}</strong></div><div><span>\u5361\u4E0E\u901A\u9053</span><strong>${i.card} / CH${String(i.channel).padStart(2,"0")}</strong></div><div><span>\u5F53\u524D\u503C</span><strong class="mono">${za(i)} \u03BC\u03B5</strong></div><div><span>\u6570\u636E\u8D28\u91CF</span><strong>${i.quality==="valid"?"\u6709\u6548":i.quality==="stale"?"\u8FC7\u671F / \u7F13\u5B58":"\u65E0\u6709\u6548\u6837\u672C"}</strong></div><div><span>\u9884\u8B66\u4E0A\u4E0B\u9650</span><strong>${e.lowWarning} / ${e.highWarning} \u03BC\u03B5</strong></div><div><span>\u62A5\u8B66\u4E0A\u4E0B\u9650</span><strong>${e.lowAlarm} / ${e.highAlarm} \u03BC\u03B5</strong></div><div><span>\u91C7\u6837\u9891\u7387\u3001\u6865\u8DEF\u4E0E\u91CF\u7A0B</span><strong>\u672A\u914D\u7F6E</strong></div><div><span>GLB \u4F4D\u7F6E</span><strong>\u672A\u7ED1\u5B9A</strong></div></div><div style="margin-top:17px">${i.quality==="valid"?Qy(i.id):'<p class="muted">\u5F53\u524D\u6CA1\u6709\u6709\u6548\u5B9E\u65F6\u6CE2\u5F62\u3002</p>'}</div><p>\u8BE5\u90E8\u4F4D\u540D\u79F0\u4E0E\u4E09\u7EF4\u4F4D\u7F6E\u4EC5\u8868\u8FBE\u7ED1\u5B9A\u4EA4\u4E92\uFF0C\u5B9E\u9645\u6D4B\u70B9\u4EE5\u7532\u65B9\u70B9\u8868\u548C\u7ED3\u6784\u56FE\u7EB8\u4E3A\u51C6\u3002</p>`,`${Et("\u5386\u53F2\u66F2\u7EBF","point-history",{icon:"trend"})}${Et("\u914D\u7F6E\u9608\u503C","point-rule",{primary:!0,icon:"sliders"})}`)}function Vp(i){let e=A.alarms.find(t=>t.id===i);e&&(Zt={type:"alarm",id:i},ai("\u8D8A\u9650\u4E8B\u4EF6 "+e.id,`<div class="detail-title"><h3>${e.pointId} \xB7 ${e.name}</h3>${bn(Uh[e.level],e.level==="alarm"?"red":"amber")}</div><div class="key-values" style="margin:19px 0"><div><span>\u89E6\u53D1\u503C</span><strong class="mono">${e.value.toFixed(1)} \u03BC\u03B5</strong></div><div><span>\u89E6\u53D1\u9608\u503C / \u7248\u672C</span><strong>${e.threshold} \u03BC\u03B5 / v${e.ruleVersion}</strong></div><div><span>\u89E6\u53D1\u65F6\u95F4</span><strong>${Ki(e.time)}</strong></div><div><span>\u6062\u590D\u65F6\u95F4</span><strong>${e.recovered?Ki(e.recoverTime):"\u6D3B\u52A8\u8D8A\u9650"}</strong></div><div><span>\u786E\u8BA4\u72B6\u6001</span><strong>${e.acknowledged?"\u5DF2\u786E\u8BA4":"\u5F85\u786E\u8BA4"}</strong></div><div><span>\u6570\u636E\u6765\u6E90</span><strong>\u9608\u503C\u76D1\u6D4B</strong></div></div><label class="form-field">\u786E\u8BA4\u5907\u6CE8<textarea class="input" id="alarm-remark" rows="3" placeholder="\u8BB0\u5F55\u6392\u67E5\u610F\u89C1\u6216\u5904\u7F6E\u8BF4\u660E" ${e.acknowledged?"readonly":""}>${Yn(e.remark)}</textarea></label><p style="margin-top:10px">\u4E8B\u4EF6\u786E\u8BA4\u540E\u4ECD\u4FDD\u7559\u7269\u7406\u8D8A\u9650\u72B6\u6001\uFF0C\u6062\u590D\u65F6\u95F4\u6309\u6D4B\u70B9\u5B9E\u9645\u56DE\u843D\u5230\u6709\u6548\u533A\u95F4\u8BB0\u5F55\u3002</p>`,`${Et("\u4E09\u7EF4\u5B9A\u4F4D","modal-alarm-locate",{icon:"focus"})}${Et(e.acknowledged?"\u5DF2\u786E\u8BA4":"\u786E\u8BA4\u5E76\u7559\u5B58\u5907\u6CE8","confirm-alarm",{primary:!0,disabled:e.acknowledged,icon:"check"})}`))}function Ip(i){let e=ji(i),t=dn(i);Zt={type:"rule",id:i},ai(`${i} \xB7 \u9608\u503C\u89C4\u5219`,`<div class="notice warning">${St("alert")}<span>${t.name} \xB7 \u4EE5\u4E0B\u503C\u4EC5\u4F9B\u4EA4\u4E92\u6F14\u793A\uFF0C\u751F\u4EA7\u9608\u503C\u7531\u7532\u65B9\u786E\u8BA4\u3002</span></div><form id="rule-form"><div class="form-grid">${[["lowAlarm","\u62A5\u8B66\u4E0B\u9650"],["lowWarning","\u9884\u8B66\u4E0B\u9650"],["highWarning","\u9884\u8B66\u4E0A\u9650"],["highAlarm","\u62A5\u8B66\u4E0A\u9650"]].map(([n,s])=>`<label class="form-field">${s} / \u03BC\u03B5<input type="number" class="input" id="rule-${n}" name="${n}" value="${e[n]}" required step="0.1"></label>`).join("")}</div><p style="margin-top:15px">\u6570\u503C\u987B\u6EE1\u8DB3 \u62A5\u8B66\u4E0B\u9650 &lt; \u9884\u8B66\u4E0B\u9650 &lt; \u9884\u8B66\u4E0A\u9650 &lt; \u62A5\u8B66\u4E0A\u9650\u3002\u89C4\u5219\u7248\u672C\u5C06\u5728\u4FDD\u5B58\u540E\u66F4\u65B0\u3002</p><p class="text-red" id="rule-error" role="alert" style="margin-top:10px"></p><button type="submit" hidden>\u4FDD\u5B58</button></form>`,`${Et("\u53D6\u6D88","close-modal")}${Et("\u4FDD\u5B58\u89C4\u5219","save-rule",{primary:!0})}`)}function cM(){Zt={type:"contract"};let i={schemaVersion:"prototype-0.1",input:{timestamp:"ISO-8601",pointIds:mt.map(e=>e.id),strain:"float[16]\uFF0C\u5355\u4F4D\u03BC\u03B5\uFF0C\u987A\u5E8F\u6309\u6620\u5C04\u8868",quality:"valid[16]\uFF0C\u8FC7\u671F\u6216\u7F3A\u5931\u65F6\u8FD4\u56DE\u65E0\u6548"},output:{modelVersion:"\u7531\u6821\u65B9\u63D0\u4F9B",inputBatchId:"\u8F93\u5165\u6279\u6B21",condition:"\u5DE5\u51B5\u6807\u8BC6",stress_mpa:"\u793A\u4F8B\u8F93\u51FA\u5B57\u6BB5\uFF0C\u9700\u786E\u8BA4",displacement_mm:"\u793A\u4F8B\u8F93\u51FA\u5B57\u6BB5\uFF0C\u9700\u786E\u8BA4",meshRef:"\u524D\u7AEF\u53EF\u52A0\u8F7D\u7684\u7ED3\u679C\u7F51\u683C / \u8D44\u6E90\u5F15\u7528",validity:"\u6709\u6548\u57DF\u4E0E\u5F02\u5E38\u4FE1\u606F"}};ai("\u6A21\u578B\u63A5\u53E3\u914D\u7F6E",`<p>\u4EE5\u4E0B\u7ED3\u6784\u7528\u4E8E\u53CC\u65B9\u8BA8\u8BBA\u5B57\u6BB5\u4E0E\u6620\u5C04\u3002\u6A21\u578B\u6267\u884C\u65B9\u5F0F\u3001\u8F93\u51FA\u91CF\u7EB2\u548C\u6709\u6548\u57DF\u987B\u7531\u63D0\u4F9B\u65B9\u786E\u8BA4\u3002</p><pre class="terminal" style="max-height:420px;margin-top:15px;white-space:pre-wrap">${Yn(JSON.stringify(i,null,2))}</pre>`,`${Et("\u5BFC\u51FA\u63A5\u53E3\u914D\u7F6E","export-contract",{icon:"download"})}${Et("\u5173\u95ED","close-modal")}`,!0)}function uM(){Zt={type:"platform"},ai("\u592A\u91CD\u5E73\u53F0\u8DF3\u8F6C\u914D\u7F6E",`<p>\u914D\u7F6E\u9879\u76EE\u5173\u8054\u5E73\u53F0\u7684\u5B9E\u9645\u5185\u7F51 URL\uFF0C\u4F7F\u7528\u65B0\u7684\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u6253\u5F00\u3002\u5730\u5740\u7531\u7532\u65B9\u63D0\u4F9B\uFF0C\u5F53\u524D\u4F1A\u8BDD\u4E2D\u4FDD\u5B58\u3002</p><label class="form-field" style="margin-top:17px">\u5E73\u53F0\u5730\u5740<input class="input" id="external-url" type="url" placeholder="https://\u5B9E\u9645\u5185\u7F51\u5E73\u53F0\u5730\u5740/" value="${Yn(A.externalUrl)}"></label><p id="external-error" role="alert" style="margin-top:9px;color:var(--red)"></p>`,`${Et("\u53D6\u6D88","close-modal")}${Et("\u4FDD\u5B58\u5E76\u6253\u5F00","save-platform",{primary:!0,icon:"external"})}`)}function Sr(i,e,t="text/plain;charset=utf-8"){let n=new Blob([e],{type:t}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=i,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3),wt("\u5DF2\u5BFC\u51FA "+i)}function oc(i){return"\uFEFF"+i.map(e=>e.map(t=>'"'+String(t??"").replace(/"/g,'""')+'"').join(",")).join(`\r
`)}function Gp(){let i=new Date(A.historyFrom+"+08:00"),e=new Date(A.historyTo+"+08:00"),t=parseInt(A.historyGranularity,10),n=Math.floor((e-i)/1e3/t)+1,s=A.historyPoints.map(a=>lc(a)),r=[["\u65F6\u95F4\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09","\u6D4B\u70B9","\u5E94\u53D8\u503C\u03BC\u03B5\uFF08\u6F14\u793A\uFF09","\u6570\u636E\u6765\u6E90"]];for(let a=0;a<n;a++){let o=new Date(i.getTime()+a*t*1e3).toLocaleString("sv-SE",{timeZone:"Asia/Shanghai"});A.historyPoints.forEach((l,c)=>r.push([o,l,s[c][a].toFixed(2),"\u6D4F\u89C8\u5668\u6F14\u793A\u6570\u636E"]))}Sr("MindEdge-\u5386\u53F2\u5E94\u53D8.csv",oc(r),"text/csv;charset=utf-8")}function ka(i,e="info"){A.modelLogs.push({time:Ki(),text:i,type:e})}function Wp({quiet:i=!1,renderResult:e=!i}={}){if(!A.modelReady)return i||wt("\u8BF7\u5148\u90E8\u7F72\u6A21\u578B"),null;if(!mt.every(l=>l.quality==="valid"&&Number.isFinite(l.value)))return i||wt("\u8F93\u5165\u6570\u636E\u5F02\u5E38\uFF0C\u8BA1\u7B97\u5DF2\u6682\u505C"),null;let t=mt.reduce((l,c)=>Math.abs(c.value)>Math.abs(l.value)?c:l,mt[0]),n=Math.sqrt(mt.reduce((l,c)=>l+c.value*c.value,0)/mt.length),s=Number((Math.abs(t.value)*.36+n*.075+A.operation.load*6).toFixed(1)),r=Number((n*.0085+A.operation.load*.48).toFixed(2)),a=[...A.modelResult?.stressHistory||[],s].slice(-121),o=[...A.modelResult?.stressSamples||[],{time:A.time.getTime(),value:s}].slice(-121);return A.modelResult={time:new Date(A.time),batch:"BATCH-"+String(++A.modelRunCount).padStart(6,"0"),version:A.deployedVersion,stress:s,displacement:r,load:A.operation.load,phase:A.operation.phase,phaseLabel:A.operation.phaseLabel,inputPointIds:A.inputMap.slice(),inputValues:A.inputMap.map(l=>dn(l).value),peakPoint:t.id,simulationTime:A.sampleElapsed,stressHistory:a,stressSamples:o},i||ka("\u7ED3\u679C\u6279\u6B21\uFF1A"+A.modelResult.batch,"ok"),e&&(A.modelTab="results",A.resultMode="proxy",it()),i||wt("\u8BA1\u7B97\u7ED3\u679C\u5DF2\u751F\u6210\uFF0C\u53EF\u67E5\u770B\u7248\u672C\u548C\u8F93\u5165\u6279\u6B21"),A.modelResult}function hM(){let i=A.modelReady&&A.modelResult&&mt.every(t=>t.quality==="valid"),e={stress:i?A.modelResult.stress.toFixed(1):"\u2014",displacement:i?A.modelResult.displacement.toFixed(2):"\u2014",batch:i?A.modelResult.batch:"\u2014",time:i?Ki(A.modelResult.time):"\u2014",strain:i?za(dn(A.selected)):"\u2014",phase:i?A.modelResult.phaseLabel:"\u2014"};Object.entries(e).forEach(([t,n])=>document.querySelectorAll(`[data-result-${t}]`).forEach(s=>{s.textContent=n}))}function $p(){let i=Zt;if(i?.type!=="rule")return;let e=ji(i.id),t=["lowAlarm","lowWarning","highWarning","highAlarm"],n=t.map(r=>Qe("#rule-"+r).value.trim()),s=n.map(Number);if(n.some(r=>!r)||s.some(r=>!Number.isFinite(r))||!s.every((r,a)=>a===0||s[a-1]<r)){Qe("#rule-error").textContent="\u8BF7\u586B\u5199\u56DB\u4E2A\u6709\u6548\u6570\u503C\uFF0C\u5E76\u6309\u62A5\u8B66\u4E0B\u9650\u3001\u9884\u8B66\u4E0B\u9650\u3001\u9884\u8B66\u4E0A\u9650\u3001\u62A5\u8B66\u4E0A\u9650\u9012\u589E\u3002";return}t.forEach((r,a)=>e[r]=s[a]),e.version++,kn(),Ii(),it(),wt(i.id+" \u89C4\u5219\u5DF2\u66F4\u65B0\u4E3A v"+e.version)}var Xp={"refresh-status":()=>{Ii(),it(),wt("\u72B6\u6001\u5DF2\u5237\u65B0")},"monitor-tab":i=>hn(i.dataset.value),"param-tab":i=>{A.paramTab=i.dataset.value,it()},"focus-structure":()=>{A.structureView="structure",hn("overview")},"home-fea":()=>{A.modelTab="results",A.resultMode="offline",hn("models")},"home-zoom-in":()=>{A.homeZoom=Math.min(1.4,A.homeZoom+.1),Qe(".assembly-image-wrap").style.transform="scale("+A.homeZoom+")"},"home-zoom-out":()=>{A.homeZoom=Math.max(.7,A.homeZoom-.1),Qe(".assembly-image-wrap").style.transform="scale("+A.homeZoom+")"},"home-zoom-reset":()=>{A.homeZoom=1,Qe(".assembly-image-wrap").style.transform="scale(1)"},design:lM,reference:jy,"fea-original":sM,"fea-select":i=>{A.feaIndex=Number(i.dataset.index),it()},"goto-videos":()=>{A.modelTab="videos",Yt.setView("videos"),A.page==="models"?it():hn("models")},"video-select":i=>{A.videoIndex=Number(i.dataset.index),it()},"download-video":()=>{let i=Lh[A.videoIndex],e=document.createElement("a");e.href=i.url,e.download=i.name+".mp4",e.click()},"scene-view":i=>{A.structureView=i.dataset.value,Zt?.type==="structure"?ac():it()},"close-modal":kn,"point-detail":Hp,"contract-example":cM,pause:()=>{A.paused=!A.paused,it(),wt(A.paused?"\u5237\u65B0\u5DF2\u6682\u505C":"\u5237\u65B0\u5DF2\u6062\u590D")},"reset-model":()=>Ht?.reset(),"front-model":()=>Ht?.viewFront(),"wire-model":()=>Ht?.wireframe(),"equipment-zoom-in":()=>Ht?.zoom(.85),"equipment-zoom-out":()=>Ht?.zoom(1.18),"import-glb":()=>{(Zt?.type!=="structure"||A.structureView!=="structure")&&(A.structureView="structure",ac()),Qe("#glb-file").click()},snapshot:()=>Sr("MindEdge-\u76D1\u6D4B\u5FEB\u7167.json",JSON.stringify({type:"\u4EA4\u4E92\u539F\u578B\u6A21\u62DF\u6570\u636E",time:A.time,scenario:A.scenario,points:mt,thresholdRules:Nh,model:{ready:A.modelReady,version:A.deployedVersion,result:A.modelResult}},null,2),"application/json"),"point-history":()=>{A.historyPoints=[A.selected],A.historyQueried=!0,kn(),hn("history")},"point-rule":()=>{let i=A.selected;kn(),A.paramTab="thresholds",hn("params"),Ip(i)},"toggle-history-point":i=>{let e=i.dataset.pointId,t=A.historyPoints.indexOf(e);if(t>=0)A.historyPoints.splice(t,1);else if(A.historyPoints.length<4)A.historyPoints.push(e);else{wt("\u6700\u591A\u9009\u62E9 4 \u4E2A\u6D4B\u70B9\u8FDB\u884C\u540C\u5C4F\u6BD4\u8F83");return}A.historyQueried=!1,it()},"query-history":()=>{let i=Qe("#history-from").value,e=Qe("#history-to").value;if(!i||!e||i>=e){wt("\u8BF7\u9009\u62E9\u6709\u6548\u65F6\u6BB5\uFF0C\u7ED3\u675F\u65F6\u95F4\u9700\u665A\u4E8E\u5F00\u59CB\u65F6\u95F4");return}if(!A.historyPoints.length){wt("\u8BF7\u81F3\u5C11\u9009\u62E9 1 \u4E2A\u6D4B\u70B9");return}if(((new Date(e)-new Date(i))/1e3/parseInt(A.historyGranularity,10)+1)*A.historyPoints.length>1e4){wt("\u5355\u6B21\u5BFC\u51FA\u6700\u591A 10,000 \u884C\uFF0C\u8BF7\u7F29\u5C0F\u65F6\u6BB5\u6216\u589E\u5927\u805A\u5408\u95F4\u9694");return}A.historyFrom=i,A.historyTo=e,A.historyQueried=!0,it(),wt("\u67E5\u8BE2\u5B8C\u6210")},"export-history":()=>{if(!A.historyQueried){wt("\u8BF7\u5148\u6309\u5F53\u524D\u6761\u4EF6\u67E5\u8BE2");return}Gp()},"alarm-tab":i=>{A.alarmTab=i.dataset.value,it()},"filter-alarm":i=>{A.alarmFilter=i.dataset.value,it()},"alarm-detail":i=>Vp(i.dataset.id),"locate-alarm":i=>{let e=A.alarms.find(t=>t.id===i.dataset.id);e&&(A.selected=e.pointId,A.structureView="structure",hn("overview"),wt("\u5DF2\u5B9A\u4F4D "+e.pointId+" \xB7 "+e.name))},"history-locate":i=>{A.selected=i.dataset.pointId,A.structureView="structure",hn("overview")},"modal-alarm-locate":()=>{let i=A.alarms.find(e=>e.id===Zt?.id);i&&(A.selected=i.pointId,A.structureView="structure",kn(),hn("overview"))},"confirm-alarm":()=>{let i=A.alarms.find(e=>e.id===Zt?.id);!i||i.acknowledged||(i.acknowledged=!0,i.remark=Qe("#alarm-remark").value.trim(),kn(),it(),wt("\u4E8B\u4EF6\u5DF2\u786E\u8BA4"))},"edit-rule":i=>Ip(i.dataset.pointId),"save-rule":$p,"toggle-rule":i=>{let e=ji(i.dataset.pointId);e.enabled=!e.enabled,e.version++,Ii(),it(),wt(e.pointId+" \u89C4\u5219\u5DF2"+(e.enabled?"\u542F\u7528":"\u505C\u7528"))},"export-alarms":()=>Sr("MindEdge-\u544A\u8B66\u4E8B\u4EF6.csv",oc([["\u4E8B\u4EF6","\u6D4B\u70B9","\u5B89\u88C5\u90E8\u4F4D","\u7B49\u7EA7","\u89E6\u53D1\u503C\u03BC\u03B5","\u9608\u503C\u03BC\u03B5","\u89E6\u53D1\u65F6\u95F4","\u6062\u590D\u72B6\u6001","\u786E\u8BA4\u72B6\u6001","\u5907\u6CE8"],...Up().map(i=>[i.id,i.pointId,i.name,Uh[i.level],i.value,i.threshold,i.time.toISOString(),i.recovered?"\u5DF2\u6062\u590D":"\u6D3B\u52A8\u8D8A\u9650",i.acknowledged?"\u5DF2\u786E\u8BA4":"\u5F85\u786E\u8BA4",i.remark])]),"text/csv;charset=utf-8"),"model-tab":i=>{A.modelTab=i.dataset.value,it()},"result-mode":i=>{A.resultMode=i.dataset.value,it()},"goto-deployment":()=>{A.modelTab="deployment",Yt.setView("model"),A.page==="models"?it():hn("models")},"goto-connections":()=>hn("connections"),"load-sample-model":()=>{A.modelFile="a-frame-surrogate.onnx",A.modelVersion=A.modelVersion||"1.0.0",A.modelStatus="loaded",A.modelStep=1,A.validation=null,ka("\u6A21\u578B\u914D\u7F6E\u5DF2\u8F7D\u5165\uFF0C\u8F93\u5165\u901A\u9053\u6570\uFF1A16\u3002"),it(),wt("\u6A21\u578B\u914D\u7F6E\u5DF2\u8F7D\u5165")},"validate-model":()=>{let i=Qe("#model-version").value.trim();A.modelVersion=i;let e=new Set(A.inputMap).size===16&&A.inputMap.every(r=>dn(r)),t=A.inputMap.every(r=>dn(r).quality==="valid"),n=/^[A-Za-z0-9][A-Za-z0-9._-]{1,50}$/.test(i),s=[];n||s.push("\u8BF7\u586B\u5199\u6709\u6548\u7248\u672C\u53F7\uFF0C\u5982 1.0.0"),e||s.push("16\u8DEF\u6620\u5C04\u9700\u5B8C\u6574\u4E14\u552F\u4E00\uFF0C\u68C0\u6D4B\u5230\u91CD\u590D\u6216\u7F3A\u9879"),t||s.push("\u8F93\u5165\u5305\u542B\u7F3A\u5931\u6216\u8FC7\u671F\u6570\u636E\uFF0C\u8BF7\u5148\u6062\u590D\u94FE\u8DEF"),A.validation={ok:!s.length,message:s.length?s.join("\u3002"):"\u8F93\u5165\u914D\u7F6E\u6821\u9A8C\u901A\u8FC7\uFF1A16\u8DEF\u6620\u5C04\u5B8C\u6574\u4E14\u552F\u4E00\uFF0C\u6570\u636E\u6709\u6548\u3002"},A.modelStep=s.length?1:2,A.modelStatus=s.length?"loaded":"validated",ka(A.validation.message,s.length?"error":"ok"),it()},"deploy-model":()=>{if(!A.validation?.ok){wt("\u8BF7\u5148\u5B8C\u6210\u6821\u9A8C\u914D\u7F6E");return}if(!mt.every(i=>i.quality==="valid")){A.validation=null,it(),wt("\u8F93\u5165\u8D28\u91CF\u5DF2\u53D8\u5316\uFF0C\u8BF7\u6062\u590D\u6570\u636E\u540E\u91CD\u65B0\u6821\u9A8C");return}A.previousVersion=A.modelReady?A.deployedVersion:null,A.deployedVersion=A.modelVersion,A.modelReady=!0,A.modelStatus="running",A.modelStep=3,A.modelResult=null,ka("\u6D3B\u52A8\u7248\u672C\u5DF2\u5207\u6362\u81F3 "+A.modelVersion,"ok"),it(),wt("\u6A21\u578B\u7248\u672C\u5DF2\u66F4\u65B0")},"run-model":()=>{A.modelReady&&mt.every(i=>i.quality==="valid")&&Yt.setView("model-results"),Wp()},"rollback-model":()=>{if(!A.previousVersion)return;let i=A.deployedVersion;A.modelVersion=A.previousVersion,A.deployedVersion=A.previousVersion,A.previousVersion=i,A.modelResult=null,ka("\u7248\u672C\u5DF2\u56DE\u6EDA\u81F3 "+A.modelVersion,"ok"),it(),wt("\u6A21\u578B\u7248\u672C\u5DF2\u56DE\u6EDA")},"conn-tab":i=>{A.connTab=i.dataset.value,it()},"simulate-network":()=>{A.scenario="network",Ii(),it(),wt("\u5DF2\u6A21\u62DF\u540E\u7AEF\u94FE\u8DEF\u4E2D\u65AD\uFF0C\u5B9E\u65F6\u503C\u4E0E\u6A21\u578B\u7ED3\u679C\u6682\u505C")},"restore-network":()=>{A.scenario="typical",Ii(),it(),wt("\u94FE\u8DEF\u72B6\u6001\u5DF2\u6062\u590D\uFF0C\u771F\u5B9E\u8865\u4F20\u673A\u5236\u9700\u540E\u7AEF\u9A8C\u8BC1")},"external-platform":uM,"save-platform":()=>{let i=Qe("#external-url").value.trim(),e;try{if(e=new URL(i),!["http:","https:"].includes(e.protocol)||e.username||e.password)throw new Error}catch{Qe("#external-error").textContent="\u8BF7\u586B\u5199\u6709\u6548\u7684 http \u6216 https \u5E73\u53F0\u5730\u5740\uFF0C\u5730\u5740\u4E2D\u52FF\u5305\u542B\u767B\u5F55\u51ED\u636E\u3002";return}A.externalUrl=e.href,window.open(A.externalUrl,"_blank","noopener,noreferrer"),kn(),wt("\u5DF2\u6253\u5F00\u914D\u7F6E\u7684\u5E73\u53F0\u5730\u5740")},"export-points":()=>Sr("MindEdge-16\u6D4B\u70B9\u6620\u5C04-\u5F85\u786E\u8BA4.csv",oc([["\u6D4B\u70B9","\u91C7\u96C6\u5361","\u901A\u9053","\u5B89\u88C5\u90E8\u4F4D","\u5B9E\u9645\u4F4D\u7F6E","\u91C7\u6837\u9891\u7387","\u6865\u8DEF\u4E0E\u91CF\u7A0B","GLB\u951A\u70B9","\u5907\u6CE8"],...mt.map(i=>[i.id,i.card,i.channel,i.name,"\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u5F53\u524D\u4E3A\u539F\u578B\u5360\u4F4D"])]),"text/csv;charset=utf-8"),"export-contract":()=>Sr("MindEdge-\u6A21\u578B\u63A5\u53E3.json",JSON.stringify({type:"\u8BA8\u8BBA\u6837\u4F8B\uFF0C\u5F85\u6821\u65B9\u786E\u8BA4",input:{timestamp:"ISO-8601",pointIds:mt.map(i=>i.id),strain:"float[16]\uFF0C\u03BC\u03B5",quality:"string[16]"},output:{modelVersion:"string",inputBatchId:"string",condition:"string",stress_mpa:"number\uFF0C\u9700\u786E\u8BA4",displacement_mm:"number\uFF0C\u9700\u786E\u8BA4",meshRef:"\u8D44\u6E90\u5F15\u7528\uFF0C\u9700\u786E\u8BA4",validity:"\u6A21\u578B\u6709\u6548\u57DF\uFF0C\u9700\u786E\u8BA4"}},null,2),"application/json")};document.addEventListener("click",i=>{let e=i.target.closest("#nav a");if(e){i.preventDefault();let r=Ih.find(a=>e.getAttribute("href")==="#"+Cs[a[0]])?.[0];r==="models"&&Yt.setView("business"),r&&hn(r);return}let t=i.target.closest("[data-point]");if(t){zp(t.dataset.point);return}let n=i.target.closest("[data-route]");if(n){hn(n.dataset.route);return}let s=i.target.closest("[data-action]");s&&!s.disabled&&Xp[s.dataset.action]?.(s),i.target===Qe("#modal")&&kn()});document.addEventListener("submit",i=>{i.target.id==="rule-form"&&(i.preventDefault(),$p())});document.addEventListener("keydown",i=>{if(!Qe("#modal").hidden){if(i.key==="Escape"){kn();return}if(i.key==="Tab"){let e=[...Qe("#modal").querySelectorAll("button:not([disabled]),input,select,textarea")].filter(t=>t.offsetParent!==null);if(!e.length)return;i.shiftKey&&document.activeElement===e[0]?(i.preventDefault(),e.at(-1).focus()):!i.shiftKey&&document.activeElement===e.at(-1)&&(i.preventDefault(),e[0].focus())}}});function qp(){A.validation=null,A.modelStep>1&&(A.modelStep=1)}document.addEventListener("change",async i=>{let e=i.target;if(!await Yt.change(e)){if(e.id==="scenario"){A.scenario=e.value,Ii(),it();return}if(e.id==="history-from"){A.historyFrom=e.value,A.historyQueried=!1,it();return}if(e.id==="history-to"){A.historyTo=e.value,A.historyQueried=!1,it();return}if(e.id==="history-granularity"){A.historyGranularity=e.value,A.historyQueried=!1,it();return}if(e.id==="alarm-period"){A.alarmPeriod=e.value,it();return}if(e.id==="result-condition"){A.resultCondition=e.value,it();return}if(e.id==="result-point"){A.selected=e.value,it();return}if(e.classList.contains("model-mapping")){A.inputMap[Number(e.dataset.index)]=e.value,qp(),it();return}if(e.id==="glb-file"&&e.files?.[0]){let t=e.files[0];if(!t.name.toLowerCase().endsWith(".glb")||t.size>50*1024*1024){wt("\u8BF7\u9009\u62E9 50 MB \u4EE5\u5185\u7684\u5355\u6587\u4EF6 GLB \u6A21\u578B"),e.value="";return}try{let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895)throw new Error("\u6587\u4EF6\u5934\u65E0\u6548");if(!Ht)throw new Error("\u4E09\u7EF4\u89C6\u56FE\u5C1A\u672A\u5C31\u7EEA\uFF0C\u8BF7\u56DE\u603B\u89C8\u91CD\u8BD5");await Ht.loadGLB(n),A.uploadedGLB=!0,Qe("#model-caption").textContent="\u672C\u5730\u9884\u89C8 \xB7 "+t.name,wt("\u7ED3\u6784\u6A21\u578B\u5DF2\u8F7D\u5165")}catch{wt("GLB\u8F7D\u5165\u5931\u8D25\uFF0C\u8BF7\u4F7F\u7528\u5B8C\u6574\u4E14\u683C\u5F0F\u6709\u6548\u7684\u5355\u6587\u4EF6\u6A21\u578B")}e.value=""}}});document.addEventListener("input",i=>{let e=i.target,t={"alarm-search":"alarmSearch","rule-search":"ruleSearch","point-search":"pointSearch"};if(t[e.id]){let n=e.id,s=e.selectionStart;A[t[n]]=e.value,it();let r=Qe("#"+n);r?.focus(),r?.setSelectionRange(s,s)}if(e.id==="model-version"){A.modelVersion=e.value,qp();let n=document.querySelector('[data-action="deploy-model"]');n&&(n.disabled=!0)}});function dM(){Yt.updateClock(),!A.paused&&(A.tick++,A.scenario!=="network"&&(A.time=new Date,A.sampleElapsed++),Ii(),Yt.refresh(),Ht?.update(mt,A.selected),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=rc()))}var Pp;window.addEventListener("resize",()=>{clearTimeout(Pp),Pp=setTimeout(()=>{A.page==="overview"&&Qe("#overview-chart")&&(Qe("#overview-chart").innerHTML=Jy()),A.page==="history"&&A.historyQueried&&Qe(".full-chart")&&(Qe(".full-chart").innerHTML=Fh(A.historyPoints,{large:!0,history:!0}))},120)});var Yt=Ep({S:A,points:mt,rules:Nh,icon:St,button:Et,tag:bn,escape:Yn,pointById:dn,currentRule:ji,valueText:za,statusName:Uh,fmtTime:Ki,signalSeries:Oh,historySeries:lc,heading:Op,pointOptions:Np,visibleAlarms:Up,finiteElementView:iM,videoLibrary:rM,deploymentView:nM,resultsView:tM,refreshModelResult:hM,topology:aM,pointModal:Hp,alarmModal:Vp,openModal:ai,closeModal:kn,toast:wt,render:it,navigate:hn,runModel:Wp,exportHistory:Gp,download:Sr,csv:oc,updatePoints:Ii,showScene:ac});Object.assign(Xp,Yt.actions,{"customer-monitor-back":()=>hn("overview")});function fM(){let i={"book-open":"book","arrow-up-right":"external","circle-help":"help"};document.querySelectorAll("[data-lucide]").forEach(e=>{e.outerHTML=St(i[e.dataset.lucide])})}for(let i=69;i>=1;i--)A.liveSamples.push({time:A.time.getTime()-i*1e3,elapsed:A.sampleElapsed-i,values:mt.map((e,t)=>Ba(t,A.sampleElapsed-i,"typical"))});fM();Ii();it();Dp=setInterval(dM,1e3);document.addEventListener("error",i=>{i.target.id==="reference-video"&&Qe("#video-status")&&(Qe("#video-status").textContent="\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")},!0);window.addEventListener("pagehide",()=>{clearInterval(Dp),Ht?.dispose()});})();
