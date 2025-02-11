// Local Imports
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

// Import Dependencies
import logoLight from "assets/logo-light.png";
import logoDark from "assets/logo-dark.png";
import DashboardCheck from "assets/illustrations/dashboard-check.svg?react";
import { Button, Checkbox, Input, InputErrorMsg, Spinner } from "components/ui";
import { useThemeContext } from "app/contexts/theme/context";
import { useAuthContext } from "app/contexts/auth/context";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import googleLogo from "assets/google.png";
import githubLogo from "assets/github.png";
// ----------------------------------------------------------------------

export default function SignInV2() {
  const [isLoading, setIsLoading] = useState(false);
  const { login, errorMessage, loginWithGoogle } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    await login({
      email: data.email,
      password: data.password,
    });
    setIsLoading(false);
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
  };

  const {
    primaryColorScheme: primary,
    lightColorScheme: light,
    darkColorScheme: dark,
    isDark,
  } = useThemeContext();

  return (
    <main className="min-h-100vh flex">
      <div className="flex h-screen w-full">
        <div className="flex w-full flex-col items-center border-gray-150 bg-white dark:border-transparent dark:bg-dark-700 lg:w-1/2 ltr:border-l rtl:border-r">
          <div className="flex w-full max-w-sm grow flex-col justify-center p-5">
            <div className="text-center">
              <img src={isDark ? logoLight : logoDark} alt="logo" />
              <div className="mt-4 lg:mt-0">
                <h2 className="text-2xl font-semibold text-gray-600 dark:text-dark-100">
                  Welcome Back
                </h2>
                <p className="text-gray-400 dark:text-dark-300">
                  Please sign in to continue
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="space-y-4">
                <Input
                  label="email"
                  placeholder="Enter email"
                  prefix={
                    <EnvelopeIcon
                      className="size-5 transition-colors duration-200"
                      strokeWidth="1"
                    />
                  }
                  {...register("email")}
                  error={errors?.email?.message}
                />
                <Input
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  prefix={
                    <LockClosedIcon
                      className="size-5 transition-colors duration-200"
                      strokeWidth="1"
                    />
                  }
                  {...register("password")}
                  error={errors?.password?.message}
                />
              </div>

              <div className="mt-2">
                <InputErrorMsg when={errorMessage && errorMessage !== ""}>
                  {errorMessage}
                </InputErrorMsg>
              </div>

              <div className="mt-4 flex items-center justify-between space-x-2">
                <Checkbox label="Remember me" />
                <a
                  href="##"
                  className="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                type="submit"
                className="mt-5 flex w-full items-center justify-center"
                color="primary"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? <Spinner className="h-5 w-5" /> : "Sign In"}
              </Button>
            </form>
            <div className="mt-4 text-center text-xs+">
              <p className="line-clamp-1">
                <span>Dont have Account?</span>{" "}
                <Link
                  className="text-primary-600 transition-colors hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
                  to="/sign-up"
                >
                  Create account
                </Link>
              </p>
            </div>

            <div className="my-7 flex items-center text-tiny+">
              <div className="h-px flex-1 bg-gray-200 dark:bg-dark-500"></div>
              <p className="mx-3">OR</p>
              <div className="h-px flex-1 bg-gray-200 dark:bg-dark-500"></div>
            </div>

            <div className="flex gap-4">
              <Button
                onClick={onGoogleSignIn}
                className="h-10 flex-1 gap-3"
                variant="outlined"
              >
                <img
                  className="size-5.5"
                  src={googleLogo}
                  alt="logo"
                />
                <span>Google</span>
              </Button>
              <Button className="h-10 flex-1 gap-3" variant="outlined">
                <img
                  className="size-5.5"
                  src={githubLogo}
                  alt="logo"
                />
                <span>Github</span>
              </Button>
            </div>
          </div>

          <div className="mb-3 mt-5 flex justify-center text-xs text-gray-400 dark:text-dark-300">
            <a href="##">Privacy Notice</a>
            <div className="mx-2.5 my-0.5 w-px bg-gray-200 dark:bg-dark-500"></div>
            <a href="##">Term of service</a>
          </div>
        </div>
        <div className="hidden w-1/2 items-center justify-center bg-gray-100 dark:bg-dark-800 lg:flex">
          <div className="max-w-md p-6">
            <DashboardCheck
              style={{
                "--primary": primary[500],
                "--dark-500": isDark ? dark[500] : light[200],
                "--dark-600": isDark ? dark[600] : light[100],
                "--dark-700": isDark ? dark[700] : light[300],
                "--dark-450": isDark ? dark[450] : light[400],
                "--dark-800": isDark ? dark[800] : light[400],
              }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
