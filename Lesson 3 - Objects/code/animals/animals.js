(function(global) {

    function Animal() {};

    function Cat() {};

    function Bird() {};

    function Worm() {};

    Animal.prototype.eat = function(food) {
        if ((this instanceof Bird && food instanceof Worm) || (this instanceof Cat && food instanceof Bird)) {
            return 'Mniam!';
        } else {
            return 'Blee!';
        }
    };

    Cat.prototype = new Animal();
    Cat.prototype.constructor = Cat;

    Bird.prototype = new Animal();
    Bird.prototype.constructor = Bird;


    Worm.prototype = new Animal();
    Worm.prototype.constructor = Worm;

    if (!global.UAM) {
        global.UAM = {};
    }

    global.UAM.Cat = Cat.prototype;
    global.UAM.Bird = Bird.prototype;
    global.UAM.Worm = Worm.prototype;




}(window));

/*
	W zadaniu mamy 3 rodzaje zwierząt: koty, ptaki i robaki. Respektując prawa natury koty jedzą ptaki, a ptaki robaki.
	Zaimplementuj obiekty Cat, Bird i Worm tak, aby poniższy kod zwracał prawidłowe rezultaty:

	var cat1 = Object.create(Cat);
	var cat2 = Object.create(Cat);
	var bird = Object.create(Bird);
	var worm = Object.create(Worm);

	cat1.eat(bird); // "Mniam!"
	cat2.eat(bird); // "Mniam!"
	bird.eat(worm); // "Mniam!"
	worm.eat(cat1); // "Blee!"
	cat1.eat(cat2); // "Blee!"

	Dodatkowo wszystkie obiekty mają korzystać ze wspólnej metody eat.
*/
