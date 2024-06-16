"use client";
import Link from "next/link";
import * as SignUp from "@clerk/elements/sign-up";
import * as Clerk from "@clerk/elements/common";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Bg from "@/public/assets/register.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader } from "lucide-react";
import logo from "@/public/assets/logo.png";

export default function SignUpPage() {
  return (
    <SignUp.Root>
      <Clerk.Loading>
        {(isGlobalLoading) => (
          <>
            <SignUp.Step name="start">
              <section className=" w-full flex items-center justify-center h-screen">
                <div className="flex min-h-[80%]  w-[80%] flex-row-reverse">
                  <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                      <div>
                        <div className="space-y-2">
                          <div>
                            <Image alt="" src={logo} className=" relative right-4" />
                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              Register with us
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                              Already registered?{" "}
                              <Link
                                href="/sign-in"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                              >
                                Sign in
                              </Link>
                            </p>
                          </div>

                          <div className=" grid grid-cols-2 gap-2">
                            <Clerk.Field name="firstName">
                              <Clerk.Input type="text" asChild required>
                                <Input placeholder="First Name" />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                            <Clerk.Field name="lastName">
                              <Clerk.Input type="text" asChild required>
                                <Input placeholder="Last Name" />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                          </div>
                          <Clerk.Field name="emailAddress">
                            <Clerk.Input type="email" asChild required>
                              <Input placeholder="Email Address" />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                          <Clerk.Field name="password">
                            <Clerk.Input type="password" asChild required>
                              <Input placeholder="Password" />
                            </Clerk.Input>
                            <Clerk.FieldError className="block text-sm text-destructive" />
                          </Clerk.Field>
                          <SignUp.Action submit asChild>
                            <Button
                              variant={"default"}
                              className=" w-full hover"
                              disabled={isGlobalLoading}
                            >
                              <Clerk.Loading>
                                {(isLoading) => {
                                  return isLoading ? (
                                    <Loader className="size-4 animate-spin" />
                                  ) : (
                                    "Sign Up"
                                  );
                                }}
                              </Clerk.Loading>
                            </Button>
                          </SignUp.Action>

                          <div className="mt-10">
                            <div className="relative">
                              <div
                                className="absolute inset-0 flex items-center"
                                aria-hidden="true"
                              >
                                <div className="w-full border-t border-gray-200" />
                              </div>
                              <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white px-6 text-gray-900">
                                  Or continue with
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className=" w-full mt-10 flex p-2 items-center space-x-2 justify-center">
                            <Clerk.Connection name="facebook" asChild>
                              <Button
                                variant={"ghost"}
                                className=" border"
                                type="button"
                                disabled={isGlobalLoading}
                              >
                                <Clerk.Loading scope="provider:github">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <svg
                                          className=" size-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          x="0px"
                                          y="0px"
                                          width="100"
                                          height="100"
                                          viewBox="0 0 48 48"
                                        >
                                          <path
                                            fill="#039be5"
                                            d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                          ></path>
                                          <path
                                            fill="#fff"
                                            d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                                          ></path>
                                        </svg>
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                            <Clerk.Connection name="google" asChild>
                              <Button
                                variant={"ghost"}
                                className=" border"
                                type="button"
                                disabled={isGlobalLoading}
                              >
                                <Clerk.Loading scope="provider:github">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <svg
                                          className=" size-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          x="0px"
                                          y="0px"
                                          width="100"
                                          height="100"
                                          viewBox="0 0 48 48"
                                        >
                                          <path
                                            fill="#fbc02d"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                          ></path>
                                          <path
                                            fill="#e53935"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                          ></path>
                                          <path
                                            fill="#4caf50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                          ></path>
                                          <path
                                            fill="#1565c0"
                                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                          ></path>
                                        </svg>
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                            <Clerk.Connection name="tiktok" asChild>
                              <Button
                                variant={"ghost"}
                                className=" border"
                                type="button"
                                disabled={isGlobalLoading}
                              >
                                <Clerk.Loading scope="provider:github">
                                  {(isLoading) =>
                                    isLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      <>
                                        <svg
                                          className=" size-4"
                                          xmlns="http://www.w3.org/2000/svg"
                                          x="0px"
                                          y="0px"
                                          width="100"
                                          height="100"
                                          viewBox="0 0 50 50"
                                        >
                                          <path
                                            fill="#16d6fa"
                                            d="M18.5,45C11.607,45,6,39.393,6,32.5S11.607,20,18.5,20v4c-4.687,0-8.5,3.813-8.5,8.5 s3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5V5h4v27.5C31,39.393,25.393,45,18.5,45z"
                                          ></path>
                                          <path
                                            fill="#16d6fa"
                                            d="M41,19c-6.113,0-14-6.789-14-14h4c0,4.732,5.961,10,10,10V19z"
                                          ></path>
                                          <path
                                            fill="#ff64bd"
                                            d="M23.5,47C16.607,47,11,41.393,11,34.5S16.607,22,23.5,22v4c-4.687,0-8.5,3.813-8.5,8.5 s3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5V7h4v27.5C36,41.393,30.393,47,23.5,47z"
                                          ></path>
                                          <path
                                            fill="#ff64bd"
                                            d="M46,21c-6.113,0-14-6.789-14-14h4c0,4.732,5.961,10,10,10V21z"
                                          ></path>
                                          <path
                                            fill="#742bc9"
                                            d="M20.5,47C13.607,47,8,41.393,8,34.5S13.607,22,20.5,22v4c-4.687,0-8.5,3.813-8.5,8.5 s3.813,8.5,8.5,8.5s8.5-3.813,8.5-8.5V7h4v27.5C33,41.393,27.393,47,20.5,47z"
                                          ></path>
                                          <path
                                            fill="#742bc9"
                                            d="M43,21c-6.113,0-14-6.789-14-14h4c0,4.732,5.961,10,10,10V21z"
                                          ></path>
                                        </svg>
                                      </>
                                    )
                                  }
                                </Clerk.Loading>
                              </Button>
                            </Clerk.Connection>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden w-0 flex-1 lg:block">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={Bg}
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </SignUp.Step>
            <SignUp.Step name="verifications">
              <section className=" w-full flex items-center justify-center h-screen">
                <div className="flex min-h-[80%]  w-[80%] flex-row-reverse">
                  <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                      <div className="mt-10">
                        <div className="space-y-2">
                          <SignUp.Strategy name="email_code">
                            <Card>
                              <CardHeader>
                                <CardTitle>Verify your Email</CardTitle>
                                <CardDescription>
                                  {`we've sent an email to your inbox with an OTP`}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <Clerk.Field name="code">
                                  <div className=" flex items-center justify-center w-full px-5">
                                    <Clerk.Input
                                      type="otp"
                                      autoSubmit
                                      className="flex justify-center has-[:disabled]:opacity-50"
                                      render={({ value, status }) => {
                                        return (
                                          <div
                                            data-status={status}
                                            className="relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[status=selected]:ring-1 data-[status=selected]:ring-ring data-[status=cursor]:ring-1 data-[status=cursor]:ring-ring"
                                          >
                                            {value}
                                          </div>
                                        );
                                      }}
                                    />
                                  </div>
                                  <Clerk.FieldError className="block text-sm text-destructive text-center" />
                                </Clerk.Field>
                              </CardContent>
                              <CardFooter>
                                <SignUp.Action
                                  asChild
                                  resend
                                  className="text-muted-foreground"
                                  fallback={({ resendableAfter }) => (
                                    <Button variant="link" size="sm" disabled>
                                      Didn&apos;t recieve a code? Resend (
                                      <span className="tabular-nums">
                                        {resendableAfter}
                                      </span>
                                      )
                                    </Button>
                                  )}
                                >
                                  <Button variant="link" size="sm">
                                    Didn&apos;t recieve a code? Resend
                                  </Button>
                                </SignUp.Action>
                              </CardFooter>
                            </Card>
                          </SignUp.Strategy>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden w-0 flex-1 lg:block">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={Bg}
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </SignUp.Step>
            <SignUp.Step name="continue">
              <section className=" w-full flex items-center justify-center h-screen">
                <div className="flex min-h-[80%]  w-[80%] flex-row-reverse">
                  <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                      <div className="mt-10 space-y-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>
                              Continue with additional informations
                            </CardTitle>
                            <CardDescription>
                              please enter your email address here
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Clerk.Field name="emailAddress">
                              <Clerk.Input type="email" asChild required>
                                <Input placeholder="Email Address" />
                              </Clerk.Input>
                              <Clerk.FieldError className="block text-sm text-destructive" />
                            </Clerk.Field>
                          </CardContent>
                          <CardFooter>
                            <SignUp.Action submit asChild>
                              <Button
                                variant={"default"}
                                className=" w-full hover"
                                disabled={isGlobalLoading}
                              >
                                <Clerk.Loading>
                                  {(isLoading) => {
                                    return isLoading ? (
                                      <Loader className="size-4 animate-spin" />
                                    ) : (
                                      "Continue"
                                    );
                                  }}
                                </Clerk.Loading>
                              </Button>
                            </SignUp.Action>
                          </CardFooter>
                        </Card>
                      </div>
                    </div>
                  </div>
                  <div className="relative hidden w-0 flex-1 lg:block">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={Bg}
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </SignUp.Step>
          </>
        )}
      </Clerk.Loading>
    </SignUp.Root>
  );
}
