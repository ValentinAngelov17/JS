class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    toString() {
        return `Post: ${this.title}\nContent: ${this.content}`
    }
}

class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
        super(title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];
    }
    addComment(comment) {
        this.comments.push(comment);
    }
    toString() {
        console.log(`Post: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Rating: ${this.likes - this.dislikes}`);
        console.log('Comments:');
        if (this.comments) {
            this.comments.forEach(element => {
                console.log(` * ${element}`);
            });
        }

    }
}

class BlogPost extends Post {
    constructor(title, content, views) {
        super(title, content);
        this.views = views;
    }
    view() {
        this.views++;
        return this.views
    }

    toString() {
        console.log(`Post: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Views: ${this.views}`);
    }
}

let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

scm.toString();

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
