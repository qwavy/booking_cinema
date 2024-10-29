import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {Movie} from "@/types/api/movies.ts";
import {fetchMovie} from "@/api/api.ts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function releaseDateToYear(releaseDate:string){
  return releaseDate.split("-")[0]
}


