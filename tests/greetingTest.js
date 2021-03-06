describe('Greetings App' , function(){
    describe('Set the name and get the name' , function(){
        it('should display "Sapho", when Sapho has been entered in the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('Sapho');
            assert.equal('Sapho', greetExercise.getName());

        });
        it('should display "Thanos", when Thanos has been entered in the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('thanos');
            assert.equal('Thanos', greetExercise.getName());

        });
        it('should display "Lukhanyo", when Lukhanyo has been entered into the textbox' , function(){
            let greetExercise = greeting();

            greetExercise.setName('LUKHANYO');
            assert.equal('Lukhanyo', greetExercise.getName());

        });
    });

    describe('Greet our users' , function(){
        it('should greet Sapho in English, if English radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('saPhO');
            greetExercise.greetMe('english');

            assert.equal('Hello, Sapho', greetExercise.greetMe('english'));

        });
        it('should greet Thanos in Afrikaans, if Afrikaans radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('thaNos');
            greetExercise.greetMe('afrikaans');

            assert.equal('Hallo, Thanos', greetExercise.greetMe('afrikaans'));

        });
        it('should greet Lukhanyo in isiXhosa, if isiXhosa radio button has be checked.' , function(){
            let greetExercise = greeting();

            greetExercise.setName('lukhanYo');
            greetExercise.greetMe('isixhosa');

            assert.equal('Molo, Lukhanyo', greetExercise.greetMe('isixhosa'));

        });
    });

    describe('Increment names to my empty object' , function(){
        it('should increment Sapho as a key to my empty object and give it a value of 1 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('saPhO', 'english');

            assert.deepEqual({Sapho: 1}, greetExercise.namesAdded());

        });
        it("shouldn't increment Sapho if the name is already in my object but rather increment the value of it to 3." , function(){
            let greetExercise = greeting();

            greetExercise.addNames('saphO', 'english');
            greetExercise.addNames('sapho', 'english');
            greetExercise.addNames('saPho', 'english');

            assert.deepEqual({Sapho: 3}, greetExercise.namesAdded());

        });
        it('should add 1 name to my local storage and give it a value of 1 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            
            greetExercise.addNames('thanoS', 'english');
            greetExercise.addNames('phumza', 'afrikaans');
            greetExercise.addNames('lukhanyo', 'isixhosa');

            assert.deepEqual({Thanos: 1, Phumza: 1, Lukhanyo: 1}, greetExercise.namesAdded());

        });
        it('should add 2 names to my local storage and give it a value of 2 which will represent how many time(s) is the name greeted.' , function(){
            let greetExercise = greeting();

            
            greetExercise.addNames('thanos', 'english');
            greetExercise.addNames('phumza', 'afrikaans');
            greetExercise.addNames('lukhanyo', 'isixhosa');
            greetExercise.addNames('thaNos', 'isixhosa');
            greetExercise.addNames('lukhanYO', 'English');
            greetExercise.addNames('Phumza', 'Afrikaans');

            assert.deepEqual({Thanos: 2, Phumza: 2, Lukhanyo: 2}, greetExercise.namesAdded());

        });
    });
    describe('Greet counter' , function(){
        it('should increment the counter from 0 to 1, when one name is greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('saPho', 'english');

            assert.deepEqual(1, greetExercise.getCounter());

        });
        it("shouldn't increment the counter, when the name is greeted again." , function(){
            let greetExercise = greeting();

            greetExercise.addNames('saPho', 'english');
            greetExercise.addNames('SapHo', 'isixhosa');

            assert.deepEqual(1, greetExercise.getCounter());

        });
        it('should increment the counter to 2, once 2 names are greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('lukhanYo', 'english');
            greetExercise.addNames('thanOs', 'isixhosa');

            assert.deepEqual(2, greetExercise.getCounter());

        });
        it('should increment the counter to 5, once the names are greeted.' , function(){
            let greetExercise = greeting();

            greetExercise.addNames('hluMa', 'english');
            greetExercise.addNames('sapho', 'isixhosa');
            greetExercise.addNames('luKHanyo', 'Afikaans');
            greetExercise.addNames('thaNos', 'Afrikaans');
            greetExercise.addNames('phuMza', 'isixhosa');

            assert.deepEqual(5, greetExercise.getCounter());

        });
    });
});