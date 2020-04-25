(function() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    var authors = {
        container: [
            {
                name: "Re-view",
                photo: "imageboard.png",
                heading: `Imageboard is a web application built with Vue, allowing users to upload
                images and displaying them in a gallery, using AWS Cloud Storage
                source.`,
                extraInfo: `In that project on top of learning and practicing Vue i found
                very helpful and important learning how to get along with Cloud
                services`,
                link:
                    "https://github.com/tomerrajuan/Imageboard",

            },
            {
                name: "ipipe",
                photo: "ipipe.png",
                heading: "ipipe is a landing page for a start-up tech company from Israel.",
                extraInfo: `building that project was as one can belive, not about the HTML
                and CSS work but learning how to deploy and handle with the host
                service, working on daily bases with FileZilla, and exploring
                the statistics and user flow in the page. I was very glad to do
                this work and gain that experience`,
                link:
                    "https://github.com/tomerrajuan/Imageboard",

            },
            {
                name: "Social-Network",
                photo: "social.png",
                heading: `Social-Network is built using multiply frameworks and tools such as socket.io,
                for allowing a live chat feature`,
                extraInfo: `In that project on top of learning and practicing Vue i found
                very helpful and important learning how to get along with Cloud
                services`,
                link:
                    "https://github.com/tomerrajuan/social-network",

            },
            {
                name: "Petition",
                photo: "petition.png",
                heading: `The petition projects is a combination of PostgreSQL back-end work
                for collecting signatures from authenticated users using a log-in and
                registration process.`,
                extraInfo: `The petition project was the my first work with Databases, and practice
                of collecting and deleting data from the database. from the front-end hand,
                i used the Canvas methods to collect the signature given by the user and stor its
                path in my database.`,
                link:
                    "https://github.com/tomerrajuan/petition",

            },
            {
                name: "Re-view",
                photo: "review.png",
                heading: `Imageboard is ann app built with Vue, allowing users to upload
                images and displaying them in a gallery, using AWS Cloud Storage
                source.`,
                extraInfo: `In that project on top of learning and practicing Vue i found
                very helpful and important learning how to get along with Cloud
                services`,
                link:
                    "https://github.com/tomerrajuan/final-project",

            },

        ]
    };

    $(".container").html(Handlebars.templates.authors(authors));
})();
