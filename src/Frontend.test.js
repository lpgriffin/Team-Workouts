import { render, getByTestId, fireEvent } from "@testing-library/react";
import App from "./App";

it("Jest is working properly", () => {
  expect(2 + 2).toBe(4);
});

it("App: Loads on login page", () => {
  const { container } = render(<App />);
  const loginButton = getByTestId(container, "loginButton");
  const registerButton = getByTestId(container, "registerButton");
});

it("Login: Login button works", () => {
  const { container } = render(<App />);
  const loginButton = getByTestId(container, "loginButton");
  fireEvent.click(loginButton);
  const logoutButton = getByTestId(container, "logoutButton");
});

it("Login: Register button works", () => {
  const { container } = render(<App />);
  const registerButton = getByTestId(container, "registerButton");
  fireEvent.click(registerButton);
  const backButton = getByTestId(container, "backButton");
});

it("Register: Register button works", () => {
  const { container } = render(<App />);
  const registerButton = getByTestId(container, "registerButton");
  fireEvent.click(registerButton);
  const registerButton2 = getByTestId(container, "registerButton");
  fireEvent.click(registerButton2);
  const logoutButton = getByTestId(container, "logoutButton");
});

it("Register: Back button works", () => {
  const { container } = render(<App />);
  const registerButton = getByTestId(container, "registerButton");
  fireEvent.click(registerButton);
  const backButton = getByTestId(container, "backButton");
  fireEvent.click(backButton);
  const loginButton = getByTestId(container, "loginButton");
});

it("Profile: Logout button works", () => {
  const { container } = render(<App />);
  const loginButton = getByTestId(container, "loginButton");
  fireEvent.click(loginButton);
  const logoutButton = getByTestId(container, "logoutButton");
  fireEvent.click(logoutButton);
  const loginButton2 = getByTestId(container, "loginButton");
  const registerButton = getByTestId(container, "registerButton");
});