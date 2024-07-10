export type TStudyType = '온라인' | '오프라인' | null;

export type TStudyInfoFormProps = {
  onStudyInfoSubmit: (data: {
    image: File | null;
    title: string;
    content: string;
    locationType: TStudyType;
    location: string;
    isPostponed: boolean;
  }) => void;
};
