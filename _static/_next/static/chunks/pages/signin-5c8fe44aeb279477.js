(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{6495:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return t(9120)}])},9642:function(n,e,t){"use strict";t.d(e,{J:function(){return l},a:function(){return d}});var r=t(5666),u=t.n(r),a=t(7294),i=t(1163),c=t(4866),o=(t(8522),t(3916)),s=t(1866);function f(n,e,t,r,u,a,i){try{var c=n[a](i),o=c.value}catch(s){return void t(s)}c.done?e(o):Promise.resolve(o).then(r,u)}function p(n){return function(){var e=this,t=arguments;return new Promise((function(r,u){var a=n.apply(e,t);function i(n){f(a,r,u,i,c,"next",n)}function c(n){f(a,r,u,i,c,"throw",n)}i(void 0)}))}}(0,o.Z)();var l=p(u().mark((function n(e){var t,r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.uid,r=e.email,n.next=3,e.getIdToken(!0);case 3:return a=n.sent,n.abrupt("return",{id:t,email:r,token:a});case 5:case"end":return n.stop()}}),n)}))),d=function(){var n=(0,a.useState)(),e=n[0],t=n[1],r=(0,i.useRouter)(),o=p(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c.Z.auth().signOut().then((function(){r.push("/")})).catch((function(n){console.error(n)})));case 1:case"end":return n.stop()}}),n)})));return(0,a.useEffect)((function(){var n=c.Z.auth().onIdTokenChanged(p(u().mark((function n(e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=8;break}return n.next=3,l(e);case 3:r=n.sent,(0,s.rk)(r),t(r),n.next=9;break;case 8:(0,s.gq)(),t();case 9:case"end":return n.stop()}}),n)})))),e=(0,s.Zl)();if(e)return t(e),function(){return n}}),[]),{user:e,logout:o}}},1866:function(n,e,t){"use strict";t.d(e,{Zl:function(){return a},rk:function(){return i},gq:function(){return c}});var r=t(6808),u=t.n(r),a=function(){var n=u().get("auth");if(n)return JSON.parse(n)},i=function(n){u().set("auth",n,{expires:1/24})},c=function(){return u().remove("auth")}},3916:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(4866),u=(t(8522),t(6282),{apiKey:"AIzaSyC8ZPrPO2Lzp-opxlNlNyCDF9-SuCfKgJk",authDomain:"flutter-update-a9957.firebaseapp.com",projectId:"flutter-update-a9957",storageBucket:"flutter-update-a9957.appspot.com",messagingSenderId:"295969915912",appId:"1:295969915912:web:3e1da3776e66089d8c7dbd"});function a(){r.Z.apps.length||r.Z.initializeApp(u)}},9120:function(n,e,t){"use strict";t.r(e);var r=t(5666),u=t.n(r),a=t(5893),i=t(5913),c=t.n(i),o=t(4866),s=(t(8522),t(3916)),f=t(1866),p=t(9642);function l(n,e,t,r,u,a,i){try{var c=n[a](i),o=c.value}catch(s){return void t(s)}c.done?e(o):Promise.resolve(o).then(r,u)}(0,s.Z)();var d=function(n){var e,t=n.signInSuccessUrl;return{signInFlow:"popup",signInOptions:[{provider:o.Z.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!1},o.Z.auth.GoogleAuthProvider.PROVIDER_ID],signInSuccessUrl:t,credentialHelper:"none",callbacks:{signInSuccessWithAuthResult:(e=u().mark((function n(e,t){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.user,n.next=3,(0,p.J)(r);case 3:a=n.sent,(0,f.rk)(a);case 5:case"end":return n.stop()}}),n)})),function(){var n=this,t=arguments;return new Promise((function(r,u){var a=e.apply(n,t);function i(n){l(a,r,u,i,c,"next",n)}function c(n){l(a,r,u,i,c,"throw",n)}i(void 0)}))})}}};e.default=function(){var n="/private";return(0,a.jsxs)("div",{className:"bg-black h-screen w-screen",children:[(0,a.jsx)("div",{className:" text-3xl font-bold underline ",children:"mama"}),(0,a.jsx)(c(),{uiConfig:d({signInSuccessUrl:n}),firebaseAuth:o.Z.auth(),signInSuccessUrl:n})]})}}},function(n){n.O(0,[16,597,717,511,208,774,888,179],(function(){return e=6495,n(n.s=e);var e}));var e=n.O();_N_E=e}]);