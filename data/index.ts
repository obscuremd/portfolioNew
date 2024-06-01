export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RWA project",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Frwa.png?alt=media&token=54098136-4f3b-471a-839a-199db47f8616",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://rwa-obscure.netlify.app",
  },
  {
    id: 2,
    title: "Tea",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2FInstagram%20post%20-%201.png?alt=media&token=5b384d16-ad68-4867-93f9-1f68ffa77f56",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://social-media-giox.vercel.app",
  },
  {
    id: 3,
    title: "Sizzles",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fpage%2013.png?alt=media&token=f950b38c-9237-4f91-b479-9baed90c5d1a",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Old Portfolio",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fimage_2024-06-01_175547030.png?alt=media&token=7894cd72-f25d-4089-b8b5-876e974e8589",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obs-portfolio.netlify.app",
  },
  {
    id: 5,
    title: "Shopify Clone",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fshopify%20card.png?alt=media&token=b4488746-95ee-479f-83c2-789a47c2ac92",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://obs-shopify.netlify.app",
  },
  {
    id: 6,
    title: "Pokedex App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fpokedex%20card.png?alt=media&token=8d71a016-12d9-4fd5-a61b-80af3855fdb5",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://obs-pokedex.netlify.app",
  },
  {
    id: 7,
    title: "Movie Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fmovie%20card.png?alt=media&token=4e211d21-9cd3-4084-aaac-960c023f8e44",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obs-movie-app.netlify.app",
  },
  {
    id: 8,
    title: "Car Game",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fcar%20card.png?alt=media&token=93135bb7-9c77-467a-a73b-d50be77328e4",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obscure-car-game.netlify.app",
  },
  {
    id: 9,
    title: "Youtube Clone",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2FYoutube%20card.png?alt=media&token=37335147-9731-4e5a-a3d0-83fbf27413b8",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obs-youtube.netlify.app",
  },
  {
    id: 10,
    title: "TradeFinex Clone",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2FTrade%20card.png?alt=media&token=b1b95230-62f0-4533-8711-b2ddf109a469",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obs-tradefinex.netlify.app",
  },
  {
    id: 11,
    title: "NextJs Crud",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "https://firebasestorage.googleapis.com/v0/b/social-media-fd6de.appspot.com/o/socialMedia%2Fportfolio%2Fimage_2024-06-01_175256671.png?alt=media&token=bd4062ea-d969-4569-baa8-8e6a18e28973",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://obs-nextjs-crud.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of collaborating with Daniel on the development of a two-player platformer, and I must say that he is truly one of the most talented software developers I've ever had the opportunity to work with. Daniel's level of commitment and determination throughout the project was nothing short of exceptional.",
    name: "Ishana Johnson",
    title: "Freelance client",
  },
  {
    quote:
      "Mudiaga Daniel is an outstanding software engineer whose meticulous approach adds a delightful touch to our business.He developed our e-commerce website and we are very pleased with the results. We highly recommend him to anyone looking for a professional software engineer.",
    name: "Obinna Abel",
    title: "Lead Dev at Nupat",
  },
  {
    quote:
      "Daniel has an impressive proficiency in utilizing modern technologies and frameworks, especially React and Redux. Throughout our projects, He consistently demonstrated his ability to create web applications that are not just robust in their functionality but also focus heavily on user experience and aesthetic appeal. His mastery of HTML and CSS allowed him to create immersive and dynamic user interfaces, further elevating our final products.",
    name: "Morara j.",
    title: "freelance client",
  },
  {
    quote:
      "I had the privilege of working closely with Anthony during our time together in a software development program, and I must say that he is an exceptional software engineer. Daniel's meticulous attention to detail and thorough approach to his work made collaborating with him an absolute delight.",
    name: "Victor Anorue",
    title: "Director of Stream inc.",
  },
  {
    quote:
      "Collaborating with Daniel was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Daniel's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Osinachi Johnathan",
    title: "CTO of jayco",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "FrontEnd Intern - Nupat Tech",
    desc: "Led Hucksters' design and development, driving a 40% increase in web traffic, engagement, and sales, alongside a 72% efficiency boost with a complexity score tool.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "FullStack Intern - Endevops",
    desc: "Developed an interactive UI aligning with company goals, collaborated on an AI-powered blockchain app, and led the team to a 36% growth in release.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Managed a diverse range of freelance projects, ensuring productive collaboration and delivering tailored solutions that meet client requirements.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead FullStack Developer",
    desc: "Led multiple tech startups, leveraging experience and demonstrating strong leadership to drive significant profits and overall returns.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://www.instagram.com/o.b.s.c.u.r.e_/",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.instagram.com/o.b.s.c.u.r.e_/",
    img: "/twit.svg",
  },
  {
    id: 3,
    link: "https://www.instagram.com/o.b.s.c.u.r.e_/",
    img: "/link.svg",
  },
];
