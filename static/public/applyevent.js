!function(e){var t={};function l(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(n,s,function(t){return e[t]}.bind(null,s));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=2)}({2:function(e,t){const l=document.getElementById("name"),n=document.getElementById("major"),s=document.getElementById("grade"),o=document.getElementById("phone"),a=document.getElementById("email"),y=document.getElementById("personal");let c=document.querySelector(".questionbox").clientWidth;const i=document.querySelector(".prevbtn"),u=document.querySelector(".nextbtn"),r=document.querySelectorAll(".post"),m=r.length;let d=1;u.addEventListener("click",()=>{if(""==l.value||""==n.value||""==s.value||""==o.value||""==a.value);else if(0==y.checked);else if(d++,d<=m){const e=c*(d-1);r.forEach(t=>{t.setAttribute("style",`left: ${-e}px`)})}else d--}),i.addEventListener("click",()=>{if(d--,d>0){const e=c*(d-1);r.forEach(t=>{t.setAttribute("style",`left: ${-e}px`)})}else d++}),document.querySelector(".prevbtn").addEventListener("click",function(){const e=document.getElementsByClassName("prevbtn"),t=document.getElementsByClassName("nextbtn"),l=document.getElementsByClassName("savebtn"),n=document.getElementsByClassName("submitbtn"),s=document.getElementsByClassName("two"),o=document.getElementsByClassName("three"),a=document.getElementsByClassName("four"),y=document.getElementsByClassName("box2"),c=document.getElementsByClassName("box3"),i=document.getElementsByClassName("box4");2==d?(e[0].style.display="none",l[0].style.display="none",s[0].style.opacity="0",y[0].style.opacity="0"):3==d?(l[0].style.display="none",e[0].style.display="flex",s[0].style.opacity="1",o[0].style.opacity="0",y[0].style.opacity="1",c[0].style.opacity="0"):4==d&&(l[0].style.display="none",e[0].style.display="flex",t[0].style.display="flex",n[0].style.display="none",s[0].style.opacity="1",o[0].style.opacity="1",a[0].style.opacity="0",y[0].style.opacity="1",c[0].style.opacity="1",i[0].style.opacity="0")}()),document.querySelector(".nextbtn").addEventListener("click",function(){console.log("되긴하지??");const e=document.getElementsByClassName("prevbtn"),t=document.getElementsByClassName("nextbtn"),c=document.getElementsByClassName("savebtn"),i=document.getElementsByClassName("submitbtn"),u=document.getElementsByClassName("two"),r=document.getElementsByClassName("three"),m=document.getElementsByClassName("four"),p=document.getElementsByClassName("box2"),g=document.getElementsByClassName("box3"),f=document.getElementsByClassName("box4");1==d?""==l.value||""==n.value||""==s.value||""==o.value||""==a.value?(alert("필수 입력란이 비어있습니다. 확인해주세요."),console.log(d)):0==y.checked?alert("개인정보수집에 동의해주세요."):(e[0].style.display="flex",c[0].style.display="none",u[0].style.opacity="1",p[0].style.opacity="1"):2==d?(console.log(d),c[0].style.display="none",e[0].style.display="flex",u[0].style.opacity="1",r[0].style.opacity="1",p[0].style.opacity="1",g[0].style.opacity="1"):3==d&&(console.log(d),e[0].style.display="flex",c[0].style.display="flex",i[0].style.display="flex",t[0].style.display="none",u[0].style.opacity="1",r[0].style.opacity="1",m[0].style.opacity="1",p[0].style.opacity="1",g[0].style.opacity="1",f[0].style.opacity="1")}()),$("#question1").keyup((function(e){var t=$(this).val();0==t.length||""==t?$(".textC1").text("0"):$(".textC1").text(t.length),t.length>500&&($(this).val($(this).val().substring(0,500)),alert("글자수는 500자까지 입력가능합니다."))})),$("#question2").keyup((function(e){var t=$(this).val();0==t.length||""==t?$(".textC2").text("0"):$(".textC2").text(t.length),t.length>300&&($(this).val($(this).val().substring(0,300)),alert("글자수는 300자까지 입력가능합니다."))})),$("#question3").keyup((function(e){var t=$(this).val();0==t.length||""==t?$(".textC3").text("0"):$(".textC3").text(t.length),t.length>500&&($(this).val($(this).val().substring(0,500)),alert("글자수는 500자까지 입력가능합니다."))})),$("#question4").keyup((function(e){var t=$(this).val();0==t.length||""==t?$(".textC4").text("0"):$(".textC4").text(t.length),t.length>500&&($(this).val($(this).val().substring(0,500)),alert("글자수는 500자까지 입력가능합니다."))}))}});