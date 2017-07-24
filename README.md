# flash.js
Utility for handling events from flash
<pre>
Flash.register(sfw_object) returns {
  on(name,func)
  off(name,func) 
 }
Flash.unregister(sfw_object)
Flash.isEnabled()
Flash.trigger(id,name,args...)
</pre>
