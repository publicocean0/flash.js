var Flash=new function(){
var hasFlash = false;
try {
  var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
  if (fo) {
    hasFlash = true;
  }
} catch (e) {
  if (navigator.mimeTypes
        && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
        && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
    hasFlash = true;
  }
}	

if (!hasFlash) console.debug('Flash plugin is not enabled');
this.isEnabled=function(){
return hasFlash;	
}
var idSequence=0;
var objs={}
this.registerObject=function(swf){
 idSequence++;
var obj={events:{},element:swf}
objs[ idSequence]=obj;
var pr=$(swf).find('param[name=FlashVars]');
var s=pr.val();
if (s.trim()!='')s+='&' 
pr.val(s+'id='+idSequence)
var ir={on:function(name,func){
if (!obj.events[name]) obj.events[name]=[];
obj.events[name].push(func)	
return ir;
},off:function(name,func){
var e=obj.events[name];
if (!e) return;
if (func){
	var p=e.indexOf(func)
	if (p>=0) e.splice(p,1)
}
else delete obj.events[name];
return ir;	
}
}
return ir
}

this.unregisterObject=function(swf){
for(var k in objs) if (objs[k].element==swf) { delete objs[k];break;}
}

this.trigger=function(id,name){
var args = [];
Array.prototype.push.apply( args, arguments );
args.shift()
args.shift()
if (id) {
	if (objs[id]) {
		var callbacks=objs[id].events[name];
		if (callbacks)  callbacks.forEach(function(c){
		c.apply(null,args)
		});
	}	
} else {
for(var k in objs) {
	var callbacks=objs[k].events[name];
		if (callbacks) callbacks.forEach(function(c){
		c.apply(null,args)
		});
	
}
}
}



}
