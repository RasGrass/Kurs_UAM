(function(global) {
    if (!global.UAM) {
        global.UAM = {};
    }

    function newObject(Constr) {
        var thisValue = Object.create(Constr.prototype);
        var constructorArgs = Array.prototype.slice.call(arguments);
        constructorArgs.shift();
        var result = Constr.apply(thisValue, constructorArgs);
        if (typeof result === 'object' && result !== null) {
            return result;
        }
        return thisValue;
    }

    global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/
