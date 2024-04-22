import React from "react";
import Navbar from "../components/Navbar";

const dados = [
  {
    id: 1,
    titulo: "talalalalla",
    subtitulo: "alalallala",
    img: `url{}`,
    content: "lalalala",
  },
];

export default function ArticlePage() {
  return (
    <>
      <Navbar/>
      <div className="max-w-screen-lg mx-auto py-20">
        {/* main */}
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {nav}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                Cryptocurrency
              </a>
            </div>
            <img src="" style={{ height: "28em" }} alt="imagem" />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">
                Advantage old had otherwise sincerity dependent additions. It in
                adapted natural hastily is justice. Six draw you him full not
                mean evil. Prepare garrets it expense windows shewing do an. She
                projection advantages resolution son indulgence. Part sure on no
                long life am at ever. In songs above he as drawn to. Gay was
                outlived peculiar rendered led six.
              </p>
              {/* Remaining content */}
            </div>

            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <img
                    src=""
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt="user"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      Mike Sullivan{" "}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs">
                      {" "}
                      Editor{" "}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 py-3">
                  Mike writes about technology Yourself required no at thoughts
                  delicate landlord it be. Branched dashwood do is whatever it.
                </p>
                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  Follow
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* main ends here */}

        {/* footer */}
        <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
          <div>
            <img src="" className="h-12 w-12" alt="logo" />
          </div>
          {/* Remaining footer content */}
        </footer>
        {/* footer ends here */}
      </div>
    </>
  );
}
