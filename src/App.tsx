import Banner from './components/Banner'
import CourseList from './components/CourseList'
import type { Course } from './types/Course'
import { useJsonQuery } from './utilities/useJsonQuery'

interface Schedule {
  title: string
  courses: Record<string, Course>
}

const App = () => {
  const [schedule, loading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php')

  if (loading) return <p className="text-center p-8">Loading...</p>
  if (error) return <p className="text-center p-8 text-red-500">{error.message}</p>

  const { title, courses } = schedule as Schedule

  return (
    <>
      <Banner title={title} />
      <CourseList courses={courses} />
    </>
  )
}

export default App
