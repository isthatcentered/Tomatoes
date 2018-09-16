export interface movieExcerpt {
  id: number;
  title: string;
  rating: string;
  gross: string;
}
export interface movieDetail extends movieExcerpt {
  fresh: boolean;
  consensus: string;
  poster: string;
  audiance: string;
}
export interface movieReview {
  rating: string;
  author: string;
  body: string;
}

export const movieListJSON: Array<movieExcerpt> = [
  { id: 1, title: "Lady Bird", rating: "99%", gross: "52.9M" },
  { id: 2, title: "Superfly", rating: "50%", gross: "400M" },
  { id: 3, title: "Solo: A Star Wars Story", rating: "71%", gross: "24.9M" },
  { id: 4, title: "Ocean's 8", rating: "69%", gross: "403.9M" },
  { id: 5, title: "Uncle Drew", rating: "62%", gross: "17.5M" },
  { id: 6, title: "Hearts Beat Loud", rating: "91%", gross: "0.6M" }
];

export const movieDetailsJSON: { [id: number]: movieDetail } = {
  1: {
    id: 1,
    title: "Lady Bird",
    rating: "99%",
    gross: "52.9M",
    fresh: true,
    consensus:
      "Lady Bird delivers fresh insights about the turmoil of adolescence -- and reveals writer-director Greta Gerwig as a fully formed filmmaking talent.",
    poster:
      "https://resizing.flixster.com/oyNMT688E8hNJbP8SZ5SyKA9maQ=/206x305/v1.bTsxMjU2MjE4MDtqOzE3ODMwOzEyMDA7NTE1MDs3NjA2",
    audiance: "81%"
  },
  2: {
    id: 2,
    title: "Superfly",
    rating: "50%",
    gross: "400M",
    fresh: true,
    consensus:
      "Superfly updates the blaxploitation original with a stylish remake that's short on social subtext, but still exciting and visually arresting enough to offer its own slickly staged action rewards.",
    poster:
      "https://resizing.flixster.com/wGF6NR-14kWh5BOyHIJedBnNkDo=/206x305/v1.bTsxMjY5NjQ5NTtqOzE3ODMxOzEyMDA7MjAyNTszMDAw",
    audiance: "90%"
  },
  3: {
    id: 3,
    title: "Solo: A Star Wars Story",
    rating: "71%",
    gross: "24.9M",
    fresh: true,
    consensus:
      "A flawed yet fun and fast-paced space adventure, Solo: A Star Wars Story should satisfy newcomers to the saga as well as longtime fans who check their expectations at",
    poster:
      "https://resizing.flixster.com/KHI461vUwG12JGSgTIp_9zTvADk=/206x305/v1.bTsxMjcwODEwNztqOzE3ODMyOzEyMDA7NDgwOzcxMQ",
    audiance: "70%"
  },
  4: {
    id: 4,
    title: "Ocean's 8",
    rating: "69%",
    gross: "403.9M",
    fresh: true,
    consensus:
      "Ocean's 8 isn't quite as smooth as its predecessors, but still has enough cast chemistry and flair to lift the price of a ticket from filmgoers up for an undemanding caper.",
    poster:
      "https://resizing.flixster.com/PsRcp6m2MXaY-1dStzbiYQSxFc8=/206x305/v1.bTsxMjczNTYzMDtqOzE3ODMyOzEyMDA7NDA1MDs2MDAw",
    audiance: "95%"
  },
  5: {
    id: 5,
    title: "Uncle Drew",
    rating: "62%",
    gross: "17.5M",
    fresh: true,
    consensus:
      "Kyrie Irving's crossover to comedy is amiable enough to score with basketball fans, but Uncle Drew is held back by formulaic plotting and too much product placement.",
    poster:
      "https://resizing.flixster.com/lZXvGDPO3WFah7nlHszUx6PYxos=/206x305/v1.bTsxMjcyMTY5NjtqOzE3ODMyOzEyMDA7MzYwMDs1NTUw",
    audiance: "30%"
  },
  6: {
    id: 6,

    title: "Hearts Beat Loud",
    rating: "91%",
    gross: "0.6M",
    fresh: true,
    consensus:
      "Thoroughly sweet, comfortably familiar, and elevated by the chemistry between Nick Offerman and Kiersey Clemons, Hearts Beat Loud offers feel-good father-daughter drama.",
    poster:
      "https://resizing.flixster.com/45WunUB53FyPVci9DvaebGId4s0=/206x305/v1.bTsxMjcwNDYzODtqOzE3ODMyOzEyMDA7MTMwNTsxODkw",
    audiance: "98%"
  }
};

export const movieReviewsJSON = {
  1: [
    {
      rating: "70%",
      author: "Tomris Laffly - RogerEbert.com",
      body:
        "A keenly observed story of a Brooklyn father and daughter, charged with the kind of music as free-spirited as the duo is."
    },
    {
      rating: "77%",
      author: "J. R. Jones - Chicago Reader",
      body:
        "Music is so central to Hearts Beat Loud that it's connected to everything...Hearts Beat Loud is anything but sad."
    },
    {
      rating: "90%",
      author: "Matthew Lickona - San Diego Reader",
      body:
        "Writer-director Brett Haley...coaxes a few weak laughs from the daddy-daughter role reversal, and stale, mushy drama from the cycling death of the girl's mother more than a decade earlier."
    },
    {
      rating: "30%",
      author: "Peter Howell - Toronto Star",
      body:
        "The story is barrel - proof earnest sentiment, straight no chaser.How to keep the eyes from rolling in response ? Well, it helps to have Nick Offerman at the center of things."
    },
    {
      rating: "63%",
      author: "Tomris Laffly - RogerEbert.com",
      body:
        "All in all, a diverting, endearing and unpretentious slice of life, carved out with real feeling and shrewd good taste."
    },
    {
      rating: "89%",
      author: "Matthew Lickona - San Diego Reader",
      body:
        "The filmmaking is as warm as the beats Sam programs, but for all the comforts in the storytelling, as well as new relationships for Frank and Sam, the movie reveals creativity as a way of saying goodbye."
    }
  ]
};
