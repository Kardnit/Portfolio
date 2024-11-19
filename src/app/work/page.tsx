import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="rounded-base border-2 border-border bg-main p-4 shadow-light dark:border-darkBorder dark:shadow-dark sm:p-5"
              key={id}
            >
              <AspectRatio
                className="!-bottom-[2px] rounded-base border-2 border-border shadow-light dark:border-darkBorder dark:shadow-dark"
                ratio={71 / 26}
              >
                <img
                  className="w-full rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-5 font-base text-text">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
