import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  // Get the userId param from the URL.
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    // react will try to fetch data 3 times until it fails
    //that doesn't make any sense
    //not finding the data means that it doesn't exist in the first
    // place -> there is no point in re-trying
    retry: false,
  });
  return { isLoading, booking, error };
}
