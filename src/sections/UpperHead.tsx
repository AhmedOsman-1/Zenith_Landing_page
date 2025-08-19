import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; // Heroicons


const UpperHead = () => {
    return (
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
            <p className="text-white/60 hidden md:block">
                Streamline your workflow and boost your productivity
            </p>
            <Link href="/pricing" className="inline-flex gap-1 items-center cursor-pointer hover:text-white transition-colors duration-200">
                <p>Get started for free</p>
                <FaArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </Link>
        </div>
    );
};

export default UpperHead;
