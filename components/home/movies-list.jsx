import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getMovies } from "@/actions/movies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function MoviesList() {
  const movies = await getMovies();
  if (!movies) {
    return <div>Not Movies Found!</div>;
  }

  console.log("Movies: ", movies);
  return (
    <div className="space-y-6">
      <div className="border-primary/20 bg-card shadow-xs rounded-lg border p-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie, index) => {
            // if (!movie.poster == null) {
            return (
              <div key={`${movie.id}-${index}`} className="">
                <Link href={`/movies/${movie.id}`}>
                  <Card className="border-primary/20 hover:border-primary/50 overflow-hidden py-0 transition-colors">
                    <div className="aspect-2/3 w-full overflow-hidden">
                      <Image
                        width={300}
                        height={450}
                        src={movie.poster || "./placeholder.svg"}
                        alt={movie.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        priority
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="line-clamp-1 font-semibold">
                        {movie.title}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {movie.year} / {movie.runtime}Min.
                      </p>

                      <div className="mt-2 flex flex-wrap gap-1">
                        {movie.genres.slice(0, 2).map((genre, index) => {
                          return (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-primary/30 bg-primary/5 text-xs"
                            >
                              {genre}
                            </Badge>
                          );
                        })}

                        {movie.genres?.length > 2 && (
                          <Badge
                            variant="outline"
                            key={index}
                            className="border-primary/30 bg-primary/5 text-xs"
                          >
                            +{movie.genres.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <div className="flex item-center">
                        <span className="text-primary text-sm font-medium">
                          {movie.imdb?.rating}/10
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hover:text-primary"
                      >
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            );
            // }
          })}
        </div>
      </div>
    </div>
  );
}
