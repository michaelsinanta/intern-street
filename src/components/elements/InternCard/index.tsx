import Image from "next/image";
import { InternProps } from "./interface";

export const InternCard: React.FC<{ intern: InternProps }> = ({ intern }) => {
  function isNewAccount(publishedTime: string) {
    const today = new Date();
    const publishedDate = new Date(publishedTime);
    const diffInDays =
      (today.getTime() - publishedDate.getTime()) / (1000 * 3600 * 24);
    return diffInDays <= 1; // Accounts published within the last day are considered new
  }

  return (
    <div className="relative rounded-md w-full bg-white p-2 hover:shadow-md hover:shadow-yellow-500	">
      {isNewAccount(intern.published_time) && (
        <div className="absolute bottom-0 right-0 z-10">
          <div className="box-0-0-1 ribbonNew-0-0-1242">
            <div className="box-0-0-1 centering-0-0-7">
              <svg viewBox="0 0 50 23" height="24" fill="#2E8A5C" stroke="">
                <path d="M2.82843 0H48C49.1046 0 50 0.89543 50 2V21C50 22.1046 49.1046 23 48 23H2.82843C1.04662 23 0.154284 20.8457 1.41421 19.5858L8.08579 12.9142C8.86683 12.1332 8.86683 10.8668 8.08579 10.0858L1.41421 3.41421C0.154284 2.15428 1.04662 0 2.82843 0Z"></path>
              </svg>
            </div>
            <p className="text-white font-semibold absolute top-0 left-0 ml-4 mt-1 text-xs">
              New!
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-row w-full">
        <div className="w-10 flex-shrink-0 mr-1">
          {intern.logo ? (
            <Image
              src={intern.logo}
              alt={intern.name}
              width={80}
              height={80}
              objectFit="cover"
            />
          ) : (
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
              objectFit="cover"
            />
          )}
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold text-md ">
            {intern.name}
          </h5>
          <div className=" text-sm">{intern.mitra_brand_name}</div>

          <div className=" text-xs">{intern.mitra_name}</div>

          <div className="flex flex-row items-center">
            <div className="flex items-center">
              <span className="text-xs">{intern.location}</span>
              <span className="mx-1">•</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs">{intern.credits_count} SKS</span>
              <span className="mx-1">•</span>
            </div>
            <div className="flex items-center">
              <span className="text-xs">{intern.months_duration} months</span>
            </div>
          </div>

          <div className="text-[10px]">
            {intern.participants_count} participants
          </div>

          <div className="text-[10px]">
            Published on:{" "}
            {new Date(intern.published_time).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};