interface MilestoneProps {
  title: string;
  time: string;
  content?: string;
}

export function Milestone({ title, time, content }: MilestoneProps) {
  return (
    <div id="milestone" className="first:mt-0 mt-10 text-center relative">
      <h4 className="text-3xl font-name">{title}</h4>
      <span className="block mt-3 text-prime font-time text-xl italic">
        {time}
      </span>
      {content && (
        <>
          <span className="mt-2 block">{content}</span>
          <div className="relative h-[70px]">
            <div className="after:content-[''] after:absolute after:h-[70px] after:w-px after:bg-[#ECE3DC] after:bottom-[-50%] after:-translate-y-1/4 after:-translate-x-2/4 after:left-2/4"></div>
          </div>
        </>
      )}
    </div>
  );
}
