interface Course {
  term: string
  number: string
  meets: string
  title: string
}

interface CourseListProps {
  courses: Record<string, Course>
}

const CourseList = ({ courses }: CourseListProps) => (
  <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4 list-none">
    {Object.entries(courses).map(([id, course]) => (
      <li key={id} className="flex flex-col gap-1 border border-blue-700 rounded p-4">
        <span className="font-bold">{course.term} CS {course.number}</span>
        <span className="flex-1">{course.title}</span>
        <span className="text-sm text-gray-500">{course.meets}</span>
      </li>
    ))}
  </ul>
)

export default CourseList;