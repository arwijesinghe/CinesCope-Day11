import React from "react";
import { Button } from "@/components/ui/button";
import MoviesList from "./movies-list";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FeaturedMovies() {
  return (
    <section id="featured" className="container px-4 py-12 md:px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Movies</h2>
          <p className="text-muted-foreground">
            Explore the latest and greatest movies that are making waves in the
            cinema world.
          </p>
        </div>

        <Button variant="outline">View All</Button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="text-primary/20 absolute left-3 top-1/2 h-4 w-4-translate-y-1/2" />
          <Input
            placeholder="Search Movies Here By Title Or Director"
            className="border-primary/20 pl-9"
          />
        </div>
      </div>
      <MoviesList />
    </section>
  );
}
