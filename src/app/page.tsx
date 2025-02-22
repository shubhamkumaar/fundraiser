"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import PieChartTotal from "@/components/pie-chart";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const [user, setUser] = React.useState(null);
  // React.useEffect(() => {
  //   setUser();
  // }, []);
  let userName = "Guest";
  let referal = "123456";
  let totalAmount = 1000;
  return (
    <>
      <div
        className="bg-fixed flex flex-col h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/dashboard.jpg)" }}
      >
        <div className="flex text-white items-center gap-2 h-16 px-4 bg-black bg-opacity-20">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                {/* <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink> */}
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator className="hidden md:block" /> */}
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Dashboard
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="bg-black bg-opacity-10  p-4 my-auto mx-24 rounded-xl">
          <h1 className="text-3xl text-gray-200 ">
            Hello <ColourfulText text={userName} />
          </h1>
          <p className="text-gray-200">
            Initial push is the toughest! Go through the learning modules, or
            reach out to your fundraising manager to level up
          </p>
        </div>
      </div>
      <div className="flex flex-row p-4">
        <div className="flex flex-col justify-center items-center align-middle text-center w-1/2">
          <PieChartTotal />
          <p className="mt-2">Goal Achieved {totalAmount}</p>
          <p>Total Goal 10000</p>

          <Button className="m-auto">
            <FontAwesomeIcon icon={faWhatsapp} />
            Share on Whatsapp
          </Button>
        </div>
        <div className="flex flex-col w-1/2 m-16 items-center">
          <h2 className="text-xl mb-2">Level Achieved : Star</h2>
          <Separator orientation="horizontal" className="h-2" />
          <div className="mt-8 flex flex-row gap-4">
            <Button>Rewards</Button>
            <Button>Copy Invite Link</Button>
          </div>
          <p className="italic my-4">Unlock ninja at 5000</p>
          <h2 className="text-xl">
            <span className="text-red-600">Time Left:</span> 5 Days to go
          </h2>
          <Separator
            orientation="horizontal"
            className="bg-[#E50046] h-2 my-4"
          />

          <h2 className="text-xl">
            <span className="text-red-600">Reference Code </span>
            {referal}
          </h2>
          <Button className="mt-4">Donate Here</Button>
        </div>
      </div>
    </>
  );
}
