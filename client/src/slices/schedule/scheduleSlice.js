/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initState = {
  schedule: [],
  status: null,
  error: null,
  isLoading: true,
};

export const getSchedule = createAsyncThunk(
  'schedule/getSchedule',
  async () => {
    try {
      const { data } = await axios.get('/schedule/get');

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createSchedule = createAsyncThunk(
  'schedule/createSchedule',
  async ({
    scheduleName, scheduleDate, scheduleTrainer, trainDay
  }) => {
    try {
      const { data } = await axios.post('/schedule/create', {
        scheduleItem: scheduleName,
        TrainTime: scheduleDate,
        trainer: scheduleTrainer,
        trainDay,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  'schedule/deleteSchedule',
  async (id) => {
    try {
      const { data } = await axios.post(`/schedule/delete/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const linkSchedule = createAsyncThunk(
  'schedule/linkSchedule',
  async ({ userId, scheduleId }) => {
    try {
      const { data } = await axios.post('/schedule/link', {
        userId,
        scheduleId,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateSchedule = createAsyncThunk(
  'schedule/updateSchedule',
  async ({
    scheduleId, scheduleItem, TrainTime, trainer, trainDay, user
  }) => {
    try {
      const { data } = await axios.post(`/schedule/update/${scheduleId}`, {
        scheduleId,
        scheduleItem,
        TrainTime,
        trainer,
        trainDay,
        user,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const removeUserFromSchedule = createAsyncThunk(
  'schedule/removeUserFromSchedule',
  async ({ userId, scheduleId }) => {
    try {
      const { data } = await axios.post(`/schedule/removeUser/${userId}`, {
        userId,
        scheduleId,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: initState,
  reducers: {},
  extraReducers: {
    [getSchedule.pending]: (state) => {
      state.isLoading = true;
    },
    [getSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.schedule = action.payload;
    },
    [getSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createSchedule.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [createSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [createSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.payload.message;
    },
    [deleteSchedule.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [deleteSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [deleteSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [linkSchedule.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [linkSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [linkSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateSchedule.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [updateSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [updateSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [removeUserFromSchedule.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [removeUserFromSchedule.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [removeUserFromSchedule.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default scheduleSlice.reducer;
