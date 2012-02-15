/*!
 * Tweet Rotator v1.0 - for jQuery 1.5.1
 * <link 2 codecanyon>
 *
 * Copyright 2011, Johan Dorper
 * You need to buy a license if you want use this script.
 * http://codecanyon.net/wiki/buying/howto-buying/licensing/
 *
 * Date: June 04 2011
 
 * Edit the tag variable below.
 * Any questions? hello@johandorper.com OR twitter.com/johandorper

 * Tweet Rotator is a JQuery plugin that lets you easily
 * load in Tweets from Twitter based on a valid Twitter
 * search operator.
 
 * Thx to Fox Junior for the timer Plugin: http://www.foxjunior.eu/
 */

/* By changing <p> to ": <p>" I was able to effectively get 
the tweets to render the way I needed */
jQuery.extend({fjFunctionQueue:function(a){if(a==null){if(jQuery.fjFunctionQueue.queue!=null&&jQuery.fjFunctionQueue.queue.queue.length>0)if(jQuery.fjFunctionQueue.queue.running)jQuery.fjTimer({interval:jQuery.fjFunctionQueue.queue.properties.interval,tick:function(){var d=jQuery.fjFunctionQueue.queue.queue.shift();try{jQuery.fjFunctionQueue.queue.properties.onTick(jQuery.fjFunctionQueue.queue.index,d);jQuery.fjFunctionQueue.queue.index++}catch(e){jQuery.fjFunctionQueue();throw e;}if(jQuery.fjFunctionQueue.queue.queue.length>
0)jQuery.fjFunctionQueue();else{jQuery.fjFunctionQueue.queue.running=false;jQuery.fjFunctionQueue.queue.index=0;jQuery.fjFunctionQueue.queue.properties.onComplete()}}});else{jQuery.fjFunctionQueue.queue.running=true;jQuery.fjFunctionQueue()}}else{if(jQuery.fjFunctionQueue.queue==null)jQuery.fjFunctionQueue.queue={index:0,running:false,queue:[],properties:{interval:1,onComplete:function(){},onStart:function(){},autoStart:true,onTick:function(d,e){e()}}};var b=jQuery.fjFunctionQueue.queue.queue.length==
0;if(jQuery.isFunction(a))jQuery.fjFunctionQueue.queue.queue.push(a);else if(jQuery.isArray(a))for(var c=0;c<a.length;c++)jQuery.fjFunctionQueue.queue.queue.push(a[c]);else jQuery.fjFunctionQueue.queue.properties=jQuery.extend(jQuery.fjFunctionQueue.queue.properties,a);if(b&&jQuery.fjFunctionQueue.queue.queue.length>0&&!jQuery.fjFunctionQueue.queue.running&&jQuery.fjFunctionQueue.queue.properties.autoStart){jQuery.fjFunctionQueue.queue.running=true;jQuery.fjFunctionQueue.queue.properties.onStart();
jQuery.fjFunctionQueue.queue.running=false;jQuery.fjFunctionQueue()}}},fjTimer:function(a){a=jQuery.extend({interval:10,tick:function(){},repeat:false,random:false,onComplete:function(){},step:1},a);var b=0,c=new (function(){this.timerId=null;this.stop=function(){clearInterval(this.timerId)}});c.timerId=setInterval(function(){try{a.tick(b,c);b+=a.step}catch(d){alert(d)}if(a.repeat!==true&&(a.repeat*a.step<=b||a.repeat===false)){c.stop();a.onComplete()}},a.interval)},fjTimerEach:function(a){var b=
a.array, c = a.tick; a.repeat = b.length; if (a.step != null) a.repeat = Math.ceil(b.length / parseInt(a.step, 10)); a.tick = function (d) { c(d, b[d]) }; jQuery.fjTimer(a)}}); eval(function (p, a, c, k, e, r) { e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function (e) { return r[e] } ]; e = function () { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ('(L($){$.1T.1U=L(H){7 I=1o 1d();I=I.1p();7 J={1q:"#1V",1r:N,1e:"1s",1t:6,1f:N,1g:3,1u:N,1v:N,1w:N,1x:"",1y:"1W 1X ",1z:"// 1Y ",1A:"1Z"};7 K=$.20(J,H);M 13.1B(L(){7 g=$(13);7 h="#"+$(13).1h("T");7 j=g.1i();7 k=g.1j();7 l=0;7 m=0;7 n=0;7 o=6;7 p=Q;7 q=Q;7 r=K.1A;7 s=K.1q;7 t="14://1k.15.16/1k.21?22=?&q="+25(s)+K.1x+"&26="+K.1t;7 u=L(){g.1C("27");g.O("<V W=\'R\'/>");v()};7 v=L(){$.28(t,L(c){$.1B(c.29,L(a,b){w(b);l++});y();F()})};7 w=L(a){7 b=$("<V W=\'1D "+x()+"\' T=\'2a"+l+"\'></V>");7 c=$("<V W=\'2b\'></V>");c.O("<1E>"+K.1y+"<a 17=\'18\' 19=\'14://2c.15.16/"+a.1F+"\'>@"+a.1F+"</a></1E>");c.O(": <p>"+D(a.2d)+"</p> ");c.O("<1G>"+K.1z+E(a.2e)+"</1G>");b.1l({1i:j+"X",1j:k+"X"});b.O(c);$(h+" .R").O(b)};7 x=L(){8(K.1r==N){8(n==0){n++;M r+n}P{8(n>0&&n<6){n++;M r+n}P{n=1;M r+n}}}P{n=1;M r+n}};7 y=L(){7 a=$("<1a W=\'U\'/>");2f(7 i=0;i<l;i++){8(m==i){a.O("<S W=\'Y\' 1b:T=\'"+i+"\' />")}P{a.O("<S 1b:T=\'"+i+"\' />")}}g.O(a);8(K.1e=="1s"){$(h+" .R").1l({1j:k,1i:(l*j)+"X"});$(h+" .1D, "+h+" 1a.U S").1l("2g","1m")}$(h+" .U S:2h(.Y)").2i(\'2j\',L(){z($(13));8(K.1f==N){p=N;8(q==Q){q=N;2k(L(){G();F();q=Q},(K.1g*1n))}}})};7 z=L(a){$(h+" .U S").2l("Y");a.1C("Y");8(K.1e=="2m"){7 b=a.1h("1b:T");8(b==0){$(h+" .R").1c({1H:"1I"},1J)}P{7 c=0-(b*k);$(h+" .R").1c({1H:c+"X"},1J)}}P{7 b=a.1h("1b:T");8(b==0){$(h+" .R").1c({1m:"1I"},1K)}P{7 d=0-(b*j);$(h+" .R").1c({1m:d+"X"},1K)}}};7 A=L(a){7 b=/(\\b(2n?|2o|2p):\\/\\/[-A-1L-9+&@#\\/%?=~1M|!:,.;]*[-A-1L-9+&@#\\/%=~1M|])/2q;M a.10(b,"<a 17=\'18\' 19=\'$1\'>$1</a>")};7 B=L(a){7 b=/\\#([a-1N-Z]+)([\\s|\\.\\,:]+)*/g;M a.10(b,"<a 17=\'18\' 19=\'14://15.16/#1k?q=%23$1\'>#$1 </a>")};7 C=L(a){7 b=/\\@([a-1N-Z]+)([\\s|\\.\\,:]+)*/g;M a.10(b,"<a 17=\'18\' 19=\'14://15.16/$1\'>@$1 </a>")};7 D=L(a){8(K.1u==N){a=A(a)}8(K.1v==N){a=B(a)}8(K.1w==N){a=C(a)}a=a.10(/ \\<\\/a\\>/g,"</a> ");M a};7 E=L(a){7 b=1d.2r(a);7 c=1o 1d();7 d=c.1p();7 e=1O((d-b)/1n);8(e<0)M Q;8(e<=1P)M"2s 11";8(e<12)M 1O(e/1P)+" 2t 11";8(e<=1.5*12)M"1Q 2u 11";8(e<23.5*12)M 2v.2w(e/12)+" 2x 11";8(e<1.5*24*12)M"1Q 2y 11";7 f=a.2z(\' \');M f[4].10(/\\:\\d+$/,\'\')+\' \'+f[2]+\' \'+f[1]+(f[3]!=c.2A()?\' \'+f[3]:\'\')};7 F=L(){8(K.1f==Q){p=N}P{p=Q}1R.2B({2C:(K.1g*1n),2D:N,2E:L(a,b){8(p==N){b.2F()}8(p==Q){G()}}})};7 G=L(){7 a=$(h+" 1a.U S.Y");8(a.1S().2G()>0){z(a.1S())}P{z($(h+" 1a.U S").2H())}};u()})}})(1R);', 62, 168, '|||||||var|if|||||||||||||||||||||||||||||||||||||||function|return|true|append|else|false|tweet_holder|li|id|nav|div|class|px|active||replace|ago|3600|this|http|twitter|com|target|_blank|href|ul|tweet|animate|Date|direction|autorotate|idletime|attr|width|height|search|css|left|1000|new|getTime|operator|multiple_colors|horizontal|tweetlimit|convertTextlink|linkHashtags|linkUsernames|parameters|default_from_line|default_time_line|prefix|each|addClass|tweetparent|span|from_user|em|top|0px|500|600|Z0|_|zA|parseInt|60|One|jQuery|next|fn|tweetrotator|apple|Tweet|from|Posted|color_|extend|json|callback|||escape|rpp|tweet_rotator|getJSON|results|tweet_|tweetbox|www|text|created_at|for|float|not|live|click|setTimeout|removeClass|vertical|https|ftp|file|ig|parse|Seconds|minutes|hour|Math|round|hours|day|split|getFullYear|fjTimer|interval|repeat|tick|stop|size|first'.split('|'), 0, {}))