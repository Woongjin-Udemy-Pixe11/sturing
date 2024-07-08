export type TStudyLocationType = 'online' | 'offline' | null;

export type TStudyInfoFormProps = {
  onStudyInfoSubmit: (data: {
    image: File | null;
    title: string;
    content: string;
    locationType: TStudyLocationType;
    location: string;
    isPostponed: boolean;
  }) => void;
};
