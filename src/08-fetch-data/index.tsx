import { useState, useEffect } from "react";
const url = "https://www.course-api.com/react-tours-project";
import { type Tour, tourSchema } from "./types";
import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;

// ? withou axios and tanstack query

// import { useState, useEffect } from "react";
// const url = "https://www.course-api.com/react-tours-project";
// import { type Tour, tourSchema } from "./types";

// function Component() {
//   // tours
//   const [tours, setTours] = useState<Tour[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error("Failed to fetch tours...");
//         }
//         const rawData: Tour[] = await res.json();
//         const result = tourSchema.array().safeParse(rawData);

//         if (!result.success) {
//           console.log(result.error.message);
//           throw new Error("Faild to parse tours");
//         }
//         setTours(result.data);
//       } catch (error) {
//         const message =
//           error instanceof Error ? error.message : "There was an Error...";
//         setIsError(message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <h3>Loading...</h3>;
//   }

//   if (isError) {
//     return <h3>Error {isError}</h3>;
//   }
//   return (
//     <div>
//       <h2 className="mb-1">Tours</h2>
//       {tours.map((tour) => {
//         return (
//           <p key={tour.id} className="mb-1">
//             {tour.name}
//           </p>
//         );
//       })}
//     </div>
//   );
// }
// export default Component;
