import courseData from "../data/music_courses.json";
import Link from "next/link";
const FeaturedCourses = () => {
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div>2</div>
        <div className="mt-20 text-center">
            <Link href={"/courses"} 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses