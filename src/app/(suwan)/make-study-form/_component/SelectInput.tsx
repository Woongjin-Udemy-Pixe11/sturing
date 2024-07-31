type TSelectInputProps = {
  type: 'time' | 'date';
  onChange: (value: string) => void;
  value: string;
  checked?: boolean;
};

export default function SelectInput(props: TSelectInputProps) {
  const { type, onChange, value, checked } = props;
  return (
    <>
      {type === 'time' ? (
        <select
          name="time-zones"
          id="time-zones"
          // defaultValue=""
          value={checked ? '' : value}
          onChange={(e) => onChange(e.target.value)}
          disabled={checked}
          className={`flex-1 select-arrow border-gray-300 border py-[1.3rem] pl-[1rem] pr-[2rem] rounded-md w-full bg-white ${
            checked && 'bg-gray-200 text-gray-600'
          }`}
        >
          <option selected disabled value="">
            시간을 선택해주세요
          </option>
          <option value="오전 12:00">오전 12:00</option>
          <option value="오전 01:00">오전 1:00</option>
          <option value="오전 02:00">오전 2:00</option>
          <option value="오전 03:00">오전 3:00</option>
          <option value="오전 04:00">오전 4:00</option>
          <option value="오전 05:00">오전 5:00</option>
          <option value="오전 06:00">오전 6:00</option>
          <option value="오전 07:00">오전 7:00</option>
          <option value="오전 08:00">오전 8:00</option>
          <option value="오전 09:00">오전 9:00</option>
          <option value="오전 10:00">오전 10:00</option>
          <option value="오전 11:00">오전 11:00</option>
          <option value="오후 12:00">오후 12:00</option>
          <option value="오후 13:00">오후 1:00</option>
          <option value="오후 14:00">오후 2:00</option>
          <option value="오후 15:00">오후 3:00</option>
          <option value="오후 16:00">오후 4:00</option>
          <option value="오후 17:00">오후 5:00</option>
          <option value="오후 18:00">오후 6:00</option>
          <option value="오후 19:00">오후 7:00</option>
          <option value="오후 20:00">오후 8:00</option>
          <option value="오후 21:00">오후 9:00</option>
          <option value="오후 22:00">오후 10:00</option>
          <option value="오후 23:00">오후 11:00</option>
        </select>
      ) : (
        <select
          name="days-of-the-week"
          id="days-of-the-week"
          // defaultValue=""
          value={checked ? '' : value}
          onChange={(e) => onChange(e.target.value)}
          disabled={checked}
          className={`flex-1 select-arrow border-gray-300 border py-[1rem] pl-[1rem] pr-[2rem] rounded-md bg-white ${
            checked && 'bg-gray-200 text-gray-600'
          }`}
        >
          <option selected disabled value="">
            요일을 선택해주세요
          </option>
          <option value="월요일">월요일</option>
          <option value="화요일">화요일</option>
          <option value="수요일">수요일</option>
          <option value="목요일">목요일</option>
          <option value="금요일">금요일</option>
          <option value="토요일">토요일</option>
          <option value="일요일">일요일</option>
        </select>
      )}
    </>
  );
}
