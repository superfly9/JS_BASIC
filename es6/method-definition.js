const obj = {
    a: 'foo',
    b() { return this.a }
  };
  console.log(obj.b())  // "foo"

  const obj1 = {
    seoul : (name)=>name,
    // lite2 : function (value) {} ==== lite2 () {}
    lite (value) {
        return value;
    },
    f: async function () {
        await some_promise
    } // async f () { await some_promise}로 바꿀 수 있다
}

// Computed property names
//The shorthand syntax also supports computed property names(key값으로 변수의 값을 사용할 수 있다)
const bar = {
    foo0: function() { return 0 },
    foo1() { return 1 },
    ['seoul' + 2]() { return 'seoul2' },
    seoul3() {return 'seoul3'}
  }
  console.log('bar:',bar)
  console.log(bar.foo0())  // 0
  console.log(bar.foo1())  // 1
  console.log(bar.seoul2())  // 2
  
  // A global function 
  function foo() {
    return 1
  }
  
  let name = 'foo'
  console.log(window[name]())  // 1

