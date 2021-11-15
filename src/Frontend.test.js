import { render, getByTestId, fireEvent } from "@testing-library/react";
import App from "./App";

/**
 * For Jerome --- PLEASE READ
 * 
 * I'm sure you might be a little confused on how to make the tests. Fear not!
 * 
 * Each testing category has a "describe statement" is comprised of 2 things:
 * - A label: Used to name the category that tests run under
 * - The tests it contains: tests that it runs (ie, its children)
 * 
 * Going further on how to make an individual test, basically just copy/paste an "it statement"
 * - Each "it statement" is a test that falls under its parent "describe statement"
 * - Each test is comprised of a label, and the test itself
 * - Some tests work differently, with "expect statements", but the majority of our tests
 *   are run by checking if an html element is rendered after an event happens, where jest tries
 *   to find the element that's supposed to be there. If it can't find it, the test throws an error 
 *   and fails. The way we grab each html element is from its "data-testid" attribute, which are 
 *   defined in the return statement of javascript files for each component 
 *   (ie App.js, login/index.js, register/index.js, etc)
 * 
 * If the stuff I described above doesn't make complete sense (it prolly wont),
 * run npm test, then when you get a prompt, type the "a" key to run all tests
 * there, the testing hierarchy should make more sense.
 * 
 * Now, not every kind of test we need for the code coverage requirements are present here.
 * The following links are excellent resources for getting started on jest
 * Jest Docs: https://jestjs.io/docs/getting-started
 * React Hooks: https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/
 * 
 * Another thing to note, as of right now, our testing sucks and is not formatted correctly.
 * This is because we don't use a "setup and teardown" testing style. The jest docs have more
 * information on how to refactor our testing style to reflect, but this is something that we
 * need by iteration 2.
 * 
 * Another thing, we still need to test more than just that the html code works. We also need
 * to make sure each method is tested. For example, on the login/index.js file, we need to make
 * sure that the updateEmail and updatePassword methods work properly. How this can be tested,
 * I'm not sure, but if you're handing the tests, this has to get done too.
 * 
 * And please please PLEASE ask for help on stuff before Friday if you're confused. I would
 * 100% completely rather work on it together with you than this not get done.
 * 
 * -Lou
 */

describe("Jest", () => {
  it("Jest is working properly", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("App", () => {
  it("Starts on login page", () => {
    const { container } = render(<App />);
    const login = getByTestId(container, "login");
  });
});

describe("Login", () => {
  it("Login button works", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    fireEvent.click(loginButton);
    const profile = getByTestId(container, "profile");
  });

  it("Register button works", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const register = getByTestId(container, "register");
  });
});

describe("Register", () => {
  it("Register button works", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const registerButton2 = getByTestId(container, "register-registerButton");
    fireEvent.click(registerButton2);
    const profile = getByTestId(container, "profile");
  });

  it("Back button works", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const backButton = getByTestId(container, "register-backButton");
    fireEvent.click(backButton);
    const login = getByTestId(container, "login");
  });
});

describe("Profile", () => {
  it("Logout button works", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    fireEvent.click(loginButton);
    const logoutButton = getByTestId(container, "profile-logoutButton");
    fireEvent.click(logoutButton);
    const login = getByTestId(container, "login");
  });
});