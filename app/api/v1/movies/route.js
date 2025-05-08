import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const movies = await db.collection("movies").find({}).limit(50).toArray();
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
};

// // import { MOVIES } from "@/lib/data";
// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//   try {
//     const movies = await db.collection("movies").find().limit(50).toArray();
//     // return NextResponse.json(MOVIES, { status: 200 });

//     return NextResponse.json(movies, { status: 200 });
//   } catch (error) {
//     console.log("Error fetching movies:", error);

//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// };
