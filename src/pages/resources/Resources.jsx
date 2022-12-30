import Layout from "../../components/Layout";
import useDocumentTitle from "../../hooks/useDocumentTitle";

//----------------------------------------------------------

const Resources = () => {
  useDocumentTitle("Resources | ArchitechRowee");

  return (
    <Layout>
      <div className="font-outfit text-whisper-white h-screen">
        <header className="pb-16 md:w-10/12 lg:w-8/12 lg:pr-10">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Software I use, tools for design and programming, and other things I
            recommend.
          </h1>
          <p className="text-zinc-400 pt-5">
            This is a collection of websites, tools, software, and other stuff
            that I wanted to share with whoever visits my website. I personally
            use most resources here but some of them are just addition because I
            think they’re cool or may be useful someday. Another purpose of this
            resources page is to clean up my unorganized and messy bookmarks.
          </p>
        </header>
        <div className="border-b border-zinc-600 w-full h-10" />
      </div>
    </Layout>
  );
};

export default Resources;
