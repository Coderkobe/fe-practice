/*// 1.对象模块
    var searchObj = {};
    searchObj.init = function() {
      searchObj.fn1();
      searchObj.fn2();
    };
    searchObj.fn1 = function() {
      alert('fn1');
    };
    searchObj.fn2 = function() {
      alert('fn2');
    };
    searchObj.init();

  // 2.原型模块
    function searchObj() {
      this.init();
    }

    searchObj.prototype.init = function() {
      // console.info(this);
      this.fn1();
      this.fn2();
    };

    searchObj.prototype.fn1 = function() {
      alert(1);
    };
    searchObj.prototype.fn2 = function() {
      alert(2);
    };
    new searchObj(); 

    // 3.以对象模块返回（模块暴露）
    function CoolModule() {
      var something = "cool";
      var another = [1, 2, 3];

      function doSomething() {
        console.log(something);
      }
      function doAnother() {
        console.log(another.join(" ! "));
      }

      return {
        doSomething: doSomething,
        doAnother: doAnother
      };
    }

    var foo = CoolModule();
    foo.doSomething();
    foo.doAnother();
    // 上面的代码有一个叫做coolModule()的独立的模块创建器，可以被
    // 调用任意多次，每次调用都会创建一个新的模块实例。当只需要一个实例
    // 时，对该模式进行简单得修改，实现单例模式。
    //
    //
    var foo = (    function CoolModule() {
      var something = "cool";
      var another = [1, 2, 3];

      function doSomething() {
        console.log(something);
      }
      function doAnother() {
        console.log(another.join(" ! "));
      }

      return {
        doSomething: doSomething,
        doAnother: doAnother
      };
    }());
    foo.doSomething();
    foo.doAnother();*/

    // 现代的模块机制
    var myModules = (function Manager() {
        var modules = {};

        function define(name, deps, impl) {
            for (var i = 0; i < deps.length; i++) {
                deps[i] = modules[deps[i]];
            }
            modules[name] = impl.apply( impl, deps );
        }

        function get(name) {
            return modules[name];
        }
        return {
            define: define,
            get: get
        }
    }());

    myModules.define("bar", [], function () {
        function hello(who) {
            return "let me introduce: " + who;
        }
        return {
            hello: hello
        }
    });
    myModules.define( "foo", ["bar"], function(bar) {
        var hungry = "hippo";

        function awesome() {
            console.log(bar.hello( hungry ).toUpperCase());
        }
        return {
            awesome: awesome
        };
    });

    var bar = myModules.get("bar");
    var foo = myModules.get("foo");

    console.log( bar.hello("hippo") );
    foo.awesome();
