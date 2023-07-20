export interface LinkProps {
  url: string;
}

export const initialProps: LinkProps = {
  url: "#",
};

export default function Link({ url }: LinkProps) {
  return (
    <a className="font-lato-bold text-blue underline hover:no-underline">
      {url ?? initialProps.url}
    </a>
  );
}
