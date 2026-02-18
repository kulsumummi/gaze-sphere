import { useQuery } from "@tanstack/react-query";
import { fetchTrending, fetchTopRated, fetchPopular, fetchUpcoming } from "@/services/tmdb";

export const useTrending = () =>
  useQuery({ queryKey: ["trending"], queryFn: fetchTrending, staleTime: 1000 * 60 * 10 });

export const useTopRated = () =>
  useQuery({ queryKey: ["topRated"], queryFn: fetchTopRated, staleTime: 1000 * 60 * 10 });

export const usePopular = () =>
  useQuery({ queryKey: ["popular"], queryFn: fetchPopular, staleTime: 1000 * 60 * 10 });

export const useUpcoming = () =>
  useQuery({ queryKey: ["upcoming"], queryFn: fetchUpcoming, staleTime: 1000 * 60 * 10 });
