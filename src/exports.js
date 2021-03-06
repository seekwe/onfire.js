/* jshint expr: true */ 
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory(root);
  else
    root.onfire = factory(root);
}(typeof window !== 'undefined' ? window : this, function () {

<%=contents%>
	
	return {
		on: on,
		one: one,
		un: un,
		fire: fire,
		size: size,
		clear: clear,
		events: events,
	}
});