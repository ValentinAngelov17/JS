class Forum {
    #users;
    #questions;
    #id;
    #loggedIn;
    #showQuestionsRepr;


    constructor() {
        this.#users = [];
        this.#questions = [];
        this.#id = 0;
        this.#loggedIn = false;
        this.#showQuestionsRepr = [];
    };

    register(username, password, repeatPassword, email) {
        for (const element of this.#users) {
            if (username === element.username || email === element.email) {
                return "This user alreafy exists!"
            }
        }
        if (!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty")
        } else if (password !== repeatPassword) {
            throw new Error('Passwords do not match')
        } else {
            this.#users.push({
                username,
                password,
                email
            })
            return `${username} with ${email} was registered successfully!`


        }


    };

    login(username, password) {
        for (const element of this.#users) {
            if (username === element.username && password === element.password) {
                this.#loggedIn = true;
                return "Hello! You have logged in successfully";

            }

        }
        return "There is no such user";
    };

    logout(username, password) {
        if (username === element.username && password === username.password) {
            return "Hello! You have logged out successfully";
        }
        return "There is no such user";
    };

    postQuestion(username, question) {
        if (!question) {
            return "Invalid question"
        }
        let findUser = false;

        for (const element of this.#users) {
            if (username === element.username && this.#loggedIn) {
                findUser = true;
                this.#loggedIn = true;
                this.#questions.push(question);
                this.#id++;
                this.#showQuestionsRepr.push([`Question ${this.#id} by ${username}: ${question}`])
            }
        }
        if (findUser) {
            return "Your question has been posted successfully";
        } else {
            return "You should be logged in to post questions";
        }
    };

    postAnswer(username, questionId, answer) {
        for (const element of this.#users) {
            if (username === element.username && this.#loggedIn) {
                if (answer) {
                    if (questionId > 0 && questionId <= this.#questions.length) {
                        this.#showQuestionsRepr[questionId - 1].push(`---${username}: ${answer}`)
                        return "Your answer has been posted successfully";
                    } else {
                        return "There is no such question";
                    }
                } else {
                    return "Invalid answer";
                }
            }
        }
        return "You should be logged in to post answers";
    };

    showQuestions() {
        for (const element of this.#showQuestionsRepr) {
            for (const str of element) {
                console.log(`${str}`);
            }
        }
    }
}

let forum = new Forum();
console.log(forum.register('Michael', '123', '123', 'michael@abv.bg'));
console.log(forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com'));
console.log(forum.login('Michael', '123'));
console.log(forum.login('Stoyan', '123ab7'));
console.log(forum.postQuestion('Michael', "Can I rent a snowboard from your shop?"));
console.log(forum.postAnswer('Stoyan',1, "Yes, I have rented one last year."));
console.log(forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?"));
console.log(forum.postAnswer('Michael',2, "How old is she?"));
console.log(forum.postAnswer('Michael',2, "Tell us how tall she is."));
forum.showQuestions()


let forum1 = new Forum();
forum1.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum1.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum1.login('Jonny', '12345');
forum1.login('Peter', '123ab7');
forum1.postQuestion('Jonny', "Do I need glasses for skiing?");
forum1.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum1.postAnswer('Jonny',1, "What was your budget");
forum1.postAnswer('Peter',1, "$50");
forum1.postAnswer('Jonny',1, "Thank you :)");
forum1.showQuestions();
