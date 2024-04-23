import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    //we receive data from the api updateBooking
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out`);
      //it will invalidate all the queries that are currently active
      // on the page
      queryClient.invalidateQueries;
    },
    onError: () => toast.error("There was an error while checkin out"),
  });
  return { checkout, isCheckingOut };
}
