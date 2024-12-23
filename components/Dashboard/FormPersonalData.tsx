"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormInput from "@/components/FormInput";
import "@/lib/utils/zodCustomError";

import { auth, db } from "@/lib/firebase";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import "@/lib/utils/zodCustomError";

import { getUserById, updateUser } from "@/lib/network/users/userQueries";
import useAuthOrNullRedirect from "@/hooks/useAuthOrNullRedirect";

const phoneRegex = new RegExp(
  /^(0|62|\+62)(8[1-35-9]\d{7,10}|2[124]\d{7,8}|619\d{8}|2(?:1(?:14|500)|2\d{3})\d{3}|61\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\d{5,8})/,
);

const formSchema = z.object({
  name: z.string().min(1).max(50),
  college: z.string().min(1).max(50),
  student_id: z.string().min(1).max(50),
  phone_number: z.string().regex(phoneRegex, "Nomor Salah"),
  gender: z.enum(["male", "female"]),
  instagram: z.string().min(2),
});

export default function FormPersonalData() {
  const user = useAuthOrNullRedirect(false);
  const userId = user?.uid ?? "";

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      college: "",
      student_id: "",
      phone_number: "",
      gender: "male",
      instagram: "",
    },
  });

  useEffect(() => {
    async function fetchUserData() {
      
      const userData = await getUserById(userId);
      if (userData) {
        form.reset({
          name: userData.name,
          college: userData.college,
          student_id: userData.student_id,
          phone_number: userData.phone_number,
          gender: userData.gender === "female" ? "female" : "male",
          instagram: userData.instagram,
        });
      }
    }
    fetchUserData();
  }, [userId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const userUpdated = await updateUser(userId, values);

      if (userUpdated) {
        toast.success("Data berhasil diperbarui!");
        // console.log("User details updated successfully");
      } else {
        toast.error("Gagal memperbarui data!");
      }
      setLoading(false);
    } catch (error) {
      toast.error("Terjadi kesalahan saat memperbarui data!");
      // console.error("Error updating user details:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 space-y-6 font-poppins text-black md:px-8"
      >
        <FormInput
          control={form.control}
          name="name"
          placeholder="Contoh: Nobita"
          label="Name"
        />
        <FormInput
          control={form.control}
          name="college"
          placeholder="Contoh: Universitas Sriwijaya"
          label="Institution"
        />
        <FormInput
          label="Student ID"
          name="student_id"
          placeholder="Contoh: 090233765456"
          control={form.control}
        />
        <FormInput
          control={form.control}
          name="phone_number"
          placeholder="Contoh: 08976553287"
          label="Phone Number"
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-monument text-lg text-black lg:text-xl">
                Gender
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex items-center gap-2"
                >
                  <FormItem className="flex items-center gap-1">
                    <FormControl>
                      <RadioGroupItem
                        value="male"
                        className="mt-1 border-2 border-[#868365]"
                      />
                    </FormControl>
                    <FormLabel className="font-monument text-lg lg:text-xl">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-1">
                    <FormControl>
                      <RadioGroupItem
                        value="female"
                        className="mt-1 border-2 border-[#868365]"
                      />
                    </FormControl>
                    <FormLabel className="font-monument text-lg lg:text-xl">
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormInput
          control={form.control}
          name="instagram"
          placeholder="Contoh: nobita_"
          label="Instagram"
        />
        <Button
          type="submit"
          className="mt-6 h-12 w-full bg-background/90 font-monument text-lg text-white hover:bg-background disabled:opacity-60 lg:mt-10"
        >
          {loading ? <div className="spinner"></div> : "Save"}
        </Button>
      </form>
    </Form>
  );
}
