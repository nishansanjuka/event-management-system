import { CategoryCard } from "@/typings";
import { Category } from "@prisma/client";

export const categoriesData: CategoryCard[] = [
  {
    name: Category.CONFERENCE,
    description: "A large meeting focused on a particular field or industry.",
    image:
      "https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg?t=st=1718371893~exp=1718375493~hmac=6d098ce8cb72854e64cd9f06e4cae80e76ca43df633346b872101a596703a635&w=1380",
  },
  {
    name: Category.WORKSHOP,
    description: "A session focused on hands-on learning or skills training.",
    image:
      "https://img.freepik.com/free-photo/female-african-american-speaker-giving-presentation-hall-university-workshop_155003-3579.jpg?t=st=1718372032~exp=1718375632~hmac=4488aedb3edff9b8375e3395d805a01c742beff29d48ef676f6c87e5ac3824de&w=1380",
  },
  {
    name: Category.MEETUP,
    description: "A casual gathering of people with shared interests.",
    image:
      "https://img.freepik.com/free-photo/handsome-african-guy-with-happy-face-expression-supporting-his-friends-before-conference-indoor-portrait-work-team-young-international-specialists-preparing-meeting-with-chief_197531-3781.jpg?t=st=1718372067~exp=1718375667~hmac=95905feabc399901d096ea3e90f6c154447cc6f16e23f1ec77a059ed507b3b63&w=1380",
  },
  {
    name: Category.SEMINAR,
    description:
      "An educational event with a speaker or small group discussion.",
    image:
      "https://img.freepik.com/free-photo/smiling-african-student-pointing-with-pencil-laptop-screen-concentrated-blonde-woman-glasses-propping-chin-with-hand-while-working-with-computer-office_197531-3714.jpg?t=st=1718372146~exp=1718375746~hmac=06e5f187774eaff250be0cc648d9584f1798586076acd8e0fb69f9c31611754d&w=1380",
  },
  {
    name: Category.WEBINAR,
    description: "An online seminar or presentation.",
    image:
      "https://img.freepik.com/free-photo/business-colleagues-watching-content-laptop_74855-1142.jpg?t=st=1718372195~exp=1718375795~hmac=8e157165c6a8875445ed12eb0eff34cb126cdb4e9903827e3fea5a4e4ff4d67a&w=1380",
  },
  {
    name: Category.NETWORKING_EVENT,
    description: "An event for meeting and connecting with professionals.",
    image:
      "https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149333659.jpg?t=st=1718372232~exp=1718375832~hmac=bfdae4e425968bd92d1b6c034a00d9894727960d15a535f73b6a386338114c19&w=1380",
  },
  {
    name: Category.TRADE_SHOW,
    description:
      "An exhibition for businesses to showcase and demonstrate products.",
    image:
      "https://img.freepik.com/free-photo/side-view-friends-having-fun_23-2148618800.jpg?t=st=1718372288~exp=1718375888~hmac=3b0e8bfb3459aa0a4a7bb1929836fb850f42be582241d03ef2f84cc78ec19067&w=1380",
  },
  {
    name: Category.EXPO,
    description: "A large public exhibition of products or services.",
    image:
      "https://img.freepik.com/free-photo/warm-welcoming-atmosphere-as-guests-arrive-party-venue_1268-30710.jpg?t=st=1718372555~exp=1718376155~hmac=8e000e8f38514fa01784bf3c398d69627b2ce62767b5050b366a004978a6723d&w=1480",
  },
  {
    name: Category.LECTURE,
    description: "An educational talk given by an expert.",
    image:
      "https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?t=st=1718372595~exp=1718376195~hmac=1f2dfc7c0d282a4e0b90ff3d9307fd87fbc0e77aa9056fdf5c220c1e7ec0f91b&w=1380",
  },
  {
    name: Category.PANEL_DISCUSSION,
    description:
      "A discussion involving multiple experts on a particular topic.",
    image:
      "https://img.freepik.com/free-photo/workers-giving-ideas-new-project_1139-226.jpg?t=st=1718372675~exp=1718376275~hmac=9b54e30f4e4f07d06dc7c526c60378e5aa4ea769e09ad42996253694c1576e82&w=1380",
  },
  {
    name: Category.TRAINING_SESSION,
    description: "A session focused on teaching specific skills or knowledge.",
    image:
      "https://img.freepik.com/free-photo/close-up-young-business-person-doing-internship_23-2149305372.jpg?t=st=1718372720~exp=1718376320~hmac=71e5c2c555f9f9005bc57e452fd04923cff29e37bf96765014217fa3c73a329a&w=1380",
  },
  {
    name: Category.FUNDRAISER,
    description: "An event to raise money for a cause.",
    image:
      "https://img.freepik.com/free-photo/portrait-middle-aged-blonde-rich-woman-with-champagne-glass-banknotes_23-2149668337.jpg?t=st=1718372763~exp=1718376363~hmac=a9bae8a396d5d426520859fca2702b727d56917cd01041dd5e0831402c079feb&w=1380",
  },
  {
    name: Category.SOCIAL_GATHERING,
    description: "A casual event for socializing and entertainment.",
    image:
      "https://img.freepik.com/free-photo/medium-shot-friends-holding-bottles_23-2149409385.jpg?t=st=1718372800~exp=1718376400~hmac=f8ccb874b3c9fb6e792456b62ea6b50abcf33ff13da7859d3a6e2356af92660b&w=1380",
  },
  {
    name: Category.PARTY,
    description: "A social gathering for celebration and fun.",
    image:
      "https://img.freepik.com/free-photo/happy-people-celebrating-having-fun_23-2147651892.jpg?t=st=1718372833~exp=1718376433~hmac=ffa46e1246e9611045d8382d9709cb5040f2295eabd1e581b1ff8a6c47ab52f3&w=1380",
  },
  {
    name: Category.CONCERT,
    description: "A live music performance.",
    image:
      "https://img.freepik.com/free-photo/view-futuristic-concert_23-2151073008.jpg?t=st=1718372857~exp=1718376457~hmac=0675915661756e914c6f3c529461f76c9f5370f607dce978d29dc363a0a2194c&w=1480",
  },
  {
    name: Category.FESTIVAL,
    description:
      "A series of performances or events, usually over several days.",
    image:
      "https://img.freepik.com/free-photo/young-woman-enjoying-with-holi-color-crowd_23-2148129211.jpg?t=st=1718372889~exp=1718376489~hmac=6b58c9cdeecb69330f141b8bdeb1b54a30810013cbecee2cd2491adefb3e170c&w=1380",
  },
  {
    name: Category.SPORTS_EVENT,
    description: "A competitive athletic event.",
    image:
      "https://img.freepik.com/free-photo/soccer-players-action-professional-stadium_654080-1130.jpg?t=st=1718372932~exp=1718376532~hmac=2af0b5fe771ec773b666605d8b6f3c1f89d7e6d9a11e1de988a6d2edc71f8262&w=1380",
  },
  {
    name: Category.CHARITY_EVENT,
    description: "An event to raise awareness or funds for a charitable cause.",
    image:
      "https://img.freepik.com/free-photo/group-different-people-volunteering-foodbank_23-2149012216.jpg?t=st=1718372960~exp=1718376560~hmac=e1c71c3113f119f02f534f85bb90288f075def8604a2ab7eb4eb741456fa2e9f&w=1380",
  },
  {
    name: Category.HACKATHON,
    description:
      "A competitive event where programmers collaborate on projects.",
    image:
      "https://img.freepik.com/free-vector/gradient-isometric-laptop-technology-background_52683-4501.jpg?t=st=1718372992~exp=1718376592~hmac=193adbf9839c360704b7ed297b36a56e467c6eaca5a03a46a19d4f1391762ca8&w=1380",
  },
  {
    name: Category.COMPETITION,
    description: "An event where participants compete against each other.",
    image:
      "https://img.freepik.com/free-photo/archery-bow-arrow-with-target_91128-4447.jpg?t=st=1718373017~exp=1718376617~hmac=2dc2abb25a9bd5e453a457c6ed1c47dfd4fcdd737c772d36b1a22bb7b522e4c7&w=1380",
  },
];
