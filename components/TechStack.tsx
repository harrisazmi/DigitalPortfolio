import Image from "next/image";

export type TechTool = {
  name: string;
  path: string;
};

interface TechStackProps {
  techStackTool: TechTool[];
  title: string;
}

export default function TechStack({ techStackTool, title }: TechStackProps) {
  return (
    <>
      <h2 className="font-semibold text-2xl pt-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {techStackTool.map((tool) => (
          <li
            key={tool.name}
            className="bg-gray-110 max-w-[300px] mx-auto rounded-lg flex items-center text-black w-full"
          >
            <div className="p-4">
              <Image
                src={tool.path}
                alt={tool.name}
                width={60}
                height={60}
                quality={100}
                className="rounded-lg"
              />
            </div>
            {tool.name}
          </li>
        ))}
      </div>
    </>
  );
}
