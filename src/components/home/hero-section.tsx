import { Button } from "@/components/ui/button";
import { Rocket, Star } from "lucide-react";
import Image from "next/image";

export default function HomeHeroSection() {
  return (
    <section className="pt-10 lg:pt-24  bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex px-2 py-1 justify-center items-center gap-2 rounded-xl bg-accent-100 text-accent-700 w-fit">
              <Rocket className="w-4 h-4" />
              <p className="text-xs font-medium">Boost your Career</p>
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-[600px] ">
                Find Your Path.{" "}
                <span className="text-primary-600">Shape Your Future.</span>
              </h1>
              <p className="text-sm font-no text-gray-700 max-w-lg">
                At Bright Arc, we guide you with expert mentorship, personalized
                career counseling, and insights that spark growth — helping you
                take confident steps toward a brighter tomorrow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:space-x-4">
              <Button
                size="lg"
                className="bg-primary-900 hover:bg-primary-900/90 text-white"
                // onClick={}
              >
                Get Started
              </Button>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <div className="flex -space-x-2">
                    <Image
                      src="/ava9.jpeg"
                      alt="User 1"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/ava3.jpeg"
                      alt="User 2"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/ava5.jpeg"
                      alt="User 3"
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-secondary-400 text-secondary-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.8</span>
                  </div>

                  <span className="text-xs text-gray-500">
                    <span className="font-medium text-gray-900">700+</span>{" "}
                    Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3-Card Carousel */}
          <div className="flex items-center justify-center">
            <div className="relative w-[306px] h-[432px] lg:w-[320px] lg:h-[500px]">
              <Image
                src="/two_hands.jpeg"
                alt="Helping Hands"
                fill
                className="rounded-full object-cover"
              />

              {/* Badges */}
              <div className="inline-flex p-1 lg:p-2 items-center justify-center lg:gap-2 absolute top-6 -left-4 lg:-left-14 bg-primary-50 border border-primary-100 shadow-[0px_0px_4px_0px_rgba(0, 0, 0, 0.10)] rounded-xl text-xs font-medium text-blue-700">
                <div className="relative w-3 h-3 lg:w-6 lg:h-6">
                  <Image src="/carrer_icon.png" alt="Career Counselling" fill />
                </div>
                <p className="text-primary-500 text-xs not-italic font-medium leading-[140%]">
                  Career Counselling
                </p>
              </div>
              <div className="inline-flex p-1 lg:p-2 items-center justify-center gap-1 lg:gap-2 text-primary-500 text-xs not-italic font-medium leading-[140%] absolute top-24  -right-4 lg:-right-14 bg-primary-50 border border-primary-100 shadow-[0px_0px_4px_0px_rgba(0, 0, 0, 0.10)] rounded-md text-xs font-medium text-blue-700">
                <div className="relative w-3 h-3 lg:w-6 lg:h-6">
                  <Image src="/assistance_icon.png" alt="" fill />
                </div>
                <p>Get 1:1 Live Session</p>
              </div>
              <div className="inline-flex flex-col items-start gap-2.5 p-1.5 lg:p-3 absolute bottom-16 -left-4 lg:bottom-14 lg:-left-[80px] bg-white/90 border border-primary-100 shadow-[0px_0px_4px_0px_rgba(0, 0, 0, 0.20)] rounded-md text-xs font-medium text-blue-700">
                <div className="relative w-6 h-9 lg:w-[50px] lg:h-[75px]">
                  <Image src="/success_icon.png" alt="success" fill />
                </div>
                <p className="flex flex-col text-xs not-italic font-medium  text-gray-700 leading-[140%]">
                  Achieve Success with <span> Flying Colors</span>
                </p>
                <div className="flex flex-nowrap justify-center gap-1.5 w-full">
                  <div className="h-3 rounded-full bg-gray-200 lg:flex-1 min-w-[45px]" />
                  <div className="h-3 rounded-full bg-gray-200 lg:flex-1 min-w-[15px] lg:min-w-[45px]" />
                  <div className="h-3 rounded-full bg-gray-200 lg:flex-1 min-w-[45px]" />
                </div>

                <div className="hidden sm:flex justify-center gap-2 w-full">
                  <div className="h-3 rounded-full bg-gray-200 flex-1 min-w-[89px]" />
                  <div className="h-3 rounded-full bg-gray-200 flex-1 min-w-[32px]" />
                  <div className="h-3 rounded-full bg-gray-200 flex-1 min-w-[32px]" />
                </div>
              </div>
              <div className="inline-flex p-1 lg:p-2 items-center justify-center gap-1 lg:gap-2 text-primary-500 text-xs not-italic font-medium leading-[140%] absolute bottom-6 lg:bottom-[114px] -right-4  lg:-right-[88px] bg-primary-50 border border-primary-100 shadow-[0px_0px_4px_0px_rgba(0, 0, 0, 0.10)] rounded-md text-xs font-medium text-blue-700">
                <div className="relative w-3 h-3 lg:w-6 lg:h-6">
                  <Image src="/leader_icon.png" alt="leader" fill />
                </div>
                <p>Enjoy Complete Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
