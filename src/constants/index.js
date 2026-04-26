import heroPC from "/images/background/heroPC.png";
import heroMob from "/images/background/heroMob.png";

export const heropc = heroPC;
export const heromob = heroMob;

// IMAGE CAROUSEL DATA
export const imgSlides = [
  {
    id: 1,
    text: "It's NEVER too late to take a fist step... Try now before is too late or whatever i'm just filling the space. one more thing this whole thing is so fun to build.",
    image: "/images/slides/slide1.png",
  },
  {
    id: 2,
    text: "Start today. Or tomorrow. Honestly just start whenever... but don't blame me if you forget. This is your sign. Or not. Idk I just work here.",
    image: "/images/slides/slide2.png",
  },
  {
    id: 3,
    text: "Every expert was once a beginner who didn't give up... or maybe they did give up but then came back. Anyway, keep clicking. You're doing great.",
    image: "/images/slides/slide3.png",
  },
  {
    id: 4,
    text: "Progress not perfection. Unless you're a perfectionist, then good luck. But seriously, building this feels like solving a puzzle while making coffee. Chaotic but worth it.",
    image: "/images/slides/slide4.png",
  },
  {
    id: 5,
    text: "Do the thing. Any thing. This text is just here to look busy. So are you. Let's be busy together.",
    image: "/images/slides/slide5.png",
  },
];

// TEXT CAROUSEL DATA
export const textSlides = [
  {
    id: 1,
    rating: 5,
    text: "I’ve tried countless workout apps and YouTube routines, but I was always overwhelmed and ended up quitting after a month. Signing up for the 1-on-1 coaching here was the best decision I’ve ever made. Coach Sam didn’t just give me a workout plan; they fixed my nutrition and held me accountable. I’m down 28 pounds and actually look forward to working out. If you are on the fence, just do it.",
    user: "@MikeyFitnessJourney",
  },
  {
    id: 2,
    rating: 5,
    text: "I was skeptical about online coaching because I travel a lot for work. I thought I needed someone yelling at me in a gym to see results. I was wrong. The custom meal plans are so easy to follow (even when eating out), and the app interface makes logging my workouts from hotel gyms super simple. I’ve gained so much muscle definition and energy. 10/10 recommend.",
    user: "@SarahM_HealthyLiving",
  },
  {
    id: 3,
    rating: 5,
    text: "I've been lifting for a few years but always felt like my physique looked unbalanced—big arms, no chest, weird shoulders. I wanted that aesthetic, 'fitness model' look but didn't know how to program for it. My coach dialed in my training split and fixed my form on every major lift. Within 3 months, my chest finally started filling out and my posture is night and day. Huge W.",
    user: "@AlexB_Gains",
  },
  {
    id: 4,
    rating: 5,
    text: "Started at 265 lbs, depressed, eating like garbage, hated looking at myself. I needed someone to literally tell me what to do because I had no clue where to start. This coaching program gave me a simple, no-BS plan: lift heavy 4x a week, hit my protein, walk 10k steps. That's it. Down 45 lbs in 5 months and I'm actually starting to see muscle definition.",
    user: "@MarcusF_Transformation",
  },
  {
    id: 5,
    rating: 5,
    text: "Played college football, graduated, lost all my structure and gained 20 lbs of straight garbage weight in a year. I missed being strong and feeling athletic. The programming here is legit—it's not just bodybuilding fluff. We focused on strength phases, explosive work, and dialing in my nutrition so I could lean out without losing my muscle.",
    user: "@JakeT_Athlete",
  },
];

