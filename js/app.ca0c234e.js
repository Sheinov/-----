(function(){"use strict";var t={7711:function(t,l,e){var a=e(9242),o=e(3396);function i(t,l,e,a,i,c){(0,o.up)("Auth");const n=(0,o.up)("HomePage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.kq)("",!0),((0,o.wg)(),(0,o.j4)(n,{key:1}))],64)}const c={class:"container"},n={class:"wrapper"},s={action:"#",class:"form"},r=(0,o._)("h1",{class:"auth-title"},"Вход",-1),d=(0,o._)("nav",null,[(0,o._)("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[(0,o._)("button",{class:"nav-link active",id:"nav-default-tab","data-bs-toggle":"tab","data-bs-target":"#nav-default",type:"button",role:"tab","aria-controls":"nav-default","aria-selected":"true"},"Имя и Пароль"),(0,o._)("button",{class:"nav-link",id:"nav-snils-tab","data-bs-toggle":"tab","data-bs-target":"#nav-snils",type:"button",role:"tab","aria-controls":"nav-snils","aria-selected":"false"},"СНИЛС")])],-1),f={class:"tab-content",id:"nav-tabContent"};function p(t,l,e,a,i,p){const b=(0,o.up)("LoginPage"),u=(0,o.up)("SnilsPage");return(0,o.wg)(),(0,o.iD)("div",c,[(0,o._)("div",n,[(0,o._)("form",s,[r,d,(0,o._)("div",f,[(0,o.Wm)(b),(0,o.Wm)(u)])])])])}const b={class:"tab-pane fade show active",id:"nav-default",role:"tabpanel","aria-labelledby":"nav-default-tab"},u=(0,o.uE)('<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Имя пользователя</label><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Имя пользователя"></div><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Пароль</label><input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Пароль"></div><div class="user-actions"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked><label class="form-check-label" for="flexSwitchCheckChecked">Запомнить меня</label></div></div><div class="login-button"><button type="button" class="btn btn-primary btn-lg">Войти</button></div>',4),v=[u];function m(t,l){return(0,o.wg)(),(0,o.iD)("div",b,v)}var h=e(89);const k={},g=(0,h.Z)(k,[["render",m]]);var y=g;const x={class:"tab-pane fade",id:"nav-snils",role:"tabpanel","aria-labelledby":"nav-snils-tab"},C=(0,o.uE)('<div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Номер СНИЛС</label><input type="email" class="form-control" id="exampleFormControlInput1" placeholder="СНИЛС"></div><div class="mb-3"><label for="exampleFormControlInput1" class="form-label">Пароль</label><input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Пароль"></div><div class="user-actions"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked><label class="form-check-label" for="flexSwitchCheckChecked">Запомнить меня</label></div></div><div class="login-button"><button type="button" class="btn btn-primary btn-lg">Войти</button></div>',4),D=[C];function I(t,l){return(0,o.wg)(),(0,o.iD)("div",x,D)}const _={},w=(0,h.Z)(_,[["render",I]]);var O=w,R={name:"App",components:{LoginPage:y,SnilsPage:O}};const j=(0,h.Z)(R,[["render",p]]);var E=j;const P={class:"wrapper"},S=(0,o._)("nav",{class:"navbar navbar-dark bg-primary"},[(0,o._)("div",{class:"authUsers"},"Шеинов М.Б."),(0,o._)("div",{class:"exit"},[(0,o._)("a",{href:"#",type:"submit",class:"exit-btn"},"Выход")])],-1),Z=(0,o._)("ul",{class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},[(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link active",id:"pills-journal-tab","data-bs-toggle":"pill","data-bs-target":"#pills-journal",type:"button",role:"tab","aria-controls":"pills-journal","aria-selected":"true"},"Журнал выданных справок")]),(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link",id:"pills-certificate-tab","data-bs-toggle":"pill","data-bs-target":"#pills-certificate",type:"button",role:"tab","aria-controls":"pills-certificate","aria-selected":"false"},"Новая справка")]),(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link",id:"pills-doctors-tab","data-bs-toggle":"pill","data-bs-target":"#pills-doctors",type:"button",role:"tab","aria-controls":"pills-doctors","aria-selected":"false"},"Врачи")]),(0,o._)("li",{class:"nav-item",role:"presentation"},[(0,o._)("button",{class:"nav-link",id:"pills-settings-tab","data-bs-toggle":"pill","data-bs-target":"#pills-settings",type:"button",role:"tab","aria-controls":"pills-settings","aria-selected":"false"},"Настройки организации")])],-1),F={class:"tab-content",id:"pills-tabContent"},A={class:"tab-pane fade show active",id:"pills-journal",role:"tabpanel","aria-labelledby":"pills-journal-tab"},W={class:"tab-pane fade",id:"pills-certificate",role:"tabpanel","aria-labelledby":"pills-certificate-tab"},z={class:"tab-pane fade",id:"pills-doctors",role:"tabpanel","aria-labelledby":"pills-doctors-tab"},T={class:"tab-pane fade",id:"pills-settings",role:"tabpanel","aria-labelledby":"pills-settings-tab"};function B(t,l,e,a,i,c){const n=(0,o.up)("journalPage"),s=(0,o.up)("certificatePage"),r=(0,o.up)("doctors"),d=(0,o.up)("OrganizationSettings");return(0,o.wg)(),(0,o.iD)("div",P,[S,Z,(0,o._)("div",F,[(0,o._)("div",A,[(0,o.Wm)(n)]),(0,o._)("div",W,[(0,o.Wm)(s)]),(0,o._)("div",z,[(0,o.Wm)(r)]),(0,o._)("div",T,[(0,o.Wm)(d)])])])}const H={class:"wrapper-journal"},L=(0,o.uE)('<form class="d-flex form-search"><input class="form-control me-2" type="search" placeholder="Введите текст для поиска" aria-label="Search"><button class="btn btn-outline-success" type="submit">Найти</button></form><div class="content-table"><table class="table"><thead><tr><th scope="col">Дата выдачи</th><th scope="col">Серия справки</th><th scope="col">Номер справки</th><th scope="col">ФИО освидетельствуемого</th><th scope="col">Дата рождения освидетельствуемого</th><th scope="col">Наличие (отсутствие) медицинских противопоказаний</th><th scope="col">Наличие (отсутствие) медицинских ограничений</th><th scope="col">Наличие (отсутствие) медицинских показаний</th><th scope="col"></th></tr></thead><tbody><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td><button type="button" class="btn btn-success">Edit</button></td></tr><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td><button type="button" class="btn btn-success">Edit</button></td></tr></tbody></table></div>',2),M=[L];function q(t,l){return(0,o.wg)(),(0,o.iD)("div",H,M)}const N={},U=(0,h.Z)(N,[["render",q]]);var Y=U;const G=(0,o._)("nav",null,[(0,o._)("div",{class:"nav nav-tabs",id:"nav-tab",role:"tablist"},[(0,o._)("button",{class:"nav-link active",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#nav-home",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"1 Часть"),(0,o._)("button",{class:"nav-link",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"2 Часть")])],-1),J={class:"tab-content",id:"nav-tabContent"},K={class:"tab-pane fade show active",id:"nav-home",role:"tabpanel","aria-labelledby":"nav-home-tab"},Q={class:"tab-pane fade",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"};function V(t,l,e,a,i,c){const n=(0,o.up)("certificate1"),s=(0,o.up)("certificate2");return(0,o.wg)(),(0,o.iD)("div",null,[G,(0,o._)("div",J,[(0,o._)("div",K,[(0,o.Wm)(n)]),(0,o._)("div",Q,[(0,o.Wm)(s)])])])}const X=(0,o.uE)('<div class="certificate"><div class="certificate-title">Справка</div><div class="certificate-form Passport"><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Серия"><label for="floatingInput">Серия</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Номер"><label for="floatingInput">Номер</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Дата выдачи"><label for="floatingInput">Дата выдачи</label></div></div></div><div class="certificate"><div class="certificate-title">Пациент</div><div class="certificate-form Patient"><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Фамилия"><label for="floatingInput">Фамилия</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Имя"><label for="floatingInput">Имя</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Отчество"><label for="floatingInput">Отчество</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Дата рождения"><label for="floatingInput">Дата рождения</label></div><div class="content_form-check"><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1"> М </label></div><div class="form-check"><input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked><label class="form-check-label" for="flexRadioDefault2"> Ж </label></div></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="СНИЛС" maxlength="11"><label for="floatingInput">СНИЛС</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Социальный статус"><label for="floatingInput">Социальный статус</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Группа инвалидности"><label for="floatingInput">Группа инвалидности</label></div></div></div><div class="certificate"><div class="certificate-title">Документ, удостоверяющий личность</div><div class="certificate-form Document-personality"><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Наименование"><label for="floatingInput">Наименование</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Серия"><label for="floatingInput">Серия</label></div><div class="form-floating"><input type="text" class="form-control" id="floatingInput" placeholder="Номер"><label for="floatingInput">Номер</label></div><div class="form-floating organization_that_issued_the_document"><input type="text" class="form-control" id="floatingInput" placeholder="Организация, выдавшая документ"><label for="floatingInput">Организация, выдавшая документ</label></div></div></div><button type="button" class="btn btn-primary btn-lg">Сохранить</button>',4),$=[X];function tt(t,l){return(0,o.wg)(),(0,o.iD)("div",null,$)}const lt={},et=(0,h.Z)(lt,[["render",tt]]);var at=et;const ot=(0,o.uE)('<div class="content-block"><div class="content-block-title">Категории и подкатегории транспортных средств, на управление которыми предоставляется право на управление транспортными средствами</div><div class="content-block-form"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> A </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> B </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> C </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> D </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> BE </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> CE </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> DE </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Tm </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> Tb </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> M </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> A1 </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> B1 </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> C1 </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> D1 </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> C1E </label></div><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"><label class="form-check-label" for="flexCheckDefault"> D1E </label></div></div></div><div class="content-block"><div class="content-block-title">Обязательное медицинское освидетельствование проведено в связи с возвратом водительского удостоверения</div><div class="content-block-form"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option6"><label class="form-check-label" for="inlineRadio6">Да</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option7"><label class="form-check-label" for="inlineRadio7">Нет</label></div></div></div><div class="content-block"><div class="content-block-title">ФИО врача, выдавшего медицинское заключение</div><div class="content-block-form"><select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example"><option selected>Open this select menu</option><option value="1">One</option><option value="2">Two</option><option value="3">Three</option></select></div></div><div class="content-block"><div class="content-block-title">Статус справки</div><div class="content-block-form"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option8"><label class="form-check-label" for="inlineRadio8">Утеряна</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option9"><label class="form-check-label" for="inlineRadio9">Испорчена</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option10"><label class="form-check-label" for="inlineRadio10">Уничтожена</label></div></div></div><button type="button" class="btn btn-primary btn-lg">Сохранить</button>',5),it=[ot];function ct(t,l){return(0,o.wg)(),(0,o.iD)("div",null,it)}const nt={},st=(0,h.Z)(nt,[["render",ct]]);var rt=st,dt={name:"App",components:{certificate1:at,certificate2:rt}};const ft=(0,h.Z)(dt,[["render",V]]);var pt=ft;const bt={class:"doctors"},ut=(0,o.uE)('<div class="doctors_actions"><div class="doctors_add"><button type="button" id="myModal" class="btn btn-outline-primary btn-lg">+ Добавить</button></div><div class="doctors_search"><div class="container-fluid"><form class="d-flex"><input class="form-control me-2" type="search" placeholder="Введите текст для поиска" aria-label="Search"><button class="btn btn-outline-success" type="submit">Поиск</button></form></div></div></div><div class="modal-dialog modal-dialog-centered" id="modal-template"> ... </div><div class="doctors_table"><table class="table"><thead><tr><th scope="col">ФИО специалиста</th><th scope="col">Специальность</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td>Иванов Иван Иванович</td><td>Врач-терапевт</td><td class="action"><a href="#" class="btn btn-outline-success btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" title="Редактировать"><span class="material-icons">edit</span></a></td><td class="action"><a href="#" class="btn btn-outline-danger btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" title="Удалить"><span class="material-icons">delete</span></a></td></tr><tr><td>Смирнов Николай Иванович</td><td>Врач-терапевт</td><td class="action"><a href="#" class="btn btn-outline-success btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" title="Редактировать"><span class="material-icons">edit</span></a></td><td class="action"><a href="#" class="btn btn-outline-danger btn-edit" data-bs-toggle="tooltip" data-bs-placement="top" title="Удалить"><span class="material-icons">delete</span></a></td></tr></tbody></table></div>',3),vt=[ut];function mt(t,l){return(0,o.wg)(),(0,o.iD)("div",bt,vt)}const ht={},kt=(0,h.Z)(ht,[["render",mt]]);var gt=kt;const yt={class:"organization"},xt=(0,o.uE)('<div class="certificate"><div class="certificate-title">Настройки организации</div><div class="certificate-form OrganizationSettings"><div class="form-floating Name_of_medical_organization"><input type="text" class="form-control" id="floatingInput" placeholder="Наименование медицинской организации"><label for="floatingInput">Наименование медицинской организации</label></div><div class="form-floating mr-40"><input type="text" class="form-control" id="floatingInput" placeholder="ОКУД"><label for="floatingInput">ОКУД</label></div><div class="form-floating mr-40"><input type="text" class="form-control" id="floatingInput" placeholder="ОКПО"><label for="floatingInput">ОКПО</label></div><div class="form-floating mr-11"><input type="text" class="form-control" id="floatingInput" placeholder="ОГРН"><label for="floatingInput">ОГРН</label></div><div class="form-floating License"><input type="text" class="form-control" id="floatingInput" placeholder="Лицензия"><label for="floatingInput">Лицензия</label></div><div class="form-floating address"><input type="text" class="form-control" id="floatingInput" placeholder="Адрес"><label for="floatingInput">Адрес</label></div></div></div><button type="button" class="btn btn-primary btn-lg">Сохранить</button>',2),Ct=[xt];function Dt(t,l){return(0,o.wg)(),(0,o.iD)("div",yt,Ct)}const It={},_t=(0,h.Z)(It,[["render",Dt]]);var wt=_t,Ot={name:"App",components:{journalPage:Y,certificatePage:pt,doctors:gt,OrganizationSettings:wt}};const Rt=(0,h.Z)(Ot,[["render",B]]);var jt=Rt,Et={name:"App",components:{Auth:E,HomePage:jt}};const Pt=(0,h.Z)(Et,[["render",i]]);var St=Pt;(0,a.ri)(St).mount("#app")}},l={};function e(a){var o=l[a];if(void 0!==o)return o.exports;var i=l[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(l,a,o,i){if(!a){var c=1/0;for(d=0;d<t.length;d++){a=t[d][0],o=t[d][1],i=t[d][2];for(var n=!0,s=0;s<a.length;s++)(!1&i||c>=i)&&Object.keys(e.O).every((function(t){return e.O[t](a[s])}))?a.splice(s--,1):(n=!1,i<c&&(c=i));if(n){t.splice(d--,1);var r=o();void 0!==r&&(l=r)}}return l}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[a,o,i]}}(),function(){e.n=function(t){var l=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(l,{a:l}),l}}(),function(){e.d=function(t,l){for(var a in l)e.o(l,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:l[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)}}(),function(){var t={143:0};e.O.j=function(l){return 0===t[l]};var l=function(l,a){var o,i,c=a[0],n=a[1],s=a[2],r=0;if(c.some((function(l){return 0!==t[l]}))){for(o in n)e.o(n,o)&&(e.m[o]=n[o]);if(s)var d=s(e)}for(l&&l(a);r<c.length;r++)i=c[r],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},a=self["webpackChunkmedical"]=self["webpackChunkmedical"]||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(7711)}));a=e.O(a)})();
//# sourceMappingURL=app.ca0c234e.js.map