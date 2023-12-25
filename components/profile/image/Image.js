import Image from 'next/image';

export default function ProfileImage(props) {
    return <div className="flex items-center justify-center">
            <Image src="/img_profile.webp" 
            alt=" Profile Image"
            width={200}
            height={200}
            className="inline-block h-40 w-40 rounded-full ring-2 ring-white "
            />
        </div>
  }