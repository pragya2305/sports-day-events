import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { useLoginService } from "@redux/service";

jest.mock("@redux/service");

describe("Login component", () => {
  beforeEach(() => {
    useLoginService.mockReturnValue({
      doLogin: jest.fn(),
      loading: false,
      error: null,
    });
  });
  it("renders login form with username and password fields", () => {
    render(<Login />);
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("disables login button when either username or password is empty", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(loginButton).toBeDisabled();
  });

  it("enables login button when both username and password are provided", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(loginButton).toBeEnabled();
  });

  it("calls doLogin function when login form is submitted", async () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = await screen.findByRole("button", {
      name: /login/i,
    });

    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);

    expect(useLoginService().doLogin).toHaveBeenCalledWith(
      "username",
      "password"
    );
  });

  it("displays loading state while logging in", () => {
    useLoginService.mockReturnValueOnce({
      doLogin: jest.fn(),
      loading: true,
      error: null,
    });

    render(<Login />);
    const loginButton = screen.getByRole("button", { name: /logging in/i });
    expect(loginButton).toBeDisabled();
    expect(loginButton).toHaveTextContent("Logging in...");
  });

  it("displays error message when login fails", async () => {
    useLoginService.mockReturnValue({
      doLogin: jest.fn(),
      loading: false,
      error: "Invalid credentials",
    });

    render(<Login />);
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "username" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(loginButton);
    const errorText = await screen.findByText("Invalid credentials");
    expect(errorText).toBeInTheDocument();
  });
});
