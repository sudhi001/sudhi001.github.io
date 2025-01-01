import Image from 'next/image';

export default function ProfileImage(props) {
    return (
        <div className="flex items-center justify-center mt-7 lg:items-end lg:justify-end lg:pr-14">
            <Image
                src="/profile.jpg"
                alt="Profile Image"
                width={200}
                height={200}
                className="inline-block h-40 w-40 rounded-full ring-2 ring-gray-500 dark:ring-white object-cover"
            />
        </div>
    );
}