export const programas = [
  {
    id: 1,
    name: "Principiante",
    nameJap: "初心者",
    programs: [
      {
        id: 1,
        name: "Primeros Pasos",
        objective: "Adaptación neuromuscular y ganancia de fuerza base.",
        description:
          "Enfocado en dominar los 6 movimientos fundamentales (sentadilla, press banca, peso muerto, dominada, press militar y remo) con progresiones sencillas y bajo volumen para evitar lesiones.",
        image: "/images/programs/programs1.jpg",
      },
      {
        id: 2,
        name: "Hipertrofia",
        objective: "Estimular la hipertrofia general en todo el cuerpo.",
        description:
          "Rutina full body 3 días/semana. Cada sesión trabaja todos los grupos musculares con ejercicios compuestos, ideal para principiantes que quieren ver los primeros cambios de tamaño muscular.",
        image: "/images/programs/programs2.jpg",
      },
      {
        id: 3,
        name: "Simetria",
        objective: "Corregir desbalances musculares y mejorar la postura.",
        description:
          "Programa especial para quienes pasan muchas horas sentados. Incluye trabajo extra para espalda alta, glúteos y rotadores externos, reduciendo el riesgo de hombros redondeados.",
        image: "/images/programs/programs3.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Intermedio",
    nameJap: "中級",
    programs: [
      {
        id: 4,
        name: "Espalda en V",
        objective:
          "Ensanchar la espalda superior para lograr la clásica forma de V.",
        description:
          "Prioriza dominadas, jalones al pecho y remos con agarre ancho. Volumen moderado-alto con 2 días específicos de espalda a la semana.",
        image: "/images/programs/programs4.jpg",
      },
      {
        id: 5,
        name: "Tren Inferior",
        objective: "Desarrollar piernas densas y glúteos prominentes.",
        description:
          "Basado en sentadilla profunda, peso muerto rumano, prensa y bulgaras. Se usan series de 6-10 repes con sobrecarga progresiva semanal. 2 sesiones de piernas.",
        image: "/images/programs/programs5.jpg",
      },
      {
        id: 6,
        name: "Volumen",
        objective: "Aumentar la masa muscular total mediante alto volumen.",
        description:
          "Clásica división PPL 5-6 días/semana. Cada grupo se golpea 2 veces. Ideal para romper estancamientos de peso y ganar tamaño sin descuidar la intensidad.",
        image: "/images/programs/programs6.jpg",
      },
      {
        id: 7,
        name: "Fuerza",
        objective:
          "Combinar ganancias de fuerza absoluta con trabajo hipertrófico.",
        description:
          "4 días: 2 días pesados (3-5 repes) y 2 días de hipertrofia (8-12 repes). Perfecto para el intermedio que quiere seguir subiendo el 1RM pero sin perder el foco estético.",
        image: "/images/programs/programs7.jpg",
      },
      {
        id: 8,
        name: "Hombros 3D",
        objective: "Desarrollar hombros redondeados y separación de deltoides.",
        description:
          "Rutina con énfasis en deltoides lateral y posterior (a menudo olvidados). Incluye elevaciones laterales, face pulls, press Arnold y mucho volumen para el deltoides lateral.",
        image: "/images/programs/programs8.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Avanzado",
    nameJap: "上級",
    programs: [
      {
        id: 9,
        name: "Definicion",
        objective:
          "Alcanzar el máximo nivel de definición muscular con mínimo sacrificio de masa.",
        description:
          "Programa de 6 semanas con carbohidratos cíclicos y series de alto rango metabólico (12-15 repes). Incluye trabajo de pump y técnicas como rest-pause. Para competidores próximos a mostrar forma.",
        image: "/images/programs/programs9.jpg",
      },
      {
        id: 10,
        name: "Brazos",
        objective: "Añadir centímetros a bíceps y tríceps en 8 semanas.",
        description:
          "Para avanzados con brazos rezagados. Superseries antagonistas, series descendentes y técnicas de alta intensidad como parciales, isométricos y dropsets. Volumen muy alto.",
        image: "/images/programs/programs10.jpg",
      },
      {
        id: 11,
        name: "Madurez Muscular",
        objective: "Mejorar la calidad, dureza y separación muscular.",
        description:
          "Cada grupo termina con 7 series de 15 repes con descansos muy cortos (30-45”). Enfocado en la fascia. Avanzados solo, porque requiere manejo extremo de fatiga y bombeo.",
        image: "/images/programs/programs11.jpg",
      },
      {
        id: 12,
        name: "Fuerza Maxima",
        objective:
          "Aumentar el 1RM en sentadilla, banca y peso muerto, mientras se preserva el músculo.",
        description:
          "Ciclos de 4 semanas (acumulación, intensificación, choque, descarga). Los levantamientos compuestos se trabajan al 85-95%, y los accesorios se mantienen en rango hipertrófico. Para avanzados con buena técnica.",
        image: "/images/programs/programs12.jpg",
      },
    ],
  },
];

// export const programas = [
//   {
//     principiante: [
//       {
//         id: 1,
//         name: "Primeros Pasos",
//         objective: "Adaptación neuromuscular y ganancia de fuerza base.",
//         description:
//           "Enfocado en dominar los 6 movimientos fundamentales (sentadilla, press banca, peso muerto, dominada, press militar y remo) con progresiones sencillas y bajo volumen para evitar lesiones.",
//         image: "/images/programs/programs1.jpg",
//       },
//       {
//         id: 2,
//         name: "Hipertrofia",
//         objective: "Estimular la hipertrofia general en todo el cuerpo.",
//         description:
//           "Rutina full body 3 días/semana. Cada sesión trabaja todos los grupos musculares con ejercicios compuestos, ideal para principiantes que quieren ver los primeros cambios de tamaño muscular.",
//         image: "/images/programs/programs2.jpg",
//       },
//       {
//         id: 3,
//         name: "Simetria",
//         objective: "Corregir desbalances musculares y mejorar la postura.",
//         description:
//           "Programa especial para quienes pasan muchas horas sentados. Incluye trabajo extra para espalda alta, glúteos y rotadores externos, reduciendo el riesgo de hombros redondeados.",
//         image: "/images/programs/programs3.jpg",
//       },
//     ],
//     intermedio: [
//       {
//         id: 4,
//         name: "Espalda en V",
//         objective:
//           "Ensanchar la espalda superior para lograr la clásica forma de V.",
//         description:
//           "Prioriza dominadas, jalones al pecho y remos con agarre ancho. Volumen moderado-alto con 2 días específicos de espalda a la semana.",
//         image: "/images/programs/programs4.jpg",
//       },
//       {
//         id: 5,
//         name: "Tren Inferior",
//         objective: "Desarrollar piernas densas y glúteos prominentes.",
//         description:
//           "Basado en sentadilla profunda, peso muerto rumano, prensa y bulgaras. Se usan series de 6-10 repes con sobrecarga progresiva semanal. 2 sesiones de piernas.",
//         image: "/images/programs/programs5.jpg",
//       },
//       {
//         id: 6,
//         name: "Volumen",
//         objective: "Aumentar la masa muscular total mediante alto volumen.",
//         description:
//           "Clásica división PPL 5-6 días/semana. Cada grupo se golpea 2 veces. Ideal para romper estancamientos de peso y ganar tamaño sin descuidar la intensidad.",
//         image: "/images/programs/programs6.jpg",
//       },
//       {
//         id: 7,
//         name: "Fuerza",
//         objective:
//           "Combinar ganancias de fuerza absoluta con trabajo hipertrófico.",
//         description:
//           "4 días: 2 días pesados (3-5 repes) y 2 días de hipertrofia (8-12 repes). Perfecto para el intermedio que quiere seguir subiendo el 1RM pero sin perder el foco estético.",
//         image: "/images/programs/programs7.jpg",
//       },
//       {
//         id: 8,
//         name: "Hombros 3D",
//         objective: "Desarrollar hombros redondeados y separación de deltoides.",
//         description:
//           "Rutina con énfasis en deltoides lateral y posterior (a menudo olvidados). Incluye elevaciones laterales, face pulls, press Arnold y mucho volumen para el deltoides lateral.",
//         image: "/images/programs/programs8.jpg",
//       },
//     ],
//     avanzado: [
//       {
//         id: 9,
//         name: "Definicion",
//         objective:
//           "Alcanzar el máximo nivel de definición muscular con mínimo sacrificio de masa.",
//         description:
//           "Programa de 6 semanas con carbohidratos cíclicos y series de alto rango metabólico (12-15 repes). Incluye trabajo de pump y técnicas como rest-pause. Para competidores próximos a mostrar forma.",
//         image: "/images/programs/programs9.jpg",
//       },
//       {
//         id: 10,
//         name: "Brazos",
//         objective: "Añadir centímetros a bíceps y tríceps en 8 semanas.",
//         description:
//           "Para avanzados con brazos rezagados. Superseries antagonistas, series descendentes y técnicas de alta intensidad como parciales, isométricos y dropsets. Volumen muy alto.",
//         image: "/images/programs/programs10.jpg",
//       },
//       {
//         id: 11,
//         name: "Madurez Muscular",
//         objective: "Mejorar la calidad, dureza y separación muscular.",
//         description:
//           "Cada grupo termina con 7 series de 15 repes con descansos muy cortos (30-45”). Enfocado en la fascia. Avanzados solo, porque requiere manejo extremo de fatiga y bombeo.",
//         image: "/images/programs/programs11.jpg",
//       },
//       {
//         id: 12,
//         name: "Fuerza Maxima",
//         objective:
//           "Aumentar el 1RM en sentadilla, banca y peso muerto, mientras se preserva el músculo.",
//         description:
//           "Ciclos de 4 semanas (acumulación, intensificación, choque, descarga). Los levantamientos compuestos se trabajan al 85-95%, y los accesorios se mantienen en rango hipertrófico. Para avanzados con buena técnica.",
//         image: "/images/programs/programs12.jpg",
//       },
//     ],
//   },
// ];

export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];

// SOCIAL MEDIA LINKS
export const socials = [
  { name: "Instagram", href: "" },
  {
    name: "Youtube",
    href: "",
  },
  { name: "LinkedIn", href: "" },
  { name: "GitHub", href: "" },
];
