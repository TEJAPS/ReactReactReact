const initialData = {
  list: [],
};
// const[list,setList] = useState([]); - this is how we write in react, now we are trying to rewrite the same in redux
const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };
    default:
      return state;
  }
};

export default todoReducer;
