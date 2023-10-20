import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { brokenImage } from '../../../../pages/super-admin/vendor-management/vendor-details/[id]';
import StatusPill from '../StatusPill';
export const imageUrl =
  'https://media.istockphoto.com/id/1321856038/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?s=612x612&w=0&k=20&c=jP4pZTdV_7hHPMhFUaFNZSAbIDQAOUEcrMPMwSKFLqk=';

const VendorLists = ({ data }: any) => {
  const route = useRouter();
  return (
    <div
      className="border-b border-white-115 border-solid py-5 px-5 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 items-center text-gray-500 text-center text-sm cursor-pointer border-tcursor-pointer transition delay-100 hover:bg-white-200"
      onClick={() => route.push(`/super-admin/vendor-management/vendor-details/${data?.vendor_id}`)}
    >
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 mx-2 rounded-full overflow-hidden">
            <Image
              loader={() => data?.vendor_profile_pic[0] ?? brokenImage}
              src={data?.vendor_profile_pic[0] ?? brokenImage}
              alt="profile picture"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start text-left">
            <p className="text-base lg:text-lg font-bold text-black">{data?.vendor_name}</p>
            <p className="text-sm md:text-xs lg:text-sm max-w-[15vw] truncate">{data?.merchant_email}</p>
          </div>
        </div>
      </div>
      <p className="hidden md:block text-sm md:text-xs lg:text-sm">{data?.total_products}</p>
      <p className="hidden md:block text-sm md:text-xs lg:text-sm">{data?.total_products}</p>
      <p className="hidden md:block text-sm md:text-xs lg:text-sm">{data?.joined_date}</p>
      <div className="flex items-center justify-center">
        <StatusPill status={data?.vendor_status} />
      </div>
    </div>
  );
};
export default VendorLists;
