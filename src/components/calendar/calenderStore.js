import { create } from "zustand";
import { devtools } from "zustand/middleware";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const store = (set) => ({
  selectedDay: dayjs(),
  setSelectedDay: (value) => set({ selectedDay: value }),
});

export const calendarStore = create(devtools(store, { name: "calendarStore" }));
