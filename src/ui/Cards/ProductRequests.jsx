import { Link } from "react-router-dom";
/**
 * Renders an event card component with details like city, date, content, title, tag, id, and time.
 *
 * @param {string} User - The user requesting a product.
 * @param {string} Product - The title of product being requested.
 * @param {string} id - The unique ID of the Product.
 * @param {Object} Date -the date the user requested the product.
 * @return {JSX.Element} The rendered Product Request Card.
 *
 * @author Hiruy Alemseged
 * Date: May 3rd, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ProductRequests() {
  const productRequests = [
    { User: "Jermaine Cole", Product: "Dyson Supersonic™ hair dryer", ID: "239860", Date: "22/05/2024" },
    { User: "Caitlyn Clark", Product: "Dyson Airwrap™ Origin multi-styler and dryer", ID: "278678", Date: "12/05/2024" },
    { User: "Lebron James", Product: "Dyson Supersonic™ hair dryer in Ceramic Pop", ID: "270689", Date: "01/05/2024" },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-12">
        {productRequests.map((productRequest, index) => (
          <div key={index} className="w-32 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
            <article className="flex flex-col h-full bg-white-300">
              <header className="p-2">
                <div className="mb-1 font-medium">
                  <h3 className="h4 mb-1 text-lg leading-snug font-semibold">{productRequest.Product}</h3>
                  <p className="text-xs text-gray-400">{productRequest.ID}</p>
                </div>
              </header>
              <p className="p-2 text-sm text-gray-400">Requested on: {productRequest.Date}</p>
              <footer className="mt-auto p-2">
                <p className="text-xs font-medium">Requested by: {productRequest.User}</p>
                {/* Hey James, I used the links you used for other components but if you could corrent the location of the links I would appreciate it */}
                <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  to={`/events/event-details/${index}`}>More Details &rarr;</Link>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductRequests;