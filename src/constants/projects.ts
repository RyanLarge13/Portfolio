import CalngDesk from "../assets/CalngDesk.png";
import CalngVid from "../assets/videos/CalngVid.mp4";
import TroyLargeDesk from "../assets/Troy-Large-Desk.png";
import TroyLargeVid from "../assets/videos/TroyLargeVid.mp4";
import WorkoutBlog from "../assets/Workout-Blog.png";
import WorkoutBlogVid from "../assets/videos/WorkoutBlogVid.mp4";

const projects = [
  {
    title: "Calendar next Generation",
    body: "Calendar next Gen is a cross platform installable PWA application featuring a full fledged calendar with a pluthera of functionality and native device features",
    images: [CalngDesk],
    video: CalngVid,
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
    images: [TroyLargeDesk],
    video: TroyLargeVid,
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
    images: [WorkoutBlog],
    video: WorkoutBlogVid,
    tech: [
      { text: "React", color: "bg-sky-300" },
      { text: "Sanity", color: "bg-rose-300" },
      { text: "React Context", color: "bg-emerald-300" },
    ],
    webLink: "https://workout-blog.vercel.app/",
    codeLink: "https://github.com/RyanLarge13/Workout-Blog-Public/",
  },
];

export default projects;
