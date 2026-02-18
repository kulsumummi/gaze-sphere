import axios from "axios";
import type { MovieResponse } from "@/types/movie";

const API_KEY = "a376e9d105f4d4f3f4d675bcafc5e57f";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
export const POSTER_BASE = "https://image.tmdb.org/t/p/w500";

const tmdb = axios.create({ baseURL: BASE_URL, params: { api_key: API_KEY } });

export const fetchTrending = () =>
  tmdb.get<MovieResponse>("/trending/movie/week").then((r) => r.data.results);

export const fetchTopRated = () =>
  tmdb.get<MovieResponse>("/movie/top_rated").then((r) => r.data.results);

export const fetchPopular = () =>
  tmdb.get<MovieResponse>("/movie/popular").then((r) => r.data.results);

export const fetchUpcoming = () =>
  tmdb.get<MovieResponse>("/movie/upcoming").then((r) => r.data.results);
