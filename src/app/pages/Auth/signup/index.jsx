// Import Dependencies
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

// Local Imports
import { Button, Card, Checkbox, Input, InputErrorMsg, Spinner } from "components/ui";
import Logo from "assets/appLogo.svg?react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { useAuthContext } from "app/contexts/auth/context";
import { Page } from "components/shared/Page";
import { useState } from "react";

// ----------------------------------------------------------------------

export default function SignUpV1() {
  const { signup, errorMessage, loginWithGoogle } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true)
    await signup({
      email: data.email,
      password: data.password,
    });
    setIsLoading(false)
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    await loginWithGoogle()
  }

  return (
    <Page title="Sign up">
    <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
      <div className="w-full max-w-[26rem] p-4 sm:px-5">
        <div className="text-center">
          <Logo className="mx-auto size-16" />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-dark-100">
              Welcome To Tailux
            </h2>
            <p className="text-gray-400 dark:text-dark-300">
              Please sign up to continue
            </p>
          </div>
        </div>
        <Card className="mt-5 rounded-lg p-5 lg:p-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <Input
                placeholder="Email"
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
                placeholder="Password"
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
              <Input
                placeholder="Repeat Password"
                type="password"
                prefix={
                  <LockClosedIcon
                    className="size-5 transition-colors duration-200"
                    strokeWidth="1"
                  />
                }
                {...register("confirmPassword")}
                  error={errors?.confirmPassword?.message}
              />
              <div className="mt-2">
                <InputErrorMsg
                  when={errorMessage && errorMessage !== ""}
                >
                  {errorMessage}
                </InputErrorMsg>
              </div>
              <div className="flex gap-1">
                <Checkbox label="I agree with" />
                <a
                  href="##"
                  className="text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                >
                  privacy policy
                </a>
              </div>
            </div>
                <Button
                  type="submit" 
                  className="mt-5 w-full flex justify-center items-center" 
                  color="primary" 
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? <Spinner className="h-5 w-5" /> : "Sign Up"}
                </Button>
          </form>
          <div className="mt-4 text-center text-xs+">
            <p className="line-clamp-1">
              <span>Already have an account? </span>{" "}
              <Link
                className="text-primary-600 transition-colors hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-600"
                to="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
          <div className="my-7 flex items-center space-x-3 text-xs rtl:space-x-reverse">
            <div className="h-px flex-1 bg-gray-200 dark:bg-dark-500"></div>
            <p>OR SIGN UP WITH EMAIL</p>
            <div className="h-px flex-1 bg-gray-200 dark:bg-dark-500"></div>
          </div>
          <div className="flex gap-4">
            <Button onClick={onGoogleSignIn} className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/100x100.png"
                alt="logo"
              />
              <span>Google</span>
            </Button>
            <Button className="h-10 flex-1 gap-3" variant="outlined">
              <img
                className="size-5.5"
                src="/images/100x100.png"
                alt="logo"
              />
              <span>Github</span>
            </Button>
          </div>
        </Card>
        <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">
          <a href="##">Privacy Notice</a>
          <div className="mx-2.5 my-0.5 w-px bg-gray-200 dark:bg-dark-500"></div>
          <a href="##">Term of service</a>
        </div>
      </div>
    </main>
    </Page>
  );
}
