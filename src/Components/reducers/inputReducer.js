import { USER_INPUT_DATA } from "../actions/actions";

const initialState = {
  inputdata: []
};
const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INPUT_DATA:
            const filterData = action.allData.filter((data) => {
                if (action.data === "") return data;
                else if (
                  data.first_name.toLowerCase().includes(action.data) ||
                  data.last_name.toLowerCase().includes(action.data) ||
                  data.email.toLowerCase().includes(action.data)
                )
                  return data;
              })
            return{
                inputdata:filterData
            }
        default: return state
    }
};
export default inputReducer;
