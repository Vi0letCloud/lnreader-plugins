var e=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function c(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var r,n,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(o=0)),o;)try{if(r=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){o.label=c[1];break}if(6===c[0]&&o.label<i[1]){o.label=i[1],i=c;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(c);break}i[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],n=0}finally{r=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),n=require("@libs/fetch"),i=require("@libs/defaultCover"),o=require("@libs/novelStatus"),a=function(){function a(){this.id="novhell",this.name="Novhell",this.icon="src/fr/novhell/icon.png",this.site="https://novhell.org",this.version="1.0.1"}return a.prototype.getCheerio=function(i){return e(this,void 0,void 0,(function(){var e;return t(this,(function(t){switch(t.label){case 0:return[4,(0,n.fetchApi)(i,{headers:{"Accept-Encoding":"deflate"}})];case 1:return[4,t.sent().text()];case 2:return e=t.sent(),[2,(0,r.load)(e)]}}))}))},a.prototype.popularNovels=function(r){return e(this,void 0,void 0,(function(){var e,n,i,o,a=this;return t(this,(function(t){switch(t.label){case 0:return r>1?[2,[]]:(e=[],i=this.site,[4,this.getCheerio(i)]);case 1:return(o=t.sent())("article div div div figure").each((function(t,r){var i=o(r).find("figcaption span strong").first().text().trim();i&&""!==i.trim()||(i=o(r).find("figcaption a strong").first().text().trim());var c=o(r).find("a img").attr("src"),s=o(r).find("a").attr("href");s&&i&&(n={name:i,cover:c,path:s.replace(a.site,"")},e.push(n))})),[2,e]}}))}))},a.prototype.parseNovel=function(r){return e(this,void 0,void 0,(function(){var e,n,a,c,s=this;return t(this,(function(t){switch(t.label){case 0:return e={path:r,name:"Sans titre"},[4,this.getCheerio(this.site+r)];case 1:return n=t.sent(),e.name=(null===(c=n('meta[property="og:title"]').attr("content"))||void 0===c?void 0:c.replace("- NovHell",""))||"",e.cover=n("section div div div div div img").first().attr("src")||i.defaultCover,e.status=o.NovelStatus.Ongoing,e.author=n("strong:contains('Ecrit par ')").parent().text().replace("Ecrit par ","").trim(),e.author||(e.author=n("div p:contains('Auteur')").text().replace("Auteur","").replace(":","").trim()),e.author||(e.author=n("div p:contains('Ecrit par :')").text().replace("Ecrit par :","").trim()),e.genres=n("strong:contains('Genre')").parent().text().replace("Genre","").replace(":","").trim(),e.genres||(e.genres=n("div p:contains('Genre')").text().replace("Genre","").replace(":","").trim()),e.summary=n("strong:contains('Synopsis')").parent().parent().text().replace("Synopsis","").replace("Synopsis","").replace(":","").trim(),a=[],n("main div article div div section div div div div div p a").each((function(e,t){var r=n(t).text().replace(/\u00A0/g," ").trim(),i=n(t).attr("href");if(i&&i.includes(s.site)){for(var o=/Chapitre (\d+)/g,c=0,u=void 0;null!==(u=o.exec(r));){c+=parseInt(u[1])}a.push({name:r,path:i.replace(s.site,""),chapterNumber:c})}})),e.chapters=a.sort((function(e,t){return void 0!==e.chapterNumber&&void 0!==t.chapterNumber?e.chapterNumber-t.chapterNumber:void 0===e.chapterNumber?1:-1})),[2,e]}}))}))},a.prototype.parseChapter=function(r){return e(this,void 0,void 0,(function(){var e,n,i,o,a,c,s;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+r)];case 1:if(e=t.sent(),n=e("main article div div section")){for(i=n.length,o=void 0,a=2,c=3;c<=5;c++)if(0!==(o=n.eq(i-c)).find("h4").length){a=c-1;break}if(s=n.eq(i-a),o&&s)return[2,(o.html()||"")+(s.html()||"")]}return[2,""]}}))}))},a.prototype.searchNovels=function(r,n){return e(this,void 0,void 0,(function(){return t(this,(function(e){switch(e.label){case 0:return 1!==n?[2,[]]:[4,this.popularNovels(1)];case 1:return[2,e.sent().filter((function(e){return e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().includes(r.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim())}))]}}))}))},a}();exports.default=new a;