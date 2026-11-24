(()=>{var ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},md=0,Cc=1,gd=2;var aa=1,_d=2,js=3,Yn=0,un=1,gn=2,cs=0,Qs=1,Ic=2,Pc=3,Lc=4,vd=5;var hs=100,xd=101,yd=102,Md=103,Sd=104,bd=200,Td=201,Ed=202,wd=203,Dc=204,Nc=205,Ad=206,Rd=207,Cd=208,Id=209,Pd=210,Ld=211,Dd=212,Nd=213,Ud=214,eo=0,to=1,no=2,Ns=3,io=4,so=5,ro=6,ao=7,Uc=0,Od=1,Fd=2,Zn=0,Oc=1,Fc=2,Bc=3,kc=4,zc=5,Hc=6,Vc=7,fc="attached",Bd="detached",Gc=300,us=301,er=302,Lo=303,Do=304,Di=1e3,Rn=1001,Us=1002,Lt=1003,No=1004;var ds=1005;var Ft=1006,tr=1007;var In=1008;var _n=1009,Wc=1010,$c=1011,nr=1012,Uo=1013,zn=1014,En=1015,Hn=1016,Oo=1017,Fo=1018,fs=1020,Xc=35902,qc=35899,Yc=1021,Zc=1022,Pn=1023,hi=1026,Si=1027,Bo=1028,ko=1029,Hi=1030,zo=1031;var Ho=1033,oa=33776,la=33777,ca=33778,ha=33779,Vo=35840,Go=35841,Wo=35842,$o=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Ko=37489,ua=37490,Jo=37491,jo=37808,Qo=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,da=36285,_l=36286;var Qi=2300,es=2301,ja=2302,pc=2303,mc=2400,gc=2401,_c=2402,kd=2500;var Kc=0,fa=1,ir=2,zd=3200;var vl=0,Hd=1,bi="",Rt="srgb",ln="srgb-linear",br="linear",gt="srgb";var Qa=7680;var Vd=519,Gd=512,Wd=513,$d=514,Jc=515,Xd=516,qd=517,jc=518,Qc=519,eh=35044;var th="300 es",Cn=2e3,Os=2001;function Tp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yd(){let i=Fs("canvas");return i.style.display="block",i}var bu={},Bs=null;function Tr(...i){let e="THREE."+i.shift();Bs?Bs("log",e,...i):console.log(e,...i)}function Zd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=Zd(i);let e="THREE."+i.shift();if(Bs)Bs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=Zd(i);let e="THREE."+i.shift();if(Bs)Bs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ji(...i){let e=i.join(" ");e in bu||(bu[e]=!0,He(...i))}function Kd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Jd={[eo]:eo,[no]:ro,[io]:io,[Ns]:so,[to]:to,[ro]:no,[ao]:ao,[so]:Ns},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=1234567,Ls=Math.PI/180,ts=180/Math.PI;function Vn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function wp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ap(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function Rp(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Cp(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function Ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Pp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Lp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dp(i,e){return i+Math.random()*(e-i)}function Np(i){return i*(.5-Math.random())}function Up(i){i!==void 0&&(Tu=i);let e=Tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Op(i){return i*Ls}function Fp(i){return i*ts}function Bp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ih(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function sh(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function rh(i,e){if(e.constructor===Float32Array)return i;let t=xl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var sr={DEG2RAD:Ls,RAD2DEG:ts,generateUUID:Vn,clamp:nt,euclideanModulo:nh,mapLinear:wp,inverseLerp:Ap,lerp:yr,damp:Rp,pingpong:Cp,smoothstep:Ip,smootherstep:Pp,randInt:Lp,randFloat:Dp,randFloatSpread:Np,seededRandom:Up,degToRad:Op,radToDeg:Fp,isPowerOfTwo:Bp,ceilPowerOfTwo:kp,floorPowerOfTwo:ih,setQuaternionFromProperEuler:zp,normalize:rh,denormalize:sh},uh=class uh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uh.prototype.isVector2=!0;var he=uh,en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+v*o}else{l=l*m+d*o,c=c*m+f*o,h=h*m+g*o,u=u*m+v*o;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dh=class dh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kl.copy(this).projectOnVector(e),this.sub(kl)}reflect(e){return this.sub(kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dh.prototype.isVector3=!0;var L=dh,kl=new L,Eu=new en,fh=class fh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],S=s[1],E=s[4],M=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*v+o*S+l*A,r[3]=a*p+o*E+l*w,r[6]=a*m+o*M+l*_,r[1]=c*v+h*S+u*A,r[4]=c*p+h*E+u*w,r[7]=c*m+h*M+u*_,r[2]=d*v+f*S+g*A,r[5]=d*p+f*E+g*w,r[8]=d*m+f*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zl.makeScale(e,t)),this}rotate(e){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;var Ze=fh,zl=new Ze,wu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hp(){let i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:e,whitePoint:n,transfer:br,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var at=Hp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vs,oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Fs("canvas")),vs.width=e.width,vs.height=e.height;let s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vp=0,ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hl(s[a].image)):r.push(Hl(s[a]))}else r=Hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Gp=0,Vl=new L,Bt=class i extends Bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ft,a=In,o=Pn,l=_n,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Vn(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Gc;Bt.DEFAULT_ANISOTROPY=1;var ph=class ph{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(f+1)/2,A=(m+1)/2,w=(h+d)/4,_=(u+v)/4,x=(g+p)/4;return E>M&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=x/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;var xt=ph,lo=class extends Bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends lo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Er=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Po=class Po{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wp,e,$p)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ai.crossVectors(n,yn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ai.crossVectors(n,yn)),Ai.normalize(),Sa.crossVectors(yn,Ai),s[0]=Ai.x,s[4]=Sa.x,s[8]=yn.x,s[1]=Ai.y,s[5]=Sa.y,s[9]=yn.y,s[2]=Ai.z,s[6]=Sa.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],S=n[3],E=n[7],M=n[11],A=n[15],w=s[0],_=s[4],x=s[8],D=s[12],I=s[1],N=s[5],B=s[9],H=s[13],P=s[2],k=s[6],$=s[10],W=s[14],re=s[3],Y=s[7],j=s[11],ie=s[15];return r[0]=a*w+o*I+l*P+c*re,r[4]=a*_+o*N+l*k+c*Y,r[8]=a*x+o*B+l*$+c*j,r[12]=a*D+o*H+l*W+c*ie,r[1]=h*w+u*I+d*P+f*re,r[5]=h*_+u*N+d*k+f*Y,r[9]=h*x+u*B+d*$+f*j,r[13]=h*D+u*H+d*W+f*ie,r[2]=g*w+v*I+p*P+m*re,r[6]=g*_+v*N+p*k+m*Y,r[10]=g*x+v*B+p*$+m*j,r[14]=g*D+v*H+p*W+m*ie,r[3]=S*w+E*I+M*P+A*re,r[7]=S*_+E*N+M*k+A*Y,r[11]=S*x+E*B+M*$+A*j,r[15]=S*D+E*H+M*W+A*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],p=e[11],m=e[15],S=l*f-c*d,E=o*f-c*u,M=o*d-l*u,A=a*f-c*h,w=a*d-l*h,_=a*u-o*h;return t*(v*S-p*E+m*M)-n*(g*S-p*A+m*w)+s*(g*E-v*A+m*_)-r*(g*M-v*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],p=e[14],m=e[15],S=t*o-n*a,E=t*l-s*a,M=t*c-r*a,A=n*l-s*o,w=n*c-r*o,_=s*c-r*l,x=h*v-u*g,D=h*p-d*g,I=h*m-f*g,N=u*p-d*v,B=u*m-f*v,H=d*m-f*p,P=S*H-E*B+M*N+A*I-w*D+_*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/P;return e[0]=(o*H-l*B+c*N)*k,e[1]=(s*B-n*H-r*N)*k,e[2]=(v*_-p*w+m*A)*k,e[3]=(d*w-u*_-f*A)*k,e[4]=(l*I-a*H-c*D)*k,e[5]=(t*H-s*I+r*D)*k,e[6]=(p*M-g*_-m*E)*k,e[7]=(h*_-d*M+f*E)*k,e[8]=(a*B-o*I+c*x)*k,e[9]=(n*I-t*B-r*x)*k,e[10]=(g*w-v*M+m*S)*k,e[11]=(u*M-h*w-f*S)*k,e[12]=(o*D-a*N-l*x)*k,e[13]=(t*N-n*D+s*x)*k,e[14]=(v*E-g*A-p*S)*k,e[15]=(h*A-u*E+d*S)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,p=a*u,m=o*u,S=l*c,E=l*h,M=l*u,A=n.x,w=n.y,_=n.z;return s[0]=(1-(v+m))*A,s[1]=(f+M)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-M)*w,s[5]=(1-(d+m))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(g+E)*_,s[9]=(p-S)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,h=1/o,u=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Os)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Cn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Os)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var je=Po,xs=new L,Un=new je,Wp=new L(0,0,0),$p=new L(1,1,1),Ai=new L,Sa=new L,yn=new L,Ru=new je,Cu=new en,ui=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ui.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xp=0,Iu=new L,ys=new en,ni=new je,ba=new L,hr=new L,qp=new L,Yp=new en,Pu=new L(1,0,0),Lu=new L(0,1,0),Du=new L(0,0,1),Nu={type:"added"},Zp={type:"removed"},Ms={type:"childadded",child:null},Gl={type:"childremoved",child:null},It=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new ui,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new Ze}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Pu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Iu.copy(e).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(hr,ba,this.up):ni.lookAt(ba,hr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(ni),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zp),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new L(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=nh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wl(a,r,e+1/3),this.g=Wl(a,r,e),this.b=Wl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=jd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return at.workingToColorSpace(jt.copy(this),e),Math.round(nt(jt.r*255,0,255))*65536+Math.round(nt(jt.g*255,0,255))*256+Math.round(nt(jt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(jt.copy(this),t);let n=jt.r,s=jt.g,r=jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Rt){at.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,s=jt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(Ta);let n=yr(Ri.h,Ta.h,t),s=yr(Ri.s,Ta.s,t),r=yr(Ri.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new qe;qe.NAMES=jd;var Ar=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ui,this.environmentIntensity=1,this.environmentRotation=new ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},On=new L,ii=new L,$l=new L,si=new L,Ss=new L,bs=new L,Uu=new L,Xl=new L,ql=new L,Yl=new L,Zl=new xt,Kl=new xt,Jl=new xt,li=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),ii.subVectors(n,t),$l.subVectors(e,t);let a=On.dot(On),o=On.dot(ii),l=On.dot($l),c=ii.dot(ii),h=ii.dot($l),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Zl.setScalar(0),Kl.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,n),Jl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zl,r.x),a.addScaledVector(Kl,r.y),a.addScaledVector(Jl,r.z),a}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),ii.subVectors(e,t),On.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),On.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),Xl.subVectors(e,n);let l=Ss.dot(Xl),c=bs.dot(Xl);if(l<=0&&c<=0)return t.copy(n);ql.subVectors(e,s);let h=Ss.dot(ql),u=bs.dot(ql);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ss,a);Yl.subVectors(e,r);let f=Ss.dot(Yl),g=bs.dot(Yl);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(bs,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Uu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Uu,o);let m=1/(p+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),wa.subVectors(this.max,ur),Ts.subVectors(e.a,ur),Es.subVectors(e.b,ur),ws.subVectors(e.c,ur),Ci.subVectors(Es,Ts),Ii.subVectors(ws,Es),qi.subVectors(Ts,ws);let t=[0,-Ci.z,Ci.y,0,-Ii.z,Ii.y,0,-qi.z,qi.y,Ci.z,0,-Ci.x,Ii.z,0,-Ii.x,qi.z,0,-qi.x,-Ci.y,Ci.x,0,-Ii.y,Ii.x,0,-qi.y,qi.x,0];return!jl(t,Ts,Es,ws,wa)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,Ts,Es,ws,wa))?!1:(Aa.crossVectors(Ci,Ii),t=[Aa.x,Aa.y,Aa.z],jl(t,Ts,Es,ws,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ri=[new L,new L,new L,new L,new L,new L,new L,new L],Fn=new L,Ea=new cn,Ts=new L,Es=new L,ws=new L,Ci=new L,Ii=new L,qi=new L,ur=new L,wa=new L,Aa=new L,Yi=new L;function jl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Yi.fromArray(i,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ut=new L,Ra=new he,Jp=0,Yt=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=e!==void 0?xl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rh(e,this.array)}};var Rr=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cr=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ft=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},jp=new cn,dr=new L,Ql=new L,dn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Ql)),this.expandByPoint(dr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qp=0,An=new je,ec=new It,As=new L,Mn=new cn,fr=new cn,$t=new L,Dt=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tp(e)?Cr:Rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Mn.min,fr.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,fr.max),Mn.expandByPoint($t)):(Mn.expandByPoint(fr.min),Mn.expandByPoint(fr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),$t.add(As)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;let h=new L,u=new L,d=new L,f=new he,g=new he,v=new he,p=new L,m=new L;function S(D,I,N){c[D]=c[I]=c[N]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(B),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(B),o[D].add(p),o[I].add(p),o[N].add(p),l[D].add(m),l[I].add(m),l[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,I=E.length;D<I;++D){let N=E[D],B=N.start,H=N.count;for(let P=B,k=B+H;P<k;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new L,A=new L,w=new L,_=new L;function x(D){w.fromBufferAttribute(s,D),_.copy(w);let I=o[D];M.copy(I),M.sub(w.multiplyScalar(w.dot(I))).normalize(),A.crossVectors(_,I);let B=A.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,B)}for(let D=0,I=n.count;D<I;++D)c[D]&&x(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Yt(d,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ou(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ou(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ou(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Vn()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var on=new L,Vs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?xl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):sh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):rh(e,this.data.array)}},tc=new L,em=new L,tm=new Ze,Sn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tc.subVectors(n,t).cross(em.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tm.getNormalMatrix(e),s=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nm=0,fn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Qs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ai=new L,nc=new L,Ca=new L,Ia=new L,di=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(nc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Ia.dot(this.direction),l=-Ia.dot(Ca),c=Ia.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nc).addScaledVector(Ca,d),f}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,E=n.z-a.z,M=Math.abs(l),A=Math.abs(c),w=Math.abs(h),_,x,D,I,N,B,H,P,k,$,W,re;if(M>=A&&M>=w?(D=l,B=u,k=g,re=m,l>=0?(_=c,x=h,I=d,N=f,H=v,P=p,$=S,W=E):(_=h,x=c,I=f,N=d,H=p,P=v,$=E,W=S)):A>=w?(D=c,B=d,k=v,re=S,c>=0?(_=h,x=l,I=f,N=u,H=p,P=g,$=E,W=m):(_=l,x=h,I=u,N=f,H=g,P=p,$=m,W=E)):(D=h,B=f,k=p,re=E,h>=0?(_=l,x=c,I=u,N=d,H=g,P=v,$=m,W=S):(_=c,x=l,I=d,N=u,H=v,P=g,$=S,W=m)),D===0)return null;let Y=_/D,j=x/D,ie=1/D,Le=I-Y*B,Ve=N-j*B,Z=H-Y*k,ye=P-j*k,De=$-Y*re,le=W-j*re,ne=De*ye-le*Z,ce=Le*le-Ve*De,Ee=Z*Ve-ye*Le;if(s){if(ne<0||ce<0||Ee<0)return null}else if((ne<0||ce<0||Ee<0)&&(ne>0||ce>0||Ee>0))return null;let Me=ne+ce+Ee;if(Me===0)return null;let Te=ie*(ne*B+ce*k+Ee*re);return(Me>0?Te<0:Te>0)?null:this.at(Te/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fu=new je,Zi=new di,Pa=new dn,Bu=new L,La=new L,Da=new L,Na=new L,ic=new L,Ua=new L,ku=new L,Oa=new L,_t=class extends It{constructor(e=new Dt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ic.fromBufferAttribute(u,e),a?Ua.addScaledVector(ic,h):Ua.addScaledVector(ic.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Pa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Pa,Bu)===null||Zi.origin.distanceToSquared(Bu)>(e.far-e.near)**2))&&(Fu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,A=E;M<A;M+=3){let w=o.getX(M),_=o.getX(M+1),x=o.getX(M+2);s=Fa(this,m,e,n,c,h,u,w,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let S=o.getX(p),E=o.getX(p+1),M=o.getX(p+2);s=Fa(this,a,e,n,c,h,u,S,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let M=S,A=E;M<A;M+=3){let w=M,_=M+1,x=M+2;s=Fa(this,m,e,n,c,h,u,w,_,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){let S=p,E=p+1,M=p+2;s=Fa(this,a,e,n,c,h,u,S,E,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function im(i,e,t,n,s,r,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function Fa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Da),i.getVertexPosition(c,Na);let h=im(i,e,t,n,La,Da,Na,ku);if(h){let u=new L;li.getBarycoord(ku,La,Da,Na,u),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,u,new he)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,u,new he)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};li.getNormal(La,Da,Na,d.normal),h.face=d,h.barycoord=u}return h}var pr=new xt,zu=new xt,Hu=new xt,sm=new xt,Vu=new je,Ba=new L,sc=new dn,Gu=new je,rc=new di,Ir=class extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fc,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingBox.expandByPoint(Ba)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ba),this.boundingSphere.expandByPoint(Ba)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(s),e.ray.intersectsSphere(sc)!==!1&&(Gu.copy(s).invert(),rc.copy(e.ray).applyMatrix4(Gu),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bd?this.bindMatrixInverse.copy(this.bindMatrix).invert():He("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;zu.fromBufferAttribute(s.attributes.skinIndex,e),Hu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(pr.copy(t),t.set(0,0,0,0)):(pr.set(t.x,t.y,t.z,1),t.set(0,0,0)),pr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Hu.getComponent(r);if(a!==0){let o=zu.getComponent(r);Vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sm.copy(pr).applyMatrix4(Vu),a)}}return t.isVector4&&(t.w=pr.w),t.applyMatrix4(this.bindMatrixInverse)}},Gs=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ws=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Lt,h=Lt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wu=new je,rm=new je,Pr=class i{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){He("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:rm;Wu.multiplyMatrices(o,t[r]),Wu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ws(t,e,e,Pn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(He("Skeleton: No bone found with UUID:",r),a=new Gs),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},fi=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new je,$u=new je,ka=[],Xu=new cn,am=new je,mr=new _t,gr=new dn,Lr=class extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,am)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Xu.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),gr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),$u.multiplyMatrices(n,Rs),mr.matrixWorld=$u,mr.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new fi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,Bo,En));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new dn,om=new he(.5,.5),za=new L,Ni=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],S=r[12],E=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-g,A-S).normalize(),s[1].setComponents(c+a,f+h,m+g,A+S).normalize(),s[2].setComponents(c+o,f+u,m+v,A+E).normalize(),s[3].setComponents(c-o,f-u,m-v,A-E).normalize(),n)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,f-d,m-p,A-M).normalize();else if(s[4].setComponents(c-l,f-d,m-p,A-M).normalize(),t===Cn)s[5].setComponents(c+l,f+d,m+p,A+M).normalize();else if(t===Os)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){Ki.center.set(0,0,0);let t=om.distanceTo(e.center);return Ki.radius=.7071067811865476+t,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qu=new je,ho=class i{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];qu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ni),n[s].setFromProjectionMatrix(qu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ni),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var pi=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new L,fo=new L,Yu=new je,_r=new di,Ha=new dn,ac=new L,Zu=new L,ns=class extends It{constructor(e=new Dt,t=new pi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new ft(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Yu.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=h.getX(v),S=h.getX(v+1),E=Va(this,e,_r,l,m,S,v);E&&t.push(E)}if(this.isLineLoop){let v=h.getX(g-1),p=h.getX(f),m=Va(this,e,_r,l,v,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,p=g-1;v<p;v+=c){let m=Va(this,e,_r,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){let v=Va(this,e,_r,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Va(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,fo,ac,Zu)>n)return;ac.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ac);if(!(c<e.near||c>e.far))return{distance:c,point:Zu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ku=new L,Ju=new L,Ui=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ku.fromBufferAttribute(t,s),Ju.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ku.distanceTo(Ju);e.setAttribute("lineDistance",new ft(n,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Dr=class extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},$s=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new je,vc=new di,Ga=new dn,Wa=new L,Nr=class extends It{constructor(e=new Dt,t=new $s){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;ju.copy(s).invert(),vc.copy(e.ray).applyMatrix4(ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let p=c.getX(g);Wa.fromBufferAttribute(u,p),Qu(Wa,p,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)Wa.fromBufferAttribute(u,g),Qu(Wa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qu(i,e,t,n,s,r,a){let o=vc.distanceSqToPoint(i);if(o<t){let l=new L;vc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ur=class extends Bt{constructor(e=[],t=us,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Or=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends Bt{constructor(e,t,n=zn,s,r,a,o=Lt,l=Lt,c,h=hi,u=1){if(h!==hi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fr=class extends mi{constructor(e,t=zn,n=us,s,r,a=Lt,o=Lt,l,c=hi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Br=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kn=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(v,p,m,S,E,M,A,w,_,x,D){let I=M/_,N=A/x,B=M/2,H=A/2,P=w/2,k=_+1,$=x+1,W=0,re=0,Y=new L;for(let j=0;j<$;j++){let ie=j*N-H;for(let Le=0;Le<k;Le++){let Ve=Le*I-B;Y[v]=Ve*S,Y[p]=ie*E,Y[m]=P,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(Le/_),u.push(1-j/x),W+=1}}for(let j=0;j<x;j++)for(let ie=0;ie<_;ie++){let Le=d+ie+k*j,Ve=d+ie+k*(j+1),Z=d+(ie+1)+k*(j+1),ye=d+(ie+1)+k*j;l.push(Le,Ve,ye),l.push(Ve,Z,ye),re+=6}o.addGroup(f,re,D),f+=re,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var is=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],p=n/2,m=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function S(){let M=new L,A=new L,w=0,_=(t-e)/n;for(let x=0;x<=r;x++){let D=[],I=x/r,N=I*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,P=H*l+o,k=Math.sin(P),$=Math.cos(P);A.x=N*k,A.y=-I*n+p,A.z=N*$,u.push(A.x,A.y,A.z),M.set(k,_,$).normalize(),d.push(M.x,M.y,M.z),f.push(H,1-I),D.push(g++)}v.push(D)}for(let x=0;x<s;x++)for(let D=0;D<r;D++){let I=v[D][x],N=v[D+1][x],B=v[D+1][x+1],H=v[D][x+1];(e>0||D!==0)&&(h.push(I,N,H),w+=3),(t>0||D!==r-1)&&(h.push(N,B,H),w+=3)}c.addGroup(m,w,0),m+=w}function E(M){let A=g,w=new he,_=new L,x=0,D=M===!0?e:t,I=M===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,p*I,0),d.push(0,I,0),f.push(.5,.5),g++;let N=g;for(let B=0;B<=s;B++){let P=B/s*l+o,k=Math.cos(P),$=Math.sin(P);_.x=D*$,_.y=p*I,_.z=D*k,u.push(_.x,_.y,_.z),d.push(0,I,0),w.x=k*.5+.5,w.y=$*.5*I+.5,f.push(w.x,w.y),g++}for(let B=0;B<s;B++){let H=A+B,P=N+B;M===!0?h.push(P,P+1,H):h.push(P+1,P,H),x+=3}c.addGroup(m,x,M===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $a=new L,Xa=new L,oc=new L,qa=new li,kr=class extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ls*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d=new Map,f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:v,b:p,c:m}=qa;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),qa.getNormal(oc),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let S=0;S<3;S++){let E=(S+1)%3,M=u[S],A=u[E],w=qa[h[S]],_=qa[h[E]],x=`${M}_${A}`,D=`${A}_${M}`,I=d.get(D);I?(oc.dot(I.normal)<=r&&(f.push(w.x,w.y,w.z),f.push(_.x,_.y,_.z)),d.set(D,null)):d.has(x)||d.set(x,{index0:c[S],index1:c[E],normal:oc.clone()})}}for(let g of d.values())if(g){let{index0:v,index1:p}=g;$a.fromBufferAttribute(o,v),Xa.fromBufferAttribute(o,p),f.push($a.x,$a.y,$a.z),f.push(Xa.x,Xa.y,Xa.z)}this.setAttribute("position",new ft(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new je;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(nt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Xs=class extends Tn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},po=class extends Xs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ed=new L,td=new L,lc=new ah,cc=new ah,hc=new ah,mo=class extends Tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(td.subVectors(s[0],s[1]).add(s[0]),c=td);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ed.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ed),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),lc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),cc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),hc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),cc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),hc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function lm(i,e){let t=1-i;return t*t*e}function cm(i,e){return 2*(1-i)*i*e}function hm(i,e){return i*i*e}function Mr(i,e,t,n){return lm(i,e)+cm(i,t)+hm(i,n)}function um(i,e){let t=1-i;return t*t*t*e}function dm(i,e){let t=1-i;return 3*t*t*i*e}function fm(i,e){return 3*(1-i)*i*i*e}function pm(i,e){return i*i*i*e}function Sr(i,e,t,n,s){return um(i,e)+dm(i,t)+fm(i,n)+pm(i,s)}var zr=class extends Tn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends Tn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(e,s.x,r.x,a.x,o.x),Sr(e,s.y,r.y,a.y,o.y),Sr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hr=class extends Tn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends Tn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y),Mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(nd(o,l.x,c.x,h.x,u.x),nd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:po,CatmullRomCurve3:mo,CubicBezierCurve:zr,CubicBezierCurve3:go,EllipseCurve:Xs,LineCurve:Hr,LineCurve3:_o,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:vo,SplineCurve:Gr}),xo=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ss=class extends xo{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Hr(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Vr(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new zr(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Xs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class extends ss{constructor(e){super(e),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ss().fromJSON(s))}return this}};function mm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Qd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ym(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Wr(r,a,t,o,l,c,0),a}function Qd(i,e,t,n,s){let r;if(s===Pm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=id(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=id(a/n|0,i[a],i[a+1],r);return r&&qs(r,r.next)&&(Xr(r),r=r.next),r}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(qs(t,t.next)||Ct(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Em(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_m(i,n,s,r):gm(i)){e.push(l.i,i.i,c.i),Xr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vm(rs(i),e),Wr(i,e,t,n,s,r,2)):a===2&&xm(i,e,t,n,s,r):Wr(rs(i),e,t,n,s,r,1);break}}}function gm(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&vr(s,o,r,l,a,c,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ct(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),p=Math.max(h,u,d),m=yc(f,g,e,t,n),S=yc(v,p,e,t,n),E=i.prevZ,M=i.nextZ;for(;E&&E.z>=m&&M&&M.z<=S;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&vr(o,h,l,u,c,d,E.x,E.y)&&Ct(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&vr(o,h,l,u,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&vr(o,h,l,u,c,d,E.x,E.y)&&Ct(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&vr(o,h,l,u,c,d,M.x,M.y)&&Ct(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!qs(n,s)&&tf(n,t,t.next,s)&&$r(n,s)&&$r(s,n)&&(e.push(n.i,t.i,s.i),Xr(t),Xr(t.next),t=i=s),t=t.next}while(t!==i);return rs(t)}function xm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rm(a,o)){let l=nf(a,o);a=rs(a,a.next),l=rs(l,l.next),Wr(a,e,t,n,s,r,0),Wr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ym(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Qd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Am(c))}s.sort(Mm);for(let r=0;r<s.length;r++)t=Sm(s[r],t);return t}function Mm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Sm(i,e){let t=bm(i,e);if(!t)return e;let n=nf(t,i);return rs(n,n.next),rs(t,t.next)}function bm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(qs(i,t))return t;do{if(qs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ef(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);$r(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Tm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Tm(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Em(i,e,t,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wm(s)}function wm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Am(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ef(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function vr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ef(i,e,t,n,s,r,a,o)}function Rm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cm(i,e)&&($r(i,e)&&$r(e,i)&&Im(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||qs(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function qs(i,e){return i.x===e.x&&i.y===e.y}function tf(i,e,t,n){let s=Za(Ct(i,e,t)),r=Za(Ct(i,e,n)),a=Za(Ct(t,n,i)),o=Za(Ct(t,n,e));return!!(s!==r&&a!==o||s===0&&Ya(i,t,e)||r===0&&Ya(i,n,e)||a===0&&Ya(t,i,n)||o===0&&Ya(t,e,n))}function Ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Za(i){return i>0?1:i<0?-1:0}function Cm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&tf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $r(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Im(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function nf(i,e){let t=Mc(i.i,i.x,i.y),n=Mc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function id(i,e,t,n){let s=Mc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Sc=class{static triangulate(e,t,n=2){return mm(e,t,n)}},Ji=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sd(e),rd(n,e);let a=e.length;t.forEach(sd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,rd(n,t[l]);let o=Sc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var as=class i extends Dt{constructor(e=new Oi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Lm,E,M=!1,A,w,_,x;if(m){E=m.getSpacedPoints(h),M=!0,d=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,Q),w=new L,_=new L,x=new L}d||(p=0,f=0,g=0,v=0);let D=o.extractPoints(c),I=D.shape,N=D.holes;if(!Ji.isClockWise(I)){I=I.reverse();for(let Q=0,de=N.length;Q<de;Q++){let se=N[Q];Ji.isClockWise(se)&&(N[Q]=se.reverse())}}function H(Q){let se=10000000000000001e-36,we=Q[0];for(let ve=1;ve<=Q.length;ve++){let Ke=ve%Q.length,Fe=Q[Ke],rt=Fe.x-we.x,lt=Fe.y-we.y,U=rt*rt+lt*lt,T=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(we.x),Math.abs(we.y)),Ae=se*T*T;if(U<=Ae){Q.splice(Ke,1),ve--;continue}we=Fe}}H(I),N.forEach(H);let P=N.length,k=I;for(let Q=0;Q<P;Q++){let de=N[Q];I=I.concat(de)}function $(Q,de,se){return de||Ye("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(de,se)}let W=I.length;function re(Q,de,se){let we,ve,Ke,Fe=Q.x-de.x,rt=Q.y-de.y,lt=se.x-Q.x,U=se.y-Q.y,T=Fe*Fe+rt*rt,Ae=Fe*U-rt*lt;if(Math.abs(Ae)>Number.EPSILON){let Pe=Math.sqrt(T),We=Math.sqrt(lt*lt+U*U),ae=de.x-rt/Pe,ct=de.y+Fe/Pe,ze=se.x-U/We,Xe=se.y+lt/We,R=((ze-ae)*U-(Xe-ct)*lt)/(Fe*U-rt*lt);we=ae+Fe*R-Q.x,ve=ct+rt*R-Q.y;let y=we*we+ve*ve;if(y<=2)return new he(we,ve);Ke=Math.sqrt(y/2)}else{let Pe=!1;Fe>Number.EPSILON?lt>Number.EPSILON&&(Pe=!0):Fe<-Number.EPSILON?lt<-Number.EPSILON&&(Pe=!0):Math.sign(rt)===Math.sign(U)&&(Pe=!0),Pe?(we=-rt,ve=Fe,Ke=Math.sqrt(T)):(we=Fe,ve=rt,Ke=Math.sqrt(T/2))}return new he(we/Ke,ve/Ke)}let Y=[];for(let Q=0,de=k.length,se=de-1,we=Q+1;Q<de;Q++,se++,we++)se===de&&(se=0),we===de&&(we=0),Y[Q]=re(k[Q],k[se],k[we]);let j=[],ie,Le=Y.concat();for(let Q=0,de=P;Q<de;Q++){let se=N[Q];ie=[];for(let we=0,ve=se.length,Ke=ve-1,Fe=we+1;we<ve;we++,Ke++,Fe++)Ke===ve&&(Ke=0),Fe===ve&&(Fe=0),ie[we]=re(se[we],se[Ke],se[Fe]);j.push(ie),Le=Le.concat(ie)}let Ve;if(p===0)Ve=Ji.triangulateShape(k,N);else{let Q=[],de=[];for(let se=0;se<p;se++){let we=se/p,ve=f*Math.cos(we*Math.PI/2),Ke=g*Math.sin(we*Math.PI/2)+v;for(let Fe=0,rt=k.length;Fe<rt;Fe++){let lt=$(k[Fe],Y[Fe],Ke);ce(lt.x,lt.y,-ve),we===0&&Q.push(lt)}for(let Fe=0,rt=P;Fe<rt;Fe++){let lt=N[Fe];ie=j[Fe];let U=[];for(let T=0,Ae=lt.length;T<Ae;T++){let Pe=$(lt[T],ie[T],Ke);ce(Pe.x,Pe.y,-ve),we===0&&U.push(Pe)}we===0&&de.push(U)}}Ve=Ji.triangulateShape(Q,de)}let Z=Ve.length,ye=g+v;for(let Q=0;Q<W;Q++){let de=d?$(I[Q],Le[Q],ye):I[Q];M?(_.copy(A.normals[0]).multiplyScalar(de.x),w.copy(A.binormals[0]).multiplyScalar(de.y),x.copy(E[0]).add(_).add(w),ce(x.x,x.y,x.z)):ce(de.x,de.y,0)}for(let Q=1;Q<=h;Q++)for(let de=0;de<W;de++){let se=d?$(I[de],Le[de],ye):I[de];M?(_.copy(A.normals[Q]).multiplyScalar(se.x),w.copy(A.binormals[Q]).multiplyScalar(se.y),x.copy(E[Q]).add(_).add(w),ce(x.x,x.y,x.z)):ce(se.x,se.y,u/h*Q)}for(let Q=p-1;Q>=0;Q--){let de=Q/p,se=f*Math.cos(de*Math.PI/2),we=g*Math.sin(de*Math.PI/2)+v;for(let ve=0,Ke=k.length;ve<Ke;ve++){let Fe=$(k[ve],Y[ve],we);ce(Fe.x,Fe.y,u+se)}for(let ve=0,Ke=N.length;ve<Ke;ve++){let Fe=N[ve];ie=j[ve];for(let rt=0,lt=Fe.length;rt<lt;rt++){let U=$(Fe[rt],ie[rt],we);M?ce(U.x,U.y+E[h-1].y,E[h-1].x+se):ce(U.x,U.y,u+se)}}}De(),le();function De(){let Q=s.length/3;if(d){let de=0,se=W*de;for(let we=0;we<Z;we++){let ve=Ve[we];Ee(ve[2]+se,ve[1]+se,ve[0]+se)}de=h+p*2,se=W*de;for(let we=0;we<Z;we++){let ve=Ve[we];Ee(ve[0]+se,ve[1]+se,ve[2]+se)}}else{for(let de=0;de<Z;de++){let se=Ve[de];Ee(se[2],se[1],se[0])}for(let de=0;de<Z;de++){let se=Ve[de];Ee(se[0]+W*h,se[1]+W*h,se[2]+W*h)}}n.addGroup(Q,s.length/3-Q,0)}function le(){let Q=s.length/3,de=0;ne(k,de),de+=k.length;for(let se=0,we=N.length;se<we;se++){let ve=N[se];ne(ve,de),de+=ve.length}n.addGroup(Q,s.length/3-Q,1)}function ne(Q,de){let se=Q.length;for(;--se>=0;){let we=se,ve=se-1;ve<0&&(ve=Q.length-1);for(let Ke=0,Fe=h+p*2;Ke<Fe;Ke++){let rt=W*Ke,lt=W*(Ke+1),U=de+we+rt,T=de+ve+rt,Ae=de+ve+lt,Pe=de+we+lt;Me(U,T,Ae,Pe)}}}function ce(Q,de,se){l.push(Q),l.push(de),l.push(se)}function Ee(Q,de,se){Te(Q),Te(de),Te(se);let we=s.length/3,ve=S.generateTopUV(n,s,we-3,we-2,we-1);Be(ve[0]),Be(ve[1]),Be(ve[2])}function Me(Q,de,se,we){Te(Q),Te(de),Te(we),Te(de),Te(se),Te(we);let ve=s.length/3,Ke=S.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);Be(Ke[0]),Be(Ke[1]),Be(Ke[3]),Be(Ke[1]),Be(Ke[2]),Be(Ke[3])}function Te(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function Be(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xc[s.type]().fromJSON(s)),new i(n,e.options)}},Lm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,a),new he(o,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-u),new he(d,1-g),new he(v,1-m)]:[new he(o,1-l),new he(h,1-u),new he(f,1-g),new he(p,1-m)]}};function Dm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var gi=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let E=0;E<c;E++){let M=E*u-r;g.push(M,-S,0),v.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let E=S+c*m,M=S+c*(m+1),A=S+1+c*(m+1),w=S+1+c*m;f.push(E,M,w),f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qr=class i extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new L,g=new he;for(let v=0;v<=s;v++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let p=v*(n+1);for(let m=0;m<n;m++){let S=m+p,E=S,M=S+n+1,A=S+n+2,w=S+1;o.push(E,M,w),o.push(M,A,w)}}this.setIndex(o),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Yr=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,d=new L,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){let S=[],E=m/n,M=a+E*o,A=e*Math.cos(M),w=Math.sqrt(e*e-A*A),_=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let x=0;x<=t;x++){let D=x/t,I=s+D*r;u.x=-w*Math.cos(I),u.y=A,u.z=w*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(D+_,1-E),S.push(c++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){let E=h[m][S+1],M=h[m][S],A=h[m+1][S],w=h[m+1][S+1];(m!==0||a>0)&&f.push(E,M,w),(m!==n-1||l<Math.PI)&&f.push(M,A,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zr=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new L,f=new L,g=new L;for(let v=0;v<=n;v++){let p=a+v/n*o;for(let m=0;m<=s;m++){let S=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(S),f.y=(e+t*Math.cos(p))*Math.sin(S),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),d.x=e*Math.cos(S),d.y=e*Math.sin(S),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){let m=(s+1)*v+p-1,S=(s+1)*(v-1)+p-1,E=(s+1)*(v-1)+p,M=(s+1)*v+p;l.push(m,S,M),l.push(S,E,M)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ad(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ad(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let s in n)e[s]=n[s]}return e}function ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function oh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var sf={clone:ps,merge:nn},Um=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Um,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Nm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new qe().setHex(s.value);break;case"v2":this.uniforms[n].value=new he().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},yo=class extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hn=class extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Mo=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Li(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Fm(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function od(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Bm(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Xn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=e,o=2*t-n;break;case _c:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:a=e,l=2*n-t;break;case _c:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,S=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*v+.5*g,M=f*p-f*v;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+S*a[c+A]+E*a[l+A]+M*a[u+A];return r}},To=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Eo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wo=class extends Xn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*v+a[l+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],p=a[l+g],m=f*d+g*2,S=u[m],E=u[m+1],M=e*d+g*2,A=h[M],w=h[M+1],_=zm(n,t,S,A,s);r[g]=rf(_,v,E,w,p)}return r}};function rf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function km(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function zm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=rf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=km(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Li(t,this.TimeBufferType),this.values=Li(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Li(e.times,Array),values:Li(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),xr(e.settings)&&(n.settings={inTangents:Li(e.settings.inTangents,Array),outTangents:Li(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qi:t=this.InterpolantFactoryMethodDiscrete;break;case es:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case pc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return es;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;xr(this.settings)&&(ld(this.settings.inTangents,e),ld(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;xr(this.settings)&&(cd(this.settings.inTangents,e),cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ep(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,xr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ld(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=es;var _i=class extends mn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Qi;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="color";var vi=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};vi.prototype.ValueTypeName="number";var Ao=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},xi=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};xi.prototype.ValueTypeName="quaternion";xi.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends mn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Qi;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Fi.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],s=kd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Vn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Vm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(mn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Fm(l);l=od(l,1,h),c=od(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Hm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Fi;case"color":return Kr;case"quaternion":return xi;case"bool":case"boolean":return _i;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Hm(i.type);if(i.times===void 0){let n=[],s=[];Bm(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),xr(i.settings)&&(t.settings={inTangents:Li(i.settings.inTangents,Float32Array),outTangents:Li(i.settings.outTangents,Float32Array)}),t}var Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(hd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!hd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function hd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ro=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},af=new Ro,qn=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var oi={},bc=class extends Error{constructor(e,t){super(e),this.response=t}},Ys=class extends qn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=oi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,p=new ReadableStream({start(m){S();function S(){u.read().then(({done:E,value:M})=>{if(E)m.close();else{v+=M.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let w=0,_=h.length;w<_;w++){let x=h[w];x.onProgress&&x.onProgress(A)}m.enqueue(M),S()}},E=>{m.error(E)})}}});return new Response(p)}else throw new bc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Wn.add(`file:${e}`,c);let h=oi[e];delete oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=oi[e];if(h===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cs=new WeakMap,Co=class extends qn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Cs.get(a);u===void 0&&(u=[],Cs.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Fs("img");function l(){h(),t&&t(this);let u=Cs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Cs.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Wn.remove(`image:${e}`);let d=Cs.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wn.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var jr=class extends qn{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new Co(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},os=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var uc=new je,ud=new L,dd=new L,Zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ud.setFromMatrixPosition(e.matrixWorld),t.position.copy(ud),dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Os||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ka=new L,Ja=new en,Gn=new L,Qr=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Ja,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ka,Ja,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Ja,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new L,fd=new he,pd=new he,Ot=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,fd,pd),t.subVectors(pd,fd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tc=class extends Zs{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ts*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ea=class extends os{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ec=class extends Zs{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},ta=class extends os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ls=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wc=class extends Zs{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bi=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},na=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var dc=new WeakMap,ia=class extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&He("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&He("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{dc.has(a)===!0?(s&&s(dc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),dc.set(l,c),Wn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Is=-90,Ps=1,Ks=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Is,Ps,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Is,Ps,e,t);r.layers=this.layers,this.add(r);let a=new Ot(Is,Ps,e,t);a.layers=this.layers,this.add(a);let o=new Ot(Is,Ps,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Is,Ps,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Is,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Io=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var lh="\\[\\]\\.:\\/",Gm=new RegExp("["+lh+"]","g"),ch="[^"+lh+"]",Wm="[^"+lh.replace("\\.","")+"]",$m=/((?:WC+[\/:])*)/.source.replace("WC",ch),Xm=/(WCOD+)?/.source.replace("WCOD",Wm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ch),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ch),Zm=new RegExp("^"+$m+Xm+qm+Ym+"$"),Km=["material","materials","bones","map"],Ac=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(e){let t=Zm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Ac;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ry=new Float32Array(1);var Js=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mh=class mh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};mh.prototype.isMatrix2=!0;var Rc=mh;var sa=class extends Ui{constructor(e=10,t=10,n=4473924,s=8947848){n=new qe(n),s=new qe(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let v=d===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let h=new Dt;h.setAttribute("position",new ft(l,3)),h.setAttribute("color",new ft(c,3));let u=new pi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var ra=class extends Bn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function hh(i,e,t,n){let s=Jm(n);switch(t){case Yc:return i*e;case Bo:return i*e/s.components*s.byteLength;case ko:return i*e/s.components*s.byteLength;case Hi:return i*e*2/s.components*s.byteLength;case zo:return i*e*2/s.components*s.byteLength;case Zc:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Ho:return i*e*4/s.components*s.byteLength;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:case $o:return Math.max(i,16)*Math.max(e,8)/4;case Vo:case Wo:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case ua:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dl:case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jm(i){switch(i){case _n:case Wc:return{byteLength:1,components:1};case nr:case $c:case Hn:return{byteLength:2,components:1};case Oo:case Fo:return{byteLength:2,components:4};case zn:case Uo:case En:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Rf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tg=`#ifdef USE_ALPHAHASH
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
#endif`,ng=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ig=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
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
#endif`,og=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lg=`#ifdef USE_BATCHING
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
#endif`,cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fg=`#ifdef USE_IRIDESCENCE
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
#endif`,pg=`#ifdef USE_BUMPMAP
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
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ug=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zg=`#ifdef USE_GRADIENTMAP
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
}`,Hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$g=`#ifdef USE_ENVMAP
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
#endif`,Xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kg=`PhysicalMaterial material;
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
#endif`,Jg=`uniform sampler2D dfgLUT;
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
}`,jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,c0=`#if defined( USE_POINTS_UV )
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
#endif`,h0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
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
#endif`,p0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S0=`#ifdef USE_NORMALMAP
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
#endif`,b0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B0=`float getShadowMask() {
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
}`,k0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`uniform float backgroundBlurriness;
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,a_=`#if DEPTH_PACKING == 3200
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
}`,o_=`#define DISTANCE
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
}`,l_=`#define DISTANCE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,d_=`uniform vec3 diffuse;
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
}`,f_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,x_=`#define NORMAL
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
}`,y_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,S_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,T_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,w_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:eg,alphahash_pars_fragment:tg,alphamap_fragment:ng,alphamap_pars_fragment:ig,alphatest_fragment:sg,alphatest_pars_fragment:rg,aomap_fragment:ag,aomap_pars_fragment:og,batching_pars_vertex:lg,batching_vertex:cg,begin_vertex:hg,beginnormal_vertex:ug,bsdfs:dg,iridescence_fragment:fg,bumpmap_pars_fragment:pg,clipping_planes_fragment:mg,clipping_planes_pars_fragment:gg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:xg,color_pars_fragment:yg,color_pars_vertex:Mg,color_vertex:Sg,common:bg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Eg,displacementmap_vertex:wg,emissivemap_fragment:Ag,emissivemap_pars_fragment:Rg,colorspace_fragment:Cg,colorspace_pars_fragment:Ig,envmap_fragment:Pg,envmap_common_pars_fragment:Lg,envmap_pars_fragment:Dg,envmap_pars_vertex:Ng,envmap_physical_pars_fragment:$g,envmap_vertex:Ug,fog_vertex:Og,fog_pars_vertex:Fg,fog_fragment:Bg,fog_pars_fragment:kg,gradientmap_pars_fragment:zg,lightmap_pars_fragment:Hg,lights_lambert_fragment:Vg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Wg,lights_toon_fragment:Xg,lights_toon_pars_fragment:qg,lights_phong_fragment:Yg,lights_phong_pars_fragment:Zg,lights_physical_fragment:Kg,lights_physical_pars_fragment:Jg,lights_fragment_begin:jg,lights_fragment_maps:Qg,lights_fragment_end:e0,lightprobes_pars_fragment:t0,logdepthbuf_fragment:n0,logdepthbuf_pars_fragment:i0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:r0,map_fragment:a0,map_pars_fragment:o0,map_particle_fragment:l0,map_particle_pars_fragment:c0,metalnessmap_fragment:h0,metalnessmap_pars_fragment:u0,morphinstance_vertex:d0,morphcolor_vertex:f0,morphnormal_vertex:p0,morphtarget_pars_vertex:m0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:v0,normal_pars_fragment:x0,normal_pars_vertex:y0,normal_vertex:M0,normalmap_pars_fragment:S0,clearcoat_normal_fragment_begin:b0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:w0,opaque_fragment:A0,packing:R0,premultiplied_alpha_fragment:C0,project_vertex:I0,dithering_fragment:P0,dithering_pars_fragment:L0,roughnessmap_fragment:D0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:O0,shadowmap_vertex:F0,shadowmask_pars_fragment:B0,skinbase_vertex:k0,skinning_pars_vertex:z0,skinning_vertex:H0,skinnormal_vertex:V0,specularmap_fragment:G0,specularmap_pars_fragment:W0,tonemapping_fragment:$0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:K0,uv_vertex:J0,worldpos_vertex:j0,background_vert:Q0,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:a_,distance_vert:o_,distance_frag:l_,equirect_vert:c_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:d_,meshbasic_vert:f_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:__,meshmatcap_frag:v_,meshnormal_vert:x_,meshnormal_frag:y_,meshphong_vert:M_,meshphong_frag:S_,meshphysical_vert:b_,meshphysical_frag:T_,meshtoon_vert:E_,meshtoon_frag:w_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:I_,sprite_vert:P_,sprite_frag:L_},Ce={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:nn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:nn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:nn([Ce.points,Ce.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:nn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:nn([Ce.common,Ce.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:nn([Ce.sprite,Ce.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:nn([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:nn([Ce.lights,Ce.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var yl={r:0,b:0,g:0},D_=new je,Cf=new Ze;Cf.set(-1,0,0,0,1,0,0,0,1);function N_(i,e,t,n,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let M=S.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(S){let E=!1,M=f(S);M===null?p(a,o):M&&M.isColor&&(p(M,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(S,E){let M=f(E);M&&M.isCubeTexture?(c===void 0&&(c=new _t(new kn(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:ps(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cf),c.material.toneMapped=at.getTransfer(M.colorSpace)!==gt,(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new gi(2,2),new $n({name:"BackgroundMaterial",uniforms:ps(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(M.colorSpace)!==gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(yl,oh(i)),t.buffers.color.setClear(yl.r,yl.g,yl.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:v,dispose:m}}function U_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,B,H,P,k){let $=!1,W=u(N,P,H,B);r!==W&&(r=W,c(r.object)),$=f(N,P,H,k),$&&g(N,P,H,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(N,B,H,P),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,B,H,P){let k=P.wireframe===!0,$=n[B.id];$===void 0&&($={},n[B.id]=$);let W=N.isInstancedMesh===!0?N.id:0,re=$[W];re===void 0&&(re={},$[W]=re);let Y=re[H.id];Y===void 0&&(Y={},re[H.id]=Y);let j=Y[k];return j===void 0&&(j=d(l()),Y[k]=j),j}function d(N){let B=[],H=[],P=[];for(let k=0;k<t;k++)B[k]=0,H[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,B,H,P){let k=r.attributes,$=B.attributes,W=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=k[Y],Le=$[Y];if(Le===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(Le=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(Le=N.instanceColor)),ie===void 0||ie.attribute!==Le||Le&&ie.data!==Le.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function g(N,B,H,P){let k={},$=B.attributes,W=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=$[Y];ie===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));let Le={};Le.attribute=ie,ie&&ie.data&&(Le.data=ie.data),k[Y]=Le,W++}r.attributes=k,r.attributesNum=W,r.index=P}function v(){let N=r.newAttributes;for(let B=0,H=N.length;B<H;B++)N[B]=0}function p(N){m(N,0)}function m(N,B){let H=r.newAttributes,P=r.enabledAttributes,k=r.attributeDivisors;H[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),k[N]!==B&&(i.vertexAttribDivisor(N,B),k[N]=B)}function S(){let N=r.newAttributes,B=r.enabledAttributes;for(let H=0,P=B.length;H<P;H++)B[H]!==N[H]&&(i.disableVertexAttribArray(H),B[H]=0)}function E(N,B,H,P,k,$,W){W===!0?i.vertexAttribIPointer(N,B,H,k,$):i.vertexAttribPointer(N,B,H,P,k,$)}function M(N,B,H,P){v();let k=P.attributes,$=H.getAttributes(),W=B.defaultAttributeValues;for(let re in $){let Y=$[re];if(Y.location>=0){let j=k[re];if(j===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let ie=j.normalized,Le=j.itemSize,Ve=e.get(j);if(Ve===void 0)continue;let Z=Ve.buffer,ye=Ve.type,De=Ve.bytesPerElement,le=ye===i.INT||ye===i.UNSIGNED_INT||j.gpuType===Uo;if(j.isInterleavedBufferAttribute){let ne=j.data,ce=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,Ee=j.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)m(Y.location+Me,ne.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Me=0;Me<Y.locationSize;Me++)p(Y.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Me=0;Me<Y.locationSize;Me++)E(Y.location+Me,Le/Y.locationSize,ye,ie,ce*De,(Ee+Le/Y.locationSize*Me)*De,le)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<Y.locationSize;ne++)p(Y.location+ne);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ne=0;ne<Y.locationSize;ne++)E(Y.location+ne,Le/Y.locationSize,ye,ie,Le*De,Le/Y.locationSize*ne*De,le)}}else if(W!==void 0){let ie=W[re];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(Y.location,ie);break;case 3:i.vertexAttrib3fv(Y.location,ie);break;case 4:i.vertexAttrib4fv(Y.location,ie);break;default:i.vertexAttrib1fv(Y.location,ie)}}}}S()}function A(){D();for(let N in n){let B=n[N];for(let H in B){let P=B[H];for(let k in P){let $=P[k];for(let W in $)h($[W].object),delete $[W];delete P[k]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let B=n[N.id];for(let H in B){let P=B[H];for(let k in P){let $=P[k];for(let W in $)h($[W].object),delete $[W];delete P[k]}}delete n[N.id]}function _(N){for(let B in n){let H=n[B];for(let P in H){let k=H[P];if(k[N.id]===void 0)continue;let $=k[N.id];for(let W in $)h($[W].object),delete $[W];delete k[N.id]}}}function x(N){for(let B in n){let H=n[B],P=N.isInstancedMesh===!0?N.id:0,k=H[P];if(k!==void 0){for(let $ in k){let W=k[$];for(let re in W)h(W[re].object),delete W[re];delete k[$]}delete H[P],Object.keys(H).length===0&&delete n[B]}}}function D(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function O_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function F_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Pn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let x=_===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==_n&&_!==En&&!x&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(He("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&He("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:A,samples:w}}function B_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Sn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,E=S*4,M=m.clippingState||null;l.value=M,M=h(g,d,E,f);for(let A=0;A!==E;++A)M[A]=t[A];m.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let m=f+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,M=f;E!==v;++E,M+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}var ga=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kn(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:cs});r.uniforms.tEquirect.value=t;let a=new _t(s,r),o=t.minFilter;return t.minFilter===In&&(t.minFilter=Ft),new Ks(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},of=256,k_=3,z_=20,If=256,Pf=16,H_=3,V_=new L,G_=new qe,Sl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ks(1,10,null),this._boxMesh=new _t(new kn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=V_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(G_));let p=new Ks(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(of,ih(e))}_fromTexture(e,t){e.mapping===us||e.mapping===er?this._setSize(e.image.length===0?of:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=lf(e,!1,!1),n=Math.log2(e)-k_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=lf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===us||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=W_(),this._integrationMaterial=$_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pf);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-H_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(If*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=X_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function lf(i,e,t){return new ga(i,{minFilter:In,generateMipmaps:e,type:Hn,colorSpace:ln,depthBuffer:t})}function _a(i,e,t){return new $n({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:un,blending:cs,depthTest:!1,depthWrite:!1})}function W_(){return _a("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${If}u

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
	`)}function $_(){return _a("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pf}},`

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
	`)}function X_(){return _a("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${z_}
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
	`)}function cf(){return _a("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hf(){return _a("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function q_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Lo||f===Do)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new ga(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Lo||f===Do,v=f===us||f===er;if(g||v){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Sl(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Sl(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Lo?d.mapping=us:f===Do&&(d.mapping=er),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Y_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Z_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function h(g){let v=g.attributes;for(let p in v)e.update(v[p],i.ARRAY_BUFFER)}function u(g){let v=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=v!==null?v.array.length:p.array.length/3-1,E=p.count>=65535?Cr:Rr,M=new E(Math.ceil(S/3)*6,1),A=M.array;if(v!==null){let _=v.array;m=v.version;for(let x=0,D=0;x<S;x+=3){let I=_[x+0],N=_[x+1],B=_[x+2];A[D++]=I,A[D++]=N,A[D++]=N,A[D++]=B,A[D++]=B,A[D++]=I}}else{m=p.version;for(let _=0,x=0;_<S;_+=3){let D=_+0,I=_+1,N=_+2;A[x++]=D,A[x++]=I,A[x++]=I,A[x++]=N,A[x++]=N,A[x++]=D}}M.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,M)}function d(g){let v=r.get(g);if(v){let p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function K_(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function J_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function j_(i,e,t){let n=new WeakMap,s=new xt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let D=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let w=new Float32Array(M*A*4*u),_=new Er(w,M,A,u);_.type=En,_.needsUpdate=!0;let x=E*4;for(let I=0;I<u;I++){let N=p[I],B=m[I],H=S[I],P=M*A*4*I;for(let k=0;k<N.count;k++){let $=k*x;f===!0&&(s.fromBufferAttribute(N,k),w[P+$+0]=s.x,w[P+$+1]=s.y,w[P+$+2]=s.z,w[P+$+3]=0),g===!0&&(s.fromBufferAttribute(B,k),w[P+$+4]=s.x,w[P+$+5]=s.y,w[P+$+6]=s.z,w[P+$+7]=0),v===!0&&(s.fromBufferAttribute(H,k),w[P+$+8]=s.x,w[P+$+9]=s.y,w[P+$+10]=s.z,w[P+$+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new he(M,A)},n.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Q_(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var ev={[Oc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[Hc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function tv(i,e,t,n,s,r){let a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Dt;h.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ft([0,2,0,0,2,0],2));let u=new yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(h,u),f=new ls(-1,1,1,-1,0,1),g=null,v=null,p=!1,m,S=null,E=[],M=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<E.length;_++){let x=E[_];x.setSize&&x.setSize(A,w)}},this.setEffects=function(A){E=A,M=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new bn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(w,_,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&E.some(D=>D.needsDepthTexture===!0);x!==(a.depthTexture!==null)&&(x===!0&&c===null&&(c=new mi(w,_),r===!0&&(c.format=Si,c.type=fs)),a.dispose(),a.depthTexture=x?c:null,a.resolveDepthBuffer=x,a.storeMultisampledDepthBuffer=x);for(let D=0;D<E.length;D++){let I=E[D];I.setSize&&I.setSize(w,_),x&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,w){if(p||A.toneMapping===Zn&&E.length===0)return!1;if(S=w,w!==null){let _=w.width,x=w.height;(a.width!==_||a.height!==x)&&this.setSize(_,x)}return M===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Zn,!0},this.hasRenderPass=function(){return M},this.end=function(A,w){A.toneMapping=m,p=!0;let _=a,x=o;for(let D=0;D<E.length;D++){let I=E[D];I.enabled!==!1&&(I.render(A,x,_,w),I.needsSwap!==!1&&(_=x,x=x===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,u.defines={},at.getTransfer(g)===gt&&(u.defines.SRGB_TRANSFER="");let D=ev[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(d,f),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Lf=new Bt,Df=new mi(1,1),Nf=new Fr(1),Uf=new Er,Of=new co,Ff=new Ur,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=uf[s];if(r===void 0&&(r=new Float32Array(s),uf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Tl(i,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),zt(t,n)}}function ov(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),zt(t,n)}}function lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),zt(t,n)}}function cv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function El(i){return i.version===0&&(i.compareFunction=Qc,i.needsUpdate=!0),i}function _v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=El(Df):r=Lf,t.setTexture2D(e||r,s)}function vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Of,s)}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=El(Nf):r=Ff,t.setTextureCube(e||r,s)}function yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uf,s)}function Mv(i){switch(i){case 5126:return nv;case 35664:return iv;case 35665:return sv;case 35666:return rv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return hv;case 35668:case 35672:return uv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return _v;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return yv}}function Sv(i,e){i.uniform1fv(this.addr,e)}function bv(i,e){let t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function Tv(i,e){let t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function Ev(i,e){let t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function wv(i,e){let t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Av(i,e){let t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rv(i,e){let t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cv(i,e){i.uniform1iv(this.addr,e)}function Iv(i,e){i.uniform2iv(this.addr,e)}function Pv(i,e){i.uniform3iv(this.addr,e)}function Lv(i,e){i.uniform4iv(this.addr,e)}function Dv(i,e){i.uniform1uiv(this.addr,e)}function Nv(i,e){i.uniform2uiv(this.addr,e)}function Uv(i,e){i.uniform3uiv(this.addr,e)}function Ov(i,e){i.uniform4uiv(this.addr,e)}function Fv(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=El(Df):a=Lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bv(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Of,r[a])}function kv(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=El(Nf):a=Ff;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function zv(i,e,t){let n=this.cache,s=e.length,r=Tl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uf,r[a])}function Hv(i){switch(i){case 5126:return Sv;case 35664:return bv;case 35665:return Tv;case 35666:return Ev;case 35674:return wv;case 35675:return Av;case 35676:return Rv;case 5124:case 35670:return Cv;case 35667:case 35671:return Iv;case 35668:case 35672:return Pv;case 35669:case 35673:return Lv;case 5125:return Dv;case 36294:return Nv;case 36295:return Uv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return zv}}var vh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hv(t.type)}},yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function gf(i,e){i.seq.push(e),i.map[e.id]=e}function Vv(i,e,t){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),a=gh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gf(t,c===void 0?new vh(o,i,e):new xh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new yh(o),gf(t,u)),t=u}}}var rr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Vv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function _f(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gv=37297,Wv=0;function $v(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var vf=new Ze;function Xv(i){at._getMatrix(vf,at.workingColorSpace,i);let e=`mat3( ${vf.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$v(i.getShaderSource(e),o)}else return r}function qv(i,e){let t=Xv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yv={[Oc]:"Linear",[Fc]:"Reinhard",[Bc]:"Cineon",[kc]:"ACESFilmic",[Hc]:"AgX",[Vc]:"Neutral",[zc]:"Custom"};function Zv(i,e){let t=Yv[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ml=new L;function Kv(){at.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ma(i){return i!==""}function yf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(ex,tx)}function tx(i,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Mh(t)}var nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(i){return i.replace(nx,ix)}function ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var sx={[aa]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function rx(i){return sx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ax={[er]:"ENVMAP_MODE_REFRACTION"};function ox(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var lx={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Od]:"ENVMAP_BLENDING_MIX",[Fd]:"ENVMAP_BLENDING_ADD"};function cx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":lx[i.combine]||"ENVMAP_BLENDING_NONE"}function hx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=rx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ox(t),u=cx(t),d=Jv(t),f=jv(r),g=s.createProgram(),v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(v=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?st.tonemapping_pars_fragment:"",t.toneMapping!==Zn?Zv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,qv("linearToOutputTexel",t.outputColorSpace),Kv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Mh(a),a=yf(a,t),a=Mf(a,t),o=Mh(o),o=yf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+v+a,E=m+p+o,M=_f(s,s.VERTEX_SHADER,S),A=_f(s,s.FRAGMENT_SHADER,E);s.attachShader(g,M),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(A)||"",P=N.trim(),k=B.trim(),$=H.trim(),W=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,A);else{let Y=xf(s,M,"vertex"),j=xf(s,A,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+Y+`
`+j)}else P!==""?He("WebGLProgram: Program Info Log:",P):(k===""||$==="")&&(re=!1);re&&(I.diagnostics={runnable:W,programLog:P,vertexShader:{log:k,prefix:v},fragmentShader:{log:$,prefix:p}})}s.deleteShader(M),s.deleteShader(A),_=new rr(s,g),x=Qv(s,g)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,Gv)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}var ux=0,Sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bh(e),t.set(e,n)),n}},bh=class{constructor(e){this.id=ux++,this.code=e,this.usedTimes=0}};function dx(i){return i===Hi||i===ua||i===da}function fx(i,e,t,n,s,r){let a=new wr,o=new Sh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,x,D,I,N,B){let H=I.fog,P=N.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||k,$),re=d[_.type],Y=n.precision;_.precision!==null&&(Y=n.getMaxPrecision(_.precision),Y!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=j!==void 0?j.length:0,Le=0;P.morphAttributes.position!==void 0&&(Le=1),P.morphAttributes.normal!==void 0&&(Le=2),P.morphAttributes.color!==void 0&&(Le=3);let Ve,Z,ye,De;if(re){let Re=Jn[re];Ve=Re.vertexShader,Z=Re.fragmentShader}else{Ve=_.vertexShader,Z=_.fragmentShader;let Re=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,Re,vt),ye=Re.id,De=vt.id}let le=i.getRenderTarget(),ne=i.state.buffers.depth.getReversed(),ce=N.isInstancedMesh===!0,Ee=N.isBatchedMesh===!0,Me=!!_.map,Te=!!_.matcap,Be=!!W,Q=Be&&W.isPMREMTexture===!0,de=!!_.aoMap,se=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,Ke=!!_.displacementMap,Fe=!!_.emissiveMap,rt=!!_.metalnessMap,lt=!!_.roughnessMap,U=_.anisotropy>0,T=_.clearcoat>0,Ae=_.diffuseRoughness>0,Pe=_.dispersion>0,We=_.retroreflectivity>0,ae=_.iridescence>0,ct=_.sheen>0,ze=_.transmission>0,Xe=U&&!!_.anisotropyMap,R=T&&!!_.clearcoatMap,y=T&&!!_.clearcoatNormalMap,z=T&&!!_.clearcoatRoughnessMap,oe=Ae&&!!_.diffuseRoughnessMap,te=ae&&!!_.iridescenceMap,ge=ae&&!!_.iridescenceThicknessMap,me=ct&&!!_.sheenColorMap,J=ct&&!!_.sheenRoughnessMap,ee=!!_.specularMap,_e=!!_.specularColorMap,O=!!_.specularIntensityMap,K=ze&&!!_.transmissionMap,X=ze&&!!_.thicknessMap,fe=!!_.gradientMap,pe=!!_.alphaMap,xe=_.alphaTest>0,Ge=!!_.alphaHash,it=!!_.extensions,ue=Zn;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ue=i.toneMapping);let $e=Q?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,tt={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Ve,fragmentShader:Z,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:De,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Ee,batchingColor:Ee&&N._colorsTexture!==null,instancing:ce,instancingColor:ce&&N.instanceColor!==null,instancingMorph:ce&&N.morphTexture!==null,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:Te,envMap:Be,envMapMode:Be&&W.mapping,envMapPMREM:Q,envMapMaxLod:Q?$e.length-1:null,envMapSize:Q?$e[0].width:null,aoMap:de,lightMap:se,bumpMap:we,normalMap:ve,displacementMap:Ke,emissiveMap:Fe,normalMapObjectSpace:ve&&_.normalMapType===Hd,normalMapTangentSpace:ve&&_.normalMapType===vl,packedNormalMap:ve&&_.normalMapType===vl&&dx(_.normalMap.format),metalnessMap:rt,roughnessMap:lt,anisotropy:U,anisotropyMap:Xe,clearcoat:T,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:z,diffuseRoughness:Ae,diffuseRoughnessMap:oe,dispersion:Pe,retroreflection:We,iridescence:ae,iridescenceMap:te,iridescenceThicknessMap:ge,sheen:ct,sheenColorMap:me,sheenRoughnessMap:J,specularMap:ee,specularColorMap:_e,specularIntensityMap:O,transmission:ze,transmissionMap:K,thicknessMap:X,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:Ge,combine:_.combine,mapUv:Me&&f(_.map.channel),aoMapUv:de&&f(_.aoMap.channel),lightMapUv:se&&f(_.lightMap.channel),bumpMapUv:we&&f(_.bumpMap.channel),normalMapUv:ve&&f(_.normalMap.channel),displacementMapUv:Ke&&f(_.displacementMap.channel),emissiveMapUv:Fe&&f(_.emissiveMap.channel),metalnessMapUv:rt&&f(_.metalnessMap.channel),roughnessMapUv:lt&&f(_.roughnessMap.channel),anisotropyMapUv:Xe&&f(_.anisotropyMap.channel),clearcoatMapUv:R&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&f(_.sheenRoughnessMap.channel),specularMapUv:ee&&f(_.specularMap.channel),specularColorMapUv:_e&&f(_.specularColorMap.channel),specularIntensityMapUv:O&&f(_.specularIntensityMap.channel),transmissionMapUv:K&&f(_.transmissionMap.channel),thicknessMapUv:X&&f(_.thicknessMap.channel),alphaMapUv:pe&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ve||U),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Me||pe),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Le,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:B.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function v(_){let x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)x.push(D),x.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(x,_),m(x,_),x.push(i.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function p(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapPMREM),_.push(x.envMapMaxLod),_.push(x.envMapSize),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.diffuseRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.numSunLights),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numSunLightShadows),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.numLightProbeGrids),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function m(_,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.diffuseRoughness&&a.enable(25),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let x=d[_.type],D;if(x){let I=Jn[x];D=sf.clone(I.uniforms)}else D=_.uniforms;return D}function E(_,x){let D=h.get(x);return D!==void 0?++D.usedTimes:(D=new hx(i,x,_,s),c.push(D),h.set(x,D)),D}function M(_){if(--_.usedTimes===0){let x=c.indexOf(_);c[x]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:S,acquireProgram:E,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:w}}function px(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ef(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,p,m){let S=i[e];return S===void 0?(S={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[e]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=g,S.materialVariant=a(d),S.groupOrder=v,S.renderOrder=d.renderOrder,S.z=p,S.group=m),e++,S}function l(d,f,g,v,p,m,S){S.reversedDepth===!0&&(p=-p);let E=o(d,f,g,v,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(d,f,g,v,p,m){let S=o(d,f,g,v,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(d,f){t.length>1&&t.sort(d||mx),n.length>1&&n.sort(f||Tf),s.length>1&&s.sort(f||Tf)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function gx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ef,i.set(n,[a])):s>=r.length?(a=new Ef,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function _x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new qe};break;case"SpotLight":t={position:new L,direction:new L,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xx=0;function yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mx(i){let e=new _x,t=vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new je,a=new je;function o(c){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,S=0,E=0,M=0,A=0,w=0,_=0,x=0,D=0,I=0;c.sort(yx);for(let B=0,H=c.length;B<H;B++){let P=c[B],k=P.color,$=P.intensity,W=P.distance,re=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Hi?re=P.shadow.map.texture:re=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*$,u+=k.g*$,d+=k.b*$;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],$);I++}else if(P.isSunLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=re;let Le=j.getViewportCount();for(let Ve=0;Ve<Le;Ve++)n.sunShadowMatrix[v+Ve]=j.getMatrix(Ve),n.sunShadowCascade[v+Ve]=j._cascadeData[Ve];v+=Le,g++}n.sun[f]=Y,f++}else if(P.isDirectionalLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.directionalShadow[p]=ie,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=Y,p++}else if(P.isSpotLight){let Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(k).multiplyScalar($),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[S]=Y;let j=P.shadow;if(P.map&&(n.spotLightMap[x]=P.map,x++,j.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[S]=j.matrix,P.castShadow){let ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,n.spotShadow[S]=ie,n.spotShadowMap[S]=re,_++}S++}else if(P.isRectAreaLight){let Y=e.get(P);Y.color.copy(k).multiplyScalar($),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=Y,E++}else if(P.isPointLight){let Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let j=P.shadow,ie=t.get(P);ie.shadowIntensity=j.intensity,ie.shadowBias=j.bias,ie.shadowNormalBias=j.normalBias,ie.shadowRadius=j.radius,ie.shadowMapSize=j.mapSize,ie.shadowCameraNear=j.camera.near,ie.shadowCameraFar=j.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=P.shadow.matrix,w++}n.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar($),Y.groundColor.copy(P.groundColor).multiplyScalar($),n.hemi[M]=Y,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==E||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==x||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=S,n.rectArea.length=E,n.point.length=m,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+x-D,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=E,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=x,N.numLightProbes=I,n.version=xx++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0,m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let M=c[S];if(M.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),d++}else if(M.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let A=n.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let A=n.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function wf(i){let e=new Mx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Sx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new wf(i),e.set(s,[o])):r>=a.length?(o=new wf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`,Ex=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],wx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Af=new je,pa=new L,_h=new L;function Ax(i,e,t){let n=new Ni,s=new he,r=new he,a=new xt,o=new Mo,l=new So,c={},h=t.maxTextureSize,u={[Yn]:un,[un]:Yn,[gn]:gn},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:bx,fragmentShader:Tx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let m=this.type;this.render=function(w,_,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===_d&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),B=i.state;B.setBlending(cs),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=m!==this.type;H&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(k=>k.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,k=w.length;P<k;P++){let $=w[P],W=$.shadow;if(W===void 0){He("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let re=W.getFrameExtents();s.multiply(re),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,W.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===js){if($.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new bn(s.x,s.y,{format:Hi,type:Hn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new mi(s.x,s.y,En),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=hi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt}else $.isPointLight?(W.map=new ga(s.x),W.map.depthTexture=new Fr(s.x,zn)):(W.map=new bn(s.x,s.y),W.map.depthTexture=new mi(s.x,s.y,zn)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=hi,this.type===aa?(W.map.depthTexture.compareFunction=Y?jc:Jc,W.map.depthTexture.minFilter=Ft,W.map.depthTexture.magFilter=Ft):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Lt,W.map.depthTexture.magFilter=Lt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();$.isPointLight!==!0&&W.updateMatrices($,x);let ie=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:x.layers;for(let Le=0;Le<j;Le++){let Ve=W.getCamera(Le);if($.isPointLight){let Z=W.camera,ye=W.matrix,De=$.distance||Z.far;De!==Z.far&&(Z.far=De,Z.updateProjectionMatrix()),pa.setFromMatrixPosition($.matrixWorld),Z.position.copy(pa),_h.copy(Z.position),_h.add(Ex[Le]),Z.up.copy(wx[Le]),Z.lookAt(_h),Z.updateMatrixWorld(),ye.makeTranslation(-pa.x,-pa.y,-pa.z),Af.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Af,Z.coordinateSystem,Z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Le),i.clear();else{Le===0&&(i.setRenderTarget(W.map),i.clear());let Z=W.getViewport(Le);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),B.viewport(a)}n=W.getFrustum(Le),M(_,x,Ve,$,ie,this.type)}W.isPointLightShadow!==!0&&this.type===js&&S(W,x),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,I,N)};function S(w,_){let x=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new bn(s.x,s.y,{format:Hi,type:Hn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,x,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,x,f,v,null)}function E(w,_,x,D){let I=null,N=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)I=N;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,H=_.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let k=P[H];k===void 0&&(k=I.clone(),P[H]=k,_.addEventListener("dispose",A)),I=k}if(I.visible=_.visible,I.wireframe=_.wireframe,D===js?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=i.properties.get(I);B.light=x}return I}function M(w,_,x,D,I,N){if(w.visible===!1)return;if(w.layers.test(I)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===js)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let P=e.update(w),k=w.material;if(Array.isArray(k)){let $=P.groups;for(let W=0,re=$.length;W<re;W++){let Y=$[W],j=k[Y.materialIndex];if(j&&j.visible){let ie=E(w,j,D,N);w.onBeforeShadow(i,w,_,x,P,ie,Y),i.renderBufferDirect(x,null,P,ie,w,Y),w.onAfterShadow(i,w,_,x,P,ie,Y)}}}else if(k.visible){let $=E(w,k,D,N);w.onBeforeShadow(i,w,_,x,P,$,null),i.renderBufferDirect(x,null,P,$,w,null),w.onAfterShadow(i,w,_,x,P,$,null)}}let H=w.children;for(let P=0,k=H.length;P<k;P++)M(H[P],_,x,D,I,N)}function A(w){w.target.removeEventListener("dispose",A);for(let x in c){let D=c[x],I=w.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Rx(i,e){function t(){let O=!1,K=new xt,X=null,fe=new xt(0,0,0,0);return{setMask:function(pe){X!==pe&&!O&&(i.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){O=pe},setClear:function(pe,xe,Ge,it,ue){ue===!0&&(pe*=it,xe*=it,Ge*=it),K.set(pe,xe,Ge,it),fe.equals(K)===!1&&(i.clearColor(pe,xe,Ge,it),fe.copy(K))},reset:function(){O=!1,X=null,fe.set(-1,0,0,0)}}}function n(){let O=!1,K=!1,X=null,fe=null,pe=null;return{setReversed:function(xe){if(K!==xe){let Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),K=xe;let it=pe;pe=null,this.setClear(it)}},getReversed:function(){return K},setTest:function(xe){xe?ne(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(xe){X!==xe&&!O&&(i.depthMask(xe),X=xe)},setFunc:function(xe){if(K&&(xe=Jd[xe]),fe!==xe){switch(xe){case eo:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=xe}},setLocked:function(xe){O=xe},setClear:function(xe){pe!==xe&&(pe=xe,K&&(xe=1-xe),i.clearDepth(xe))},reset:function(){O=!1,X=null,fe=null,pe=null,K=!1}}}function s(){let O=!1,K=null,X=null,fe=null,pe=null,xe=null,Ge=null,it=null,ue=null;return{setTest:function($e){O||($e?ne(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function($e){K!==$e&&!O&&(i.stencilMask($e),K=$e)},setFunc:function($e,tt,Re){(X!==$e||fe!==tt||pe!==Re)&&(i.stencilFunc($e,tt,Re),X=$e,fe=tt,pe=Re)},setOp:function($e,tt,Re){(xe!==$e||Ge!==tt||it!==Re)&&(i.stencilOp($e,tt,Re),xe=$e,Ge=tt,it=Re)},setLocked:function($e){O=$e},setClear:function($e){ue!==$e&&(i.clearStencil($e),ue=$e)},reset:function(){O=!1,K=null,X=null,fe=null,pe=null,xe=null,Ge=null,it=null,ue=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,S=null,E=null,M=null,A=null,w=null,_=null,x=new qe(0,0,0),D=0,I=!1,N=null,B=null,H=null,P=null,k=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=re>=1):Y.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=re>=2);let j=null,ie={},Le=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),Z=new xt().fromArray(Le),ye=new xt().fromArray(Ve);function De(O,K,X,fe){let pe=new Uint8Array(4),xe=i.createTexture();i.bindTexture(O,xe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<X;Ge++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(K+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return xe}let le={};le[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Ns),we(!1),ve(Cc),ne(i.CULL_FACE),de(cs);function ne(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ce(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ee(O,K){return d[O]!==K?(i.bindFramebuffer(O,K),d[O]=K,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Me(O,K){let X=g,fe=!1;if(O){X=f.get(K),X===void 0&&(X=[],f.set(K,X));let pe=O.textures;if(X.length!==pe.length||X[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ge=pe.length;xe<Ge;xe++)X[xe]=i.COLOR_ATTACHMENT0+xe;X.length=pe.length,fe=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,fe=!0);fe&&i.drawBuffers(X)}function Te(O){return v!==O?(i.useProgram(O),v=O,!0):!1}let Be={[hs]:i.FUNC_ADD,[xd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};Be[Md]=i.MIN,Be[Sd]=i.MAX;let Q={[bd]:i.ZERO,[Td]:i.ONE,[Ed]:i.SRC_COLOR,[Dc]:i.SRC_ALPHA,[Pd]:i.SRC_ALPHA_SATURATE,[Cd]:i.DST_COLOR,[Ad]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[Nc]:i.ONE_MINUS_SRC_ALPHA,[Id]:i.ONE_MINUS_DST_COLOR,[Rd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Dd]:i.ONE_MINUS_CONSTANT_COLOR,[Nd]:i.CONSTANT_ALPHA,[Ud]:i.ONE_MINUS_CONSTANT_ALPHA};function de(O,K,X,fe,pe,xe,Ge,it,ue,$e){if(O===cs){p===!0&&(ce(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),O!==vd){if(O!==m||$e!==I){if((S!==hs||A!==hs)&&(i.blendEquation(i.FUNC_ADD),S=hs,A=hs),$e)switch(O){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",O);break}else switch(O){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",O);break}E=null,M=null,w=null,_=null,x.set(0,0,0),D=0,m=O,I=$e}return}pe=pe||K,xe=xe||X,Ge=Ge||fe,(K!==S||pe!==A)&&(i.blendEquationSeparate(Be[K],Be[pe]),S=K,A=pe),(X!==E||fe!==M||xe!==w||Ge!==_)&&(i.blendFuncSeparate(Q[X],Q[fe],Q[xe],Q[Ge]),E=X,M=fe,w=xe,_=Ge),(it.equals(x)===!1||ue!==D)&&(i.blendColor(it.r,it.g,it.b,ue),x.copy(it),D=ue),m=O,I=!1}function se(O,K){O.side===gn?ce(i.CULL_FACE):ne(i.CULL_FACE);let X=O.side===un;K&&(X=!X),we(X),O.blending===Qs&&O.transparent===!1?de(cs):de(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let fe=O.stencilWrite;o.setTest(fe),fe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Fe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(O){N!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),N=O)}function ve(O){O!==md?(ne(i.CULL_FACE),O!==B&&(O===Cc?i.cullFace(i.BACK):O===gd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),B=O}function Ke(O){O!==H&&(W&&i.lineWidth(O),H=O)}function Fe(O,K,X){O?(ne(i.POLYGON_OFFSET_FILL),(P!==K||k!==X)&&(P=K,k=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):ce(i.POLYGON_OFFSET_FILL)}function rt(O){O?ne(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function lt(O){O===void 0&&(O=i.TEXTURE0+$-1),j!==O&&(i.activeTexture(O),j=O)}function U(O,K,X){X===void 0&&(j===null?X=i.TEXTURE0+$-1:X=j);let fe=ie[X];fe===void 0&&(fe={type:void 0,texture:void 0},ie[X]=fe),(fe.type!==O||fe.texture!==K)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(O,K||le[O]),fe.type=O,fe.texture=K)}function T(){let O=ie[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ae(){try{i.compressedTexImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Pe(){try{i.compressedTexImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function We(){try{i.texSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ae(){try{i.texSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function Xe(){try{i.texStorage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function R(){try{i.texStorage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function y(){try{i.texImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function z(){try{i.texImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function oe(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function te(O,K){u[O]!==K&&(i.pixelStorei(O,K),u[O]=K)}function ge(O){Z.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Z.copy(O))}function me(O){ye.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function J(O,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let fe=X.get(O);fe===void 0&&(fe=i.getUniformBlockIndex(K,O.name),i.uniformBlockBinding(K,fe,fe),X.set(O,fe))}function ee(O,K,X){let pe=c.get(K).get(O);l[pe]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,X),l[pe]=X)}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,ie={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,S=null,E=null,M=null,A=null,w=null,_=null,x=new qe(0,0,0),D=0,I=!1,N=null,B=null,H=null,P=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:ce,bindFramebuffer:Ee,drawBuffers:Me,useProgram:Te,setBlending:de,setMaterial:se,setFlipSided:we,setCullFace:ve,setLineWidth:Ke,setPolygonOffset:Fe,setScissorTest:rt,activeTexture:lt,bindTexture:U,unbindTexture:T,compressedTexImage2D:Ae,compressedTexImage3D:Pe,texImage2D:y,texImage3D:z,pixelStorei:te,getParameter:oe,updateUBOMapping:J,uniformBlockBinding:ee,texStorage2D:Xe,texStorage3D:R,texSubImage2D:We,texSubImage3D:ae,compressedTexSubImage2D:ct,compressedTexSubImage3D:ze,scissor:ge,viewport:me,reset:_e}}function Cx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return p?new OffscreenCanvas(R,y):Fs("canvas")}function S(R,y,z){let oe=1,te=Xe(R);if((te.width>z||te.height>z)&&(oe=z/Math.max(te.width,te.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ge=Math.floor(oe*te.width),me=Math.floor(oe*te.height);d===void 0&&(d=m(ge,me));let J=y?m(ge,me):d;return J.width=ge,J.height=me,J.getContext("2d").drawImage(R,0,0,ge,me),He("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ge+"x"+me+")."),J}else return"data"in R&&He("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function E(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,y,z,oe,te,ge=!1){if(R!==null){if(i[R]!==void 0)return i[R];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;oe&&(me=e.get("EXT_texture_norm16"),me||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8),z===i.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),z===i.SHORT&&me&&(J=me.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),y===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8),z===i.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),z===i.SHORT&&me&&(J=me.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),z===i.SHORT&&me&&(J=me.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),y===i.RGBA){let ee=ge?br:at.getTransfer(te);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ee===gt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),z===i.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,y){let z;return R?y===null||y===zn||y===fs?z=i.DEPTH24_STENCIL8:y===En?z=i.DEPTH32F_STENCIL8:y===nr&&(z=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zn||y===fs?z=i.DEPTH_COMPONENT24:y===En?z=i.DEPTH_COMPONENT32F:y===nr&&(z=i.DEPTH_COMPONENT16),z}function x(R,y){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Ft?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function D(R){let y=new WeakRef(R);n.get(R).__ref=y,g.add(y),v.register(R,y,y)}function I(R){let y=n.get(R).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function N(R){H(R.target)}function B(R){P(R.target)}function H(R){R.removeEventListener("dispose",N),I(R),$(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function P(R){R.removeEventListener("dispose",B),I(R),re(R)}function k(){for(let R of g){let y=R.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):H(y))}g.clear(),u.clear()}function $(R){let y=n.get(R);if(y.__webglInit===void 0)return;let z=R.source,oe=f.get(z);if(oe){let te=oe[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&W(R),Object.keys(oe).length===0&&f.delete(z)}n.remove(R)}function W(R){let y=n.get(R);i.deleteTexture(y.__webglTexture);let z=R.source,oe=f.get(z);delete oe[y.__cacheKey],a.memory.textures--}function re(R){let y=n.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();let z=R.depthTexture;if(z&&z.renderTarget===R&&H(z),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let ge=0;ge<y.__webglFramebuffer[te].length;ge++)i.deleteFramebuffer(y.__webglFramebuffer[te][ge]);else i.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)i.deleteFramebuffer(y.__webglFramebuffer[te]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let oe=R.textures;for(let te=0,ge=oe.length;te<ge;te++){let me=n.get(oe[te]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),n.remove(oe[te])}n.remove(R)}let Y=0;function j(){Y=0}function ie(){return Y}function Le(R){Y=R}function Ve(){let R=Y;return R>=s.maxTextures&&He("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function Z(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function ye(R,y){let z=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let oe=R.image;if(oe===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{se(z,R,y);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function De(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){se(z,R,y);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function le(R,y){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){se(z,R,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function ne(R,y){let z=n.get(R);if(R.version>0&&z.__version!==R.version){we(z,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let ce={[Di]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},Ee={[Lt]:i.NEAREST,[No]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[tr]:i.LINEAR_MIPMAP_NEAREST,[In]:i.LINEAR_MIPMAP_LINEAR},Me={[Gd]:i.NEVER,[Qc]:i.ALWAYS,[Wd]:i.LESS,[Jc]:i.LEQUAL,[$d]:i.EQUAL,[jc]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Te(R,y){if(y.type===En&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ft||y.magFilter===tr||y.magFilter===ds||y.magFilter===In||y.minFilter===Ft||y.minFilter===tr||y.minFilter===ds||y.minFilter===In)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ce[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ce[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ce[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ee[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Lt||y.minFilter!==ds&&y.minFilter!==In||y.type===En&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Be(R,y){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",N),D(y));let oe=y.source,te=f.get(oe);te===void 0&&(te={},f.set(oe,te));let ge=Z(y);if(ge!==R.__cacheKey){te[ge]===void 0&&(te[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[ge].usedTimes++;let me=te[R.__cacheKey];me!==void 0&&(te[R.__cacheKey].usedTimes--,me.usedTimes===0&&W(y)),R.__cacheKey=ge,R.__webglTexture=te[ge].texture}return z}function Q(R,y,z){return Math.floor(Math.floor(R/z)/y)}function de(R,y,z,oe){let ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,oe,y.data);else{ge.sort((O,K)=>O.start-K.start);let me=0;for(let O=1;O<ge.length;O++){let K=ge[me],X=ge[O],fe=K.start+K.count,pe=Q(X.start,y.width,4),xe=Q(K.start,y.width,4);X.start<=fe+1&&pe===xe&&Q(X.start+X.count-1,y.width,4)===pe?K.count=Math.max(K.count,X.start+X.count-K.start):(++me,ge[me]=X)}ge.length=me+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let O=0,K=ge.length;O<K;O++){let X=ge[O],fe=Math.floor(X.start/4),pe=Math.ceil(X.count/4),xe=fe%y.width,Ge=Math.floor(fe/y.width),it=pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,xe,Ge,it,ue,z,oe,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function se(R,y,z){let oe=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(oe=i.TEXTURE_3D);let te=Be(R,y),ge=y.source;t.bindTexture(oe,R.__webglTexture,i.TEXTURE0+z);let me=n.get(ge);if(ge.version!==me.__version||te===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ue=at.getPrimaries(at.workingColorSpace),$e=y.colorSpace===bi?null:at.getPrimaries(y.colorSpace),tt=y.colorSpace===bi||ue===$e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=S(y.image,!1,s.maxTextureSize);ee=ze(y,ee);let _e=r.convert(y.format,y.colorSpace),O=r.convert(y.type),K=w(y.internalFormat,_e,O,y.normalized,y.colorSpace,y.isVideoTexture);Te(oe,y);let X,fe=y.mipmaps,pe=y.isVideoTexture!==!0,xe=me.__version===void 0||te===!0,Ge=ge.dataReady,it=x(y,ee);if(y.isDepthTexture)K=_(y.format===Si,y.type),xe&&(pe?t.texStorage2D(i.TEXTURE_2D,1,K,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,K,ee.width,ee.height,0,_e,O,null));else if(y.isDataTexture)if(fe.length>0){pe&&xe&&t.texStorage2D(i.TEXTURE_2D,it,K,fe[0].width,fe[0].height);for(let ue=0,$e=fe.length;ue<$e;ue++)X=fe[ue],pe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,_e,O,X.data):t.texImage2D(i.TEXTURE_2D,ue,K,X.width,X.height,0,_e,O,X.data);y.generateMipmaps=!1}else pe?(xe&&t.texStorage2D(i.TEXTURE_2D,it,K,ee.width,ee.height),Ge&&de(y,ee,_e,O)):t.texImage2D(i.TEXTURE_2D,0,K,ee.width,ee.height,0,_e,O,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pe&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,K,fe[0].width,fe[0].height,ee.depth);for(let ue=0,$e=fe.length;ue<$e;ue++)if(X=fe[ue],y.format!==Pn)if(_e!==null)if(pe){if(Ge)if(y.layerUpdates.size>0){let tt=hh(X.width,X.height,y.format,y.type);for(let Re of y.layerUpdates){let vt=X.data.subarray(Re*tt/X.data.BYTES_PER_ELEMENT,(Re+1)*tt/X.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Re,X.width,X.height,1,_e,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,X.width,X.height,ee.depth,_e,X.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,K,X.width,X.height,ee.depth,0,X.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,X.width,X.height,ee.depth,_e,O,X.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,K,X.width,X.height,ee.depth,0,_e,O,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{pe&&xe&&t.texStorage2D(i.TEXTURE_2D,it,K,fe[0].width,fe[0].height);for(let ue=0,$e=fe.length;ue<$e;ue++)X=fe[ue],y.format!==Pn?_e!==null?pe?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,_e,X.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,K,X.width,X.height,0,X.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,X.width,X.height,_e,O,X.data):t.texImage2D(i.TEXTURE_2D,ue,K,X.width,X.height,0,_e,O,X.data)}else if(y.isDataArrayTexture)if(pe){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,K,ee.width,ee.height,ee.depth),Ge)if(y.layerUpdates.size>0){let ue=hh(ee.width,ee.height,y.format,y.type);for(let $e of y.layerUpdates){let tt=ee.data.subarray($e*ue/ee.data.BYTES_PER_ELEMENT,($e+1)*ue/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$e,ee.width,ee.height,1,_e,O,tt)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,O,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,ee.width,ee.height,ee.depth,0,_e,O,ee.data);else if(y.isData3DTexture)pe?(xe&&t.texStorage3D(i.TEXTURE_3D,it,K,ee.width,ee.height,ee.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,O,ee.data)):t.texImage3D(i.TEXTURE_3D,0,K,ee.width,ee.height,ee.depth,0,_e,O,ee.data);else if(y.isFramebufferTexture){if(xe)if(pe)t.texStorage2D(i.TEXTURE_2D,it,K,ee.width,ee.height);else{let ue=ee.width,$e=ee.height;for(let tt=0;tt<it;tt++)t.texImage2D(i.TEXTURE_2D,tt,K,ue,$e,0,_e,O,null),ue>>=1,$e>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ee.parentNode!==ue){ue.appendChild(ee),u.add(y),ue.onpaint=$e=>{let tt=$e.changedElements;for(let Re of u)tt.includes(Re.image)&&(Re.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let tt=i.RGBA,Re=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Re,vt,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(pe&&xe){let ue=Xe(fe[0]);t.texStorage2D(i.TEXTURE_2D,it,K,ue.width,ue.height)}for(let ue=0,$e=fe.length;ue<$e;ue++)X=fe[ue],pe?Ge&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,_e,O,X):t.texImage2D(i.TEXTURE_2D,ue,K,_e,O,X);y.generateMipmaps=!1}else if(pe){if(xe){let ue=Xe(ee);t.texStorage2D(i.TEXTURE_2D,it,K,ue.width,ue.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,O,ee)}else t.texImage2D(i.TEXTURE_2D,0,K,_e,O,ee);E(y)&&y.mipmapsAutoUpdate===!0&&M(oe),me.__version=ge.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function we(R,y,z){if(y.image.length!==6)return;let oe=Be(R,y),te=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let ge=n.get(te);if(te.version!==ge.__version||oe===!0){t.activeTexture(i.TEXTURE0+z);let me=at.getPrimaries(at.workingColorSpace),J=y.colorSpace===bi?null:at.getPrimaries(y.colorSpace),ee=y.colorSpace===bi||me===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let _e=y.isCompressedTexture||y.image[0].isCompressedTexture,O=y.image[0]&&y.image[0].isDataTexture,K=[];for(let Re=0;Re<6;Re++)!_e&&!O?K[Re]=S(y.image[Re],!0,s.maxCubemapSize):K[Re]=O?y.image[Re].image:y.image[Re],K[Re]=ze(y,K[Re]);let X=K[0],fe=r.convert(y.format,y.colorSpace),pe=r.convert(y.type),xe=w(y.internalFormat,fe,pe,y.normalized,y.colorSpace),Ge=y.isVideoTexture!==!0,it=ge.__version===void 0||oe===!0,ue=te.dataReady,$e=x(y,X);Te(i.TEXTURE_CUBE_MAP,y);let tt;if(y.isDepthTexture){if(xe=_(y.format===Si,y.type),it)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,xe,X.width,X.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xe,X.width,X.height,0,fe,pe,null)}else if(_e){Ge&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,xe,X.width,X.height);for(let Re=0;Re<6;Re++){tt=K[Re].mipmaps;for(let vt=0;vt<tt.length;vt++){let Gt=tt[vt];y.format!==Pn?fe!==null?Ge?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt,0,0,Gt.width,Gt.height,fe,Gt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt,xe,Gt.width,Gt.height,0,Gt.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt,0,0,Gt.width,Gt.height,fe,pe,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt,xe,Gt.width,Gt.height,0,fe,pe,Gt.data)}}}else{if(tt=y.mipmaps,Ge&&it){tt.length>0&&$e++;let Re=Xe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$e,xe,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(O){Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,K[Re].width,K[Re].height,fe,pe,K[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xe,K[Re].width,K[Re].height,0,fe,pe,K[Re].data);for(let vt=0;vt<tt.length;vt++){let Ei=tt[vt].image[Re].image;Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt+1,0,0,Ei.width,Ei.height,fe,pe,Ei.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt+1,xe,Ei.width,Ei.height,0,fe,pe,Ei.data)}}else{Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,fe,pe,K[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xe,fe,pe,K[Re]);for(let vt=0;vt<tt.length;vt++){let Gt=tt[vt];Ge?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt+1,0,0,fe,pe,Gt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,vt+1,xe,fe,pe,Gt.image[Re])}}}E(y)&&y.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ge.__version=te.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ve(R,y,z,oe,te,ge){let me=r.convert(z.format,z.colorSpace),J=r.convert(z.type),ee=w(z.internalFormat,me,J,z.normalized,z.colorSpace),_e=n.get(y),O=n.get(z);if(O.__renderTarget=y,!_e.__hasExternalTextures){let K=Math.max(1,y.width>>ge),X=Math.max(1,y.height>>ge);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,ge,ee,K,X,y.depth,0,me,J,null):t.texImage2D(te,ge,ee,K,X,0,me,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,te,O.__webglTexture,0,We(y)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,te,O.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(R,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){let oe=y.depthTexture,te=oe&&oe.isDepthTexture?oe.type:null,ge=_(y.stencilBuffer,te),me=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ae(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),ge,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),ge,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ge,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,R)}else{let oe=y.textures;for(let te=0;te<oe.length;te++){let ge=oe[te],me=r.convert(ge.format,ge.colorSpace),J=r.convert(ge.type),ee=w(ge.internalFormat,me,J,ge.normalized,ge.colorSpace);ae(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(y),ee,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(y),ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(R,y,z){let oe=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(y.depthTexture);te.__renderTarget=y;let ge=oe?y.depthTexture.image[0]:y.depthTexture.image;(!te.__webglTexture||ge.width!==y.width||ge.height!==y.height)&&(ge.width=y.width,ge.height=y.height,y.depthTexture.needsUpdate=!0),oe?ne(y.depthTexture,0):ye(y.depthTexture,0);let me=te.__webglTexture,J=We(y),ee=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,_e=y.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===hi)ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ee,me,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ee,me,0);else if(y.depthTexture.format===Si)ae(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ee,me,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){let y=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let oe=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),oe){let te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,oe.removeEventListener("dispose",te)};oe.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=oe}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let oe=0;oe<6;oe++)Fe(y.__webglFramebuffer[oe],R,oe);else R.texture.mipmaps.length>0?Fe(y.__webglFramebuffer[0],R,0):Fe(y.__webglFramebuffer,R,0);else if(z){y.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[oe]),y.__webglDepthbuffer[oe]===void 0)y.__webglDepthbuffer[oe]=i.createRenderbuffer(),Ke(y.__webglDepthbuffer[oe],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ke(y.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(R,y,z){let oe=n.get(R);y!==void 0&&ve(oe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&rt(R)}function U(R){let y=R.texture,z=n.get(R),oe=n.get(y);R.addEventListener("dispose",B),D(R);let te=R.textures,ge=R.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=y.version,a.memory.textures++),ge){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let ee=0;ee<y.mipmaps.length;ee++)z.__webglFramebuffer[J][ee]=i.createFramebuffer()}else z.__webglFramebuffer[J]=i.createFramebuffer()}else{if(y.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)z.__webglFramebuffer[J]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(me)for(let J=0,ee=te.length;J<ee;J++){let _e=n.get(te[J]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ae(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){let ee=te[J];z.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[J]);let _e=r.convert(ee.format,ee.colorSpace),O=r.convert(ee.type),K=w(ee.internalFormat,_e,O,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),X=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,z.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Te(i.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(z.__webglFramebuffer[J][ee],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else ve(z.__webglFramebuffer[J],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(y)?M(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(me){for(let J=0,ee=te.length;J<ee;J++){let _e=te[J],O=n.get(_e),K=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,O.__webglTexture),Te(K,_e),ve(z.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+J,K,0),E(_e)&&M(K)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,oe.__webglTexture),Te(J,y),y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ve(z.__webglFramebuffer[ee],R,y,i.COLOR_ATTACHMENT0,J,ee);else ve(z.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,J,0);E(y)?M(J):y.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&rt(R)}function T(R){let y=R.textures;for(let z=0,oe=y.length;z<oe;z++){let te=y[z];if(E(te)&&te.mipmapsAutoUpdate===!0){let ge=A(R),me=n.get(te).__webglTexture;t.bindTexture(ge,me),M(ge),t.unbindTexture()}}}let Ae=[];function Pe(R){if(R.samples>0){if(ae(R)===!1){let y=R.textures,z=R.width,oe=R.height,te=i.COLOR_BUFFER_BIT,ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(R),J=y.length>1;if(J)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let O=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,z,oe,0,0,z,oe,te,i.NEAREST),l===!0&&(Ae.length=0,Ae.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ae.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);let O=n.get(y[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function ae(R){let y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ct(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function ze(R,y){let z=R.colorSpace,oe=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ln&&z!==bi&&(at.getTransfer(z)===gt?(oe!==Pn||te!==_n)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",z)),y}function Xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ve,this.resetTextureUnits=j,this.getTextureUnits=ie,this.setTextureUnits=Le,this.setTexture2D=ye,this.setTexture2DArray=De,this.setTexture3D=le,this.setTextureCube=ne,this.rebindTextures=lt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ae,this.dispose=k}function Ix(i,e){function t(n,s=bi){let r,a=at.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===$c)return i.SHORT;if(n===nr)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===Yc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===Pn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Bo)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===Hi)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===Ho)return i.RGBA_INTEGER;if(n===oa||n===la||n===ca||n===ha)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vo||n===Go||n===Wo||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Ko||n===ua||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ua)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qo)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===il)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ol)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ll)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ul)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===fl||n===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dl)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===gl||n===da||n===_l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $n({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",p=new Th,m={},S=t.getContextAttributes(),E=null,M=null,A=[],w=[],_=new he,x=null,D=null,I=new Ot;I.viewport=new xt;let N=new Ot;N.viewport=new xt;let B=[I,N],H=new Io,P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ye=A[Z];return ye===void 0&&(ye=new zs,A[Z]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Z){let ye=A[Z];return ye===void 0&&(ye=new zs,A[Z]=ye),ye.getGripSpace()},this.getHand=function(Z){let ye=A[Z];return ye===void 0&&(ye=new zs,A[Z]=ye),ye.getHandSpace()};function $(Z){let ye=w.indexOf(Z.inputSource);if(ye===-1)return;let De=A[ye];De!==void 0&&(De.update(Z.inputSource,Z.frame,c||a),De.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",re);for(let Z=0;Z<A.length;Z++){let ye=w[Z];ye!==null&&(w[Z]=null,A[Z].disconnect(ye))}P=null,k=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,M=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(_.width,_.height,!1),D!==null){let Z=D.camera;Z.fov=D.fov,Z.zoom=D.zoom,Z.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,le=null,ne=null;S.depth&&(ne=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=S.stencil?Si:hi,le=S.stencil?fs:zn);let ce={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new bn(d.textureWidth,d.textureHeight,{format:Pn,type:_n,depthTexture:new mi(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let De={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new bn(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(Z){for(let ye=0;ye<Z.removed.length;ye++){let De=Z.removed[ye],le=w.indexOf(De);le>=0&&(w[le]=null,A[le].disconnect(De))}for(let ye=0;ye<Z.added.length;ye++){let De=Z.added[ye],le=w.indexOf(De);if(le===-1){for(let ce=0;ce<A.length;ce++)if(ce>=w.length){w.push(De),le=ce;break}else if(w[ce]===null){w[ce]=De,le=ce;break}if(le===-1)break}let ne=A[le];ne&&ne.connect(De)}}function Y(Z,ye){ye===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ye.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ye=Z.near,De=Z.far;p.texture!==null&&(p.depthNear>0&&(ye=p.depthNear),p.depthFar>0&&(De=p.depthFar)),H.near=N.near=I.near=ye,H.far=N.far=I.far=De,(P!==H.near||k!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,k=H.far),H.layers.mask=Z.layers.mask|6,I.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let le=Z.parent,ne=H.cameras;Y(H,le);for(let ce=0;ce<ne.length;ce++)Y(ne[ce],le);H.projectionMatrix.copy(I.projectionMatrix),H.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&Z.isPerspectiveCamera&&(D={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,H,le)};function j(Z,ye,De){De===null?Z.matrix.copy(ye.matrixWorld):(Z.matrix.copy(De.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ye.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ye.projectionMatrix),Z.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Z){return m[Z]};let ie=null;function Le(Z,ye){if(h=ye.getViewerPose(c||a),g=ye,h!==null){let De=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;De.length!==H.cameras.length&&(H.cameras.length=0,le=!0);for(let Me=0;Me<De.length;Me++){let Te=De[Me],Be=null;if(f!==null)Be=f.getViewport(Te);else{let de=u.getViewSubImage(d,Te);Be=de.viewport,Me===0&&(e.setRenderTargetTextures(M,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(M))}let Q=B[Me];Q===void 0&&(Q=new Ot,Q.layers.enable(Me),Q.viewport=new xt,B[Me]=Q),Q.matrix.fromArray(Te.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Te.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Be.x,Be.y,Be.width,Be.height),Me===0&&(H.matrix.copy(Q.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),le===!0&&H.cameras.push(Q)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let Me=u.getDepthInformation(De[0]);Me&&Me.isValid&&Me.texture&&p.init(Me,s.renderState)}if(ne&&ne.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Me=0;Me<De.length;Me++){let Te=De[Me].camera;if(Te){let Be=m[Te];Be||(Be=new Br,m[Te]=Be);let Q=u.getCameraImage(Te);Be.sourceTexture=Q}}}}for(let De=0;De<A.length;De++){let le=w[De],ne=A[De];le!==null&&ne!==void 0&&ne.update(le,ye,c||a)}ie&&ie(Z,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),g=null}let Ve=new Rf;Ve.setAnimationLoop(Le),this.setAnimationLoop=function(Z){ie=Z},this.dispose=function(){}}},Dx=new je,Bf=new Ze;Bf.set(-1,0,0,0,1,0,0,0,1);function Nx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,oh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),E=S.envMap,M=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,e,t,n){let s={},r={};function a(S,E){let M=E.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,E){let M=s[S.id];M===void 0&&(g(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",p));let A=E.program;n.updateUBOMapping(S,A);let w=e.render.frame;r[S.id]!==w&&(c(S),r[S.id]=w)}function l(S){let E=i.createBuffer(),M=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){let E=s[S.id],M=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=M.length;w<_;w++){let x=M[w];if(Array.isArray(x))for(let D=0,I=x.length;D<I;D++)h(x[D],w,D,A);else h(x,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,M,A){if(d(S,E,M,A)===!0){let w=S.__offset,_=S.value;if(Array.isArray(_)){let x=0;for(let D=0;D<_.length;D++){let I=_[D],N=v(I,!0);u(I,S.__data,x),x+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,S.__data)}}function u(S,E,M){typeof S=="number"||typeof S=="boolean"?E[M]=S:S.isMatrix3?(E[M]=S.elements[0],E[M+1]=S.elements[1],E[M+2]=S.elements[2],E[M+3]=0,E[M+4]=S.elements[3],E[M+5]=S.elements[4],E[M+6]=S.elements[5],E[M+7]=0,E[M+8]=S.elements[6],E[M+9]=S.elements[7],E[M+10]=S.elements[8],E[M+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-M),M):S.toArray(E,M)}function d(S,E,M,A){let w=S.value,_=E+"_"+M;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let x=A[_],D=!1;for(let I=0;I<w.length;I++)f(w[I],x,I)===!0&&(D=!0);return D}return f(w,A,_)}function f(S,E,M){if(E[M]===void 0)return typeof S=="number"||typeof S=="boolean"?E[M]=S:ArrayBuffer.isView(S)?E[M]=S.slice():E[M]=S.clone(),!0;{let A=E[M];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return E[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){let E=S.uniforms,M=0,A=16;for(let _=0,x=E.length;_<x;_++){let D=Array.isArray(E[_])?E[_]:[E[_]];for(let I=0,N=D.length;I<N;I++){let B=D[I],H=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(E[_])||Array.isArray(B.value),k=M;for(let W=0,re=H.length;W<re;W++){let Y=H[W],j=v(Y,P),ie=M%A,Le=ie%j.boundary,Ve=ie+Le;M+=Le,Ve!==0&&A-Ve<j.storage&&(M+=A-Ve),W===0&&(k=M),M+=j.storage}let $=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new $((M-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let w=M%A;return w>0&&(M+=A-w),S.__size=M,S.__cache={},this}function v(S,E){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):He("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(S){let E=S.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function Fx(){return Kn===null&&(Kn=new Ws(Ox,16,16,Hi,Hn),Kn.name="DFG_LUT",Kn.minFilter=Ft,Kn.magFilter=Ft,Kn.wrapS=Rn,Kn.wrapT=Rn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var bl=class{constructor(e={}){let{canvas:t=Yd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,p=new Set([Ho,zo,ko]),m=new Set([_n,zn,nr,fs,Oo,Fo]),S=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],x=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,B=null,H=null,P=null,k=null;this._outputColorSpace=Rt;let $=0,W=0,re=null,Y=-1,j=null,ie=new xt,Le=new xt,Ve=null,Z=new qe(0),ye=0,De=t.width,le=t.height,ne=1,ce=null,Ee=null,Me=new xt(0,0,De,le),Te=new xt(0,0,De,le),Be=!1,Q=new Ni,de=new ho,se=!1,we=!1,ve=new je,Ke=new L,Fe=new xt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function U(){return re===null?ne:1}let T=n;function Ae(b,F){return t.getContext(b,F)}let Pe,We,ae,ct,ze,Xe,R,y,z,oe,te,ge,me,J,ee,_e,O,K,X,fe,pe,xe,Ge;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Re,!1),T===null){let F="webgl2";if(T=Ae(F,b),T===null)throw Ae(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(b){throw t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ye("WebGLRenderer: "+b.message),b}function it(){Pe=new Y_(T),Pe.init(),pe=new Ix(T,Pe),We=new F_(T,Pe,e,pe),ae=new Rx(T,Pe),We.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),H=T.createFramebuffer(),P=T.createFramebuffer(),k=T.createFramebuffer(),ct=new J_(T),ze=new px,Xe=new Cx(T,Pe,ae,ze,We,pe,ct),R=new q_(I),y=new Qm(T),xe=new U_(T,y),z=new Z_(T,y,ct,xe),oe=new Q_(T,z,y,xe,ct),K=new j_(T,We,Xe),ee=new B_(ze),te=new fx(I,R,Pe,We,xe,ee),ge=new Nx(I,ze),me=new gx,J=new Sx(Pe),O=new N_(I,R,ae,oe,g,l),_e=new Ax(I,oe,We),Ge=new Ux(T,ct,We,ae),X=new O_(T,Pe,ct),fe=new K_(T,Pe,ct),ct.programs=te.programs,I.capabilities=We,I.extensions=Pe,I.properties=ze,I.renderLists=me,I.shadowMap=_e,I.state=ae,I.info=ct}v!==_n&&(D=new tv(v,t.width,t.height,o,s,r));let ue=new Eh(I,T);this.xr=ue,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let b=Pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(De,le,!1))},this.getSize=function(b){return b.set(De,le)},this.setSize=function(b,F,q=!0){if(ue.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}De=b,le=F,t.width=Math.floor(b*ne),t.height=Math.floor(F*ne),q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(De*ne,le*ne).floor()},this.setDrawingBufferSize=function(b,F,q){De=b,le=F,ne=q,t.width=Math.floor(b*q),t.height=Math.floor(F*q),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(v===_n){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,F,q,V){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,F,q,V),ae.viewport(ie.copy(Me).multiplyScalar(U()).round())},this.getScissor=function(b){return b.copy(Te)},this.setScissor=function(b,F,q,V){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,F,q,V),ae.scissor(Le.copy(Te).multiplyScalar(U()).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(b){ae.setScissorTest(Be=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){Ee=b},this.getClearColor=function(b){return b.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,q=!0){let V=0;if(b){let G=!1;if(re!==null){let be=re.texture.format;G=p.has(be)}if(G){let be=re.texture.type,Ne=m.has(be),Se=O.getClearColor(),Ie=O.getClearAlpha(),ke=Se.r,Je=Se.g,ht=Se.b;Ne?(S[0]=ke,S[1]=Je,S[2]=ht,S[3]=Ie,T.clearBufferuiv(T.COLOR,0,S)):(E[0]=ke,E[1]=Je,E[2]=ht,E[3]=Ie,T.clearBufferiv(T.COLOR,0,E))}else V|=T.COLOR_BUFFER_BIT}F&&(V|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),O.dispose(),me.dispose(),J.dispose(),Xe.dispose(),ze.dispose(),R.dispose(),oe.dispose(),z.dispose(),xe.dispose(),Ge.dispose(),te.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",fu),ue.removeEventListener("sessionend",pu),Wi.stop()};function $e(b){b.preventDefault(),Tr("WebGLRenderer: Context Lost."),N=!0}function tt(){Tr("WebGLRenderer: Context Restored."),N=!1;let b=ct.autoReset,F=_e.enabled,q=_e.autoUpdate,V=_e.needsUpdate,G=_e.type;it(),ct.autoReset=b,_e.enabled=F,_e.autoUpdate=q,_e.needsUpdate=V,_e.type=G}function Re(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){let F=b.target;F.removeEventListener("dispose",vt),Gt(F)}function Gt(b){Ei(b),ze.remove(b)}function Ei(b){let F=ze.get(b).programs;F!==void 0&&(F.forEach(function(q){te.releaseProgram(q)}),b.isShaderMaterial&&te.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,q,V,G,be){F===null&&(F=rt);let Ne=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=Mp(b,F,q,V,G);ae.setMaterial(V,Ne);let Ie=q.index,ke=1;if(V.wireframe===!0){if(Ie=z.getWireframeAttribute(q),Ie===void 0)return;ke=2}let Je=q.drawRange,ht=q.attributes.position,Ue=Je.start*ke,ut=(Je.start+Je.count)*ke;be!==null&&(Ue=Math.max(Ue,be.start*ke),ut=Math.min(ut,(be.start+be.count)*ke)),Ie!==null?(Ue=Math.max(Ue,0),ut=Math.min(ut,Ie.count)):ht!=null&&(Ue=Math.max(Ue,0),ut=Math.min(ut,ht.count));let Nt=ut-Ue;if(Nt<0||Nt===1/0)return;xe.setup(G,V,Se,q,Ie);let Et,bt=X;if(Ie!==null&&(Et=y.get(Ie),bt=fe,bt.setIndex(Et)),G.isMesh)V.wireframe===!0?(ae.setLineWidth(V.wireframeLinewidth*U()),bt.setMode(T.LINES)):bt.setMode(T.TRIANGLES);else if(G.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),ae.setLineWidth(Zt*U()),G.isLineSegments?bt.setMode(T.LINES):G.isLineLoop?bt.setMode(T.LINE_LOOP):bt.setMode(T.LINE_STRIP)}else G.isPoints?bt.setMode(T.POINTS):G.isSprite&&bt.setMode(T.TRIANGLES);if(G.isBatchedMesh)if(Pe.get("WEBGL_multi_draw"))bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Zt=G._multiDrawStarts,Oe=G._multiDrawCounts,an=G._multiDrawCount,pt=Ie?y.get(Ie).bytesPerElement:1,$i=ze.get(V).currentProgram.getUniforms();for(let Kt=0;Kt<an;Kt++)$i.setValue(T,"_gl_DrawID",Kt),bt.render(Zt[Kt]/pt,Oe[Kt])}else if(G.isInstancedMesh)bt.renderInstances(Ue,Nt,G.count);else if(q.isInstancedBufferGeometry){let Zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Oe=Math.min(q.instanceCount,Zt);bt.renderInstances(Ue,Nt,Oe)}else bt.render(Ue,Nt)};function du(b,F,q,V){B!==null&&b.isNodeMaterial&&B.setObject(V,b),se===!0&&ee.setState(b,q,!1),b.transparent===!0&&b.side===gn&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,cr(b,F,V),b.side=Yn,b.needsUpdate=!0,cr(b,F,V),b.side=gn):cr(b,F,V)}this.compile=function(b,F,q=null){q===null&&(q=b),B!==null&&B.renderStart(b,F,q),w=J.get(q),w.init(F),x.push(w),q.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),B!==null&&B.updateLights(w.state.lightsArray),we=this.localClippingEnabled,se=ee.init(this.clippingPlanes,we),se===!0&&ee.setGlobalState(this.clippingPlanes,F),B!==null&&_e.render(w.state.shadowsArray,q,F);let V=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let be=G.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){let Se=be[Ne];du(Se,q,F,G),V.add(Se)}else du(be,q,F,G),V.add(be)}),w=x.pop(),B!==null&&B.renderEnd(),V},this.compileAsync=function(b,F,q=null){let V=this.compile(b,F,q);return new Promise(G=>{function be(){if(V.forEach(function(Ne){let Ie=ze.get(Ne).currentProgram;(Ie===void 0||Ie.isReady())&&V.delete(Ne)}),V.size===0){G(b);return}setTimeout(be,10)}Pe.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Fl=null;function xp(b){Fl&&Fl(b)}function fu(){Wi.stop()}function pu(){Wi.start()}let Wi=new Rf;Wi.setAnimationLoop(xp),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(b){Fl=b,ue.setAnimationLoop(b),b===null?Wi.stop():Wi.start()},ue.addEventListener("sessionstart",fu),ue.addEventListener("sessionend",pu),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(b,F);let q=ue.enabled===!0&&ue.isPresenting===!0,V=D!==null&&(re===null||q)&&D.begin(I,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,re),w=J.get(b,x.length),w.init(F),w.state.textureUnits=Xe.getTextureUnits(),x.push(w),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?de.setFromArrayCamera(F):Q.setFromProjectionMatrix(ve,Cn,F.reversedDepth),we=this.localClippingEnabled,se=ee.init(this.clippingPlanes,we),A=me.get(b,_.length),A.init(),_.push(A),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&Bl(Ne,F,-1/0,I.sortObjects)}Bl(b,F,0,I.sortObjects),A.finish(),B!==null&&B.updateLights(w.state.lightsArray),I.sortObjects===!0&&A.sort(ce,Ee),lt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,lt&&O.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),se===!0&&ee.beginShadows();let G=w.state.shadowsArray;if(_e.render(G,b,F),se===!0&&ee.endShadows(),(V&&D.hasRenderPass())===!1){let Ne=A.opaque,Se=A.transmissive;if(w.setupLights(),F.isArrayCamera){let Ie=F.cameras;if(Se.length>0)for(let ke=0,Je=Ie.length;ke<Je;ke++){let ht=Ie[ke];gu(Ne,Se,b,ht)}lt&&O.render(b);for(let ke=0,Je=Ie.length;ke<Je;ke++){let ht=Ie[ke];mu(A,b,ht,ht.viewport)}}else Se.length>0&&gu(Ne,Se,b,F),lt&&O.render(b),mu(A,b,F)}re!==null&&W===0&&(Xe.updateMultisampleRenderTarget(re),Xe.updateRenderTargetMipmap(re)),V&&D.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),xe.resetDefaultState(),Y=-1,j=null,x.pop(),x.length>0?(w=x[x.length-1],Xe.setTextureUnits(w.state.textureUnits),se===!0&&ee.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Bl(b,F,q,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ne=F.isArrayCamera?de:Q;if(!b.frustumCulled||b.intersectsFrustum(Ne)){V&&Fe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ve);let Se=oe.update(b),Ie=b.material;Ie.visible&&A.push(b,Se,Ie,q,Fe.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let Ne=F.isArrayCamera?de:Q;if(!b.frustumCulled||b.intersectsFrustum(Ne)){let Se=oe.update(b),Ie=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Fe.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Fe.copy(Se.boundingSphere.center)),Fe.applyMatrix4(b.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){let ke=Se.groups;for(let Je=0,ht=ke.length;Je<ht;Je++){let Ue=ke[Je],ut=Ie[Ue.materialIndex];ut&&ut.visible&&A.push(b,Se,ut,q,Fe.z,Ue,F)}}else Ie.visible&&A.push(b,Se,Ie,q,Fe.z,null,F)}}}let be=b.children;for(let Ne=0,Se=be.length;Ne<Se;Ne++)Bl(be[Ne],F,q,V)}function mu(b,F,q,V){let{opaque:G,transmissive:be,transparent:Ne}=b;w.setupLightsView(q),se===!0&&ee.setGlobalState(I.clippingPlanes,q),V&&ae.viewport(ie.copy(V)),G.length>0&&ya(G,F,q),be.length>0&&ya(be,F,q),Ne.length>0&&ya(Ne,F,q),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function gu(b,F,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Ue=Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new bn(1,1,{generateMipmaps:!0,type:Ue?Hn:_n,minFilter:In,samples:Math.max(4,We.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let be=w.state.transmissionRenderTarget[V.id],Ne=V.viewport||ie;be.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let Se=I.getRenderTarget(),Ie=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(Z),ye=I.getClearAlpha(),ye<1&&I.setClearColor(16777215,.5),I.clear(),lt&&O.render(q);let Je=I.toneMapping;I.toneMapping=Zn;let ht=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),se===!0&&ee.setGlobalState(I.clippingPlanes,V),ya(b,q,V),Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ut=0,Nt=F.length;ut<Nt;ut++){let Et=F[ut],{object:bt,geometry:Zt,material:Oe,group:an}=Et;if(Oe.side===gn&&bt.layers.test(V.layers)){let pt=Oe.side;Oe.side=un,Oe.needsUpdate=!0,_u(bt,q,V,Zt,Oe,an),Oe.side=pt,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Xe.updateMultisampleRenderTarget(be),Xe.updateRenderTargetMipmap(be))}I.setRenderTarget(Se,Ie,ke),I.setClearColor(Z,ye),ht!==void 0&&(V.viewport=ht),I.toneMapping=Je}function ya(b,F,q){let V=F.isScene===!0?F.overrideMaterial:null;for(let G=0,be=b.length;G<be;G++){let Ne=b[G],{object:Se,geometry:Ie,group:ke}=Ne,Je=Ne.material;Je.allowOverride===!0&&V!==null&&(Je=V),Se.layers.test(q.layers)&&_u(Se,F,q,Ie,Je,ke)}}function _u(b,F,q,V,G,be){B!==null&&G.isNodeMaterial&&B.setObject(b,G),b.onBeforeRender(I,F,q,V,G,be),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(I,F,q,V,b,be),G.transparent===!0&&G.side===gn&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,I.renderBufferDirect(q,F,V,G,b,be),G.side=Yn,G.needsUpdate=!0,I.renderBufferDirect(q,F,V,G,b,be),G.side=gn):I.renderBufferDirect(q,F,V,G,b,be),b.onAfterRender(I,F,q,V,G,be)}function vu(b){let F=0;for(let q of b)q.texture!==null&&F++;return F}function cr(b,F,q){F.isScene!==!0&&(F=rt);let V=ze.get(b),G=w.state.lights,be=w.state.shadowsArray,Ne=G.state.version,Se=te.getParameters(b,G.state,be,F,q,w.state.lightProbeGridArray),Ie=te.getProgramCacheKey(Se),ke=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=R.get(b.envMap||V.environment,Je),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",vt),ke=new Map,V.programs=ke,V.programVariants=new Map);let ht=ke.get(Ie);if(ht!==void 0){if(V.currentProgram===ht&&V.lightsStateVersion===Ne)return yu(b,Se),ht}else Se.uniforms=te.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,q,Se),b.onBeforeCompile(Se,I),ht=te.acquireProgram(Se,Ie),ke.set(Ie,ht),V.uniforms=Se.uniforms;let Ue=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),yu(b,Se),V.needsLights=bp(b),V.lightsStateVersion=Ne,V.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.sunLights.value=G.state.sun,Ue.sunLightShadows.value=G.state.sunShadow,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.sunShadowMatrix.value=G.state.sunShadowMatrix,Ue.sunShadowCascade.value=G.state.sunShadowCascade,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),V.numLightProbeGrids=vu(w.state.lightProbeGridArray),V.currentProgram=ht,V.uniformsList=null,ht}function yp(b,F,q,V,G){let be=ze.get(b),Ne=be.currentProgram.id+","+V+","+G,Se=be.programVariants.get(Ne);return Se===void 0?(Se=cr(b,F,q),be.programVariants.set(Ne,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=V,be.toneMapping=G),Se}function xu(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=rr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function yu(b,F){let q=ze.get(b);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function Mp(b,F,q,V,G){F.isScene!==!0&&(F=rt),Xe.resetTextureUnits();let be=F.fog,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Se=re===null?I.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:at.workingColorSpace,Ie=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ke=R.get(V.envMap||Ne,Ie),Je=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ht=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!q.morphAttributes.position,ut=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color,Et=Zn;V.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Et=I.toneMapping);let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=bt!==void 0?bt.length:0,Oe=ze.get(V),an=w.state.lights;if(se===!0&&(we===!0||b!==j)){let At=b===j&&V.id===Y;ee.setState(V,b,At)}let pt=!1,$i=!1;V.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==an.state.version||G.isBatchedMesh&&Oe.batching===!1||!G.isBatchedMesh&&Oe.batching===!0||G.isBatchedMesh&&Oe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Oe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Oe.instancing===!1||!G.isInstancedMesh&&Oe.instancing===!0||G.isSkinnedMesh&&Oe.skinning===!1||!G.isSkinnedMesh&&Oe.skinning===!0||G.isInstancedMesh&&Oe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Oe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Oe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Oe.instancingMorph===!1&&G.morphTexture!==null||Oe.envMap!==ke||V.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ee.numPlanes||Oe.numIntersection!==ee.numIntersection)||Oe.vertexAlphas!==Je||Oe.vertexTangents!==ht||Oe.morphTargets!==Ue||Oe.morphNormals!==ut||Oe.morphColors!==Nt||Oe.morphTargetsCount!==Zt||Oe.numLightProbeGrids!==vu(w.state.lightProbeGridArray)?pt=!0:(Oe.outputColorSpace!==Se||Oe.toneMapping!==Et)&&($i=!0):(pt=!0,Oe.__version=V.version);let Kt=Oe.currentProgram;(pt===!0||$i===!0)&&(Kt=$i===!0?yp(V,F,G,Se,Et):cr(V,F,G),B&&V.isNodeMaterial&&B.onUpdateProgram(V,Kt,Oe));let Ma=!1,wi=!1,Xi=!1,dt=Kt.getUniforms(),qt=Oe.uniforms;if(ae.useProgram(Kt.program)&&(Ma=!0,wi=!0,Xi=!0),V.id!==Y&&(Y=V.id,wi=!0),Ma||j!==b){ae.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(T,"projectionMatrix",b.projectionMatrix),dt.setValue(T,"viewMatrix",b.matrixWorldInverse);let Wt=dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(T,Ke.setFromMatrixPosition(b.matrixWorld)),We.logarithmicDepthBuffer&&dt.setValue(T,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(T,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,wi=!0,Xi=!0)}if(Oe.needsLights&&(an.state.sunShadowMap.length>0&&dt.setValue(T,"sunShadowMap",an.state.sunShadowMap,Xe),an.state.directionalShadowMap.length>0&&dt.setValue(T,"directionalShadowMap",an.state.directionalShadowMap,Xe),an.state.spotShadowMap.length>0&&dt.setValue(T,"spotShadowMap",an.state.spotShadowMap,Xe),an.state.pointShadowMap.length>0&&dt.setValue(T,"pointShadowMap",an.state.pointShadowMap,Xe)),G.isSkinnedMesh){dt.setOptional(T,G,"bindMatrix"),dt.setOptional(T,G,"bindMatrixInverse");let At=G.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),dt.setValue(T,"boneTexture",At.boneTexture,Xe))}G.isBatchedMesh&&(dt.setOptional(T,G,"batchingTexture"),dt.setValue(T,"batchingTexture",G._matricesTexture,Xe),dt.setOptional(T,G,"batchingIdTexture"),dt.setValue(T,"batchingIdTexture",G._indirectTexture,Xe),dt.setOptional(T,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(T,"batchingColorTexture",G._colorsTexture,Xe));let Nn=q.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&K.update(G,q,Kt),(wi||Oe.receiveShadow!==G.receiveShadow)&&(Oe.receiveShadow=G.receiveShadow,dt.setValue(T,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Fx()),wi){if(dt.setValue(T,"toneMappingExposure",I.toneMappingExposure),Oe.needsLights&&Sp(qt,Xi),be&&V.fog===!0&&ge.refreshFogUniforms(qt,be),ge.refreshMaterialUniforms(qt,V,ne,le,w.state.transmissionRenderTarget[b.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let At=M,Wt=0;for(let ti of w.state.lightProbeGridArray)ti.texture!==null&&(At.textures[Wt]=ti.texture,At.min[Wt]=ti.boundingBox.min,At.max[Wt]=ti.boundingBox.max,At.resolution[Wt]=ti.resolution,Wt++);for(let ti in At)At[ti].length=Wt;qt.probesSH.value=At.textures,qt.probesMin.value=At.min,qt.probesMax.value=At.max,qt.probesResolution.value=At.resolution}rr.upload(T,xu(Oe),qt,Xe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rr.upload(T,xu(Oe),qt,Xe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(T,"center",G.center),dt.setValue(T,"modelViewMatrix",G.modelViewMatrix),dt.setValue(T,"normalMatrix",G.normalMatrix),dt.setValue(T,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let At=V.uniformsGroups;for(let Wt=0,ti=At.length;Wt<ti;Wt++){let Su=At[Wt];Ge.update(Su,Kt),Ge.bind(Su,Kt)}}return Kt}function Sp(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function bp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,F,q){let V=ze.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=F,ze.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let q=ze.get(b);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,q=0){re=b,$=F,W=q;let V=null,G=!1,be=!1;if(b){let Se=ze.get(b);if(Se.__useDefaultFramebuffer!==void 0){ae.bindFramebuffer(T.FRAMEBUFFER,Se.__webglFramebuffer),ie.copy(b.viewport),Le.copy(b.scissor),Ve=b.scissorTest,ae.viewport(ie),ae.scissor(Le),ae.setScissorTest(Ve),Y=-1;return}else if(Se.__webglFramebuffer===void 0)Xe.setupRenderTarget(b);else if(Se.__hasExternalTextures)Xe.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Je=b.depthTexture;if(Se.__boundDepthTexture!==Je){if(Je!==null&&ze.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(b)}}let Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);let ke=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?V=ke[F][q]:V=ke[F],G=!0):b.samples>0&&Xe.useMultisampledRTT(b)===!1?V=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?V=ke[q]:V=ke,ie.copy(b.viewport),Le.copy(b.scissor),Ve=b.scissorTest}else ie.copy(Me).multiplyScalar(ne).floor(),Le.copy(Te).multiplyScalar(ne).floor(),Ve=Be;if(q!==0&&(V=H),ae.bindFramebuffer(T.FRAMEBUFFER,V)&&ae.drawBuffers(b,V),ae.viewport(ie),ae.scissor(Le),ae.setScissorTest(Ve),G){let Se=ze.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,q)}else if(be){let Se=F;for(let Ie=0;Ie<b.textures.length;Ie++){let ke=ze.get(b.textures[Ie]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ie,ke.__webglTexture,q,Se)}}else if(b!==null&&q!==0){let Se=ze.get(b.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Se.__webglTexture,q)}Y=-1};function Mu(b){let F=ze.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=We.textureFormatReadable(b.format),F.__typeReadable=We.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,q,V,G,be,Ne,Se=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne],Array.isArray(Ie)&&(Ie=Ie[0])),Ie){ae.bindFramebuffer(T.FRAMEBUFFER,Ie);try{let ke=b.textures[Se],Je=ke.format,ht=ke.type;b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se);let Ue=Mu(ke);if(Ue.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&q>=0&&q<=b.height-G&&T.readPixels(F,q,V,G,pe.convert(Je),pe.convert(ht),be)}finally{let ke=re!==null?ze.get(re).__webglFramebuffer:null;ae.bindFramebuffer(T.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,F,q,V,G,be,Ne,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ie=Ie[Ne],Array.isArray(Ie)&&(Ie=Ie[0])),Ie)if(F>=0&&F<=b.width-V&&q>=0&&q<=b.height-G){ae.bindFramebuffer(T.FRAMEBUFFER,Ie);let ke=b.textures[Se],Je=ke.format,ht=ke.type;b.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Se);let Ue=Mu(ke);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ut),T.bufferData(T.PIXEL_PACK_BUFFER,be.byteLength,T.STREAM_READ),T.readPixels(F,q,V,G,pe.convert(Je),pe.convert(ht),0),T.bindBuffer(T.PIXEL_PACK_BUFFER,null);let Nt=re!==null?ze.get(re).__webglFramebuffer:null;ae.bindFramebuffer(T.FRAMEBUFFER,Nt);let Et=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Kd(T,Et,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ut),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,be),T.bindBuffer(T.PIXEL_PACK_BUFFER,null),T.deleteBuffer(ut),T.deleteSync(Et),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,q=0){let V=Math.pow(2,-q),G=Math.floor(b.image.width*V),be=Math.floor(b.image.height*V),Ne=F!==null?F.x:0,Se=F!==null?F.y:0;Xe.setTexture2D(b,0),T.copyTexSubImage2D(T.TEXTURE_2D,q,0,0,Ne,Se,G,be),ae.unbindTexture()},this.copyTextureToTexture=function(b,F,q=null,V=null,G=0,be=0){let Ne,Se,Ie,ke,Je,ht,Ue,ut,Nt,Et=b.isCompressedTexture?b.mipmaps[be]:b.image;if(q!==null)Ne=q.max.x-q.min.x,Se=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Je=q.min.y,ht=q.isBox3?q.min.z:0;else{let dt=Math.pow(2,-G);Ne=Math.floor(Et.width*dt),Se=Math.floor(Et.height*dt),b.isDataArrayTexture?Ie=Et.depth:b.isData3DTexture?Ie=Math.floor(Et.depth*dt):Ie=1,ke=0,Je=0,ht=0}V!==null?(Ue=V.x,ut=V.y,Nt=V.z):(Ue=0,ut=0,Nt=0);let bt=pe.convert(F.format),Zt=pe.convert(F.type),Oe;F.isData3DTexture?(Xe.setTexture3D(F,0),Oe=T.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Xe.setTexture2DArray(F,0),Oe=T.TEXTURE_2D_ARRAY):(Xe.setTexture2D(F,0),Oe=T.TEXTURE_2D),ae.activeTexture(T.TEXTURE0),ae.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),ae.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ae.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);let an=ae.getParameter(T.UNPACK_ROW_LENGTH),pt=ae.getParameter(T.UNPACK_IMAGE_HEIGHT),$i=ae.getParameter(T.UNPACK_SKIP_PIXELS),Kt=ae.getParameter(T.UNPACK_SKIP_ROWS),Ma=ae.getParameter(T.UNPACK_SKIP_IMAGES);ae.pixelStorei(T.UNPACK_ROW_LENGTH,Et.width),ae.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Et.height),ae.pixelStorei(T.UNPACK_SKIP_PIXELS,ke),ae.pixelStorei(T.UNPACK_SKIP_ROWS,Je),ae.pixelStorei(T.UNPACK_SKIP_IMAGES,ht);let wi=b.isDataArrayTexture||b.isData3DTexture,Xi=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let dt=ze.get(b),qt=ze.get(F),Nn=ze.get(dt.__renderTarget),At=ze.get(qt.__renderTarget);ae.bindFramebuffer(T.READ_FRAMEBUFFER,Nn.__webglFramebuffer),ae.bindFramebuffer(T.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Wt=0;Wt<Ie;Wt++)wi&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,G,ht+Wt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ze.get(F).__webglTexture,be,Nt+Wt)),T.blitFramebuffer(ke,Je,ke+Ne,Je+Se,Ue,ut,Ue+Ne,ut+Se,T.DEPTH_BUFFER_BIT,T.NEAREST);ae.bindFramebuffer(T.READ_FRAMEBUFFER,null),ae.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||ze.has(b)){let dt=ze.get(b),qt=ze.get(F);ae.bindFramebuffer(T.READ_FRAMEBUFFER,P),ae.bindFramebuffer(T.DRAW_FRAMEBUFFER,k);for(let Nn=0;Nn<Ie;Nn++)wi?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,dt.__webglTexture,G,ht+Nn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,dt.__webglTexture,G),Xi?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,qt.__webglTexture,be,Nt+Nn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,qt.__webglTexture,be),G!==0?T.blitFramebuffer(ke,Je,ke+Ne,Je+Se,Ue,ut,Ue+Ne,ut+Se,T.COLOR_BUFFER_BIT,T.NEAREST):Xi?T.copyTexSubImage3D(Oe,be,Ue,ut,Nt+Nn,ke,Je,Ne,Se):T.copyTexSubImage2D(Oe,be,Ue,ut,ke,Je,Ne,Se);ae.bindFramebuffer(T.READ_FRAMEBUFFER,null),ae.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Xi?b.isDataTexture||b.isData3DTexture?T.texSubImage3D(Oe,be,Ue,ut,Nt,Ne,Se,Ie,bt,Zt,Et.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(Oe,be,Ue,ut,Nt,Ne,Se,Ie,bt,Et.data):T.texSubImage3D(Oe,be,Ue,ut,Nt,Ne,Se,Ie,bt,Zt,Et):b.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,be,Ue,ut,Ne,Se,bt,Zt,Et.data):b.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,be,Ue,ut,Et.width,Et.height,bt,Et.data):T.texSubImage2D(T.TEXTURE_2D,be,Ue,ut,Ne,Se,bt,Zt,Et);ae.pixelStorei(T.UNPACK_ROW_LENGTH,an),ae.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),ae.pixelStorei(T.UNPACK_SKIP_PIXELS,$i),ae.pixelStorei(T.UNPACK_SKIP_ROWS,Kt),ae.pixelStorei(T.UNPACK_SKIP_IMAGES,Ma),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&T.generateMipmap(Oe),ae.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&Xe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Xe.setTextureCube(b,0):b.isData3DTexture?Xe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Xe.setTexture2DArray(b,0):Xe.setTexture2D(b,0),ae.unbindTexture()},this.resetState=function(){$=0,W=0,re=null,ae.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var zf={type:"change"},Ah={type:"start"},Vf={type:"end"},wl=new di,Hf=new Sn,Bx=Math.cos(70*sr.DEG2RAD),Ht=new L,vn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6,Al=class extends ra{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new en,this._lastTargetPosition=new L,this._quat=new en().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new L,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new L,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zx.bind(this),this._onPointerDown=kx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=Wx.bind(this),this._onKeyDown=$x.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=Vx.bind(this),this._onMouseMove=Gx.bind(this),this._interceptControlDown=Zx.bind(this),this._interceptControlUp=Kx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=mt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zf),this.update(),this.state=mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ht.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(wl.origin.copy(this.object.position),wl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wl.direction))<Bx?this.object.lookAt(this.target):(Hf.setFromNormalAndCoplanarPoint(this.object.up,this.target),wl.intersectPlane(Hf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(zf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function zx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vf),this.state=mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Ah)}function Gx(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Wx(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(Ah),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Vf))}function $x(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1){this.state=mt.NONE;break}this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1){this.state=mt.NONE;break}this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Ah)}function qx(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function Yx(i){this.enabled!==!1&&i.preventDefault()}function Zx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rh(i,e){if(e===Kc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ir||e===fa){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ir)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Gf(i){let e=new Map,t=new Map,n=i.clone();return Wf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Wf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Wf(i.children[n],e.children[n],t)}var Rl=class extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Uh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Cl(t,ot.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cl(t,ot.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Mi.extractUrlBase(e);a=Mi.resolveURL(c,this.path)}else a=Mi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ys(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zf){try{a[ot.KHR_BINARY_GLTF]=new Kh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new iu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new Dh;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new Jh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new jh;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new Qh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Jx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Pt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Lh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new qe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ln);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ta(h),c.distance=u;break;case"spot":c=new ea(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),jn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Dh=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new qe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ln),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},Nh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Uh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(r,r)}return Promise.all(s)}},Oh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Fh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Bh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},kh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},zh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(r[0],r[1],r[2],ln),Promise.all(s)}},Vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Gh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},Wh=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},$h=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Pt(this.parser,e,this.name)!==null?hn:null}extendMaterialParams(e,t){let n=Pt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Xh=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},qh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Yh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Cl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Zh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ln.TRIANGLES&&c.mode!==Ln.TRIANGLE_STRIP&&c.mode!==Ln.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let v=new je,p=new L,m=new en,S=new L(1,1,1),E=new Lr(g.geometry,g.material,d);for(let A=0;A<d;A++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,A),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,A),l.SCALE&&S.fromBufferAttribute(l.SCALE,A),E.setMatrixAt(A,v.compose(p,m,S));let M=null;for(let A in l)if(A==="_COLOR_0"){let w=l[A];E.instanceColor=new fi(w.array,w.itemSize,w.normalized)}else if(A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"){if(M===null){let _=E.geometry;M=new Dt,M.name=_.name;for(let x in _.attributes)M.setAttribute(x,_.attributes[x]);for(let x in _.morphAttributes)M.morphAttributes[x]=_.morphAttributes[x];_.index!==null&&M.setIndex(_.index),M.morphTargetsRelative=_.morphTargetsRelative;for(let x of _.groups)M.addGroup(x.start,x.count,x.materialIndex);_.boundingBox!==null&&(M.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(M.boundingSphere=_.boundingSphere.clone()),M.drawRange.start=_.drawRange.start,M.drawRange.count=_.drawRange.count,M.userData=Object.assign({},_.userData),E.geometry=M}let w=l[A];M.setAttribute(A,new fi(w.array,w.itemSize,w.normalized))}It.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Zf="glTF",va=12,$f={JSON:1313821514,BIN:5130562},Kh=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-va,r=new DataView(e,va),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===$f.JSON){let c=new Uint8Array(e,va+a,o);this.content=n.decode(c)}else if(l===$f.BIN){let c=va+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Jh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=tu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=tu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=or[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},o,c,ln,d)})})}},jh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Qh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},Il=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,v=g-c,p=-2*f+3*d,m=f-d,S=1-p,E=m-d+u;for(let M=0;M!==o;M++){let A=a[v+M+o],w=a[v+M+l]*h,_=a[g+M+o],x=a[g+M]*h;r[M]=S*A+E*w+p*_+m*x}return r}},jx=new en,eu=class extends Il{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return jx.fromArray(r).normalize().toArray(r),r}},Ln={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Xf={9728:Lt,9729:Ft,9984:No,9985:tr,9986:ds,9987:In},qf={33071:Rn,33648:Us,10497:Di},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qx={CUBICSPLINE:void 0,LINEAR:es,STEP:Qi},Ih={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ey(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ty(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ny(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iy(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ph(t.attributes):e=i.indices+":"+Ph(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ph(i.targets[n]);return e}function Ph(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ry=new je,iu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?(this.textureLoader=new jr(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ia(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ys(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ms(r,o,s),jn(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Mi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Ch[s.type],o=or[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Yt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Ch[s.type],c=or[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,p;if(f&&f!==u){let m=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,E=t.cache.get(S);E||(v=new c(o,m*f,s.count*f/h),E=new Hs(v,f/h),t.cache.add(S,E)),p=new Vs(E,l,d%f/h,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),p=new Yt(v,l,g);if(s.sparse!==void 0){let m=Ch.SCALAR,S=or[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,A=new S(a[1],E,s.sparse.count*m),w=new c(a[2],M,s.sparse.count*l);o!==null&&(p=new Yt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,x=A.length;_<x;_++){let D=A[_];if(p.setX(D,w[_*l]),l>=2&&p.setY(D,w[_*l+1]),l>=3&&p.setZ(D,w[_*l+2]),l>=4&&p.setW(D,w[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Xf[d.magFilter]||Ft,h.minFilter=Xf[d.minFilter]||In,h.wrapS=qf[d.wrapS]||Di,h.wrapT=qf[d.wrapT]||Di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Ft,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1,h;if(t.isKTX2Loader===!0&&a.bufferView!==void 0)h=n.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){t.parse(d,f,g)})});else{if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;t.isImageBitmapLoader===!0&&(v=function(p){let m=new Bt(p);m.needsUpdate=!0,f(m)}),t.load(Mi.resolveURL(d,r.path),v,void 0,g)})})}let u=h.then(function(d){return c===!0&&o.revokeObjectURL(l),jn(d,a),d.userData.mimeType=a.mimeType||sy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new $s,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new pi,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return pn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new qe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],ln),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=gn);let h=r.alphaMode||Ih.OPAQUE;if(h===Ih.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ih.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let u=r.emissiveFactor;o.emissive=new qe().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&a!==tn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ms(s,u,r),u})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Yf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=iy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Yf(new Dt,c,t),c.mode===Ln.TRIANGLE_STRIP?d=d.then(f=>Rh(f,fa)):c.mode===Ln.TRIANGLE_FAN&&(d=d.then(f=>Rh(f,ir))),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?ey(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],p=a[f],m,S=c[f];if(p.mode===Ln.TRIANGLES||p.mode===Ln.TRIANGLE_STRIP||p.mode===Ln.TRIANGLE_FAN||p.mode===void 0){let E=r.isSkinnedMesh===!0,M=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");E&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=E&&M?new Ir(v,S):new _t(v,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Ln.LINES)m=new Ui(v,S);else if(p.mode===Ln.LINE_STRIP)m=new ns(v,S);else if(p.mode===Ln.LINE_LOOP)m=new Dr(v,S);else if(p.mode===Ln.POINTS)m=new Nr(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&ny(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),jn(m,r),p.extensions&&ms(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ms(s,u[0],r),u[0];let d=new Qt;r.extensions&&ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(sr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ls(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new je;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pr(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,S=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let E=0,M=d.length;E<M;E++){let A=d[E],w=f[E],_=g[E],x=v[E],D=p[E];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let I=n._createAnimationTracks(A,w,_,x,D);if(I)for(let N=0;N<I.length;N++)m.push(I[N])}let S=new Jr(r,void 0,m);return jn(S,s),S})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ry)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Gs:c.length>1?h=new Qt:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),jn(h,r),r.extensions&&ms(n,h,r),r.matrix!==void 0){let u=new je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Qt;n.name&&(r.name=s.createUniqueName(n.name)),jn(r,n),n.extensions&&ms(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Gf(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof fn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Vi[r.path]===Vi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(Vi[r.path]){case Vi.weights:h=vi;break;case Vi.rotation:h=xi;break;case Vi.translation:case Vi.scale:h=Fi;break;default:n.itemSize===1?h=vi:h=Fi;break}let u=s.interpolation!==void 0?Qx[s.interpolation]:es,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){let v=new h(l[f]+"."+Vi[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof xi?eu:Il;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ay(i,e,t){let n=e.attributes,s=new cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let h=nu(or[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=nu(or[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Yf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=tu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return at.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),jn(i,e),ay(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ty(i,e.targets,t):i})}function Kf(){let i=new Qt,e=(x,D=.4,I=.58)=>new pn({color:x,metalness:D,roughness:I}),t=e(1664697),n=e(14201675),s=e(4479338),r=e(2108469),a=e(3424845),o=e(13196622),l=e(4693167,.7,.23),c=e(10929103),h=e(1519164),u=(x,D,I,N,B,H,P=s)=>{let k=new _t(new kn(x,D,I),P);return k.position.set(N,B,H),i.add(k),k},d=(x,D,I,N=s)=>{let B=new L(...x),H=new L(...D),P=new _t(new is(I,I,B.distanceTo(H),8),N);return P.position.copy(B).add(H).multiplyScalar(.5),P.quaternion.setFromUnitVectors(new L(0,1,0),H.sub(B).normalize()),i.add(P),P},f=(x,D,I,N,B=s)=>{let H=new L(...x),P=new L(...D),k=new _t(new kn(I,H.distanceTo(P),N),B);return k.position.copy(H).add(P).multiplyScalar(.5),k.quaternion.setFromUnitVectors(new L(0,1,0),P.sub(H).normalize()),i.add(k),k},g=(x,D,I,N,B,H=a)=>{let P=new _t(new is(x,x,D,24),H);return P.rotation.x=Math.PI/2,P.position.set(I,N,B),i.add(P),P};for(let x of[-2.05,2.05]){u(7.5,1.2,1.22,.8,.8,x,r);for(let D=-2.3;D<4.05;D+=1.02)g(.58,1.28,D,.8,x,a),g(.26,1.31,D,.8,x,s);for(let D=0;D<32;D++){let I=-3.04+D*.245;u(.2,.13,1.4,I,1.46,x,a),u(.2,.13,1.4,I,.14,x,a)}for(let D of[-3.05,4.52]){g(.66,1.35,D,.8,x,a);for(let I=0;I<7;I++){let N=-Math.PI/2+I*Math.PI/6,B=u(.18,.13,1.43,D+(D<0?-1:1)*Math.cos(N)*.67,.8+Math.sin(N)*.67,x,s);B.rotation.z=(D<0?-1:1)*N}}}u(5.6,.65,3.2,.8,1.82,0,s);let v=new _t(new is(2.35,2.5,.48,40),r);v.position.set(.7,2.2,0),i.add(v),u(9,.46,6,.65,2.58,0,s),u(4.5,2.75,4.6,2.25,4.16,0,t),u(4.85,.3,4.95,2.25,5.66,0,t),u(1.6,2.3,5.4,5.05,3.98,0,n),u(.14,1.65,4.7,5.9,4.02,0,n);for(let x of[-2.32,2.32]){u(2.3,1.5,.04,2.85,4.35,x,r);for(let D=0;D<9;D++)u(.1,1.48,.08,1.85+D*.25,4.35,x,t);u(1.05,2.05,.05,.72,3.95,x,t),d([1.06,4.04,x*1.01],[1.06,4.34,x*1.01],.025,c)}u(2.1,1.85,1.9,-1.65,5.14,2.18,t),u(1.88,.16,2.12,-1.65,6.14,2.18,t),u(1.75,.95,.035,-1.65,5.5,3.15,l),u(.035,.95,1.57,-2.72,5.5,2.18,l);for(let x of[-2.58,-1.7,-.78])u(.06,1.05,.08,x,5.5,3.18,r);for(let x of[-2.8,2.8]){d([-3.45,3.45,x],[5.45,3.45,x],.04,c);for(let D=-3.4;D<5.5;D+=.85)d([D,2.85,x],[D,3.45,x],.035,c)}for(let x=0;x<7;x++)u(.78,.1,.35,-.1+x*.26,2.8+x*.26,3.05,s);d([-.2,3.4,3.25],[1.7,5.2,3.25],.035,c);let p=new L(-2.8,3.6,0),m=new L(-9.3,12.5,0);for(let x of[-.85,.85]){f([p.x,p.y,x],[m.x,m.y,x],.55,.55,s);for(let I=0;I<8;I++){let N=I/8,B=(I+1)/8,H=p.clone().lerp(m,N),P=p.clone().lerp(m,B);f([H.x,H.y,x],[P.x,P.y,-x],.13,.13,s),d([H.x,H.y,x],[H.x,H.y,-x],.08,c)}g(1.23,.24,m.x,m.y,x,o),g(.31,.36,m.x,m.y,x,s);let D=new _t(new Zr(1.02,.1,8,36),o);D.position.set(m.x,m.y,x),i.add(D);for(let I=0;I<8;I++){let N=I*Math.PI/4;d([m.x,m.y,x],[m.x+Math.cos(N),m.y+Math.sin(N),x],.055,o)}d([m.x,m.y,x],[-1.2,7.4,x],.035,h),d([m.x-.18,m.y,x],[-10,3.4,x],.04,h),d([m.x+.16,m.y,x],[-9.7,3.4,x],.04,h),f([-2.9,5.35,x*.7],[-9.8,3.1,x*.7],.46,.38,s)}let S=new Oi;S.moveTo(-11.7,2.2),S.lineTo(-11.05,1.65),S.lineTo(-9.4,1.95),S.lineTo(-9.15,3.45),S.lineTo(-9.55,3.8),S.lineTo(-9.9,2.45),S.lineTo(-11.7,2.2);let E=new _t(new as(S,{depth:3,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:1,steps:1}),r);E.position.z=-1.5,i.add(E);for(let x of[-1.46,1.46])u(1.7,1.25,.12,-10.3,2.63,x,s);for(let x=-1.23;x<=1.3;x+=.5){let D=u(.7,.18,.27,-11.55,2.18,x,s);D.rotation.z=-.16}let M=document.createElement("canvas");M.width=512,M.height=128;let A=M.getContext("2d");A.fillStyle="#1966b9",A.fillRect(0,0,512,128),A.fillStyle="#d8eaf1",A.font="600 65px sans-serif",A.textAlign="center",A.fillText("WK-35",256,89);let w=new Or(M);w.colorSpace=Rt;let _=new _t(new gi(2.35,.59),new tn({map:w}));return _.position.set(2.6,3.64,2.355),i.add(_),i}function Jf(i,{points:e,onSelect:t,selected:n,resultMode:s=!1,machineView:r=!1,onFocusStructure:a}){let o=i.clientWidth||600,l=i.clientHeight||360,c=new Ar,h=new Ot(36,o/l,.1,100),u=r?new L(-23,14,23):new L(13,7.2,15.5),d=r?new L(-2,5.8,0):new L(0,3.4,0);h.position.copy(u);let f=new bl({antialias:!0,alpha:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(o,l),f.outputColorSpace=Rt,f.setClearColor(1060153,0),f.domElement.setAttribute("aria-label",(r?"WK35\u7535\u94F2\u6574\u673A":"A\u578B\u67B6")+"\u4E09\u7EF4\u7ED3\u6784\u793A\u610F\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C\u548C\u6EDA\u8F6E\u7F29\u653E"),i.prepend(f.domElement);let g=new Al(h,f.domElement);g.target.copy(d),g.enableDamping=!0,g.dampingFactor=.09,g.minDistance=r?17:9,g.maxDistance=r?55:35,g.maxPolarAngle=Math.PI*.51,c.add(new na(11985388,1.8));let v=new Bi(12707317,3.3);v.position.set(-7,14,9),c.add(v);let p=new Bi(5941191,1.7);p.position.set(8,8,-5),c.add(p);let m=new Qt;c.add(m);let S=new pn({color:7577263,roughness:.62,metalness:.55}),E=new pn({color:5077132,roughness:.72,metalness:.4}),M=new pn({color:10143183,roughness:.65,metalness:.5}),A=new pn({color:3758955,roughness:.85}),w=[];function _(le,ne,ce,Ee=S,Me=ce){let Te=new L(...le),Be=new L(...ne),Q=new _t(new kn(ce,Te.distanceTo(Be),Me),Ee);Q.position.copy(Te).add(Be).multiplyScalar(.5),Q.quaternion.setFromUnitVectors(new L(0,1,0),Be.sub(Te).normalize()),m.add(Q),w.push(Q);let de=new Ui(new kr(Q.geometry),new pi({color:11852512,transparent:!0,opacity:.24}));return Q.add(de),Q}function x(le,ne,ce,Ee=.3){let Me=new Oi;Me.absarc(0,0,Ee,0,Math.PI*2,!1);let Te=new ss;Te.absarc(0,0,Ee*.48,0,Math.PI*2,!0),Me.holes.push(Te);let Be=new _t(new as(Me,{depth:.18,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:1,steps:1}),S);Be.position.set(le,ne,ce-.09),m.add(Be),w.push(Be)}for(let le of[-.9,.9]){_([-3,.42,le],[-.58,6.92,le],.31,S,.46),_([3,.42,le],[.58,6.92,le],.31,S,.46),_([-2.14,2.7,le],[2.14,2.7,le],.22,E,.3),_([-.65,6.65,le],[.65,6.65,le],.28,S,.38);for(let[ne,ce,Ee]of[[-3,.3,.24],[3,.3,.24],[-.58,7.1,.34],[.58,7.1,.34]])x(ne,ce,le,Ee)}for(let le of[-.58,.58])_([le,6.72,-.9],[le,6.72,.9],.28,S,.3);for(let le of[-1,1])for(let ne of[2.55,4.85]){let ce=le*(3-(ne-.42)/6.5*2.42);_([ce,ne,-.9],[ce,ne,.9],.13,E)}let D=r?Kf():null;D&&(c.add(D),m.scale.setScalar(.58),m.position.set(-1.25,2.85,0));let I=new _t(new gi(70,70),new tn({color:1060153,transparent:!0,opacity:.12}));I.rotation.x=-Math.PI/2,I.position.y=-.08,c.add(I);let N=new sa(r?60:25,r?65:40,2840167,1983058);N.material.transparent=!0,N.material.opacity=.5,N.position.y=-.04,c.add(N);let B=[[-2.96,.5,1.15],[-2.55,1.7,1.15],[-2.1,2.7,1.15],[-1.45,4.5,1.15],[-.82,6.3,1.15],[-.58,7.1,1.15],[0,6.7,1.15],[.58,7.1,1.15],[.82,6.3,1.15],[1.45,4.5,1.15],[2.1,2.7,1.15],[2.55,1.7,1.15],[2.96,.5,1.15],[-.58,7.1,-1.15],[0,6.7,-1.15],[.58,7.1,-1.15]],H=new Qt;c.add(H);let P=document.createElement("div");P.className="point-labels",i.append(P);let k=document.createElement("button");r&&(k.className="machine-focus",k.innerHTML="<strong>A \u578B\u67B6 \xB7 16 \u6D4B\u70B9</strong><span>\u8FDB\u5165\u7ED3\u6784\u76D1\u6D4B \u2197</span>",k.addEventListener("click",()=>a?.()),P.append(k));let $={normal:6411474,warning:15905097,alarm:16414068,offline:7373966},W=e,re=n,Y=s,j=null,ie=B.map((le,ne)=>{let ce=new tn({color:$[e[ne].status]}),Ee=new _t(new Yr(.073,12,10),ce);Ee.position.set(...le),Ee.userData.pointId=e[ne].id,H.add(Ee);let Me=new _t(new qr(.13,.145,32),new tn({color:$[e[ne].status],side:gn,transparent:!0,opacity:.65}));Me.position.set(...le),H.add(Me);let Te=document.createElement("button");Te.className="anchor-label",Te.type="button",Te.textContent=e[ne].id,Te.setAttribute("aria-label","\u4E09\u7EF4\u6D4B\u70B9 "+e[ne].id),Te.addEventListener("click",()=>t(e[ne].id));let Be=document.createElement("span");return Be.className="anchor-leader",P.append(Be),P.append(Te),{sphere:Ee,halo:Me,label:Te,leader:Be,point:e[ne],v:new L}});function Le(le,ne=re,ce=Y){if(W=le,re=ne,Y=ce,r){let Ee=le.filter(Me=>Me.status==="alarm"||Me.status==="warning").length;k.querySelector("span").textContent=le.some(Me=>Me.quality!=="valid")?"\u542B\u65E0\u6548\u6570\u636E \xB7 \u8FDB\u5165\u76D1\u6D4B \u2197":Ee?Ee+" \u4E2A\u8D8A\u9650 \xB7 \u8FDB\u5165\u76D1\u6D4B \u2197":"\u8FDB\u5165\u7ED3\u6784\u76D1\u6D4B \u2197"}ie.forEach((Ee,Me)=>{let Te=le[Me];Ee.point=Te,Ee.label.className="anchor-label "+Te.status+(ne===Te.id?" selected":""),Ee.label.textContent=Te.id,Ee.label.title=Te.id+" \xB7 "+(Te.quality==="stale"?"\u7F13\u5B58\u503C ":"")+(Te.value??"\u65E0\u6570\u636E")+" \u03BC\u03B5",Ee.sphere.material.color.setHex($[Te.status]),Ee.halo.material.color.setHex($[Te.status]),Ee.sphere.scale.setScalar(ne===Te.id?1.65:1),Ee.halo.scale.setScalar(ne===Te.id?1.5:1)}),w.forEach((Ee,Me)=>{if(ce){let Te=new qe().setHSL(.53-.49*(Me%15/15),.55,.52),Be=Ee.material.clone();Be.color.copy(Te),Ee.userData.originalMaterial===void 0?Ee.userData.originalMaterial=Ee.material:Ee.material.dispose(),Ee.material=Be}else Ee.userData.originalMaterial&&(Ee.material.dispose(),Ee.material=Ee.userData.originalMaterial,delete Ee.userData.originalMaterial)})}Le(e);let Ve=new ResizeObserver(()=>{let le=i.clientWidth,ne=i.clientHeight;!le||!ne||(h.aspect=le/ne,h.updateProjectionMatrix(),f.setSize(le,ne))});Ve.observe(i);let Z,ye=!0;function De(){if(!ye)return;Z=requestAnimationFrame(De),g.update();let le=[],ne=[[0,0],[-35,0],[35,0],[0,-21],[-35,-21],[35,-21],[-70,0],[70,0],[0,21],[-35,21],[35,21],[-70,-21],[70,-21],[0,-42],[-35,-42],[35,-42],[-70,21],[70,21]];if(ie.forEach(ce=>{ce.halo.quaternion.copy(h.quaternion),ce.v.copy(ce.sphere.position).project(h);let Ee=(ce.v.x*.5+.5)*i.clientWidth,Me=(-ce.v.y*.5+.5)*i.clientHeight,Te=Ee,Be=Me-17;for(let[Q,de]of ne){let se=Ee+Q,we=Me-17+de;if(!(se<20||se>i.clientWidth-20||we<49||we>i.clientHeight-15)&&le.every(ve=>Math.abs(ve.x-se)>33||Math.abs(ve.y-we)>18)){Te=se,Be=we;break}}le.push({x:Te,y:Be}),ce.label.style.left=Te+"px",ce.label.style.top=Be+"px",ce.label.hidden=r||!!j||ce.v.z>1,ce.leader.hidden=ce.label.hidden,ce.leader.style.left=Ee+"px",ce.leader.style.top=Me+"px",ce.leader.style.width=Math.hypot(Te-Ee,Be-Me)+"px",ce.leader.style.transform="rotate("+Math.atan2(Be-Me,Te-Ee)+"rad)"}),H.visible=!r&&!j,r){let ce=new L(-1.25,8.25,0).project(h);k.style.left=(ce.x*.5+.5)*i.clientWidth+"px",k.style.top=(-ce.y*.5+.5)*i.clientHeight-16+"px",k.hidden=!!j}f.render(c,h)}return De(),{update:Le,reset(){h.position.copy(u),g.target.copy(d),g.update()},viewFront(){h.position.copy(r?new L(-2,9,33):new L(0,4,20)),g.target.copy(d),g.update()},wireframe(){let le=j?[j]:[m,...D?[D]:[]],ne=new Set;le.forEach(ce=>ce.traverse(Ee=>{Ee.isMesh&&(Array.isArray(Ee.material)?Ee.material:[Ee.material]).forEach(Me=>ne.add(Me))})),ne.forEach(ce=>ce.wireframe=!ce.wireframe)},async loadGLB(le){let ne=await new Rl().parseAsync(le,""),ce=new cn().setFromObject(ne.scene),Ee=ce.getSize(new L),Me=ce.getCenter(new L),Te=7/Math.max(Ee.x,Ee.y,Ee.z,.001);ne.scene.position.sub(Me).multiplyScalar(Te),ne.scene.position.y+=3.5,ne.scene.scale.setScalar(Te),j&&c.remove(j),j=ne.scene,c.add(j),m.visible=!1,D&&(D.visible=!1),H.visible=!1},dispose(){ye=!1,cancelAnimationFrame(Z),Ve.disconnect(),g.dispose(),c.traverse(le=>{le.geometry?.dispose(),le.material&&(Array.isArray(le.material)?le.material:[le.material]).forEach(ne=>ne.dispose())}),f.dispose(),f.domElement.remove(),P.remove()}}}function jf(i){let{S:e,points:t,rules:n,icon:s,button:r,tag:a,escape:o,pointById:l,currentRule:c,valueText:h,statusName:u,fmtTime:d,signalSeries:f,historySeries:g,heading:v}=i,p={view:"business",monitorMode:"live",signal:"average",trend:"strain",signalResult:null,trendResult:null,signalRunning:!1,trendRunning:!1,reports:[],iotFilter:"all",dimensions:{L:null,W:null,H:null,S:null},users:[],maintenance:[],importTarget:"structure"},m=(U,T,Ae="",Pe="")=>`<section class="customer-panel ${Pe}"><div class="customer-panel-head"><h2>${U}</h2><div>${Ae}</div></div>${T}</section>`,S=U=>`${r("\u5BFC\u5165","customer-import",{compact:!0}).replace('data-action="customer-import"',`data-action="customer-import" data-target="${U}"`)}${r("\u5BFC\u51FA","customer-export",{compact:!0}).replace('data-action="customer-export"',`data-action="customer-export" data-target="${U}"`)}`,E=()=>`<div class="customer-structure-fields"><label>\u540D\u79F0\uFF1A<input class="input" value="\u77FF\u7528\u7535\u94F2 A \u578B\u67B6" readonly aria-label="\u7ED3\u6784\u540D\u79F0"></label><label>\u6D4B\u70B9\u6570\u91CF\uFF1A<input class="input" value="16" readonly aria-label="\u6D4B\u70B9\u6570\u91CF"></label><label>\u670D\u5F79\u65F6\u95F4\uFF1A<input class="input" value="\u2014" readonly aria-label="\u670D\u5F79\u65F6\u95F4"><span>\u5929</span></label><button class="icon-btn" data-action="refresh-status" aria-label="\u5237\u65B0\u7ED3\u6784\u72B6\u6001">${s("reset")}</button></div>`,M=(U=!1)=>`<button class="customer-frame ${U?"large":""}" data-action="customer-scene" aria-label="\u67E5\u770B A \u578B\u67B6\u4E09\u7EF4\u6D4B\u70B9"><img src="assets/image-51d61f66093a8bc2.png" alt="A \u578B\u67B6\u7ED3\u6784\u56FE"><span>${s("expand")}\u4E09\u7EF4\u6D4B\u70B9</span></button>`,A=()=>({online:t.filter(U=>U.quality==="valid").length,offline:t.filter(U=>U.quality==="missing").length,abnormal:t.filter(U=>U.quality==="stale").length});function w(){let U=A();return`<div class="customer-sensor-stat"><div class="customer-donut" style="--online:${U.online/16*100}%;--offline:${(U.online+U.offline)/16*100}%"><div><strong>16</strong><span>\u603B\u6570</span></div></div><div class="customer-sensor-legend">${[["online","\u5728\u7EBF"],["offline","\u79BB\u7EBF"],["abnormal","\u5F02\u5E38"]].map(([T,Ae])=>`<div><i class="${T}"></i><span>${Ae}</span><small>${Math.round(U[T]/16*100)}%</small><strong>${U[T]}</strong></div>`).join("")}</div></div>`}function _(){let U=e.alarms.length;return`<div class="customer-alarm-stat"><div class="customer-alarm-total"><strong>${U}</strong><span>\u4ECA\u65E5\u62A5\u8B66\u6570\u91CF</span></div><div class="customer-alarm-counts">${[[U,"\u7D2F\u8BA1\u4E0A\u62A5\u6570\u91CF","bell"],[e.alarms.filter(T=>!T.acknowledged).length,"\u5F85\u5904\u7406\u6570\u91CF","clock"],[e.alarms.filter(T=>T.acknowledged).length,"\u5DF2\u5904\u7406\u6570\u91CF","file"]].map(([T,Ae,Pe])=>`<div>${s(Pe)}<strong>${T}</strong><span>${Ae}</span></div>`).join("")}</div></div>`}function x(){return'<div class="customer-gauge"><svg viewBox="0 0 300 188" role="img" aria-label="\u7ED3\u6784\u5065\u5EB7\u6307\u6570\u672A\u8BC4\u4F30"><path d="M44 153 A116 116 0 0 1 90 45" stroke="#b65365"/><path d="M90 45 A116 116 0 0 1 210 45" stroke="#d9c878"/><path d="M210 45 A116 116 0 0 1 256 153" stroke="#66b591"/><path class="gauge-inner" d="M60 152 A99 99 0 1 1 240 152"/><text x="52" y="135">0</text><text x="78" y="58">25</text><text x="143" y="33">50</text><text x="211" y="58">75</text><text x="239" y="135">100</text></svg><div><strong>\u2014<small>\u5206</small></strong><span>\u5065\u5EB7\u6307\u6570</span><b>\u672A\u8BC4\u4F30</b></div></div>'}function D(){return`<div class="customer-home"><div class="customer-home-machine"><button data-action="focus-structure" aria-label="\u8FDB\u5165 A \u578B\u67B6\u7ED3\u6784\u76D1\u6D4B"><img src="assets/image-525fddd82987e8d0.png" alt="WK35 \u7535\u94F2\u7ED3\u6784\u603B\u89C8"></button></div><aside class="customer-home-rail"><div id="customer-health">${m("\u7ED3\u6784\u5065\u5EB7\u6307\u6570",x())}</div><div id="customer-sensors">${m("\u4F20\u611F\u5668\u7EDF\u8BA1",w())}</div><div id="customer-alarms">${m("\u62A5\u8B66\u7EDF\u8BA1",_())}</div></aside></div>`}function I(U=!1){let T=l(e.selected),Ae=Math.max(0,Math.floor((e.time-new Date("2026-11-16T10:22:00+08:00"))/6e4));return U?`<div class="customer-monitor-time"><strong>${Ae}<small>\u5206\u949F</small></strong><span>\u76D1\u6D4B\u65F6\u95F4</span></div><div class="customer-evaluation-state"><strong>${e.modelResult?"\u5DF2\u751F\u6210\u6A21\u578B\u7ED3\u679C":"\u672A\u8BC4\u4F30"}</strong><span>\u7ED3\u6784\u8BC4\u4F30\u7ED3\u679C</span></div>`:`<div class="customer-monitor-time"><strong>${Ae}<small>\u5206\u949F</small></strong><span>\u76D1\u6D4B\u65F6\u95F4</span></div><div class="customer-health-state"><div class="customer-state-labels"><span>\u6B63\u5E38</span><span>\u9884\u8B66</span><span>\u62A5\u8B66</span></div><div class="customer-state-bar"><i class="${T.status}" style="left:${T.status==="alarm"?91:T.status==="warning"?55:12}%"></i></div><span>${a(u[T.status],T.status==="alarm"?"red":T.status==="warning"?"amber":"")}<span>\u5065\u5EB7\u72B6\u6001</span></span></div>`}function N(U=!1){let T=I(U),Ae=U?`<div class="customer-report-actions"><button data-action="customer-report-generate">${s("file")}<span>\u751F\u6210</span></button><button data-action="customer-report-query">${s("clock")}<span>\u67E5\u8BE2</span></button><button data-action="customer-fea">${s("layers")}<span>\u4EFF\u771F\u6210\u679C</span></button></div>`:`<div class="customer-point-state" id="customer-point-state">${B()}</div>`;return`<div class="customer-monitor-top"><div>${E()}<div class="customer-info-pair">${m(U?"\u7ED3\u6784\u8BC4\u4F30\u4FE1\u606F":"\u7ED3\u6784\u76D1\u6D4B\u4FE1\u606F",`<div class="customer-info-body" id="customer-monitor-info">${T}</div>`,`<span>${e.time.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"})}</span>`)}${m(U?"\u7ED3\u6784\u8BC4\u4F30\u62A5\u544A":"\u6D4B\u70B9\u72B6\u6001\u4FE1\u606F",Ae)}</div></div>${M()}</div>`}function B(){let U=l(e.selected),T=c();return`<dl><div><dt>\u6D4B\u70B9\uFF1A</dt><dd>${U.id} \xB7 ${U.name}</dd></div><div><dt>\u4F20\u611F\u5668\u7C7B\u578B\uFF1A</dt><dd>\u5E94\u53D8\u4F20\u611F\u5668</dd></div><div><dt>\u76D1\u6D4B\u6307\u6807\u503C\uFF1A</dt><dd><strong>${h(U)}</strong> \u03BC\u03B5</dd></div><div><dt>\u9884\u8B66\u4E0A\u4E0B\u9650\uFF1A</dt><dd>${T.lowWarning} / ${T.highWarning} \u03BC\u03B5</dd></div></dl><div>${r("IOT\u7BA1\u7406","customer-iot",{compact:!0})}${r("\u8BE6\u60C5","point-detail",{compact:!0})}</div>`}function H(){return`<div class="customer-filter-bar"><label>\u6D4B\u70B9<select class="select" id="customer-point" aria-label="\u9009\u62E9\u6D4B\u70B9">${i.pointOptions(e.selected)}</select></label><label>\u6570\u636E\u8303\u56F4<input class="input" type="datetime-local" id="customer-from" aria-label="\u6570\u636E\u5F00\u59CB\u65F6\u95F4" value="${e.historyFrom}"></label><span>\u2014</span><input class="input" type="datetime-local" id="customer-to" aria-label="\u6570\u636E\u7ED3\u675F\u65F6\u95F4" value="${e.historyTo}"><label>\u76D1\u6D4B\u6307\u6807<select class="select" aria-label="\u76D1\u6D4B\u6307\u6807"><option>\u5E94\u53D8 / \u03BC\u03B5</option></select></label>${r("\u67E5\u8BE2","customer-query",{compact:!0})}${r("\u5B9E\u65F6","customer-live",{compact:!0})}</div>`}function P(){return p.monitorMode==="history"?g(e.selected):f(e.selected,121,.5,e.tick*2)}function k(U,{color:T="#4b8dff",name:Ae="\u5E94\u53D8\u66F2\u7EBF",threshold:Pe=!1}={}){if(!U?.length)return'<div class="customer-chart-empty">\u5C1A\u65E0\u7ED3\u679C</div>';let We=l(e.selected);if(We.quality!=="valid"&&p.monitorMode==="live")return`<div class="customer-chart-empty">${We.quality==="stale"?"\u6570\u636E\u94FE\u8DEF\u4E2D\u65AD":"\u65E0\u6709\u6548\u6570\u636E"}</div>`;let ae=Math.max(1,Math.ceil(U.length/500)),ct=U.filter((K,X)=>X%ae===0||X===U.length-1),ze=Math.min(0,...ct)-15,Xe=Math.max(360,...ct)+15,R=1100,y=180,z=49,oe=18,te=14,ge=27,me=K=>te+(Xe-K)/(Xe-ze)*(y-te-ge),J=K=>z+K/Math.max(1,ct.length-1)*(R-z-oe),ee=Array.from({length:4},(K,X)=>{let fe=ze+(Xe-ze)*X/3;return`<line x1="${z}" x2="${R-oe}" y1="${me(fe)}" y2="${me(fe)}"/><text x="${z-9}" y="${me(fe)+4}" text-anchor="end">${Math.round(fe)}</text>`}).join(""),_e=c(),O=p.monitorMode==="history"?[e.historyFrom.slice(11),"",e.historyTo.slice(11)]:[d(new Date(e.time-6e4)),d(new Date(e.time-3e4)),d()];return`<svg viewBox="0 0 ${R} ${y}" preserveAspectRatio="none" role="img" aria-label="${Ae}\uFF0C\u5355\u4F4D\u5FAE\u5E94\u53D8"><g class="customer-chart-grid">${ee}</g>${Pe&&_e.enabled?`<path d="M${z} ${me(_e.highWarning)}H${R-oe}" stroke="#d5a54f" stroke-dasharray="7 5" fill="none"/>`:""}<path d="${ct.map((K,X)=>`${X?"L":"M"}${J(X).toFixed(1)},${me(K).toFixed(1)}`).join(" ")}" fill="none" stroke="${T}" stroke-width="1.8" vector-effect="non-scaling-stroke"/><g class="customer-chart-time">${O.map((K,X)=>`<text x="${z+X*(R-z-oe)/2}" y="${y-6}" text-anchor="${X===0?"start":X===2?"end":"middle"}">${K}</text>`).join("")}<text x="8" y="12">\u03BC\u03B5</text></g></svg>`}let $=(U,T,Ae="",Pe="")=>`<section class="customer-chart-block"><div class="customer-chart-side">${U}</div><div class="customer-chart-body"><div class="customer-chart-content" ${Pe?`id="${Pe}"`:""}>${T}</div>${Ae?`<div class="customer-chart-footer">${Ae}</div>`:""}</div></section>`;function W(){return v("","\u7ED3\u6784\u76D1\u6D4B","",`${r(e.paused?"\u7EE7\u7EED\u5237\u65B0":"\u6682\u505C\u5237\u65B0","pause",{compact:!0})}${r("\u5386\u53F2\u8FFD\u6EAF","customer-history",{compact:!0})}${r("\u5BFC\u51FA","customer-export-monitor",{compact:!0})}`)+`<div class="customer-content">${N()}${H()}${$("\u539F\u59CB\u4FE1\u53F7",k(P(),{name:"\u539F\u59CB\u4FE1\u53F7"}),r("\u4FE1\u53F7\u5904\u7406","customer-process",{compact:!0}),"customer-raw-chart")}${$("\u76D1\u6D4B\u6307\u6807",k(P(),{threshold:!0,name:"\u5E94\u53D8\u76D1\u6D4B\u6307\u6807"}),r("\u8D8B\u52BF\u5206\u6790","customer-analysis",{compact:!0}),"customer-indicator-chart")}</div>`}function re(U){let T=p[U+"Running"];return`<span class="customer-run-status">${T?"\u8FD0\u884C\u4E2D":p[U+"Result"]?"\u5DF2\u505C\u6B62":"\u672A\u6267\u884C"}</span>${r("\u6267\u884C","customer-execute-"+U,{compact:!0})}${r("\u505C\u6B62","customer-stop-"+U,{compact:!0,disabled:!T})}`}function Y(){return p.view!=="business"?ie():v("","\u7ED3\u6784\u8BC4\u4F30","",`${r("\u6A21\u578B\u7BA1\u7406","goto-deployment",{compact:!0})}${r("\u89C6\u9891\u8D44\u6599","goto-videos",{compact:!0})}`)+`<div class="customer-content">${N(!0)}${H()}<div class="customer-analysis-grid"><section class="customer-analysis-column"><div class="customer-analysis-heading"><h2>\u4FE1\u53F7\u5904\u7406</h2><select class="select" id="customer-signal" aria-label="\u4FE1\u53F7\u5904\u7406\u7B97\u6CD5">${[["average","\u6ED1\u52A8\u5E73\u5747"],["raw","\u539F\u59CB\u4FE1\u53F7"]].map(([U,T])=>`<option value="${U}" ${p.signal===U?"selected":""}>${T}</option>`).join("")}</select></div>${$("\u539F\u59CB\u4FE1\u53F7",k(P(),{name:"\u4FE1\u53F7\u5904\u7406\u8F93\u5165"}),"","customer-signal-input")}${$("\u4FE1\u53F7\u5904\u7406\u7ED3\u679C",k(p.signalResult,{color:"#6bd2c8",name:"\u4FE1\u53F7\u5904\u7406\u7ED3\u679C"}),re("signal"),"customer-signal-output")}</section><section class="customer-analysis-column"><div class="customer-analysis-heading"><h2>\u8D8B\u52BF\u5206\u6790</h2><select class="select" id="customer-trend" aria-label="\u8D8B\u52BF\u5206\u6790\u7B97\u6CD5">${[["strain","\u5E94\u53D8\u8D8B\u52BF"],["proxy","\u964D\u9636\u4EE3\u7406\u6A21\u578B"]].map(([U,T])=>`<option value="${U}" ${p.trend===U?"selected":""}>${T}</option>`).join("")}</select></div>${$("\u76D1\u6D4B\u6307\u6807",k(P(),{threshold:!0,name:"\u8D8B\u52BF\u5206\u6790\u8F93\u5165"}),"","customer-trend-input")}${$("\u8D8B\u52BF\u5206\u6790\u7ED3\u679C",p.trend==="proxy"?j():k(p.trendResult,{color:"#e2bf69",name:"\u5E94\u53D8\u8D8B\u52BF\u7ED3\u679C"}),re("trend"),"customer-trend-output")}</section></div></div>`}function j(){if(!t.every(T=>T.quality==="valid"))return'<div class="customer-chart-empty">\u8F93\u5165\u6570\u636E\u5F02\u5E38</div>';let U=e.modelResult;return U?`<div class="customer-proxy-summary"><div><span>\u6D3B\u52A8\u7248\u672C</span><strong>${o(U.version)}</strong></div><div><span>\u8F93\u5165\u6279\u6B21</span><strong>${o(U.batch)}</strong></div><div><span>\u7ED3\u679C\u65F6\u95F4</span><strong>${d(U.time)}</strong></div>${r("\u67E5\u770B\u6A21\u578B\u7ED3\u679C","customer-model-results",{compact:!0})}</div>`:`<div class="customer-chart-empty">${e.modelReady?"\u5C1A\u65E0\u6A21\u578B\u7ED3\u679C":"\u6A21\u578B\u672A\u90E8\u7F72"}</div>`}function ie(){let U={fea:["\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C",i.finiteElementView],videos:["\u89C6\u9891\u8D44\u6599",i.videoLibrary],model:["\u6A21\u578B\u7BA1\u7406",i.deploymentView],"model-results":["\u4EE3\u7406\u6A21\u578B\u7ED3\u679C",i.resultsView]}[p.view];return v("",U[0],"",r("\u8FD4\u56DE\u7ED3\u6784\u8BC4\u4F30","customer-assessment-back",{compact:!0}))+U[1]()}function Le(){let U=i.visibleAlarms();return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u5E8F\u53F7</th><th>\u6D4B\u70B9</th><th>\u76D1\u6D4B\u65F6\u957F</th><th>\u5065\u5EB7\u72B6\u6001</th><th>\u62A5\u8B66\u65F6\u95F4</th><th>\u62A5\u8B66\u7C7B\u578B</th><th>\u62A5\u8B66\u5185\u5BB9</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${U.map((T,Ae)=>`<tr><td>${Ae+1}</td><td>${T.pointId}<span class="point-table-sub">${T.name}</span></td><td>${Math.max(0,Math.floor((e.time-T.time)/1e3))} s</td><td>${a(T.recovered?"\u5DF2\u6062\u590D":u[T.level],T.recovered?"neutral":T.level==="alarm"?"red":"amber")}</td><td class="mono">${d(T.time)}</td><td>\u5E94\u53D8${u[T.level]}</td><td>${T.value.toFixed(1)} \u03BC\u03B5 / \u9608\u503C ${T.threshold} \u03BC\u03B5<span class="point-table-sub">${T.acknowledged?"\u5DF2\u5904\u7406":"\u5F85\u5904\u7406"}</span></td><td><div class="table-action"><button data-action="alarm-detail" data-id="${T.id}">${T.acknowledged?"\u67E5\u770B":"\u5904\u7406"}</button><button data-action="customer-ignore-alarm" data-id="${T.id}" ${T.acknowledged?"disabled":""}>\u5FFD\u7565</button><button data-action="locate-alarm" data-id="${T.id}">\u5B9A\u4F4D</button></div></td></tr>`).join("")||'<tr><td colspan="8" class="customer-empty">\u6682\u65E0\u62A5\u8B66\u4FE1\u606F</td></tr>'}</tbody></table></div><div class="customer-table-count">\u5171 ${U.length} \u6761</div>`}function Ve(){return v("","\u62A5\u8B66\u4FE1\u606F","")+`<div class="customer-content">${E()}<div class="customer-stat-and-frame">${m("\u62A5\u8B66\u4FE1\u606F\u7EDF\u8BA1",`<div id="customer-alarm-summary">${_()}</div>`)}${M(!0)}</div>${m("\u62A5\u8B66\u4FE1\u606F\u5217\u8868",Le(),`<select class="select" id="customer-alarm-filter" aria-label="\u62A5\u8B66\u7C7B\u578B\u7B5B\u9009">${[["all","\u5168\u90E8\u62A5\u8B66"],["active","\u6D3B\u52A8\u8D8A\u9650"],["alarm","\u62A5\u8B66"],["warning","\u9884\u8B66"]].map(([U,T])=>`<option value="${U}" ${e.alarmFilter===U?"selected":""}>${T}</option>`).join("")}</select><input class="input" id="alarm-search" placeholder="\u641C\u7D22\u6D4B\u70B9" aria-label="\u641C\u7D22\u544A\u8B66\u6D4B\u70B9" value="${o(e.alarmSearch)}">${r("\u67E5\u8BE2","customer-query-alarm",{compact:!0})}${r("\u5BFC\u51FA","export-alarms",{compact:!0})}`)}</div>`}function Z(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u7ED3\u6784</th><th>L / mm</th><th>W / mm</th><th>H / mm</th><th>S / mm</th></tr></thead><tbody><tr><td>A \u578B\u67B6</td>${["L","W","H","S"].map(U=>`<td>${p.dimensions[U]??"\u2014"}</td>`).join("")}</tr></tbody></table></div><div class="customer-panel-footer">${r("\u7F16\u8F91","customer-edit-structure",{compact:!0})}</div>`}function ye(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u7528\u6237\u7F16\u53F7</th><th>\u7528\u6237\u540D</th><th>\u59D3\u540D</th><th>\u5355\u4F4D</th><th>\u8054\u7CFB\u65B9\u5F0F</th><th>\u89D2\u8272</th><th>\u72B6\u6001</th></tr></thead><tbody>${p.users.map(U=>`<tr><td>${o(U.id)}</td><td>${o(U.username)}</td><td>${o(U.name)}</td><td>${o(U.organization)}</td><td>${o(U.contact||"\u2014")}</td><td>${o(U.role)}</td><td>${a(U.status||"\u79BB\u7EBF","neutral")}</td></tr>`).join("")||'<tr><td colspan="7" class="customer-empty">\u6682\u65E0\u7528\u6237\u4FE1\u606F</td></tr>'}</tbody></table></div><div class="customer-panel-footer">${r("\u7F16\u8F91","customer-edit-user",{compact:!0})}</div>`}function De(){return`<div class="customer-table-scroll customer-threshold-scroll"><table class="data-table"><thead><tr><th>\u76D1\u6D4B\u6307\u6807</th><th>\u9884\u8B66\u4E0A\u4E0B\u9650 / \u03BC\u03B5</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${n.map(U=>`<tr><td>${U.pointId} \u5E94\u53D8</td><td>${U.lowWarning} / ${U.highWarning}</td><td><button class="row-link" data-action="edit-rule" data-point-id="${U.pointId}">\u7F16\u8F91</button></td></tr>`).join("")}</tbody></table></div>`}function le(){let U=c();return`<div class="customer-parameter-stack"><div class="customer-parameter-part"><h3>\u76D1\u6D4B\u9608\u503C\u8BBE\u5B9A</h3>${De()}</div><div class="customer-parameter-part"><h3>\u62A5\u8B66\u53C2\u6570\u914D\u7F6E</h3><table class="data-table"><thead><tr><th>\u62A5\u8B66\u7EA7\u522B</th><th>\u5173\u8054\u53C2\u6570</th><th>\u62A5\u8B66\u6761\u4EF6 / \u03BC\u03B5</th></tr></thead><tbody><tr><td>${a("\u9884\u8B66","amber")}</td><td>${e.selected} \u5E94\u53D8</td><td>\u2264 ${U.lowWarning} / \u2265 ${U.highWarning}</td></tr><tr><td>${a("\u62A5\u8B66","red")}</td><td>${e.selected} \u5E94\u53D8</td><td>\u2264 ${U.lowAlarm} / \u2265 ${U.highAlarm}</td></tr></tbody></table><div class="customer-panel-footer"><button class="btn compact" data-action="edit-rule" data-point-id="${e.selected}">\u7F16\u8F91</button></div></div></div>`}function ne(){return`<div class="customer-table-scroll"><table class="data-table"><thead><tr><th>\u8BB0\u5F55\u7F16\u53F7</th><th>\u7EF4\u62A4\u65E5\u671F</th><th>\u7EF4\u62A4\u5185\u5BB9</th><th>\u7EF4\u62A4\u4EBA\u5458</th><th>\u7EF4\u62A4\u7ED3\u679C</th></tr></thead><tbody>${p.maintenance.map(U=>`<tr><td>${o(U.id)}</td><td>${o(U.date)}</td><td>${o(U.content)}</td><td>${o(U.person)}</td><td>${a(U.result)}</td></tr>`).join("")||'<tr><td colspan="5" class="customer-empty">\u6682\u65E0\u7EF4\u62A4\u8BB0\u5F55</td></tr>'}</tbody></table></div><div class="customer-panel-footer">${r("\u65B0\u589E","customer-add-maintenance",{compact:!0})}</div>`}function ce(){return v("","\u53C2\u6570\u7BA1\u7406","")+`<div class="customer-content"><div class="customer-parameters-top">${m("\u7ED3\u6784\u53C2\u6570\u7BA1\u7406",Z(),S("structure"))}${M()}</div><div class="customer-parameters-grid">${m("\u7528\u6237\u4FE1\u606F\u7BA1\u7406",ye(),S("users"))}${m("\u76D1\u6D4B\u53C2\u6570\u914D\u7F6E",le(),S("thresholds"))}${m("\u8BBE\u5907\u7EF4\u62A4\u8BB0\u5F55",ne(),S("maintenance"))}</div></div><input type="file" id="customer-data-import" accept=".json,application/json" hidden>`}function Ee(){let U=t.filter(T=>p.iotFilter==="all"||p.iotFilter==="online"&&T.quality==="valid"||p.iotFilter==="offline"&&T.quality!=="valid");return`<div class="customer-table-scroll customer-iot-scroll"><table class="data-table"><thead><tr><th>\u5E8F\u53F7</th><th>\u6D4B\u70B9</th><th>\u7C7B\u578B</th><th>\u5DE5\u4F5C\u72B6\u6001</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${U.map((T,Ae)=>`<tr><td>${Ae+1}</td><td>${T.id}<span class="point-table-sub">\u91C7\u96C6\u5361 ${T.card} / CH${T.channel}</span></td><td>\u5E94\u53D8\u4F20\u611F\u5668</td><td>${a(T.quality==="valid"?"\u5728\u7EBF":T.quality==="missing"?"\u79BB\u7EBF":"\u5F02\u5E38",T.quality==="valid"?"":T.quality==="missing"?"neutral":"amber")}</td><td><div class="table-action"><button data-action="customer-sensor-detail" data-id="${T.id}">\u67E5\u770B</button><button data-action="customer-sensor-setting" data-id="${T.id}">\u8BBE\u7F6E</button></div></td></tr>`).join("")||'<tr><td colspan="5" class="customer-empty">\u6682\u65E0\u5339\u914D\u7684\u4F20\u611F\u5668</td></tr>'}</tbody></table></div><div class="customer-table-count">\u5171 ${U.length} \u6761</div>`}function Me(){return v("","IOT\u7BA1\u7406","",r("\u6570\u636E\u94FE\u8DEF","customer-topology",{compact:!0}))+`<div class="customer-content">${E()}<div class="customer-stat-and-frame">${m("\u4F20\u611F\u5668\u4FE1\u606F\u7EDF\u8BA1",`<div id="customer-iot-stat">${w()}</div>`)}${M(!0)}</div><div class="customer-iot-bottom">${m("\u4F20\u611F\u5668\u4FE1\u606F\u5217\u8868",`<div id="customer-sensor-table">${Ee()}</div>`,`<select class="select" id="customer-iot-filter" aria-label="\u4F20\u611F\u5668\u72B6\u6001\u7B5B\u9009"><option value="all" ${p.iotFilter==="all"?"selected":""}>\u5168\u90E8\u4F20\u611F\u5668</option><option value="online" ${p.iotFilter==="online"?"selected":""}>\u5728\u7EBF</option><option value="offline" ${p.iotFilter==="offline"?"selected":""}>\u79BB\u7EBF / \u5F02\u5E38</option></select>${r("\u67E5\u8BE2","customer-query-iot",{compact:!0})}${r("\u5BFC\u51FA","export-points",{compact:!0})}`)}${m("\u4F20\u611F\u5668\u4F18\u5316\u5E03\u5C40\u5206\u6790",`<div class="customer-iot-fea"><img src="assets/image-de266d0ff056ba6e.png" alt="A \u578B\u67B6\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C"><div class="customer-fea-scale"><div></div><span>S, Mises</span></div></div><div class="customer-panel-footer">${r("\u6709\u9650\u5143\u5206\u6790\u7ED3\u679C","customer-fea",{compact:!0})}</div>`)}</div></div>`}function Te(){let U=p.reports.at(-1);i.openModal("\u7ED3\u6784\u8BC4\u4F30\u62A5\u544A",U?`<div class="key-values"><div><span>\u62A5\u544A\u7F16\u53F7</span><strong>${U.id}</strong></div><div><span>\u751F\u6210\u65F6\u95F4</span><strong>${d(U.time)}</strong></div><div><span>\u7ED3\u6784</span><strong>A \u578B\u67B6</strong></div><div><span>\u6709\u6548\u6D4B\u70B9</span><strong>${U.valid} / 16</strong></div><div><span>\u6D3B\u52A8\u8D8A\u9650</span><strong>${U.active}</strong></div><div><span>\u6A21\u578B\u7248\u672C</span><strong>${o(U.version)}</strong></div></div>`:'<div class="customer-empty">\u6682\u65E0\u8BC4\u4F30\u62A5\u544A</div>',U?r("\u5BFC\u51FA\u62A5\u544A","customer-report-export",{primary:!0}):r("\u5173\u95ED","close-modal"))}function Be(){i.openModal("\u7ED3\u6784\u53C2\u6570\u7BA1\u7406",`<div class="form-grid">${["L","W","H","S"].map(U=>`<label class="form-field">${U} / mm<input class="input" id="customer-dimension-${U}" type="number" min="0.001" step="any" value="${p.dimensions[U]??""}"></label>`).join("")}</div><p id="customer-form-error" role="alert" class="text-red"></p>`,r("\u4FDD\u5B58","customer-save-structure",{primary:!0}))}function Q(){let U=p.users[0]||{};i.openModal("\u7528\u6237\u4FE1\u606F\u7BA1\u7406",`<div class="form-grid">${[["username","\u7528\u6237\u540D"],["name","\u59D3\u540D"],["organization","\u5355\u4F4D"],["contact","\u8054\u7CFB\u65B9\u5F0F"]].map(([T,Ae])=>`<label class="form-field">${Ae}<input class="input" id="customer-user-${T}" value="${o(U[T]||"")}"></label>`).join("")}<label class="form-field">\u89D2\u8272<select class="select" id="customer-user-role"><option>\u7BA1\u7406\u5458</option><option ${U.role==="\u76D1\u6D4B\u5458"?"selected":""}>\u76D1\u6D4B\u5458</option><option ${U.role==="\u67E5\u770B\u8005"?"selected":""}>\u67E5\u770B\u8005</option></select></label></div><p class="text-red" id="customer-form-error" role="alert"></p>`,r("\u4FDD\u5B58","customer-save-user",{primary:!0}))}function de(){i.openModal("\u65B0\u589E\u8BBE\u5907\u7EF4\u62A4\u8BB0\u5F55",`<div class="form-grid"><label class="form-field">\u7EF4\u62A4\u65E5\u671F<input class="input" type="date" id="customer-maintenance-date" value="${e.time.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"})}"></label><label class="form-field">\u7EF4\u62A4\u4EBA\u5458<input class="input" id="customer-maintenance-person"></label><label class="form-field full">\u7EF4\u62A4\u5185\u5BB9<textarea class="input" id="customer-maintenance-content" rows="3"></textarea></label><label class="form-field">\u7EF4\u62A4\u7ED3\u679C<select class="select" id="customer-maintenance-result"><option>\u5DF2\u5B8C\u6210</option><option>\u8FDB\u884C\u4E2D</option></select></label></div><p class="text-red" id="customer-form-error" role="alert"></p>`,r("\u4FDD\u5B58","customer-save-maintenance",{primary:!0}))}let se=U=>document.getElementById(U);function we(){let U=se("customer-from").value,T=se("customer-to").value;if(!U||!T||U>=T){i.toast("\u7ED3\u675F\u65F6\u95F4\u9700\u665A\u4E8E\u5F00\u59CB\u65F6\u95F4");return}if((new Date(T)-new Date(U))/1e3/parseInt(e.historyGranularity,10)>1e4){i.toast("\u67E5\u8BE2\u65F6\u6BB5\u8FC7\u957F\uFF0C\u8BF7\u7F29\u5C0F\u65F6\u95F4\u8303\u56F4");return}e.historyFrom=U,e.historyTo=T,e.historyPoints=[e.selected],e.historyQueried=!0,p.monitorMode="history",p.signalResult=null,p.trendResult=null,p.signalRunning=!1,p.trendRunning=!1,i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")}function ve(U){if(l(e.selected).quality!=="valid"&&p.monitorMode==="live"){i.toast("\u5F53\u524D\u6D4B\u70B9\u65E0\u6709\u6548\u6570\u636E");return}if(U==="trend"&&p.trend==="proxy"){if(!e.modelReady){p.view="model",i.render(),i.toast("\u8BF7\u5148\u90E8\u7F72\u4EE3\u7406\u6A21\u578B");return}i.runModel(),p.view="business",p.trendRunning=!1,i.render();return}let T=P();p[U+"Result"]=U==="signal"&&p.signal==="raw"?T:T.map((Ae,Pe)=>{let We=T.slice(Math.max(0,Pe-4),Pe+1);return We.reduce((ae,ct)=>ae+ct,0)/We.length}),p[U+"Running"]=p.monitorMode==="live",i.render(),i.toast("\u6267\u884C\u5B8C\u6210")}function Ke(){let U=(Ae,Pe)=>{let We=se(Ae);We&&(We.innerHTML=Pe)};Fe();let T=se("customer-point");if(T&&(T.value=e.selected),e.page==="home"&&(U("customer-sensors",m("\u4F20\u611F\u5668\u7EDF\u8BA1",w())),U("customer-alarms",m("\u62A5\u8B66\u7EDF\u8BA1",_()))),e.page==="overview"){U("customer-monitor-info",I()),U("customer-point-state",B()),U("customer-raw-chart",k(P(),{name:"\u539F\u59CB\u4FE1\u53F7"})),U("customer-indicator-chart",k(P(),{threshold:!0,name:"\u5E94\u53D8\u76D1\u6D4B\u6307\u6807"}));let Ae=se("customer-point");Ae&&(Ae.value=e.selected)}if(e.page==="models"&&p.view==="business"){U("customer-monitor-info",I(!0)),U("customer-signal-input",k(P(),{name:"\u4FE1\u53F7\u5904\u7406\u8F93\u5165"})),U("customer-trend-input",k(P(),{threshold:!0,name:"\u8D8B\u52BF\u5206\u6790\u8F93\u5165"})),p.trend==="proxy"&&U("customer-trend-output",j());for(let Ae of["signal","trend"])if(p[Ae+"Running"]){let Pe=P();p[Ae+"Result"]=Ae==="signal"&&p.signal==="raw"?Pe:Pe.map((We,ae)=>{let ct=Pe.slice(Math.max(0,ae-4),ae+1);return ct.reduce((ze,Xe)=>ze+Xe,0)/ct.length}),U("customer-"+Ae+"-output",k(p[Ae+"Result"],{color:Ae==="signal"?"#6bd2c8":"#e2bf69",name:Ae==="signal"?"\u4FE1\u53F7\u5904\u7406\u7ED3\u679C":"\u5E94\u53D8\u8D8B\u52BF\u7ED3\u679C"}))}}e.page==="connections"&&(U("customer-iot-stat",w()),U("customer-sensor-table",Ee())),e.page==="alarms"&&U("customer-alarm-summary",_())}function Fe(){let U=se("customer-clock"),T=new Date;U&&(U.textContent=T.toLocaleDateString("sv-SE",{timeZone:"Asia/Shanghai"}).replaceAll("-",".")+"  "+d(T))}let rt={"customer-scene":()=>i.showScene(),"customer-iot":()=>i.navigate("connections"),"customer-history":()=>i.navigate("history"),"customer-query":we,"customer-live":()=>{p.monitorMode="live",p.signalResult=null,p.trendResult=null,i.render()},"customer-export-monitor":()=>{e.historyPoints=[e.selected],p.monitorMode==="history"?i.exportHistory():i.download("MindEdge-\u5B9E\u65F6\u4FE1\u53F7.csv",i.csv([["\u6D4B\u70B9","\u6837\u672C","\u5E94\u53D8/\u03BC\u03B5"],...P().map((U,T)=>[e.selected,T,U.toFixed(2)])]),"text/csv;charset=utf-8")},"customer-process":()=>{p.view="business",i.navigate("models")},"customer-analysis":()=>{p.view="business",i.navigate("models")},"customer-fea":()=>{p.view="fea",e.resultMode="offline",i.navigate("models")},"customer-assessment-back":()=>{p.view="business",i.render()},"customer-model-results":()=>{p.view="model-results",e.resultMode="proxy",i.render()},"customer-execute-signal":()=>ve("signal"),"customer-execute-trend":()=>ve("trend"),"customer-stop-signal":()=>{p.signalRunning=!1,i.render()},"customer-stop-trend":()=>{p.trendRunning=!1,i.render()},"customer-query-alarm":()=>{i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")},"customer-query-iot":()=>{i.render(),i.toast("\u67E5\u8BE2\u5B8C\u6210")},"customer-ignore-alarm":U=>{i.alarmModal(U.dataset.id);let T=se("alarm-remark");T&&!T.readOnly&&(T.value="\u7ECF\u6838\u5BF9\u5FFD\u7565\u6B64\u4E8B\u4EF6")},"customer-sensor-detail":U=>{e.selected=U.dataset.id,i.pointModal()},"customer-sensor-setting":U=>{e.selected=U.dataset.id;let T=l(e.selected);i.openModal(T.id+" \xB7 \u4F20\u611F\u5668\u8BBE\u7F6E",`<div class="key-values"><div><span>\u91C7\u96C6\u8BBE\u5907</span><strong>DH5908N \xB7 ${T.card}</strong></div><div><span>\u901A\u9053</span><strong>CH${T.channel}</strong></div><div><span>\u7C7B\u578B</span><strong>\u5E94\u53D8\u4F20\u611F\u5668</strong></div><div><span>\u5355\u4F4D</span><strong>\u03BC\u03B5</strong></div></div><label class="form-field" style="margin-top:16px">\u5B89\u88C5\u90E8\u4F4D<input class="input" id="customer-sensor-name" value="${o(T.name)}"></label><p id="customer-form-error" role="alert" class="text-red"></p>`,r("\u4FDD\u5B58","customer-save-sensor",{primary:!0}))},"customer-save-sensor":()=>{let U=se("customer-sensor-name").value.trim();if(!U){se("customer-form-error").textContent="\u8BF7\u586B\u5199\u5B89\u88C5\u90E8\u4F4D";return}l(e.selected).name=U,i.closeModal(),i.render()},"customer-topology":()=>i.openModal("\u6570\u636E\u94FE\u8DEF",i.topology(),r("\u5173\u95ED","close-modal"),!0),"customer-report-generate":()=>{p.reports.push({id:"RPT-"+String(p.reports.length+1).padStart(4,"0"),time:new Date(e.time),valid:A().online,active:e.alarms.filter(U=>!U.recovered).length,version:e.deployedVersion||"\u672A\u90E8\u7F72"}),Te()},"customer-report-query":Te,"customer-report-export":()=>{let U=p.reports.at(-1);U&&i.download(U.id+".json",JSON.stringify({...U,dataSource:"\u6D4F\u89C8\u5668\u6A21\u62DF\u76D1\u6D4B\u6570\u636E\uFF0C\u975E\u6B63\u5F0F\u7ED3\u6784\u8BC4\u4F30\u7ED3\u8BBA",points:t},null,2),"application/json")},"customer-edit-structure":Be,"customer-save-structure":()=>{let U=Object.fromEntries(["L","W","H","S"].map(T=>[T,se("customer-dimension-"+T).value.trim()]));if(Object.values(U).some(T=>T&&(!Number.isFinite(Number(T))||Number(T)<=0))){se("customer-form-error").textContent="\u7ED3\u6784\u5C3A\u5BF8\u5E94\u4E3A\u6B63\u6570\uFF0C\u672A\u63D0\u4F9B\u7684\u53C2\u6570\u53EF\u7559\u7A7A";return}Object.keys(U).forEach(T=>p.dimensions[T]=U[T]?Number(U[T]):null),i.closeModal(),i.render()},"customer-edit-user":Q,"customer-save-user":()=>{let U=Object.fromEntries(["username","name","organization","contact","role"].map(T=>[T,se("customer-user-"+T).value.trim()]));if(!U.username||!U.name){se("customer-form-error").textContent="\u8BF7\u586B\u5199\u7528\u6237\u540D\u548C\u59D3\u540D";return}p.users=[{...U,id:p.users[0]?.id||"USR-001",status:"\u79BB\u7EBF"},...p.users.slice(1)],i.closeModal(),i.render()},"customer-add-maintenance":de,"customer-save-maintenance":()=>{let U=Object.fromEntries(["date","person","content","result"].map(T=>[T,se("customer-maintenance-"+T).value.trim()]));if(!U.date||!U.person||!U.content){se("customer-form-error").textContent="\u8BF7\u586B\u5199\u65E5\u671F\u3001\u7EF4\u62A4\u4EBA\u5458\u548C\u7EF4\u62A4\u5185\u5BB9";return}p.maintenance.unshift({...U,id:"REC-"+String(p.maintenance.length+1).padStart(4,"0")}),i.closeModal(),i.render()},"customer-import":U=>{p.importTarget=U.dataset.target,se("customer-data-import").click()},"customer-export":U=>{let T=U.dataset.target,Ae=T==="structure"?p.dimensions:T==="thresholds"?n:p[T];i.download("MindEdge-"+{structure:"\u7ED3\u6784\u53C2\u6570",users:"\u7528\u6237\u4FE1\u606F",thresholds:"\u76D1\u6D4B\u53C2\u6570",maintenance:"\u7EF4\u62A4\u8BB0\u5F55"}[T]+".json",JSON.stringify(Ae,null,2),"application/json")}};async function lt(U){if(U.id==="customer-point")return e.selected=U.value,p.signalResult=null,p.trendResult=null,p.signalRunning=!1,p.trendRunning=!1,i.render(),!0;if(U.id==="customer-from"||U.id==="customer-to")return e[U.id==="customer-from"?"historyFrom":"historyTo"]=U.value,!0;if(U.id==="customer-signal"||U.id==="customer-trend"){let T=U.id.slice(9);return p[T]=U.value,p[T+"Running"]=!1,p[T+"Result"]=null,i.render(),!0}if(U.id==="customer-alarm-filter")return e.alarmFilter=U.value,i.render(),!0;if(U.id==="customer-iot-filter")return p.iotFilter=U.value,i.render(),!0;if(U.id==="customer-data-import"&&U.files?.[0]){try{let T=U.files[0];if(T.size>1024*1024)throw new Error("\u8BF7\u9009\u62E9 1 MB \u4EE5\u5185\u7684\u6570\u636E\u6587\u4EF6");let Ae=JSON.parse(await T.text());if(p.importTarget==="structure"){if(!Ae||Array.isArray(Ae)||["L","W","H","S"].some(Pe=>Ae[Pe]!=null&&(typeof Ae[Pe]!="number"||!Number.isFinite(Ae[Pe])||Ae[Pe]<=0)))throw new Error("\u7ED3\u6784\u53C2\u6570\u683C\u5F0F\u65E0\u6548");p.dimensions=Object.fromEntries(["L","W","H","S"].map(Pe=>[Pe,Ae[Pe]??null]))}else if(p.importTarget==="thresholds"){let Pe=["lowAlarm","lowWarning","highWarning","highAlarm"];if(!Array.isArray(Ae)||Ae.length!==16||new Set(Ae.map(We=>We.pointId)).size!==16||Ae.some(We=>!l(We.pointId)||Pe.some(ae=>typeof We[ae]!="number"||!Number.isFinite(We[ae]))||!Pe.every((ae,ct)=>ct===0||We[Pe[ct-1]]<We[ae])))throw new Error("\u8BF7\u5BFC\u5165\u5B8C\u6574\u7684 16 \u70B9\u9608\u503C\u53C2\u6570");Ae.forEach(We=>{let ae=c(We.pointId);Pe.forEach(ct=>ae[ct]=We[ct]),ae.version++}),i.updatePoints()}else{let Pe=p.importTarget==="users"?["id","username","name","organization","role","status"]:["id","date","content","person","result"];if(!Array.isArray(Ae)||Ae.length>1e3||Ae.some(We=>!We||Pe.some(ae=>typeof We[ae]!="string")))throw new Error("\u6570\u636E\u6587\u4EF6\u5B57\u6BB5\u4E0D\u5B8C\u6574");p[p.importTarget]=Ae.map(We=>({...Object.fromEntries(Pe.map(ae=>[ae,We[ae]])),...p.importTarget==="users"?{contact:typeof We.contact=="string"?We.contact:""}:{}}))}i.render(),i.toast("\u5BFC\u5165\u5B8C\u6210")}catch(T){i.toast(T instanceof SyntaxError?"\u8BF7\u9009\u62E9\u6709\u6548\u7684 JSON \u6570\u636E\u6587\u4EF6":T.message)}finally{U.value=""}return!0}return!1}return{home:D,monitor:W,assessment:Y,alarms:Ve,params:ce,iot:Me,actions:rt,change:lt,refresh:Ke,updateClock:Fe,setView:U=>{p.view=U},getView:()=>p.view,resetAnalysis:()=>{p.signalResult=null,p.trendResult=null,p.signalRunning=!1,p.trendRunning=!1}}}var Qf={dashboard:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',trend:'<path d="M3 3v18h18M6 15l4-5 4 3 6-8"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',box:'<path d="m12 3 9 5v9l-9 5-9-5V8l9-5ZM3 8l9 5 9-5M12 13v9M7 5.8l10 5.5"/>',network:'<rect x="8" y="2" width="8" height="6" rx="1"/><rect x="2" y="16" width="7" height="6" rx="1"/><rect x="15" y="16" width="7" height="6" rx="1"/><path d="M12 8v4M5.5 16v-4h13v4"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5"/>',upload:'<path d="M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5"/>',arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',external:'<path d="M14 3h7v7M21 3 10 14M10 3H3v18h18v-7"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1.5 1-1.5 1.5-1.5 2.5M12 17h.01"/>',book:'<path d="M12 5c-3-2-7-2-10-1v16c4-1 7-1 10 1m0-16c3-2 7-2 10-1v16c-4-1-7-1-10 1V5Z"/>',close:'<path d="m6 6 12 12M18 6 6 18"/>',reset:'<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>',focus:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><circle cx="12" cy="12" r="3"/>',scan:'<path d="M5 3H3v4m16-4h2v4M3 17v4h2m16-4v4h-2M3 12h18M8 8v8m4-8v8m4-8v8"/>',check:'<path d="m4 12 5 5L20 6"/>',checkcircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',alert:'<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v5m0 3h.01"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',radio:'<circle cx="12" cy="12" r="2"/><path d="M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14M8 8a5 5 0 0 0 0 8m8-8a5 5 0 0 1 0 8"/>',cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"/>',sliders:'<path d="M4 21v-7m0-4V3M12 21v-3m0-4V3M20 21v-7m0-4V3M1 10h6m2 8h6m2-8h6"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',pause:'<path d="M8 4v16M16 4v16"/>',file:'<path d="M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 13h8m-8 4h8"/>',layers:'<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',chevron:'<path d="m9 5 7 7-7 7"/>',expand:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5m13-5v5h-5"/>',shield:'<path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6l9-4Z"/><path d="m8 12 3 3 5-6"/>'};function yt(i,e=""){return`<svg class="${e}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Qf[i]||Qf.box}</svg>`}function Qn(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Qe=i=>document.querySelector(i),su=[["home","dashboard","\u9996\u9875"],["overview","trend","\u7ED3\u6784\u76D1\u6D4B"],["models","box","\u7ED3\u6784\u8BC4\u4F30"],["alarms","bell","\u62A5\u8B66\u4FE1\u606F"],["params","sliders","\u53C2\u6570\u7BA1\u7406"],["connections","network","IOT\u7BA1\u7406"]],gs={home:"/home",overview:"/monitor",history:"/monitor/history",models:"/assessment",alarms:"/alarm",params:"/params",connections:"/iot"};function ip(){let i=location.hash.slice(1);return Object.keys(gs).find(e=>gs[e]===i)||(Object.hasOwn(gs,i)?i:"home")}var oy=["\u5DE6\u652F\u817F\u4E0B\u6BB5","\u5DE6\u652F\u817F\u4E2D\u6BB5","\u5DE6\u652F\u817F\u710A\u7F1D","\u5DE6\u652F\u817F\u4E0A\u6BB5","\u5DE6\u4E0A\u8FDE\u63A5\u6BB5","\u5DE6\u4FA7\u6A2A\u6881\u7AEF","\u6A2A\u6881\u8DE8\u4E2D","\u53F3\u4FA7\u6A2A\u6881\u7AEF","\u53F3\u4E0A\u8FDE\u63A5\u6BB5","\u53F3\u652F\u817F\u4E0A\u6BB5","\u53F3\u652F\u817F\u710A\u7F1D","\u53F3\u652F\u817F\u4E2D\u6BB5","\u53F3\u652F\u817F\u4E0B\u6BB5","\u540E\u4FA7\u5DE6\u8FDE\u63A5","\u540E\u4FA7\u6A2A\u6881","\u540E\u4FA7\u53F3\u8FDE\u63A5"],ru=[138,165,291,142,186,213,348,193,166,202,175,302,156,187,164,179],wt=Array.from({length:16},(i,e)=>({id:`T${String(e+1).padStart(2,"0")}`,name:oy[e],card:e<8?"A":"B",channel:e%8+1,base:ru[e],value:ru[e],status:"normal",quality:"valid"})),cu=wt.map(i=>({pointId:i.id,lowAlarm:-330,lowWarning:-280,highWarning:280,highAlarm:330,enabled:!0,version:1})),au=[{id:"FE-REF-01",name:"A \u578B\u67B6\u6574\u4F53\u5E94\u529B\u4E91\u56FE 01",quantity:"S, Mises \xB7 \u5E73\u5747 75%",image:"assets/image-de266d0ff056ba6e.png",note:"\u6574\u4F53\u6784\u4EF6\u4E0E\u6A2A\u6881\u8FDE\u63A5\u533A\u53C2\u8003"},{id:"FE-REF-02",name:"A \u578B\u67B6\u6574\u4F53\u5E94\u529B\u4E91\u56FE 02",quantity:"S, Mises \xB7 \u5E73\u5747 75%",image:"assets/image-ffcf9a9f6c37881b.png",note:"\u9876\u7AEF\u8FDE\u63A5\u5B54\u4E0E\u6574\u4F53\u5206\u5E03\u53C2\u8003"},{id:"FE-REF-03",name:"\u8FDE\u63A5\u5B54\u5C40\u90E8\u4E91\u56FE",quantity:"S, Mises \xB7 \u539F\u56FE\u6807\u6CE8",image:"assets/image-64f13216b068c6fc.png",note:"\u539F\u56FE\u5206\u8FA8\u7387\u8F83\u5C0F\uFF0C\u4FDD\u7559\u539F\u59CB\u5185\u5BB9"},{id:"FE-REF-04",name:"\u6784\u4EF6\u5E94\u529B\u5206\u5E03\u53C2\u8003",quantity:"\u672A\u5F55\u5165",image:"assets/image-c2c168925dc5a50b.png",note:"\u7AEF\u90E8\u8FDE\u63A5\u533A\u4E0E\u957F\u6784\u4EF6\u5206\u5E03\u53C2\u8003"},{id:"FE-REF-05",name:"\u5C40\u90E8\u6784\u4EF6\u4E91\u56FE",quantity:"\u672A\u5F55\u5165",image:"assets/image-c6d0b0dce50a0d64.png",note:"\u539F\u56FE\u5206\u8FA8\u7387\u8F83\u5C0F\uFF0C\u672A\u9644\u5E26\u8272\u6807\u4E0E\u53C2\u6570"}],ly=["assets/image-f8ab7b7d737511da.jpg","assets/image-3c755545bad80396.jpg","assets/image-f7f4dc075d875861.jpg","assets/image-bb6dae2c8beb8a2c.jpg","assets/image-42916f987c715a78.jpg","assets/image-cba9c0a0cf8af265.jpg","assets/image-5448784d861eab4f.jpg","assets/image-c2ca1df88a96c0bc.jpg","assets/image-2fd7d0c689d90139.jpg","assets/image-9a2041405e41d173.jpg","assets/image-dcb9b0e689abf611.jpg","assets/image-ad6b5c9d3809f2f1.jpg"],ou=[["01-frame-crack","A \u578B\u67B6 + \u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u88C2\u7EB9",20.9],["02-ct-crack","CT \u4EF6\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u8BD5\u4EF6",16.1],["03-frame","\u5F27\u5F62\u6784\u4EF6\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u5C40\u90E8",14.3],["04-hole","\u5B54\u90E8\u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u5C40\u90E8",14.5],["05-sent-crack","SENT \u88C2\u7EB9\u6269\u5C55","\u4EFF\u771F / \u8BD5\u4EF6",7.6],["06-test","\u88C2\u7EB9\u6269\u5C55\u5BF9\u7167","\u4EFF\u771F / \u5BF9\u7167",11.3],["07-frontend","\u7CFB\u7EDF\u64CD\u4F5C\u89C6\u9891","\u7CFB\u7EDF\u64CD\u4F5C",28.7],["08-cycle-strain","\u5355\u5468\u671F\u53D8\u5E45\u5E94\u53D8\u6570\u636E","\u4EFF\u771F / \u5E94\u53D8\u5BF9\u7167",25.8],["09-real-frame","A \u578B\u67B6\u4EFF\u771F","\u4EFF\u771F / \u6574\u4F53",20.8],["10-acquisition","\u5E94\u53D8\u4FE1\u53F7\u91C7\u96C6","\u73B0\u573A / \u91C7\u96C6",20.2],["11-fatigue-strain","\u75B2\u52B3\u5B9E\u9A8C + \u5E94\u53D8\u4FE1\u53F7","\u5B9E\u9A8C / \u5BF9\u7167",19.9],["12-fatigue","\u75B2\u52B3\u5B9E\u9A8C\u89C6\u9891","\u5B9E\u9A8C / \u75B2\u52B3",19.9]].map(([i,e,t,n],s)=>({id:i,name:e,category:t,duration:n,poster:ly[s],url:"media/"+i+".mp4"})),C={page:ip(),selected:"T07",structureView:"structure",paramTab:"thresholds",homeZoom:1,scenario:"typical",paused:!1,tick:0,time:new Date("2026-11-16T10:32:18+08:00"),alarms:[],alarmTab:"events",alarmFilter:"all",alarmSearch:"",alarmPeriod:"all",ruleSearch:"",historyPoints:["T07","T03","T12"],historyFrom:"2026-11-16T10:22",historyTo:"2026-11-16T10:32",historyGranularity:"10s",historyQueried:!0,modelTab:"results",resultMode:"offline",feaIndex:0,videoIndex:0,modelReady:!1,modelStatus:"pending",modelVersion:"",deployedVersion:"",previousVersion:null,modelFile:"",modelStep:0,modelRunCount:0,inputMap:wt.map(i=>i.id),validation:null,modelResult:null,modelLogs:[],resultCondition:"\u6316\u6398\u5DE5\u51B5",resultQuantity:"stress",connTab:"topology",pointSearch:"",externalUrl:"",externalEnabled:!1,uploadedGLB:!1,report:null,ruleCondition:"\u901A\u7528\u5DE5\u51B5"},rn=null,ep,sp,wn=i=>wt.find(e=>e.id===i),_s=(i=C.time)=>i.toLocaleTimeString("zh-CN",{hour12:!1,timeZone:"Asia/Shanghai"}),hu={normal:"\u6B63\u5E38",warning:"\u9884\u8B66",alarm:"\u62A5\u8B66",offline:"\u6570\u636E\u5F02\u5E38"};function xn(i,e=""){return`<span class="tag ${e}">${i}</span>`}function Mt(i,e,t={}){return`<button class="btn ${t.primary?"primary":""} ${t.ghost?"ghost":""} ${t.compact?"compact":""}" data-action="${e}" ${t.disabled?"disabled":""}>${t.icon?yt(t.icon):""}${i}</button>`}function rp(i){return wt.map(e=>`<option value="${e.id}" ${e.id===i?"selected":""}>${e.id} \xB7 ${e.name}</option>`).join("")}function Gi(i=C.selected){return cu.find(e=>e.pointId===i)}function Nl(i){return i.quality==="stale"||i.value===null?"\u2014":i.value.toFixed(1)}function ap(){let i=C.alarmPeriod==="10"?C.time.getTime()-6e5:-1/0;return C.alarms.filter(e=>(C.alarmFilter==="all"||C.alarmFilter==="active"&&!e.recovered||C.alarmFilter==="alarm"&&e.level==="alarm"||C.alarmFilter==="warning"&&e.level==="warning")&&(!C.alarmSearch||[e.pointId,e.name].join(" ").toLowerCase().includes(C.alarmSearch.toLowerCase()))&&e.time.getTime()>=i)}function cy(i,e){return i.value===null||i.quality!=="valid"?"offline":e.enabled?i.value>=e.highAlarm||i.value<=e.lowAlarm?"alarm":i.value>=e.highWarning||i.value<=e.lowWarning?"warning":"normal":"normal"}function Ti(){wt.forEach((i,e)=>{let t=C.scenario==="sensor"&&e>=8;if(C.scenario==="network"){i.quality="stale",i.status="offline";return}i.quality=t?"missing":"valid";let n=C.scenario==="normal"?125+e*4:ru[e];i.value=t?null:Math.round((n+Math.sin(C.tick*.13+e*.68)*4)*10)/10,i.status=cy(i,Gi(i.id))}),hy()}function hy(){wt.forEach(i=>{let e=C.alarms.find(t=>t.pointId===i.id&&!t.recovered);if(i.status==="warning"||i.status==="alarm"){if(e&&e.level===i.status)return;e&&(e.recovered=!0,e.recoverTime=new Date(C.time));let t=Gi(i.id);C.alarms.unshift({id:"AL-"+String(C.alarms.length+1).padStart(4,"0"),pointId:i.id,name:i.name,level:i.status,value:i.value,threshold:i.status==="alarm"?i.value<0?t.lowAlarm:t.highAlarm:i.value<0?t.lowWarning:t.highWarning,ruleVersion:t.version,time:new Date(C.time),acknowledged:!1,recovered:!1,remark:""})}else i.status==="normal"&&e&&(e.recovered=!0,e.recoverTime=new Date(C.time))})}function St(i){clearTimeout(ep),Qe("#toast").textContent=i,Qe("#toast").classList.add("show"),ep=setTimeout(()=>Qe("#toast").classList.remove("show"),3500)}function op(i,e,t,n=""){return`<div class="page-heading"><h1>${e}</h1><div class="heading-actions">${n}</div></div>`}function uy(){return`<div class="scene-switch"><button class="${C.structureView==="machine"?"active":""}" data-action="scene-view" data-value="machine">\u6574\u673A\u6982\u89C8</button><button class="${C.structureView==="structure"?"active":""}" data-action="scene-view" data-value="structure">A \u578B\u67B6 \xB7 16 \u70B9</button><button data-action="reference">\u7ED3\u6784\u8D44\u6599 \u2197</button></div>`}function dy(){Vt={type:"reference"},ei("\u7ED3\u6784\u8D44\u6599",'<img class="reference-image" src="assets/image-2cf7e8eeba19e058.jpg" alt="WK35 \u7535\u94F2\u7ED3\u6784\u8D44\u6599">',Mt("\u5173\u95ED","close-modal",{primary:!0}),!0)}function lp(i=!1){return`<div class="model-stage" id="model-stage"><div class="model-annotation"><span class="status-dot cyan"></span><span id="model-caption">${!i&&C.structureView==="machine"?"WK35 \xB7 \u6574\u673A\u53C2\u6570\u5316\u793A\u610F":"A-FRAME \xB7 \u7ED3\u6784\u4E0E\u6D4B\u70B9\u793A\u610F"}</span></div><div class="model-tags">${xn(i?"\u6F14\u793A\u7740\u8272 \xB7 \u975E\u771F\u5B9E\u8BA1\u7B97":C.structureView==="machine"?"\u6574\u673A\u5916\u89C2\u53C2\u8003 \xB7 \u975E\u539F\u59CB GLB":"16 \u4E2A\u5360\u4F4D\u6D4B\u70B9","dark")}</div><div class="model-tools"><button class="icon-btn" data-action="reset-model" aria-label="\u590D\u4F4D\u4E09\u7EF4\u89C6\u89D2">${yt("reset")}</button><button class="icon-btn" data-action="front-model" aria-label="\u4E09\u7EF4\u6B63\u89C6\u56FE">${yt("focus")}</button><button class="icon-btn" data-action="wire-model" aria-label="\u5207\u6362\u6A21\u578B\u7EBF\u6846">${yt("layers")}</button></div></div>`}function cp(i=!1){return i?'<div class="model-footer"><span>\u7ED3\u679C\u8272\u6807</span><div class="result-scale"><span>\u4F4E</span><div class="scale-gradient"></div><span>\u9AD8</span></div></div>':'<div class="model-footer"><div class="legend"><span><i class="normal"></i>\u6B63\u5E38</span><span><i class="warning"></i>\u9884\u8B66</span><span><i class="alarm"></i>\u62A5\u8B66</span><span><i class="offline"></i>\u65E0\u6709\u6548\u6570\u636E</span></div></div>'}function Ul(i,e=70,t=1,n=0,s=C.scenario==="normal"){let r=wn(i)||wt[0],a=s?125+wt.indexOf(r)*4:r.base;return Array.from({length:e},(o,l)=>{let c=l*t+n;return a+Math.sin(c*.49+wt.indexOf(r))*(i==="T07"?25:14)+Math.sin(c*1.31)*7+(c%180>36&&c%180<48&&i==="T07"?16:0)})}function Ol(i){let e=new Date(C.historyFrom+"+08:00"),t=new Date(C.historyTo+"+08:00"),n=parseInt(C.historyGranularity,10),s=Math.max(1,Math.floor((t-e)/1e3/n)+1);return Ul(i,s,n,Math.floor(e.getTime()/1e3)%180,!1)}function fy(){let i=wn(C.selected);return i.quality==="valid"?uu([C.selected]):`<div class="empty-state" style="padding:35px 20px"><h3>${i.quality==="stale"?"\u94FE\u8DEF\u4E2D\u65AD\uFF0C\u5B9E\u65F6\u66F2\u7EBF\u6682\u505C":"\u91C7\u96C6\u901A\u9053\u65E0\u6709\u6548\u6570\u636E"}</h3><p>${i.id} \xB7 \u7B49\u5F85\u6709\u6548\u8F93\u5165\uFF0C\u6682\u505C\u663E\u793A\u5B9E\u65F6\u66F2\u7EBF\u3002</p></div>`}function uu(i=["T07"],{large:e=!1,history:t=!1}={}){let n=innerWidth>1200?224:innerWidth>980?192:innerWidth>740?78:64,s=innerWidth-n-(innerWidth>1200?64:innerWidth>740?48:30),r=Math.max(250,Math.round(e?s-40:innerWidth>980?s*.57-36:s-36)),a=e?270:174,o=38,l=18,c=20,h=29,u=i.slice(0,4),d=0,f=420,g=A=>c+(f-A)/(f-d)*(a-c-h),v=["#50d9fa","#a4b3ff","#f4c36e","#65d7b6"],p=[0,100,200,300,400].map(A=>`<line class="gridline" x1="${o}" y1="${g(A)}" x2="${r-l}" y2="${g(A)}"/><text x="${o-10}" y="${g(A)+3}" text-anchor="end">${A}</text>`).join(""),m=Gi(u[0]||"T07"),S=u.map((A,w)=>{let _=t?Ol(A):Ul(A,61,1,C.tick*2),x=Math.max(1,Math.ceil(_.length/600)),I=_.map((N,B)=>({v:N,i:B})).filter(({i:N})=>N%x===0||N===_.length-1).map(({v:N,i:B},H)=>`${H===0?"M":"L"}${o+B/Math.max(_.length-1,1)*(r-o-l)},${g(N)}`).join(" ");return`${w===0?`<path d="${I} L${r-l},${a-h} L${o},${a-h}Z" fill="url(#chart-area)"/>`:""}<path d="${I}" fill="none" stroke="${v[w]}" stroke-width="${w===0?2:1.5}"/>`}).join(""),E=m&&m.enabled&&u.length>0,M=t?[C.historyFrom.slice(11),"","",C.historyTo.slice(11)]:[6e4,4e4,2e4,0].map(A=>_s(new Date(C.time.getTime()-A)));return`<svg class="${e?"wide-chart":"chart"}" viewBox="0 0 ${r} ${a}" preserveAspectRatio="none" role="img" aria-label="\u6A21\u62DF\u5E94\u53D8\u65F6\u5E8F\u66F2\u7EBF\uFF0C\u5355\u4F4D\u5FAE\u5E94\u53D8"><defs><linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#178e99" stop-opacity=".10"/><stop offset="1" stop-color="#178e99" stop-opacity="0"/></linearGradient></defs>${p}${E?`<line x1="${o}" y1="${g(m.highWarning)}" x2="${r-l}" y2="${g(m.highWarning)}" stroke="#d6af67" stroke-width="1" stroke-dasharray="6 5"/><text x="${r-l}" y="${g(m.highWarning)-6}" text-anchor="end" fill="#bd9b60">\u9884\u8B66\u4E0A\u9650 ${m.highWarning}</text>`:""}${S}${M.map((A,w)=>`<text x="${o+w*(r-o-l)/3}" y="${a-8}" text-anchor="${w===0?"start":w===3?"end":"middle"}">${Qn(A)}</text>`).join("")}<text x="12" y="11">\u03BC\u03B5</text></svg>`}function py(i){let e=Ul(i,40),t=Math.min(...e)-7,n=Math.max(...e)+7;return`<svg class="sparkline" viewBox="0 0 290 48" preserveAspectRatio="none" aria-hidden="true"><path d="${e.map((r,a)=>`${a?"L":"M"}${a/39*290},${44-(r-t)/(n-t)*36}`).join(" ")}" fill="none" stroke="${wn(i).status==="alarm"?"#cf7570":"#2d999d"}" stroke-width="1.5"/><path d="M0 47H290" stroke="#edf0ef"/></svg>`}function Pl(){return wt.map(i=>`<button class="point-tile ${i.status} ${i.id===C.selected?"selected":""}" data-point="${i.id}" aria-label="\u6D4B\u70B9 ${i.id}" aria-pressed="${i.id===C.selected}"><span class="point-id">${i.id}<i></i></span><span class="point-value">${Nl(i)}</span></button>`).join("")}function my(){let i=C.historyQueried?wt.filter(t=>C.historyPoints.includes(t.id)):[],e=i.map(t=>{let n=Ol(t.id);return`<tr><td><strong>${t.id}</strong><span class="point-table-sub">${t.name}</span></td><td>\u91C7\u96C6\u5361 ${t.card} / CH${t.channel}</td><td class="mono">${Math.min(...n).toFixed(1)}</td><td class="mono">${Math.max(...n).toFixed(1)}</td><td class="mono">${(n.reduce((s,r)=>s+r,0)/n.length).toFixed(1)}</td><td>${xn("\u5386\u53F2\u6570\u636E","blue")}</td><td><button class="row-link" data-action="history-locate" data-point-id="${t.id}">\u5B9A\u4F4D\u7ED3\u6784</button></td></tr>`}).join("");return op("TIME SERIES EXPLORER","\u6570\u636E\u8FFD\u6EAF","\u5C06\u5386\u53F2\u66F2\u7EBF\u3001\u6D4B\u70B9\u5BF9\u6BD4\u4E0E\u6570\u636E\u5BFC\u51FA\u653E\u5728\u540C\u4E00\u4E2A\u89C6\u56FE\u3002",`${Mt("\u5BFC\u51FA\u5F53\u524D\u6570\u636E","export-history",{icon:"download",disabled:!C.historyPoints.length})}`)+`<section class="panel"><div class="toolbar"><label>\u65F6\u95F4\u8303\u56F4<input class="input" id="history-from" type="datetime-local" value="${C.historyFrom}" aria-label="\u5F00\u59CB\u65F6\u95F4"></label><span class="muted">\u81F3</span><input class="input" id="history-to" type="datetime-local" value="${C.historyTo}" aria-label="\u7ED3\u675F\u65F6\u95F4"><label>\u805A\u5408<select class="select" id="history-granularity"><option value="1s" ${C.historyGranularity==="1s"?"selected":""}>1 \u79D2</option><option value="10s" ${C.historyGranularity==="10s"?"selected":""}>10 \u79D2</option><option value="60s" ${C.historyGranularity==="60s"?"selected":""}>1 \u5206\u949F</option></select></label>${Mt("\u67E5\u8BE2","query-history",{primary:!0})}</div><div class="toolbar"><span class="muted small">\u5BF9\u6BD4\u6D4B\u70B9</span><div class="filters">${wt.map(t=>`<button class="filter-chip ${C.historyPoints.includes(t.id)?"active":""}" data-action="toggle-history-point" data-point-id="${t.id}">${C.historyPoints.includes(t.id)?yt("check"):""}${t.id}</button>`).join("")}</div><span class="muted xs">\u6700\u591A 4 \u70B9\u540C\u5C4F</span></div>${C.historyQueried&&C.historyPoints.length?`<div class="chart-meta">${C.historyPoints.map((t,n)=>`<span><i style="background:${["#50d9fa","#a4b3ff","#f4c36e","#65d7b6"][n]}"></i>${t}</span>`).join("")}<span class="muted" style="margin-left:auto">\u65F6\u95F4 ${C.historyFrom.slice(11)}\u2013${C.historyTo.slice(11)} \xB7 \u5355\u4F4D \u03BC\u03B5</span></div><div class="full-chart">${uu(C.historyPoints,{large:!0,history:!0})}</div>`:`<div class="empty-state">${yt("trend")}<h3>${C.historyPoints.length?"\u67E5\u8BE2\u6761\u4EF6\u5DF2\u8C03\u6574":"\u9009\u62E9\u9700\u8981\u5BF9\u6BD4\u7684\u6D4B\u70B9"}</h3><p>\u9009\u62E9\u65F6\u6BB5\u548C\u6D4B\u70B9\u540E\u67E5\u8BE2\uFF0C\u6700\u591A\u6BD4\u8F83 4 \u4E2A\u6D4B\u70B9\u3002</p></div>`}<div class="note">\u66F2\u7EBF\u6765\u81EA\u6D4F\u89C8\u5668\u5185\u751F\u6210\u7684\u5386\u53F2\u6570\u636E\u3002\u5B9E\u9645\u91C7\u6837\u9891\u7387\u3001\u5B58\u50A8\u5468\u671F\u548C\u6570\u636E\u8D28\u91CF\u5224\u5B9A\u5F85\u8054\u8C03\u786E\u8BA4\u3002</div></section><section class="panel section-gap"><div class="panel-head"><h2>\u65F6\u6BB5\u7EDF\u8BA1</h2><span class="muted xs">${C.historyQueried?i.length:0} \u4E2A\u6D4B\u70B9</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>\u6D4B\u70B9 / \u5B89\u88C5\u90E8\u4F4D</th><th>\u901A\u9053</th><th>\u6700\u5C0F\u503C / \u03BC\u03B5</th><th>\u6700\u5927\u503C / \u03BC\u03B5</th><th>\u5747\u503C / \u03BC\u03B5</th><th>\u6570\u636E\u6765\u6E90</th><th>\u64CD\u4F5C</th></tr></thead><tbody>${C.historyQueried&&e?e:'<tr><td colspan="7" class="muted">\u6682\u65E0\u67E5\u8BE2\u7ED3\u679C</td></tr>'}</tbody></table></div></section>`}function gy(){let i=wt.every(s=>s.quality==="valid"),e=C.modelReady&&C.modelResult&&i,t=C.resultMode==="offline",n=e||t;return`<div class="notice neutral">${yt("box")}<span>${t?"\u79BB\u7EBF\u6709\u9650\u5143\u6210\u679C\u6309\u5DE5\u51B5\u8F7D\u5165\u4E0E\u5BF9\u7167\u3002\u4E0B\u65B9\u4F7F\u7528\u793A\u610F\u7740\u8272\u8868\u8FBE\u6210\u679C\u67E5\u770B\u65B9\u5F0F\uFF0C\u5B9E\u9645\u7F51\u683C\u3001\u4E91\u56FE\u548C\u6D4B\u70B9\u6620\u5C04\u5F85\u7532\u65B9\u4EA4\u4ED8\u3002":"\u4EE3\u7406\u6A21\u578B\u63A5\u6536 16 \u8DEF\u5E94\u53D8\uFF0C\u6A21\u578B\u7531\u6821\u65B9\u5B66\u751F\u56E2\u961F\u5F00\u53D1\u5E76\u4EA4\u4ED8\u3002\u672C\u89C6\u56FE\u9884\u7559\u7ED3\u679C\u5B57\u6BB5\u3001\u7248\u672C\u4E0E\u8F93\u5165\u6279\u6B21\u8FFD\u6EAF\uFF0C\u6F14\u793A\u8FD0\u884C\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u5185\u5B8C\u6210\u3002"}</span></div><div class="model-result-grid"><section class="panel ${n?"model-panel":""}"><div class="panel-head"><div><h2>${t?"\u79BB\u7EBF\u6709\u9650\u5143\u6210\u679C":"\u964D\u9636\u4EE3\u7406\u6A21\u578B\u7ED3\u679C"} </h2><p>${t?"\u6309\u5DE5\u51B5\u67E5\u770B\u7ED3\u679C\u8D44\u6E90":"\u5173\u8054\u8F93\u5165\u6279\u6B21\u3001\u6A21\u578B\u7248\u672C\u53CA\u7ED3\u6784\u90E8\u4F4D"}</p></div><div class="result-source"><select class="select" id="result-condition" aria-label="\u7ED3\u679C\u5DE5\u51B5"><option ${C.resultCondition==="\u6316\u6398\u5DE5\u51B5"?"selected":""}>\u6316\u6398\u5DE5\u51B5</option><option ${C.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"selected":""}>\u56DE\u8F6C\u5DE5\u51B5</option><option ${C.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"selected":""}>\u5378\u8F7D\u5DE5\u51B5</option></select></div></div>${n?`${lp(!0)}${cp(!0)}<div class="result-notice">\u5F53\u524D\u4E3A\u7A0B\u5E8F\u751F\u6210\u7684\u7ED3\u6784\u793A\u610F\u548C\u5F52\u4E00\u5316\u7740\u8272\uFF0C\u4E0D\u5BF9\u5E94\u771F\u5B9E\u7F51\u683C\u89E3\u3001\u5E94\u529B\u573A\u6216\u7ED3\u6784\u5B89\u5168\u7ED3\u8BBA\u3002</div>`:`<div class="empty-state" style="padding:80px 20px 85px">${yt("cpu")}<h3>${C.modelReady?i?"\u6682\u65E0\u8FD0\u884C\u7ED3\u679C":"\u8F93\u5165\u6570\u636E\u5F02\u5E38":"\u6A21\u578B\u672A\u90E8\u7F72"}</h3><p>${C.modelReady?i?"\u53EF\u4F7F\u7528\u5F53\u524D 16 \u8DEF\u6F14\u793A\u8F93\u5165\u751F\u6210\u4E00\u6279\u6837\u4F8B\u7ED3\u679C\u3002":`16 \u8DEF\u8F93\u5165\u4E2D\u5B58\u5728\u7F3A\u5931\u6216\u8FC7\u671F\u6570\u636E\uFF0C\u7ED3\u679C\u5C55\u793A\u5DF2\u6682\u505C\u3002
\u6062\u590D\u94FE\u8DEF\u540E\u53EF\u91CD\u65B0\u6F14\u793A\u8FD0\u884C\u3002`:`\u6821\u65B9\u4EA4\u4ED8\u7B97\u6CD5\u5305\u3001\u8FD0\u884C\u73AF\u5883\u53CA\u8F93\u5165\u8F93\u51FA\u8BF4\u660E\u540E\uFF0C
\u5B8C\u6210\u70B9\u4F4D\u6620\u5C04\u3001\u6821\u9A8C\u5E76\u90E8\u7F72\u81F3 MindEdge\u3002`}</p>${Mt(C.modelReady?i?"\u8FD0\u884C\u4E00\u6B21":"\u67E5\u770B\u6570\u636E\u94FE\u8DEF":"\u6A21\u578B\u7BA1\u7406",C.modelReady?i?"run-model":"goto-connections":"goto-deployment",{primary:!0,icon:"arrow"})}</div>`}</section><section class="panel"><div class="panel-head"><h2>${t?"\u6210\u679C\u4FE1\u606F\u4E0E\u5B9E\u6D4B\u5BF9\u7167":"\u7ED3\u679C\u4FE1\u606F\u4E0E\u5B9E\u6D4B\u5BF9\u7167"}</h2>${xn(n?"\u8BA1\u7B97\u7ED3\u679C":"\u5C1A\u65E0\u7ED3\u679C",n?"blue":"neutral")}</div><div class="panel-content"><div class="key-values"><div><span>\u7ED3\u679C\u6765\u6E90</span><strong>${t?"\u7532\u65B9\u79BB\u7EBF\u6210\u679C\u5E93\uFF08\u5360\u4F4D\uFF09":"MindEdge \u4EE3\u7406\u6A21\u578B"}</strong></div><div><span>\u7248\u672C / \u5DE5\u51B5</span><strong>${t?"FE-demo / ":Qn(C.modelResult?.version||C.deployedVersion||"\u672A\u90E8\u7F72")+" / "}${C.resultCondition}</strong></div><div><span>\u8F93\u5165\u6279\u6B21</span><strong class="mono">${n?t?"FE-SAMPLE-001":C.modelResult.batch:"\u2014"}</strong></div><div><span>\u7ED3\u679C\u65F6\u95F4</span><strong class="mono">${n?_s(C.modelResult?.time):"\u2014"}</strong></div></div><div class="result-confidence">\u6A21\u578B\u6709\u6548\u57DF\u3001\u9A8C\u8BC1\u8BEF\u5DEE\u548C\u7ED3\u679C\u5224\u5B9A\u6807\u51C6\u5F85\u7532\u65B9\u63D0\u4F9B\u3002\u539F\u578B\u4E2D\u7684\u6A21\u578B\u6307\u6807\u4E3A\u5360\u4F4D\u5B57\u6BB5\u3002</div><div class="result-metrics"><div class="result-stat"><span>\u6700\u5927\u7B49\u6548\u5E94\u529B</span><strong>${n?C.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"163.2":C.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"94.1":"148.6":"\u2014"}<small> MPa</small></strong></div><div class="result-stat"><span>\u6700\u5927\u4F4D\u79FB</span><strong>${n?C.resultCondition==="\u56DE\u8F6C\u5DE5\u51B5"?"2.81":C.resultCondition==="\u5378\u8F7D\u5DE5\u51B5"?"1.73":"2.36":"\u2014"}<small> mm</small></strong></div></div><h3 style="margin:19px 0 9px">${C.selected} \u5B9E\u6D4B\u5173\u8054</h3><select class="select" id="result-point" style="width:100%;max-width:none" aria-label="\u7ED3\u679C\u5173\u8054\u6D4B\u70B9">${rp(C.selected)}</select><div class="panel-content" style="padding:15px 0 0"><div class="key-values"><div><span>\u5F53\u524D\u5E94\u53D8</span><strong class="mono">${Nl(wn(C.selected))} \u03BC\u03B5</strong></div><div><span>\u5173\u8054\u7ED3\u6784\u90E8\u4F4D</span><strong>${wn(C.selected).name}</strong></div></div><p class="muted xs" style="margin-top:13px">\u7ED3\u679C\u4E0E\u5B9E\u6D4B\u7684\u91CF\u7EB2\u3001\u7F51\u683C\u5750\u6807\u548C\u65F6\u95F4\u57FA\u51C6\u987B\u5728\u63A5\u53E3\u786E\u8BA4\u65F6\u5BF9\u9F50\u3002</p></div></div></section></div>`}function _y(){let i=C.modelStep;return`<div class="notice">${yt("cpu")}<span>\u63A5\u5165\u5BF9\u8C61\u4E3A\u6821\u65B9\u63D0\u4F9B\u7684\u964D\u9636\u4EE3\u7406\u6A21\u578B\u3002\u524D\u7AEF\u7F16\u6392\u8F93\u5165\u6620\u5C04\u3001\u5951\u7EA6\u6821\u9A8C\u3001\u90E8\u7F72\u72B6\u6001\u548C\u7ED3\u679C\u5C55\u793A\u3002\u5F53\u524D\u64CD\u4F5C\u5747\u4E3A\u6D4F\u89C8\u5668\u5185\u7684\u90E8\u7F72\u6F14\u793A\u3002</span></div><div class="two-col"><section class="panel"><div class="panel-head"><div><h2>MindEdge \u6A21\u578B\u63A5\u5165</h2><p>\u6F14\u793A\u751F\u547D\u5468\u671F \xB7 \u6A21\u578B\u5305\u4EA4\u4ED8\u540E\u8054\u8C03</p></div>${xn(C.modelStatus==="running"?"\u8FD0\u884C\u4E2D":C.modelStatus==="validated"?"\u914D\u7F6E\u6709\u6548":C.modelFile?"\u5DF2\u8F7D\u5165":"\u672A\u90E8\u7F72",C.modelStatus==="running"?"":"neutral")}</div><div class="panel-content"><div class="step-list"><div class="step ${i>=1?"active":""}"><b>01  \u6A21\u578B\u7248\u672C</b></div><div class="step ${i>=2?"active":""}"><b>02  \u8F93\u5165\u6620\u5C04</b></div><div class="step ${i>=3?"active":""}"><b>03  \u90E8\u7F72\u9A8C\u8BC1</b></div></div><div class="form-grid"><label class="form-field">\u6A21\u578B\u540D\u79F0<input class="input" id="model-name" value="A \u578B\u67B6\u964D\u9636\u4EE3\u7406\u6A21\u578B" readonly></label><label class="form-field">\u4EA4\u4ED8\u65B9<input class="input" value="\u592A\u539F\u7406\u5DE5\u5B66\u751F\u56E2\u961F" readonly></label><label class="form-field">\u7248\u672C\u53F7<input class="input" id="model-version" placeholder="\u8BF7\u8F93\u5165\u7248\u672C\u53F7" value="${Qn(C.modelVersion)}"></label><label class="form-field">\u90E8\u7F72\u76EE\u6807<input class="input" value="MindEdge / \u5185\u7F51\u8FB9\u7F18\u8282\u70B9" readonly></label><div class="form-field full"><span>\u6A21\u578B\u4EA4\u4ED8\u5305</span><div class="upload-zone">${yt("box")}<strong>${C.modelFile?Qn(C.modelFile):"\u672A\u8F7D\u5165\u6A21\u578B\u5305"}</strong><p>\u5B9E\u9645\u683C\u5F0F\u3001\u4F9D\u8D56\u3001\u8D44\u6E90\u9700\u6C42\u53CA\u542F\u52A8\u65B9\u5F0F\u5F85\u5B66\u751F\u56E2\u961F\u786E\u8BA4</p>${Mt(C.modelFile?"\u91CD\u65B0\u8F7D\u5165":"\u8F7D\u5165\u6A21\u578B","load-sample-model",{compact:!0,icon:"file"})}</div></div></div><div style="display:flex;align-items:center;justify-content:space-between;margin:19px 0 10px"><h3>16 \u8DEF\u8F93\u5165\u6620\u5C04</h3><span class="muted xs">strain[16] \xB7 \u5355\u4F4D \u03BC\u03B5</span></div><div class="table-scroll" style="max-height:240px;border:1px solid var(--line);border-radius:7px"><table class="data-table"><thead><tr><th>\u6A21\u578B\u8F93\u5165</th><th>\u6E90\u6D4B\u70B9 / \u91C7\u96C6\u5361</th><th>\u8D28\u91CF\u72B6\u6001</th></tr></thead><tbody>${C.inputMap.map((e,t)=>`<tr><td class="mono">strain[${t}]</td><td><select class="select model-mapping" aria-label="\u6A21\u578B\u8F93\u5165${t}\u6620\u5C04" data-index="${t}">${wt.map(n=>`<option value="${n.id}" ${n.id===e?"selected":""}>${n.id} \xB7 ${n.card} / CH${n.channel}</option>`).join("")}</select></td><td>${xn(wn(e).quality==="valid"?"\u6709\u6548":"\u7F3A\u5931 / \u8FC7\u671F",wn(e).quality==="valid"?"":"amber")}</td></tr>`).join("")}</tbody></table></div>${C.validation?`<div class="notice validation-message ${C.validation.ok?"":"warning"}" style="margin:15px 0 0">${yt(C.validation.ok?"checkcircle":"alert")}<span>${C.validation.message}</span></div>`:""}<div class="foot-actions"><span class="floating-note">\u683C\u5F0F\u4E0E\u8FD0\u884C\u73AF\u5883\u7531\u6A21\u578B\u63D0\u4F9B\u65B9\u786E\u8BA4</span>${Mt("\u6821\u9A8C\u914D\u7F6E","validate-model",{icon:"checkcircle",disabled:!C.modelFile})}${Mt("\u90E8\u7F72\u6A21\u578B","deploy-model",{primary:!0,icon:"upload",disabled:!C.validation?.ok})}</div></div></section><div><section class="panel"><div class="panel-head"><h2>\u8F93\u5165 / \u8F93\u51FA\u5951\u7EA6</h2>${xn("\u672A\u914D\u7F6E","amber")}</div><div class="panel-content"><div class="check-list"><div class="check-item">${yt("radio")}<div>\u65F6\u95F4\u6233\u4E0E 16 \u8DEF\u5E94\u53D8<small>timestamp / pointIds / strain / quality</small></div></div><div class="check-item">${yt("layers")}<div>\u6A21\u578B\u7ED3\u679C\u4E0E\u7A7A\u95F4\u7D22\u5F15<small>stress / displacement / meshRef / pointMap</small></div></div><div class="check-item wait">${yt("clock")}<div>\u6A21\u578B\u6709\u6548\u57DF<small>\u672A\u914D\u7F6E</small></div></div><div class="check-item wait">${yt("clock")}<div>\u4F9D\u8D56\u53CA\u8D44\u6E90\u8981\u6C42<small>\u672A\u914D\u7F6E</small></div></div></div>${Mt("\u63A5\u53E3\u5B9A\u4E49","contract-example",{ghost:!0,icon:"file"})}</div></section><section class="panel section-gap"><div class="panel-head"><h2>\u90E8\u7F72\u4E0E\u8FD0\u884C\u8BB0\u5F55</h2><button class="row-link" data-action="rollback-model" ${C.previousVersion?"":"disabled"}>\u56DE\u6EDA\u7248\u672C</button></div><div class="panel-content"><div class="terminal" id="model-log">${C.modelLogs.length?C.modelLogs.map(e=>`<div><span class="${e.type==="ok"?"green":e.type==="error"?"orange":""}">[${e.time}] ${Qn(e.text)}</span></div>`).join(""):"<div>\u7B49\u5F85\u8F7D\u5165\u6A21\u578B\u5305</div>"}</div><div class="foot-actions">${Mt("\u8FD0\u884C\u4E00\u6B21","run-model",{primary:!0,icon:"play",disabled:!C.modelReady})}</div></div></section></div></div>`}function vy(){let i=au[C.feaIndex];return`<div class="notice neutral">${yt("file")}<span>\u5DF2\u63A5\u5165\u60A8\u63D0\u4F9B\u7684 5 \u5F20\u4EFF\u771F\u539F\u56FE\uFF0C\u4FDD\u7559\u539F\u6709\u8272\u6807\u548C\u6807\u6CE8\u3002\u8FD9\u91CC\u5C55\u793A\u79BB\u7EBF\u53C2\u8003\u8D44\u6599\uFF0C\u672A\u4E0E\u5B9E\u65F6\u91C7\u96C6\u6570\u636E\u6216\u4EE3\u7406\u6A21\u578B\u63A8\u7406\u5EFA\u7ACB\u8BA1\u7B97\u5173\u8054\u3002</span></div><div class="fea-grid"><section class="panel"><div class="panel-head"><div><h2>${i.name}</h2><p>${i.id}\u7684\u4EFF\u771F\u7ED3\u679C\u622A\u56FE</p></div><button class="row-link" data-action="fea-original">\u67E5\u770B\u539F\u56FE ${yt("external")}</button></div><div class="fea-stage"><img src="${i.image}" alt="${i.name}\uFF0C\u4FDD\u7559\u539F\u59CB\u8272\u6807\u4E0E\u6807\u6CE8"></div><div class="asset-thumbnails">${au.map((e,t)=>`<button class="${t===C.feaIndex?"active":""}" data-action="fea-select" data-index="${t}" aria-label="\u67E5\u770B${e.name}" aria-pressed="${t===C.feaIndex}"><img src="${e.image}" alt=""><span>${String(t+1).padStart(2,"0")} / ${e.name}</span></button>`).join("")}</div></section><aside class="panel"><div class="panel-head"><h2>\u6210\u679C\u4FE1\u606F</h2></div><div class="panel-content"><div class="key-values"><div><span>\u7ED3\u679C\u91CF</span><strong>${i.quantity}</strong></div><div><span>\u5355\u4F4D</span><strong>\u672A\u5F55\u5165</strong></div><div><span>\u5DE5\u51B5 / \u8F7D\u8377</span><strong>\u672A\u5F55\u5165</strong></div><div><span>\u6C42\u89E3\u65F6\u95F4 / \u7248\u672C</span><strong>\u672A\u63D0\u4F9B</strong></div><div><span>\u6E90\u6570\u636E\u4E0E\u7F51\u683C</span><strong>\u56FE\u50CF\u6587\u4EF6</strong></div><div><span>16 \u70B9\u7A7A\u95F4\u6620\u5C04</span><strong>\u672A\u7ED1\u5B9A</strong></div></div><p class="asset-notice">${i.note}\u3002\u56FE\u4E2D\u989C\u8272\u8303\u56F4\u4EE5\u5404\u81EA\u539F\u56FE\u4E3A\u51C6\uFF0C\u4E0D\u80FD\u8DE8\u56FE\u76F4\u63A5\u6BD4\u8F83\u7EDD\u5BF9\u5927\u5C0F\u3002</p><div class="notice warning" style="margin-top:20px">${yt("layers")}<span>\u5EFA\u7ACB\u5B9E\u6D4B\u5BF9\u7167\u524D\uFF0C\u9700\u8865\u9F50\u5DE5\u51B5\u3001\u5355\u4F4D\u3001\u6C42\u89E3\u7248\u672C\u3001\u8282\u70B9 / \u5355\u5143\u7D22\u5F15\u3001\u65F6\u95F4\u57FA\u51C6\u53CA\u6D4B\u70B9\u5750\u6807\u3002</span></div><p class="asset-notice">\u79BB\u7EBF\u4EFF\u771F\u7528\u4E8E\u6210\u679C\u590D\u6838\u4E0E\u7A7A\u95F4\u53C2\u8003\u3002\u5B9E\u65F6\u4EE3\u7406\u6A21\u578B\u7531\u6821\u65B9\u4EA4\u4ED8\uFF0C\u6309\u8F93\u5165\u6279\u6B21\u548C\u7248\u672C\u8FFD\u6EAF\uFF1B\u539F\u56FE\u4E2D\u7684\u5CF0\u503C\u4E0D\u4F5C\u4E3A\u5B9E\u65F6\u9884\u8B66\u9608\u503C\u3002</p><div class="foot-actions">${Mt("\u67E5\u770B\u89C6\u9891","goto-videos",{icon:"play",primary:!0})}</div></div></aside></div>`}function xy(){let i=au[C.feaIndex];Vt={type:"fea"},ei(i.name,`<p>\u7528\u6237\u63D0\u4F9B\u7684\u539F\u59CB\u622A\u56FE \xB7 \u5DE5\u51B5\u3001\u5355\u4F4D\u4E0E\u6C42\u89E3\u7248\u672C\u5F85\u786E\u8BA4</p><img class="reference-image" src="${i.image}" alt="${i.name}\u539F\u56FE">`,Mt("\u5173\u95ED","close-modal",{primary:!0}),!0)}function yy(){let i=ou[C.videoIndex];return`<div class="notice neutral">${yt("play")}<span>\u4ECE\u60A8\u63D0\u4F9B\u7684\u300A\u6F14\u793A\u89C6\u9891.rar\u300B\u4E2D\u6574\u7406 12 \u6BB5\u89C6\u9891\uFF0C\u6DB5\u76D6 A \u578B\u67B6\u3001\u88C2\u7EB9\u6269\u5C55\u3001\u5E94\u53D8\u91C7\u96C6\u548C\u75B2\u52B3\u5B9E\u9A8C\u3002\u89C6\u9891\u4E3A\u5386\u53F2\u6F14\u793A\u8D44\u6599\uFF0C\u5C1A\u672A\u5173\u8054\u672C\u6B21\u5B9E\u65F6\u6570\u636E\u6216\u6A21\u578B\u8FD0\u884C\u6279\u6B21\u3002</span></div><div class="video-grid"><section class="panel"><div class="panel-head"><div><h2>${i.name}</h2><p>${i.category} \xB7 ${i.duration.toFixed(1)} s</p></div>${xn("\u53C2\u8003\u89C6\u9891","blue")}</div><div class="video-theater"><video id="reference-video" controls playsinline preload="metadata" poster="${i.poster}" src="${i.url}" aria-label="${i.name}\u6F14\u793A\u89C6\u9891"></video></div><div class="video-meta"><span id="video-status"></span><button class="row-link" data-action="download-video">\u4E0B\u8F7D\u5F53\u524D\u89C6\u9891 ${yt("download")}</button></div><div class="panel-content"><p class="asset-notice">\u6838\u5BF9 A \u578B\u67B6\u5F62\u6001\u4E0E\u5173\u6CE8\u90E8\u4F4D\u3001\u79BB\u7EBF\u7ED3\u679C\u5C55\u793A\u65B9\u5F0F\u3001\u5E94\u53D8\u6570\u636E\u94FE\u8DEF\u53CA\u7B97\u6CD5\u63A5\u5165\u6D41\u7A0B\u3002\u88C2\u7EB9\u6F14\u793A\u4E0D\u4EE3\u8868\u672C\u9879\u76EE\u5DF2\u5B9E\u73B0\u88C2\u7EB9\u8BC6\u522B\u6216\u6269\u5C55\u9884\u6D4B\uFF0C\u76F8\u5173\u7B97\u6CD5\u80FD\u529B\u987B\u4EE5\u53CC\u65B9\u7EA6\u5B9A\u53CA\u6821\u65B9\u5B9E\u9645\u4EA4\u4ED8\u4E3A\u51C6\u3002</p></div></section><aside class="panel"><div class="panel-head"><h2>\u89C6\u9891\u76EE\u5F55</h2><span class="muted xs">12 \u6BB5</span></div><div class="video-list">${ou.map((e,t)=>`<button class="video-item ${t===C.videoIndex?"active":""}" data-action="video-select" data-index="${t}" aria-pressed="${t===C.videoIndex}"><img src="${e.poster}" alt=""><span><strong>${e.name}</strong><small>${e.category} \xB7 ${e.duration.toFixed(1)} s</small></span>${yt("play")}</button>`).join("")}</div><div class="note">\u5206\u7C7B\u6309\u539F\u6587\u4EF6\u540D\u6574\u7406\uFF0C\u539F\u59CB\u6C42\u89E3\u548C\u5B9E\u9A8C\u53C2\u6570\u672A\u968F\u89C6\u9891\u63D0\u4F9B\u3002</div></aside></div>`}function My(){let i=C.scenario==="network";return`<div class="two-col"><section class="panel"><div class="panel-head"><h2>\u91C7\u96C6\u4E0E\u8BA1\u7B97\u94FE\u8DEF</h2>${xn(i?"\u8FDE\u63A5\u4E2D\u65AD":"\u8FDE\u63A5\u6B63\u5E38",i?"amber":"blue")}</div><div class="link-diagram"><div class="link-source"><strong>DH5908N \xD7 2</strong><span>16 \u901A\u9053 / \u03BC\u03B5</span></div><div class="link-direction">\u2193</div><div class="link-split"><div class="link-branch"><h3>${yt("cpu")}MindEdge</h3><div class="key-values"><div><span>\u6A21\u578B\u72B6\u6001</span><strong>${C.modelReady?"\u8FD0\u884C\u4E2D":"\u672A\u90E8\u7F72"}</strong></div><div><span>\u6D3B\u52A8\u7248\u672C</span><strong>${Qn(C.deployedVersion||"\u2014")}</strong></div></div></div><div class="link-branch"><h3>${yt("network")}\u5185\u7F51\u6570\u636E\u670D\u52A1</h3><div class="key-values"><div><span>\u8FDE\u63A5\u72B6\u6001</span><strong>${i?"\u4E2D\u65AD":"\u6B63\u5E38"}</strong></div><div><span>\u6570\u636E\u72B6\u6001</span><strong>${i?"\u8FC7\u671F":"\u6709\u6548"}</strong></div></div></div></div><div class="link-direction">\u2193</div><div class="pipeline" style="justify-content:center"><div class="pipeline-node"><b>\u7ED3\u6784\u76D1\u6D4B / \u7ED3\u6784\u8BC4\u4F30</b></div></div></div></section><section class="panel"><div class="panel-head"><h2>\u8282\u70B9\u72B6\u6001</h2></div><div class="panel-content"><div class="timeline"><div class="timeline-item"><span>\u91C7\u96C6\u5361 A / 8 \u901A\u9053</span>DH5908N \xB7 ${xn("\u5728\u7EBF")}</div><div class="timeline-item"><span>\u91C7\u96C6\u5361 B / 8 \u901A\u9053</span>DH5908N \xB7 ${xn(C.scenario==="sensor"?"\u79BB\u7EBF":"\u5728\u7EBF",C.scenario==="sensor"?"amber":"")}</div><div class="timeline-item"><span>MindEdge / Manage OS</span>${xn(C.modelReady?"\u8FD0\u884C\u4E2D":"\u672A\u90E8\u7F72",C.modelReady?"":"neutral")}</div><div class="timeline-item"><span>\u6570\u636E\u670D\u52A1</span>${xn(i?"\u4E2D\u65AD":"\u5728\u7EBF",i?"amber":"")}</div></div><div class="key-values"><div><span>\u6700\u8FD1\u66F4\u65B0</span><strong class="mono">${_s()}</strong></div><div><span>\u6570\u636E\u540C\u6B65</span><strong>${i?"\u7B49\u5F85\u8865\u4F20":"\u6B63\u5E38"}</strong></div></div><div class="foot-actions">${Mt("\u5237\u65B0\u72B6\u6001","refresh-status",{icon:"reset"})}</div></div></section></div>`}function Sy(){let i=Qe("#main");i.querySelectorAll(".panel-head p,.state-note,.assembly-legend,.asset-notice,.result-notice,.result-confidence,.detail-foot,.floating-note,.upload-zone p,.model-annotation,.model-tags,.notice:not(.validation-message)").forEach(e=>e.remove()),i.querySelectorAll(".note").forEach(e=>{let t=e.textContent.trim().match(/^共\s*\d+\s*条/);t?e.textContent=t[0]:e.remove()}),i.querySelectorAll(".empty-state p").forEach(e=>e.remove()),i.querySelectorAll(".panel-content").forEach(e=>{!e.textContent.trim()&&!e.querySelector("input,select,button,canvas")&&e.remove()})}function et(){rn?.dispose(),rn=null;let i=C.page==="history"?"overview":C.page;Qe("#nav").innerHTML=su.map(([t,n,s],r)=>`<a class="nav-item ${i===t?"active":""}" href="#${gs[t]}" aria-label="${s}" title="${s}" ${i===t?'aria-current="page"':""}>${yt(n)}<span>${s}</span><small class="nav-no">0${r+1}</small></a>`).join(""),Qe("#breadcrumb").textContent=su.find(t=>t[0]===i)?.[2]||"\u9996\u9875",document.body.dataset.page=C.page;let e={home:Xt.home,overview:Xt.monitor,history:my,alarms:Xt.alarms,models:Xt.assessment,params:Xt.params,connections:Xt.iot};Qe("#main").innerHTML=`<div class="page-enter">${e[C.page]()}</div>`,C.page==="history"&&Qe(".page-heading").insertAdjacentHTML("afterend",Mt("\u8FD4\u56DE\u7ED3\u6784\u76D1\u6D4B","customer-monitor-back",{compact:!0})),Sy(),hp(),Xt.updateClock()}function hp(){let i=Qe("#model-stage");if(i)try{rn=Jf(i,{points:wt,onSelect:up,selected:C.selected,resultMode:C.page==="models"&&Vt?.type!=="structure",machineView:C.structureView==="machine",onFocusStructure:()=>{C.structureView="structure",Vt?.type==="structure"?Ll():et()}})}catch(e){let t=document.createElement("div");t.className="empty-state",t.style.paddingTop="105px",t.innerHTML=`${yt("box")}<h3>\u4E09\u7EF4\u6E32\u67D3\u6682\u4E0D\u53EF\u7528</h3><p>\u53EF\u901A\u8FC7\u53F3\u4FA7 16 \u6D4B\u70B9\u7EE7\u7EED\u67E5\u770B\u8BFB\u6570\u4E0E\u6CE2\u5F62\u3002<br>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL \u7684\u684C\u9762\u6D4F\u89C8\u5668\u3002</p>`,i.append(t),console.warn("WebGL view unavailable",e.message)}}function sn(i){Object.hasOwn(gs,i)&&(C.page=i,window.history.pushState(null,"","#"+gs[i]),Dn(),et(),window.scrollTo({top:0,behavior:"instant"}))}window.addEventListener("hashchange",()=>{C.page=ip(),Dn(),et(),window.scrollTo({top:0,behavior:"instant"})});function up(i){if(wn(i)){if(C.selected=i,Vt?.type==="structure"){Xt.resetAnalysis(),Xt.refresh(),rn?.update(wt,i),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=Pl());return}if(C.page==="home"){C.structureView="structure",sn("overview");return}if(C.page==="overview"&&C.structureView==="machine"){C.structureView="structure",et();return}C.page==="overview"?(Xt.refresh(),rn?.update(wt,i),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=Pl())):et()}}var Vt=null,lu=null;function ei(i,e,t="",n=!1){lu=document.activeElement,Qe("#modal").innerHTML=`<section class="modal ${n?"wide":""}" role="dialog" aria-modal="true" aria-labelledby="dialog-title"><div class="modal-head"><h2 id="dialog-title">${i}</h2><button class="icon-btn" data-action="close-modal" aria-label="\u5173\u95ED\u5BF9\u8BDD\u6846">${yt("close")}</button></div><div class="modal-body">${e}</div>${t?`<div class="modal-foot">${t}</div>`:""}</section>`,Qe("#modal").hidden=!1,Qe("#modal").querySelector("input:not([readonly]),select,textarea,button")?.focus()}function Dn(){let i=!Qe("#modal").hidden;Vt?.type==="structure"&&(rn?.dispose(),rn=null),Qe("#modal").hidden=!0,Qe("#modal").innerHTML="",Vt=null,i&&lu?.isConnected&&lu.focus()}function Ll(){rn?.dispose(),rn=null,Vt={type:"structure"},ei("A \u578B\u67B6 \xB7 \u4E09\u7EF4\u6D4B\u70B9",uy()+lp()+cp()+`<div class="point-grid customer-modal-points" id="modal-point-grid">${Pl()}</div>`,`${Mt("\u8F7D\u5165 GLB","import-glb",{compact:!0})}${Mt("\u5173\u95ED","close-modal",{primary:!0})}`,!0),hp()}function by(){Vt={type:"design"},ei("\u7CFB\u7EDF\u4FE1\u606F",`<div class="key-values"><div><span>\u7CFB\u7EDF</span><strong>MindEdge \u7ED3\u6784\u76D1\u6D4B\u5E73\u53F0</strong></div><div><span>\u7248\u672C</span><strong>V2.2</strong></div><div><span>\u8FD0\u884C\u73AF\u5883</span><strong>\u524D\u7AEF\u5C55\u793A\u73AF\u5883</strong></div><div><span>\u76D1\u6D4B\u914D\u7F6E</span><strong>\u53CC\u91C7\u96C6\u5361 / 16 \u901A\u9053</strong></div><div><span>\u73B0\u573A\u8BBE\u5907</span><strong>\u672A\u63A5\u5165</strong></div><div><span>\u7B97\u6CD5\u670D\u52A1</span><strong>\u672A\u63A5\u5165</strong></div></div><p class="system-disclosure">\u5F53\u524D\u76D1\u6D4B\u503C\u7531\u6D4F\u89C8\u5668\u751F\u6210\uFF0C\u6A21\u578B\u90E8\u7F72\u4E0E\u63A8\u7406\u4E3A\u524D\u7AEF\u4EA4\u4E92\u6A21\u62DF\u3002\u4FE1\u53F7\u5904\u7406\u548C\u8D8B\u52BF\u66F2\u7EBF\u5728\u6D4F\u89C8\u5668\u5185\u6F14\u7B97\uFF0C\u4E0D\u4EE3\u8868\u5DF2\u90E8\u7F72\u8FB9\u7F18\u7B97\u6CD5\u3002\u4EFF\u771F\u56FE\u548C\u89C6\u9891\u4E3A\u5386\u53F2\u53C2\u8003\u8D44\u6599\uFF1B\u771F\u5B9E GLB\u3001\u70B9\u4F4D\u3001\u9608\u503C\u548C\u7B97\u6CD5\u9700\u63A5\u5165\u540E\u786E\u8BA4\u3002\u7ED3\u6784\u5C3A\u5BF8\u4E0E\u5065\u5EB7\u6307\u6570\u672A\u63D0\u4F9B\u7684\u9879\u76EE\u4FDD\u6301\u7A7A\u503C\u3002\u7528\u6237\u4FE1\u606F\u548C\u7EF4\u62A4\u8BB0\u5F55\u6CBF\u7528\u5BA2\u6237\u9875\u9762\u5C55\u793A\uFF0C\u7F16\u8F91\u3001\u5BFC\u5165\u53CA\u62A5\u544A\u4EC5\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u4F1A\u8BDD\u5185\u751F\u6548\uFF0C\u4E0D\u6D89\u53CA\u8D26\u53F7\u6743\u9650\u6216\u7EF4\u62A4\u4E1A\u52A1\u670D\u52A1\u3002</p><details class="system-diagnostics"><summary>\u8BCA\u65AD\u5DE5\u5177</summary><label class="form-field">\u6570\u636E\u573A\u666F<select class="select" id="scenario" aria-label="\u6570\u636E\u573A\u666F"><option value="typical" ${C.scenario==="typical"?"selected":""}>\u5178\u578B\u5DE5\u51B5</option><option value="normal" ${C.scenario==="normal"?"selected":""}>\u6B63\u5E38\u5DE5\u51B5</option><option value="sensor" ${C.scenario==="sensor"?"selected":""}>\u91C7\u96C6\u5361 B \u79BB\u7EBF</option><option value="network" ${C.scenario==="network"?"selected":""}>\u6570\u636E\u94FE\u8DEF\u4E2D\u65AD</option></select></label><div class="foot-actions">${Mt("\u4E2D\u65AD\u6570\u636E","simulate-network",{compact:!0})}${Mt("\u6062\u590D\u6570\u636E","restore-network",{compact:!0})}</div></details>`,Mt("\u5173\u95ED","close-modal",{primary:!0}))}function dp(){let i=wn(C.selected),e=Gi();Vt={type:"point",id:i.id},ei(`${i.id} \xB7 \u6D4B\u70B9\u8BE6\u60C5`,`<div class="key-values"><div><span>\u5B89\u88C5\u90E8\u4F4D</span><strong>${i.name}</strong></div><div><span>\u5361\u4E0E\u901A\u9053</span><strong>${i.card} / CH${String(i.channel).padStart(2,"0")}</strong></div><div><span>\u5F53\u524D\u503C</span><strong class="mono">${Nl(i)} \u03BC\u03B5</strong></div><div><span>\u6570\u636E\u8D28\u91CF</span><strong>${i.quality==="valid"?"\u6709\u6548":i.quality==="stale"?"\u8FC7\u671F / \u7F13\u5B58":"\u65E0\u6709\u6548\u6837\u672C"}</strong></div><div><span>\u9884\u8B66\u4E0A\u4E0B\u9650</span><strong>${e.lowWarning} / ${e.highWarning} \u03BC\u03B5</strong></div><div><span>\u62A5\u8B66\u4E0A\u4E0B\u9650</span><strong>${e.lowAlarm} / ${e.highAlarm} \u03BC\u03B5</strong></div><div><span>\u91C7\u6837\u9891\u7387\u3001\u6865\u8DEF\u4E0E\u91CF\u7A0B</span><strong>\u672A\u914D\u7F6E</strong></div><div><span>GLB \u4F4D\u7F6E</span><strong>\u672A\u7ED1\u5B9A</strong></div></div><div style="margin-top:17px">${i.quality==="valid"?py(i.id):'<p class="muted">\u5F53\u524D\u6CA1\u6709\u6709\u6548\u5B9E\u65F6\u6CE2\u5F62\u3002</p>'}</div><p>\u8BE5\u90E8\u4F4D\u540D\u79F0\u4E0E\u4E09\u7EF4\u4F4D\u7F6E\u4EC5\u8868\u8FBE\u7ED1\u5B9A\u4EA4\u4E92\uFF0C\u5B9E\u9645\u6D4B\u70B9\u4EE5\u7532\u65B9\u70B9\u8868\u548C\u7ED3\u6784\u56FE\u7EB8\u4E3A\u51C6\u3002</p>`,`${Mt("\u5386\u53F2\u66F2\u7EBF","point-history",{icon:"trend"})}${Mt("\u914D\u7F6E\u9608\u503C","point-rule",{primary:!0,icon:"sliders"})}`)}function fp(i){let e=C.alarms.find(t=>t.id===i);e&&(Vt={type:"alarm",id:i},ei("\u8D8A\u9650\u4E8B\u4EF6 "+e.id,`<div class="detail-title"><h3>${e.pointId} \xB7 ${e.name}</h3>${xn(hu[e.level],e.level==="alarm"?"red":"amber")}</div><div class="key-values" style="margin:19px 0"><div><span>\u89E6\u53D1\u503C</span><strong class="mono">${e.value.toFixed(1)} \u03BC\u03B5</strong></div><div><span>\u89E6\u53D1\u9608\u503C / \u7248\u672C</span><strong>${e.threshold} \u03BC\u03B5 / v${e.ruleVersion}</strong></div><div><span>\u89E6\u53D1\u65F6\u95F4</span><strong>${_s(e.time)}</strong></div><div><span>\u6062\u590D\u65F6\u95F4</span><strong>${e.recovered?_s(e.recoverTime):"\u6D3B\u52A8\u8D8A\u9650"}</strong></div><div><span>\u786E\u8BA4\u72B6\u6001</span><strong>${e.acknowledged?"\u5DF2\u786E\u8BA4":"\u5F85\u786E\u8BA4"}</strong></div><div><span>\u6570\u636E\u6765\u6E90</span><strong>\u9608\u503C\u76D1\u6D4B</strong></div></div><label class="form-field">\u786E\u8BA4\u5907\u6CE8<textarea class="input" id="alarm-remark" rows="3" placeholder="\u8BB0\u5F55\u6392\u67E5\u610F\u89C1\u6216\u5904\u7F6E\u8BF4\u660E" ${e.acknowledged?"readonly":""}>${Qn(e.remark)}</textarea></label><p style="margin-top:10px">\u4E8B\u4EF6\u786E\u8BA4\u540E\u4ECD\u4FDD\u7559\u7269\u7406\u8D8A\u9650\u72B6\u6001\uFF0C\u6062\u590D\u65F6\u95F4\u6309\u6D4B\u70B9\u5B9E\u9645\u56DE\u843D\u5230\u6709\u6548\u533A\u95F4\u8BB0\u5F55\u3002</p>`,`${Mt("\u4E09\u7EF4\u5B9A\u4F4D","modal-alarm-locate",{icon:"focus"})}${Mt(e.acknowledged?"\u5DF2\u786E\u8BA4":"\u786E\u8BA4\u5E76\u7559\u5B58\u5907\u6CE8","confirm-alarm",{primary:!0,disabled:e.acknowledged,icon:"check"})}`))}function tp(i){let e=Gi(i),t=wn(i);Vt={type:"rule",id:i},ei(`${i} \xB7 \u9608\u503C\u89C4\u5219`,`<div class="notice warning">${yt("alert")}<span>${t.name} \xB7 \u4EE5\u4E0B\u503C\u4EC5\u4F9B\u4EA4\u4E92\u6F14\u793A\uFF0C\u751F\u4EA7\u9608\u503C\u7531\u7532\u65B9\u786E\u8BA4\u3002</span></div><form id="rule-form"><div class="form-grid">${[["lowAlarm","\u62A5\u8B66\u4E0B\u9650"],["lowWarning","\u9884\u8B66\u4E0B\u9650"],["highWarning","\u9884\u8B66\u4E0A\u9650"],["highAlarm","\u62A5\u8B66\u4E0A\u9650"]].map(([n,s])=>`<label class="form-field">${s} / \u03BC\u03B5<input type="number" class="input" id="rule-${n}" name="${n}" value="${e[n]}" required step="0.1"></label>`).join("")}</div><p style="margin-top:15px">\u6570\u503C\u987B\u6EE1\u8DB3 \u62A5\u8B66\u4E0B\u9650 &lt; \u9884\u8B66\u4E0B\u9650 &lt; \u9884\u8B66\u4E0A\u9650 &lt; \u62A5\u8B66\u4E0A\u9650\u3002\u89C4\u5219\u7248\u672C\u5C06\u5728\u4FDD\u5B58\u540E\u66F4\u65B0\u3002</p><p class="text-red" id="rule-error" role="alert" style="margin-top:10px"></p><button type="submit" hidden>\u4FDD\u5B58</button></form>`,`${Mt("\u53D6\u6D88","close-modal")}${Mt("\u4FDD\u5B58\u89C4\u5219","save-rule",{primary:!0})}`)}function Ty(){Vt={type:"contract"};let i={schemaVersion:"prototype-0.1",input:{timestamp:"ISO-8601",pointIds:wt.map(e=>e.id),strain:"float[16]\uFF0C\u5355\u4F4D\u03BC\u03B5\uFF0C\u987A\u5E8F\u6309\u6620\u5C04\u8868",quality:"valid[16]\uFF0C\u8FC7\u671F\u6216\u7F3A\u5931\u65F6\u8FD4\u56DE\u65E0\u6548"},output:{modelVersion:"\u7531\u6821\u65B9\u63D0\u4F9B",inputBatchId:"\u8F93\u5165\u6279\u6B21",condition:"\u5DE5\u51B5\u6807\u8BC6",stress_mpa:"\u793A\u4F8B\u8F93\u51FA\u5B57\u6BB5\uFF0C\u9700\u786E\u8BA4",displacement_mm:"\u793A\u4F8B\u8F93\u51FA\u5B57\u6BB5\uFF0C\u9700\u786E\u8BA4",meshRef:"\u524D\u7AEF\u53EF\u52A0\u8F7D\u7684\u7ED3\u679C\u7F51\u683C / \u8D44\u6E90\u5F15\u7528",validity:"\u6709\u6548\u57DF\u4E0E\u5F02\u5E38\u4FE1\u606F"}};ei("\u6A21\u578B\u63A5\u53E3\u914D\u7F6E",`<p>\u4EE5\u4E0B\u7ED3\u6784\u7528\u4E8E\u53CC\u65B9\u8BA8\u8BBA\u5B57\u6BB5\u4E0E\u6620\u5C04\u3002\u6A21\u578B\u6267\u884C\u65B9\u5F0F\u3001\u8F93\u51FA\u91CF\u7EB2\u548C\u6709\u6548\u57DF\u987B\u7531\u63D0\u4F9B\u65B9\u786E\u8BA4\u3002</p><pre class="terminal" style="max-height:420px;margin-top:15px;white-space:pre-wrap">${Qn(JSON.stringify(i,null,2))}</pre>`,`${Mt("\u5BFC\u51FA\u63A5\u53E3\u914D\u7F6E","export-contract",{icon:"download"})}${Mt("\u5173\u95ED","close-modal")}`,!0)}function Ey(){Vt={type:"platform"},ei("\u592A\u91CD\u5E73\u53F0\u8DF3\u8F6C\u914D\u7F6E",`<p>\u914D\u7F6E\u9879\u76EE\u5173\u8054\u5E73\u53F0\u7684\u5B9E\u9645\u5185\u7F51 URL\uFF0C\u4F7F\u7528\u65B0\u7684\u6D4F\u89C8\u5668\u6807\u7B7E\u9875\u6253\u5F00\u3002\u5730\u5740\u7531\u7532\u65B9\u63D0\u4F9B\uFF0C\u5F53\u524D\u4F1A\u8BDD\u4E2D\u4FDD\u5B58\u3002</p><label class="form-field" style="margin-top:17px">\u5E73\u53F0\u5730\u5740<input class="input" id="external-url" type="url" placeholder="https://\u5B9E\u9645\u5185\u7F51\u5E73\u53F0\u5730\u5740/" value="${Qn(C.externalUrl)}"></label><p id="external-error" role="alert" style="margin-top:9px;color:var(--red)"></p>`,`${Mt("\u53D6\u6D88","close-modal")}${Mt("\u4FDD\u5B58\u5E76\u6253\u5F00","save-platform",{primary:!0,icon:"external"})}`)}function lr(i,e,t="text/plain;charset=utf-8"){let n=new Blob([e],{type:t}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=i,document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3),St("\u5DF2\u5BFC\u51FA "+i)}function Dl(i){return"\uFEFF"+i.map(e=>e.map(t=>'"'+String(t??"").replace(/"/g,'""')+'"').join(",")).join(`\r
`)}function pp(){let i=new Date(C.historyFrom+"+08:00"),e=new Date(C.historyTo+"+08:00"),t=parseInt(C.historyGranularity,10),n=Math.floor((e-i)/1e3/t)+1,s=C.historyPoints.map(a=>Ol(a)),r=[["\u65F6\u95F4\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09","\u6D4B\u70B9","\u5E94\u53D8\u503C\u03BC\u03B5\uFF08\u6F14\u793A\uFF09","\u6570\u636E\u6765\u6E90"]];for(let a=0;a<n;a++){let o=new Date(i.getTime()+a*t*1e3).toLocaleString("sv-SE",{timeZone:"Asia/Shanghai"});C.historyPoints.forEach((l,c)=>r.push([o,l,s[c][a].toFixed(2),"\u6D4F\u89C8\u5668\u6F14\u793A\u6570\u636E"]))}lr("MindEdge-\u5386\u53F2\u5E94\u53D8.csv",Dl(r),"text/csv;charset=utf-8")}function xa(i,e="info"){C.modelLogs.push({time:_s(),text:i,type:e})}function mp(){if(!C.modelReady){St("\u8BF7\u5148\u90E8\u7F72\u6A21\u578B");return}if(!wt.every(i=>i.quality==="valid")){St("\u8F93\u5165\u6570\u636E\u5F02\u5E38\uFF0C\u8BA1\u7B97\u5DF2\u6682\u505C");return}C.modelResult={time:new Date(C.time),batch:"BATCH-"+String(++C.modelRunCount).padStart(6,"0"),version:C.deployedVersion},xa("\u7ED3\u679C\u6279\u6B21\uFF1A"+C.modelResult.batch,"ok"),C.modelTab="results",C.resultMode="proxy",et(),St("\u8BA1\u7B97\u7ED3\u679C\u5DF2\u751F\u6210\uFF0C\u53EF\u67E5\u770B\u7248\u672C\u548C\u8F93\u5165\u6279\u6B21")}function gp(){let i=Vt;if(i?.type!=="rule")return;let e=Gi(i.id),t=["lowAlarm","lowWarning","highWarning","highAlarm"],n=t.map(r=>Qe("#rule-"+r).value.trim()),s=n.map(Number);if(n.some(r=>!r)||s.some(r=>!Number.isFinite(r))||!s.every((r,a)=>a===0||s[a-1]<r)){Qe("#rule-error").textContent="\u8BF7\u586B\u5199\u56DB\u4E2A\u6709\u6548\u6570\u503C\uFF0C\u5E76\u6309\u62A5\u8B66\u4E0B\u9650\u3001\u9884\u8B66\u4E0B\u9650\u3001\u9884\u8B66\u4E0A\u9650\u3001\u62A5\u8B66\u4E0A\u9650\u9012\u589E\u3002";return}t.forEach((r,a)=>e[r]=s[a]),e.version++,Dn(),Ti(),et(),St(i.id+" \u89C4\u5219\u5DF2\u66F4\u65B0\u4E3A v"+e.version)}var _p={"refresh-status":()=>{Ti(),et(),St("\u72B6\u6001\u5DF2\u5237\u65B0")},"monitor-tab":i=>sn(i.dataset.value),"param-tab":i=>{C.paramTab=i.dataset.value,et()},"focus-structure":()=>{C.structureView="structure",sn("overview")},"home-fea":()=>{C.modelTab="results",C.resultMode="offline",sn("models")},"home-zoom-in":()=>{C.homeZoom=Math.min(1.4,C.homeZoom+.1),Qe(".assembly-image-wrap").style.transform="scale("+C.homeZoom+")"},"home-zoom-out":()=>{C.homeZoom=Math.max(.7,C.homeZoom-.1),Qe(".assembly-image-wrap").style.transform="scale("+C.homeZoom+")"},"home-zoom-reset":()=>{C.homeZoom=1,Qe(".assembly-image-wrap").style.transform="scale(1)"},design:by,reference:dy,"fea-original":xy,"fea-select":i=>{C.feaIndex=Number(i.dataset.index),et()},"goto-videos":()=>{C.modelTab="videos",Xt.setView("videos"),C.page==="models"?et():sn("models")},"video-select":i=>{C.videoIndex=Number(i.dataset.index),et()},"download-video":()=>{let i=ou[C.videoIndex],e=document.createElement("a");e.href=i.url,e.download=i.name+".mp4",e.click()},"scene-view":i=>{C.structureView=i.dataset.value,Vt?.type==="structure"?Ll():et()},"close-modal":Dn,"point-detail":dp,"contract-example":Ty,pause:()=>{C.paused=!C.paused,et(),St(C.paused?"\u5237\u65B0\u5DF2\u6682\u505C":"\u5237\u65B0\u5DF2\u6062\u590D")},"reset-model":()=>rn?.reset(),"front-model":()=>rn?.viewFront(),"wire-model":()=>rn?.wireframe(),"import-glb":()=>{Vt?.type!=="structure"&&(C.structureView="structure",Ll()),Qe("#glb-file").click()},snapshot:()=>lr("MindEdge-\u76D1\u6D4B\u5FEB\u7167.json",JSON.stringify({type:"\u4EA4\u4E92\u539F\u578B\u6A21\u62DF\u6570\u636E",time:C.time,scenario:C.scenario,points:wt,thresholdRules:cu,model:{ready:C.modelReady,version:C.deployedVersion,result:C.modelResult}},null,2),"application/json"),"point-history":()=>{C.historyPoints=[C.selected],C.historyQueried=!0,Dn(),sn("history")},"point-rule":()=>{let i=C.selected;Dn(),C.paramTab="thresholds",sn("params"),tp(i)},"toggle-history-point":i=>{let e=i.dataset.pointId,t=C.historyPoints.indexOf(e);if(t>=0)C.historyPoints.splice(t,1);else if(C.historyPoints.length<4)C.historyPoints.push(e);else{St("\u6700\u591A\u9009\u62E9 4 \u4E2A\u6D4B\u70B9\u8FDB\u884C\u540C\u5C4F\u6BD4\u8F83");return}C.historyQueried=!1,et()},"query-history":()=>{let i=Qe("#history-from").value,e=Qe("#history-to").value;if(!i||!e||i>=e){St("\u8BF7\u9009\u62E9\u6709\u6548\u65F6\u6BB5\uFF0C\u7ED3\u675F\u65F6\u95F4\u9700\u665A\u4E8E\u5F00\u59CB\u65F6\u95F4");return}if(!C.historyPoints.length){St("\u8BF7\u81F3\u5C11\u9009\u62E9 1 \u4E2A\u6D4B\u70B9");return}if(((new Date(e)-new Date(i))/1e3/parseInt(C.historyGranularity,10)+1)*C.historyPoints.length>1e4){St("\u5355\u6B21\u5BFC\u51FA\u6700\u591A 10,000 \u884C\uFF0C\u8BF7\u7F29\u5C0F\u65F6\u6BB5\u6216\u589E\u5927\u805A\u5408\u95F4\u9694");return}C.historyFrom=i,C.historyTo=e,C.historyQueried=!0,et(),St("\u67E5\u8BE2\u5B8C\u6210")},"export-history":()=>{if(!C.historyQueried){St("\u8BF7\u5148\u6309\u5F53\u524D\u6761\u4EF6\u67E5\u8BE2");return}pp()},"alarm-tab":i=>{C.alarmTab=i.dataset.value,et()},"filter-alarm":i=>{C.alarmFilter=i.dataset.value,et()},"alarm-detail":i=>fp(i.dataset.id),"locate-alarm":i=>{let e=C.alarms.find(t=>t.id===i.dataset.id);e&&(C.selected=e.pointId,C.structureView="structure",sn("overview"),St("\u5DF2\u5B9A\u4F4D "+e.pointId+" \xB7 "+e.name))},"history-locate":i=>{C.selected=i.dataset.pointId,C.structureView="structure",sn("overview")},"modal-alarm-locate":()=>{let i=C.alarms.find(e=>e.id===Vt?.id);i&&(C.selected=i.pointId,C.structureView="structure",Dn(),sn("overview"))},"confirm-alarm":()=>{let i=C.alarms.find(e=>e.id===Vt?.id);!i||i.acknowledged||(i.acknowledged=!0,i.remark=Qe("#alarm-remark").value.trim(),Dn(),et(),St("\u4E8B\u4EF6\u5DF2\u786E\u8BA4"))},"edit-rule":i=>tp(i.dataset.pointId),"save-rule":gp,"toggle-rule":i=>{let e=Gi(i.dataset.pointId);e.enabled=!e.enabled,e.version++,Ti(),et(),St(e.pointId+" \u89C4\u5219\u5DF2"+(e.enabled?"\u542F\u7528":"\u505C\u7528"))},"export-alarms":()=>lr("MindEdge-\u544A\u8B66\u4E8B\u4EF6.csv",Dl([["\u4E8B\u4EF6","\u6D4B\u70B9","\u5B89\u88C5\u90E8\u4F4D","\u7B49\u7EA7","\u89E6\u53D1\u503C\u03BC\u03B5","\u9608\u503C\u03BC\u03B5","\u89E6\u53D1\u65F6\u95F4","\u6062\u590D\u72B6\u6001","\u786E\u8BA4\u72B6\u6001","\u5907\u6CE8"],...ap().map(i=>[i.id,i.pointId,i.name,hu[i.level],i.value,i.threshold,i.time.toISOString(),i.recovered?"\u5DF2\u6062\u590D":"\u6D3B\u52A8\u8D8A\u9650",i.acknowledged?"\u5DF2\u786E\u8BA4":"\u5F85\u786E\u8BA4",i.remark])]),"text/csv;charset=utf-8"),"model-tab":i=>{C.modelTab=i.dataset.value,et()},"result-mode":i=>{C.resultMode=i.dataset.value,et()},"goto-deployment":()=>{C.modelTab="deployment",Xt.setView("model"),C.page==="models"?et():sn("models")},"goto-connections":()=>sn("connections"),"load-sample-model":()=>{C.modelFile="a-frame-surrogate.onnx",C.modelVersion=C.modelVersion||"1.0.0",C.modelStatus="loaded",C.modelStep=1,C.validation=null,xa("\u6A21\u578B\u914D\u7F6E\u5DF2\u8F7D\u5165\uFF0C\u8F93\u5165\u901A\u9053\u6570\uFF1A16\u3002"),et(),St("\u6A21\u578B\u914D\u7F6E\u5DF2\u8F7D\u5165")},"validate-model":()=>{let i=Qe("#model-version").value.trim();C.modelVersion=i;let e=new Set(C.inputMap).size===16&&C.inputMap.every(r=>wn(r)),t=C.inputMap.every(r=>wn(r).quality==="valid"),n=/^[A-Za-z0-9][A-Za-z0-9._-]{1,50}$/.test(i),s=[];n||s.push("\u8BF7\u586B\u5199\u6709\u6548\u7248\u672C\u53F7\uFF0C\u5982 1.0.0"),e||s.push("16\u8DEF\u6620\u5C04\u9700\u5B8C\u6574\u4E14\u552F\u4E00\uFF0C\u68C0\u6D4B\u5230\u91CD\u590D\u6216\u7F3A\u9879"),t||s.push("\u8F93\u5165\u5305\u542B\u7F3A\u5931\u6216\u8FC7\u671F\u6570\u636E\uFF0C\u8BF7\u5148\u6062\u590D\u94FE\u8DEF"),C.validation={ok:!s.length,message:s.length?s.join("\u3002"):"\u8F93\u5165\u914D\u7F6E\u6821\u9A8C\u901A\u8FC7\uFF1A16\u8DEF\u6620\u5C04\u5B8C\u6574\u4E14\u552F\u4E00\uFF0C\u6570\u636E\u6709\u6548\u3002"},C.modelStep=s.length?1:2,C.modelStatus=s.length?"loaded":"validated",xa(C.validation.message,s.length?"error":"ok"),et()},"deploy-model":()=>{if(!C.validation?.ok){St("\u8BF7\u5148\u5B8C\u6210\u6821\u9A8C\u914D\u7F6E");return}if(!wt.every(i=>i.quality==="valid")){C.validation=null,et(),St("\u8F93\u5165\u8D28\u91CF\u5DF2\u53D8\u5316\uFF0C\u8BF7\u6062\u590D\u6570\u636E\u540E\u91CD\u65B0\u6821\u9A8C");return}C.previousVersion=C.modelReady?C.deployedVersion:null,C.deployedVersion=C.modelVersion,C.modelReady=!0,C.modelStatus="running",C.modelStep=3,C.modelResult=null,xa("\u6D3B\u52A8\u7248\u672C\u5DF2\u5207\u6362\u81F3 "+C.modelVersion,"ok"),et(),St("\u6A21\u578B\u7248\u672C\u5DF2\u66F4\u65B0")},"run-model":()=>{C.modelReady&&wt.every(i=>i.quality==="valid")&&Xt.setView("model-results"),mp()},"rollback-model":()=>{if(!C.previousVersion)return;let i=C.deployedVersion;C.modelVersion=C.previousVersion,C.deployedVersion=C.previousVersion,C.previousVersion=i,C.modelResult=null,xa("\u7248\u672C\u5DF2\u56DE\u6EDA\u81F3 "+C.modelVersion,"ok"),et(),St("\u6A21\u578B\u7248\u672C\u5DF2\u56DE\u6EDA")},"conn-tab":i=>{C.connTab=i.dataset.value,et()},"simulate-network":()=>{C.scenario="network",Ti(),et(),St("\u5DF2\u6A21\u62DF\u540E\u7AEF\u94FE\u8DEF\u4E2D\u65AD\uFF0C\u5B9E\u65F6\u503C\u4E0E\u6A21\u578B\u7ED3\u679C\u6682\u505C")},"restore-network":()=>{C.scenario="typical",Ti(),et(),St("\u94FE\u8DEF\u72B6\u6001\u5DF2\u6062\u590D\uFF0C\u771F\u5B9E\u8865\u4F20\u673A\u5236\u9700\u540E\u7AEF\u9A8C\u8BC1")},"external-platform":Ey,"save-platform":()=>{let i=Qe("#external-url").value.trim(),e;try{if(e=new URL(i),!["http:","https:"].includes(e.protocol)||e.username||e.password)throw new Error}catch{Qe("#external-error").textContent="\u8BF7\u586B\u5199\u6709\u6548\u7684 http \u6216 https \u5E73\u53F0\u5730\u5740\uFF0C\u5730\u5740\u4E2D\u52FF\u5305\u542B\u767B\u5F55\u51ED\u636E\u3002";return}C.externalUrl=e.href,window.open(C.externalUrl,"_blank","noopener,noreferrer"),Dn(),St("\u5DF2\u6253\u5F00\u914D\u7F6E\u7684\u5E73\u53F0\u5730\u5740")},"export-points":()=>lr("MindEdge-16\u6D4B\u70B9\u6620\u5C04-\u5F85\u786E\u8BA4.csv",Dl([["\u6D4B\u70B9","\u91C7\u96C6\u5361","\u901A\u9053","\u5B89\u88C5\u90E8\u4F4D","\u5B9E\u9645\u4F4D\u7F6E","\u91C7\u6837\u9891\u7387","\u6865\u8DEF\u4E0E\u91CF\u7A0B","GLB\u951A\u70B9","\u5907\u6CE8"],...wt.map(i=>[i.id,i.card,i.channel,i.name,"\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u672A\u914D\u7F6E","\u5F53\u524D\u4E3A\u539F\u578B\u5360\u4F4D"])]),"text/csv;charset=utf-8"),"export-contract":()=>lr("MindEdge-\u6A21\u578B\u63A5\u53E3.json",JSON.stringify({type:"\u8BA8\u8BBA\u6837\u4F8B\uFF0C\u5F85\u6821\u65B9\u786E\u8BA4",input:{timestamp:"ISO-8601",pointIds:wt.map(i=>i.id),strain:"float[16]\uFF0C\u03BC\u03B5",quality:"string[16]"},output:{modelVersion:"string",inputBatchId:"string",condition:"string",stress_mpa:"number\uFF0C\u9700\u786E\u8BA4",displacement_mm:"number\uFF0C\u9700\u786E\u8BA4",meshRef:"\u8D44\u6E90\u5F15\u7528\uFF0C\u9700\u786E\u8BA4",validity:"\u6A21\u578B\u6709\u6548\u57DF\uFF0C\u9700\u786E\u8BA4"}},null,2),"application/json")};document.addEventListener("click",i=>{let e=i.target.closest("#nav a");if(e){i.preventDefault();let r=su.find(a=>e.getAttribute("href")==="#"+gs[a[0]])?.[0];r==="models"&&Xt.setView("business"),r&&sn(r);return}let t=i.target.closest("[data-point]");if(t){up(t.dataset.point);return}let n=i.target.closest("[data-route]");if(n){sn(n.dataset.route);return}let s=i.target.closest("[data-action]");s&&!s.disabled&&_p[s.dataset.action]?.(s),i.target===Qe("#modal")&&Dn()});document.addEventListener("submit",i=>{i.target.id==="rule-form"&&(i.preventDefault(),gp())});document.addEventListener("keydown",i=>{if(!Qe("#modal").hidden){if(i.key==="Escape"){Dn();return}if(i.key==="Tab"){let e=[...Qe("#modal").querySelectorAll("button:not([disabled]),input,select,textarea")].filter(t=>t.offsetParent!==null);if(!e.length)return;i.shiftKey&&document.activeElement===e[0]?(i.preventDefault(),e.at(-1).focus()):!i.shiftKey&&document.activeElement===e.at(-1)&&(i.preventDefault(),e[0].focus())}}});function vp(){C.validation=null,C.modelStep>1&&(C.modelStep=1)}document.addEventListener("change",async i=>{let e=i.target;if(!await Xt.change(e)){if(e.id==="scenario"){C.scenario=e.value,Ti(),et();return}if(e.id==="history-from"){C.historyFrom=e.value,C.historyQueried=!1,et();return}if(e.id==="history-to"){C.historyTo=e.value,C.historyQueried=!1,et();return}if(e.id==="history-granularity"){C.historyGranularity=e.value,C.historyQueried=!1,et();return}if(e.id==="alarm-period"){C.alarmPeriod=e.value,et();return}if(e.id==="result-condition"){C.resultCondition=e.value,et();return}if(e.id==="result-point"){C.selected=e.value,et();return}if(e.classList.contains("model-mapping")){C.inputMap[Number(e.dataset.index)]=e.value,vp(),et();return}if(e.id==="glb-file"&&e.files?.[0]){let t=e.files[0];if(!t.name.toLowerCase().endsWith(".glb")||t.size>50*1024*1024){St("\u8BF7\u9009\u62E9 50 MB \u4EE5\u5185\u7684\u5355\u6587\u4EF6 GLB \u6A21\u578B"),e.value="";return}try{let n=await t.arrayBuffer();if(new DataView(n).getUint32(0,!0)!==1179937895)throw new Error("\u6587\u4EF6\u5934\u65E0\u6548");if(!rn)throw new Error("\u4E09\u7EF4\u89C6\u56FE\u5C1A\u672A\u5C31\u7EEA\uFF0C\u8BF7\u56DE\u603B\u89C8\u91CD\u8BD5");await rn.loadGLB(n),C.uploadedGLB=!0,Qe("#model-caption").textContent="\u672C\u5730\u9884\u89C8 \xB7 "+t.name,St("\u7ED3\u6784\u6A21\u578B\u5DF2\u8F7D\u5165")}catch{St("GLB\u8F7D\u5165\u5931\u8D25\uFF0C\u8BF7\u4F7F\u7528\u5B8C\u6574\u4E14\u683C\u5F0F\u6709\u6548\u7684\u5355\u6587\u4EF6\u6A21\u578B")}e.value=""}}});document.addEventListener("input",i=>{let e=i.target,t={"alarm-search":"alarmSearch","rule-search":"ruleSearch","point-search":"pointSearch"};if(t[e.id]){let n=e.id,s=e.selectionStart;C[t[n]]=e.value,et();let r=Qe("#"+n);r?.focus(),r?.setSelectionRange(s,s)}if(e.id==="model-version"){C.modelVersion=e.value,vp();let n=document.querySelector('[data-action="deploy-model"]');n&&(n.disabled=!0)}});function wy(){Xt.updateClock(),!C.paused&&(C.tick++,C.time=new Date(C.time.getTime()+2e3),Ti(),Xt.refresh(),rn?.update(wt,C.selected,!1),Qe("#modal-point-grid")&&(Qe("#modal-point-grid").innerHTML=Pl()))}var np;window.addEventListener("resize",()=>{clearTimeout(np),np=setTimeout(()=>{C.page==="overview"&&Qe("#overview-chart")&&(Qe("#overview-chart").innerHTML=fy()),C.page==="history"&&C.historyQueried&&Qe(".full-chart")&&(Qe(".full-chart").innerHTML=uu(C.historyPoints,{large:!0,history:!0}))},120)});var Xt=jf({S:C,points:wt,rules:cu,icon:yt,button:Mt,tag:xn,escape:Qn,pointById:wn,currentRule:Gi,valueText:Nl,statusName:hu,fmtTime:_s,signalSeries:Ul,historySeries:Ol,heading:op,pointOptions:rp,visibleAlarms:ap,finiteElementView:vy,videoLibrary:yy,deploymentView:_y,resultsView:gy,topology:My,pointModal:dp,alarmModal:fp,openModal:ei,closeModal:Dn,toast:St,render:et,navigate:sn,runModel:mp,exportHistory:pp,download:lr,csv:Dl,updatePoints:Ti,showScene:Ll});Object.assign(_p,Xt.actions,{"customer-monitor-back":()=>sn("overview")});function Ay(){let i={"book-open":"book","arrow-up-right":"external","circle-help":"help"};document.querySelectorAll("[data-lucide]").forEach(e=>{e.outerHTML=yt(i[e.dataset.lucide])})}Ay();Ti();et();sp=setInterval(wy,2e3);document.addEventListener("error",i=>{i.target.id==="reference-video"&&Qe("#video-status")&&(Qe("#video-status").textContent="\u89C6\u9891\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")},!0);window.addEventListener("pagehide",()=>{clearInterval(sp),rn?.dispose()});})();
