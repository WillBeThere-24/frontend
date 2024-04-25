import toast from "react-hot-toast";


const showToast = {
   message: (message)=> {
      toast.remove()
      toast.message(message);
   },
   success: (message)=> {
      toast.remove()
      toast.success(message);
   },
   error: (message)=> {
      toast.remove()
      toast.error(message);
   },
   loading: (message)=> {
      toast.remove()
      toast.loading(message);
   }
}

export default showToast;