import Index from "../components/Index";
import Download from "../components/Download";
import Law from "../components/Law";
import About from "../components/About";
import Article from "../components/Article";


export default [
  {
    path: "/",
    component: Index
  },
  {
    path: "/download",
    component: Download
  },
  {
    path: "/law",
    component: Law
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/articles/:lawid",
    name: "articles",
    component: Article
  }
]
