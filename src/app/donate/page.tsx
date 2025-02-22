"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Donate() {
  const [donater, setDonater] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    referal: "",
    amount: 0,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if(donater.firstname === "" || donater.number === "" || donater.amount === 0) {
      alert("Please fill the required fields");
      return;
    }
    if(donater.number.length !== 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    if(donater.amount < 0) {
      alert("Please enter a valid amount");
      return;
    }

    e.preventDefault();
    console.log("Form submitted", donater);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonater({
      ...donater,
      [e.target.id]: e.target.value, // Update the corresponding field
    });
  };
  return (
    <div>
      <div className="flex items-center gap-2 h-16 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage className="">Donate</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-1/2 mt-8 mx-auto">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Donate to BKP Foundation
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Your donation will help us to provide food, shelter and education to
          the children in need. Thank you for your support.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name <span className="text-red-500">*</span></Label>
              <Input
                id="firstname"
                onChange={handleChange}
                placeholder="Shubham"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                onChange={handleChange}
                placeholder="Kumar"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              onChange={handleChange}
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="number">Mobile Number <span className="text-red-500">*</span></Label>
            <Input
              id="number"
              onChange={handleChange}
              placeholder="9876543210"
              type="number"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="referal">Referal Code</Label>
            <Input
              id="referal"
              onChange={handleChange}
              placeholder="ref-68494"
              type="text"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="amount">Enter Amount <span className="text-red-500">*</span></Label>
            <Input
              id="amount"
              onChange={handleChange}
              placeholder="1000"
              type="number"
            />
          </LabelInputContainer>
          <button
            className="mt-8 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Pay now &rarr;
            <BottomGradient />
          </button>
        </form>
        <p><span className="text-red-500">*</span> Compulsory to Fill</p>
      </div>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
