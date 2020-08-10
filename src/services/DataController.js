export const tabs = [
  {
    title: "Full Stack",
    name: "fullstack",
    sourceURL:
      "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.dzone.com%2Fwebdev",
  },
  {
    title: "Microservice",
    name: "microservice",
    sourceURL:
      "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.dzone.com%2Fmicroservices",
  },
  {
    title: "Python",
    name: "python",
    sourceURL:
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Ftag%2Fpython",
  },
  // {
  //   title: "DZoneAll",
  //   name: "dzoneall",
  //   // sourceURL: "http://feeds.dzone.com/home",
  //   sourceURL: "https://css-tricks.com/feed/",
  // },
];

export const TabContentGetter = ({ name, sourceURL }, that) => {
  // switch (postName) {
  //   case "backend":
  //     sourceURL =
  //       // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Ftag%2Fbackend";
  //       // "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml";
  //       "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.dzone.com%2Fwebdev";
  //     // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsegmentfault.com%2Farticles%2Ffeeds";
  //     break;
  //   case "python":
  //     sourceURL =
  //       "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Ftag%2Fpython";

  //     // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frsshub.app%2Ftoutiao%2Ftoday";
  //     break;
  //   case "frontend":
  //     sourceURL =
  //       // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Ftag%2Ffrontend";
  //       "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcss-tricks.com%2Ffeed%2F";
  //     // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frsshub.app%2Fsegmentfault%2Fchannel%2Ffrontend";
  //     break;
  //   default:
  //     break;
  // }
  fetch(sourceURL)
    .then((res) => res.json())
    .then((data) => {
      const posts = data.items.map(({ title, link, description }) => {
        return {
          title,
          link,
          description,
        };
      });
      // console.log(data.items);
      const newState = {};
      newState[name] = posts;
      that.setState(newState);
    });
};

export const LatestNews = async (that) => {
  const posts = await fetch(
    // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsegmentfault.com%2Farticles%2Ffeeds"
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2F"
  )
    .then((res) => res.json())
    .then((data) => {
      const res = data.items;

      const posts = res.map(({ title, link, thumbnail, description }) => {
        return { title, link, thumbnail, description };
      });

      return posts;
      // return that.setState({ posts, fetchedData: true });
    });

  return that.setState({ posts, fetchedData: true });
};

export const Javascript = () => {
  fetch(
    // "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fsegmentfault.com%2Farticles%2Ffeeds"
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fdev.to%2Ffeed%2Ftag%2Fjavascript"
  )
    .then((res) => res.json())
    .then((data) => {
      const res = data.items;

      const posts = res.map(({ title, link, thumbnail, description }) => {
        return { title, link, thumbnail, description };
      });

      return posts;
    });
};
