"use client";
import { useRouter } from "next/navigation";
import { footerName } from "../constants/commonWords";
export default function Footer({ lang }) {
  const router = useRouter();
  const currentYear = new Intl.DateTimeFormat("en", {
    year: "numeric",
  }).format(new Date());
  return (
    <div class="bg-white shadow bd1">
      <div class="mx-auto px-4 w-[95%] md:w-[95%] xl:w-[78%] p-4 md:py-8 ">
        <div class="md:flex sm:items-center justify-center  ">
          <ul class="flex gap-8 max-sm:gap-4 flex-wrap  items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 max-md:mt-5   ">
            <span class="block text-sm text-gray-900 sm:text-center max-sm:hidden ">
              © {currentYear}{" "}
              <a href="https://thewordcounter.online/" class="hover:underline">
                FBDownloaderr.net
              </a>
            </span>
            <li>
              <a
                class=" underline cursor-pointer"
                onClick={() => router.push("/about-us")}
              >
                {footerName?.[lang]?.op1 ?? footerName?.["en"]?.op1}
              </a>
            </li>
            <li>
              <a
                class="underline cursor-pointer"
                onClick={() => router.push("/terms-of-service")}
              >
                {footerName?.[lang]?.op2 ?? footerName?.["en"]?.op2}
              </a>
            </li>
            <li>
              <a
                class="underline cursor-pointer"
                onClick={() => router.push("/privacy-policy")}
              >
                {footerName?.[lang]?.op3 ?? footerName?.["en"]?.op3}
              </a>
            </li>

            <li>
              <a
                class="underline cursor-pointer"
                onClick={() => router.push("/contact")}
              >
                {footerName?.[lang]?.op4 ?? footerName?.["en"]?.op4}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
