import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import NotificationButton from "../Notifications/NotificationButton";
const LoadingButtonDashboard = ({ isLoadingSubmit, isSuccessSubmit }) => {
  return (
    <>
      {isSuccessSubmit && <NotificationButton />}
      <LoadingButton
        type="submit"
        startIcon={<SaveIcon />}
        variant="outlined"
        loading={isLoadingSubmit}
        loadingPosition="start"
        style={{ color: "white", backgroundColor: "var(--banabi)" }}
      >
        Değişiklikleri Kaydet
      </LoadingButton>
    </>
  );
};

export default LoadingButtonDashboard;
