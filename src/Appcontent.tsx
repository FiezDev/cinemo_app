import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Root from "./routes";
import { initializeState, setLoading } from "./store/usersSlice";

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(initializeState());
  }, [dispatch]);

  return <Root />;
}

export default AppContent;
