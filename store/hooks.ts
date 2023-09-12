import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreState } from "./index";

export const useAppDispatch:()=>AppDispatch = useDispatch

export const useAppSelector:TypedUseSelectorHook<StoreState> = useSelector
