var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,a){function o(t){try{s(n.next(t))}catch(t){a(t)}}function c(t){try{s(n.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,c)}s((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,i,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},o=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return o.next=c(0),o.throw=c(1),o.return=c(2),"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(s){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&c[0]?n.return:c[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,c[1])).done)return i;switch(n=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){a.label=c[1];break}if(6===c[0]&&a.label<i[1]){a.label=i[1],i=c;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(c);break}i[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(t){c=[6,t],n=0}finally{r=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),n=require("@libs/fetch"),i=function(){function i(){this.id="epiknovel",this.name="EpikNovel",this.icon="src/tr/epiknovel/icon.png",this.site="https://www.epiknovel.com/",this.version="1.0.0"}return i.prototype.popularNovels=function(i){return t(this,void 0,void 0,(function(){var t,a,o,c,s=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"seri-listesi?Sayfa="+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),o=(0,r.load)(a),c=[],o("div.col-lg-12.col-md-12").each((function(t,e){var r=o(e).find("h3").text(),n=o(e).find("img").attr("data-src"),i=o(e).find("h3 > a").attr("href");if(i){var a={name:r,cover:n,path:i.replace(s.site,"")};c.push(a)}})),[2,c]}}))}))},i.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var t,a,o,c,s,h=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),o=(0,r.load)(a),(c={path:i,name:o("h1#tables").text().trim()}).cover=o("img.manga-cover").attr("src"),c.summary=o("#wrapper > div.row > div.col-md-9 > div:nth-child(6) > p:nth-child(3)").text().trim(),c.status=o("#wrapper > div.row > div.col-md-9 > div.row > div.col-md-9 > h4:nth-child(3) > a").text().trim(),c.author=o("#NovelInfo > p:nth-child(4)").text().replace(/Publisher:|\s/g,"").trim(),s=[],o("table").find("tr").first().remove(),o("table").find("tr").each((function(t,e){var r=o(e).find("td:nth-child(3)").text(),n=o(e).find("td:nth-child(1) > a").text();o(e).find("td:nth-child(1) > span").length>0&&(n="🔒 "+n);var i=o(e).find(" td:nth-child(1) > a").attr("href");i&&s.push({name:n,path:i.replace(h.site,""),releaseTime:r})})),c.chapters=s,[2,c]}}))}))},i.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,a,o,c;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,n.fetchApi)(t)];case 1:return[4,(a=e.sent()).text()];case 2:return o=e.sent(),c=(0,r.load)(o),[2,a.url===this.site+"login"?"Premium Chapter":c("div#icerik").html()||""]}}))}))},i.prototype.searchNovels=function(i,a){return t(this,void 0,void 0,(function(){var t,o,c,s,h=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+"seri-listesi?q="+i+"&Sayfa="+a,[4,(0,n.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),c=(0,r.load)(o),s=[],c("div.col-lg-12.col-md-12").each((function(t,e){var r=c(e).find("h3").text(),n=c(e).find("img").attr("data-src"),i=c(e).find("h3 > a").attr("href");if(i){var a={name:r,cover:n,path:i.replace(h.site,"")};s.push(a)}})),[2,s]}}))}))},i}();exports.default=new i;