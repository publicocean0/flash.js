# flash.js
Utility for handling events from flash
<pre>
Flash.register(sfw_object) returns {
  on(eventname,func) // register a listener 
  off(eventname,func) // unregister a listener
 }
Flash.unregister(sfw_object)
Flash.isEnabled()
Flash.trigger(id,name,args...) it is called directly by Flash automatically:
 Flash component will call this api passing the id of its swf component that is received in flashvars
</pre>
