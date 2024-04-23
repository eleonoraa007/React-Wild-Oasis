import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        //the 3 objects in CheckinBooking are '...breakfast'
        ...breakfast,
      }),

    //we receive data from the api updateBooking
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      //it will invalidate all the queries that are currently active
      // on the page
      queryClient.invalidateQueries;
      //navigate to the dashboard
      navigate("/");
    },
    onError: () => toast.error("There was an error while checkin in"),
  });
  return { checkin, isCheckingIn };
}
