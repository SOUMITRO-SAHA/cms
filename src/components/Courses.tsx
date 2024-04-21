'use client';

import { Course } from '@prisma/client';
import { CourseCard } from './CourseCard';
import { useRouter } from 'next/navigation';

export const Courses = ({ courses }: { courses: Course[] }) => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center w-full">
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-5 px-6 py-6 mx-auto cursor-pointer md:grid-cols-3 sm:grid-cols-2">
        {courses?.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => {
              router.push(`/courses/${course.id}`);
            }}
          />
        ))}
      </div>
    </section>
  );
};
