import { render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import Store from "../../Utils/Store";
import { StaticRouter } from "react-router-dom/server";
import { json } from "react-router-dom";
import { Dummy_Fetch_Data } from "../../mocks/dummyData";
import  "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    Promise.resolve({
        json : ()=>{
            return Promise.resolve(Dummy_Fetch_Data)
        }
    })
})

test("Simmer  on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //console.log(body)

  const Simmer = body.getByTestId("simmer-test");
 // expect(Simmer).toBeInTheDocument();
 expect(Simmer.children.length).toBe(17);
});
