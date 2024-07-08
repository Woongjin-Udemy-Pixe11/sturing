import connectDB from '@/lib/db';
import { Bookmark } from '@/lib/schemas/bookmarkSchema';
import { Study } from '@/lib/schemas/studySchema';

//TODO: 북마크 코드짜기
//TODO: 홈에서 가져왔을때 북마크 되있으면 북마크가 되어있는채로 보여줘야됨.
//TODO: 북마크 여부 스키마에 추가.
//TODO:북마크 ID
//TODO:리스트에서 쿼리로쓰는건 대문자들어가면안됨
export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    let bookmarks: any = await Bookmark.find({ userid: `${id}` });
    //TODO: Promise All 체크하는거 꼭 알고넘어가기
    let studyList: any[] = await Promise.all(
      bookmarks.map(async (bookmark: any) => {
        let bookmarkid = bookmark._doc.targetId;
        let data = await Study.findOne({
          _id: bookmarkid,
        });
        return data;
      }),
    );

    return new Response(JSON.stringify(studyList), {
      headers: { 'Content-Type': 'application/json' },
    });
    //해당 유저 id북마크 전부 가져오기
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
