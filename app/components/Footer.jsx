"use client";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter();
  const currentYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(new Date());
  return (
    <div class="bg-white shadow bd1">
      <div class="mx-auto px-4 w-[95%] md:w-[95%] xl:w-[78%] p-4 md:py-8 ">
        <div class="md:flex sm:items-center sm:justify-between gap-[40px]">
          <div className="md:w-[70%]  w-[100%]">
            <a
              class="flex items-center mb-4 sm:mb-0 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src={"/images/logo.svg"}
                class="h-8 mr-3 w-[50px] h-[50px]"
                alt="wordcounter logo"
              />
              <a className="text-[18px] font-bold">Word Counter</a>
            </a>

            <h2 className="font-[600] text-[13px] pl-[60px] pt-2 max-md:pl-[0px]">
              ABOUT
            </h2>
            <p className="pl-[60px] pt-2 text-[14px] text-medium text-gray-900 max-md:pl-[0px]">
              Word Counter is a user-friendly web tool for counting words,
              characters, and pages, as well as checking grammar, spelling, and
              keyword density. At Nothing, we are committed to building
              exceptional digital products accessible to all. Contact us for
              more information.
            </p>
          </div>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 max-md:mt-5 max-md:pl-[60px]  max-md:pl-[0px]">
            <li>
              <p
                class="mr-4 underline md:mr-6 cursor-pointer"
                onClick={() => router.push("/privacy-policy")}
              >
                Privacy Policy
              </p>
            </li>
            <li>
              <p
                class="mr-4 underline md:mr-6 cursor-pointer"
                onClick={() => router.push("/faqs")}
              >
                FAQ
              </p>
            </li>
            <li>
              <p
                class="mr-4  underline md:mr-6 cursor-pointer"
                onClick={() => router.push("/grammar")}
              >
                Grammar
              </p>
            </li>
            <li>
              <p
                class=" underline cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                Contact
              </p>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto   lg:my-8" />
        <span class="block text-sm text-gray-900 sm:text-center  ">
          © {currentYear}{" "}
          <a href="https://thewordcounter.online/" class="hover:underline">
            Wordcounter
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
