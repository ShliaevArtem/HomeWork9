var obj = {
    a: { b: { c: { d: ['1', '2'] } } },
    e: 'some text'
  }
  var Clone = function (obj) {
    
    var container = Array.isArray(obj) ? [] : {}
    var keys  = Object.keys(obj)
     
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      if(typeof obj[key] == 'object') {
        container[key] = Clone(obj[key])
      }
      else
        container[key] = obj[key].slice()
    }
    
    return container
  }
   console.log(Clone(obj));