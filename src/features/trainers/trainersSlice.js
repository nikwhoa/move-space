import {createSlice, nanoid} from "@reduxjs/toolkit";
import Kelly from "./Kelly-Green.jpg";
import Sven from "./sven-mieke.jpg";
import James from "./James-Holmes.jpg";

const initialState = {
  trainers: [
    {
      id: nanoid(4),
      name: "James Holmes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellat ipsam sequi iure rerum voluptatem, dignissimos dolorem porro aliquid veritatis!",
      image: {
        src: Kelly,
        alt: "Kelly trainer",
        class: "img-fluid mb-5 img-square",
      },
      title: "Aerobatics Trainer",
    },
    {
      id: nanoid(4),
      name: "Sven Mieke",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellat ipsam sequi iure rerum voluptatem, dignissimos dolorem porro aliquid veritatis!",
      image: {
        src: Sven,
        alt: "Sven trainer",
        class: "img-fluid mb-5 img-square",
      },
      title: "Aerobatics Trainer",
    },
    {
      id: nanoid(4),
      name: "Sven Mieke",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellat ipsam sequi iure rerum voluptatem, dignissimos dolorem porro aliquid veritatis!",
      image: {
        src: Sven,
        alt: "Sven trainer",
        class: "img-fluid mb-5 img-square",
      },
      title: "Aerobatics Trainer",
    },
    {
      id: nanoid(4),
      name: "James Holmes",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellat ipsam sequi iure rerum voluptatem, dignissimos dolorem porro aliquid veritatis!",
      image: {
        src: James,
        alt: "James trainer",
        class: "img-fluid mb-5 img-square",
      },
      title: "Aerobatics Trainer",
    },
    {
      id: nanoid(4),
      name: "James Holmes",
      description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil repellat ipsam sequi iure rerum voluptatem, dignissimos dolorem porro aliquid veritatis!",
      image: {
        src: Kelly,
        alt: "Kelly trainer",
        class: "img-fluid mb-5 img-square",
      },
      title: "Aerobatics Trainer",
    },
  ],
  loadingTrainers: "idle",
};

export const trainersSlice = createSlice({
  name: 'trainers',
  initialState,
  reducers: {
    getTrainers: (state) => {
      state.loadingTrainers = "loading";
    },
  },
});

const { actions, reducer } = trainersSlice;

export default reducer;
export const { getTrainers } = actions;
