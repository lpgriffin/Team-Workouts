import { render, getByTestId, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

// Setup and teardown. These can also be inside *describe* blocks
/*beforeEach(() => {
  const { container } = render(<App />);
});

afterEach(() => {
  cleanup;
}); 
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


/* describe("Error", () => {
  it("Back to Login Button Works", () => {
    const { container } = render(<App />);
    // Get to error page via setPortal or some other way
    const errorButton = getByTestId(container, "error-backButton");
    fireEvent.click(errorButton);
    const login = getByTestId(container, "login");
  });
});
*/

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

  it("Email Input Updates", () => {
    const { container } = render(<App />);
    const emailInput = getByTestId(container, "login-emailInput");
    fireEvent.change(emailInput, {target: {value: "linelions@e12s.com"}});
    expect(emailInput.value).toBe("linelions@e12s.com");
  });

  it("Password Input Updates", () => {
    const { container } = render(<App />);
    const passwordInput = getByTestId(container, "login-passwordInput");
    fireEvent.change(passwordInput, {target: {value: "o2y3"}});
    expect(passwordInput.value).toBe("o2y3");
  });

  it.skip("Unable to log in with email field empty", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    const emailInput = getByTestId(container, "login-emailInput");
    fireEvent.change(emailInput, {target: {value: "wherePassword"}});
    fireEvent.click(loginButton);
    const login = getByTestId(container, "login");
  });

  it.skip("Unable to log in with password field empty", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    const passwordInput = getByTestId(container, "login-passwordInput");
    fireEvent.change(passwordInput, {target: {value: "thisisasecurepassword"}});
    fireEvent.click(loginButton);
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

  // Not implemented yet
  it.skip("Cards", () => {
  });

  // Test should pass when users are only able to reach the profile page with a valid userId.
  // Expected to fail at this time, so is skipped
  it.skip("Displays a valid userId", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    fireEvent.click(loginButton);
    const userId = getByTestId(container, "profile-subheading");
    expect(userId.getElementsByClassName("subheading")[1]).not.toBe(undefined);
  })
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

  it("Email Input Updates", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const emailInput = getByTestId(container, "register-emailInput");
    fireEvent.change(emailInput, {target: {value: "bigbug@dravanianforelands.com"}});
    expect(emailInput.value).toBe("bigbug@dravanianforelands.com");
  });

  it("Name Input Updates", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const nameInput = getByTestId(container, "register-nameInput");
    fireEvent.change(nameInput, {target: {value: "Ravana"}});
    expect(nameInput.value).toBe("Ravana");
  });

  it("Username Input Updates", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const usernameInput = getByTestId(container, "register-usernameInput");
    fireEvent.change(usernameInput, {target: {value: "Ravana"}});
    expect(usernameInput.value).toBe("Ravana");
  });

  it("Password Input Updates", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const passwordInput = getByTestId(container, "register-passwordInput");
    fireEvent.change(passwordInput, {target: {value: "REJOICEINTHEGLORYOFCOMBAT"}});
    expect(passwordInput.value).toBe("REJOICEINTHEGLORYOFCOMBAT");
  });

  it("Password2 Input Updates", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const password2Input = getByTestId(container, "register-password2Input");
    fireEvent.change(password2Input, {target: {value: "Unbending Steel"}});
    expect(password2Input.value).toBe("Unbending Steel");
  });

});

// Workout page not implemented yet
describe("Workout", () => {
});