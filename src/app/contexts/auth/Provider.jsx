// Import Dependencies
import { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./context";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "firebase/firebase"; // Adjust path if needed

// ----------------------------------------------------------------------

export const initialAuthState = {
  isAuthenticated: false,
  isLoading: false,
  isInitialized: false, // Maintains original variable
  user: null,
  errorMessage: null,
};

const reducerHandlers = {
  INITIALIZE: (state, action) => ({
    ...state,
    isAuthenticated: action.payload.isAuthenticated,
    isInitialized: true, // Preserving original variable name
    user: action.payload.user,
  }),

  LOGIN_REQUEST: (state) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),

  LOGIN_SUCCESS: (state, action) => ({
    ...state,
    isAuthenticated: true,
    isLoading: false,
    user: action.payload.user,
  }),

  LOGIN_ERROR: (state, action) => ({
    ...state,
    errorMessage: action.payload.errorMessage,
    isLoading: false,
  }),

  SIGNUP_REQUEST: (state) => ({
    ...state,
    isLoading: true,
    errorMessage: null,
  }),

  SIGNUP_SUCCESS: (state, action) => ({
    ...state,
    isAuthenticated: true,
    isLoading: false,
    user: action.payload.user,
  }),

  SIGNUP_ERROR: (state, action) => ({
    ...state,
    errorMessage: action.payload.errorMessage,
    isLoading: false,
  }),

  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

export const reducer = (state, action) => {
  const handler = reducerHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then(() => {
          dispatch({
            type: "INITIALIZE",
            payload: { isAuthenticated: true, user },
          });
        });
      } else {
        dispatch({
          type: "INITIALIZE",
          payload: { isAuthenticated: false, user: null },
        });
      }
    });
  
    return () => unsubscribe(); // Cleanup listener
  }, []);
  

  // 🔹 Login with Email and Password
  const login = async ({ email, password }) => {
    dispatch({ type: "LOGIN_REQUEST" });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      // Wait for Firebase to confirm authentication state
      await user.getIdToken(); // Ensures token is available
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: { errorMessage: err.message } });
    }
  };
  // 🔹 Signup with Email and Password
  const signup = async ({ email, password }) => {
    dispatch({ type: "SIGNUP_REQUEST" });

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: { user: userCredential.user },
      });
    } catch (err) {
      dispatch({
        type: "SIGNUP_ERROR",
        payload: { errorMessage: err.message },
      });
    }
  };
  // 🔹 Login with Google
  const loginWithGoogle = async () => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      dispatch({ type: "LOGIN_SUCCESS", payload: { user: result.user } });
    } catch (err) {
      dispatch({ type: "LOGIN_ERROR", payload: { errorMessage: err.message } });
    }
  };

  // 🔹 Logout
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" }); 
      // Force state update to reflect immediately
      dispatch({
        type: "INITIALIZE",
        payload: { isAuthenticated: false, user: null },
      });
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (!children) return null;

  return (
    <AuthContext
      value={{
        ...state,
        signup,
        login,
        logout,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
