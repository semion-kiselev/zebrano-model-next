import { dictionary } from "@/lang/main"
import { langs, pageLinks } from "@/constants/main"
import { Metadata } from "next";

export const generateMetadata = ({ params }: { params: { lang: string } }): Promise<Metadata> => Promise.resolve({
  title: dictionary.HOME_HEAD_TITLE[params.lang],
  description: dictionary.HOME_HEAD_DESCRIPTION[params.lang]
});

export const generateStaticParams = async () => {
  return langs.map((lang) => ({ lang }));
};

type Props = {
  params: {
    lang: string;
  }
};

const WhereToBuy = ({ params }: Props) => {
  const { lang } = params;
  return (
    <div className="red">Index {lang}</div>
  );
};

export default WhereToBuy;
