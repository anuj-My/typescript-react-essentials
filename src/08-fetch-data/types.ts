import axios from "axios";
import { z } from "zod";

const url = "https://www.course-api.com/react-tours-project";

export const tourSchema = z.object({
  id: z.string(),
  image: z.string(),
  info: z.string(),
  name: z.string(),
  price: z.string(),
  some: z.string(),
});

export type Tour = z.infer<typeof tourSchema>;

export const fetchTours = async (): Promise<Tour[]> => {
  const res = await axios.get<Tour[]>(url);
  const result = tourSchema.array().safeParse(res.data);

  if (!result.success) {
    console.log(result.error.message);
    throw new Error("Faild to parse tours");
  }

  return result.data;
};
