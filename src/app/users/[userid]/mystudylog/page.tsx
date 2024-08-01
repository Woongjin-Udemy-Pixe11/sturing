import StudyLog from '../_pages/StudyLog';

type TmystudyLog = {
  params: {
    userid: string;
  };
};

export default function page(props: TmystudyLog) {
  const { params } = props;
  const id = params.userid;
  return <StudyLog id={id} />;
}
