import react,{createContext,useReducer} from 'react'

export const DataContext = createContext()

export const Dataprovider = ({ reducer, initialstate, children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
//   console.log(state);
  return (
    // <DataContext.Provider value={{ state, dispatch }}>
    //   {children}
    // </DataContext.Provider>
      <DataContext.Provider value={useReducer(reducer,initialstate)}>
      {children}
    </DataContext.Provider>
  );
};
// export const useDataContext = () => useContext(DataContext);