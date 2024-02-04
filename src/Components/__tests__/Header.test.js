import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../../Utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //console.log(header);

  const Logo = header.getAllByTestId("logo");
 // console.log(Logo);

  /* /
                if logo is png (in my case it not png)
                expect(Logo[0].src).toBe("http://localhost/dummy.png");

        */
});

test("Cart should 0 ", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={Store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
   
  // Replaced 'getAllByTestId' with 'getByTestId' because you seem to be expecting a single element.
    const cart = header.getByTestId("cart-test");
   // console.log(cart);

    console.log(cart.textContent);
   expect(cart.textContent).toBe("+0");
  
  });
  