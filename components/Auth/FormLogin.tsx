"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/FormInput";
import { PasswordField } from "../Dashboard/PasswordField";
import "@/lib/utils/zodCustomError";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { signInWithGoogle } from "@/lib/network/users/userQueries";

type dataProps = {
  email?: string;
  password?: string;
};

async function addData({ email, password }: dataProps) {
  console.log(email, password);
}

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string({
      required_error: "Password can not be empty.",
    })
    .regex(/^.{8,20}$/, {
      message: "Minimum 8 and maximum 20 characters.",
    })
    .regex(/(?=.*[A-Z])/, {
      message: "At least one uppercase character.",
    })
    .regex(/(?=.*[a-z])/, {
      message: "At least one lowercase character.",
    })
    .regex(/(?=.*\d)/, {
      message: "At least one digit.",
    }),
});

export default function FormLogin() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    addData(values);
  }

  function handleLoginWithGoogle() {
    signInWithGoogle();
  }

  return (
    <div className="mt-10 md:px-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-black"
        >
          <FormInput
            control={form.control}
            name="email"
            placeholder="Contoh: nobita@gmail.com"
            label="Email"
          />
          <PasswordField
            title="Password"
            name="password"
            placeholder="Masukkan kata sandi"
          />
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-black bg-black" />
              <label
                htmlFor="terms"
                className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me signed in
              </label>
            </div>
            <Link href={"/forgot-password"} className="text-xs text-[#737158]">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Button
              type="submit"
              className="h-12 w-full bg-background/90 font-monument text-xs text-white hover:bg-background disabled:opacity-60 md:text-lg"
            >
              Login
            </Button>
            <p className="text-center text-xs md:text-sm">
              Or use your google account
            </p>
          </div>
        </form>
        <Button
          type="submit"
          className="mt-2 h-12 w-full bg-transparent font-monument text-xs text-transparent/90 hover:bg-background disabled:opacity-60 md:text-lg"
          variant={"outline"}
          onClick={handleLoginWithGoogle}
        >
          <Image
            src={"/img/google-icon.png"}
            width={50}
            height={50}
            alt="google-icon"
            className="me-2 size-4 md:me-4 md:size-6"
          ></Image>
          Sign in with Google
        </Button>
        <p className="mt-2 text-center text-xs md:text-sm">
          Don't have an account?{" "}
          <Link href={"/registration"} className="text-[#737158]">
            Create an account
          </Link>
        </p>
      </Form>
    </div>
  );
}
