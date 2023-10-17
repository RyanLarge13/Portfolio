"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalngDesk_png_1 = require("../assets/CalngDesk.png");
var CalngVid_mp4_1 = require("../assets/videos/CalngVid.mp4");
var Troy_Large_Desk_png_1 = require("../assets/Troy-Large-Desk.png");
var TroyLargeVid_mp4_1 = require("../assets/videos/TroyLargeVid.mp4");
var Workout_Blog_png_1 = require("../assets/Workout-Blog.png");
var WorkoutBlogVid_mp4_1 = require("../assets/videos/WorkoutBlogVid.mp4");
var projects = [
    {
        title: "Calendar Next Generation",
        body: "Calendar Next Gen is a cross platform installable PWA application featuring a full fledged calendar with a pluthera of functionality and native device features",
        images: [CalngDesk_png_1.default],
        video: CalngVid_mp4_1.default,
        tech: [
            { text: "React", color: "bg-sky-300" },
            { text: "Prisma", color: "bg-rose-300" },
            { text: "New Date() API", color: "bg-emerald-300" },
            { text: "PostgresQL", color: "bg-purple-300" },
            { text: "Service Workers", color: "bg-amber-300" },
        ],
        webLink: "https://calng.app/",
        codeLink: "https://github.com/RyanLarge13/Calendar-Next-Gen/",
    },
    {
        title: "Tory Large Pastel",
        body: "E Commerce and gallery page for an outstanding artist with unbleivable tallent in the arts. Focusing on pastels and featuring a solid checkout method with stripe, purchase some of the best new art on the market",
        images: [Troy_Large_Desk_png_1.default],
        video: TroyLargeVid_mp4_1.default,
        tech: [
            { text: "Next13", color: "bg-sky-300" },
            { text: "MongoDB", color: "bg-emerald-300" },
            { text: "Stripe", color: "bg-red-300" },
            { text: "MAsonry Grid", color: "bg-purple-300" },
        ],
        webLink: "https://troy-large.vercel.app/",
        codeLink: "https://github.com/RyanLarge13/Troy-Large/",
    },
    {
        title: "Workout Blog",
        body: "Featuring a fully function fun styled blog web app focused on working out and the health community where a user can create, edit and delete blogs, follow friend, like and comment on others creation and enjoy a great read",
        images: [Workout_Blog_png_1.default],
        video: WorkoutBlogVid_mp4_1.default,
        tech: [
            { text: "React", color: "bg-sky-300" },
            { text: "Sanity", color: "bg-rose-300" },
            { text: "React Context", color: "bg-emerald-300" },
        ],
        webLink: "https://workout-blog.vercel.app/",
        codeLink: "https://github.com/RyanLarge13/Workout-Blog-Public/",
    },
];
exports.default = projects;
