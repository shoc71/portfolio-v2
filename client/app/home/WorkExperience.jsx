export default function WorkExperience({ jobs }) {
  return (
    <div className="bg-muted rounded-xl p-6 shadow-inner space-y-2">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2">
        Work Experience
      </h2>
      {jobs.map((job, i) => (
        <div key={i} className="space-y-1">
          <h3 className="font-semibold text-lg">
            {job.jobTitle}{" "}
            <span className="text-muted-foreground font-normal">
              @ {job.companyName}
            </span>
          </h3>
          <p className="text-sm text-muted-foreground italic">
            {job.startMonth} {job.startYear} -{" "}
            {job.current ? "Present" : `${job.endMonth} ${job.endYear}`}
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            {job.description.map((point, j) => (
              <li key={j}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
