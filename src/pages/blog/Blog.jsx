import Layout from "../../components/Layout";
import useDocumentTitle from "../../hooks/useDocumentTitle";

//----------------------------------------------------------

const Blog = () => {
  useDocumentTitle("Blog | ArchitechRowee");

  return (
    <Layout>
      <div className="font-outfit text-whisper-white h-screen">
        <header className="pb-16 md:w-10/12 lg:w-8/12 lg:pr-20">
          <h1 className="font-bold text-3xl lg:text-4xl">
            I intend to write about architecture, software development, movies
            and TV shows I enjoy, and possibly tech gadgets. 
          </h1>
          <p className="text-zinc-400 pt-5 lg:pr-20">
            Just a space for me to share all of my thoughts and experiences on
            architecture, programming, tech gadgets, and anything else.
          </p>
        </header>
        <div className="border-b border-zinc-500 w-full h-10" />
      </div>
    </Layout>
  );
};

export default Blog;
