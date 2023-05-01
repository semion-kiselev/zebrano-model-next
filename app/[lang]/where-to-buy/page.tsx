import "./where-to-buy.css";
import { Layout } from "@/components/layout/layout"
import { dictionary} from "@/lang/main"
import { langs, pageLinks } from "@/constants/main"

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
    <Layout
      lang={lang}
      title={dictionary.WHERE_TO_BUY_HEAD_TITLE[lang]}
      description={dictionary.WHERE_TO_BUY_HEAD_DESCRIPTION[lang]}
      pageName={pageLinks.whereToBuy}
      newsItems={[]}
    >
      <div className="red">{JSON.stringify(params)}</div>
    </Layout>
  );
};

export default WhereToBuy;
