// Horus Emoticons
// Version 1.0
// Author: Mohammed Alashaal <fb.com/alash3al, m7medalash3al.tk>
// An emoticons javascript class
var HorusEmoticons={emoticons:{},size:22,add:function(emoticons)
{for(var k in emoticons){this.emoticons[k]=emoticons[k];}},parse:function(element)
{function esc(str){return str.replace(/([.?*+^$[\]\\(){}|-])/ig,"\\$1");}for(var k in this.emoticons){var rexgp=new RegExp(esc(k),'g');$(element).html($(element).html().replace(rexgp,this.img(k,this.emoticons[k])));}},img:function(title,src)
{return'<img style="vertical-align: middle" src="'+src+'" title="'+title+'" alt="'+title+'"  width="'+this.size+'" height="'+this.size+'"/>';}};
