import { render, getByTestId, fireEvent, screen } from "@testing-library/react";
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

// TODO. Not really an applicable way to get to the Error Screen
describe("Error", () => {
  it.skip("Back to Login Button Works", () => {
    const { container } = render(<App />);
    // Get to error page via setPortal or some other way
    const errorButton = getByTestId(container, "error-backButton");
    fireEvent.click(errorButton);
    const login = getByTestId(container, "login");
  });
});

describe("Error Rendering", () => {
  beforeEach(() => {
    const { container } = render(<App />);
    // Get to Error Screen here
  });

  it.skip("Render Heading", () => {
    const heading = screen.getByTestId("register-heading");
    expect(heading).toBeInTheDocument();
  });

  it.skip("Render Subheading", () => {
    const subheading = screen.getByTestId("register-subheading");
    expect(subheading).toBeInTheDocument();
  });

  it.skip("Render Back Button", () => {
    const backButton = screen.getByTestId("register-backButton");
    expect(backButton).toBeInTheDocument();
  });
});

describe("Login", () => {
  it("Login button works", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    fireEvent.click(loginButton);
    const home = getByTestId(container, "home");
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

describe("Login Rendering", () => {
  beforeEach(() => {
    const { container } = render(<App />);
  });

  it("Render Logo", () => {
    const logo = screen.getByTestId("login-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Render Email Label", () => {
    const emailLabel = screen.getByTestId("login-emailLabel");
    expect(emailLabel).toBeInTheDocument();
  });

  it("Render Email Input", () => {
    const emailInput = screen.getByTestId("login-emailInput");
    expect(emailInput).toBeInTheDocument();
  });

  it("Render Password Label", () => {
    const passwordLabel = screen.getByTestId("login-passwordLabel");
    expect(passwordLabel).toBeInTheDocument();
  });

  it("Render Password Input", () => {
    const passwordInput = screen.getByTestId("login-passwordInput");
    expect(passwordInput).toBeInTheDocument();
  });

  it("Render Login Button", () => {
    const loginButton = screen.getByTestId("login-loginButton");
    expect(loginButton).toBeInTheDocument();
  });

  it("Render Register Button", () => {
    const registerButton = screen.getByTestId("login-registerButton");
    expect(registerButton).toBeInTheDocument();
  });
});

describe("Home", () => {
  it.skip("Logout button works", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton"); // Modify later
    fireEvent.click(loginButton);
    const logoutButton = getByTestId(container, "home-logoutButton");
    fireEvent.click(logoutButton);
    const login = getByTestId(container, "login");
  });

  it.skip("Edit Workout", () => { // Button not implemented yet
  }); 
  
  it.skip("View Workout", () => { // Button not implemented yet
  });

  it.skip("Edit Users", () => { // Button not implemented yet
  });

  it.skip("View Users", () => { // Button not implemented yet
  });

  it.skip("Cards", () => { // Not implemented yet
  });

  it.skip("Displays a valid userId", () => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton");
    fireEvent.click(loginButton);
    const userId = getByTestId(container, "home-welcome-label");
    expect(userId.getElementsByClassName("home-welcome-label")[1]).not.toBe(undefined);
  })
});

describe("Home Rendering", () => {
  beforeEach(() => {
    const { container } = render(<App />);
    const loginButton = getByTestId(container, "login-loginButton"); // Go to Home page
    fireEvent.click(loginButton);
  });

  it("Render Logo", () => {
    const logo = screen.getByTestId("home-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Render Bars", () => {
    const bars = screen.getByTestId("home-bars");
    expect(bars).toBeInTheDocument();
  });

  it("Render Welcome Label", () => {
    const welcomeLabel = screen.getByTestId("home-welcome-label");
    expect(welcomeLabel).toBeInTheDocument();
  });

  it.skip("Render Level Label", () => { // Two home-level-label testIds
    const levelLabel = screen.getByTestId("home-level-label");
    expect(levelLabel).toBeInTheDocument();
  });

  it("Render Workout Label", () => {
    const workoutLabel = screen.getByTestId("home-workout-label");
    expect(workoutLabel).toBeInTheDocument();
  });

  it("Render Edit Workout Button", () => {
    const editWorkoutButton = screen.getByTestId("home-editWorkoutButton");
    expect(editWorkoutButton).toBeInTheDocument();
  });

  it("Render View Workout Button", () => {
    const viewWorkoutButton = screen.getByTestId("home-viewWorkoutButton");
    expect(viewWorkoutButton).toBeInTheDocument();
  });

  it("Render Edit Users Button", () => {
    const editUsersButton = screen.getByTestId("home-editUsersButton");
    expect(editUsersButton).toBeInTheDocument();
  });

  it("Render View Users Button", () => {
    const viewUsersButton = screen.getByTestId("home-viewUsersButton");
    expect(viewUsersButton).toBeInTheDocument();
  });
});

describe("Register", () => {
  it.skip("Register button works", () => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
    const registerButton2 = getByTestId(container, "register-registerButton");
    fireEvent.click(registerButton2);
    const profile = getByTestId(container, "profile");
  });

  it.skip("Back button works", () => {
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

  it.skip("Name Input Updates", () => { // Legacy. Kept just in case
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

describe("Register Rendering", () => {
  beforeEach(() => {
    const { container } = render(<App />);
    const registerButton = getByTestId(container, "login-registerButton");
    fireEvent.click(registerButton);
  });

  it("Render Logo", () => {
    const logo = screen.getByTestId("register-logo");
    expect(logo).toBeInTheDocument();
  });

  it("Render Email Label", () => {
    const emailLabel = screen.getByTestId("register-emailLabel");
    expect(emailLabel).toBeInTheDocument();
  });

  it("Render Email Input", () => {
    const emailInput = screen.getByTestId("register-emailInput");
    expect(emailInput).toBeInTheDocument();
  });

  it("Render Username Label", () => {
    const usernameLabel = screen.getByTestId("register-usernameLabel");
    expect(usernameLabel).toBeInTheDocument();
  });

  it("Render Username Input", () => {
    const usernameInput = screen.getByTestId("register-usernameInput");
    expect(usernameInput).toBeInTheDocument();
  });

  it("Render Password Label", () => {
    const passwordLabel = screen.getByTestId("register-passwordLabel");
    expect(passwordLabel).toBeInTheDocument();
  });

  it("Render Password Input", () => {
    const passwordInput = screen.getByTestId("register-passwordInput");
    expect(passwordInput).toBeInTheDocument();
  });

  it("Render Pasword2 Label", () => {
    const password2Label = screen.getByTestId("register-password2Label");
    expect(password2Label).toBeInTheDocument();
  });

  it("Render Password2 Input", () => {
    const password2Input = screen.getByTestId("register-password2Input");
    expect(password2Input).toBeInTheDocument();
  });

  it("Render Register Button", () => {
    const registerButton = screen.getByTestId("register-registerButton");
    expect(registerButton).toBeInTheDocument();
  });
});

describe("Workout", () => { // Workout page not implemented yet
});