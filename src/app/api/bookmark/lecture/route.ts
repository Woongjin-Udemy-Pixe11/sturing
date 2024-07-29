import connectDB from '@/lib/db';
import { Bookmark } from '@/lib/schemas/bookmarkSchema';
import { Lecture } from '@/lib/schemas/lectureSchema';
import { TBookmark } from '@/types/TBookmark';
import { TLectureDetail } from '@/types/TLecture';

export async function GET(req: Request) {
  connectDB();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    let bookmarks: TBookmark[] = await Bookmark.find({
      userId: `${id}`,
      checked: true,
    });
    //TODO: Promise All 체크하는거 꼭 알고넘어가기
    let lectureList: TLectureDetail[] = await Promise.all(
      bookmarks.map(async (bookmark: TBookmark) => {
        let bookmarkid = bookmark.targetId;
        let data = await Lecture.findOne({
          _id: bookmarkid,
        });
        return data;
      }),
    );

    return new Response(JSON.stringify(lectureList), {
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
