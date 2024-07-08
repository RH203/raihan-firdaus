import {Link} from "react-router-dom";


function ErrorPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className=" font-semibold">
            404 Error
          </h3>
          <p className=" text-4xl font-semibold sm:text-5xl">
            Page not found
          </p>
          <p className="">
            Sorry, the page you are looking for could not be found or has been removed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to={""}
               className="block py-4 px-6 btn btn-primary">
              Go back
            </Link>
            <Link to={""}
               className="block py-4 px-6 btn btn-outline btn-primary">
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;