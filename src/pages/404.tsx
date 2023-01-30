import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);

  return (
    <div className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <Image
            src={"/missing.png"}
            alt={"Food Truck"}
            width={240}
            height={240}
          />
          <p className="text-2xl font-semibold md:text-3xl">
            אופס! הדף לא נמצא
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">אתם מועברים לדף הבית</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
